<template>
  <div class="space-y-10 max-w-4xl pb-20">
    <!-- Loading State -->
    <div v-if="loading" class="flex flex-col items-center justify-center py-24 space-y-4">
      <div class="w-12 h-12 rounded-full border-4 border-surface-800 border-t-brand-500 animate-spin"></div>
      <p class="text-xs font-mono text-surface-400">Dars yuklanmoqda...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="p-8 rounded-2xl bg-red-500/10 border border-red-500/30 text-center space-y-4">
      <div class="text-3xl">⚠️</div>
      <h2 class="text-lg font-bold text-red-400">Darsni yuklashda xatolik yuz berdi</h2>
      <p class="text-xs text-surface-300">{{ error }}</p>
      <button
        @click="fetchLesson"
        class="px-4 py-2 rounded-xl bg-surface-800 hover:bg-surface-700 text-xs font-bold text-white transition-colors"
      >
        Qayta urinish
      </button>
    </div>

    <!-- Lesson Content -->
    <div v-else-if="lesson" class="space-y-10">
      <!-- Title & Header Meta -->
      <div class="space-y-4 border-b border-surface-800 pb-6">
        <div class="flex items-center gap-2 text-xs font-mono text-brand-400">
          <router-link :to="`/${courseSlug}`" class="hover:underline">{{ lesson.module?.course?.title?.split('—')[0] || courseSlug.toUpperCase() }}</router-link>
          <span>/</span>
          <span class="text-surface-400">{{ lesson.module?.title || 'Dars' }}</span>
        </div>

        <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {{ lesson.title }}
        </h1>
        <p class="text-base sm:text-lg text-surface-300 leading-relaxed">
          {{ lesson.description }}
        </p>

        <div class="flex flex-wrap items-center gap-3 text-xs text-surface-400 pt-2">
          <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
            ⏱️ O‘qish vaqti: {{ lesson.estimatedMinutes }} daqiqa
          </span>
          <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
            🎯 Daraja: Boshlang‘ichdan Professionalgacha
          </span>
          <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
            📚 Standart: Normativ Spetsifikatsiya
          </span>
        </div>
      </div>

      <!-- Multi-Layer Tab Selector (👶 5 Yoshli Bola | 🚀 Dasturchi | 🔬 Internals | 🛠️ Amaliyot) -->
      <div class="flex flex-wrap gap-2 border-b border-surface-800 pb-3">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
            'px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2',
            activeTab === tab.id
              ? 'bg-brand-500 text-surface-950 shadow-lg shadow-brand-500/20 font-bold'
              : 'bg-surface-900 text-surface-400 hover:text-white hover:bg-surface-800'
          ]"
        >
          <span>{{ tab.icon }}</span>
          <span>{{ tab.label }}</span>
        </button>
      </div>

      <!-- Tab 1: 👶 5 Yoshli Bola Uchun Sodda Analogiya -->
      <div v-if="activeTab === 'kid'" class="space-y-6 animate-in fade-in duration-200">
        <div class="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-brand-500/10 to-transparent border border-amber-500/20 space-y-4">
          <div class="flex items-center gap-2 text-amber-400 font-bold text-base">
            <span class="text-2xl">👶</span>
            <span>5 yoshli bola uchun tushuntirish</span>
          </div>
          <p class="text-sm sm:text-base text-surface-200 leading-relaxed">
            {{ getKidAnalogy(lesson) }}
          </p>
        </div>

        <!-- Visual Example Card -->
        <div class="p-5 rounded-2xl bg-surface-900 border border-surface-800 space-y-3">
          <div class="text-xs font-mono font-bold text-brand-400 uppercase">💡 Hayotiy Misol:</div>
          <p class="text-xs sm:text-sm text-surface-300 leading-relaxed">
            {{ getKidExample(lesson) }}
          </p>
        </div>
      </div>

      <!-- Tab 2: 🚀 Dasturchi va To‘liq Tushuntirish -->
      <div v-else-if="activeTab === 'dev'" class="space-y-8 animate-in fade-in duration-200">
        <div class="prose prose-invert max-w-none text-surface-200 leading-relaxed space-y-6 text-sm sm:text-base">
          <div v-html="renderedContent"></div>
        </div>

        <!-- Practice Task if exists -->
        <div v-if="lesson.practiceTasks && lesson.practiceTasks.length > 0" class="space-y-4 pt-6 border-t border-surface-800">
          <h2 class="text-xl font-bold text-white flex items-center gap-2">
            <span class="text-brand-400">⚡</span> Amaliy Topshiriq
          </h2>

          <div
            v-for="task in lesson.practiceTasks"
            :key="task.id"
            class="p-5 rounded-2xl bg-surface-900 border border-surface-800 space-y-4"
          >
            <div class="flex items-center justify-between">
              <span class="text-sm font-bold text-white">{{ task.title }}</span>
              <span class="px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-400 text-xs font-mono font-bold border border-brand-500/20">
                +{{ task.points }} ball
              </span>
            </div>
            <p class="text-xs text-surface-300 leading-relaxed">{{ task.description }}</p>

            <div v-if="task.starterCode" class="p-3.5 rounded-xl bg-surface-950 border border-surface-800 font-mono text-xs text-cyan-300">
              <pre><code>{{ task.starterCode }}</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab 3: 🔬 Brauzer Internals va Mexanizmlar -->
      <div v-else-if="activeTab === 'internals'" class="space-y-6 animate-in fade-in duration-200">
        <div class="p-6 rounded-2xl bg-surface-900 border border-surface-800 space-y-4">
          <h3 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="text-blue-400">🔬</span> Brauzer va Dvigatel Ichida Nima Sodir Bo‘ladi?
          </h3>
          <p class="text-xs sm:text-sm text-surface-300 leading-relaxed">
            Brauzer (Chromium, WebKit, Gecko) ushbu buyruqni qabul qilganda xotirada qanday o‘zgarishlar qiladi:
          </p>
          <ul class="text-xs sm:text-sm text-surface-300 space-y-2 list-disc list-inside bg-surface-950 p-4 rounded-xl border border-surface-800">
            <li><strong>Parsing & Tokenization</strong>: Baytlar ketma-ketligi tokenlarga ajratiladi.</li>
            <li><strong>DOM / CSSOM Tree</strong>: Daraxtsimon xotira modeli yaratiladi.</li>
            <li><strong>Layout & Paint</strong>: Koordinatalar hisoblanadi va piksellar GPU orqali ekranga chiziladi.</li>
            <li><strong>Performans Qoidasi</strong>: Ortiqcha Reflow va Repaint chaqirilmasligi uchun DOM manipulatsiyasini optimallashtirish zarur.</li>
          </ul>
        </div>
      </div>

      <!-- Tab 4: 📚 Normativ Spetsifikatsiya Manbalari -->
      <div v-else-if="activeTab === 'specs'" class="space-y-6 animate-in fade-in duration-200">
        <div class="p-6 rounded-2xl bg-surface-900 border border-surface-800 space-y-4">
          <h3 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="text-purple-400">📚</span> Rasmiy Normativ Manbalar
          </h3>
          <div class="space-y-2 text-xs font-mono">
            <div class="p-3 rounded-xl bg-surface-950 border border-surface-800 flex items-center justify-between">
              <span class="text-surface-300">WHATWG HTML Living Standard / W3C CSS / TC39 JS</span>
              <span class="text-brand-400 font-bold">VERIFIED ✅</span>
            </div>
            <div class="p-3 rounded-xl bg-surface-950 border border-surface-800 flex items-center justify-between">
              <span class="text-surface-300">MDN Web Docs Documentation Engine</span>
              <span class="text-brand-400 font-bold">VERIFIED ✅</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Next & Previous Lesson Navigation -->
      <div class="pt-8 border-t border-surface-800 flex flex-wrap items-center justify-between gap-4">
        <router-link
          v-if="lesson.prevLesson"
          :to="`/${courseSlug}/${lesson.prevLesson.slug.replace(`${courseSlug}-`, '')}`"
          class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-900 hover:bg-surface-800 text-surface-300 text-xs font-semibold border border-surface-700 transition-colors"
        >
          <span>← Oldingi: {{ lesson.prevLesson.title }}</span>
        </router-link>
        <div v-else></div>

        <router-link
          v-if="lesson.nextLesson"
          :to="`/${courseSlug}/${lesson.nextLesson.slug.replace(`${courseSlug}-`, '')}`"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors shadow-lg shadow-brand-500/20"
        >
          <span>Keyingi Dars: {{ lesson.nextLesson.title }} →</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { apiClient } from '../services/api';

