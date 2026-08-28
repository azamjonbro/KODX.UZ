<template>
  <div class="space-y-10 max-w-4xl pb-20 text-left">
    <!-- Breadcrumbs Navigation -->
    <nav class="flex items-center flex-wrap gap-2 text-xs font-mono text-surface-400">
      <router-link to="/css/kirish" class="hover:text-surface-200 transition-colors">CSS Asoslari</router-link>
      <span class="text-surface-600">&gt;</span>
      <span class="text-surface-400">2-Modul</span>
      <span class="text-surface-600">&gt;</span>
      <span class="text-brand-400 font-bold">2.1. CSS Box Model</span>
    </nav>

    <!-- Title & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        CSS Box Model — Har Bir Element Bu To‘rtburchak Qutidir
      </h1>
      <p class="text-sm sm:text-base text-surface-300 leading-relaxed font-normal">
        Vebdagi har bir HTML elementi 4 qatlamli to‘rtburchak qutidan (Box) iborat: Content, Padding, Border va Margin.
      </p>

      <!-- Premium Metadata Badges -->
      <div class="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono">
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          O‘qish vaqti: 6 daqiqa
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          box-sizing: border-box
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Margin Collapse
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya + C++ Under-the-hood Toggle -->
    <div class="p-6 rounded-2xl bg-surface-900/40 border border-surface-800/80 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2.5 text-amber-400 font-bold text-sm sm:text-base">
          <span class="text-xl">👶</span>
          <span>5 yoshli bola uchun tushuntirish: Pochta Sovg‘a Qutisi</span>
        </div>
        <button
          @click="showUnderTheHood = !showUnderTheHood"
          class="px-2.5 py-1 rounded-lg bg-surface-800 hover:bg-surface-700 text-[11px] font-mono text-brand-400 border border-brand-500/30 transition-all cursor-pointer"
        >
          <span>{{ showUnderTheHood ? 'Analogiyaga qaytish' : '🔬 Ostidagi Kodni Ko‘rish' }}</span>
        </button>
      </div>

      <div v-if="!showUnderTheHood" class="space-y-2 text-xs sm:text-sm text-surface-300 leading-relaxed animate-in fade-in duration-200">
        <p>Do‘stingizga mo‘rt sovg‘a yubormoqchisiz:</p>
        <ul class="space-y-1 list-disc list-inside text-surface-400 text-xs">
          <li><strong>Content</strong> — quti ichidagi haqiqiy sovg‘angiz (telefon).</li>
          <li><strong>Padding</strong> — sovg‘a sinmasligi uchun atrofidagi yumshoq paxta/ko‘pik.</li>
          <li><strong>Border</strong> — sovg‘aning qattiq karton qutisi.</li>
          <li><strong>Margin</strong> — boshqa qutilar bilan urilib ketmasligi uchun oraliq masofa.</li>
        </ul>
      </div>

      <div v-else class="space-y-2 font-mono text-xs animate-in fade-in duration-200">
        <div class="text-cyan-300 font-bold">Blink LayoutBoxModel: Physical Geometry Computation</div>
        <pre class="p-3.5 rounded-xl bg-surface-950 border border-surface-800 text-cyan-300 text-[11px] leading-relaxed overflow-x-auto"><code>// third_party/blink/renderer/core/layout/layout_box_model_object.cc
LayoutUnit LayoutBoxModelObject::BorderAndPaddingWidth() const {
  return BorderLeft() + BorderRight() + PaddingLeft() + PaddingRight();
}</code></pre>
      </div>
    </div>

    <!-- Visual Interactive Box Model Diagram (Hard & Deep) -->
    <section class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 1. Box Modelning 4 ta Qatlami
      </h2>

      <div class="p-6 rounded-2xl bg-surface-950 border border-surface-800 text-center font-mono text-xs space-y-3">
        <!-- Margin Outer -->
        <div class="p-4 rounded-xl bg-amber-500/10 border-2 border-dashed border-amber-500/40 text-amber-400">
          <div class="font-bold text-xs mb-2">MARGIN (Tashqi masofa — shaffof)</div>
          <!-- Border Middle -->
          <div class="p-4 rounded-xl bg-purple-500/10 border-2 border-purple-500/40 text-purple-400">
            <div class="font-bold text-xs mb-2">BORDER (Hoshiya devori)</div>
            <!-- Padding Inner -->
            <div class="p-4 rounded-xl bg-blue-500/10 border-2 border-blue-500/40 text-blue-400">
              <div class="font-bold text-xs mb-2">PADDING (Ichki oraliq)</div>
              <!-- Content Core -->
              <div class="p-4 rounded-lg bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 font-bold">
                CONTENT (Haqiqiy matn yoki rasm: Width × Height)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Live Code Editor -->
    <section class="space-y-4 pt-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 2. Jonli Mashq: Margin va Paddingni Sinab Ko‘ring
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