<template>
  <div class="space-y-10 max-w-4xl pb-16">
    <!-- Title & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <div class="flex items-center gap-2 text-xs font-mono text-brand-400">
        <span>HTML Asoslari</span>
        <span>/</span>
        <span class="text-surface-400">2-Dars</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        HTML Teglar (Tags) — Vebning Qurilish Bloklari
      </h1>
      <p class="text-base sm:text-lg text-surface-300 leading-relaxed">
        Teglar brauzerga qaysi element sarlavha, qaysi biri matn, rasm yoki tugma ekanligini bildiruvchi maxsus ko‘rsatmalardir.
      </p>

      <div class="flex flex-wrap items-center gap-4 text-xs text-surface-400 pt-2">
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          ⏱️ O‘qish vaqti: 7 daqiqa
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          🎯 Daraja: Boshlang‘ich
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          📚 MDN: HTML Elements Reference
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-brand-500/10 to-transparent border border-blue-500/20 space-y-3">
      <div class="flex items-center gap-2 text-blue-400 font-bold text-base">
        <span class="text-xl">👶</span>
        <span>5 yoshli bola uchun tushuntirish: Sehrli Stikerlar & Qutilar</span>
      </div>
      <p class="text-sm text-surface-200 leading-relaxed">
        Tasavvur qiling, sizning xonangizda har xil o‘yinchoqlar bor. Agar siz qutining ustiga:
      </p>
      <ul class="text-xs text-surface-300 space-y-1.5 list-disc list-inside">
        <li><strong>&lt;mashinalar&gt;</strong> deb yozsangiz — ichida faqat poyga mashinalari bo‘ladi.</li>
        <li><strong>&lt;kitoblar&gt;</strong> deb yozsangiz — ertak kitoblari saqlanadi.</li>
      </ul>
      <p class="text-xs text-surface-400 pt-1">
        HTML teglar ham xuddi shunday: <code>&lt;h1&gt;</code> stikeri matnni <strong>katta va muhim</strong> qiladi, <code>&lt;button&gt;</code> stikeri esa uni <strong>bosiladigan tugmaga</strong> aylantiradi!
      </p>
    </div>

    <!-- Juft va Yolg'iz Teglar -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> Teglarning 2 turi: Juft va Yolg‘iz
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-2">
          <div class="font-bold text-brand-400 text-base">1. Juft Teglar (Ochuvchi va Yopuvchi)</div>
          <p class="text-surface-400 text-xs">Ular ochiladi, ichiga ma’lumot oladi va maxsus <code>/</code> belgisi bilan yopiladi.</p>
          <pre class="p-3 bg-surface-950 rounded-lg text-emerald-300 font-mono text-xs"><code>&lt;h1&gt;Bu sarlavha&lt;/h1&gt;
&lt;p&gt;Bu paragraf matni&lt;/p&gt;
&lt;button&gt;Tugma&lt;/button&gt;</code></pre>
        </div>

        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-2">
          <div class="font-bold text-amber-400 text-base">2. Yolg‘iz Teglar (O‘zini o‘zi yopuvchi)</div>
          <p class="text-surface-400 text-xs">Ular ichiga matn olmaydi, shuning uchun yopuvchi tegga ehtiyoj yo‘q.</p>
          <pre class="p-3 bg-surface-950 rounded-lg text-amber-300 font-mono text-xs"><code>&lt;img src="rasm.jpg" alt="Rasm" /&gt;
