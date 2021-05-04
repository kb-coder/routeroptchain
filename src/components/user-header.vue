<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserHeader'
})
</script>
<template>
  <div>
    <h3 class="font-semibold">
      Users Name
    </h3>
    <router-link to="home">
      Logout
    </router-link>
  </div>
</template>
