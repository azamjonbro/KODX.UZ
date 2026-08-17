<template>
  <div class="space-y-10 max-w-4xl pb-16">
    <!-- Header & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <div class="flex items-center gap-2 text-xs font-mono text-brand-400">
        <span>HTML Asoslari</span>
        <span>/</span>
        <span class="text-surface-400">5-Dars</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        Semantik HTML — Nega &lt;div&gt; dan Qochish Kerak?
      </h1>
      <p class="text-base sm:text-lg text-surface-300 leading-relaxed">
        Semantik teglar brauzerlar, ko‘zi ojiz insonlar uchun ekran o‘quvchi (screen reader) dasturlar va Google qidiruv botlari uchun veb-sahifa mazmunini tushunarli qiladi.
      </p>

      <div class="flex flex-wrap items-center gap-4 text-xs text-surface-400 pt-2">
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          ⏱️ O‘qish vaqti: 8 daqiqa
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          🎯 Daraja: Boshlang‘ich - O‘rta
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          📚 MDN: Semantics in HTML
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent border border-emerald-500/20 space-y-3">
      <div class="flex items-center gap-2 text-emerald-400 font-bold text-base">
        <span class="text-xl">👶</span>
        <span>5 yoshli bola uchun tushuntirish: Xonalarning Nomlari</span>
      </div>
      <p class="text-sm text-surface-200 leading-relaxed">
        Uyingizda oshxona, yotoqxona va mehmonxona bor.
      </p>
      <p class="text-xs text-surface-300 leading-relaxed">
        Agar barcha xonalarning eshigiga shunchaki <strong>"Xona 1", "Xona 2", "Xona 3"</strong> (ya'ni <code>&lt;div&gt;</code>) deb yozib qo‘ysangiz, mehmonlar adashib qoladi.
        Lekin <code>&lt;header&gt;</code> (Kirish zali), <code>&lt;main&gt;</code> (Asosiy zal), <code>&lt;footer&gt;</code> (Chiqish eshigi) deb yozsangiz — hamma o‘z o‘rnini biladi!
      </p>
    </div>

    <!-- ⚡ Interaktiv Semantik Veb Layout Vizualizatori -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">⚡</span> Jonli Sinov: To‘g‘ri Semantik Veb Arxitekturasi
      </h2>
      <p class="text-sm text-surface-400">
        Quyidagi bloklar ustiga bosing va har bir semantik teg qanday vazifa bajarishini ko‘ring:
      </p>

      <div class="p-5 rounded-2xl bg-surface-900 border border-surface-800 space-y-4">
        <!-- Visual Layout Map -->
        <div class="space-y-2 font-mono text-xs text-center">
          <!-- Header -->
          <div
            @click="activeTag = 'header'"
            :class="[
              'p-4 rounded-xl border-2 cursor-pointer transition-all',
              activeTag === 'header'
                ? 'bg-blue-500/20 border-blue-400 text-blue-300 font-bold scale-[1.01]'
                : 'bg-surface-950 border-surface-800 text-surface-400 hover:border-surface-700'
            ]"
          >
            &lt;header&gt; + &lt;nav&gt; (Logo va Asosiy Menyu)
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
            <!-- Main Content (2 cols) -->
            <div
              @click="activeTag = 'main'"
              :class="[
                'md:col-span-2 p-6 rounded-xl border-2 cursor-pointer transition-all space-y-2',
                activeTag === 'main'
                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold scale-[1.01]'
                  : 'bg-surface-950 border-surface-800 text-surface-400 hover:border-surface-700'
              ]"
            >
              <div>&lt;main&gt; (Asosiy Mazmun)</div>
              <div class="p-2 rounded bg-surface-900/60 border border-surface-800 text-[11px]">&lt;article&gt; Maqola &lt;/article&gt;</div>
            </div>

            <!-- Aside (1 col) -->
            <div
              @click="activeTag = 'aside'"
              :class="[
                'p-6 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-center',
                activeTag === 'aside'
                  ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold scale-[1.01]'
                  : 'bg-surface-950 border-surface-800 text-surface-400 hover:border-surface-700'
              ]"
            >
              &lt;aside&gt; (Yon Panel)
            </div>
          </div>

          <!-- Footer -->
          <div
            @click="activeTag = 'footer'"
            :class="[
              'p-4 rounded-xl border-2 cursor-pointer transition-all',
              activeTag === 'footer'
                ? 'bg-purple-500/20 border-purple-400 text-purple-300 font-bold scale-[1.01]'
                : 'bg-surface-950 border-surface-800 text-surface-400 hover:border-surface-700'
            ]"
          >
            &lt;footer&gt; (Mualliflik huquqi & Aloqa)
          </div>
        </div>

        <!-- Tag Details Box -->
        <div class="p-4 rounded-xl bg-surface-950 border border-surface-800 text-xs text-surface-300 space-y-1">
          <div class="font-bold text-brand-400 text-sm">&lt;{{ activeTag }}&gt; haqida:</div>
          <p>{{ tagInfo[activeTag] }}</p>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="pt-6 border-t border-surface-800 flex flex-wrap items-center justify-between gap-4">
      <router-link
        to="/html/head-meta"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-900 hover:bg-surface-800 text-surface-300 text-xs font-semibold border border-surface-700 transition-colors"
      >
        <span>← 4-Dars: Head & Meta</span>
      </router-link>

      <router-link
        to="/html/rasmlar"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors"
      >
        <span>Keyingi Dars: Rasmlar & Optimizatsiya →</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

type TagKey = 'header' | 'main' | 'aside' | 'footer';

const activeTag = ref<TagKey>('header');

const tagInfo: Record<TagKey, string> = {
  header: 'Sayt yoki bo‘limning bosh qismi. Odatda logotip, qidiruv paneli va navigatsiya havolalarini saqlaydi.',
  main: 'Sahifaning yagona, markaziy mazmuni. Bir sahifada faqat bitta <main> tegi bo‘lishi shart.',
  aside: 'Asosiy mavzuga bilvosita bog‘liq qo‘shimcha ma’lumotlar, reklamalar yoki yon menyular uchun ishlatiladi.',
  footer: 'Sahifa yoki bo‘limning quyi qismi. Mualliflik huquqlari, aloqa ma’lumotlari va maxfiylik siyosati joylashadi.',
};
</script>
