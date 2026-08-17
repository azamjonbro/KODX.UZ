<template>
  <div class="space-y-10 max-w-4xl pb-16">
    <!-- Header & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <div class="flex items-center gap-2 text-xs font-mono text-brand-400">
        <span>CSS Asoslari</span>
        <span>/</span>
        <span class="text-surface-400">5-Dars</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        2D To‘r Layouti — CSS Grid va Subgrid
      </h1>
      <p class="text-base sm:text-lg text-surface-300 leading-relaxed">
        Murakkab veb-sahifa strukturalarini bir vaqtning o‘zida ham qatorlar (rows), ham ustunlar (columns) bo‘yicha aniq koordinatalarga joylashtirish.
      </p>

      <div class="flex flex-wrap items-center gap-4 text-xs text-surface-400 pt-2">
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          ⏱️ O‘qish vaqti: 12 daqiqa
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          🎯 Daraja: O‘rta - Yuqori
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          📚 MDN: CSS Grid Layout
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent border border-emerald-500/20 space-y-3">
      <div class="flex items-center gap-2 text-emerald-400 font-bold text-base">
        <span class="text-xl">👶</span>
        <span>5 yoshli bola uchun tushuntirish: Shaxmat Doskasi</span>
      </div>
      <p class="text-sm text-surface-200 leading-relaxed">
        Shaxmat doskasida kataklar bor: A1, B2, C3.
      </p>
      <p class="text-xs text-surface-300 leading-relaxed">
        <strong>CSS Grid</strong> — bu veb-sahifani xuddi shaxmat doskasiga o‘xshatib kataklarga bo‘lib chiqishdir. Siz har bir rasm yoki kartochkaga "Sen 2 ta katakni egalla, sen esa pastki 3 ta katakda tur" deb buyruq berasiz!
      </p>
    </div>

    <!-- ⚡ Interaktiv CSS Grid Ustunlar Simulyatori -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">⚡</span> Jonli Sinov: Ustunlar Soni va Ortiqcha Oraliqni O‘zgartiring
      </h2>

      <div class="p-6 rounded-2xl bg-surface-900 border border-surface-800 space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label class="font-semibold text-surface-300">Ustunlar soni (columns): {{ columnsCount }} ta</label>
            <input
              v-model.number="columnsCount"
              type="range"
              min="1"
              max="4"
              class="w-full mt-2 accent-brand-500"
            />
          </div>

          <div>
            <label class="font-semibold text-surface-300">Oraliq masofasi (gap): {{ gapSize }}px</label>
            <input
              v-model.number="gapSize"
              type="range"
              min="4"
              max="32"
              step="4"
              class="w-full mt-2 accent-brand-500"
            />
          </div>
        </div>

        <!-- Live Grid Preview -->
        <div
          class="p-6 rounded-2xl bg-surface-950 border border-surface-800 grid transition-all"
          :style="{
            gridTemplateColumns: `repeat(${columnsCount}, minmax(0, 1fr))`,
            gap: `${gapSize}px`
          }"
        >
          <div
            v-for="n in 6"
            :key="n"
            class="p-4 rounded-xl bg-surface-900 border border-surface-700 flex items-center justify-center font-bold text-brand-400 text-sm font-mono"
          >
            Karta #{{ n }}
          </div>
        </div>

        <div class="p-3 rounded-xl bg-surface-950 border border-surface-800 font-mono text-xs text-emerald-300">
          .grid-container { display: grid; grid-template-columns: repeat({{ columnsCount }}, 1fr); gap: {{ gapSize }}px; }
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="pt-6 border-t border-surface-800 flex flex-wrap items-center justify-between gap-4">
      <router-link
        to="/css/flexbox"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-900 hover:bg-surface-800 text-surface-300 text-xs font-semibold border border-surface-700 transition-colors"
      >
        <span>← 4-Dars: CSS Flexbox</span>
      </router-link>

      <router-link
        to="/css/modern"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors"
      >
        <span>Keyingi Dars: Zamonaviy CSS →</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const columnsCount = ref(3);
const gapSize = ref(16);
</script>
