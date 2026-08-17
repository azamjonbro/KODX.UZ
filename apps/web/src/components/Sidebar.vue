<template>
  <aside class="w-72 lg:w-80 h-screen sticky top-0 flex flex-col bg-surface-950/95 border-r border-surface-800/80 backdrop-blur-xl shrink-0 z-40 select-none">
    <!-- Top Header: Brand Logo -->
    <div class="px-5 pt-5 pb-3 flex items-center justify-between">
      <router-link to="/" class="flex items-center gap-2.5 group">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 to-brand-400 flex items-center justify-center text-surface-950 font-black shadow-lg shadow-brand-500/25 group-hover:scale-105 transition-transform">
          <span class="font-mono text-sm tracking-tighter">&lt;/&gt;</span>
        </div>
        <span class="font-mono tracking-tight font-extrabold text-xl text-white">
          KODX<span class="text-brand-400">.uz</span>
        </span>
      </router-link>
    </div>

    <!-- Search Input with ⌘K Badge (Click triggers CommandPalette) -->
    <div class="px-4 py-2">
      <div
        @click="openCommandPalette"
        class="relative flex items-center cursor-pointer group"
      >
        <svg
          class="w-4 h-4 text-surface-400 group-hover:text-brand-400 absolute left-3.5 pointer-events-none transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          readonly
          placeholder="Qidirish..."
          class="w-full pl-9 pr-12 py-2 bg-surface-900/80 group-hover:bg-surface-900 border border-surface-800 group-hover:border-surface-700 rounded-xl text-xs text-white placeholder-surface-500 cursor-pointer focus:outline-none transition-all font-sans"
        />
        <div class="absolute right-2.5 flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-surface-800 border border-surface-700/60 text-[10px] font-mono text-surface-400 group-hover:text-surface-300">
          <span>⌘</span>
          <span>K</span>
        </div>
      </div>
    </div>

    <!-- Scrollable Center Area (Main Nav & Themes / Subthemes Tree) -->
    <div class="flex-1 overflow-y-auto px-4 py-2 space-y-5 custom-sidebar-scroll">
      <!-- Main Platform Navigation Links -->
      <nav class="space-y-0.5">
        <router-link
          v-for="nav in mainNavLinks"
          :key="nav.path"
          :to="nav.path"
          class="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all text-surface-400 hover:text-surface-100 hover:bg-surface-900/60 group"
          :active-class="nav.exact ? '!bg-brand-500/10 !text-brand-400 !font-semibold' : ''"
        >
          <!-- Custom Icon Rendering -->
          <component :is="nav.icon" class="w-4 h-4 text-surface-400 group-hover:text-white transition-colors" />
          <span>{{ nav.label }}</span>
        </router-link>
      </nav>

      <!-- Course Header / Progress Status -->
      <div class="pt-2 border-t border-surface-800/80">
        <div class="flex items-center justify-between px-1 mb-3">
          <h2 class="text-[11px] font-mono font-bold uppercase tracking-wider text-surface-400">
            {{ currentCourse.title }}
          </h2>
          <span class="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-surface-900 border border-surface-800 text-brand-400">
            {{ courseStats.completedLessons }} / {{ courseStats.totalLessons }}
          </span>
        </div>

        <!-- Modules (Themes) & Subthemes List -->
        <div class="space-y-2">
          <div
            v-for="mod in currentCourse.modules"
            :key="mod.id"
            class="rounded-xl transition-all duration-200"
            :class="[
              isModuleActive(mod)
                ? 'border border-brand-500/40 bg-brand-500/5 shadow-sm'
                : 'border border-transparent hover:border-surface-800/60 hover:bg-surface-900/30'
            ]"
          >
            <!-- Module / Theme Header Button -->
            <button
              type="button"
              @click="toggleModule(mod.id)"
              class="w-full flex items-center justify-between p-2.5 text-xs text-left rounded-xl transition-colors group cursor-pointer"
            >
              <div class="flex items-center gap-2.5 min-w-0 pr-2">
                <!-- Theme Status Indicator (Completed Checkmark / Green Dot / Circle) -->
                <div class="shrink-0 flex items-center justify-center">
                  <!-- Completed Icon -->
                  <div
                    v-if="isModuleCompleted(mod)"
                    class="w-4 h-4 rounded-full border border-brand-500/60 text-brand-400 flex items-center justify-center text-[10px] bg-brand-500/10"
                  >
                    <svg class="w-3 h-3 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <!-- Active Indicator -->
                  <div
                    v-else-if="isModuleActive(mod)"
                    class="w-4 h-4 rounded-full border-2 border-brand-400 flex items-center justify-center"
                  >
                    <div class="w-1.5 h-1.5 rounded-full bg-brand-400"></div>
                  </div>
                  <!-- Inactive Circle Indicator -->
                  <div
                    v-else
                    class="w-4 h-4 rounded-full border border-surface-600 flex items-center justify-center"
                  ></div>
                </div>

                <!-- Theme Title -->
                <span
                  class="truncate text-xs font-semibold"
                  :class="[
                    isModuleActive(mod) ? 'text-white' : isModuleCompleted(mod) ? 'text-surface-300' : 'text-surface-400'
                  ]"
                >
                  {{ mod.title }}
                </span>
              </div>

              <!-- Right Indicator: Checkmark or Chevron Arrow -->
              <div class="shrink-0 flex items-center">
                <span v-if="isModuleCompleted(mod)" class="text-brand-400 text-xs font-bold mr-1">✓</span>
                <svg
                  class="w-3.5 h-3.5 text-surface-400 transition-transform duration-200"
                  :class="{ 'rotate-180': openModules.includes(mod.id) }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            <!-- Subthemes (Lessons) Accordion List -->
            <div
              v-show="openModules.includes(mod.id)"
              class="space-y-1 pb-2 pt-0.5 px-2"
            >
              <router-link
                v-for="sub in mod.lessons"
                :key="sub.id"
                :to="sub.path"
                class="flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium transition-all group"
                :class="[
                  isSubthemeActive(sub)
                    ? 'text-brand-400 bg-brand-500/10 font-bold'
                    : 'text-surface-400 hover:text-surface-200 hover:bg-surface-800/40'
                ]"
              >
                <div class="flex items-center gap-2.5 min-w-0">
                  <!-- Subtheme Bullet Point -->
                  <div class="shrink-0 flex items-center justify-center">
                    <div
                      v-if="isSubthemeActive(sub)"
                      class="w-2 h-2 rounded-full bg-brand-400 shadow-sm shadow-brand-400/80"
                    ></div>
                    <div
                      v-else-if="progressStore.isLessonCompleted(sub.path)"
                      class="w-2 h-2 rounded-full bg-brand-500/80"
                    ></div>
                    <div
                      v-else
                      class="w-2 h-2 rounded-full border border-surface-600"
                    ></div>
                  </div>

                  <!-- Subtheme Title -->
                  <span class="truncate">{{ sub.title }}</span>
                </div>

                <!-- Done Checkmark -->
                <span v-if="progressStore.isLessonCompleted(sub.path)" class="text-[10px] text-brand-400 font-bold shrink-0 ml-1">
                  ✓
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Section: Continue Course Card & User Profile Bar -->
    <div class="p-3 border-t border-surface-800/80 bg-surface-950/90 space-y-3 shrink-0">
      <!-- "Kursni davom ettirish" (Continue Course Progress Card) -->
      <div class="p-3 rounded-xl bg-surface-900/80 border border-surface-800/80 space-y-2">
        <div class="flex items-center justify-between text-[11px]">
          <span class="text-surface-400 font-medium">Kursni davom ettirish</span>
          <span class="font-mono font-bold text-brand-400">{{ courseStats.progressPercent }}%</span>
        </div>
        <p class="text-xs font-semibold text-white truncate text-left">
          {{ activeSubthemeTitle }}
        </p>
        <!-- Progress Bar -->
        <div class="w-full h-1.5 bg-surface-800 rounded-full overflow-hidden">
          <div
            class="h-full bg-gradient-to-r from-brand-500 to-emerald-400 rounded-full transition-all duration-500"
            :style="{ width: `${courseStats.progressPercent}%` }"
          ></div>
        </div>
      </div>

      <!-- User Profile Bar Wrapped with ProfileMenu -->
      <ProfileMenu>
        <div class="flex items-center justify-between p-2 rounded-xl hover:bg-surface-900 transition-colors cursor-pointer group">
          <div class="flex items-center gap-2.5 min-w-0">
            <!-- Avatar with Gradient Ring -->
            <div class="relative w-8 h-8 rounded-full overflow-hidden bg-surface-800 border border-surface-700 flex items-center justify-center shrink-0">
              <span class="text-xs font-bold text-surface-200">👨‍💻</span>
            </div>

            <div class="min-w-0 text-left">
              <div class="text-xs font-bold text-white truncate group-hover:text-brand-300 transition-colors">
                Abdulloh
              </div>
              <div class="text-[10px] text-surface-400 font-mono">
                Level {{ progressStore.level.value }}
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <span class="font-mono text-xs font-bold text-brand-400">
              {{ progressStore.xp.value.toLocaleString() }} XP
            </span>
            <svg class="w-3.5 h-3.5 text-surface-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </ProfileMenu>
    </div>

    <!-- Command Palette (⌘K) Modal Component -->
    <CommandPalette ref="commandPaletteRef" />
  </aside>
