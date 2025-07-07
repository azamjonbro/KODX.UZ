<template>
  <div class="flex">
    <Sidebar />
    <div class="flex-1 p-6">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
</script>
