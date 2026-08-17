<template>
  <div class="space-y-10 max-w-4xl pb-20 text-left">
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
        class="px-4 py-2 rounded-xl bg-surface-800 hover:bg-surface-700 text-xs font-bold text-white transition-colors cursor-pointer"
      >
        Qayta urinish
      </button>
    </div>

    <!-- Lesson Content -->
    <div v-else-if="lesson" class="space-y-10">
      <!-- Title & Header Meta -->
      <div class="space-y-4 border-b border-surface-800 pb-6">
        <div class="flex items-center gap-2 text-xs font-mono text-brand-400">
          <router-link :to="`/${courseSlug}`" class="hover:underline">{{ courseSlug.toUpperCase() }} ASOSLARI</router-link>
          <span>/</span>
          <span class="text-surface-400">{{ lesson.moduleTitle }}</span>
        </div>

        <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {{ lesson.title }}
        </h1>
        <p class="text-base sm:text-lg text-surface-300 leading-relaxed font-normal">
          {{ lesson.description }}
        </p>

        <!-- Premium Metadata Badges -->
        <div class="flex flex-wrap items-center gap-3 text-xs text-surface-400 pt-2 font-mono">
          <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
            <svg class="w-3.5 h-3.5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            O‘qish vaqti: {{ lesson.estimatedMinutes }} daqiqa
          </span>
          <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
            <svg class="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Standart: {{ lesson.spec || 'WHATWG Living Standard' }}
          </span>
          <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
            <svg class="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Blink / V8 Dvigatel Injiniringi
          </span>
        </div>
      </div>

      <!-- Multi-Layer Tab Selector -->
      <div class="flex flex-wrap gap-2 border-b border-surface-800 pb-3">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer"
          :class="[
            activeTab === tab.id
              ? 'bg-brand-500 text-surface-950 shadow-lg shadow-brand-500/20 font-bold'
              : 'bg-surface-900 text-surface-400 hover:text-white hover:bg-surface-800'
          ]"
        >
          <span>{{ tab.icon }}</span>
          <span>{{ tab.label }}</span>
        </button>
      </div>

      <!-- Tab 1: 👶 5 Yoshli Bola Uchun Sodda Analogiya + C++ Under-the-hood -->
      <div v-if="activeTab === 'kid'" class="space-y-6 animate-in fade-in duration-200">
        <div class="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-brand-500/10 to-transparent border border-amber-500/20 space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 text-amber-400 font-bold text-base">
              <span class="text-2xl">👶</span>
              <span>5 yoshli bola uchun tushuntirish</span>
            </div>
            <button
              @click="showKidUnderTheHood = !showKidUnderTheHood"
              class="px-2.5 py-1 rounded-lg bg-surface-800 hover:bg-surface-700 text-[11px] font-mono text-brand-400 border border-brand-500/30 transition-all cursor-pointer"
            >
              {{ showKidUnderTheHood ? 'Analogiyaga qaytish' : '🔬 Ostidagi Kodni Ko‘rish' }}
            </button>
          </div>

          <p v-if="!showKidUnderTheHood" class="text-sm sm:text-base text-surface-200 leading-relaxed">
            {{ lesson.kidAnalogy }}
          </p>

          <div v-else class="space-y-2 font-mono text-xs text-left">
            <div class="text-cyan-300 font-bold">Brauzer va Dvigatel C++ Arxitekturasi:</div>
            <pre class="p-3.5 rounded-xl bg-surface-950 border border-surface-800 text-cyan-300 text-[11px] leading-relaxed overflow-x-auto"><code>{{ lesson.cppInternalCode }}</code></pre>
          </div>
        </div>
      </div>

      <!-- Tab 2: 🚀 Dasturchi Darsi (Normativ Nazariya) -->
      <div v-else-if="activeTab === 'dev'" class="space-y-6 animate-in fade-in duration-200">
        <div class="prose prose-invert max-w-none text-surface-200 text-sm sm:text-base leading-relaxed space-y-4" v-html="renderedContent"></div>

        <!-- Code Playground Inside Lesson -->
        <div class="space-y-3 pt-6 border-t border-surface-800">
          <h3 class="text-lg font-bold text-white flex items-center gap-2">
            <span>⚡</span> Jonli Kodlash Maydoni (Sandbox)
          </h3>
          <InteractiveCodePlayground />
        </div>
      </div>

      <!-- Tab 3: 🔬 Brauzer Internals (C++) -->
      <div v-else-if="activeTab === 'internals'" class="space-y-6 animate-in fade-in duration-200">
        <BrowserInternalsDeepDive />
      </div>

      <!-- Tab 4: 🎬 Video Simulyator -->
      <div v-else-if="activeTab === 'video'" class="space-y-6 animate-in fade-in duration-200">
        <div class="space-y-3">
          <h3 class="text-lg font-bold text-white">Brauzer Render Pipeline Simulyatori</h3>
          <InteractiveEngineVisualizer />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { html25ModulesData, type ComprehensiveLesson } from '../data/htmlModulesData';
