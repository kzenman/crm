<template>
  <div class="max-w-6xl mx-auto p-1 space-y-8">
    <header class="flex flex-col gap-1">
      <h1 class="text-2xl font-bold">Top 5 Gathering by Category</h1>
      <h3>Last update: {{ daysAgo }}</h3>
    </header>

    <!-- Per-Company Blocks -->
    <section class="md:grid-cols-2 gap-12">
      <div
        v-for="co in companyNames"
        :key="co"
        class="bg-white rounded-2xl shadow p-4"
      >
        <h3 class="text-lg font-semibold mb-3 text-green-700">{{ co }}</h3>
        <div class="space-y-6">
          <div v-for="cat in CATEGORIES" :key="cat">
            <div class="font-medium mb-2 text-green-800">{{ cat }}</div>
            <table class="w-full text-sm border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr class="bg-green-600 text-white text-left">
                  <th class="px-3 py-2 w-16">Place</th>
                  <th class="px-3 py-2">Name</th>
                  <th class="px-3 py-2 text-right">Count</th>
                </tr>
              </thead>
              <tbody>
                  <tr
                    v-for="(row, index) in getSortedRows(cat, 0)"
                    :key="row.owner"
                    class="odd:bg-green-50 even:bg-green-100" v-if="getSortedRows(cat, 0).length > 0"
                  >
                  <td class="px-3 py-2">{{ index + 1 }}</td>
                  <td class="px-3 py-2">{{ row.employee_name }}</td>
                  <td class="px-3 py-2 text-right">{{ row.count }}</td>
                </tr>
                  <tr v-else>
                    <td class="px-3 py-2 text-center text-gray-500" colspan="3">
                      No Data Available
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- Overall Across All Companies -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">All Companies</h2>
      <div class="md:grid-cols-2 gap-12">
        <div class="bg-white rounded-2xl shadow p-4">
          <h3 class="text-lg font-semibold mb-3 text-green-700">Overall Top 5</h3>
          <div class="space-y-6">
            <div v-for="cat in CATEGORIES" :key="cat">
              <div class="font-medium mb-2 text-green-800">{{ cat }}</div>
              <table class="w-full text-sm border-collapse rounded-lg overflow-hidden">
                <thead>
                  <tr class="bg-green-600 text-white text-left">
                    <th class="px-3 py-2 w-16">Place</th>
                    <th class="px-3 py-2">Name</th>
                    <th class="px-3 py-2">Company</th>
                    <th class="px-3 py-2 text-right">Count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, index) in getSortedRows(cat,1)"
                    :key="row.owner"
                    class="odd:bg-green-50 even:bg-green-100" v-if="getSortedRows(cat, 1).length > 0"
                  >
                    <td class="px-3 py-2">{{ index + 1 }}</td>
                    <td class="px-3 py-2">{{ row.employee_name }}</td>
                    <td class="px-3 py-2">{{ row.company }}</td>
                    <td class="px-3 py-2 text-right">{{ row.count }}</td>
                  </tr>
                  <tr v-else>
                    <td class="px-3 py-2 text-center text-gray-500" colspan="4">
                      No Data Available
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  

</template>

<script setup>
import { ref, computed, defineProps, onMounted } from 'vue'
import { call } from 'frappe-ui'
  
const userCompany = ref('')
let results = ref([]) 
const props = defineProps({ company: { type: String, default: '' } })
const companyList = computed(() => props.company ? [props.company] : ['Modern Business Development'])

const limit = ref(5);

// const companiesData = ref({})

// console.log('props', props);

// ----- Config -----
const CATEGORIES = [
  'Seed Gathering',
  'Seed Planting',
  'Watering',
  'Harvest',
  'Re-watering'
]
const COMPANIES = ['Cherry Coatings']

const FIRST_NAMES = [
  'Mark','Lisa','Jordan','Ava','Noah','Mia','Ethan','Sofia','Lucas','Emma',
  'Caleb','Nora','Amir','Chloe','Owen','Layla','Jack','Zoey','Henry','Grace'
]
const LAST_NAMES = [
  'Cruz','Diaz','Carter','Nguyen','Baker','Kim','Lopez','Turner','Clark',
  'Rivera','Gomez','Foster','Brooks','Howard','Young','Graham','Price','James'
]
const rint = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min


