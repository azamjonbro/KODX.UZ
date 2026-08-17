<template>
  <div class="space-y-10 max-w-6xl mx-auto pb-24">
    <!-- Header -->
    <div class="space-y-4 text-center sm:text-left border-b border-surface-800 pb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 font-mono text-xs font-bold">
        <span>🌐 Global Markup Knowledge Universe</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
        HTML Elementlar va Konstruksiyalar Ensiklopediyasi
      </h1>
      <p class="text-base sm:text-lg text-surface-300 max-w-3xl leading-relaxed">
        Rasmiy WHATWG, W3C va MDN standartlari asosida tuzilgan to‘liq inventar: 5 yoshli boladan tortib Senior developergacha bo‘lgan chuqurlikda.
      </p>
    </div>

    <!-- Search & Filter Controls -->
    <div class="p-6 rounded-3xl bg-surface-900 border border-surface-800 space-y-6 shadow-2xl">
      <div class="relative">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Element, teg, atribut yoki kalit so‘zni qidiring (masalan: h1, sarlavha, dialog, modal, font, canvas)..."
          class="w-full pl-12 pr-4 py-4 bg-surface-950 border border-surface-700 rounded-2xl text-sm sm:text-base text-white placeholder-surface-500 focus:outline-none focus:border-brand-500 transition-all font-mono"
        />
        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-surface-500">🔍</span>
      </div>

      <!-- Categories Filter Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        <button
          @click="selectedCategory = 'all'"
          :class="[
            'px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all',
            selectedCategory === 'all'
              ? 'bg-brand-500 text-surface-950 font-bold shadow-lg shadow-brand-500/20'
              : 'bg-surface-950 text-surface-400 hover:text-white hover:bg-surface-800 border border-surface-800'
          ]"
        >
          Barchasi ({{ allNodes.length }})
        </button>

        <button
          v-for="cat in categories"
          :key="cat.slug"
          @click="selectedCategory = cat.slug"
          :class="[
            'px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all',
            selectedCategory === cat.slug
              ? 'bg-brand-500 text-surface-950 font-bold shadow-lg shadow-brand-500/20'
              : 'bg-surface-950 text-surface-400 hover:text-white hover:bg-surface-800 border border-surface-800'
          ]"
        >
          {{ cat.name }} ({{ cat.nodes?.length || 0 }})
        </button>
      </div>
    </div>

    <!-- Nodes Grid -->
    <div v-if="filteredNodes.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div
        v-for="node in filteredNodes"
        :key="node.id"
        @click="selectedNode = node"
        class="p-6 rounded-2xl bg-surface-900/80 hover:bg-surface-900 border border-surface-800 hover:border-brand-500/50 transition-all cursor-pointer space-y-4 group flex flex-col justify-between"
      >
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-lg font-mono font-extrabold text-brand-400 group-hover:text-brand-300 transition-colors">
              {{ node.name }}
            </span>
            <span
              :class="[
                'text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider',
                node.status === 'CURRENT'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : 'bg-red-500/10 text-red-400 border border-red-500/20'
              ]"
            >
              {{ node.status }}
            </span>
          </div>

          <p class="text-xs text-surface-300 line-clamp-3 leading-relaxed">
            {{ node.technicalSummary }}
          </p>
        </div>

        <div class="pt-3 border-t border-surface-800 flex items-center justify-between text-[11px] text-surface-400">
          <span class="font-mono text-cyan-400">{{ node.introducedIn || 'Standart' }}</span>
          <span class="group-hover:translate-x-1 transition-transform font-bold text-brand-400">Batafsil →</span>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="p-12 text-center rounded-3xl bg-surface-900 border border-surface-800 space-y-3">
      <div class="text-4xl">🔍</div>
      <h3 class="text-base font-bold text-white">Hech narsa topilmadi</h3>
      <p class="text-xs text-surface-400">Boshqa kalit so‘z bilan qidirib ko‘ring.</p>
    </div>

    <!-- Detailed Modal for Node -->
    <div
      v-if="selectedNode"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto"
      @click.self="selectedNode = null"
    >
      <div class="my-8 p-6 sm:p-8 rounded-3xl bg-surface-900 border border-surface-700 max-w-3xl w-full space-y-6 shadow-2xl animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
        <!-- Modal Header -->
        <div class="flex items-start justify-between border-b border-surface-800 pb-4">
          <div>
            <div class="flex items-center gap-3">
              <h2 class="text-2xl sm:text-3xl font-mono font-extrabold text-brand-400">
                {{ selectedNode.name }}
              </h2>
              <span
                :class="[
                  'text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase',
                  selectedNode.status === 'CURRENT'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                ]"
              >
                {{ selectedNode.status }}
              </span>
            </div>
            <p class="text-xs text-surface-400 mt-1 font-mono">{{ selectedNode.englishName }}</p>
          </div>

          <button
            @click="selectedNode = null"
            class="p-2 rounded-xl bg-surface-800 hover:bg-surface-700 text-surface-300 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        <!-- 👶 5 Yoshli Bola Uchun Analogiya -->
        <div class="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-brand-500/10 to-transparent border border-amber-500/20 space-y-2">
          <div class="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <span>👶 5 yoshli bola uchun tushuntirish:</span>
          </div>
          <p class="text-xs sm:text-sm text-surface-200 leading-relaxed">
            {{ selectedNode.kidExplanation }}
          </p>
          <p v-if="selectedNode.kidAnalogy" class="text-xs text-surface-300 italic pt-1">
            💡 Hayotiy analogiya: {{ selectedNode.kidAnalogy }}
          </p>
        </div>

        <!-- Texnik Tushuntirish & Sintaksis -->
        <div class="space-y-2">
          <h3 class="text-sm font-bold text-white">🚀 Texnik Tushuntirish:</h3>
          <p class="text-xs sm:text-sm text-surface-300 leading-relaxed">
            {{ selectedNode.technicalSummary }}
          </p>
        </div>

        <!-- Kod Namunasi -->
        <div v-if="selectedNode.codeExample" class="space-y-2">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-bold text-white">💻 Kod Namunasi:</h3>
            <span class="text-[10px] font-mono text-brand-400">Ishlaydigan toza kod</span>
          </div>
          <pre class="p-4 rounded-2xl bg-surface-950 border border-surface-800 font-mono text-xs text-cyan-300 overflow-x-auto"><code>{{ selectedNode.codeExample }}</code></pre>
        </div>

        <!-- Ko‘p Uchraydigan Xatolar -->
        <div v-if="selectedNode.commonMistakes" class="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 space-y-1">
          <div class="text-xs font-bold text-red-400">⚠️ Ko‘p Uchraydigan Xatolar:</div>
          <p class="text-xs text-surface-300 leading-relaxed">{{ selectedNode.commonMistakes }}</p>
        </div>

        <!-- Footer Meta: Standart & Manba -->
        <div class="pt-4 border-t border-surface-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-surface-400">
          <div>
            <span>Rasmiy Spetsifikatsiya: </span>
            <a
              v-if="selectedNode.specUrl"
              :href="selectedNode.specUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-brand-400 underline hover:text-brand-300"
            >
              {{ selectedNode.specName || 'WHATWG Standarti' }} ↗
            </a>
            <span v-else>{{ selectedNode.specName || 'WHATWG / W3C' }}</span>
          </div>

          <button
            @click="selectedNode = null"
            class="px-5 py-2.5 rounded-xl bg-brand-500 text-surface-950 font-bold text-xs shadow-lg shadow-brand-500/20 hover:bg-brand-400 transition-colors"
          >
            Tushundim ✅
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { apiClient } from '../services/api';

