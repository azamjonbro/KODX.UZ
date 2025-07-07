<template>
  <div class="w-64 bg-gray-100 p-4 h-screen">
    <h2 class="text-xl font-bold mb-4">Mavzular</h2>
    <ul>
      <li v-for="topic in currentTopics" :key="topic.path" class="mb-2">
        <router-link
          :to="topic.path"
          class="text-blue-600 hover:underline"
          active-class="font-bold text-blue-800"
        >
          {{ topic.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>

import { topics } from "../data/topics.js";

export default {
 name: "SidebarPage",
 data() {
  return {
   section: "",
   currentTopics: [],
  };
 },
 mounted() {
  const route = this.$route;
  this.section = route.path.split("/")[1];
  this.currentTopics = topics[this.section] || [];
 },
 watch: {
  '$route.path'(newPath) {
   this.section = newPath.split("/")[1];
   this.currentTopics = topics[this.section] || [];
  }
 }
};
</script>
