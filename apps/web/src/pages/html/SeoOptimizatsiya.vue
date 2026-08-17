<template>
  <div class="space-y-10 max-w-4xl pb-16">
    <!-- Header & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <div class="flex items-center gap-2 text-xs font-mono text-brand-400">
        <span>HTML Asoslari</span>
        <span>/</span>
        <span class="text-surface-400">9-Dars</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        HTML Optimizatsiyasi, SEO va Core Web Vitals
      </h1>
      <p class="text-base sm:text-lg text-surface-300 leading-relaxed">
        Saytni qidiruv tizimlarida 1-o‘ringa chiqarish, Google PageSpeed ballini 100 ga yetkazish, Preload, Prefetch va CLS sakrashlarini yo‘qotish.
      </p>

      <div class="flex flex-wrap items-center gap-4 text-xs text-surface-400 pt-2">
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          ⏱️ O‘qish vaqti: 10 daqiqa
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          🎯 Daraja: O‘rta - Yuqori
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          📚 MDN: Web Performance & Optimization
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-brand-500/10 to-transparent border border-amber-500/20 space-y-3">
      <div class="flex items-center gap-2 text-amber-400 font-bold text-base">
        <span class="text-xl">👶</span>
        <span>5 yoshli bola uchun tushuntirish: Poyga Mashinasi</span>
      </div>
      <p class="text-sm text-surface-200 leading-relaxed">
        Mashinangiz tez yurishi uchun ortiqcha yuklarni tushirib qoldirasiz va g‘ildiraklarini moylaysiz.
      </p>
      <p class="text-xs text-surface-300 leading-relaxed">
        <strong>HTML optimizatsiyasi</strong> — bu saytingizni xuddi poyga mashinasidek engil qilib, foydalanuvchi tugmani bosishi bilanoq 0.1 soniyada ochilishini ta’minlashdir!
      </p>
    </div>

    <!-- ⚡ Core Web Vitals Metriklari -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> Google Core Web Vitals ning 3 Asosiy Metrikasi
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-2">
          <div class="font-bold text-brand-400 text-sm">1. LCP (Largest Contentful Paint)</div>
          <p class="text-surface-300">Sahifadagi eng katta blok (rasm yoki sarlavha) <strong>2.5 soniyadan tez</strong> yuklanishi kerak.</p>
        </div>

        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-2">
          <div class="font-bold text-blue-400 text-sm">2. INP / FID (Interactivity)</div>
          <p class="text-surface-300">Tugma bosilganda sahifa <strong>100 millisekunddan tez</strong> javob qaytarishi shart.</p>
        </div>

        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-2">
          <div class="font-bold text-purple-400 text-sm">3. CLS (Cumulative Layout Shift)</div>
          <p class="text-surface-300">Sahifa yuklanganda elementlar sakrab ketmasligi (kutilmagan joy almashmasligi) kerak.</p>
        </div>
      </div>
    </div>

    <!-- Optimizatsiya Kod Qoidalari -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> Mukammal Performans HTML Shablon
      </h2>

      <div class="p-4 rounded-xl bg-surface-950 border border-surface-800 font-mono text-xs text-surface-200">
        <pre><code><span class="text-surface-500">&lt;!-- 1. Muhim shriftni oldindan yuklash --&gt;</span>
<span class="text-brand-400">&lt;link</span> <span class="text-amber-300">rel</span>=<span class="text-emerald-300">"preload"</span> <span class="text-amber-300">href</span>=<span class="text-emerald-300">"/fonts/inter.woff2"</span> <span class="text-amber-300">as</span>=<span class="text-emerald-300">"font"</span> <span class="text-amber-300">type</span>=<span class="text-emerald-300">"font/woff2"</span> <span class="text-amber-300">crossorigin</span> <span class="text-brand-400">/&gt;</span>

<span class="text-surface-500">&lt;!-- 2. Tashqi API serveriga oldindan ulanish --&gt;</span>
<span class="text-brand-400">&lt;link</span> <span class="text-amber-300">rel</span>=<span class="text-emerald-300">"preconnect"</span> <span class="text-amber-300">href</span>=<span class="text-emerald-300">"https://api.kodx.uz"</span> <span class="text-brand-400">/&gt;</span>

<span class="text-surface-500">&lt;!-- 3. CLS sakrashini oldini olish uchun aniq o‘lchamli rasm --&gt;</span>
<span class="text-brand-400">&lt;img</span> <span class="text-amber-300">src</span>=<span class="text-emerald-300">"banner.webp"</span> <span class="text-amber-300">width</span>=<span class="text-emerald-300">"1200"</span> <span class="text-amber-300">height</span>=<span class="text-emerald-300">"600"</span> <span class="text-amber-300">loading</span>=<span class="text-emerald-300">"lazy"</span> <span class="text-amber-300">alt</span>=<span class="text-emerald-300">"Banner"</span> <span class="text-brand-400">/&gt;</span></code></pre>
      </div>
    </div>

    <!-- Navigation -->
    <div class="pt-6 border-t border-surface-800 flex flex-wrap items-center justify-between gap-4">
      <router-link
        to="/html/dialog"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-900 hover:bg-surface-800 text-surface-300 text-xs font-semibold border border-surface-700 transition-colors"
      >
        <span>← 8-Dars: Zamonaviy &lt;dialog&gt;</span>
      </router-link>

      <router-link
        to="/css/kirish"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors"
      >
        <span>Keyingi Bo‘lim: CSS Kursi →</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// SEO & Web Optimization Lesson
</script>
