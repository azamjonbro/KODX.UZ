<template>
  <div class="space-y-10 max-w-4xl pb-16">
    <!-- Title & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <div class="flex items-center gap-2 text-xs font-mono text-brand-400">
        <span>CSS Asoslari</span>
        <span>/</span>
        <span class="text-surface-400">2-Dars</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        CSS Selektorlar — Sehrli Nishonga Olish
      </h1>
      <p class="text-base sm:text-lg text-surface-300 leading-relaxed">
        Selektorlar — HTML sahifangizdagi aynan qaysi elementga stil bermoqchi ekanligingizni aniq ko‘rsatib beruvchi qidiruv kalitlaridir.
      </p>

      <div class="flex flex-wrap items-center gap-4 text-xs text-surface-400 pt-2">
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          ⏱️ O‘qish vaqti: 7 daqiqa
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          🎯 Daraja: Boshlang‘ich
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          📚 MDN: CSS Selectors
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-brand-500/10 to-transparent border border-cyan-500/20 space-y-3">
      <div class="flex items-center gap-2 text-cyan-400 font-bold text-base">
        <span class="text-xl">👶</span>
        <span>5 yoshli bola uchun tushuntirish: O‘qituvchining Chaqiruvi</span>
      </div>
      <p class="text-sm text-surface-200 leading-relaxed">
        Bog‘cha xonasida 20 ta bola bor. O‘qituvchi aytadi:
      </p>
      <ul class="text-xs text-surface-300 space-y-1.5 list-disc list-inside">
        <li><strong>"Hamma bolalar qarsak chalsin!"</strong> (Element selektori — hamma tegga ta’sir qiladi).</li>
        <li><strong>"Sariq ko‘ylak kiyganlar o‘rnidan tursin!"</strong> (Klass selektori — faqat <code>.sariq-koylak</code> klassi borlarga).</li>
        <li><strong>"Azizbek, doskaga chiq!"</strong> (ID selektori — faqat bitta <code>#azizbek</code> degan yagona shaxsga).</li>
      </ul>
    </div>

    <!-- ⚡ Interaktiv Selektor Laboratoriyasi -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">⚡</span> Jonli Sinov: Selektorni Tanlang va Natijani Ko‘ring
      </h2>
      <p class="text-sm text-surface-400">
        Quyidagi selektor tugmalarini bosing va o‘ng tarafdagi elementlardan qaysi biri tanlanishini (yonishini) ko‘ring:
      </p>

      <div class="p-5 rounded-2xl bg-surface-900 border border-surface-800 space-y-6">
        <!-- Selector Buttons -->
        <div class="flex flex-wrap gap-2">
          <button
            v-for="s in selectorModes"
            :key="s.id"
            @click="activeSelector = s"
            :class="[
              'px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all',
              activeSelector.id === s.id
                ? 'bg-brand-500 text-surface-950 shadow-lg shadow-brand-500/20'
                : 'bg-surface-800 text-surface-300 hover:bg-surface-700'
            ]"
          >
            {{ s.syntax }}
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Code snippet -->
          <div class="p-4 rounded-xl bg-surface-950 border border-surface-800 space-y-2">
            <div class="text-xs font-mono text-surface-500">CSS qoidasi:</div>
            <pre class="text-xs font-mono text-cyan-300"><code>{{ activeSelector.cssCode }}</code></pre>
            <div class="text-xs text-surface-400 pt-2 border-t border-surface-800">
              📌 <strong>Tushuntirish:</strong> {{ activeSelector.explanation }}
            </div>
          </div>

          <!-- Live Mock Preview -->
          <div class="p-4 rounded-xl bg-surface-950 border border-surface-800 space-y-3">
            <div class="text-xs font-mono text-surface-500 pb-1 border-b border-surface-800">Sahifadagi elementlar:</div>

            <div
              :class="[
                'p-3 rounded-lg border text-xs font-mono transition-all',
                activeSelector.target === 'h1' || activeSelector.target === 'all'
                  ? 'bg-brand-500/20 border-brand-400 text-brand-300 font-bold scale-[1.02]'
                  : 'bg-surface-900 border-surface-800 text-surface-400'
              ]"
            >
              &lt;h1&gt;Asosiy Sarlavha&lt;/h1&gt;
            </div>

            <div
              :class="[
                'p-3 rounded-lg border text-xs font-mono transition-all',
                activeSelector.target === 'p' || activeSelector.target === 'all'
                  ? 'bg-brand-500/20 border-brand-400 text-brand-300 font-bold scale-[1.02]'
                  : 'bg-surface-900 border-surface-800 text-surface-400'
              ]"
            >
              &lt;p&gt;Oddiy paragraf matni&lt;/p&gt;
            </div>

            <div
              :class="[
                'p-3 rounded-lg border text-xs font-mono transition-all',
                activeSelector.target === 'special' || activeSelector.target === 'all'
                  ? 'bg-brand-500/20 border-brand-400 text-brand-300 font-bold scale-[1.02]'
                  : 'bg-surface-900 border-surface-800 text-surface-400'
              ]"
            >
              &lt;p class="maxsus"&gt;Maxsus klassli paragraf&lt;/p&gt;
            </div>

            <div
              :class="[
                'p-3 rounded-lg border text-xs font-mono transition-all',
                activeSelector.target === 'unique' || activeSelector.target === 'all'
                  ? 'bg-brand-500/20 border-brand-400 text-brand-300 font-bold scale-[1.02]'
                  : 'bg-surface-900 border-surface-800 text-surface-400'
              ]"
            >
              &lt;button id="yagona-tugma"&gt;Yagona ID ga ega Tugma&lt;/button&gt;
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Asosiy Selektorlar Jadvali -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> CSS Selektorlarining 3 Asosiy Turi
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-2">
          <div class="font-mono font-bold text-brand-400 text-sm">p { color: red; }</div>
          <div class="font-semibold text-white">Element Selektori</div>
          <p class="text-surface-400">Sahifadagi barcha <code>&lt;p&gt;</code> teglariga bir vaqtda ta’sir qiladi.</p>
        </div>

        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-2">
          <div class="font-mono font-bold text-amber-400 text-sm">.maxsus { color: blue; }</div>
          <div class="font-semibold text-white">Klass Selektori (.)</div>
          <p class="text-surface-400">Boshida nuqta qo‘yiladi. Bir nechta elementga umumiy stil berish uchun eng ko‘p ishlatiladi.</p>
        </div>

        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-2">
          <div class="font-mono font-bold text-cyan-400 text-sm">#yagona { color: green; }</div>
          <div class="font-semibold text-white">ID Selektori (#)</div>
          <p class="text-surface-400">Boshida <code>#</code> belgisi qo‘yiladi. Faqat bitta yagona elementni nishonga oladi.</p>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="pt-6 border-t border-surface-800 flex flex-wrap items-center justify-between gap-4">
      <router-link
        to="/css/kirish"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-900 hover:bg-surface-800 text-surface-300 text-xs font-semibold border border-surface-700 transition-colors"
      >
        <span>← 1-Dars: CSS Kirish</span>
      </router-link>

      <router-link
        to="/css/box-model"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors"
      >
        <span>Keyingi Dars: CSS Box Model →</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface SelectorMode {
  id: string;
  syntax: string;
  cssCode: string;
  explanation: string;
  target: 'h1' | 'p' | 'special' | 'unique' | 'all';
}

const selectorModes: SelectorMode[] = [
  {
    id: 'tag',
    syntax: 'p { ... }',
    cssCode: 'p {\n  color: #22a675;\n  font-weight: bold;\n}',
    explanation: 'Sahifadagi barcha <p> teglarini tanlaydi.',
    target: 'p',
  },
  {
    id: 'class',
    syntax: '.maxsus { ... }',
    cssCode: '.maxsus {\n  color: #22a675;\n  border: 1px solid #22a675;\n}',
    explanation: 'Faqat class="maxsus" ga ega bo‘lgan elementlarni tanlaydi.',
    target: 'special',
  },
  {
    id: 'id',
    syntax: '#yagona-tugma { ... }',
    cssCode: '#yagona-tugma {\n  background: #22a675;\n  color: white;\n}',
    explanation: 'Faqat id="yagona-tugma" ga ega bitta yagona elementni tanlaydi.',
    target: 'unique',
  },
];

const activeSelector = ref<SelectorMode>(selectorModes[0]!);
</script>
