<template>
  <div class="flex-1 flex min-w-0">
    <main class="flex-1 p-6 md:p-8 lg:p-10 max-w-4xl min-w-0">
      <router-view />
    </main>
    <RightSidebar />
  </div>
</template>

<script setup lang="ts">
import RightSidebar from '../components/RightSidebar.vue';
</script>
