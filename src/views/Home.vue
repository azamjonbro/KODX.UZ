<template>
  <section class="dashboard">
    <div class="intro">
      <h1 class="home-title">O‘rgan, Yarat, Yoz — KODX.uz uslubida!</h1>
      <p>
        KODX.uz — bu HTML, CSS, JavaScript, Vue va React kabi texnologiyalarni
        <strong>o‘zbek tilida</strong> o‘rganish uchun ochiq platforma.
      </p>
      <div class="actions">
        <RouterLink to="/guide/introduction" class="btn primary">🚀 Boshlash</RouterLink>
        <RouterLink to="/guide/" class="btn secondary">📚 Bo‘limlar</RouterLink>
      </div>
    </div>

    <div class="sections">
      <h2>📚 Mavzular</h2>
      <div class="cards">
        <RouterLink to="/html/" class="card">📄 HTML</RouterLink>
        <RouterLink to="/css/" class="card">🎨 CSS</RouterLink>
        <RouterLink to="/js/" class="card">⚙️ JavaScript</RouterLink>
        <RouterLink to="/vue/" class="card">🧩 Vue.js</RouterLink>
        <RouterLink to="/react/" class="card">⚛️ React</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
// Bu sahifani oddiy `Dashboard.vue` sifatida saqlang
</script>

<style scoped>
.dashboard {
  padding: 3rem 2rem;
  max-width: 900px;
  margin: auto;
}

.intro{
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}



.intro h1 {
  font-size: 2.2rem;
  font-weight: bold;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.intro p {
  font-size: 1.1rem;
  color: var(--color-subtle);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.primary {
  background-color: var(--color-accent);
  color: white;
}

.primary:hover {
  background-color: var(--color-link-hover);
}

.secondary {
  background: transparent;
  border: 2px solid var(--color-accent);
  color: var(--color-accent);
}

.secondary:hover {
  background-color: var(--color-accent);
  color: white;
}

.sections h2 {
  margin-top: 3rem;
  font-size: 1.6rem;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.cards {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.card {
  flex: 1 1 130px;
  text-align: center;
  padding: 1rem;
  border-radius: var(--radius);
  background-color: var(--color-code-bg);
  color: var(--color-text);
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  background-color: var(--color-border);
}
</style>
