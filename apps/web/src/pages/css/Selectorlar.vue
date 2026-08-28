<template>
  <div class="space-y-10 max-w-4xl pb-20 text-left">
    <!-- Breadcrumbs Navigation -->
    <nav class="flex items-center flex-wrap gap-2 text-xs font-mono text-surface-400">
      <router-link to="/css/kirish" class="hover:text-surface-200 transition-colors">CSS Asoslari</router-link>
      <span class="text-surface-600">&gt;</span>
      <span class="text-surface-400">1-Modul</span>
      <span class="text-surface-600">&gt;</span>
      <span class="text-brand-400 font-bold">1.2. Selectorlar & Specificity</span>
    </nav>

    <!-- Title & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        CSS Selectorlar — Elementlarni Aniq Tanlab Olish San’ati
      </h1>
      <p class="text-sm sm:text-base text-surface-300 leading-relaxed font-normal">
        Selectorlar brauzerga aynan qaysi HTML elementiga stillar qo‘llanilishi kerakligini ko‘rsatadi. Murakkab veb-loyihalarda Selector Specificity (ustunlik darajasi) qoidalarini bilish juda muhimdir.
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
          Specificity: (0, 1, 0, 0)
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          :is(), :where(), :has()
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya + C++ Under-the-hood Toggle -->
    <div class="p-6 rounded-2xl bg-surface-900/40 border border-surface-800/80 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2.5 text-amber-400 font-bold text-sm sm:text-base">
          <span class="text-xl">👶</span>
          <span>5 yoshli bola uchun tushuntirish: Sehrli Lazerli Ko‘rsatkich</span>
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
          Sinfda 30 ta bola o‘tiribdi. O‘qituvchi:
        </p>
        <ul class="space-y-1 list-disc list-inside text-surface-400 text-xs">
          <li><strong>"Hamma bolalar"</strong> desa — hamma turadi (Teg selektori).</li>
          <li><strong>"Sariq futbolka kiyganlar"</strong> desa — faqat bir nechta bola turadi (Klass selektori).</li>
          <li><strong>"Ali"</strong> desa — aynan bitta bola turadi (ID selektori).</li>
        </ul>
      </div>

      <div v-else class="space-y-2 font-mono text-xs animate-in fade-in duration-200">
        <div class="text-cyan-300 font-bold">Blink Engine: CSS Selector Specificity Bitmask Formula</div>
        <pre class="p-3.5 rounded-xl bg-surface-950 border border-surface-800 text-cyan-300 text-[11px] leading-relaxed overflow-x-auto"><code>// third_party/blink/renderer/core/css/css_selector.cc
unsigned CSSSelector::Specificity() const {
  unsigned a = IsId() ? 0x10000 : 0;        // 1 ID = 65536 ball
  unsigned b = IsClass() ? 0x100 : 0;       // 1 Class = 256 ball
  unsigned c = IsTag() ? 0x1 : 0;           // 1 Element = 1 ball
  return a + b + c; // Eng yuqori ballga ega bo'lgan stil yutadi!
}</code></pre>
      </div>
    </div>

    <!-- Specificity Formula (Hard & Deep) -->
    <section class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 1. Specificity (Ustunlik Formulasi)
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-3 text-center text-xs font-mono">
        <div class="p-3 rounded-xl bg-red-950/20 border border-red-500/30 space-y-1">
          <div class="text-[10px] text-surface-400">1. INLINE STIL</div>
          <div class="font-bold text-red-400 text-base">(1, 0, 0, 0)</div>
          <div class="text-[10px] text-surface-400">style="..."</div>
        </div>

        <div class="p-3 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-1">
          <div class="text-[10px] text-surface-400">2. ID SELEKTOR</div>
          <div class="font-bold text-purple-400 text-base">(0, 1, 0, 0)</div>
          <div class="text-[10px] text-surface-400">#header, #main</div>
        </div>

        <div class="p-3 rounded-xl bg-blue-950/20 border border-blue-500/30 space-y-1">
          <div class="text-[10px] text-surface-400">3. KLASS & PSEUDO</div>
          <div class="font-bold text-blue-400 text-base">(0, 0, 1, 0)</div>
          <div class="text-[10px] text-surface-400">.btn, :hover, [attr]</div>
        </div>

        <div class="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1">
          <div class="text-[10px] text-surface-400">4. ELEMENT TEG</div>
          <div class="font-bold text-emerald-400 text-base">(0, 0, 0, 1)</div>
          <div class="text-[10px] text-surface-400">div, p, h1</div>
        </div>
      </div>
    </section>

    <!-- Interactive Live Code Editor -->
    <section class="space-y-4 pt-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 2. Jonli Mashq: Selektorlar Bilan O‘ynab Ko‘ring
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
