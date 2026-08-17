<template>
  <div class="space-y-10 max-w-4xl pb-16">
    <!-- Header & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <div class="flex items-center gap-2 text-xs font-mono text-brand-400">
        <span>HTML Asoslari</span>
        <span>/</span>
        <span class="text-surface-400">4-Dars</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        HTML &lt;head&gt; va SEO Meta Teglar
      </h1>
      <p class="text-base sm:text-lg text-surface-300 leading-relaxed">
        Brauzer va qidiruv tizimlari (Google, Yandex) uchun ko‘rinmas, ammo sayt reytingi va xavfsizligi uchun eng muhim metadata bo‘limi.
      </p>

      <div class="flex flex-wrap items-center gap-4 text-xs text-surface-400 pt-2">
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          ⏱️ O‘qish vaqti: 8 daqiqa
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          🎯 Daraja: O‘rta
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          📚 MDN: The Document Metadata (&lt;head&gt;)
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-transparent border border-blue-500/20 space-y-3">
      <div class="flex items-center gap-2 text-blue-400 font-bold text-base">
        <span class="text-xl">👶</span>
        <span>5 yoshli bola uchun tushuntirish: Kitobning Yashirin Mundarijasi</span>
      </div>
      <p class="text-sm text-surface-200 leading-relaxed">
        Kitobning ichidagi rasmlar va ertaklar — bu <code>&lt;body&gt;</code>.
      </p>
      <p class="text-xs text-surface-300 leading-relaxed">
        Lekin kitobning eng birinchi sahifasida muallif kim, qaysi yili bosilgan va qanday qoidalar bilan o‘qilishi kerakligi yozilgan. Kitobxon bunga qaramaydi, lekin kutubxonachi (Google) kitobni topish uchun aynan shu yozuvlarga qaraydi. Bu — <strong>&lt;head&gt;</strong>!
      </p>
    </div>

    <!-- ⚡ Interaktiv OpenGraph & Google Snippet Simulator -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">⚡</span> Jonli Sinov: Google va Telegramda Qanday Ko‘rinadi?
      </h2>
      <p class="text-sm text-surface-400">
        Quyidagi maydonlarni to‘ldiring va saytingiz Google qidiruvida hamda Telegramda qanday ko‘rinishini jonli ko‘ring:
      </p>

      <div class="p-5 rounded-2xl bg-surface-900 border border-surface-800 space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="space-y-1.5">
            <label class="text-xs font-semibold text-surface-300">Sayt Sarlavhasi (&lt;title&gt;):</label>
            <input
              v-model="metaTitle"
              type="text"
              class="w-full px-3 py-2 bg-surface-950 border border-surface-700 rounded-lg text-xs text-white focus:outline-none focus:border-brand-500"
            />
          </div>

          <div class="space-y-1.5">
            <label class="text-xs font-semibold text-surface-300">Tavsifi (meta description):</label>
            <input
              v-model="metaDesc"
              type="text"
              class="w-full px-3 py-2 bg-surface-950 border border-surface-700 rounded-lg text-xs text-white focus:outline-none focus:border-brand-500"
            />
          </div>
        </div>

        <!-- Previews -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <!-- Google Search Card -->
          <div class="p-4 rounded-xl bg-white text-surface-950 space-y-1 font-sans">
            <div class="text-[11px] text-gray-500 flex items-center gap-1.5">
              <span class="w-3.5 h-3.5 rounded-full bg-brand-500 inline-block"></span>
              https://kodx.uz › darslar
            </div>
            <div class="text-base text-blue-800 font-medium hover:underline cursor-pointer truncate">
              {{ metaTitle || 'KODX 2.0 Ta\'lim Platformasi' }}
            </div>
            <div class="text-xs text-gray-600 line-clamp-2 leading-relaxed">
              {{ metaDesc || 'O‘zbek tilida professional dasturlash darslari, amaliyot va loyihalar.' }}
            </div>
          </div>

          <!-- Telegram Message Snippet -->
          <div class="p-4 rounded-xl bg-surface-950 border border-surface-800 flex flex-col justify-center">
            <div class="text-xs font-mono text-surface-500 mb-2">Telegram OpenGraph Ko‘rinishi:</div>
            <div class="p-3 rounded-xl bg-surface-900 border-l-4 border-brand-500 space-y-1">
              <div class="text-xs font-bold text-brand-400">KODX.UZ</div>
              <div class="text-xs font-semibold text-white">{{ metaTitle || 'KODX 2.0' }}</div>
              <div class="text-[11px] text-surface-400 leading-tight">{{ metaDesc || 'Dasturlashni amaliy o‘rganing.' }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="pt-6 border-t border-surface-800 flex flex-wrap items-center justify-between gap-4">
      <router-link
        to="/html/attributlar"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-900 hover:bg-surface-800 text-surface-300 text-xs font-semibold border border-surface-700 transition-colors"
      >
        <span>← 3-Dars: HTML Atributlar</span>
      </router-link>

      <router-link
        to="/html/semantika"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors"
      >
        <span>Keyingi Dars: Semantik HTML →</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const metaTitle = ref('KODX 2.0 — O‘zbek Dasturchilari Platformasi');
const metaDesc = ref('Interaktiv amaliyot, zamonaviy texnologiyalar va mukammal yo‘l xaritalari.');
</script>
