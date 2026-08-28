<template>
  <div class="space-y-10 max-w-4xl pb-20 text-left">
    <!-- Breadcrumbs Navigation -->
    <nav class="flex items-center flex-wrap gap-2 text-xs font-mono text-surface-400">
      <router-link to="/html/kirish" class="hover:text-surface-200 transition-colors">HTML Asoslari</router-link>
      <span class="text-surface-600">&gt;</span>
      <span class="text-surface-400">4-Modul</span>
      <span class="text-surface-600">&gt;</span>
      <span class="text-brand-400 font-bold">SEO & Core Web Vitals</span>
    </nav>

    <!-- Title & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        HTML SEO & Core Web Vitals — Qidiruv Tizimlari Cho‘qqisiga Chiqish
      </h1>
      <p class="text-sm sm:text-base text-surface-300 leading-relaxed font-normal">
        To‘g‘ri semantika, meta ma’lumotlar, JSON-LD tuzilgan ma’lumotlar va tezkor render orqali Google qidiruvida 1-o‘ringa chiqish sirlari.
      </p>

      <!-- Premium Metadata Badges -->
      <div class="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono">
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          O‘qish vaqti: 8 daqiqa
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          LCP, INP, CLS Metrikalari
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Schema.org / JSON-LD
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya + C++ Under-the-hood Toggle -->
    <div class="p-6 rounded-2xl bg-surface-900/40 border border-surface-800/80 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2.5 text-amber-400 font-bold text-sm sm:text-base">
          <span class="text-xl">👶</span>
          <span>5 yoshli bola uchun tushuntirish: Kutubxona Katalogi</span>
        </div>
        <button
          @click="showUnderTheHood = !showUnderTheHood"
          class="px-2.5 py-1 rounded-lg bg-surface-800 hover:bg-surface-700 text-[11px] font-mono text-brand-400 border border-brand-500/30 transition-all cursor-pointer"
        >
          <span>{{ showUnderTheHood ? 'Analogiyaga qaytish' : '🔬 Ostidagi Kodni Ko‘rish' }}</span>
        </button>
      </div>

      <div v-if="!showUnderTheHood" class="space-y-2 text-xs sm:text-sm text-surface-300 leading-relaxed animate-in fade-in duration-200">
        <p>
          Katta kutubxonada millionlab kitoblar bor. Agar kitobingiz muqovasida uning nomi aniq yozilgan bo‘lsa, kutubxonachi uni 1 soniyada topib beradi.
        </p>
        <p class="pt-1">
          SEO ham xuddi shunday: HTML dagi aniq sarlavhalar va teglarni ko‘rib, Google qidiruvda aynan sizning saytingizni birinchi qilib chiqaradi!
        </p>
      </div>

      <div v-else class="space-y-2 font-mono text-xs animate-in fade-in duration-200">
        <div class="text-cyan-300 font-bold">Googlebot Crawler: Headless Chromium Parsing & Structured Data</div>
        <pre class="p-3.5 rounded-xl bg-surface-950 border border-surface-800 text-cyan-300 text-[11px] leading-relaxed overflow-x-auto"><code>// Headless Chromium SEO Extractor
JSONLDGraph json_ld = document.ExtractStructuredData();
PerformanceMetrics metrics = document.CalculateCoreWebVitals(); // LCP < 2.5s, CLS < 0.1</code></pre>
      </div>
    </div>

    <!-- Core Web Vitals (Hard & Deep) -->
    <section class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 1. Core Web Vitals Metrikalari
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-1.5">
          <div class="text-emerald-400 font-bold text-sm">LCP &lt; 2.5s</div>
          <div class="text-[10px] text-surface-400">Largest Contentful Paint</div>
          <p class="text-surface-300 text-[11px] font-sans leading-relaxed">
            Sahifadagi eng katta rasm yoki sarlavha ekranda to‘liq chizilishi uchun ketgan vaqt.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-1.5">
          <div class="text-cyan-400 font-bold text-sm">INP &lt; 200ms</div>
          <div class="text-[10px] text-surface-400">Interaction to Next Paint</div>
          <p class="text-surface-300 text-[11px] font-sans leading-relaxed">
            Foydalanuvchi tugmani bosgandan to ekranda o‘zgarish sodir bo‘lguncha bo‘lgan sezgirlik vaqti.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-1.5">
          <div class="text-amber-400 font-bold text-sm">CLS &lt; 0.1</div>
          <div class="text-[10px] text-surface-400">Cumulative Layout Shift</div>
          <p class="text-surface-300 text-[11px] font-sans leading-relaxed">
            Sahifa yuklanayotganda rasmlar sababli matnlarning kutilmaganda pastga sakrab ketishi darajasi.
          </p>
        </div>
      </div>
    </section>

    <!-- Interactive Live Code Editor -->
    <section class="space-y-4 pt-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 2. Jonli Mashq: JSON-LD va SEO Meta Teglar
      </h2>
      <InteractiveCodePlayground />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InteractiveCodePlayground from '../../components/InteractiveCodePlayground.vue';

const showUnderTheHood = ref(false);
</script>
