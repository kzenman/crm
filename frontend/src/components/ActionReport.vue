<template>
  <div class="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">
      Action Report For {{ repName }}
    </h2>
    <div v-if="leads && leads.length">
      <table class="min-w-full bg-white border rounded">
        <thead>
          <tr>
            <th class="px-4 py-2 border-b">Lead Name</th>
            <th class="px-4 py-2 border-b">Status</th>
            <th class="px-4 py-2 border-b">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="lead in leads" :key="lead.name">
            <td class="px-4 py-2 border-b">{{ lead.lead_name }}</td>
            <td class="px-4 py-2 border-b">{{ lead.status }}</td>
            <td class="px-4 py-2 border-b">{{ lead.modified ? new Date(lead.modified).toLocaleString() : '' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="text-gray-500">No leads found for this Sales Rep.</div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
// Props: selectedRep (string, employee id), leads (array), repName (string)
const props = defineProps({
  selectedRep: String,
  leads: Array,
  repName: String
});
</script>

<style scoped>

    h1 {
      font-size: 2rem;
      margin-bottom: 0.25em;
    }

    h2 {
      font-size: 1.5rem;
      margin-top: 2em;
      margin-bottom: 0.5em;
      color: #444;
    }

    h3 {
      font-size: 1.2rem;
      margin-top: 1.5em;
      color: #222;
    }

    ul {
      list-style-type: none;
      padding-left: 1em;
    }

    li {
      margin-bottom: 0.4em;
    }

    .person {
      font-weight: bold;
    }

    .stage {
      font-style: italic;
      color: #666;
    }
      
    .dashed-line {
      border: none; /* Remove the default border */
      border-top: 1px dashed #ccc; /* Add a dashed top border */
    } 
  </style>