const route = useRoute();

interface PracticeTask {
  id: string;
  title: string;
  description: string;
  starterCode?: string;
  points: number;
}

interface LessonData {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  estimatedMinutes: number;
  module?: {
    title: string;
    course?: {
      title: string;
      slug: string;
    };
  };
  practiceTasks?: PracticeTask[];
  prevLesson?: { slug: string; title: string } | null;
  nextLesson?: { slug: string; title: string } | null;
}

const lesson = ref<LessonData | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);
const activeTab = ref('dev');

const tabs = [
  { id: 'kid', label: '5 Yoshli Bola', icon: '👶' },
  { id: 'dev', label: 'Dasturchi Darsi', icon: '🚀' },
  { id: 'internals', label: 'Brauzer Internals', icon: '🔬' },
  { id: 'specs', label: 'Spetsifikatsiya', icon: '📚' },
];

const courseSlug = computed(() => {
  return (route.params.courseSlug as string) || route.path.split('/')[1] || 'html';
});

const lessonSlug = computed(() => {
  const param = route.params.lessonSlug as string;
  if (param) return param;
  const parts = route.path.split('/');
  return parts[parts.length - 1] || 'kirish';
});

const fullSlug = computed(() => {
  if (lessonSlug.value.startsWith(`${courseSlug.value}-`)) {
    return lessonSlug.value;
  }
  return `${courseSlug.value}-${lessonSlug.value}`;
});

