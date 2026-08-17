<template>
  <div class="space-y-10 max-w-4xl pb-16">
    <!-- Header & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <div class="flex items-center gap-2 text-xs font-mono text-brand-400">
        <span>CSS Asoslari</span>
        <span>/</span>
        <span class="text-surface-400">4-Dars</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        1D Moslashuvchan Layout — CSS Flexbox
      </h1>
      <p class="text-base sm:text-lg text-surface-300 leading-relaxed">
        Elementlarni bir qatorda yoki bitta ustunda tekislash, oraliq masofalarni avtomatik taqsimlash va har qanday ekranga moslashuvchan dizayn yaratish.
      </p>

      <div class="flex flex-wrap items-center gap-4 text-xs text-surface-400 pt-2">
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          ⏱️ O‘qish vaqti: 10 daqiqa
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          🎯 Daraja: O‘rta
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          📚 MDN: Basic concepts of flexbox
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-brand-500/10 to-transparent border border-blue-500/20 space-y-3">
      <div class="flex items-center gap-2 text-blue-400 font-bold text-base">
        <span class="text-xl">👶</span>
        <span>5 yoshli bola uchun tushuntirish: O‘yinchoq Mashinalar Qatori</span>
      </div>
      <p class="text-sm text-surface-200 leading-relaxed">
        Polga 3 ta o‘yinchoq mashina qo‘ydingiz.
      </p>
      <p class="text-xs text-surface-300 leading-relaxed">
        <strong>Flexbox</strong> — bu sizning sehrli qo‘lingiz: xohlasangiz ularni yonma-yon qilib bir chiziqqa terasiz (<code>row</code>), xohlasangiz tepadan pastga ustun qilasiz (<code>column</code>), xohlasangiz oralarini bir xil masofada ochib qo‘yasiz (<code>space-between</code>)!
      </p>
    </div>

    <!-- ⚡ Interaktiv Flexbox Playground -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">⚡</span> Jonli Sinov: Flexbox Xossalarini Boshqaring
      </h2>

      <div class="p-6 rounded-2xl bg-surface-900 border border-surface-800 space-y-6">
        <!-- Controls -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div class="space-y-1.5">
            <label class="font-semibold text-surface-300">justify-content (Asosiy o‘q bo‘yicha):</label>
            <select
              v-model="justifyContent"
              class="w-full px-3 py-2 bg-surface-950 border border-surface-700 rounded-xl text-white focus:outline-none focus:border-brand-500"
            >
              <option value="flex-start">flex-start (Chapda)</option>
              <option value="center">center (Markazda)</option>
              <option value="flex-end">flex-end (O‘ngda)</option>
              <option value="space-between">space-between (Chetlarga yoyilgan)</option>
              <option value="space-around">space-around (Teng oraliq)</option>
            </select>
          </div>

          <div class="space-y-1.5">
            <label class="font-semibold text-surface-300">align-items (Ko‘ndalang o‘q bo‘yicha):</label>
            <select
              v-model="alignItems"
              class="w-full px-3 py-2 bg-surface-950 border border-surface-700 rounded-xl text-white focus:outline-none focus:border-brand-500"
            >
              <option value="stretch">stretch (Cho‘zilgan)</option>
              <option value="center">center (Markazda)</option>
              <option value="flex-start">flex-start (Tepada)</option>
              <option value="flex-end">flex-end (Pastda)</option>
            </select>
          </div>
        </div>

        <!-- Live Container Preview -->
        <div
          class="p-6 rounded-2xl bg-surface-950 border border-surface-800 min-h-[160px] flex gap-3 transition-all"
          :style="{ justifyContent: justifyContent, alignItems: alignItems }"
        >
          <div class="w-16 h-16 rounded-xl bg-brand-500 flex items-center justify-center font-bold text-surface-950 text-sm shadow-lg shadow-brand-500/20">
            1
          </div>
          <div class="w-16 h-20 rounded-xl bg-blue-500 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-blue-500/20">
            2
          </div>
          <div class="w-16 h-14 rounded-xl bg-purple-500 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-purple-500/20">
            3
          </div>
        </div>

        <!-- CSS Code Output -->
        <div class="p-3 rounded-xl bg-surface-950 border border-surface-800 font-mono text-xs text-brand-300">
          .container { display: flex; justify-content: {{ justifyContent }}; align-items: {{ alignItems }}; }
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="pt-6 border-t border-surface-800 flex flex-wrap items-center justify-between gap-4">
      <router-link
        to="/css/box-model"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-900 hover:bg-surface-800 text-surface-300 text-xs font-semibold border border-surface-700 transition-colors"
      >
        <span>← 3-Dars: CSS Box Model</span>
      </router-link>

      <router-link
        to="/css/grid"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors"
      >
        <span>Keyingi Dars: CSS Grid →</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const justifyContent = ref('center');
const alignItems = ref('center');
</script>
