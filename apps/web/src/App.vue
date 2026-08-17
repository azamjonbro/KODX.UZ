<template>
  <div class="min-h-screen bg-surface-950 text-surface-100 flex flex-col">
    <Header />
    <div class="flex-1">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
</script>
