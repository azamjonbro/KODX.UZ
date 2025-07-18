<template>
  <div class="flex">
    <Sidebar />
    <div class="flex-1 p-6">
      <router-view />
    </div>
  </div>
</template>

<script >
import Sidebar from "../components/Sidebar.vue";
export default {
  name: "CssLayout",
  components: {
    Sidebar
  }
}

</script>
