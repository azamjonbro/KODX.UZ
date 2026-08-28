<template>
  <div class="space-y-8 max-w-5xl mx-auto pb-16">
    <!-- Header -->
    <div class="space-y-3 text-left">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono">
        <span>🗺️</span> KARYERA VA BOSQICHLAR
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        Dasturchi Yo‘l Xaritalari (Roadmaps)
      </h1>
      <p class="text-sm sm:text-base text-surface-400 leading-relaxed max-w-3xl">
        Noldan to xalqaro kompaniyalar darajasigacha bo‘lgan aniq, bosqichma-bosqich o‘quv xaritalari.
      </p>
    </div>

    <!-- Roadmaps Track Tabs -->
    <div class="flex flex-wrap gap-2 border-b border-surface-800 pb-3">
      <button
        v-for="track in tracks"
        :key="track.id"
        @click="activeTrack = track.id"
        class="px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer"
        :class="[
          activeTrack === track.id
            ? 'bg-brand-500 text-surface-950 font-bold shadow-lg shadow-brand-500/20'
            : 'bg-surface-900 text-surface-400 hover:text-white hover:bg-surface-800'
        ]"
      >
        <span>{{ track.icon }}</span>
        <span>{{ track.title }}</span>
      </button>
    </div>

    <!-- Active Roadmap Steps Tree -->
    <div class="space-y-4">
      <div
        v-for="(step, idx) in currentTrackData.steps"
        :key="step.id"
        class="p-5 rounded-2xl bg-surface-900/60 border border-surface-800/80 hover:border-surface-700 transition-all space-y-3"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="w-7 h-7 rounded-lg bg-surface-800 border border-surface-700 font-mono text-xs font-bold text-brand-400 flex items-center justify-center">
              {{ idx + 1 }}
            </span>
            <h3 class="text-base font-bold text-white">{{ step.title }}</h3>
          </div>

          <span
            class="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md"
            :class="[
              step.status === 'completed'
                ? 'bg-brand-500/10 text-brand-400 border border-brand-500/20'
                : step.status === 'in_progress'
                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse'
                : 'bg-surface-800 text-surface-400'
            ]"
          >
            {{ step.status === 'completed' ? 'Tugallangan ✓' : step.status === 'in_progress' ? 'O‘rganilmoqda ⚡' : 'Rejada 📌' }}
          </span>
        </div>

        <p class="text-xs text-surface-400 leading-relaxed pl-10">
          {{ step.description }}
        </p>

        <!-- Subtopics badges -->
        <div class="flex flex-wrap gap-1.5 pl-10 pt-1">
          <router-link
            v-for="sub in step.topics"
            :key="sub.name"
            :to="sub.path"
            class="px-2.5 py-1 rounded-lg bg-surface-950 border border-surface-800 text-[11px] font-mono text-surface-300 hover:text-brand-300 hover:border-brand-500/30 transition-colors"
          >
            {{ sub.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const activeTrack = ref('frontend');

const tracks = [
  { id: 'frontend', title: 'Frontend Dasturchi', icon: '🌐' },
  { id: 'backend', title: 'Backend Dasturchi', icon: '⚙️' },
  { id: 'fullstack', title: 'Fullstack Dasturchi', icon: '🚀' },
];

const roadmapDetails = {
  frontend: {
    steps: [
      {
        id: 'fe-1',
        title: '1. Veb Asoslari va Internet Qanday Ishlaydi',
        description: 'HTTP/HTTPS protokollari, DNS, Brauzer ishlash mexanizmi va hosting tushunchalari.',
        status: 'completed',
        topics: [
          { name: 'Client & Server', path: '/html/kirish' },
          { name: 'Browser Rendering', path: '/html/kirish' },
          { name: 'DNS & IP', path: '/html/kirish' },
        ],
      },
      {
        id: 'fe-2',
        title: '2. HTML5 va Semantika',
        description: 'Semantik teglar, SEO optimizatsiya, A11y (Accessibility), Audio/Video va yangi dialog elementlari.',
        status: 'in_progress',
        topics: [
          { name: 'HTML5 Skelet', path: '/html/taglar' },
          { name: 'Semantik Teglar', path: '/html/semantika' },
          { name: 'SEO & Meta', path: '/html/head-meta' },
          { name: 'Formalar', path: '/html/formalar' },
        ],
      },
      {
        id: 'fe-3',
        title: '3. CSS3, Flexbox va Modern Layout',
        description: 'CSS Box Model, Flexbox, Grid, Animatsiyalar, Responsive dizayn va Tailwind CSS.',
        status: 'pending',
        topics: [
          { name: 'Box Model', path: '/css/box-model' },
          { name: 'Flexbox', path: '/css/flexbox' },
          { name: 'CSS Grid', path: '/css/grid' },
          { name: 'Modern CSS', path: '/css/modern' },
        ],
      },
      {
        id: 'fe-4',
        title: '4. JavaScript (ES6+) va DOM',
        description: 'Ma‘lumot turlari, funksiyalar, DOM manipulyatsiyasi, Event Loop, Promises va Async/Await.',
        status: 'pending',
        topics: [
          { name: 'Variables', path: '/javascript/ozgaruvchilar' },
          { name: 'Functions', path: '/javascript/funksiyalar' },
          { name: 'DOM Tree', path: '/javascript/dom' },
          { name: 'Async JS', path: '/javascript/async' },
        ],
      },
    ],
  },
  backend: {
    steps: [
      {
        id: 'be-1',
        title: '1. Node.js va Runtime Asoslari',
        description: 'V8 Engine, Event Loop, Libuv, File System va Streams bilan ishlash.',
        status: 'pending',
        topics: [
          { name: 'Node.js Core', path: '/javascript/async' },
          { name: 'NPM & PNPM', path: '/javascript/kirish' },
        ],
      },
      {
        id: 'be-2',
        title: '2. REST API va Express/NestJS',
        description: 'Routing, Middleware, Validatsiya (Zod), Autentifikatsiya (JWT) va Xavfsizlik.',
        status: 'pending',
        topics: [
          { name: 'REST Design', path: '/javascript/kirish' },
          { name: 'JWT Auth', path: '/login' },
        ],
      },
      {
        id: 'be-3',
        title: '3. Relyatsion Baza (PostgreSQL) va ORM',
        description: 'SQL so‘rovlar, Indekslar, Tranzaksiyalar, Prisma ORM va Migratsiyalar.',
        status: 'pending',
        topics: [
          { name: 'PostgreSQL', path: '/javascript/kirish' },
          { name: 'Prisma ORM', path: '/javascript/kirish' },
        ],
      },
    ],
  },
  fullstack: {
    steps: [
      {
        id: 'fs-1',
        title: '1. Frontend + Backend Integratsiyasi',
        description: 'Monorepo strukturasi, Turborepo, Type-safe API va Fullstack arxitektura.',
        status: 'pending',
        topics: [
          { name: 'Vite + Fastify', path: '/html/kirish' },
          { name: 'TypeScript Monorepo', path: '/javascript/kirish' },
        ],
      },
    ],
  },
};

const currentTrackData = computed(() => {
  return roadmapDetails[activeTrack.value as keyof typeof roadmapDetails] || roadmapDetails.frontend;
});
</script>
