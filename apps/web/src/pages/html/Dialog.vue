<template>
  <div class="space-y-10 max-w-4xl pb-16">
    <!-- Header & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <div class="flex items-center gap-2 text-xs font-mono text-brand-400">
        <span>HTML Asoslari</span>
        <span>/</span>
        <span class="text-surface-400">8-Dars</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        Zamonaviy HTML5 &lt;dialog&gt;, &lt;details&gt; va &lt;summary&gt;
      </h1>
      <p class="text-base sm:text-lg text-surface-300 leading-relaxed">
        Ortiqcha kutubxonalarsiz toza HTML5 yordamida modal oynalar, alertlar va ochiluvchi FAQ akkordeonlarini yaratish.
      </p>

      <div class="flex flex-wrap items-center gap-4 text-xs text-surface-400 pt-2">
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          ⏱️ O‘qish vaqti: 6 daqiqa
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          🎯 Daraja: O‘rta
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          📚 MDN: The HTML &lt;dialog&gt; element
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-transparent border border-emerald-500/20 space-y-3">
      <div class="flex items-center gap-2 text-emerald-400 font-bold text-base">
        <span class="text-xl">👶</span>
        <span>5 yoshli bola uchun tushuntirish: Ochiluvchi Sehrli Sandiq</span>
      </div>
      <p class="text-sm text-surface-200 leading-relaxed">
        Ilgari ekranda oyna ochish uchun juda ko‘p murakkab mexanizmlar kerak edi.
      </p>
      <p class="text-xs text-surface-300 leading-relaxed">
        Endi HTML5 da <code>&lt;dialog&gt;</code> va <code>&lt;details&gt;</code> nomli tayyor sehrli sandiqlar bor. Bir marta bosasiz — o‘zi ochiladi, yana bossangiz — yopiladi!
      </p>
    </div>

    <!-- ⚡ Interaktiv Demo -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">⚡</span> Jonli Sinov: Native Modal va Akkordeon
      </h2>

      <div class="p-6 rounded-2xl bg-surface-900 border border-surface-800 space-y-6">
        <!-- Native Dialog Demo -->
        <div class="space-y-3">
          <div class="text-xs font-semibold text-surface-300">1. HTML5 Native Modal Oyna:</div>
          <button
            @click="isModalOpen = true"
            class="px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors"
          >
            Modal Oynani Ochish ✨
          </button>
        </div>

        <!-- Details / Summary FAQ -->
        <div class="space-y-3 pt-4 border-t border-surface-800">
          <div class="text-xs font-semibold text-surface-300">2. Native Akkordeon (&lt;details&gt; va &lt;summary&gt;):</div>
          <div class="space-y-2">
            <details class="p-3.5 rounded-xl bg-surface-950 border border-surface-800 text-xs text-surface-300 cursor-pointer">
              <summary class="font-bold text-white hover:text-brand-400 transition-colors">
                KODX 2.0 kurslari bepulmi?
              </summary>
              <p class="mt-2 text-surface-400 leading-relaxed">
                Ha, KODX platformasidagi barcha darslar va amaliy topshiriqlar o‘zbek dasturchilari uchun mutlaqo ochiqdir.
              </p>
            </details>

            <details class="p-3.5 rounded-xl bg-surface-950 border border-surface-800 text-xs text-surface-300 cursor-pointer">
              <summary class="font-bold text-white hover:text-brand-400 transition-colors">
                Darslarni tugatgach sertifikat beriladimi?
              </summary>
              <p class="mt-2 text-surface-400 leading-relaxed">
                Albatta! Kurs yakunida imtihon topshirib, o‘z nomingizga QR-kodli rasmiy sertifikat olishingiz mumkin.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>

    <!-- Custom Modal Overlay for Demo -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
    >
      <div class="p-6 rounded-2xl bg-surface-900 border border-surface-700 max-w-md w-full space-y-4 shadow-2xl animate-in fade-in zoom-in duration-200">
        <h3 class="text-lg font-bold text-white">Xush kelibsiz! 👋</h3>
        <p class="text-xs text-surface-300 leading-relaxed">
          Bu toza HTML5 <code>&lt;dialog&gt;</code> elementining ishlash mexanizmi. Hech qanday og‘ir kutubxonalarsiz engil va tezkor!
        </p>
        <div class="flex justify-end">
          <button
            @click="isModalOpen = false"
            class="px-4 py-2 rounded-xl bg-surface-800 hover:bg-surface-700 text-white font-bold text-xs transition-colors"
          >
            Yopish ❌
          </button>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="pt-6 border-t border-surface-800 flex flex-wrap items-center justify-between gap-4">
      <router-link
        to="/html/formalar"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-900 hover:bg-surface-800 text-surface-300 text-xs font-semibold border border-surface-700 transition-colors"
      >
        <span>← 7-Dars: Formalar & Validatsiya</span>
      </router-link>

      <router-link
        to="/html/seo"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors"
      >
        <span>Keyingi Dars: SEO & Core Web Vitals →</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isModalOpen = ref(false);
</script>
