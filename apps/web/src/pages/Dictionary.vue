<template>
  <div class="space-y-8 max-w-5xl mx-auto pb-16">
    <!-- Header -->
    <div class="space-y-3 text-left">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono">
        <span>📖</span> DASTURLASH LUG‘ATI
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        Web Dasturlash Atamalari Lug‘ati
      </h1>
      <p class="text-sm sm:text-base text-surface-400 leading-relaxed max-w-3xl">
        Murakkab IT atamalarini o‘zbek tilida, sodda misollar va vizual izohlar orqali tushunib oling.
      </p>
    </div>

    <!-- Search & Filter Bar -->
    <div class="flex flex-col sm:flex-row gap-3">
      <div class="relative flex-1">
        <input
          v-model="search"
          type="text"
          placeholder="Atama yoki texnologiyani qidiring (masalan: DOM, Closure, SSR)..."
          class="w-full pl-10 pr-4 py-3 bg-surface-900 border border-surface-800 focus:border-brand-500 rounded-xl text-xs sm:text-sm text-white placeholder-surface-500 focus:outline-none"
        />
        <svg class="w-4 h-4 text-surface-400 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <div class="flex gap-2">
        <button
          v-for="cat in ['Barchasi', 'HTML', 'CSS', 'JavaScript', 'Arxitektura']"
          :key="cat"
          @click="activeCategory = cat"
          class="px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap"
          :class="[
            activeCategory === cat
              ? 'bg-brand-500 text-surface-950 font-bold'
              : 'bg-surface-900 text-surface-400 hover:text-white border border-surface-800'
          ]"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- Dictionary Terms Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
      <div
        v-for="item in filteredTerms"
        :key="item.term"
        class="p-5 rounded-2xl bg-surface-900/60 border border-surface-800/80 hover:border-brand-500/40 transition-all space-y-2 group"
      >
        <div class="flex items-center justify-between">
          <h3 class="text-base font-bold text-white group-hover:text-brand-300 transition-colors">
            {{ item.term }}
          </h3>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-950 border border-surface-800 text-surface-400">
            {{ item.category }}
          </span>
        </div>

        <p class="text-xs text-surface-300 leading-relaxed">
          {{ item.definition }}
        </p>

        <div v-if="item.analogy" class="p-2.5 rounded-lg bg-surface-950 border border-surface-800 text-[11px] text-amber-300/90 leading-relaxed">
          💡 <strong>Sodda tushuncha:</strong> {{ item.analogy }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const search = ref('');
const activeCategory = ref('Barchasi');

const terms = [
  {
    term: 'DOM (Document Object Model)',
    category: 'HTML & JS',
    definition: 'Brauzer HTML hujjatni o‘qib olgach, xotirada yaratadigan daraxtsimon obyektlar modeli. JS aynan DOM orqali sahifani o‘zgartiradi.',
    analogy: 'Uyning arxitektura loyihasi. Undagi har bir xonani xohlagan vaqtda qayta bo‘yash mumkin.',
  },
  {
    term: 'Closure (Yopilish)',
    category: 'JavaScript',
    definition: 'Ichki funksiyaning o‘zidan tashqaridagi o‘zgaruvchilarga tashqi funksiya ishlab bo‘lganidan keyin ham murojaat qila olish qobiliyati.',
    analogy: 'Siz uydan chiqib ketsangiz ham, cho‘ntagingizdagi uy kalitidan foydalana olishingizga o‘xshaydi.',
  },
  {
    term: 'Event Loop',
    category: 'JavaScript',
    definition: 'JavaScript bir oqimli (single-threaded) bo‘lishiga qaramay, asinxron vazifalarni Call Stack va Callback Queue orqali navbatma-navbat bajarish mexanizmi.',
    analogy: 'Restorandagi bitta ofitsiant bir vaqtning o‘zida o‘nlab stollarga xizmat ko‘rsatishi.',
  },
  {
    term: 'Box Model',
    category: 'CSS',
    definition: 'Har bir HTML elementi 4 qatlamdan: Content, Padding (ichki masofa), Border (hoshiya) va Margin (tashqi masofa) dan iborat to‘rtburchak quti ekanligi qoidasi.',
    analogy: 'Pochta qutisi: ichidagi sovg‘a (content), ko‘pik qatlam (padding), quti devori (border) va qutilar orasidagi oraliq (margin).',
  },
  {
    term: 'SSR (Server-Side Rendering)',
    category: 'Arxitektura',
    definition: 'HTML sahifaning brauzerda emas, balki serverda to‘liq yig‘ilib, tayyor holda foydalanuvchiga yuborilishi (SEO uchun juda foydali).',
    analogy: 'Restoranda taomni o‘zingiz pishirmaysiz, oshxona tayyor taomni stolga olib keladi.',
  },
  {
    term: 'CSR (Client-Side Rendering)',
    category: 'Arxitektura',
    definition: 'Brauzerga bo‘sh HTML va JavaScript yuborilib, butun sahifa foydalanuvchining brauzerida chizilishi (SPA tizimlari).',
    analogy: 'IKEA mebeli: sizga qismlar va qo‘llanma keladi, mebelni uyingizda o‘zingiz yig‘asiz.',
  },
];

const filteredTerms = computed(() => {
  return terms.filter((item) => {
    const matchCat = activeCategory.value === 'Barchasi' || item.category.includes(activeCategory.value);
    const matchSearch =
      !search.value.trim() ||
      item.term.toLowerCase().includes(search.value.toLowerCase()) ||
      item.definition.toLowerCase().includes(search.value.toLowerCase());
    return matchCat && matchSearch;
  });
});
</script>
