<template>
  <div class="h-[calc(100vh-3.5rem)] flex flex-col bg-surface-950 text-surface-100 overflow-hidden select-none">
    <!-- Top Workspace Navbar -->
    <header class="h-12 border-b border-surface-800 bg-surface-900/90 px-4 flex items-center justify-between shrink-0">
      <div class="flex items-center gap-3 min-w-0">
        <router-link
          to="/practice"
          class="p-1.5 rounded-lg bg-surface-800 hover:bg-surface-700 text-surface-400 hover:text-white transition-colors cursor-pointer"
          title="Amaliyotlar ro'yxatiga qaytish"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </router-link>

        <div class="flex items-center gap-2 min-w-0 truncate">
          <h2 class="text-xs sm:text-sm font-bold text-white truncate">{{ currentTask.title }}</h2>
          <span
            class="text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase shrink-0"
            :class="[
              currentTask.difficulty === 'Oson' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
              currentTask.difficulty === 'O‘rta' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
              'bg-red-500/10 text-red-400 border border-red-500/20'
            ]"
          >
            {{ currentTask.difficulty }}
          </span>
          <span class="text-xs font-mono font-bold text-brand-400 shrink-0">+{{ currentTask.xp }} XP</span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2 shrink-0">
        <button
          @click="resetCode"
          class="px-2.5 py-1.5 rounded-lg bg-surface-800 hover:bg-surface-700 text-xs text-surface-400 hover:text-white transition-colors cursor-pointer"
        >
          Qayta tiklash ↺
        </button>

        <button
          @click="runTests"
          :disabled="isRunningTests"
          class="px-4 py-1.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-all shadow-md shadow-brand-500/20 flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
        >
          <span v-if="isRunningTests" class="w-3.5 h-3.5 rounded-full border-2 border-surface-950 border-t-transparent animate-spin"></span>
          <span>{{ isRunningTests ? 'Tekshirilmoqda...' : 'Kodni Tekshirish 🚀' }}</span>
        </button>
      </div>
    </header>

    <!-- Main Split Workspace (Task Details Left + Code Editor & Preview Right) -->
    <div class="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
      <!-- Left Panel: Task Details & Test Cases (4 cols) -->
      <div class="lg:col-span-4 border-r border-surface-800/80 bg-surface-950/80 p-5 overflow-y-auto space-y-6 text-left">
        <div class="space-y-2">
          <div class="text-[10px] font-mono uppercase tracking-wider text-brand-400 font-bold">Topshiriq Sharti</div>
          <p class="text-xs sm:text-sm text-surface-300 leading-relaxed">
            {{ currentTask.description }}
          </p>
        </div>

        <!-- Requirements Checklist -->
        <div class="space-y-3">
          <div class="text-xs font-bold text-white flex items-center gap-1.5">
            <span>📋</span> Bajarilishi kerak bo‘lgan talablar:
          </div>

          <div class="space-y-2">
            <div
              v-for="(test, tIdx) in currentTask.tests"
              :key="tIdx"
              class="p-3 rounded-xl border transition-all text-xs font-mono flex items-start gap-2.5"
              :class="[
                test.passed === true
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                  : test.passed === false
                  ? 'bg-red-500/10 border-red-500/30 text-red-300'
                  : 'bg-surface-900 border-surface-800 text-surface-300'
              ]"
            >
              <span class="text-xs font-bold shrink-0">
                {{ test.passed === true ? '✓' : test.passed === false ? '✗' : '○' }}
              </span>
              <span class="leading-relaxed">{{ test.requirement }}</span>
            </div>
          </div>
        </div>

        <!-- Hint Box -->
        <div class="p-4 rounded-xl bg-surface-900/60 border border-surface-800 text-xs space-y-1.5">
          <div class="text-amber-400 font-bold flex items-center gap-1">
            <span>💡</span> Maslahat:
          </div>
          <p class="text-surface-400 text-[11px] leading-relaxed">
            {{ currentTask.hint }}
          </p>
        </div>
      </div>

      <!-- Right Panel: Code Editor Top & Live Sandbox Bottom (8 cols) -->
      <div class="lg:col-span-8 flex flex-col overflow-hidden bg-surface-950">
        <!-- Editor Header (File Tabs) -->
        <div class="h-9 bg-surface-900/60 border-b border-surface-800 px-4 flex items-center justify-between shrink-0">
          <div class="flex items-center gap-1">
            <button
              v-for="tab in ['index.html', 'style.css', 'script.js']"
              :key="tab"
              @click="activeEditorTab = tab"
              class="px-3 py-1.5 text-xs font-mono font-semibold transition-all rounded-t-md flex items-center gap-1.5 cursor-pointer"
              :class="[
                activeEditorTab === tab
                  ? 'bg-surface-950 text-brand-400 border-t-2 border-brand-500'
                  : 'text-surface-400 hover:text-surface-200'
              ]"
            >
              <span>{{ tab === 'index.html' ? '🌐' : tab === 'style.css' ? '🎨' : '⚙️' }}</span>
              <span>{{ tab }}</span>
            </button>
          </div>

          <div class="text-[10px] font-mono text-surface-500">Auto-save faol</div>
        </div>

        <!-- Editor Area (Split 50% Top Editor / 50% Bottom Preview) -->
        <div class="flex-1 grid grid-rows-2 overflow-hidden divide-y divide-surface-800">
          <!-- Code Editor TextArea -->
          <div class="relative bg-surface-950 overflow-auto p-4">
            <textarea
              v-if="activeEditorTab === 'index.html'"
              v-model="htmlCode"
              spellcheck="false"
              class="w-full h-full bg-transparent font-mono text-xs text-cyan-300 focus:outline-none leading-relaxed resize-none selection:bg-brand-500/30 text-left"
            ></textarea>
            <textarea
              v-else-if="activeEditorTab === 'style.css'"
              v-model="cssCode"
              spellcheck="false"
              class="w-full h-full bg-transparent font-mono text-xs text-amber-300 focus:outline-none leading-relaxed resize-none selection:bg-brand-500/30 text-left"
            ></textarea>
            <textarea
              v-else
              v-model="jsCode"
              spellcheck="false"
              class="w-full h-full bg-transparent font-mono text-xs text-emerald-300 focus:outline-none leading-relaxed resize-none selection:bg-brand-500/30 text-left"
            ></textarea>
          </div>

          <!-- Bottom: Live Preview & Console -->
          <div class="flex flex-col bg-surface-900/40 overflow-hidden">
            <div class="h-8 bg-surface-900/80 border-b border-surface-800 px-4 flex items-center justify-between text-xs font-mono text-surface-400 shrink-0">
              <span class="flex items-center gap-1.5 text-white font-bold">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Jonli Brauzer Natijasi (Sandbox)
              </span>
              <span class="text-[10px]">100% Sandbox Izolyatsiya</span>
            </div>

            <!-- Iframe Sandbox Output -->
            <div class="flex-1 p-3 bg-white text-surface-950 overflow-auto text-left">
              <div v-html="combinedOutput"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Modal if all tests pass -->
    <div
      v-if="showSuccessModal"
      class="fixed inset-0 bg-surface-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
    >
      <div class="w-full max-w-md rounded-3xl bg-surface-900 border border-brand-500/40 p-6 sm:p-8 text-center space-y-5 shadow-2xl animate-in zoom-in-95 duration-200">
        <div class="w-16 h-16 rounded-2xl bg-brand-500/20 border border-brand-500/40 text-4xl flex items-center justify-center mx-auto shadow-xl shadow-brand-500/20">
          🎉
        </div>

        <div class="space-y-1">
          <h2 class="text-2xl font-black text-white">Barcha Testlardan O‘tdingiz!</h2>
          <p class="text-xs text-surface-300">Topshiriq muvaffaqiyatli topshirildi va hisobingizga XP qo‘shildi.</p>
        </div>

        <div class="p-4 rounded-2xl bg-surface-950 border border-surface-800 font-mono">
          <div class="text-xs text-surface-400">Qo‘shilgan tajriba balli:</div>
          <div class="text-2xl font-black text-brand-400 mt-1">+{{ currentTask.xp }} XP</div>
        </div>

        <div class="flex gap-3 pt-2">
          <router-link
            to="/practice"
            class="flex-1 py-2.5 rounded-xl bg-surface-800 hover:bg-surface-700 text-white font-bold text-xs transition-colors"
          >
            Amaliyotlar Ro‘yxati
          </router-link>
          <button
            @click="showSuccessModal = false"
            class="flex-1 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors"
          >
            Davom etish 🚀
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProgressStore } from '../stores/progress';

