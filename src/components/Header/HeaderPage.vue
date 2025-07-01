<template>
  <header class="header">
    <div class="logo">
      <router-link to="/" class="logo-text">KODX<span class="dot">.uz</span></router-link>
    </div>
    <nav class="nav">
      <a href="/" class="nav-link">Bosh sahifa</a>
      <a href="/guide/introduction" class="nav-link">Boshlash</a>
      <a href="/guide/" class="nav-link">Bo‘limlar</a>
    </nav>
    <button @click="toggleTheme" class="theme-toggle">
      <Icons :name="isDark ? 'sun' : 'moon'" />
    </button>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Icons from '../Template/Icons.vue'

const isDark = ref(false)

onMounted(() => {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === 'dark') {
    isDark.value = true
    document.body.setAttribute('data-theme', 'dark')
  } else {
    isDark.value = false
    document.body.setAttribute('data-theme', 'light')
  }
})

function toggleTheme() {
  isDark.value = !isDark.value
  const newTheme = isDark.value ? 'dark' : 'light'
  localStorage.setItem("theme", newTheme)
  document.body.setAttribute('data-theme', newTheme)
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
  z-index: 1;
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
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.dark .theme-toggle {
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.2);
}

@media (max-width: 580px) {
  .nav {
    display: none;
  }
  
}
</style>
