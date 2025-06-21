<template>
  <Header />
  <main @mousemove="handleMouseMove">
    <router-view />
  </main>

  <div v-if="showCircle" :style="circleStyle" class="mouse-circle">
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header/HeaderPage.vue";
</script>

<style scoped>

</style>