&lt;input type="text" /&gt;
&lt;br /&gt; <span class="text-surface-500">&lt;!-- Yangi qatorga tushirish --&gt;</span>
&lt;hr /&gt; <span class="text-surface-500">&lt;!-- Gorizontal chiziq --&gt;</span></code></pre>
        </div>
      </div>
    </div>

    <!-- ⚡ Interaktiv Teglar Laboratoriyasi -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">⚡</span> Jonli Sinov: Qaysi Teg Qanday Ko‘rinadi?
      </h2>
      <p class="text-sm text-surface-400">
        Tugmalardan birini tanlang va natijani ko‘ring:
      </p>

      <div class="p-5 rounded-2xl bg-surface-900 border border-surface-800 space-y-4">
        <!-- Tag selector pills -->
        <div class="flex flex-wrap gap-2">
          <button
            v-for="t in demoTags"
            :key="t.name"
            @click="selectedTag = t"
            :class="[
              'px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all',
              selectedTag.name === t.name
                ? 'bg-brand-500 text-surface-950 shadow-md shadow-brand-500/20'
                : 'bg-surface-800 text-surface-300 hover:bg-surface-700'
            ]"
          >
            &lt;{{ t.name }}&gt;
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <!-- Code snippet -->
          <div class="p-4 rounded-xl bg-surface-950 border border-surface-800 space-y-2">
            <div class="text-xs font-mono text-surface-500">HTML Kodi:</div>
            <pre class="text-xs font-mono text-emerald-300"><code>{{ selectedTag.code }}</code></pre>
            <div class="text-xs text-surface-400 pt-2 border-t border-surface-800">
              💡 <strong>Vazifasi:</strong> {{ selectedTag.description }}
            </div>
          </div>

          <!-- Live Result -->
          <div class="p-4 rounded-xl bg-white text-surface-950 flex flex-col justify-center items-center text-center">
            <div class="w-full" v-html="selectedTag.previewHtml"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Semantik Teglar Jadvali -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> Eng Ko‘p Ishlatiladigan Asosiy Teglar
      </h2>

      <div class="overflow-x-auto rounded-xl border border-surface-800">
        <table class="w-full text-left text-xs sm:text-sm">
          <thead class="bg-surface-900 text-surface-300 font-mono border-b border-surface-800">
            <tr>
              <th class="p-3">Teg</th>
              <th class="p-3">Nomi</th>
              <th class="p-3">Qachon Ishlatiladi?</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-surface-800/60 bg-surface-950 text-surface-300">
            <tr>
              <td class="p-3 font-mono text-brand-400">&lt;h1&gt; - &lt;h6&gt;</td>
              <td class="p-3">Headings</td>
              <td class="p-3">Sahifadagi asosiy va qo‘shimcha sarlavhalar</td>
            </tr>
            <tr>
              <td class="p-3 font-mono text-brand-400">&lt;p&gt;</td>
              <td class="p-3">Paragraph</td>
              <td class="p-3">Oddiy matn va abzaslar</td>
            </tr>
            <tr>
              <td class="p-3 font-mono text-brand-400">&lt;a&gt;</td>
              <td class="p-3">Anchor (Havola)</td>
              <td class="p-3">Boshqa sahifaga yoki saytga o‘tish havolalari</td>
            </tr>
            <tr>
              <td class="p-3 font-mono text-brand-400">&lt;img&gt;</td>
              <td class="p-3">Image</td>
              <td class="p-3">Rasmlarni sahifada ko‘rsatish</td>
            </tr>
            <tr>
              <td class="p-3 font-mono text-brand-400">&lt;button&gt;</td>
              <td class="p-3">Button</td>
              <td class="p-3">Bosiladigan interaktiv tugmalar</td>
            </tr>
            <tr>
              <td class="p-3 font-mono text-brand-400">&lt;ul&gt; & &lt;li&gt;</td>
              <td class="p-3">Unordered List</td>
              <td class="p-3">Nuqtali ro‘yxatlar</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Navigation -->
    <div class="pt-6 border-t border-surface-800 flex flex-wrap items-center justify-between gap-4">
      <router-link
        to="/html/kirish"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-900 hover:bg-surface-800 text-surface-300 text-xs font-semibold border border-surface-700 transition-colors"
      >
        <span>← 1-Dars: HTML Kirish</span>
      </router-link>

      <router-link
        to="/html/attributlar"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors"
      >
        <span>Keyingi Dars: HTML Atributlar →</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface DemoTag {
  name: string;
  code: string;
  description: string;
  previewHtml: string;
}

const demoTags: DemoTag[] = [
  {
    name: 'h1',
    code: '<h1>Katta va Muhim Sarlavha</h1>',
    description: 'Sahifadagi eng muhim, 1-darajali katta sarlavha.',
    previewHtml: '<h1 style="font-size: 24px; font-weight: bold; color: #111827;">Katta va Muhim Sarlavha</h1>',
  },
  {
    name: 'p',
    code: '<p>Bu oddiy matnli paragraf. Unda har qanday ma’lumot yoziladi.</p>',
    description: 'Matnlarni abzaslarga ajratib ko‘rsatish uchun asosiy teg.',
    previewHtml: '<p style="font-size: 14px; color: #374151;">Bu oddiy matnli paragraf. Unda har qanday ma’lumot yoziladi.</p>',
  },
  {
    name: 'button',
    code: '<button>Ro‘yxatdan o‘tish</button>',
    description: 'Foydalanuvchi bosishi mumkin bo‘lgan interaktiv tugma.',
    previewHtml: '<button style="background: #22a675; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer;">Ro‘yxatdan o‘tish</button>',
  },
  {
    name: 'a',
    code: '<a href="https://kodx.uz">KODX Platformasiga o‘tish →</a>',
    description: 'Boshqa veb sahifaga yo‘llovchi faol giperhavola.',
    previewHtml: '<a href="#" style="color: #2563eb; text-decoration: underline; font-weight: 500;">KODX Platformasiga o‘tish →</a>',
  },
  {
    name: 'ul / li',
    code: '<ul>\n  <li>HTML o‘rganish</li>\n  <li>CSS o‘rganish</li>\n  <li>JS o‘rganish</li>\n</ul>',
    description: 'Tartiblanmagan nuqtali ro‘yxat yaratish.',
    previewHtml: '<ul style="text-align: left; list-style-type: disc; padding-left: 20px; font-size: 14px; color: #111827;"><li>HTML o‘rganish</li><li>CSS o‘rganish</li><li>JS o‘rganish</li></ul>',
  },
];

const selectedTag = ref<DemoTag>(demoTags[0]!);
</script>