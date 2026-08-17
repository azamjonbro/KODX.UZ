<template>
  <div class="space-y-10 max-w-4xl pb-20 text-left">
    <!-- Breadcrumbs Navigation -->
    <nav class="flex items-center flex-wrap gap-2 text-xs font-mono text-surface-400">
      <router-link to="/html/kirish" class="hover:text-surface-200 transition-colors">HTML Asoslari</router-link>
      <span class="text-surface-600">&gt;</span>
      <span class="text-surface-400">1-Modul</span>
      <span class="text-surface-600">&gt;</span>
      <span class="text-brand-400 font-bold">HTML Teglar & Content Models</span>
    </nav>

    <!-- Title & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        HTML Teglar (Tags) & Content Models — Vebning Qurilish Bloklari
      </h1>
      <p class="text-sm sm:text-base text-surface-300 leading-relaxed font-normal">
        Teglar brauzerga qaysi element sarlavha, qaysi biri matn, rasm yoki interaktiv tugma ekanligini bildiruvchi normativ (WHATWG) ko‘rsatmalardir.
      </p>

      <!-- Premium Metadata Badges -->
      <div class="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono">
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          O‘qish vaqti: 7 daqiqa
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          WHATWG: 162 ta Standart Teglar
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Content Categories
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya + C++ Under-the-hood Toggle -->
    <div class="p-6 rounded-2xl bg-surface-900/40 border border-surface-800/80 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2.5 text-amber-400 font-bold text-sm sm:text-base">
          <span class="text-xl">👶</span>
          <span>5 yoshli bola uchun tushuntirish: Sehrli Stikerlar & Qutilar</span>
        </div>
        <button
          @click="showUnderTheHood = !showUnderTheHood"
          class="px-2.5 py-1 rounded-lg bg-surface-800 hover:bg-surface-700 text-[11px] font-mono text-brand-400 border border-brand-500/30 transition-all cursor-pointer"
        >
          <span>{{ showUnderTheHood ? 'Analogiyaga qaytish' : '🔬 Ostidagi Kodni Ko‘rish' }}</span>
        </button>
      </div>

      <div v-if="!showUnderTheHood" class="space-y-2 text-xs sm:text-sm text-surface-300 leading-relaxed animate-in fade-in duration-200">
        <p>
          Tasavvur qiling, sizning xonangizda har xil o‘yinchoqlar bor. Agar siz qutining ustiga:
        </p>
        <ul class="space-y-1 list-disc list-inside text-surface-400 text-xs">
          <li><strong>&lt;mashinalar&gt;</strong> deb yozsangiz — ichida faqat poyga mashinalari bo‘ladi.</li>
          <li><strong>&lt;kitoblar&gt;</strong> deb yozsangiz — ertak kitoblari saqlanadi.</li>
        </ul>
        <p class="pt-1">
          HTML teglar ham xuddi shunday: <code>&lt;h1&gt;</code> stikeri matnni <strong>katta va muhim</strong> qiladi, <code>&lt;button&gt;</code> stikeri esa uni <strong>bosiladigan tugmaga</strong> aylantiradi!
        </p>
      </div>

      <div v-else class="space-y-2 font-mono text-xs animate-in fade-in duration-200">
        <div class="text-cyan-300 font-bold">Blink Dvigateli: C++ Tag Name Lookup & Node Creation</div>
        <pre class="p-3.5 rounded-xl bg-surface-950 border border-surface-800 text-cyan-300 text-[11px] leading-relaxed overflow-x-auto"><code>// third_party/blink/renderer/core/html/custom/element_factory.cc
Element* HTMLTagFactory::CreateElement(const AtomicString& local_name, Document& document) {
  if (local_name == html_names::kH1Tag) return MakeGarbageCollected&lt;HTMLHeadingElement&gt;(document, 1);
  if (local_name == html_names::kButtonTag) return MakeGarbageCollected&lt;HTMLButtonElement&gt;(document);
  return MakeGarbageCollected&lt;HTMLUnknownElement&gt;(document, local_name);
}</code></pre>
      </div>
    </div>

    <!-- Juft va Yolg'iz Teglar (Void Elements) -->
    <section class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 1. Juft va Yolg‘iz Teglar (Void Elements)
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-2">
          <div class="font-bold text-brand-400 text-sm">1. Juft Teglar (Normal Elements)</div>
          <p class="text-surface-400 text-xs">Ular ochiladi, ichiga kontent oladi va maxsus <code>/</code> belgisi bilan yopiladi.</p>
          <pre class="p-3 bg-surface-950 rounded-lg text-emerald-300 font-mono text-xs"><code>&lt;h1&gt;Bu sarlavha&lt;/h1&gt;
&lt;p&gt;Bu paragraf matni&lt;/p&gt;
&lt;button&gt;Tugma&lt;/button&gt;</code></pre>
        </div>

        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-2">
          <div class="font-bold text-amber-400 text-sm">2. Yolg‘iz Teglar (Void Elements)</div>
          <p class="text-surface-400 text-xs">Ichiga matn olmaydi va yopuvchi tegga ega emas (WHATWG da 14 ta void element mavjud).</p>
          <pre class="p-3 bg-surface-950 rounded-lg text-amber-300 font-mono text-xs"><code>&lt;img src="rasm.webp" alt="Tavsif"&gt;
&lt;input type="text" placeholder="Ism"&gt;
&lt;br&gt; &lt;hr&gt; &lt;meta charset="utf-8"&gt;</code></pre>
        </div>
      </div>
    </section>

    <!-- WHATWG Content Categories Matrix (Hard & Deep) -->
    <section class="space-y-4 pt-2">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 2. WHATWG Content Models & Kategoriyalar
      </h2>
      <p class="text-xs sm:text-sm text-surface-300 leading-relaxed">
        HTML5 da har bir teg qat’iy belgilangan kontent toifasiga tegishli. Masalan, <code>&lt;p&gt;</code> tegi ichiga <code>&lt;div&gt;</code> qo‘yish mumkin emas, chunki <code>&lt;p&gt;</code> faqat <strong>Phrasing Content</strong> qabul qiladi.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
        <div class="p-3.5 rounded-xl bg-surface-900 border border-surface-800 space-y-1.5">
          <div class="text-brand-400 font-bold">1. Flow Content</div>
          <p class="text-[11px] text-surface-400 leading-relaxed">
            Deyarli barcha body ichidagi elementlar: <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;ul&gt;</code>.
          </p>
        </div>

        <div class="p-3.5 rounded-xl bg-surface-900 border border-surface-800 space-y-1.5">
          <div class="text-blue-400 font-bold">2. Phrasing Content</div>
          <p class="text-[11px] text-surface-400 leading-relaxed">
            Matn ichidagi inline elementlar: <code>&lt;span&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;code&gt;</code>, <code>&lt;a&gt;</code>.
          </p>
        </div>

        <div class="p-3.5 rounded-xl bg-surface-900 border border-surface-800 space-y-1.5">
          <div class="text-purple-400 font-bold">3. Interactive Content</div>
          <p class="text-[11px] text-surface-400 leading-relaxed">
            Foydalanuvchi bosishi mumkin bo‘lgan elementlar: <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>.
          </p>
        </div>
      </div>
    </section>

    <!-- Interactive Live Code Editor -->
    <section class="space-y-4 pt-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 3. Jonli Mashq: Teglarni O‘zgartiring
      </h2>
      <InteractiveCodePlayground />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InteractiveCodePlayground from '../../components/InteractiveCodePlayground.vue';

const showUnderTheHood = ref(false);
</script>