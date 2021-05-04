<script lang="ts">
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import '@/assets/tailwind.css'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<template>
  <header>
    <router-view
      name="header"
      v-slot="slotProps"
    >
      <transition
        name="fade"
        appear
      >
        <div id="nav">
          <component :is="slotProps.Component" />
        </div>
      </transition>
    </router-view>
  </header>
  <main>
    <router-view v-slot="slotProps">
      <transition
        name="fade"
        appear
      >
        <div class="container px-4 pt-4 h-screen overflow-auto">
          <component :is="slotProps.Component" />
        </div>
      </transition>
    </router-view>
  </main>
</template>
