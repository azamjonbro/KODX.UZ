<template>
  <div class="space-y-10 max-w-6xl mx-auto pb-24 text-left">
    <!-- Header -->
    <div class="space-y-4 border-b border-surface-800 pb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 font-mono text-xs font-bold">
        <span>🌐 Global Knowledge Universe Matrix</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
        Universal Dasturlash Ensiklopediyasi
      </h1>
      <p class="text-base sm:text-lg text-surface-300 max-w-3xl leading-relaxed">
        WHATWG, W3C va TC39 standartlari asosida HTML, CSS va JavaScript bo‘yicha to‘liq qamrovli bilimlar daraxti: 5 yoshli bola darajasidan to C++ dvigatel darajasigacha.
      </p>
    </div>

    <!-- Technology & Search Controls -->
    <div class="p-6 rounded-3xl bg-surface-900 border border-surface-800 space-y-6 shadow-2xl">
      <!-- Technology Selector (HTML / CSS / JavaScript) -->
      <div class="flex flex-wrap gap-2">
        <button
          v-for="tech in techTabs"
          :key="tech.id"
          @click="activeTech = tech.id"
          class="px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
          :class="[
            activeTech === tech.id
              ? 'bg-brand-500 text-surface-950 shadow-lg shadow-brand-500/20'
              : 'bg-surface-950 text-surface-400 hover:text-white border border-surface-800'
          ]"
        >
          <span>{{ tech.icon }}</span>
          <span>{{ tech.name }} ({{ tech.count }})</span>
        </button>
      </div>

      <!-- Search Input -->
      <div class="relative">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Element, selektor, API yoki kalit so‘zni qidiring (masalan: dialog, grid, flexbox, async, closure)..."
          class="w-full pl-12 pr-4 py-3.5 bg-surface-950 border border-surface-700 focus:border-brand-500 rounded-2xl text-sm text-white placeholder-surface-500 focus:outline-none transition-all font-mono"
        />
        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-surface-500">🔍</span>
      </div>
    </div>

    <!-- Nodes Grid -->
    <div v-if="filteredNodes.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="node in filteredNodes"
        :key="node.name"
        @click="selectedNode = node"
        class="p-5 rounded-2xl bg-surface-900/80 hover:bg-surface-900 border border-surface-800 hover:border-brand-500/50 transition-all cursor-pointer space-y-3 group flex flex-col justify-between"
      >
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-base font-mono font-bold text-brand-400 group-hover:text-brand-300 transition-colors">
              {{ node.name }}
            </span>
            <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-surface-950 border border-surface-800 text-surface-400">
              {{ node.category }}
            </span>
          </div>

          <p class="text-xs text-surface-300 line-clamp-2 leading-relaxed">
            {{ node.description }}
          </p>
        </div>

        <div class="pt-2 border-t border-surface-800/80 flex items-center justify-between text-[11px] font-mono text-surface-500">
          <span>{{ node.spec }}</span>
          <span class="text-brand-400 group-hover:underline">Batafsil →</span>
        </div>
      </div>
    </div>

    <!-- Node Detail Modal -->
    <div
      v-if="selectedNode"
      class="fixed inset-0 bg-surface-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
      @click.self="selectedNode = null"
    >
      <div class="relative w-full max-w-2xl rounded-3xl bg-surface-900 border border-surface-800 p-6 sm:p-8 shadow-2xl space-y-6 text-left animate-in fade-in zoom-in-95 duration-150">
        <!-- Close Button -->
        <button
          @click="selectedNode = null"
          class="absolute top-5 right-5 text-surface-400 hover:text-white p-2 rounded-xl hover:bg-surface-800 transition-colors cursor-pointer"
        >
          ✕
        </button>

        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <h2 class="text-2xl font-black font-mono text-white">{{ selectedNode.name }}</h2>
            <span class="px-2.5 py-0.5 rounded bg-brand-500/10 text-brand-400 font-mono text-xs font-bold border border-brand-500/20">
              {{ selectedNode.category }}
            </span>
          </div>
          <p class="text-sm text-surface-300 leading-relaxed">{{ selectedNode.description }}</p>
        </div>

        <!-- 👶 5 Yoshli Bola Uchun Analogiya -->
        <div class="p-4.5 rounded-2xl bg-surface-950 border border-surface-800 space-y-2">
          <div class="text-amber-400 font-bold text-xs flex items-center gap-1.5">
            <span>👶</span> 5 yoshli bola uchun tushuntirish:
          </div>
          <p class="text-xs text-surface-300 leading-relaxed">{{ selectedNode.kidAnalogy }}</p>
        </div>

        <!-- 🔬 C++ / Engine Internals -->
        <div class="p-4 rounded-2xl bg-surface-950 border border-surface-800 font-mono text-xs text-cyan-300 space-y-1 overflow-x-auto">
          <div class="text-[10px] text-surface-400 uppercase font-bold">Dvigatel Xotirasi & Kod:</div>
          <pre><code>{{ selectedNode.code }}</code></pre>
        </div>

        <!-- Action Links -->
        <div class="flex items-center justify-between pt-2">
          <span class="text-xs font-mono text-surface-500">{{ selectedNode.spec }}</span>
          <router-link
            :to="selectedNode.link"
            @click="selectedNode = null"
            class="px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-all shadow-lg shadow-brand-500/20"
          >
            To‘liq darsni o‘qish 🚀
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const activeTech = ref('html');
const searchQuery = ref('');
const selectedNode = ref<any>(null);

