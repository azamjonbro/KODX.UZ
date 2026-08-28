<template>
  <div>
    <!-- Backdrop Modal -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-surface-950/80 backdrop-blur-md z-50 flex items-start justify-center pt-16 sm:pt-24 px-4"
      @click.self="close"
    >
      <div class="relative w-full max-w-xl rounded-2xl bg-surface-900 border border-surface-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <!-- Search Input Header -->
        <div class="flex items-center px-4 py-3 border-b border-surface-800/80 bg-surface-950/80">
          <svg class="w-4 h-4 text-brand-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref="inputRef"
            v-model="query"
            type="text"
            placeholder="Darslar, mavzular, teglarni qidiring..."
            class="w-full bg-transparent text-sm text-white placeholder-surface-500 focus:outline-none font-sans"
            @keydown.down.prevent="navigateResults(1)"
            @keydown.up.prevent="navigateResults(-1)"
            @keydown.enter.prevent="selectResult"
            @keydown.esc="close"
          />
          <div class="flex items-center gap-1 text-[10px] font-mono text-surface-400 px-2 py-0.5 rounded bg-surface-800 border border-surface-700/60 shrink-0">
            <span>ESC</span>
          </div>
        </div>

        <!-- Search Results List -->
        <div class="max-h-80 overflow-y-auto p-2 space-y-1">
          <div v-if="filteredItems.length === 0" class="py-10 text-center text-xs text-surface-500">
            Natija topilmadi: "{{ query }}"
          </div>

          <div
            v-for="(item, idx) in filteredItems"
            :key="item.path + idx"
            @click="navigateTo(item.path)"
            class="flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all text-xs"
            :class="[
              selectedIndex === idx
                ? 'bg-brand-500/15 border border-brand-500/40 text-white'
                : 'text-surface-300 hover:bg-surface-800/60 hover:text-white border border-transparent'
            ]"
          >
            <div class="flex items-center gap-3 min-w-0">
              <span class="text-base shrink-0">{{ item.icon }}</span>
              <div class="min-w-0">
                <div class="font-semibold truncate">{{ item.title }}</div>
                <div class="text-[10px] text-surface-400 truncate">{{ item.category }}</div>
              </div>
            </div>

            <span class="text-[10px] font-mono text-surface-500 uppercase shrink-0 ml-2">
              {{ item.tag }}
            </span>
          </div>
        </div>

        <!-- Footer Shortcuts -->
        <div class="flex items-center justify-between px-4 py-2 bg-surface-950/80 border-t border-surface-800/80 text-[10px] text-surface-500 font-mono">
          <div class="flex items-center gap-3">
            <span><kbd class="px-1 py-0.5 rounded bg-surface-800 text-surface-300">↑↓</kbd> Tanlash</span>
            <span><kbd class="px-1 py-0.5 rounded bg-surface-800 text-surface-300">↵</kbd> O‘tish</span>
          </div>
          <span>KODX 2.0 Search</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import { coursesData } from '../data/topics';

const router = useRouter();
const isOpen = ref(false);
const query = ref('');
const selectedIndex = ref(0);
const inputRef = ref<HTMLInputElement | null>(null);

interface SearchItem {
  title: string;
  category: string;
  path: string;
  icon: string;
  tag: string;
}

const searchItems = computed<SearchItem[]>(() => {
  const list: SearchItem[] = [
    { title: 'Bosh sahifa', category: 'Asosiy', path: '/', icon: '🏠', tag: 'Nav' },
    { title: 'Yo‘l xaritalari', category: 'Karyera', path: '/roadmaps', icon: '🗺️', tag: 'Karyera' },
    { title: 'Amaliy Mashqlar', category: 'Amaliyot', path: '/practice', icon: '💼', tag: 'Kod' },
    { title: 'Challenges va Viktorinalar', category: 'Bellashuv', path: '/challenges', icon: '🎯', tag: 'O‘yin' },
    { title: 'Leaderboard (Reyting)', category: 'Gamifikatsiya', path: '/leaderboard', icon: '🏆', tag: 'XP' },
    { title: 'Dasturlash Lug‘ati', category: 'Ma‘lumotnoma', path: '/dictionary', icon: '📖', tag: 'Lug‘at' },
    { title: 'Texnologik Yangiliklar', category: 'Yangiliklar', path: '/news', icon: '📰', tag: 'Yangilik' },
  ];

  // Add all lessons
  Object.values(coursesData).forEach((course) => {
    course.modules.forEach((mod) => {
      mod.lessons.forEach((l) => {
        list.push({
          title: l.title,
          category: `${course.title} • ${mod.title}`,
          path: l.path,
          icon: course.slug === 'html' ? '🌐' : course.slug === 'css' ? '🎨' : '⚙️',
          tag: 'Dars',
        });
      });
    });
  });

  return list;
});

const filteredItems = computed(() => {
  if (!query.value.trim()) return searchItems.value.slice(0, 10);
  const q = query.value.toLowerCase();
  return searchItems.value
    .filter(item => item.title.toLowerCase().includes(q) || item.category.toLowerCase().includes(q))
    .slice(0, 15);
});

function open() {
  isOpen.value = true;
  query.value = '';
  selectedIndex.value = 0;
  nextTick(() => {
    inputRef.value?.focus();
  });
}

function close() {
  isOpen.value = false;
}

function navigateResults(direction: number) {
  const max = filteredItems.value.length;
  if (max === 0) return;
  selectedIndex.value = (selectedIndex.value + direction + max) % max;
}

function selectResult() {
  const item = filteredItems.value[selectedIndex.value];
  if (item) {
    navigateTo(item.path);
  }
}

function navigateTo(path: string) {
  router.push(path);
  close();
}

function handleKeydown(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    if (isOpen.value) close();
    else open();
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});

defineExpose({
  open,
  close,
});
</script>
