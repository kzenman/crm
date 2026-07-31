<template>
  <LayoutHeader>
    <template #left-header>
      <ViewBreadcrumbs v-model="viewControls" routeName="Reports" />
    </template>
    <template #right-header>
      <Button variant="solid" :label="__('Refresh')" @click="refreshData">
        <template #prefix><FeatherIcon name="refresh-cw" class="h-4" /></template>
      </Button>
      <Button variant="solid" :label="__('Export')" @click="exportReport">
        <template #prefix><FeatherIcon name="download" class="h-4" /></template>
      </Button>
    </template>
  </LayoutHeader>

  <div class="flex flex-col gap-4 p-4">
    <!-- Filter Section -->
    <div class="bg-white rounded-lg shadow-sm border p-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div v-show="showCompanyDropdown">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            <FeatherIcon name="user-check" class="h-4 w-4 inline mr-1" />
            {{ __('Company') }}
          </label>
          <FormControl
            v-model="filters.company"
            type="select"
            :options="companyOptions"
            :placeholder="__('Select Company...')"
            @change="onLevel0Change"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            <FeatherIcon name="user-check" class="h-4 w-4 inline mr-1" />
            {{ __('Administrator') }}
          </label>
          <FormControl
            v-model="filters.level1"
            type="select"
            :options="level1Options"
            :placeholder="__('Select Administrator...')"
            @change="onLevel1Change"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            <FeatherIcon name="users" class="h-4 w-4 inline mr-1" />
            {{ __('Director') }}
          </label>
          <FormControl
            v-model="filters.level2"
            type="select"
            :options="level2Options"
            :placeholder="__('Select Director...')"
            :disabled="!filters.level1"
            @change="onLevel2Change"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            <FeatherIcon name="user-plus" class="h-4 w-4 inline mr-1" />
            {{ __('Sales Manager') }}
          </label>
          <FormControl
            v-model="filters.level3"
            type="select"
            :options="level3Options"
            :placeholder="__('Select Manager...')"
            :disabled="!filters.level2"
            @change="onLevel3Change"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            <FeatherIcon name="user" class="h-4 w-4 inline mr-1" />
            {{ __('Sales Rep') }}
          </label>
          <FormControl
            v-model="filters.level4"
            type="select"
            :options="level4Options"
            :placeholder="__('Select Representive...')"
            :disabled="!filters.level3"
            @change="onLevel4Change"
          />
        </div>
      </div>
    </div>
    <!-- Tab Navigation -->
    <div class="flex border-b border-gray-200 mb-4">
      <button
        @click="activeTab = 'tab1'"
        :class="{
          'px-4 py-2 text-sm font-medium border-b-2': true,
          'border-indigo-500 text-indigo-600': activeTab === 'tab1',
          'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300': activeTab !== 'tab1'
        }"
      >
       ORG Chart
      </button>
      <button
        @click="activeTab = 'tab2'"
        :class="{
          'px-4 py-2 text-sm font-medium border-b-2': true,
          'border-indigo-500 text-indigo-600': activeTab === 'tab2',
          'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300': activeTab !== 'tab2'
        }"
      >
        Actions
      </button>
    </div>

