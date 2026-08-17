<template>
  <div class="space-y-10 max-w-4xl pb-16">
    <!-- Header & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <div class="flex items-center gap-2 text-xs font-mono text-brand-400">
        <span>JavaScript Asoslari</span>
        <span>/</span>
        <span class="text-surface-400">5-Dars</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        Hodisalar (Events), Bubbling va Capturing
      </h1>
      <p class="text-base sm:text-lg text-surface-300 leading-relaxed">
        Foydalanuvchi harakatlarini (bosish, yozish, skroll qilish) eshitib turish (`addEventListener`) va hodisalarning yuqoriga ko‘tarilish (Event Bubbling) qonuniyati.
      </p>

      <div class="flex flex-wrap items-center gap-4 text-xs text-surface-400 pt-2">
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          ⏱️ O‘qish vaqti: 8 daqiqa
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          🎯 Daraja: O‘rta
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          📚 MDN: Introduction to events
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent border border-amber-500/20 space-y-3">
      <div class="flex items-center gap-2 text-amber-400 font-bold text-base">
        <span class="text-xl">👶</span>
        <span>5 yoshli bola uchun tushuntirish: Eshik Qo‘ng‘irog‘i</span>
      </div>
      <p class="text-sm text-surface-200 leading-relaxed">
        Mehmon eshik qo‘ng‘irog‘ini bosganida, butun uyda "Jiring-jiring!" degan ovoz yangraydi.
      </p>
      <p class="text-xs text-surface-300 leading-relaxed">
        <strong>Hodisa (Event)</strong> — bu xuddi shu qo‘ng‘iroq: foydalanuvchi tugmani bosishi bilan kompyuterda oldindan tayyorlab qo‘yilgan maxsus funksiya uyg‘onadi va ishga tushadi!
      </p>
    </div>

    <!-- ⚡ Interaktiv Event Bubbling Simulator -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">⚡</span> Jonli Sinov: Qaysi Qavat Bosilganini Aniqlang
      </h2>

      <div class="p-6 rounded-2xl bg-surface-900 border border-surface-800 space-y-4">
        <div
          @click="logEvent('1. Katta Ota Quti (Grandparent)')"
          class="p-8 rounded-2xl bg-surface-950 border-2 border-brand-500/40 cursor-pointer space-y-4 hover:border-brand-500 transition-colors"
        >
          <div class="text-xs font-mono font-bold text-brand-400">Grandparent (#ota)</div>

          <div
            @click.stop="logEvent('2. O‘rta Bola Quti (Parent)')"
            class="p-6 rounded-xl bg-surface-900 border-2 border-blue-500/40 cursor-pointer space-y-4 hover:border-blue-500 transition-colors"
          >
            <div class="text-xs font-mono font-bold text-blue-400">Parent (.ona)</div>

            <button
              @click.stop="logEvent('3. Markaziy Tugma (Target Button)')"
              class="px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-surface-950 font-bold text-xs shadow-lg shadow-emerald-500/20"
            >
              Meni Bosing! ✨
            </button>
          </div>
        </div>

        <!-- Log output -->
        <div class="p-3 rounded-xl bg-surface-950 border border-surface-800 text-xs font-mono space-y-1">
          <div class="text-surface-500">Hodisalar Tarixi:</div>
          <div v-if="logs.length === 0" class="text-surface-600 italic">Hali hech qaysi quti bosilmadi...</div>
          <div v-for="(log, idx) in logs" :key="idx" class="text-emerald-300">
            👉 {{ log }}
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="pt-6 border-t border-surface-800 flex flex-wrap items-center justify-between gap-4">
      <router-link
        to="/javascript/dom"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-900 hover:bg-surface-800 text-surface-300 text-xs font-semibold border border-surface-700 transition-colors"
      >
        <span>← 4-Dars: DOM Manipulyatsiyasi</span>
      </router-link>

      <router-link
        to="/javascript/async"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors"
      >
        <span>Keyingi Dars: Asinxron JS & Event Loop →</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const logs = ref<string[]>([]);

const logEvent = (msg: string) => {
  logs.value.unshift(msg);
  if (logs.value.length > 4) logs.value.pop();
};
</script>
