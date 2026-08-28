<template>
  <div class="space-y-8 max-w-5xl mx-auto pb-16">
    <!-- Header -->
    <div class="space-y-3 text-left">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono">
        <span>📰</span> TEXNOLOGIK YANGILIKLAR
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        KODX Yangiliklari & Veb Trendlar
      </h1>
      <p class="text-sm sm:text-base text-surface-400 leading-relaxed max-w-3xl">
        Dasturlash olamidagi eng muhim relizlar, WHATWG standartlari va KODX platformasidagi yangiliklar.
      </p>
    </div>

    <!-- Featured News Hero -->
    <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-950/60 via-surface-900 to-surface-900 border border-brand-500/30 text-left space-y-4 shadow-2xl">
      <div class="flex items-center gap-2">
        <span class="px-2.5 py-0.5 rounded bg-brand-500 text-surface-950 text-[10px] font-mono font-bold">KODX 2.0 RELIZ</span>
        <span class="text-xs text-surface-400 font-mono">2026-yil</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-white">
        KODX 2.0 Beta: Yangi Interaktiv Knowledge Universe Tizimi Ishga Tushdi
      </h2>
      <p class="text-xs sm:text-sm text-surface-300 leading-relaxed max-w-3xl">
        KODX endi shunchaki darslik emas, balki chuqur normativ spetsifikatsiyalar (WHATWG, W3C, TC39), 5 yoshli bola uchun analogiyalar, brauzer dvigatellari (Chromium/V8) tahlili va interaktiv kod muharririga ega to‘liq ekotizimdir.
      </p>
      <div class="pt-2">
        <router-link to="/html/kirish" class="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-bold text-xs">
          <span>HTML Kursini Boshlash</span>
          <span>→</span>
        </router-link>
      </div>
    </div>

    <!-- News List -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
      <div
        v-for="article in articles"
        :key="article.title"
        class="p-5 rounded-2xl bg-surface-900/60 border border-surface-800 space-y-3 flex flex-col justify-between"
      >
        <div class="space-y-2">
          <div class="flex items-center justify-between text-[11px] font-mono text-surface-400">
            <span>{{ article.category }}</span>
            <span>{{ article.date }}</span>
          </div>
          <h3 class="text-base font-bold text-white hover:text-brand-300 transition-colors">
            {{ article.title }}
          </h3>
          <p class="text-xs text-surface-400 leading-relaxed">
            {{ article.summary }}
          </p>
        </div>

        <div class="pt-2 border-t border-surface-800/80">
          <router-link :to="article.link" class="text-xs font-semibold text-brand-400 hover:underline">
            Batafsil o‘qish →
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const articles = [
  {
    title: 'WHATWG HTML: Yangi Popover API va Dialog Elementlari Standartlashdi',
    category: 'Veb Standartlari',
    date: '3 kun oldin',
    summary: 'JavaScript kutubxonalarisiz (modalsiz) to‘g‘ridan-to‘g‘ri HTML va CSS orqali ochiluvchi popover elementlari brauzerlarga kiritildi.',
    link: '/html/dialog',
  },
  {
    title: 'CSS Subgrid va Container Queries: Responsiv Dizaynning Yangi Davri',
    category: 'CSS Yangiliklari',
    date: '1 hafta oldin',
    summary: 'Ekran o‘lchamiga emas, balki konteyner o‘lchamiga qarab stillarni moslashtiruvchi zamonaviy CSS imkoniyatlari.',
    link: '/css/grid',
  },
];
</script>