import InteractiveEngineVisualizer from '../components/InteractiveEngineVisualizer.vue';
import InteractiveCodePlayground from '../components/InteractiveCodePlayground.vue';
import BrowserInternalsDeepDive from '../components/BrowserInternalsDeepDive.vue';

const route = useRoute();

const lesson = ref<ComprehensiveLesson | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);
const activeTab = ref('dev');
const showKidUnderTheHood = ref(false);

const tabs = [
  { id: 'kid', label: '5 Yoshli Bola', icon: '👶' },
  { id: 'dev', label: 'Dasturchi Darsi', icon: '🚀' },
  { id: 'internals', label: 'Brauzer Internals (C++)', icon: '🔬' },
  { id: 'video', label: 'Video Simulyator', icon: '🎬' },
];

const courseSlug = computed(() => {
  return (route.params.courseSlug as string) || route.path.split('/')[1] || 'html';
});

const lessonSlug = computed(() => {
  const param = route.params.lessonSlug as string;
  if (param) return param;
  const parts = route.path.split('/');
  return parts[parts.length - 1] || 'html-tarixi';
});

function fetchLesson() {
  loading.value = true;
  error.value = null;

  const found = html25ModulesData[lessonSlug.value];
  if (found) {
    lesson.value = found;
  } else {
    // Generate intelligent default
    lesson.value = {
      id: 'custom',
      slug: lessonSlug.value,
      title: `${lessonSlug.value.replace(/-/g, ' ').toUpperCase()} Injiniring Darsi`,
      moduleTitle: 'HTML Knowledge Universe',
      moduleOrder: 1,
      description: 'WHATWG va W3C xalqaro standartlari bo‘yicha chuqur muhandislik qo‘llanmasi.',
      estimatedMinutes: 7,
      spec: 'WHATWG HTML Living Standard',
      kidAnalogy: 'Har bir detalning o‘z o‘rni va qoidasi bor, xuddi qiziqarli o‘yindek!',
      cppInternalCode: '// Blink DOM Parsing & Layout\nblink::HTMLDocumentParser::Parse();',
      content: `## 🚀 Darsning Asosiy Nazariyasi\n\nUshbu mavzu zamonaviy veb standartlari va brauzer arxitekturasining ajralmas qismidir.\n\n### 🔬 Muhim Qoidalar\nHar doim xotira boshqaruvi, semantika va qulaylikni (A11y) hisobga oling.`,
      codeExample: `<!DOCTYPE html>\n<html lang="uz">\n  <body>\n    <h1>KODX HTML Universe</h1>\n  </body>\n</html>`,
    };
  }

  loading.value = false;
}

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

onMounted(() => {
  fetchLesson();
});

watch([courseSlug, lessonSlug], () => {
  fetchLesson();
});
</script>