const techTabs = [
  { id: 'html', name: 'HTML5 Standartlari', icon: '🌐', count: 162 },
  { id: 'css', name: 'CSS3 & Layout', icon: '🎨', count: 148 },
  { id: 'js', name: 'JavaScript & V8', icon: '⚙️', count: 120 },
];

const nodesData = {
  html: [
    {
      name: '<dialog>',
      category: 'Top Layer & Modals',
      description: 'JavaScript kutubxonalarisiz to‘g‘ridan-to‘g‘ri brauzerning Top Layer qatlamida modal oyna ochish.',
      kidAnalogy: 'O‘yinda yutganingizda ekranning o‘rtasiga sakrab chiqadigan tabriknoma oynasi.',
      code: '// HTMLDialogElement::showModal()\ndialog.showModal();',
      spec: 'WHATWG HTML 4.11.1',
      link: '/html/dialog',
    },
    {
      name: '<picture>',
      category: 'Responsive Images',
      description: 'Ekran o‘lchami va brauzer formatiga (AVIF, WebP) mos rasm yuklovchi konteyner.',
      kidAnalogy: 'Telefon va televizorga moslab alohida fotosurat taqdim etuvchi sehrli ramka.',
      code: '<picture>\n  <source type="image/avif" srcset="hero.avif">\n  <img src="hero.jpg">\n</picture>',
      spec: 'WHATWG HTML 4.8.1',
      link: '/html/rasmlar',
    },
    {
      name: '<article>',
      category: 'Sectioning Elements',
      description: 'Mustaqil o‘qilishi va tarqatilishi mumkin bo‘lgan semantik maqola blog posti.',
      kidAnalogy: 'Gazetadagi alohida sarlavha va matnga ega maqola qutisi.',
      code: '<article>\n  <h2>Sarlavha</h2>\n  <p>Matn</p>\n</article>',
      spec: 'WHATWG HTML 4.3.2',
      link: '/html/semantika',
    },
  ],
  css: [
    {
      name: ':has() Selector',
      category: 'Relational Selectors',
      description: 'Ota elementni uning bolalari tarkibiga qarab tanlab oluvchi inqilobiy selektor.',
      kidAnalogy: 'Agar sumkada kitob bo‘lsa, butun sumkani sariq rangga bo‘yash.',
      code: '.card:has(img) {\n  border: 2px solid #22c55e;\n}',
      spec: 'W3C Selectors 4',
      link: '/css/modern',
    },
    {
      name: 'display: flex',
      category: '1D Layout',
      description: 'Elementlarni bitta qator yoki ustun bo‘ylab moslashuvchan tekislovchi model.',
      kidAnalogy: 'Poyezd vagonlarini bitta ipga terib, oralarini ochib qo‘yish.',
      code: '.container {\n  display: flex;\n  justify-content: space-between;\n}',
      spec: 'W3C CSS Flexbox 1',
      link: '/css/flexbox',
    },
    {
      name: 'display: grid',
      category: '2D Layout',
      description: 'Qatorlar va ustunlar bo‘ylab to‘liq 2 o‘lchamli maket chizish tizimi.',
      kidAnalogy: 'Shaxmat taxtasi kataklari kabi tekis qator va ustunlar.',
      code: '.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n}',
      spec: 'W3C CSS Grid 2',
      link: '/css/grid',
    },
  ],
  js: [
    {
      name: 'Event Loop',
      category: 'Asinxron Runtime',
      description: 'Microtasks (Promises) va Macrotasks navbatlarini Call Stack orqali boshqaruvchi dvigatel.',
      kidAnalogy: 'Restorandagi bitta ofitsiant o‘nlab stollarga navbat bilan taom olib kelishi.',
      code: 'Promise.resolve().then(() => console.log("Microtask!"));',
      spec: 'HTML5 Event Loop Specification',
      link: '/javascript/async',
    },
    {
      name: 'Closure',
      category: 'Funksiyalar',
      description: 'Ichki funksiyaning o‘zidan tashqaridagi o‘zgaruvchilarni xotirada saqlab qolish qobiliyati.',
      kidAnalogy: 'Uydan chiqib ketsangiz ham cho‘ntagingizda uy kaliti borligi.',
      code: 'function createCounter() {\n  let c = 0;\n  return () => ++c;\n}',
      spec: 'ECMA-262 Lexical Environments',
      link: '/javascript/funksiyalar',
    },
  ],
};

const filteredNodes = computed(() => {
  const list = nodesData[activeTech.value as keyof typeof nodesData] || [];
  if (!searchQuery.value.trim()) return list;
  const q = searchQuery.value.toLowerCase();
  return list.filter(n => n.name.toLowerCase().includes(q) || n.description.toLowerCase().includes(q) || n.category.toLowerCase().includes(q));
});
</script>