</template>

<script setup lang="ts">
import { ref, computed, h, watch } from 'vue';
import { useRoute } from 'vue-router';
import { coursesData, CourseData, ThemeModuleItem, SubthemeItem } from '../data/topics';
import { useProgressStore } from '../stores/progress';
import ProfileMenu from './ProfileMenu.vue';
import CommandPalette from './CommandPalette.vue';

const route = useRoute();
const progressStore = useProgressStore();
const commandPaletteRef = ref<InstanceType<typeof CommandPalette> | null>(null);

function openCommandPalette() {
  commandPaletteRef.value?.open();
}

// SVG Icon Helper Components
const createSvgIcon = (d: string) => ({
  render() {
    return h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24',
      class: 'w-4 h-4',
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d,
      })
    ]);
  }
});

const HomeIcon = createSvgIcon('M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6');
const MapIcon = createSvgIcon('M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7');
const BookOpenIcon = createSvgIcon('M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253');
const BriefcaseIcon = createSvgIcon('M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z');
const TargetIcon = createSvgIcon('M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z');
const TrophyIcon = createSvgIcon('M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10');
const BookIcon = createSvgIcon('M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25');
const NewspaperIcon = createSvgIcon('M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z');

const mainNavLinks = [
  { label: 'Bosh sahifa', path: '/', icon: HomeIcon, exact: true },
  { label: 'Yo\'l xaritalari', path: '/roadmaps', icon: MapIcon },
  { label: 'Kurslar', path: '/html/kirish', icon: BookOpenIcon },
  { label: 'Amaliyot', path: '/practice', icon: BriefcaseIcon },
  { label: 'Challenges', path: '/challenges', icon: TargetIcon },
  { label: 'Leaderboard', path: '/leaderboard', icon: TrophyIcon },
  { label: 'Lug\'at', path: '/dictionary', icon: BookIcon },
  { label: 'Yangiliklar', path: '/news', icon: NewspaperIcon },
];

