<template>
  <header class="header">
    <div class="logo">
      <router-link to="/" class="logo-text">
       <img src="./logo.svg" alt="">
        <span class="dot">KODX.uz</span>
      </router-link>
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

<script>
import Icons from './Template/Icons.vue'

export default {
 name: 'HeaderPage',
 components: { Icons },
 data() {
 return {
  isDark: true // Default dark
 }
 },
 mounted() {
 const savedTheme = localStorage.getItem("theme")
 if (savedTheme === 'light') {
  this.isDark = false
  document.body.setAttribute('data-theme', 'light')
 } else {
  this.isDark = true
  document.body.setAttribute('data-theme', 'dark')
 }
 },
 methods: {
 toggleTheme() {
  this.isDark = !this.isDark
  const newTheme = this.isDark ? 'dark' : 'light'
  localStorage.setItem("theme", newTheme)
  document.body.setAttribute('data-theme', newTheme)
 }
 }
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
.logo-text>svg{
  width: 300px;
  height: 50px;
}

@media (max-width: 580px) {
  .nav {
    display: none;
  }
  
}
</style>
