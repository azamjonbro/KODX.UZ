<template>
  <div class="space-y-8 max-w-5xl mx-auto pb-16 text-left">
    <!-- Header -->
    <div class="space-y-3">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono">
        <span>🎯</span> KUNLIK BELLASHUVLAR
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        Dasturlash Challenges & Tezkor Viktorinalar
      </h1>
      <p class="text-sm sm:text-base text-surface-400 leading-relaxed max-w-3xl">
        Boshqalar bilan raqobatlashing, bilimingizni tezkor testlar orqali sinang va XP ko‘paytiruvchi yutuqlarga ega bo‘ling!
      </p>
    </div>

    <!-- Featured Daily Challenge Hero Card -->
    <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-950/80 via-surface-900 to-surface-900 border border-brand-500/30 space-y-5 shadow-2xl relative overflow-hidden">
      <div class="absolute -right-10 -bottom-10 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="flex flex-wrap items-center justify-between gap-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 font-mono text-xs font-bold border border-amber-500/20 flex items-center gap-1">
            <span>🔥</span> KUNNING ASOSIY CHALLENGE'I
          </span>
          <span class="text-xs text-surface-400 font-mono">Bugungi Maxsus Viktorina</span>
        </div>
        <span class="text-sm font-mono font-bold text-brand-400">+50 XP & Bonus</span>
      </div>

      <div class="space-y-2">
        <h2 class="text-2xl font-bold text-white">Full-Stack HTML5, CSS & V8 Tezkor Test Bellashuvi</h2>
        <p class="text-xs sm:text-sm text-surface-300 max-w-2xl leading-relaxed">
          5 ta tezkor savol orqali bilimingizni sinang: DOM, Specificity, Event Loop va Top Layer modallari bo‘yicha to‘g‘ri javoblarni belgilang.
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-3 pt-2">
        <button
          @click="startQuiz"
          class="px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-all shadow-lg shadow-brand-500/20 cursor-pointer flex items-center gap-2"
        >
          <span>Viktorinani Boshlash 🚀</span>
        </button>
        <span class="text-xs text-surface-400 font-mono">Bugun 248 ta dasturchi ishtirok etdi</span>
      </div>
    </div>

    <!-- Active Mini Challenges Grid -->
    <div class="space-y-4">
      <h3 class="text-lg font-bold text-white">Boshqa faol amaliy topshiriqlar</h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="ch in miniChallenges"
          :key="ch.id"
          class="p-5 rounded-2xl bg-surface-900/60 border border-surface-800 space-y-3 flex flex-col justify-between"
        >
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-lg">{{ ch.icon }}</span>
              <span class="text-xs font-mono font-bold text-brand-400">+{{ ch.xp }} XP</span>
            </div>
            <h4 class="text-sm font-bold text-white">{{ ch.title }}</h4>
            <p class="text-xs text-surface-400 leading-relaxed">{{ ch.desc }}</p>
          </div>

          <div class="pt-2 border-t border-surface-800/80 flex items-center justify-between text-xs">
            <span class="text-[11px] font-mono text-surface-500">{{ ch.time }}</span>
            <router-link :to="ch.link" class="text-brand-400 hover:underline font-bold">
              Yechish →
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Interactive Speed Quiz Modal Arena -->
    <div
      v-if="showQuizModal"
      class="fixed inset-0 bg-surface-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
    >
      <div class="w-full max-w-xl rounded-3xl bg-surface-900 border border-surface-800 p-6 sm:p-8 space-y-6 shadow-2xl animate-in zoom-in-95 duration-150">
        <!-- Top Bar -->
        <div class="flex items-center justify-between border-b border-surface-800 pb-4">
          <div class="flex items-center gap-2">
            <span class="text-xs font-mono font-bold text-brand-400">
              Savol {{ currentQuestionIndex + 1 }} / {{ quizQuestions.length }}
            </span>
          </div>

          <button
            @click="showQuizModal = false"
            class="text-surface-400 hover:text-white p-1 rounded-lg hover:bg-surface-800 transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        <!-- Question View -->
        <div v-if="!quizFinished" class="space-y-5">
          <h3 class="text-base sm:text-lg font-bold text-white leading-relaxed">
            {{ currentQuestion.question }}
          </h3>

          <!-- Options -->
          <div class="space-y-2.5">
            <button
              v-for="(opt, oIdx) in currentQuestion.options"
              :key="oIdx"
              @click="selectOption(oIdx)"
              :disabled="selectedOption !== null"
              class="w-full p-4 rounded-xl text-xs font-mono text-left transition-all border cursor-pointer flex items-center justify-between"
              :class="[
                selectedOption === null
                  ? 'bg-surface-950 border-surface-800 hover:border-brand-500/50 text-surface-200'
                  : oIdx === currentQuestion.correct
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                  : selectedOption === oIdx
                  ? 'bg-red-500/20 border-red-500 text-red-300 font-bold'
                  : 'bg-surface-950 border-surface-800/40 text-surface-500 opacity-50'
              ]"
            >
              <span>{{ opt }}</span>
              <span v-if="selectedOption !== null && oIdx === currentQuestion.correct">✓</span>
              <span v-else-if="selectedOption === oIdx && oIdx !== currentQuestion.correct">✗</span>
            </button>
          </div>

          <!-- Next Button -->
          <div v-if="selectedOption !== null" class="flex justify-end pt-2">
            <button
              @click="nextQuestion"
              class="px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-all shadow-md shadow-brand-500/20 cursor-pointer"
            >
              {{ currentQuestionIndex + 1 === quizQuestions.length ? 'Natijani Ko‘rish 🏆' : 'Keyingi Savol →' }}
            </button>
          </div>
        </div>

        <!-- Quiz Finished Results -->
        <div v-else class="text-center space-y-5 py-4">
          <div class="w-16 h-16 rounded-2xl bg-brand-500/20 border border-brand-500/40 text-4xl flex items-center justify-center mx-auto shadow-xl shadow-brand-500/20">
            🏆
          </div>

          <div class="space-y-1">
            <h2 class="text-2xl font-black text-white">Ajoyib Natija!</h2>
            <p class="text-xs text-surface-300">
              Siz {{ quizQuestions.length }} ta savoldan {{ correctAnswersCount }} tasiga to‘g‘ri javob berdingiz.
            </p>
          </div>

          <div class="p-4 rounded-2xl bg-surface-950 border border-surface-800 font-mono">
            <div class="text-xs text-surface-400">To‘plangan Tajriba Balli:</div>
            <div class="text-2xl font-black text-brand-400 mt-1">+{{ earnedXp }} XP</div>
          </div>

          <button
            @click="showQuizModal = false"
            class="w-full py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors cursor-pointer"
          >
            Yopish va Hisobga Qo‘shish 🚀
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useProgressStore } from '../stores/progress';

