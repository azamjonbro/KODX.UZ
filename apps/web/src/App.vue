<template>
  <div class="min-h-screen bg-surface-950 text-surface-100 flex overflow-x-hidden">
    <!-- Left Sidebar -->
    <Sidebar />

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
      <Header />
      <div class="flex-1 flex flex-col min-w-0">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';
</script>
