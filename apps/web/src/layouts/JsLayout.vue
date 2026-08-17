<template>
  <div class="flex min-h-[calc(100vh-65px)]">
    <Sidebar />
    <main class="flex-1 p-6 md:p-10 max-w-5xl">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue';
</script>
