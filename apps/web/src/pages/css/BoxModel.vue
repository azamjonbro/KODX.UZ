<template>
  <div class="space-y-10 max-w-4xl pb-16">
    <!-- Title & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <div class="flex items-center gap-2 text-xs font-mono text-brand-400">
        <span>CSS Asoslari</span>
        <span>/</span>
        <span class="text-surface-400">3-Dars</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        CSS Box Model — Qutining 4 Qavati
      </h1>
      <p class="text-base sm:text-lg text-surface-300 leading-relaxed">
        CSSda har bir element to‘rtburchak qutidir. Box Model elementning o‘lchami va uning atrofi qanday hisoblanishini belgilaydi.
      </p>

      <div class="flex flex-wrap items-center gap-4 text-xs text-surface-400 pt-2">
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          ⏱️ O‘qish vaqti: 8 daqiqa
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          🎯 Daraja: Boshlang‘ich - O‘rta
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          📚 MDN: The Box Model
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-transparent border border-orange-500/20 space-y-3">
      <div class="flex items-center gap-2 text-orange-400 font-bold text-base">
        <span class="text-xl">👶</span>
        <span>5 yoshli bola uchun tushuntirish: Pochta Sovg‘a Qutisi</span>
      </div>
      <p class="text-sm text-surface-200 leading-relaxed">
        Tasavvur qiling, siz do‘stingizga pochta orqali mo‘rt <strong>shisha o‘yinchoq</strong> yubormoqchisiz:
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2 text-xs">
        <div class="p-3 rounded-xl bg-surface-950 border border-blue-500/40 space-y-1">
          <p class="font-bold text-blue-400">1. Content (Tarkib)</p>
          <p class="text-surface-400">O‘yinchoqning o‘zi (matn yoki rasm).</p>
        </div>
        <div class="p-3 rounded-xl bg-surface-950 border border-emerald-500/40 space-y-1">
          <p class="font-bold text-emerald-400">2. Padding (Ichki masofa)</p>
          <p class="text-surface-400">O‘yinchoq sinmasligi uchun o‘ralgan yumshoq paxta.</p>
        </div>
        <div class="p-3 rounded-xl bg-surface-950 border border-amber-500/40 space-y-1">
          <p class="font-bold text-amber-400">3. Border (Chegara devor)</p>
          <p class="text-surface-400">Qutining qattiq karton devori.</p>
        </div>
        <div class="p-3 rounded-xl bg-surface-950 border border-orange-500/40 space-y-1">
          <p class="font-bold text-orange-400">4. Margin (Tashqi masofa)</p>
          <p class="text-surface-400">Qutining boshqa qutilarga tegmasligi uchun tashqi oraliq.</p>
        </div>
      </div>
    </div>

    <!-- ⚡ Interaktiv Box Model Vizualizatori -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">⚡</span> Jonli Box Model Vizualizatori
      </h2>
      <p class="text-sm text-surface-400">
        Slayderlarni o‘zgartiring va 4 ta qavat qanday kengayishini jonli ko‘ring:
      </p>

      <div class="p-5 rounded-2xl bg-surface-900 border border-surface-800 space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <!-- Margin -->
          <div class="space-y-1.5">
            <label class="text-xs font-semibold text-orange-400">Margin (Tashqi): {{ marginVal }}px</label>
            <input v-model.number="marginVal" type="range" min="0" max="40" class="w-full accent-orange-500" />
          </div>

          <!-- Border -->
          <div class="space-y-1.5">
            <label class="text-xs font-semibold text-amber-400">Border (Chegara): {{ borderVal }}px</label>
            <input v-model.number="borderVal" type="range" min="1" max="15" class="w-full accent-amber-500" />
          </div>

          <!-- Padding -->
          <div class="space-y-1.5">
            <label class="text-xs font-semibold text-emerald-400">Padding (Ichki): {{ paddingVal }}px</label>
            <input v-model.number="paddingVal" type="range" min="4" max="40" class="w-full accent-emerald-500" />
          </div>
        </div>

        <!-- Visual Diagram -->
        <div class="p-6 rounded-2xl bg-surface-950 border border-surface-800 flex justify-center items-center overflow-x-auto min-h-[300px]">
          <!-- MARGIN Layer (Orange) -->
          <div
            :style="{ padding: marginVal + 'px' }"
            class="bg-orange-500/20 border-2 border-dashed border-orange-500 rounded-2xl transition-all relative flex flex-col items-center justify-center"
          >
            <span class="absolute top-1 left-2 text-[10px] font-mono font-bold text-orange-400 uppercase">Margin: {{ marginVal }}px</span>

            <!-- BORDER Layer (Amber) -->
            <div
              :style="{ borderWidth: borderVal + 'px' }"
              class="border-amber-500 rounded-xl transition-all relative flex flex-col items-center justify-center bg-surface-900"
            >
              <!-- PADDING Layer (Emerald) -->
              <div
                :style="{ padding: paddingVal + 'px' }"
                class="bg-emerald-500/20 rounded-lg transition-all relative flex items-center justify-center"
              >
                <!-- CONTENT Layer (Blue) -->
                <div class="bg-blue-600/30 border border-blue-400 text-blue-200 px-6 py-4 rounded font-mono font-bold text-xs text-center shadow-inner">
                  CONTENT (Matn / Rasm)
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Generated CSS Code -->
        <div class="p-4 rounded-xl bg-surface-950 border border-surface-800">
          <div class="text-xs font-mono text-surface-500 mb-2">Hosil bo‘lgan CSS kodi:</div>
          <pre class="text-xs font-mono text-emerald-300"><code>.quti {
  margin: {{ marginVal }}px;
  border: {{ borderVal }}px solid #f59e0b;
  padding: {{ paddingVal }}px;
  box-sizing: border-box; /* MDN Tavsiya etadi */
}</code></pre>
        </div>
      </div>
    </div>

    <!-- box-sizing: border-box haqida muhim MDN qoidasi -->
    <div class="p-5 rounded-xl bg-brand-500/10 border border-brand-500/20 space-y-2">
      <div class="flex items-center gap-2 text-brand-400 font-bold text-sm">
        <span>⭐</span>
        <span>MDN Oltin Qoidasi: `box-sizing: border-box`</span>
      </div>
      <p class="text-xs sm:text-sm text-surface-300 leading-relaxed">
        Odatiy holatda elementga <code>padding</code> yoki <code>border</code> qo‘shsangiz, elementning umumiy eni kattalashib ketadi. Buni oldini olish va o‘lchamlarni aniq ushlab turish uchun barcha zamonaviy loyihalarda <code>* { box-sizing: border-box; }</code> ishlatiladi.
      </p>
    </div>

    <!-- Navigation -->
    <div class="pt-6 border-t border-surface-800 flex flex-wrap items-center justify-between gap-4">
      <router-link
        to="/css/selectorlar"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-900 hover:bg-surface-800 text-surface-300 text-xs font-semibold border border-surface-700 transition-colors"
      >
        <span>← 2-Dars: CSS Selektorlar</span>
      </router-link>

      <router-link
        to="/javascript/kirish"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors"
      >
        <span>Keyingi Bo‘lim: JavaScript Kirish →</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const marginVal = ref(16);
const borderVal = ref(4);
const paddingVal = ref(20);
</script>