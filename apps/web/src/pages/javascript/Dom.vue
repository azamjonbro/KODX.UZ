<template>
  <div class="space-y-10 max-w-4xl pb-16">
    <!-- Header & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <div class="flex items-center gap-2 text-xs font-mono text-brand-400">
        <span>JavaScript Asoslari</span>
        <span>/</span>
        <span class="text-surface-400">4-Dars</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        DOM Manipulyatsiyasi — Vebni Jonlantirish
      </h1>
      <p class="text-base sm:text-lg text-surface-300 leading-relaxed">
        JavaScript orqali sahifadagi har qanday HTML elementni topish (`querySelector`), uning matnini, rangini yoki klasslarini real vaqtda o‘zgartirish.
      </p>

      <div class="flex flex-wrap items-center gap-4 text-xs text-surface-400 pt-2">
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          ⏱️ O‘qish vaqti: 9 daqiqa
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          🎯 Daraja: O‘rta
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          📚 MDN: Introduction to the DOM
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-brand-500/10 to-transparent border border-emerald-500/20 space-y-3">
      <div class="flex items-center gap-2 text-emerald-400 font-bold text-base">
        <span class="text-xl">👶</span>
        <span>5 yoshli bola uchun tushuntirish: Sehrgar Qo‘g‘irchoqboz</span>
      </div>
      <p class="text-sm text-surface-200 leading-relaxed">
        Sahifadagi hamma rasmlar va yozuvlar — bu sahnadagi qo‘g‘irchoqlar (DOM elementlari).
      </p>
      <p class="text-xs text-surface-300 leading-relaxed">
        <strong>JavaScript</strong> — bu qo‘g‘irchoqlarning iplarini tortadigan sehrgar! Qo‘g‘irchoqboz ipni tortsa, qo‘g‘irchoq kiyimini almashtiradi (CSS klassi o‘zgaradi) yoki gapira boshlaydi (matni o‘zgaradi)!
      </p>
    </div>

    <!-- ⚡ Interaktiv DOM Manipulator Laboratoriyasi -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">⚡</span> Jonli Sinov: JS Orqali Elementni Boshqaring
      </h2>

      <div class="p-6 rounded-2xl bg-surface-900 border border-surface-800 space-y-6">
        <!-- Controls -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            @click="boxText = 'Salom KODX! 🚀'"
            class="px-3.5 py-2.5 rounded-xl bg-surface-800 hover:bg-surface-700 text-xs font-mono text-white transition-colors"
          >
            Matnni o‘zgartirish
          </button>
          <button
            @click="boxBg = boxBg === 'bg-emerald-500' ? 'bg-purple-600' : 'bg-emerald-500'"
            class="px-3.5 py-2.5 rounded-xl bg-surface-800 hover:bg-surface-700 text-xs font-mono text-white transition-colors"
          >
            Rangini almashtirish
          </button>
          <button
            @click="isRounded = !isRounded"
            class="px-3.5 py-2.5 rounded-xl bg-surface-800 hover:bg-surface-700 text-xs font-mono text-white transition-colors"
          >
            Doiraga aylantirish
          </button>
        </div>

        <!-- Target Element -->
        <div class="flex items-center justify-center p-8 bg-surface-950 rounded-2xl border border-surface-800">
          <div
            :class="[
              'w-48 h-24 flex items-center justify-center font-bold text-surface-950 text-sm shadow-xl transition-all duration-300',
              boxBg,
              isRounded ? 'rounded-full scale-105' : 'rounded-2xl'
            ]"
          >
            {{ boxText }}
          </div>
        </div>

        <!-- JS Code Preview -->
        <div class="p-3 rounded-xl bg-surface-950 border border-surface-800 font-mono text-xs text-brand-300">
          const el = document.querySelector('#karta');<br />
          el.innerText = '{{ boxText }}';<br />
          el.className = '{{ boxBg }} {{ isRounded ? 'rounded-full' : 'rounded-2xl' }}';
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="pt-6 border-t border-surface-800 flex flex-wrap items-center justify-between gap-4">
      <router-link
        to="/javascript/funksiyalar"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-900 hover:bg-surface-800 text-surface-300 text-xs font-semibold border border-surface-700 transition-colors"
      >
        <span>← 3-Dars: JS Funksiyalar</span>
      </router-link>

      <router-link
        to="/javascript/events"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors"
      >
        <span>Keyingi Dars: Hodisalar (Events) →</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const boxText = ref('Boshlang‘ich Matn');
const boxBg = ref('bg-emerald-500');
const isRounded = ref(false);
</script>
