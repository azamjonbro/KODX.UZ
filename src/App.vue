<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>
</template>

<script setup>
import Header from "./components/Header/HeaderPage.vue";
import { onMounted } from "vue";

onMounted(() => {
  document.body.setAttribute("data-theme", "dark");
});
</script>
