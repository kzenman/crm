<template>
  
  <div class="wrap text-gray-900 dark:text-gray-100">
    <h1 class="h1">Welcome to your BRG Dashboard</h1>
  <div>
    <!-- Tab buttons (horizontal navigation) -->
    <div class="tabs-header">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="{ 'active-tab': activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

  </div>

    <div v-show="activeTab === 'tab1'">
      <!-- Last 30 days by STATUS -->
      <section class="card">
        <div class="card-head">
          <div class="badge">◎</div>
          <div class="title">Seeds Generated</div>
        </div>
        <div class="card-body">
          <p class="muted">Total Seeds (last 30 days, grouped by status)</p>
          <div class="chart-wrap"><canvas ref="leadsEl" height="210" /></div>
        </div>
      </section>

      <!-- Lifetime -->
      <section class="card">
        <div class="card-head">
          <div class="badge">◎</div>
          <div class="title">Total Seeds (lifetime)</div>
        </div>
        <div class="card-body">
          <p class="muted">Harvest & Re‑Watering by year</p>
          <div class="chart-wrap"><canvas ref="lifetimeEl" height="210" /></div>
        </div>
      </section>
    </div>
    
    <!-- Tab content -->
    <div v-show="activeTab === 'tab2'" class="tabs-content">
      <Gathering :company="userCompany" />
    </div>
    
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { call } from 'frappe-ui'
import Chart from 'chart.js/auto'    
import { usersStore } from '@/stores/users'
import { sessionStore } from '@/stores/session'
import Gathering from '@/components/Dashboard/Gathering.vue' // adjust path as needed
  
const activeTab = ref('tab1');
let userCompany = ref('Cherry Coatings')

// An array of tab data.
const tabs = [
  { id: 'tab1', label: 'Personal' },
  { id: 'tab2', label: 'Overall' },
]
  
const currentTab = computed(() => tabs.find(t => t.id === activeTab.value))  

const { user } = sessionStore()
const users  = usersStore();  
let curr_user = users.getUser(user);
  
// console.log('76 users', users, 'curr_user', curr_user);
  
const leadsEl = ref(null)
const lifetimeEl = ref(null)
let leadsChart, lifetimeChart
const leads = ref([])



const STATUS_KEYS = ['Seed Gathering','Seed Planting','Watering','Harvest','Re-Watering']
const COLORS = {
  'Seed Gathering': '#FFFF00', // orange-400
  'Seed Planting' : '#f59e0b', // amber-500
  'Watering'      : '#3b82f6', // blue-500
  'Harvest'       : '#22c55e', // green-500
  'Re-Watering'   : '#00008B', // dark blue
}

function normStatus(s) {
  const v = String(s || '').toLowerCase()
  if (v.includes('gather')) return 'Seed Gathering'
  if (v.includes('plant'))  return 'Seed Planting'
  if (v.includes('re') && v.includes('water')) return 'Re-Watering'
  if (v.includes('water'))  return 'Watering'
  if (v.includes('harvest'))return 'Harvest'
  return null
}

async function fetchLeadsForLoggedUser(curr_user) {
  // get logged user (email/username)
//   const user = await call('frappe.auth.get_logged_user')
  if (!curr_user) return

  const result = await call('frappe.client.get_list', {
    doctype: 'CRM Seed',
    filters: { lead_owner: curr_user.email },
    fields: ['name','modified','creation','status','source'],
    limit: 1000
  })
  leads.value = result || []
}

function computeFromLeads() {
  const weekly = Object.fromEntries(STATUS_KEYS.map(k => [k, [0,0,0,0]]))
  const harvestByYear = new Map()
  const rewaterByYear = new Map()

  const now = new Date()
  const DAY = 24*60*60*1000

  for (const lead of leads.value) {
    const s = normStatus(lead.status)
    const mod = new Date(lead.modified || lead.creation || now)
    const diff = now - mod

    // 30‑day weekly buckets
    if (s && diff >= 0 && diff < 30*DAY) {
      const w = Math.min(3, Math.floor(diff / (7*DAY))) // 0..3
      weekly[s][w]++
    }

    // lifetime by year (harvest / re‑watering only)
    const y = String(mod.getFullYear())
    if (s === 'Harvest') {
      harvestByYear.set(y, (harvestByYear.get(y) || 0) + 1)
    } else if (s === 'Re-Watering') {
      rewaterByYear.set(y, (rewaterByYear.get(y) || 0) + 1)
    }
  }

  let years = Array.from(new Set([...harvestByYear.keys(), ...rewaterByYear.keys()]))
    .sort((a,b)=>Number(a)-Number(b))
  if (!years.length) years = [String(new Date().getFullYear())]

  const harvestSeries = years.map(y => harvestByYear.get(y) || 0)
  const rewaterSeries = years.map(y => rewaterByYear.get(y) || 0)

  return { weekly, years, harvestSeries, rewaterSeries }
}

