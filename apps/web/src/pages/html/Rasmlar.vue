<template>
  <div class="space-y-10 max-w-4xl pb-16">
    <!-- Header & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <div class="flex items-center gap-2 text-xs font-mono text-brand-400">
        <span>HTML Asoslari</span>
        <span>/</span>
        <span class="text-surface-400">6-Dars</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        Rasmlar, Zamonaviy Formatlar va Lazy Loading
      </h1>
      <p class="text-base sm:text-lg text-surface-300 leading-relaxed">
        Saytni sekinlashtirmasdan yuqori sifatli rasmlarni yuklash, WebP/AVIF formatlari va <code>loading="lazy"</code> orqali 70% trafikni tejash sirlari.
      </p>

      <div class="flex flex-wrap items-center gap-4 text-xs text-surface-400 pt-2">
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          ⏱️ O‘qish vaqti: 7 daqiqa
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          🎯 Daraja: Boshlang‘ich - O‘rta
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          📚 MDN: Responsive Images & Lazy Loading
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent border border-amber-500/20 space-y-3">
      <div class="flex items-center gap-2 text-amber-400 font-bold text-base">
        <span class="text-xl">👶</span>
        <span>5 yoshli bola uchun tushuntirish: Og‘ir Kitob va Yengil Fotosurat</span>
      </div>
      <p class="text-sm text-surface-200 leading-relaxed">
        Tasavvur qiling, ryukzagingizda 100 ta og‘ir tosh olib yurish — bu eski, siqilmagan <strong>katta PNG/JPG</strong> rasmlardir. Telefoningiz uni ko‘tarolmay qotib qoladi!
      </p>
      <p class="text-xs text-surface-300 leading-relaxed">
        Agar ularni <strong>WebP/AVIF</strong> formatida siqsangiz va faqat sahifani pastga tushirganda (<strong>lazy loading</strong>) olib kelsangiz, ryukzagingiz patdek yengil bo‘ladi!
      </p>
    </div>

    <!-- ⚡ Interaktiv Rasm Optimizatsiya Taqqoslash -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">⚡</span> Jonli Sinov: Formatlar va Hajm Taqqoslashi
      </h2>
      <p class="text-sm text-surface-400">
        Formatlarni tanlang va ularning yuklanish tezligi hamda hajm farqini ko‘ring:
      </p>

      <div class="p-5 rounded-2xl bg-surface-900 border border-surface-800 space-y-6">
        <div class="flex flex-wrap gap-2">
          <button
            v-for="fmt in formats"
            :key="fmt.name"
            @click="selectedFormat = fmt"
            :class="[
              'px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all',
              selectedFormat.name === fmt.name
                ? 'bg-brand-500 text-surface-950 shadow-lg shadow-brand-500/20'
                : 'bg-surface-800 text-surface-300 hover:bg-surface-700'
            ]"
          >
            {{ fmt.name }} ({{ fmt.size }})
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Code -->
          <div class="p-4 rounded-xl bg-surface-950 border border-surface-800 space-y-2">
            <div class="text-xs font-mono text-surface-500">Tavsiya etiladigan HTML kodi:</div>
            <pre class="text-xs font-mono text-emerald-300"><code>&lt;picture&gt;
  &lt;source srcset="banner.avif" type="image/avif" /&gt;
  &lt;source srcset="banner.webp" type="image/webp" /&gt;
  &lt;img
    src="banner.jpg"
    alt="KODX Platformasi"
    loading="lazy"
    width="1200"
    height="600"
  /&gt;
&lt;/picture&gt;</code></pre>
          </div>

          <!-- Comparison result -->
          <div class="p-4 rounded-xl bg-surface-950 border border-surface-800 flex flex-col justify-center space-y-3">
            <div class="flex items-center justify-between text-xs">
              <span class="text-surface-400">Fayl formati:</span>
              <span class="font-mono font-bold text-white">{{ selectedFormat.name }}</span>
            </div>
            <div class="flex items-center justify-between text-xs">
              <span class="text-surface-400">Fayl hajmi:</span>
              <span class="font-mono font-bold text-emerald-400">{{ selectedFormat.size }}</span>
            </div>
            <div class="flex items-center justify-between text-xs">
              <span class="text-surface-400">Yuklanish tezligi:</span>
              <span class="font-mono font-bold text-brand-400">{{ selectedFormat.speed }}</span>
            </div>
            <div class="p-2.5 rounded-lg bg-surface-900 text-[11px] text-surface-300 border border-surface-800">
              💡 {{ selectedFormat.description }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="pt-6 border-t border-surface-800 flex flex-wrap items-center justify-between gap-4">
      <router-link
        to="/html/semantika"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-900 hover:bg-surface-800 text-surface-300 text-xs font-semibold border border-surface-700 transition-colors"
      >
        <span>← 5-Dars: Semantik HTML</span>
      </router-link>

      <router-link
        to="/html/formalar"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors"
      >
        <span>Keyingi Dars: Formalar & Validatsiya →</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface FormatItem {
  name: string;
  size: string;
  speed: string;
  description: string;
}

const formats: FormatItem[] = [
  {
    name: 'AVIF',
    size: '120 KB (90% tejamkor)',
    speed: '~15ms (Eng tez)',
    description: 'Eng yangi va samarali format. Rasm sifatini yo‘qotmasdan eng kichik hajmga keltiradi.',
  },
  {
    name: 'WebP',
    size: '250 KB (75% tejamkor)',
    speed: '~30ms (Tez)',
    description: 'Google tomonidan yaratilgan universal zamonaviy format. Barcha zamonaviy brauzerlarda ishlaydi.',
  },
  {
    name: 'PNG / JPG',
    size: '1.2 MB (Eski standart)',
    speed: '~180ms (Sekin)',
    description: 'Katta hajm oladi, mobil internetda sahifani sekinlashtiradi.',
  },
];

const selectedFormat = ref<FormatItem>(formats[0]!);
</script>