interface CategoryItem {
  id: string;
  slug: string;
  name: string;
  description?: string;
  nodes: any[];
}

const categories = ref<CategoryItem[]>([]);
const allNodes = ref<any[]>([]);
const searchQuery = ref('');
const selectedCategory = ref('all');
const selectedNode = ref<any | null>(null);

async function fetchKnowledgeData() {
  try {
    const res = await apiClient.get<{ success: boolean; data: CategoryItem[] }>('/knowledge/technologies/html/categories');
    if (res.data?.success && res.data.data) {
      categories.value = res.data.data;
      allNodes.value = res.data.data.flatMap((c) => c.nodes || []);
    }
  } catch (error) {
    console.error('Error fetching knowledge categories:', error);
  }
}

const filteredNodes = computed(() => {
  let list = allNodes.value;

  if (selectedCategory.value !== 'all') {
    const cat = categories.value.find((c) => c.slug === selectedCategory.value);
    list = cat ? cat.nodes || [] : [];
  }

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.trim().toLowerCase();
    list = list.filter((n) => {
      const matchName = n.name?.toLowerCase().includes(q);
      const matchSlug = n.slug?.toLowerCase().includes(q);
      const matchSummary = n.technicalSummary?.toLowerCase().includes(q);
      const matchAliases = n.aliases?.some((a: string) => a.toLowerCase().includes(q));
      return matchName || matchSlug || matchSummary || matchAliases;
    });
  }

  return list;
});

onMounted(() => {
  fetchKnowledgeData();
});
</script>