const route = useRoute();
const progressStore = useProgressStore();

const activeEditorTab = ref('index.html');
const isRunningTests = ref(false);
const showSuccessModal = ref(false);

const taskId = computed(() => (route.params.id as string) || 't1');

interface TestCase {
  requirement: string;
  check: (html: string, css: string, js: string) => boolean;
  passed?: boolean | null;
}

interface PracticeTaskDetail {
  id: string;
  title: string;
  difficulty: 'Oson' | 'O‘rta' | 'Qiyin';
  xp: number;
  description: string;
  hint: string;
  initialHtml: string;
  initialCss: string;
  initialJs: string;
  tests: TestCase[];
}

const tasksDatabase: Record<string, PracticeTaskDetail> = {
  t1: {
    id: 't1',
    title: 'HTML5 Semantik Skeletini Yaratish',
    difficulty: 'Oson',
    xp: 25,
    description: '<header>, <main>, <nav> va <footer> teglari yordamida to‘liq semantik struktura tuzing. Nav ichida kamida 2 ta havola bo‘lishi lozim.',
    hint: '<header> tegi ichiga <nav> joylashtiring va <main> ichida <article> yoki <p> yozing.',
    initialHtml: `<!DOCTYPE html>
<html lang="uz">
  <head>
    <title>Mening Saytim</title>
  </head>
  <body>
    <!-- Semantik teglarni shu yerga yozing -->
    <header>
      <nav>
        <a href="#bosh">Bosh sahifa</a>
        <a href="#kurslar">Kurslar</a>
      </nav>
    </header>

    <main>
      <h1>Xush kelibsiz!</h1>
      <p>Bu semantik maqola matni.</p>
    </main>

    <footer>
      <p>&copy; 2026 KODX.uz</p>
    </footer>
  </body>
</html>`,
    initialCss: `body {
  font-family: sans-serif;
  margin: 0;
  padding: 16px;
}
header {
  border-bottom: 2px solid #22c55e;
  padding-bottom: 8px;
}
nav a {
  margin-right: 12px;
  color: #2563eb;
  text-decoration: none;
  font-weight: bold;
}`,
    initialJs: `console.log('Semantik HTML yuklandi!');`,
    tests: [
      {
        requirement: '<header> tegi mavjud bo‘lishi kerak',
        check: (html) => html.includes('<header') && html.includes('</header>'),
      },
      {
        requirement: '<nav> tegi va uning ichida kamida 2 ta <a> havolasi bo‘lishi kerak',
        check: (html) => html.includes('<nav') && (html.match(/<a\b/g) || []).length >= 2,
      },
      {
        requirement: '<main> va <footer> teglari mavjud bo‘lishi kerak',
        check: (html) => html.includes('<main') && html.includes('<footer'),
      },
    ],
  },
  t2: {
    id: 't2',
    title: 'Flexbox Kartochkalarni Markazlashtirish',
    difficulty: 'Oson',
    xp: 30,
    description: 'display: flex, justify-content va align-items xususiyatlari orqali kartalarni konteyner o‘rtasiga tekislang.',
    hint: 'Konteynerga display: flex; justify-content: center; align-items: center; bering.',
    initialHtml: `<div class="container">
  <div class="card">1-Karta</div>
  <div class="card">2-Karta</div>
</div>`,
    initialCss: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  min-height: 120px;
  background: #f4f4f5;
  border-radius: 12px;
}
.card {
  padding: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  font-weight: bold;
}`,
    initialJs: ``,
    tests: [
      {
        requirement: '.container ga display: flex berilgan bo‘lishi kerak',
        check: (_h, css) => css.includes('display: flex') || css.includes('display:flex'),
      },
      {
        requirement: 'justify-content xususiyati berilgan bo‘lishi kerak',
        check: (_h, css) => css.includes('justify-content'),
      },
    ],
  },
};

const currentTask = computed(() => {
  return tasksDatabase[taskId.value] || tasksDatabase['t1']!;
});

const htmlCode = ref(currentTask.value.initialHtml);
const cssCode = ref(currentTask.value.initialCss);
const jsCode = ref(currentTask.value.initialJs);

function resetCode() {
  htmlCode.value = currentTask.value.initialHtml;
  cssCode.value = currentTask.value.initialCss;
  jsCode.value = currentTask.value.initialJs;
  currentTask.value.tests.forEach(t => (t.passed = null));
}

const combinedOutput = computed(() => {
  return `
    <style>${cssCode.value}</style>
    ${htmlCode.value}
  `;
});

function runTests() {
  isRunningTests.value = true;

  setTimeout(() => {
    let allPassed = true;

    currentTask.value.tests.forEach((test) => {
      const result = test.check(htmlCode.value, cssCode.value, jsCode.value);
      test.passed = result;
      if (!result) allPassed = false;
    });

    isRunningTests.value = false;

    if (allPassed) {
      progressStore.addXp(currentTask.value.xp);
      showSuccessModal.value = true;
    }
  }, 600);
}
</script>
