<template>
  <div class="space-y-10 max-w-4xl pb-16">
    <!-- Title & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <div class="flex items-center gap-2 text-xs font-mono text-brand-400">
        <span>JavaScript Asoslari</span>
        <span>/</span>
        <span class="text-surface-400">3-Dars</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        JavaScript Funksiyalar — Qayta Ishlatiluvchi Sehrli Retseptlar
      </h1>
      <p class="text-base sm:text-lg text-surface-300 leading-relaxed">
        Funksiyalar — ma’lum bir vazifani bajarish uchun yozilgan va istalgan vaqtda qayta-qayta chaqirib ishlatilishi mumkin bo‘lgan kod blokidir.
      </p>

      <div class="flex flex-wrap items-center gap-4 text-xs text-surface-400 pt-2">
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          ⏱️ O‘qish vaqti: 8 daqiqa
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          🎯 Daraja: Boshlang‘ich
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          📚 MDN: JavaScript Functions
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 via-brand-500/10 to-transparent border border-purple-500/20 space-y-3">
      <div class="flex items-center gap-2 text-purple-400 font-bold text-base">
        <span class="text-xl">👶</span>
        <span>5 yoshli bola uchun tushuntirish: Sehrli Sharbat Blenderi</span>
      </div>
      <p class="text-sm text-surface-200 leading-relaxed">
        Tasavvur qiling, oshxonangizda <strong>sharbat chiqargich (blender)</strong> bor:
      </p>
      <ul class="text-xs text-surface-300 space-y-1.5 list-disc list-inside">
        <li>Siz blenderga <strong>olma</strong> va <strong>banan</strong> solasiz (bu — <strong>Parametrlar</strong>).</li>
        <li>Tugmani bosasiz — blender ularni maydalaydi va aralashtiradi (bu — <strong>Funksiya Tanasi</strong>).</li>
        <li>Natijada sizga tayyor muzdek <strong>kokteyl</strong> chiqarib beradi (bu — <strong>`return` / Natija</strong>).</li>
      </ul>
      <p class="text-xs text-surface-400 pt-1">
        Siz har safar yangi sharbat ichish uchun blenderni noldan yasashingiz shart emas — shunchaki yangi meva solib, tugmani bossangiz kifoya!
      </p>
    </div>

    <!-- ⚡ Interaktiv Funksiya Blenderi -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">⚡</span> Jonli Sinov: Sehrli Funksiyani Ishga Tushiring
      </h2>
      <p class="text-sm text-surface-400">
        Parametrlarni kiriting va funksiya qanday natija qaytarishini (return) ko‘ring:
      </p>

      <div class="p-5 rounded-2xl bg-surface-900 border border-surface-800 space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- Param 1 -->
          <div class="space-y-1.5">
            <label class="text-xs font-semibold text-surface-300">Foydalanuvchi Ismi (ism):</label>
            <input
              v-model="userName"
              type="text"
              class="w-full px-3 py-2 bg-surface-950 border border-surface-700 rounded-lg text-xs text-white focus:outline-none focus:border-brand-500"
              placeholder="Ism kiriting..."
            />
          </div>

          <!-- Param 2 -->
          <div class="space-y-1.5">
            <label class="text-xs font-semibold text-surface-300">O‘rganilayotgan Til (til):</label>
            <input
              v-model="learningSubject"
              type="text"
              class="w-full px-3 py-2 bg-surface-950 border border-surface-700 rounded-lg text-xs text-white focus:outline-none focus:border-brand-500"
              placeholder="Masalan: JavaScript"
            />
          </div>
        </div>

        <!-- Code & Output -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div class="p-4 rounded-xl bg-surface-950 border border-surface-800 space-y-2">
            <div class="text-xs font-mono text-surface-500">Funksiya Ta’rifi (Arrow Function):</div>
            <pre class="text-xs font-mono text-purple-300"><code>const tabrikla = (ism, til) => {
  return `Salom ${ism}! ${til} olamiga xush kelibsiz! 🚀`;
};

<span class="text-surface-500">// Chaqirish (Call):</span>
const xabar = tabrikla("{{ userName }}", "{{ learningSubject }}");</code></pre>
          </div>

          <div class="p-4 rounded-xl bg-surface-950 border border-surface-800 flex flex-col justify-center">
            <div class="text-xs font-mono text-surface-500 mb-2">Qaytgan Natija (Return Value):</div>
            <div class="p-4 rounded-lg bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-mono leading-relaxed">
              {{ `Salom ${userName || 'Dasturchi'}! ${learningSubject || 'JavaScript'} olamiga xush kelibsiz! 🚀` }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Funksiya Yozishning 3 Usuli -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> Funksiya Yozishning 3 Xil Zamonaviy Usuli
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-2">
          <span class="font-bold text-brand-400 text-sm">1. Function Declaration</span>
          <pre class="p-2.5 bg-surface-950 rounded text-emerald-300 font-mono text-[11px]"><code>function qoshish(a, b) {
  return a + b;
}</code></pre>
          <p class="text-surface-400">Klassik usul. Hoisting tufayli e’lon qilishdan oldin ham chaqirish mumkin.</p>
        </div>

        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-2">
          <span class="font-bold text-blue-400 text-sm">2. Function Expression</span>
          <pre class="p-2.5 bg-surface-950 rounded text-blue-300 font-mono text-[11px]"><code>const qoshish = function(a, b) {
  return a + b;
};</code></pre>
          <p class="text-surface-400">Funksiya o‘zgaruvchiga qiymat sifatida yuklanadi.</p>
        </div>

        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-2">
          <span class="font-bold text-purple-400 text-sm">3. Arrow Function (ES6) ⭐</span>
          <pre class="p-2.5 bg-surface-950 rounded text-purple-300 font-mono text-[11px]"><code>const qoshish = (a, b) => a + b;</code></pre>
          <p class="text-surface-400">Eng ixcham va zamonaviy usul. Har kuni eng ko‘p ishlatiladi.</p>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="pt-6 border-t border-surface-800 flex flex-wrap items-center justify-between gap-4">
      <router-link
        to="/javascript/ozgaruvchilar"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-900 hover:bg-surface-800 text-surface-300 text-xs font-semibold border border-surface-700 transition-colors"
      >
        <span>← 2-Dars: JS O‘zgaruvchilar</span>
      </router-link>

      <router-link
        to="/"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors"
      >
        <span>🎉 Bosh Sahifaga Qaytish →</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const userName = ref('Azamjon');
const learningSubject = ref('Vue & Node.js');
</script>