let numDays = 14;
let today = new Date();
let pastDate = new Date();
pastDate.setDate(today.getDate() - numDays);

// month names
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

console.log('Gathering Page load:', months);
// day suffix function
function getDaySuffix(day) {
  if (day > 3 && day < 21) return "th"; // 11th–13th special case
  switch (day % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

let day = pastDate.getDate();
let suffix = getDaySuffix(day);
let daysAgo = `${months[pastDate.getMonth()]} ${day}${suffix}, ${pastDate.getFullYear()}`;

// console.log("14 days ago:", daysAgo);

const since90 = new Date();
since90.setDate(since90.getDate() - 90);

// Format to Frappe-style string "YYYY-MM-DD"
const since90Str = since90.toISOString().split('T')[0];


onMounted(async () => {
  // init once
//   leadsChart = new Chart(leadsEl.value.getContext('2d'), {/* your config */})
//   lifetimeChart = new Chart(lifetimeEl.value.getContext('2d'), {/* your config */})
  try {
    
    const companies = await call('frappe.client.get_list', {
      doctype: 'Company',
      fields: ['company_name'],
      filters: [
        ['company_name', '!=', 'Modern Business Development']
      ],
      limit: 1000
    });
    
     const seeds = await call('frappe.client.get_list', {
      doctype: 'CRM Lead',
      fields:['lead_owner','status', 'modified'],
      //filters: [['modified', '>=', since90Str]],
      limit: 10000
    });
    
    
    const emp = await call('frappe.client.get_list', {
      doctype: 'Employee',
//       filters: { user_id: curr_user?.email || user },
      fields:['employee_name', 'user_id', 'company'],
      limit: 1
    });
// console.log('215:', 'emp', emp);
    // Build quick lookup map for speed
      const userMap = Object.fromEntries(
        emp.map(e => [e.user_id, { employee_name: e.employee_name, company: e.company }])
      );

      // Enrich seeds with both employee_name and company
      const enriched = seeds.map(lead => ({
        ...lead,
        employee_name: userMap[lead.lead_owner]?.employee_name || null,
        company: userMap[lead.lead_owner]?.company || null
      }));
      
      const counts = enriched.reduce((acc, item) => {
          const key = item.lead_owner+ "|" +item.status;
          acc[key] = (acc[key] || 0) + 1;
          return acc;
      }, {});



      // 3) Emit single row per group with the count
      const deduped = Object.values(
        enriched.reduce((acc, item) => {
          const key = item.lead_owner + '|' + item.status;
          const prev = acc[key];

          if (!prev) {
            // first hit: clone and start count=1
            acc[key] = { ...item, count: 1 };
          } else {
            // bump count
            prev.count += 1;
            // keep the latest modified record’s fields
            if (item.modified > prev.modified) {
              prev.lead_owner = item.lead_owner;
              prev.status = item.status;
              prev.modified = item.modified;
              prev.employee_name = item.employee_name;
              prev.company = item.company;
            }
          }
          return acc;
        }, {})
      );

      // optional: sort by count desc then modified desc
      deduped.sort((a, b) => (b.count - a.count) || (b.modified > a.modified ? 1 : -1));


    // 2) Group by status, then by user; count occurrences
    const grouped = seeds.reduce((acc, row) => {
      const status = row.status || 'Unknown';
      const user = row.modified_by || row.lead_owner || 'Unknown';

      if (!acc[status]) acc[status] = { total: 0, owners: new Map() };

      acc[status].total += 1;
      acc[status].owners.set(user, (acc[status].owners.get(user) || 0) + 1);

      return acc;
    }, {});
    
    const empMap = Object.fromEntries(
      emp.filter(e => e.user_id).map(e => [e.user_id, { employee_name: e.employee_name, company: e.company }])
    );    
    
    results.value = Object.entries(grouped)
      .map(([status, data]) => ({
        status,
        total: data.total,
        owners: [...data.owners.entries()]
          .map(([owner, count]) => ({
            owner, // keep original email
            employee_name: empMap[owner]?.employee_name || owner, // match or fallback to email
            company: empMap[owner]?.company || 'Uknown',
            count
          }))
          .sort((a, b) => b.count - a.count)
      }))
      .sort((a, b) => b.total - a.total);

    
//       console.log('220 getSortedRows:', 'seeds',seeds, 'emp', emp, 'userMap', userMap, 'enriched', enriched, 'counts', counts,  'deduped', deduped, 'grouped', grouped, 'results', results)
    
    const abbrev = (full) => {
  if (!full) return '—'
    const parts = String(full).trim().split(/\s+/)
    if (parts.length === 1) return parts[0]
    return parts[0]+' '+parts.at(-1)[0]
  }
    
// const getSortedRows = (cat) => {
//   return [...results.value]
//     .sort((a, b) => (b.counts?.[cat] ?? 0) - (a.counts?.[cat] ?? 0))
//     .slice(0, limit.value)
// }    

// reshape to the structure your table expects: overallTops[status] -> top rows
// const overallTops2 = computed(() => {
//   const out = {}
//   for (const grp of (results || [])) {
//     const rows = (grp?.owners || [])
//       .slice(0, 5) // top 5 already sorted
//       .map((o, idx) => ({
//         place: idx + 1,
//         name: abbrev(o.employee_name || o.owner),
//         // put a real company here if you have it; blank is fine for now
//         company: o.company ?? '',
//         value: o.count ?? 0,
//       }))
//     out[grp.status] = rows
//   }
//         console.log('267 out', out);
//   return out
// })
    

  }catch (e) {
    console.error('Dashboard fetch/build error', e)
  }
})
            
            
function getSortedRows(category, company=0) {
  const catData = results.value.find(r => r.status === category)
  if (!catData) return []
            
  if(company === 1){
     return [...catData.owners]
      .map(owner => ({
        ...owner,
        employee_name: formatName(owner.employee_name) // format name
      }))
      .sort((a, b) => b.count - a.count)
  }
            
  return [...catData.owners]
    .filter(owner => owner.company === 'Cherry Coatings') // filter by company
    .sort((a, b) => b.count - a.count)
           
}   
            
function formatName(fullName) {
  const parts = fullName.trim().split(/\s+/)
  if (parts.length === 1) return parts[0] // only first name
  
  const firstName = parts[0]
  const lastInitial = parts[parts.length - 1][0] // first letter of last name
  return firstName + ' ' + lastInitial + '.';
}
                

function makeRep () {
//   console.log('230 result', result);
  
  const first = FIRST_NAMES[rint(0, FIRST_NAMES.length - 1)]
  const last  = LAST_NAMES[rint(0, LAST_NAMES.length - 1)]
  const lastInitial = last[0]
  const counts = {}
  for (const cat of CATEGORIES) {
    counts[cat] = Math.round((Math.random() ** 0.6) * 110) + 10
  }
  return { displayName: `${first} ${lastInitial}.`, counts }
}

function generateData (repsPerCompany = 20) {
  const companies = {}
  for (const co of COMPANIES) {
    companies[co] = []
    for (let i = 0; i < repsPerCompany; i++){ companies[co].push(makeRep()) 
//                                             console.log('companies:', companies[co], 'companies[co].push(makeRep())', companies[co].push(makeRep()))
                                            }
  }
  return companies
}

function topNByCategory (reps, n = 6) {
  const result = {}
  
  for (const cat of CATEGORIES) {
//     console.log('254 reps', reps, 'cat', cat, 'CATEGORIES', CATEGORIES);
    const ranked = reps
      .map(r => ({ name: r.displayName, company: 'Company A', value: r.counts[cat] }))
      .sort((a, b) => b.value - a.value)
      .slice(0, n)
      .map((r, idx) => ({ ...r, place: idx + 1 }))
    result[cat] = ranked
  }
  return result
}

// ----- State -----
const repsPerCo = ref(10)
const companiesData = ref(generateData(repsPerCo.value))

const companyNames = computed(() => Object.keys(companiesData.value))
const allReps = computed(() => companyNames.value.flatMap(co => companiesData.value[co] || []))
const overallTops = computed(() => topNByCategory(allReps.value))

function getTopsFor (reps) {
  return topNByCategory(reps || [])
}

function regenerate () {
  companiesData.value = generateData(repsPerCo.value)
}
</script>