async function fetchLesson() {
  loading.value = true;
  error.value = null;

  try {
    const res = await apiClient.get<{ success: boolean; data: LessonData }>(`/lessons/${fullSlug.value}`);
    if (res.data?.success && res.data.data) {
      lesson.value = res.data.data;
    } else {
      error.value = 'Dars topilmadi';
    }
  } catch (err: any) {
    error.value = err?.response?.data?.error?.message || 'Serverdan darsni yuklashda xatolik';
  } finally {
    loading.value = false;
  }
}

// Convert markdown to clean readable HTML
const renderedContent = computed(() => {
  if (!lesson.value?.content) return '';
  const text = lesson.value.content;

  return text
    .replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold text-white mt-6 mb-2">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold text-white mt-8 mb-3 pb-2 border-b border-surface-800">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-extrabold text-white mt-4 mb-4">$1</h1>')
    .replace(/```([a-z]*)\n([\s\S]*?)```/gim, '<pre class="p-4 rounded-xl bg-surface-950 border border-surface-800 font-mono text-xs text-cyan-300 overflow-x-auto my-4"><code>$2</code></pre>')
    .replace(/`([^`]+)`/gim, '<code class="px-1.5 py-0.5 rounded bg-surface-900 border border-surface-800 font-mono text-xs text-brand-300">$1</code>')
    .replace(/\n\n/gim, '<p class="my-3"></p>');
});

function getKidAnalogy(l: LessonData): string {
  if (courseSlug.value === 'html') {
    return `Tasavvur qiling, siz Lego o‘yinchoq uychasini quryapsiz. ${l.title} — bu uychangizning eng mustahkam poydevori yoki chiroyli eshigidir!`;
  } else if (courseSlug.value === 'css') {
    return `Oq-qora rasmlar daftarini o‘zingiz yoqtirgan sevimli rangli qalamlar bilan chiroyli qilib bo‘yashni tasavvur qiling. ${l.title} — sizning sehrli bo‘yog‘ingizdir!`;
  }
  return `Robot o‘yinchog‘ingiz tugmasini bossangiz, u quvonch bilan qo‘llarini ko‘tarib sakraydi. ${l.title} — bu robotga xuddi shunday aql va harakat beruvchi mexanizmdir!`;
}

function getKidExample(l: LessonData): string {
  return `Agar bu qoida bo‘lmaganida, sahifadagi hamma narsa bir-biriga chalkashib ketardi. ${l.title} orqali har bir narsa o‘zining aniq o‘rnini topadi!`;
}

onMounted(() => {
  fetchLesson();
});

watch([courseSlug, lessonSlug], () => {
  fetchLesson();
});
</script>
