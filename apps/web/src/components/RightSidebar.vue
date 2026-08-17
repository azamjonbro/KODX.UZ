<template>
  <aside class="w-80 p-5 hidden xl:flex flex-col gap-5 sticky top-0 h-screen overflow-y-auto border-l border-surface-800/80 bg-surface-950/60 backdrop-blur-xl shrink-0">
    <!-- Table of Contents (Ushbu sahifada) -->
    <div class="rounded-2xl bg-surface-900/50 border border-surface-800/80 p-4.5 space-y-3.5 transition-all">
      <div class="flex items-center justify-between cursor-pointer select-none" @click="isTocOpen = !isTocOpen">
        <h3 class="text-xs font-bold text-surface-200 uppercase tracking-wider flex items-center gap-2">
          <span>Ushbu sahifada</span>
        </h3>
        <svg
          class="w-4 h-4 text-surface-400 transition-transform duration-200"
          :class="{ 'rotate-180': !isTocOpen }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <div v-show="isTocOpen" class="space-y-1 pt-1 text-xs">
        <a
          v-for="(item, idx) in tocItems"
          :key="idx"
          :href="item.href"
          @click.prevent="scrollToHeading(item.href)"
          class="block py-1.5 px-2.5 rounded-lg transition-all text-left truncate"
          :class="[
            activeHeading === item.id
              ? 'text-brand-400 font-semibold border-l-2 border-brand-500 bg-brand-500/10 rounded-l-none pl-3'
              : 'text-surface-400 hover:text-surface-200 hover:bg-surface-800/50'
          ]"
        >
          {{ item.title }}
        </a>
      </div>
    </div>

    <!-- Complete Lesson Interactive Action Button -->
    <div class="p-4 rounded-2xl bg-gradient-to-r from-surface-900 via-surface-900 to-surface-900 border border-surface-800 space-y-3 text-left">
      <div class="flex items-center justify-between">
        <span class="text-xs font-bold text-white">Darsni O‘zlashtirish</span>
        <span class="text-[10px] font-mono font-bold text-brand-400">+50 XP</span>
      </div>

      <button
        @click="handleToggleComplete"
        class="w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
        :class="[
          isCurrentLessonDone
            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
            : 'bg-brand-500 hover:bg-brand-400 text-surface-950 shadow-brand-500/20'
        ]"
      >
        <span v-if="isCurrentLessonDone">✓ Dars Tugatildi</span>
        <span v-else>Darsni Tugatdim ✓ (+50 XP)</span>
      </button>
    </div>

    <!-- Progress Card (Sizning yutuqingiz) -->
    <div class="rounded-2xl bg-surface-900/50 border border-surface-800/80 p-5 space-y-4 text-left">
      <div class="flex items-center justify-between">
        <h3 class="text-xs font-bold text-surface-200 uppercase tracking-wider">
          Sizning yutuqingiz
        </h3>
        <span class="text-[11px] font-mono text-brand-400 font-bold">
          {{ courseStats.completedLessons }} / {{ courseStats.totalLessons }} dars
        </span>
      </div>

      <div class="flex items-center gap-4">
        <!-- Circular Progress Ring -->
        <div class="relative w-16 h-16 shrink-0 flex items-center justify-center">
          <svg class="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
            <!-- Background circle -->
            <circle
              cx="32"
              cy="32"
              r="26"
              stroke="currentColor"
              stroke-width="5"
              fill="transparent"
              class="text-surface-800"
            />
            <!-- Progress circle -->
            <circle
              cx="32"
              cy="32"
              r="26"
              stroke="currentColor"
              stroke-width="5"
              fill="transparent"
              stroke-dasharray="163.36"
              :stroke-dashoffset="163.36 - (163.36 * courseStats.progressPercent) / 100"
              stroke-linecap="round"
              class="text-brand-400 transition-all duration-700 ease-out"
            />
          </svg>
          <span class="absolute font-mono font-bold text-xs text-white">
            {{ courseStats.progressPercent }}%
          </span>
        </div>

        <!-- Progress Description -->
        <div class="text-xs space-y-1">
          <p class="text-surface-200 font-medium leading-relaxed">
            {{ courseStats.title.split('—')[0] }} kursi bo‘yicha
          </p>
          <p class="text-brand-400 font-semibold flex items-center gap-1">
            {{ courseStats.progressPercent >= 100 ? 'Kurs yakunlandi! 🏆' : 'Davom eting! 🚀' }}
          </p>
        </div>
      </div>
    </div>


  </aside>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { useProgressStore } from '../stores/progress';

const route = useRoute();
const progressStore = useProgressStore();
const isTocOpen = ref(true);
const activeHeading = ref('html-nima');

interface TocItem {
  id: string;
  title: string;
  href: string;
}

const tocItems = ref<TocItem[]>([
  { id: 'brauzer-oqishi', title: 'Brauzer HTML ni qanday o‘qiydi?', href: '#brauzer-oqishi' },
  { id: 'html-nima', title: 'HTML o‘zi nima?', href: '#html-nima' },
  { id: 'hujjat-strukturasi', title: 'Mukammal HTML Hujjat Strukturasi', href: '#hujjat-strukturasi' },
  { id: 'asosiy-qismlar', title: 'Chromium Blink Xotira Arxitekturasi', href: '#asosiy-qismlar' },
  { id: 'qanday-ishlaydi', title: 'Interaktiv Amaliyot', href: '#qanday-ishlaydi' },
  { id: 'tarix-qisqacha', title: 'HTML tarixidan qisqacha', href: '#tarix-qisqacha' },
  { id: 'keyingi-qadam', title: 'Keyingi qadam', href: '#keyingi-qadam' },
]);

const currentCourseSlug = computed(() => {
  return route.path.split('/')[1] || 'html';
});



const courseStats = computed(() => {
  return progressStore.getCourseStats(currentCourseSlug.value);
});

const isCurrentLessonDone = computed(() => {
  return progressStore.isLessonCompleted(route.path);
});

function handleToggleComplete() {
  progressStore.toggleLessonComplete(route.path, 50);
}


function scrollToHeading(href: string) {
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
    activeHeading.value = href.replace('#', '');
  }
}

function handleScroll() {
  const headings = document.querySelectorAll('h2[id], section[id]');
  const scrollPosition = window.scrollY + 120;

  headings.forEach((heading) => {
    const el = heading as HTMLElement;
    const top = el.offsetTop;
    const height = el.offsetHeight;
    const id = el.getAttribute('id');

    if (id && scrollPosition >= top && scrollPosition < top + height + 300) {
      activeHeading.value = id;
    }
  });
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