<!--     tab1 start-->
 <div class="bg-white p-6 rounded-lg shadow">  
   <div v-if="activeTab === 'tab1'">
    <!-- Organizational Chart Section -->
    <div v-if="showOrgChart" class="bg-white rounded-lg shadow-sm border p-6">
      <div class="text-center mb-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">
          <FeatherIcon name="git-branch" class="h-6 w-6 inline mr-2" />
          {{ __('Organizational Overview') }}
        </h2>
        <p class="text-gray-600">{{ __('Business Development Team Structure') }}</p>
      </div>

      <!-- All Seeds Section -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold text-center mb-4 flex items-center justify-center">
          <FeatherIcon name="globe" class="h-5 w-5 mr-2" />
          {{ __('All Seeds') }}
          <span v-if="filters.level4" class="ml-2 text-blue-600">
            - {{ level4Options.find(r => r.value === filters.level4)?.label || filters.level4 }}
          </span>
        </h3>
        <div class="flex flex-wrap gap-2 justify-center">
          <Badge
            v-for="seed in allSeeds"
            :key="seed"
            :label="seed"
            variant="outline"
            class="px-3 py-1 bg-green-50 text-green-800 border-green-200"
          />
        </div>
      </div>

      <hr class="border-gray-200 mb-8" />

      <!-- Organizational Columns -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-gray-50 rounded-lg p-4 border">
          <div class="text-center mb-4">
            <div class="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
              <FeatherIcon name="target" class="h-6 w-6 text-blue-600" />
            </div>
            <h4 class="font-semibold text-gray-900">{{ __('Seed Gathering') }}</h4>
          </div>
          <div class="space-y-2">
            <div
              v-for="person in seedGathering"
              :key="person"
              class="flex items-center gap-2 p-2 bg-white rounded border text-sm"
            >
              <Avatar :label="person" size="sm" />
              <span>{{ person }}</span>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 rounded-lg p-4 border">
          <div class="text-center mb-4">
            <div class="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
              <FeatherIcon name="sprout" class="h-6 w-6 text-green-600" />
            </div>
            <h4 class="font-semibold text-gray-900">{{ __('Seed Planting') }}</h4>
          </div>
          <div class="space-y-2">
            <div
              v-for="person in seedPlanting"
              :key="person"
              class="flex items-center gap-2 p-2 bg-white rounded border text-sm"
            >
              <Avatar :label="person" size="sm" />
              <span>{{ person }}</span>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 rounded-lg p-4 border">
          <div class="text-center mb-4">
            <div class="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
              <FeatherIcon name="package" class="h-6 w-6 text-yellow-600" />
            </div>
            <h4 class="font-semibold text-gray-900">{{ __('Harvest') }}</h4>
          </div>
          <div class="space-y-2">
            <div
              v-for="person in harvest"
              :key="person"
              class="flex items-center gap-2 p-2 bg-white rounded border text-sm"
            >
              <Avatar :label="person" size="sm" />
              <span>{{ person }}</span>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 rounded-lg p-4 border">
          <div class="text-center mb-4">
            <div class="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
              <FeatherIcon name="droplets" class="h-6 w-6 text-purple-600" />
            </div>
            <h4 class="font-semibold text-gray-900">{{ __('Rewatering') }}</h4>
          </div>
          <div class="space-y-2">
            <div
              v-for="person in rewatering"
              :key="person"
              class="flex items-center gap-2 p-2 bg-white rounded border text-sm"
            >
              <Avatar :label="person" size="sm" />
              <span>{{ person }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="flex h-96 items-center justify-center">
      <div class="flex flex-col items-center gap-3 text-xl font-medium text-gray-400">
        <FeatherIcon name="bar-chart-3" class="h-16 w-16" />
        <span>{{ __('Select all levels to view organizational chart') }}</span>
        <p class="text-sm text-gray-500 text-center max-w-md">
          {{ __('Choose executives from each level to generate the business development team structure and view the organizational hierarchy.') }}
        </p>
      </div>
    </div>
  </div>
<!--    tab2 -->
<!--       <div v-else-if="activeTab === 'tab2'">
        <ActionReport
          :selected-rep="filters.level4"
          :leads="salesRepLeads"
          :rep-name="level4Options.find(r => r.value === filters.level4)?.label || ''"
        />
      </div> -->
 </div>
<!--     end of tab1  -->
  <!-- Tab Navigation -->
 
    
    
    
    
  </div>
</template>

<script setup>

import ViewBreadcrumbs from '@/components/ViewBreadcrumbs.vue';
import LayoutHeader from '@/components/LayoutHeader.vue';
import ActionReport from '@/components/ActionReport.vue';
import { Badge, Avatar, FormControl, call } from 'frappe-ui';
import { computed, ref, reactive, onMounted, watch } from 'vue';
import { sessionStore } from '@/stores/session'
import { usersStore } from '@/stores/users'
import { getMeta } from '@/stores/meta'
  
const { getUser } = usersStore()
  

const { user } = sessionStore()

const users  = usersStore()
  
const activeTab = ref('tab1');
  
let curr_user = users.getUser(user);
  
// const showCompanyDropdown = ref(false); // Hidden by default
  
const showCompanyDropdown = computed(() => {
  return users.getUserRole(user) === 'System Manager';
});  
  
const userType = ref('');
const selectedReport = ref('');
let companiesData = ref([]);

const allOptions = [
  { label: 'Admin Report', value: 'admin', roles: ['Admin'] },
  { label: 'Director Report', value: 'director', roles: ['Admin', 'Director'] },
  { label: 'Manager Report', value: 'manager', roles: ['Admin', 'Director', 'Sales Manager'] },
  { label: 'Sales Report', value: 'sales', roles: ['Admin', 'Director', 'Sales Manager', 'Sales Rep'] },
];

onMounted(async () => {

  const filteredOptions = computed(() => {
    return allOptions.filter(option => option.roles.includes(userType.value));
  });
 
  
  try { 
    
    let employees; 
    let companies;
//     let Employee = [];

        companiesData.value = await call('frappe.client.get_list', {
          doctype: 'Company',
          filters: { parent_company: "Modern Business Development" },
          fields: ['idx', 'parent_company', 'company_name'],
          limit: 1000
        });

        console.log('Full response:', companiesData);
        console.log('Response type:', typeof companiesData);
        console.log('Response keys:', Object.keys(companiesData));
      
    } catch (error) {
        console.error("Error fetching Employee:", error);
        // Optionally, handle the error, e.g., return an empty result or notify the user
    }
  
    if (users.getUserRole(user) === 'System User') {
        showCompanyDropdown.value = true;
    }

    
    console.log('curr_user -->>>', curr_user, user, 'ALL users >>>', users.getUser(user), 'User Role', users.getUserRole(user))
  
});
  

// Reactive filters for cascading dropdowns
const filters = reactive({
  company: '',
  admin: '',
  director: '',
  sales_manager: '',
  sales_user: ''
})

// View controls reference
const viewControls = ref(null)


// Dropdown options
const companyOptions = ref([])
const level1Options = ref([]) // Administrator
const level2Options = ref([]) // Director
const level3Options = ref([]) // Sales Manager
const level4Options = ref([]) // Sales Rep

// Fetch companies on mount
onMounted(async () => {
  try {
    const companies = await call('frappe.client.get_list', {
      doctype: 'Company',
      fields: ['name', 'company_name'],
      limit: 1000
    })
    companyOptions.value = companies.map(c => ({ label: c.company_name, value: c.name }))
  } catch (e) {
    console.error('Error fetching companies', e)
  }
})

// Watchers for cascading dropdowns

// Store selected Employee objects for each level
const selectedAdmin = ref(null)
const selectedDirector = ref(null)
const selectedManager = ref(null)
const selectedRep = ref(null)

// Level 1: Admin (Executive)
watch(() => filters.company, async (company) => {
  filters.level1 = ''
  filters.level2 = ''
  filters.level3 = ''
  filters.level4 = ''
  level1Options.value = []
  level2Options.value = []
  level3Options.value = []
  level4Options.value = []
  selectedAdmin.value = null
  if (company) {
    try {
      // Fetch Employees for the selected company with Administrator designation
      const admins = await call('frappe.client.get_list', {
        doctype: 'Employee',
        filters: { company: company, designation: 'Administrator' },
        fields: ['*'],
        limit: 1000
      })
      console.log('Admins fetched:', admins);
  level1Options.value = admins.map(a => ({ label: a.employee_name, value: a.name, designation: a.designation }))
    } catch (e) {
      console.error('Error fetching admins', e)
    }
  }
})

// Level 2: Director
watch(() => filters.level1, async (adminName) => {
  filters.level2 = ''
  filters.level3 = ''
  filters.level4 = ''
  level2Options.value = []
  level3Options.value = []
  level4Options.value = []
  selectedDirector.value = null
  selectedAdmin.value = level1Options.value.find(a => a.value === adminName) || null
  if (adminName && selectedAdmin.value) {
    try {
      const directors = await call('frappe.client.get_list', {
        doctype: 'Employee',
        filters: { company: filters.company, designation: 'Managing Director', reports_to: adminName },
        fields: ['name', 'user_id', 'employee_name', 'designation', 'reports_to'],
        limit: 1000
      })
      console.log('Directors fetched:', directors, 'adminName', adminName);
  level2Options.value = directors.map(d => ({ label: d.employee_name, value: d.name, designation: d.designation, reports_to: d.reports_to }))
    } catch (e) {
      console.error('Error fetching directors', e)
    }
  }
})

// Level 3: Sales Manager
watch(() => filters.level2, async (directorName) => {
  filters.level3 = ''
  filters.level4 = ''
  level3Options.value = []
  level4Options.value = []
  selectedManager.value = null
  selectedDirector.value = level2Options.value.find(d => d.value === directorName) || null
  if (directorName && selectedDirector.value) {
    try {
      const managers = await call('frappe.client.get_list', {
        doctype: 'Employee',
        filters: { company: filters.company, designation: 'Sales Manager', reports_to: directorName },
        fields: ['name', 'user_id', 'employee_name', 'designation', 'reports_to'],
        limit: 1000
      })
  level3Options.value = managers.map(m => ({ label: m.employee_name, value: m.name, designation: m.designation, reports_to: m.reports_to }))
    } catch (e) {
      console.error('Error fetching sales managers', e)
    }
  }
})

// Level 4: Sales Rep
watch(() => filters.level3, async (managerName) => {
  filters.level4 = ''
  level4Options.value = []
  selectedRep.value = null
  selectedManager.value = level3Options.value.find(m => m.value === managerName) || null
  if (managerName && selectedManager.value) {
    try {
      const reps = await call('frappe.client.get_list', {
        doctype: 'Employee',
        filters: { company: filters.company, designation: 'Sales Representative', reports_to: managerName },
        fields: ['name', 'user_id', 'employee_name', 'designation', 'reports_to'],
        limit: 1000
      })

      console.log('Sales Reps fetched:', reps, 'managerName', managerName);

  level4Options.value = reps.map(r => ({ label: r.employee_name, value: r.name, user_id: r.user_id, designation: r.designation, reports_to: r.reports_to }))
    } catch (e) {
      console.error('Error fetching sales users', e)
    }
  }
})

// Show org chart only when level 4 is selected
const showOrgChart = computed(() => {
  return filters.level4 !== ''
})

// Store leads for the selected Sales Rep
const salesRepLeads = ref([])

// Watch for changes to the selected Sales Rep and fetch leads
watch(() => filters.level4, async (repEmployeeId) => {
  salesRepLeads.value = []
  if (repEmployeeId) {
    // Find the selected rep's Employee object
    const rep = level4Options.value.find(r => r.value === repEmployeeId)
    console.log('Leads filters.level4:', repEmployeeId, 'rep', rep, 'level4Options.value', level4Options.value);
    if (rep && rep.user_id) {
      try {
        const leads = await call('frappe.client.get_list', {
          doctype: 'CRM Lead',
          filters: { lead_owner: rep.user_id }, // Use Sales Rep email as lead_owner
          fields: ['*'],
          limit: 1000
        })
        console.log('Seeds fetched for Sales Rep:', leads, 'rep', rep);
        salesRepLeads.value = leads
      } catch (e) {
        console.error('Error fetching leads for Sales Rep', e)
      }
    }
  }
})

// Computed organizational data for display (now using real leads)
const allSeeds = computed(() => {
  if (!showOrgChart.value) return []
  return salesRepLeads.value.map(l => l.lead_name)
})

const seedGathering = computed(() => {
  if (!showOrgChart.value) return []
  return salesRepLeads.value
    .filter(l => l.status === 'Seed Gathering')
    .map(l => l.lead_name)
})

const seedPlanting = computed(() => {
  if (!showOrgChart.value) return []
  return salesRepLeads.value
    .filter(l => l.status === 'Seed Planting')
    .map(l => l.lead_name)
})

const harvest = computed(() => {
  if (!showOrgChart.value) return []
  return salesRepLeads.value
    .filter(l => l.status === 'Harvest')
    .map(l => l.lead_name)
})

const rewatering = computed(() => {
  if (!showOrgChart.value) return []
  return salesRepLeads.value
    .filter(l => ['Re-watering', 'Rewater', 'Re-water'].includes(l.status))
    .map(l => l.lead_name)
})

// Event handlers
const onLevel0Change = () => {
  filters.level1 = ''
  filters.level2 = ''
  filters.level3 = ''
  filters.level4 = ''
}

const onLevel1Change = () => {
  filters.level2 = ''
  filters.level3 = ''
  filters.level4 = ''
}

const onLevel2Change = () => {
  filters.level3 = ''
  filters.level4 = ''
}

const onLevel3Change = () => {
  filters.level4 = ''
}

const onLevel4Change = () => {
  // Chart will automatically show when level 4 is selected
}

const refreshData = () => {
  // Reset all filters
  filters.level1 = ''
  filters.level2 = ''
  filters.level3 = ''
  filters.level4 = ''
}

const exportReport = () => {
  if (!showOrgChart.value) {
    // Show toast notification
    console.log('Please select all levels before exporting')
    return
  }
  
  // Generate export data
  const exportData = {
    level1: filters.level1,
    level2: filters.level2,
    level3: filters.level3,
    level4: filters.level4,
    allSeeds: allSeeds.value,
    seedGathering: seedGathering.value,
    seedPlanting: seedPlanting.value,
    harvest: harvest.value,
    rewatering: rewatering.value
  }
  
  // Convert to CSV or trigger download
  console.log('Exporting report:', exportData)
  
  // Here you would typically call a Frappe method to generate the export
  // Example: await call('your_app.api.export_org_chart', exportData)
}

</script>