const progressStore = useProgressStore();

const showQuizModal = ref(false);
const currentQuestionIndex = ref(0);
const selectedOption = ref<number | null>(null);
const correctAnswersCount = ref(0);
const quizFinished = ref(false);
const earnedXp = ref(0);

const quizQuestions = [
  {
    question: '1. WHATWG standarti bo‘yicha modal oynani nativ ochuvchi metod qaysi?',
    options: ['dialog.open()', 'dialog.showModal()', 'dialog.createModal()', 'dialog.popup()'],
    correct: 1,
  },
  {
    question: '2. CSS da Specificity formulasi bo‘yicha qaysi biri eng yuqori ustunlikka ega?',
    options: ['Tag selektor: h1', 'Class selektor: .btn', 'ID selektor: #header', 'Universal: *'],
    correct: 2,
  },
  {
    question: '3. JavaScript Event Loop da Promise.then() qaysi navbatga tushadi?',
    options: ['Macrotasks Queue', 'Microtasks Queue', 'Render Queue', 'Worker Thread'],
    correct: 1,
  },
  {
    question: '4. Rasmlarni yuklashda First Contentful Paint tezligini oshirish uchun qaysi atribut ishlatiladi?',
    options: ['loading="lazy"', 'preload="none"', 'defer="true"', 'async="false"'],
    correct: 0,
  },
  {
    question: '5. Flexbox da elementlarni vertikal (Cross Axis) markazlashtirish xususiyati qaysi?',
    options: ['justify-content: center', 'align-items: center', 'flex-direction: column', 'align-content: stretch'],
    correct: 1,
  },
];

const currentQuestion = computed(() => quizQuestions[currentQuestionIndex.value]!);

function startQuiz() {
  currentQuestionIndex.value = 0;
  selectedOption.value = null;
  correctAnswersCount.value = 0;
  quizFinished.value = false;
  showQuizModal.value = true;
}

function selectOption(idx: number) {
  if (selectedOption.value !== null) return;
  selectedOption.value = idx;
  if (idx === currentQuestion.value.correct) {
    correctAnswersCount.value++;
  }
}

function nextQuestion() {
  if (currentQuestionIndex.value + 1 < quizQuestions.length) {
    currentQuestionIndex.value++;
    selectedOption.value = null;
  } else {
    quizFinished.value = true;
    earnedXp.value = correctAnswersCount.value * 10;
    if (earnedXp.value > 0) {
      progressStore.addXp(earnedXp.value);
    }
  }
}

const miniChallenges = [
  {
    id: 'c1',
    icon: '🌐',
    title: 'HTML5 Semantik Skelet',
    desc: '<header>, <nav>, <main> va <footer> teglari orqali to‘liq semantik struktura tuzing.',
    xp: 25,
    time: '5 daqiqa',
    link: '/practice/t1',
  },
  {
    id: 'c2',
    icon: '🎨',
    title: 'Flexbox Kartochkalar',
    desc: 'display: flex va justify-content xususiyatlari orqali responsiv kartalar qatorini yarating.',
    xp: 30,
    time: '6 daqiqa',
    link: '/practice/t2',
  },
];
</script>
