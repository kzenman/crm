<template>
  <nav class="bottom-nav">
    <button @click="go('Dashboard')">
      <FontAwesomeIcon :icon="['fas', 'house']" class="nav-icon" />
      <span>Home</span>
    </button>
    <button @click="go('Tasks')">
      <FontAwesomeIcon :icon="['fas', 'atom']" class="nav-icon" />
      <span>Tasks</span>
    </button>
    <button @click="go('Leads')">
      <FontAwesomeIcon :icon="['fas', 'seedling']" class="nav-icon" />
      <span>Seeds</span>
    </button>
    <button @click="go('Chat')">
      <MessageIcon class="nav-icon" />
      <span>Rose Chat</span>
    </button>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
import DashboardIcon from '@/components/Icons/DashboardIcon.vue'
// import TasksIcon from '@/components/Icons/WebsiteIcon.vue'
import MessageIcon from '@/components/Icons/MessageIcon.vue'
import UserIcon from '@/components/Icons/ContactsIcon.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAtom, faHouse, faSeedling } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAtom, faHouse, faSeedling)



const router = useRouter()
function go(route) {
  router.push({ name: route })
}
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(56px + env(safe-area-inset-bottom, 0px));
  padding-bottom: env(safe-area-inset-bottom, 0px);
  background: #00b894;
  border-top: 1px solid #008060;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
}
.bottom-nav button {
  background: none;
  border: none;
  font-size: 0.85rem;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff; /* White text */
}
.nav-icon {
  width: 16px;
  height: 16px;
  margin-bottom: 2px;
  color: #fff; /* White icons */
  fill: #fff;  /* For SVG fill */
  stroke: #fff; /* For SVG stroke */

}

@media (max-width: 640px) {
  .h-screen {
    height: 95vh !important; /* beat Tailwind utility */
  }
}

/* Ensure page content is not hidden behind the fixed bottom nav */
:global(body) {
  padding-bottom: calc(56px + env(safe-area-inset-bottom, 0px));
}
  </style>