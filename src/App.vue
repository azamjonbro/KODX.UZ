<template>
  <Header />
  <main @mousemove="moveCircle">
    <router-view></router-view>
    
  </main>
    <div
      v-if="showCircle"
      :style="circleStyle"
      class="mouse-circle"
    ></div>
</template>

<script setup lang="ts">
import Header from "./components/Header/HeaderPage.vue";
import { ref, computed } from "vue";
import type { CSSProperties } from "vue";

const circleX = ref<number>(0);
const circleY = ref<number>(0);
const showCircle = ref<boolean>(false);

function moveCircle(e: MouseEvent) {
  circleX.value = e.clientX;
  circleY.value = e.clientY;
  showCircle.value = true;
}
const circleStyle = computed<CSSProperties>(() => ({
  position: "fixed",
  left: `${circleX.value - 15}px`,
  top: `${circleY.value -15}px`,
  width: "30px",
  height: "30px",
  border: "1px solid var(--color-text)",
  borderRadius: "50%",
  // background: "rgba(0, 0, 0, 0.1)",
  pointerEvents: "none",
  zIndex: 9999,
}));
</script>

<style>
.mouse-circle {
  transition: left 0.05s, top 0.05s;
}
</style>