function buildCharts() {
  const { weekly, years, harvestSeries, rewaterSeries } = computeFromLeads()

  leadsChart?.destroy()
  lifetimeChart?.destroy()

  // 30‑day by STATUS
  leadsChart = new Chart(leadsEl.value, {
    type: 'bar',
    data: {
      labels: ['Week 1','Week 2','Week 3','Week 4'], // Week 1 = most recent 0–6 days
      datasets: STATUS_KEYS.map(k => ({
        label: k,
        data: weekly[k],
        backgroundColor: COLORS[k]
      }))
    },
    options: {
      responsive: true,
      aspectRatio: 2.4,
      scales: {
        y: { beginAtZero: true, grid: { color: '#eef2ee' } },
        x: { grid: { color: '#f4f7f5' } }
      },
      plugins: {
        legend: { position: 'top', labels: { boxWidth: 14, boxHeight: 14 } },
        tooltip: { mode: 'index', intersect: false }
      }
    }
  })

  // Lifetime (Harvest + Re‑Watering)
  lifetimeChart = new Chart(lifetimeEl.value, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [
        { label: 'Harvest',     data: harvestSeries, backgroundColor: COLORS['Harvest'] },
        { label: 'Re-Watering', data: rewaterSeries, backgroundColor: COLORS['Re-Watering'] }
      ]
    },
    options: {
      responsive: true,
      aspectRatio: 2.4,
      scales: {
        y: { beginAtZero: true, grid: { color: '#eef2ee' } },
        x: { grid: { color: '#f4f7f5' } }
      },
      plugins: {
        legend: { position: 'top', labels: { boxWidth: 14, boxHeight: 14 } },
        tooltip: { mode: 'index', intersect: false }
      }
    }
  })
}

onMounted(async () => {
  // init once
//   leadsChart = new Chart(leadsEl.value.getContext('2d'), {/* your config */})
//   lifetimeChart = new Chart(lifetimeEl.value.getContext('2d'), {/* your config */})
  try {
    const companies = await call('frappe.client.get_list', {
      doctype: 'Company',
      fields: ['company_name'],
      limit: 1000
    });
     const emp = await call('frappe.client.get_list', {
      doctype: 'Employee',
      filters: { user_id: curr_user?.email || user },
      fields: ['company'],
      limit: 1
    });
//      const seeds = await call('frappe.client.get_list', {
//       doctype: 'CRM Seed',
// //       filters: { user_id: curr_user?.email || user },
//       fields: ['lead_owner,status'],
//       limit: 1
//     });
       
    const gd = await call('frappe.client.get_value', {
      doctype: 'Global Defaults',
      fieldname: 'default_company'
    })
     
// console.log('220 companies', companies, 'emp', emp, 'gd', gd.default_company, 'userCompany', userCompany.value); 
    
     userCompany.value = emp[0].company || gd.default_company;
        
    await fetchLeadsForLoggedUser(curr_user)
    await nextTick()          // ensure canvases exist
    buildCharts()
  } catch (e) {
    console.error('Dashboard fetch/build error', e)
  }
})

onBeforeUnmount(() => {
  leadsChart?.destroy()
  lifetimeChart?.destroy()
})
  
watch(activeTab, (val) => {
  if (val === 'tab1') {
    nextTick(() => {
      leadsChart?.resize(); leadsChart?.update()
      lifetimeChart?.resize(); lifetimeChart?.update()
    })
  }
})  
</script>

<style scoped>
:root{
  --bg: #f0ffeF;
  --card: #fff;
  --text: #243b2f;
  --muted: #6b7e75;
  --ring: #d9f0df;
  --radius: 14px;
}
.wrap{ max-width:980px; padding:0 16px; }
.h1{ font-size:clamp(26px,4vw,40px); font-weight:800; text-align:center; margin:8px 0 26px; }
.card{ background:#fff; border-radius:var(--radius); border:1px solid #eef4ee; box-shadow:0 1px 0 rgba(0,0,0,.04),0 10px 24px rgba(0,0,0,.06); margin:18px 0 26px; overflow:hidden; }
.card-head{ display:flex; align-items:center; gap:10px; padding:16px 18px; border-bottom:1px solid #eef3ef; background:linear-gradient(#f7fff7,#fff); }
.badge{ display:grid; place-items:center; width:28px; height:28px; border-radius:999px; background:var(--ring); color:#20a13f; font-size:16px; }
.title{ font-weight:800; color:#1e7e34; letter-spacing:.15px; }
.card-body{ padding:16px 18px 22px; }
.muted{ color:var(--muted); font-size:14px; margin:2px 0 12px; }
.chart-wrap{ width:100%; overflow-x:auto; padding-bottom:6px; }
canvas{ max-width:100%; }

.tabs-header {
  display: flex;
  justify-content: flex-start;
  border-bottom: 2px solid #ccc;
  gap: 10px;
}

.tabs-header button {
  padding: 10px 20px;
  cursor: pointer;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s ease;
}

.tabs-header button:hover {
  border-color: #eee;
}

.tabs-header button.active-tab {
  border-color: #1e7e34;
  font-weight: bold;
  color: #1e7e34;
}

.tabs-content {
  padding: 5px;
/*   border: 1px solid #ccc; */
  border-top: none;
}
</style>
