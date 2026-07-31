import { defineStore } from 'pinia'
import { createResource } from 'frappe-ui'
import { sessionStore } from './session'
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'

export const usersStore = defineStore('crm-users', () => {
  const session = sessionStore()

  let usersByName = reactive({})
  let employeesByUserId = reactive({})
  const router = useRouter()

  const users = createResource({
    url: 'crm.api.session.get_users',
//     url: 'crm.api.session.get_company_employees',
//     cache: 'crm-users',
    initialData: [],
    auto: true,
//     transform([allUsers, crmUsers]) {
//       const excluded = ['admin@tecc1.com', 'brg@modern-bd.com', 'Guest']
// //       const filteredUsers = allUsers.filter(
// //         user => !excluded.includes(user.name)
// //       )
      
//       const filteredUsers = allUsers.filter(
//         user => user && user.name && !excluded.includes(user.name)
//       );

//       for (let user of filteredUsers) {
//         usersByName[user.name] = user
//         if (user.name !== 'Administrator') {
//           usersByName[user.email] = user
//         }
//       }

//       return {
//         allUsers: filteredUsers,
//         crmUsers
//       }
//     },

    transform(data) {
      // Handle case where data might not be in expected format
      if (!data || !Array.isArray(data)) {
        console.warn('Users data not in expected format:', data)
        return { allUsers: [], crmUsers: [] }
      }
      
      const [allUsers, crmUsers] = data
      
      // Safety check for allUsers
      if (!Array.isArray(allUsers)) {
        console.warn('allUsers is not an array:', allUsers)
        return { allUsers: [], crmUsers: crmUsers || [] }
      }
      
      for (let user of allUsers) {
        usersByName[user.name] = user
        if(user.name === 'admin@tecc1.com' || user.name === 'brg@modern-bd.com'){
           continue;
        }
        console.log('ALL USERS:', user);
        if (user.name !== 'Administrator') {
          usersByName[user.email] = user
        }
      }
      return { allUsers, crmUsers }
    },
    onError(error) {
      if (error && error.exc_type === 'AuthenticationError') {
        router.push('/login')
      }
    },
  })
  
  
//   frappe.call({
//     method: "crm.api.session.get_users",
//     callback(r) {
//       console.log("🚀 Users from backend:", r.message[0]);
//       console.log("🚀 CRM Users:", r.message[1]);
//     }
//   });

  // Fetch employees from same company using backend API (bypasses user permissions)
  const employees = createResource({
    url: 'crm.api.session.get_company_employees',
    initialData: [],
    auto: true,
    onSuccess(data) {
      // console.log('[USERS.JS] onSuccess - API returned:', data?.length, 'employees', data)
    },
    onError(error) {
      // console.error('[USERS.JS] onError - API error:', error)
    },
    transform(data) {
      // console.log('[USERS.JS] transform - received data:', data?.length, 'employees', data)
      // Clear and repopulate
      Object.keys(employeesByUserId).forEach(key => delete employeesByUserId[key])
      for (let emp of data) {
        if (emp.user_id) {
          employeesByUserId[emp.user_id] = emp
        }
      }
      // console.log('[USERS.JS] transform - after processing, employees.data will be:', data.length)
      return data
    },
  })

  // Get users filtered by the same company as current user (based on Employee records)
  function getCompanyUsers() {
    // employees.data already contains only employees from the same company
    const companyEmployees = employees.data || []
    
    // console.log('getCompanyUsers - employees count:', companyEmployees.length)
    
    return companyEmployees
      .filter(emp => emp.user_id)
      .map(emp => ({
        name: emp.user_id,
        email: emp.user_id,
        full_name: emp.employee_name,
        user_image: emp.image,
        designation: emp.designation,
        company: emp.company,
      }))
  }

//   function getUser(email) {
//     if (!email || email === 'sessionUser') {
//       email = session.user
//     }
//     if (!usersByName[email]) {
//       usersByName[email] = {
//         name: email,
//         email: email,
//         full_name: email.split('@')[0],
//         first_name: email.split('@')[0],
//         last_name: '',
//         user_image: null,
//         role: null,
//       }
//     }
//     return usersByName[email]
//   }
  
  function getUser(email) {
    if (!email || email === 'sessionUser') {
      email = session.user
    }

    // If user exists in store, return it
    if (usersByName[email]) {
      return usersByName[email]
    }

    // Create a minimal fallback user object based on email
    const nameParts = email.split('@')[0].split('.')
    const firstName = nameParts[0] || email
    const lastName = nameParts[1] || ''
    
    return {
      name: email,
      email: email,
      full_name: firstName.charAt(0).toUpperCase() + firstName.slice(1) + (lastName ? ' ' + lastName.charAt(0).toUpperCase() + lastName.slice(1) : ''),
      first_name: firstName.charAt(0).toUpperCase() + firstName.slice(1),
      last_name: lastName ? lastName.charAt(0).toUpperCase() + lastName.slice(1) : '',
      user_image: null,
      role: null,
    }
  }

  function isAdmin(email) {
      const user = getUser(email);
      if (!user) return false;
    return user.role === 'System Manager'
  }

  function isDirector(email) {
      const user = getUser(email);
      if (!user) return false;
    return user.role === 'Director' || isAdmin(email)
  }

  function isManager(email) {
      const user = getUser(email);
      if (!user) return false;
      return user.role === 'Sales Manager' || isAdmin(email);
//     return getUser(email).role === 'Sales Manager' || isAdmin(email)
  }

  function isSalesUser(email) {
      const user = getUser(email);
      if (!user) return false;
    return user.role === 'Sales User'
  }

  function isTelephonyAgent(email) {
      const user = getUser(email);
      if (!user) return false;
    return getUser(email).is_telphony_agent
  }

  function getUserRole(email) {
    const user = getUser(email)
    if (user && user.role) {
      return user.role
    }
    return null
  }

  return {
    users,
    employees,
    getUser,
    getCompanyUsers,
    isAdmin,
    isDirector,
    isManager,
    isSalesUser,
    isTelephonyAgent,
    getUserRole,
  }
})
