<template>
  <div class="space-y-8 max-w-5xl mx-auto pb-24 text-left animate-in fade-in duration-300">
    <!-- Top Breadcrumb & Quick Actions -->
    <div class="flex items-center justify-between flex-wrap gap-3 text-xs font-mono">
      <nav class="flex items-center flex-wrap gap-2 text-surface-400">
        <router-link to="/html/html-tarixi" class="hover:text-surface-200 transition-colors flex items-center gap-1">
          <span>🌐</span> HTML ASOSLARI
        </router-link>
        <span class="text-surface-600">&gt;</span>
        <span class="text-surface-400">{{ lesson?.moduleTitle }}</span>
        <span class="text-surface-600">&gt;</span>
        <span class="text-brand-400 font-bold">{{ lesson?.title }}</span>
      </nav>

      <div class="flex items-center gap-2">
        <button
          @click="toggleBookmark"
          class="p-2 rounded-xl border border-surface-800 bg-surface-900/60 hover:bg-surface-800 text-surface-400 hover:text-amber-400 transition-all cursor-pointer flex items-center gap-1.5"
          :title="isBookmarked ? 'Saqlanganlardan o‘chirish' : 'Darsni saqlab qo‘yish'"
        >
          <span :class="isBookmarked ? 'text-amber-400' : ''">{{ isBookmarked ? '★' : '☆' }}</span>
          <span class="text-[11px] hidden sm:inline">{{ isBookmarked ? 'Saqlandi' : 'Saqlash' }}</span>
        </button>
      </div>
    </div>

    <!-- Hero Header Banner (Ultra Premium Glassmorphic Card) -->
    <div class="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-surface-900/90 via-surface-950/80 to-brand-950/20 border border-surface-800/80 hover:border-surface-700/80 shadow-2xl overflow-hidden backdrop-blur-xl space-y-5">
      <div class="absolute -right-16 -top-16 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -left-16 -bottom-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Module & ID Pill -->
      <div class="flex flex-wrap items-center justify-between gap-2">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono font-bold">
          <span>⚡</span> {{ lesson?.moduleTitle }}
        </div>
        <span class="text-xs font-mono text-surface-500 font-semibold">ID: {{ lesson?.id }}</span>
      </div>

      <!-- Main Title -->
      <div class="space-y-2.5">
        <h1 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
          {{ lesson?.title }}
        </h1>
        <p class="text-xs sm:text-sm text-surface-300 leading-relaxed max-w-3xl">
          {{ lesson?.description }}
        </p>
      </div>

      <!-- Premium Meta Badges -->
      <div class="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono">
        <span class="inline-flex items-center gap-1.5 bg-surface-950/80 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ lesson?.estimatedMinutes }} daqiqa o‘qish
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-950/80 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ lesson?.spec }}
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-950/80 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Chromium Blink C++
        </span>
      </div>
    </div>

    <!-- Multi-Layer Tab Navigator (Sleek Glassmorphic Pills) -->
    <div class="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-surface-950/90 border border-surface-800/80 backdrop-blur-xl">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        class="px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer select-none"
        :class="[
          activeTab === tab.id
            ? 'bg-brand-500 text-surface-950 font-bold shadow-lg shadow-brand-500/25 scale-[1.02]'
            : 'text-surface-400 hover:text-white hover:bg-surface-900/80'
        ]"
      >
        <span>{{ tab.icon }}</span>
        <span>{{ tab.label }}</span>
        <span
          v-if="tab.badge"
          class="px-1.5 py-0.5 rounded-md text-[10px] font-mono"
          :class="activeTab === tab.id ? 'bg-surface-950/20 text-surface-950' : 'bg-surface-800 text-surface-400'"
        >
          {{ tab.badge }}
        </span>
      </button>
    </div>

    <!-- TAB 1: 📘 To‘liq Darslik (Normative Theory, Tables & Callouts) -->
    <div v-if="activeTab === 'theory'" class="space-y-8 animate-in fade-in duration-200">
      <!-- Rendered Markdown Content -->
      <div
        class="prose prose-invert max-w-none text-surface-200 text-sm sm:text-base leading-relaxed space-y-4 font-sans"
        v-html="renderedContent"
      ></div>

      <!-- Attributes Reference Table -->
      <div v-if="lesson?.attributes && lesson.attributes.length > 0" class="space-y-3 pt-4">
        <h3 class="text-base sm:text-lg font-bold text-white flex items-center gap-2">
          <span>📋</span> Standart Atributlar Jadvali
        </h3>
        <div class="overflow-x-auto rounded-2xl border border-surface-800 bg-surface-950/60 shadow-xl">
          <table class="w-full text-left text-xs font-mono divide-y divide-surface-800">
            <thead class="bg-surface-900/90 text-surface-400 uppercase tracking-wider">
              <tr>
                <th class="p-3.5">Atribut</th>
                <th class="p-3.5">Turi</th>
                <th class="p-3.5">Boshlang‘ich</th>
                <th class="p-3.5">Tavsifi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-surface-800/60">
              <tr v-for="attr in lesson.attributes" :key="attr.name" class="hover:bg-surface-900/40 transition-colors">
                <td class="p-3.5 font-bold text-brand-400">{{ attr.name }}</td>
                <td class="p-3.5 text-blue-400">{{ attr.type }}</td>
                <td class="p-3.5 text-surface-500">{{ attr.defaultVal }}</td>
                <td class="p-3.5 font-sans text-surface-300">{{ attr.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Pro Tips & Gotchas Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <!-- Pro Tips -->
        <div class="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
          <div class="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <span>💡</span> Pro Maslahatlar (Best Practices)
          </div>
          <ul class="space-y-2 text-xs text-surface-300 list-disc list-inside leading-relaxed">
            <li v-for="(tip, idx) in lesson?.proTips" :key="idx">{{ tip }}</li>
          </ul>
        </div>

        <!-- Gotchas / Pitfalls -->
        <div class="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-3">
          <div class="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <span>⚠️</span> Ko‘p Uchraydigan Xatolar (Gotchas)
          </div>
          <ul class="space-y-2 text-xs text-surface-300 list-disc list-inside leading-relaxed">
            <li v-for="(gotcha, idx) in lesson?.gotchas" :key="idx">{{ gotcha }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- TAB 2: 👶 5 Yoshli Bola Uchun (Story & C++ Under-the-hood Toggle) -->
    <div v-else-if="activeTab === 'kid'" class="space-y-6 animate-in fade-in duration-200">
      <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-brand-500/10 to-surface-900 border border-amber-500/30 space-y-6 shadow-2xl">
        <div class="flex items-center justify-between flex-wrap gap-2 border-b border-amber-500/20 pb-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-2xl flex items-center justify-center">
              👶
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">{{ lesson?.kidAnalogy?.title }}</h3>
              <p class="text-xs text-amber-400 font-mono">Sodda hayotiy analogiya orqali tushunish</p>
            </div>
          </div>

          <button
            @click="showKidUnderTheHood = !showKidUnderTheHood"
            class="px-3 py-1.5 rounded-xl bg-surface-900 hover:bg-surface-800 text-xs font-mono text-brand-400 border border-brand-500/30 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>{{ showKidUnderTheHood ? 'Analogiyaga qaytish' : '🔬 Ostidagi Real Kodni Ko‘rish' }}</span>
          </button>
        </div>

        <div v-if="!showKidUnderTheHood" class="space-y-4">
          <p class="text-sm sm:text-base text-surface-200 leading-relaxed font-normal">
            {{ lesson?.kidAnalogy?.story }}
          </p>

          <div class="p-4 rounded-2xl bg-surface-950/80 border border-amber-500/20 flex items-center gap-3 text-xs">
            <span class="text-lg">🎯</span>
            <span class="text-amber-300 font-medium"><strong>Xulosa:</strong> {{ lesson?.kidAnalogy?.keyTakeaway }}</span>
          </div>
        </div>

        <!-- Under the Hood C++ Snippet -->
        <div v-else class="space-y-3 animate-in fade-in duration-200">
          <div class="flex items-center justify-between text-xs font-mono text-cyan-300">
            <span>{{ lesson?.cppInternalCode?.filename }}</span>
            <span class="text-surface-400">Chromium Blink Core</span>
          </div>
          <pre class="p-4 rounded-2xl bg-surface-950 border border-surface-800 text-cyan-300 text-xs font-mono leading-relaxed overflow-x-auto shadow-inner"><code>{{ lesson?.cppInternalCode?.code }}</code></pre>
          <p class="text-xs text-surface-400 leading-relaxed font-sans">
            {{ lesson?.cppInternalCode?.explanation }}
          </p>
        </div>
      </div>
    </div>

    <!-- TAB 3: 🔬 Brauzer Dvigateli (C++ Internals) -->
    <div v-else-if="activeTab === 'internals'" class="space-y-6 animate-in fade-in duration-200">
      <div class="p-6 rounded-3xl bg-surface-900/80 border border-surface-800 space-y-4">
        <div class="flex items-center justify-between border-b border-surface-800 pb-3">
          <div class="flex items-center gap-2">
            <span class="text-xl">🔬</span>
            <h3 class="text-base font-bold text-white">Chromium Blink Dvigateli Xotira Tuzilishi</h3>
          </div>
          <span class="text-xs font-mono text-brand-400">{{ lesson?.cppInternalCode?.filename }}</span>
        </div>

        <pre class="p-4 rounded-2xl bg-surface-950 border border-surface-800 text-cyan-300 text-xs font-mono leading-relaxed overflow-x-auto"><code>{{ lesson?.cppInternalCode?.code }}</code></pre>

        <p class="text-xs text-surface-300 leading-relaxed">
          {{ lesson?.cppInternalCode?.explanation }}
        </p>
      </div>

      <BrowserInternalsDeepDive />
    </div>

    <!-- TAB 4: 💻 Jonli Sandbox (Interactive IDE) -->
    <div v-else-if="activeTab === 'sandbox'" class="space-y-4 animate-in fade-in duration-200">
      <InteractiveCodePlayground />
    </div>

    <!-- TAB 5: 🎬 Video Simulyator -->
    <div v-else-if="activeTab === 'video'" class="space-y-4 animate-in fade-in duration-200">
      <InteractiveEngineVisualizer />
    </div>

    <!-- TAB 6: 🎯 Bilimni Sinash (Quiz Arena) -->
    <div v-else-if="activeTab === 'quiz'" class="space-y-6 animate-in fade-in duration-200">
      <div class="p-6 sm:p-8 rounded-3xl bg-surface-900/80 border border-surface-800 space-y-6">
        <div class="flex items-center justify-between border-b border-surface-800 pb-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-500/40 text-xl flex items-center justify-center">
              🎯
            </div>
            <div>
              <h3 class="text-base font-bold text-white">Tezkor Mavzuni Mustahkamlash Testi</h3>
              <p class="text-xs text-surface-400 font-mono">To‘g‘ri javoblar orqali +XP to‘plang</p>
            </div>
          </div>
          <span class="text-xs font-mono text-brand-400 font-bold">{{ quizScore }} / {{ (lesson?.quiz || []).length }} Ball</span>
        </div>

        <div class="space-y-5">
          <div
            v-for="(q, qIdx) in (lesson?.quiz || [])"
            :key="qIdx"
            class="p-5 rounded-2xl bg-surface-950 border border-surface-800 space-y-3 text-left"
          >
            <h4 class="text-sm font-bold text-white">{{ qIdx + 1 }}. {{ q.question }}</h4>
            <div class="space-y-2">
              <button
                v-for="(opt, oIdx) in q.options"
                :key="oIdx"
                @click="answerQuiz(qIdx, oIdx)"
                :disabled="userAnswers[qIdx] !== undefined"
                class="w-full p-3 rounded-xl text-xs font-mono text-left transition-all border cursor-pointer flex items-center justify-between"
                :class="[
                  userAnswers[qIdx] === undefined
                    ? 'bg-surface-900 border-surface-800 hover:border-brand-500/50 text-surface-200'
                    : oIdx === q.correct
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                    : userAnswers[qIdx] === oIdx
                    ? 'bg-red-500/20 border-red-500 text-red-300 font-bold'
                    : 'bg-surface-900 border-surface-800/40 text-surface-500 opacity-50'
                ]"
              >
                <span>{{ opt }}</span>
                <span v-if="userAnswers[qIdx] !== undefined && oIdx === q.correct">✓</span>
                <span v-else-if="userAnswers[qIdx] === oIdx && oIdx !== q.correct">✗</span>
              </button>
            </div>
            <p v-if="userAnswers[qIdx] !== undefined" class="text-[11px] text-surface-400 pt-1">
              💡 <strong>Izoh:</strong> {{ q.explanation }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Navigation (Prev / Next & Complete Buttons) -->
    <div class="pt-8 border-t border-surface-800 flex flex-col sm:flex-row items-center justify-between gap-4">
      <button
        v-if="prevLesson"
        @click="navigateToLesson(prevLesson.path)"
        class="w-full sm:w-auto px-5 py-3 rounded-2xl bg-surface-900 hover:bg-surface-800 border border-surface-800 hover:border-surface-700 text-left transition-all cursor-pointer flex items-center gap-3 group"
      >
        <span class="text-surface-400 group-hover:-translate-x-1 transition-transform">←</span>
        <div>
          <div class="text-[10px] font-mono text-surface-500 uppercase">Oldingi Dars</div>
          <div class="text-xs font-bold text-white truncate max-w-[200px]">{{ prevLesson.title }}</div>
        </div>
      </button>
      <div v-else class="hidden sm:block"></div>

      <!-- Mark Completed Button -->
      <button
        @click="completeLesson"
        class="w-full sm:w-auto px-6 py-3.5 rounded-2xl font-bold text-xs transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
        :class="[
          isCompleted
            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
            : 'bg-brand-500 hover:bg-brand-400 text-surface-950 shadow-brand-500/25 scale-[1.02]'
        ]"
      >
        <span v-if="isCompleted">✓ Dars O‘zlashtirildi</span>
        <span v-else>Darsni O‘zlashtirdim ✓ (+50 XP)</span>
      </button>

      <button
        v-if="nextLesson"
        @click="navigateToLesson(nextLesson.path)"
        class="w-full sm:w-auto px-5 py-3 rounded-2xl bg-surface-900 hover:bg-surface-800 border border-surface-800 hover:border-surface-700 text-right transition-all cursor-pointer flex items-center justify-end gap-3 group"
      >
        <div>
          <div class="text-[10px] font-mono text-surface-500 uppercase">Keyingi Dars</div>
          <div class="text-xs font-bold text-white truncate max-w-[200px]">{{ nextLesson.title }}</div>
        </div>
        <span class="text-surface-400 group-hover:translate-x-1 transition-transform">→</span>
      </button>
      <div v-else class="hidden sm:block"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { coursesData, type SubthemeItem } from '../data/topics';
import { html25ModulesData, generateRichLessonData, type ComprehensiveLesson } from '../data/htmlModulesData';
import { useProgressStore } from '../stores/progress';
import InteractiveEngineVisualizer from '../components/InteractiveEngineVisualizer.vue';
import InteractiveCodePlayground from '../components/InteractiveCodePlayground.vue';
import BrowserInternalsDeepDive from '../components/BrowserInternalsDeepDive.vue';

const route = useRoute();
const router = useRouter();
const progressStore = useProgressStore();

const lesson = ref<ComprehensiveLesson | null>(null);
const activeTab = ref('theory');
const showKidUnderTheHood = ref(false);
const isBookmarked = ref(false);
const userAnswers = ref<Record<number, number>>({});
const quizScore = ref(0);

const tabs = [
  { id: 'theory', label: 'Darslik & Standartlar', icon: '📘' },
  { id: 'kid', label: '5 Yoshli Bola', icon: '👶' },
  { id: 'internals', label: 'C++ Internals', icon: '🔬' },
  { id: 'sandbox', label: 'Jonli Sandbox', icon: '💻' },
  { id: 'video', label: 'Simulyator', icon: '🎬' },
  { id: 'quiz', label: 'Test Arena', icon: '🎯', badge: '3' },
];

const lessonSlug = computed(() => {
  const param = route.params.lessonSlug as string;
  if (param) return param;
  const parts = route.path.split('/');
  return parts[parts.length - 1] || 'html-tarixi';
});

// All HTML lessons flattened for prev / next
const allHtmlLessons = computed<SubthemeItem[]>(() => {
  return (coursesData['html']?.modules || []).flatMap(m => m.lessons);
});

const currentLessonIndex = computed(() => {
  return allHtmlLessons.value.findIndex(l => l.slug === lessonSlug.value || l.path.endsWith(lessonSlug.value));
});

const prevLesson = computed(() => {
  if (currentLessonIndex.value > 0) {
    return allHtmlLessons.value[currentLessonIndex.value - 1];
  }
  return null;
});

const nextLesson = computed(() => {
  if (currentLessonIndex.value >= 0 && currentLessonIndex.value + 1 < allHtmlLessons.value.length) {
    return allHtmlLessons.value[currentLessonIndex.value + 1];
  }
  return null;
});

const isCompleted = computed(() => {
  return progressStore.isLessonCompleted(route.path);
});

function fetchLesson() {
  userAnswers.value = {};
  quizScore.value = 0;
  showKidUnderTheHood.value = false;

  const found = html25ModulesData[lessonSlug.value];
  if (found) {
    lesson.value = found;
  } else {
    // Search coursesData for metadata
    let foundTitle = lessonSlug.value.replace(/-/g, ' ');
    let foundModuleTitle = '01. TARIX VA STANDARTLAR';
    let foundOrder = 1;

    for (const mod of coursesData['html']?.modules || []) {
      const match = mod.lessons.find(l => l.slug === lessonSlug.value || l.path.endsWith(lessonSlug.value));
      if (match) {
        foundTitle = match.title;
        foundModuleTitle = mod.title;
        foundOrder = mod.order;
        break;
      }
    }

    lesson.value = generateRichLessonData(lessonSlug.value, foundTitle, foundModuleTitle, foundOrder);
  }
}

function toggleBookmark() {
  isBookmarked.value = !isBookmarked.value;
}

function answerQuiz(qIdx: number, oIdx: number) {
  if (userAnswers.value[qIdx] !== undefined) return;
  userAnswers.value[qIdx] = oIdx;
  if (lesson.value?.quiz && lesson.value.quiz[qIdx]?.correct === oIdx) {
    quizScore.value++;
    progressStore.addXp(10);
  }
}

function completeLesson() {
  progressStore.toggleLessonComplete(route.path);
}

function navigateToLesson(path: string) {
  router.push(path);
}

const renderedContent = computed(() => {
  if (!lesson.value?.content) return '';
  const text = lesson.value.content;

  return text
    .replace(/^### (.*$)/gim, '<h3 class="text-base sm:text-lg font-bold text-white mt-6 mb-2 flex items-center gap-2"><span class="text-brand-400">#</span> $1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-lg sm:text-xl font-bold text-white mt-8 mb-3 pb-2 border-b border-surface-800/80">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-xl sm:text-2xl font-extrabold text-white mt-4 mb-4">$1</h1>')
    .replace(/```([a-z]*)\n([\s\S]*?)```/gim, '<pre class="p-4 rounded-2xl bg-surface-950 border border-surface-800 font-mono text-xs text-cyan-300 overflow-x-auto my-4 shadow-inner"><code>$2</code></pre>')
    .replace(/`([^`]+)`/gim, '<code class="px-1.5 py-0.5 rounded-lg bg-surface-900 border border-surface-800 font-mono text-xs text-brand-300">$1</code>')
    .replace(/\n\n/gim, '<p class="my-3 text-surface-300 text-xs sm:text-sm leading-relaxed"></p>');
});

onMounted(() => {
  fetchLesson();
});

watch(lessonSlug, () => {
  fetchLesson();
});
</script>
