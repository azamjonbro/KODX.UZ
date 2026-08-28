<template>
  <div class="space-y-10 max-w-6xl mx-auto pb-24 text-left">
    <!-- Header -->
    <div class="space-y-4 border-b border-surface-800 pb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 font-mono text-xs font-bold">
        <span>🌐 Global Knowledge Universe & Element Ensiklopediyasi</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
        Universal Dasturlash Ensiklopediyasi
      </h1>
      <p class="text-base sm:text-lg text-surface-300 max-w-3xl leading-relaxed">
        Rasmiy WHATWG, W3C va TC39 standartlari asosida tuzilgan to‘liq inventar: 5 yoshli bola tushuntirishidan tortib C++ dvigatel darajasigacha.
      </p>
    </div>

    <!-- Search & Filters Container -->
    <div class="p-6 rounded-3xl bg-surface-900 border border-surface-800 space-y-5 shadow-2xl">
      <!-- Search Input -->
      <div class="relative">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Teg, element, atribut yoki kalit so‘zni qidiring (masalan: dialog, picture, nav, header, button, form)..."
          class="w-full pl-12 pr-4 py-3.5 bg-surface-950 border border-surface-700 focus:border-brand-500 rounded-2xl text-sm text-white placeholder-surface-500 focus:outline-none transition-all font-mono"
        />
        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-surface-500">🔍</span>
      </div>

      <!-- Categories Filter Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
        <button
          @click="selectedCategory = 'all'"
          class="px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer"
          :class="[
            selectedCategory === 'all'
              ? 'bg-brand-500 text-surface-950 font-bold shadow-lg shadow-brand-500/20'
              : 'bg-surface-950 text-surface-400 hover:text-white border border-surface-800'
          ]"
        >
          Barchasi ({{ htmlElementsData.length }})
        </button>

        <button
          v-for="cat in availableCategories"
          :key="cat.slug"
          @click="selectedCategory = cat.slug"
          class="px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer"
          :class="[
            selectedCategory === cat.slug
              ? 'bg-brand-500 text-surface-950 font-bold shadow-lg shadow-brand-500/20'
              : 'bg-surface-950 text-surface-400 hover:text-white border border-surface-800'
          ]"
        >
          {{ cat.name }} ({{ cat.count }})
        </button>
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
            <span
              class="text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase"
              :class="[
                node.status === 'CURRENT'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : 'bg-red-500/10 text-red-400 border border-red-500/20'
              ]"
            >
              {{ node.status }}
            </span>
          </div>

          <p class="text-xs text-surface-300 line-clamp-2 leading-relaxed">
            {{ node.description }}
          </p>
        </div>

        <div class="pt-2 border-t border-surface-800/80 flex items-center justify-between text-[11px] font-mono text-surface-500">
          <span>{{ node.categoryName }}</span>
          <span class="text-brand-400 group-hover:underline">Batafsil →</span>
        </div>
      </div>
    </div>

    <!-- Empty State if no match -->
    <div v-else class="p-12 text-center rounded-3xl bg-surface-900/50 border border-surface-800 space-y-3">
      <div class="text-3xl">🔍</div>
      <div class="text-white font-bold text-base">Hech narsa topilmadi</div>
      <p class="text-xs text-surface-400">Qidiruv so‘zini o‘zgartirib ko‘ring yoki barcha toifalarni tanlang.</p>
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
          <div class="flex items-center gap-2.5">
            <h2 class="text-2xl font-black font-mono text-white">{{ selectedNode.name }}</h2>
            <span
              class="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full uppercase"
              :class="[
                selectedNode.status === 'CURRENT'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : 'bg-red-500/10 text-red-400 border border-red-500/20'
              ]"
            >
              {{ selectedNode.status }}
            </span>
            <span v-if="selectedNode.introduced" class="text-xs font-mono text-surface-400">
              ({{ selectedNode.introduced }})
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

        <!-- 🔬 Code Snippet -->
        <div class="p-4 rounded-2xl bg-surface-950 border border-surface-800 font-mono text-xs text-cyan-300 space-y-1 overflow-x-auto">
          <div class="text-[10px] text-surface-400 uppercase font-bold">Misol va Sintaksis:</div>
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
            Tegishli darsga o‘tish 🚀
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { htmlElementsData, type KnowledgeItem } from '../data/knowledgeData';

const searchQuery = ref('');
const selectedCategory = ref('all');
const selectedNode = ref<KnowledgeItem | null>(null);

const availableCategories = computed(() => {
  const map: Record<string, { slug: string; name: string; count: number }> = {};

  htmlElementsData.forEach((item) => {
    if (!map[item.category]) {
      map[item.category] = { slug: item.category, name: item.categoryName, count: 0 };
    }
    map[item.category]!.count++;
  });

  return Object.values(map);
});

const filteredNodes = computed(() => {
  return htmlElementsData.filter((node) => {
    const matchesCategory = selectedCategory.value === 'all' || node.category === selectedCategory.value;
    const q = searchQuery.value.toLowerCase().trim();
    const matchesQuery = !q || node.name.toLowerCase().includes(q) || node.description.toLowerCase().includes(q) || node.categoryName.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });
});
</script>