const currentCourseSlug = computed(() => {
  return route.path.split('/')[1] || 'html';
});

const currentCourse = computed<CourseData>(() => {
  const found = coursesData[currentCourseSlug.value];
  if (found) return found;
  return coursesData['html'] as CourseData;
});

const courseStats = computed(() => {
  return progressStore.getCourseStats(currentCourseSlug.value);
});

// Manage open modules accordion state
const openModules = ref<string[]>(['html-mod-2']);

function toggleModule(id: string) {
  if (openModules.value.includes(id)) {
    openModules.value = openModules.value.filter(m => m !== id);
  } else {
    openModules.value.push(id);
  }
}

function isModuleActive(mod: ThemeModuleItem) {
  return mod.lessons.some(sub => isSubthemeActive(sub));
}

function isModuleCompleted(mod: ThemeModuleItem) {
  return mod.lessons.every(sub => progressStore.isLessonCompleted(sub.path));
}

function isSubthemeActive(sub: SubthemeItem) {
  return route.path === sub.path || (route.path === '/html' && sub.path === '/html/kirish');
}

const activeSubthemeTitle = computed(() => {
  for (const mod of currentCourse.value.modules) {
    const found = mod.lessons.find(sub => isSubthemeActive(sub));
    if (found) return found.title;
  }
  return '2.1. Client va Server nima?';
});

// Automatically open the module that holds the active lesson
watch(
  () => route.path,
  () => {
    for (const mod of currentCourse.value.modules) {
      if (mod.lessons.some(sub => isSubthemeActive(sub))) {
        if (!openModules.value.includes(mod.id)) {
          openModules.value.push(mod.id);
        }
      }
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.custom-sidebar-scroll::-webkit-scrollbar {
  width: 4px;
}
.custom-sidebar-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.custom-sidebar-scroll::-webkit-scrollbar-thumb {
  background: #27272a;
  border-radius: 4px;
}
.custom-sidebar-scroll::-webkit-scrollbar-thumb:hover {
  background: #3f3f46;
}
</style>
