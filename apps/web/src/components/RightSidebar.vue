<template>
  <aside class="w-80 p-5 hidden xl:flex flex-col gap-6 sticky top-0 h-screen overflow-y-auto border-l border-surface-800/80 bg-surface-950/60 backdrop-blur-xl shrink-0">
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

      <div v-show="isTocOpen" class="space-y-1.5 pt-1 text-xs">
        <a
          v-for="(item, idx) in tocItems"
          :key="idx"
          :href="item.href"
          @click.prevent="scrollToHeading(item.href)"
          class="block py-1.5 px-2.5 rounded-lg transition-all text-left"
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

    <!-- Progress Card (Sizning yutuqingiz) -->
    <div class="rounded-2xl bg-surface-900/50 border border-surface-800/80 p-5 space-y-4">
      <h3 class="text-xs font-bold text-surface-200 uppercase tracking-wider">
        Sizning yutuqingiz
      </h3>

      <div class="flex items-center gap-4">
        <!-- Circular Progress Ring (40%) -->
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
              :stroke-dashoffset="163.36 - (163.36 * progressPercent) / 100"
              stroke-linecap="round"
              class="text-brand-400 transition-all duration-700 ease-out"
            />
          </svg>
          <span class="absolute font-mono font-bold text-sm text-white">
            {{ progressPercent }}%
          </span>
        </div>

        <!-- Progress Description -->
        <div class="text-xs space-y-1">
          <p class="text-surface-200 font-medium leading-relaxed">
            Ushbu dars bo‘yicha tugatdingiz!
          </p>
          <p class="text-brand-400 font-semibold flex items-center gap-1">
            Davom eting! 🎉
          </p>
        </div>
      </div>
    </div>

    <!-- Lesson Navigation Buttons (Oldingi dars / Keyingi dars) -->
    <div class="space-y-3 mt-auto pt-2">
      <!-- Previous Lesson -->
      <router-link
        v-if="prevLesson"
        :to="prevLesson.path"
        class="group flex items-center gap-3 p-3.5 rounded-xl bg-surface-900/70 hover:bg-surface-800/80 border border-surface-800 hover:border-surface-700 text-surface-300 hover:text-white transition-all text-xs"
      >
        <div class="w-8 h-8 rounded-lg bg-surface-800 group-hover:bg-surface-700 flex items-center justify-center text-surface-400 group-hover:text-white transition-colors shrink-0">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </div>
        <div class="min-w-0 flex-1">
          <div class="text-[10px] text-surface-500 font-medium">Oldingi dars</div>
          <div class="truncate font-semibold text-surface-200 group-hover:text-white">{{ prevLesson.title }}</div>
        </div>
      </router-link>

      <!-- Next Lesson (Prominent Green Card) -->
      <router-link
        v-if="nextLesson"
        :to="nextLesson.path"
        class="group flex items-center gap-3 p-3.5 rounded-xl bg-brand-950/80 hover:bg-brand-900/90 border border-brand-500/30 hover:border-brand-500/60 text-surface-100 transition-all text-xs shadow-lg shadow-brand-950/40"
      >
        <div class="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-400 group-hover:bg-brand-500 group-hover:text-surface-950 flex items-center justify-center transition-all shrink-0">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
        <div class="min-w-0 flex-1">
          <div class="text-[10px] text-brand-400 font-semibold">Keyingi dars</div>
          <div class="truncate font-bold text-white group-hover:text-brand-300">{{ nextLesson.title }}</div>
        </div>
      </router-link>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { coursesData, CourseData } from '../data/topics';

const route = useRoute();
const isTocOpen = ref(true);
const activeHeading = ref('html-nima');
const progressPercent = ref(40);

interface TocItem {
  id: string;
  title: string;
  href: string;
}

const tocItems = ref<TocItem[]>([
  { id: 'html-nima', title: 'HTML o‘zi nima?', href: '#html-nima' },
  { id: 'hujjat-strukturasi', title: 'Mukammal HTML Hujjat Strukturasi', href: '#hujjat-strukturasi' },
  { id: 'tarix-qisqacha', title: 'HTML tarixidan qisqacha', href: '#tarix-qisqacha' },
  { id: 'qanday-ishlaydi', title: 'HTML qanday ishlaydi?', href: '#qanday-ishlaydi' },
  { id: 'asosiy-qismlar', title: 'HTML ning asosiy qismlari', href: '#asosiy-qismlar' },
  { id: 'brauzer-oqishi', title: 'Brauzer HTML ni qanday o‘qiydi?', href: '#brauzer-oqishi' },
  { id: 'keyingi-qadam', title: 'Keyingi qadam', href: '#keyingi-qadam' },
]);

const currentCourse = computed<CourseData>(() => {
  const segment = route.path.split('/')[1] || 'html';
  const found = coursesData[segment];
  if (found) return found;
  return coursesData['html'] as CourseData;
});

const allLessonsFlat = computed(() => {
  return currentCourse.value.modules.flatMap(m => m.lessons);
});

const currentLessonIndex = computed(() => {
  const currentPath = route.path;
  const idx = allLessonsFlat.value.findIndex(l => l.path === currentPath);
  return idx !== -1 ? idx : 3; // Default to 2.1
});

const prevLesson = computed(() => {
  if (currentLessonIndex.value > 0 && allLessonsFlat.value[currentLessonIndex.value - 1]) {
    return allLessonsFlat.value[currentLessonIndex.value - 1];
  }
  return {
    title: '1.3. Web Sahifa nima?',
    path: '/html/tarix',
  };
});

const nextLesson = computed(() => {
  if (currentLessonIndex.value < allLessonsFlat.value.length - 1 && allLessonsFlat.value[currentLessonIndex.value + 1]) {
    return allLessonsFlat.value[currentLessonIndex.value + 1];
  }
  return {
    title: '2.2. Browser qanday ishlaydi?',
    path: '/html/browser-qanday-ishlaydi',
  };
});

function scrollToHeading(href: string) {
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
    activeHeading.value = href.replace('#', '');
  }
}

// Track scroll to highlight active TOC heading
function handleScroll() {
  const headings = document.querySelectorAll('h2[id], h3[id]');
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
