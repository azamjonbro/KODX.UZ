<template>
  <div class="space-y-10 max-w-4xl pb-16">
    <!-- Header & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <div class="flex items-center gap-2 text-xs font-mono text-brand-400">
        <span>CSS Asoslari</span>
        <span>/</span>
        <span class="text-surface-400">6-Dars</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        Zamonaviy CSS: @container, @layer va :has()
      </h1>
      <p class="text-base sm:text-lg text-surface-300 leading-relaxed">
        Butun ekran o‘rniga ota-blok o‘lchamiga qarab o‘zgaruvchi Container Queries, ota-elementni tanlovchi sehrli <code>:has()</code> va kaskad qavatlari <code>@layer</code>.
      </p>

      <div class="flex flex-wrap items-center gap-4 text-xs text-surface-400 pt-2">
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          ⏱️ O‘qish vaqti: 10 daqiqa
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          🎯 Daraja: Yuqori
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          📚 W3C / MDN: CSS Container Queries
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-transparent border border-purple-500/20 space-y-3">
      <div class="flex items-center gap-2 text-purple-400 font-bold text-base">
        <span class="text-xl">👶</span>
        <span>5 yoshli bola uchun tushuntirish: O‘z Qutisiga Moslashuvchi O‘yinchoq</span>
      </div>
      <p class="text-sm text-surface-200 leading-relaxed">
        Ilgari (Media Queries) bolaning kiyimi butun xonaning kattaligiga qarab tikilardi.
      </p>
      <p class="text-xs text-surface-300 leading-relaxed">
        Endi esa (<strong>Container Queries</strong>) o‘yinchoq o‘zi o‘tirgan qutisi kichik bo‘lsa qo‘llarini yig‘ib oladi, agar katta qutiga solinsa qanotlarini yozadi!
      </p>
    </div>

    <!-- ⚡ Interaktiv Demo -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">⚡</span> Jonli Sinov: Container Kengligini O‘zgartirib Ko‘ring
      </h2>

      <div class="p-6 rounded-2xl bg-surface-900 border border-surface-800 space-y-6">
        <div>
          <label class="text-xs font-semibold text-surface-300">Qutining kengligi: {{ containerWidth }}%</label>
          <input
            v-model.number="containerWidth"
            type="range"
            min="30"
            max="100"
            class="w-full mt-2 accent-brand-500"
          />
        </div>

        <!-- Dynamic Resizing Card Container -->
        <div class="flex justify-center">
          <div
            class="p-4 rounded-2xl bg-surface-950 border border-surface-800 transition-all duration-300 shadow-xl"
            :style="{ width: `${containerWidth}%` }"
          >
            <div
              :class="[
                'gap-4 items-center transition-all',
                containerWidth > 60 ? 'flex flex-row' : 'flex flex-col text-center'
              ]"
            >
              <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-400 to-emerald-600 flex items-center justify-center text-surface-950 font-bold text-xl flex-shrink-0">
                📦
              </div>
              <div class="space-y-1">
                <div class="font-bold text-white text-sm">
                  {{ containerWidth > 60 ? 'Gorizontal Keng Karta (Katta Quti)' : 'Vertikal Ixcham Karta (Kichik Quti)' }}
                </div>
                <p class="text-xs text-surface-400 leading-relaxed">
                  Bu @container qoidasi asosida ekranning emas, aynan shu qutining kengligiga moslashadi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="pt-6 border-t border-surface-800 flex flex-wrap items-center justify-between gap-4">
      <router-link
        to="/css/grid"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-900 hover:bg-surface-800 text-surface-300 text-xs font-semibold border border-surface-700 transition-colors"
      >
        <span>← 5-Dars: CSS Grid</span>
      </router-link>

      <router-link
        to="/javascript/kirish"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors"
      >
        <span>Keyingi Bo‘lim: JavaScript Kursi →</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const containerWidth = ref(80);
</script>
