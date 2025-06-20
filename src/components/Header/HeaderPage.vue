<template>
  <header class="header">
    <div class="logo">
      <RouterLink to="/"
        ><span class="logo-text"
          >KODX<span class="dot">.uz</span></span
        ></RouterLink
      >
    </div>
    <nav class="nav">
      <RouterLink to="/" class="nav-link">Bosh sahifa</RouterLink>
      <RouterLink to="/guide/introduction" class="nav-link"
        >Boshlash</RouterLink
      >
      <RouterLink to="/guide/" class="nav-link">Bo‘limlar</RouterLink>
      <button @click="toggleTheme" class="theme-toggle">
        {{ isDark ? "☀️" : "🌙" }}
      </button>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isDark = ref(false);

onMounted(() => {
  isDark.value = document.body.getAttribute("data-theme") === "dark";
});

function toggleTheme() {
  isDark.value = !isDark.value;
  document.body.setAttribute("data-theme", isDark.value ? "dark" : "light");
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-accent);
}

.logo-text .dot {
  color: var(--color-link-hover);
}

.nav {
  display: flex;
  gap: 1.25rem;
  align-items: center;
}

.nav-link {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: var(--color-link-hover);
}

.theme-toggle {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--color-subtle);
}
</style>
