<template>
  <div class="space-y-8 max-w-5xl mx-auto pb-16">
    <!-- Header -->
    <div class="space-y-3 text-left">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono">
        <span>💼</span> AMALIY TOPSHIRIQLAR
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        Interaktiv Kodlash Mashqlari
      </h1>
      <p class="text-sm sm:text-base text-surface-400 leading-relaxed max-w-3xl">
        Nazariyani mustahkamlash uchun brauzerda to‘g‘ridan-to‘g‘ri kod yozing, testlardan o‘ting va XP to‘plang!
      </p>
    </div>

    <!-- Filter & Search Bar -->
    <div class="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-surface-900/60 border border-surface-800">
      <div class="flex flex-wrap gap-2">
        <button
          v-for="diff in ['Barchasi', 'Oson', 'O‘rta', 'Qiyin']"
          :key="diff"
          @click="activeDiff = diff"
          class="px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer"
          :class="[
            activeDiff === diff
              ? 'bg-brand-500 text-surface-950 font-bold'
              : 'bg-surface-950 text-surface-400 hover:text-white border border-surface-800'
          ]"
        >
          {{ diff }}
        </button>
      </div>

      <div class="flex items-center gap-2 text-xs text-surface-400 font-mono">
        <span>Jami: <strong class="text-white">{{ filteredTasks.length }}</strong> ta mashq</span>
      </div>
    </div>

    <!-- Tasks Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="task in filteredTasks"
        :key="task.id"
        class="p-5 rounded-2xl bg-surface-900/60 border border-surface-800/80 hover:border-brand-500/40 transition-all flex flex-col justify-between space-y-4 group"
      >
        <div class="space-y-2.5">
          <div class="flex items-center justify-between">
            <span
              class="text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase"
              :class="[
                task.difficulty === 'Oson' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                task.difficulty === 'O‘rta' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                'bg-red-500/10 text-red-400 border border-red-500/20'
              ]"
            >
              {{ task.difficulty }}
            </span>
            <span class="text-xs font-mono font-bold text-brand-400">+{{ task.xp }} XP</span>
          </div>

          <h3 class="text-base font-bold text-white group-hover:text-brand-300 transition-colors">
            {{ task.title }}
          </h3>

          <p class="text-xs text-surface-400 leading-relaxed">
            {{ task.description }}
          </p>
        </div>

        <div class="pt-3 border-t border-surface-800/80 flex items-center justify-between">
          <span class="text-[11px] font-mono text-surface-500">
            {{ task.tag }}
          </span>
          <router-link
            :to="task.link"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-950 hover:bg-brand-500 text-surface-200 hover:text-surface-950 text-xs font-bold transition-all border border-surface-800 hover:border-transparent"
          >
            <span>Yechish</span>
            <span>→</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const activeDiff = ref('Barchasi');

interface TaskItem {
  id: string;
  title: string;
  description: string;
  difficulty: 'Oson' | 'O‘rta' | 'Qiyin';
  xp: number;
  tag: string;
  link: string;
}

const tasks = ref<TaskItem[]>([
  {
    id: 't1',
    title: 'HTML5 Semantik Skeletini Yaratish',
    description: '<header>, <main>, <nav> va <footer> teglari yordamida to‘liq semantik struktura tuzing.',
    difficulty: 'Oson',
    xp: 25,
    tag: 'HTML5 • Semantika',
    link: '/html/semantika',
  },
  {
    id: 't2',
    title: 'Flexbox Kartochkalarni Markazlashtirish',
    description: 'justify-content va align-items xususiyatlari orqali responsiv kartalar qatorini hosil qiling.',
    difficulty: 'Oson',
    xp: 30,
    tag: 'CSS • Flexbox',
    link: '/css/flexbox',
  },
  {
    id: 't3',
    title: 'JavaScript DOM Hodisalari (Click Counter)',
    description: 'addEventListener yordamida tugma bosilganda sonni oshiruvchi hisoblagich kodi.',
    difficulty: 'O‘rta',
    xp: 45,
    tag: 'JS • DOM Events',
    link: '/javascript/events',
  },
  {
    id: 't4',
    title: 'Asinxron Fetch & Promise Handling',
    description: 'Async/Await orqali tashqi API dan ma‘lumot olib, xatoliklarni try/catch orqali boshqaring.',
    difficulty: 'Qiyin',
    xp: 75,
    tag: 'JS • Async/Await',
    link: '/javascript/async',
  },
]);

const filteredTasks = computed(() => {
  if (activeDiff.value === 'Barchasi') return tasks.value;
  return tasks.value.filter(t => t.difficulty === activeDiff.value);
});
</script>
