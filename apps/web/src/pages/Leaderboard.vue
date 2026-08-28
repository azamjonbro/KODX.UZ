<template>
  <div class="space-y-8 max-w-5xl mx-auto pb-16">
    <!-- Header -->
    <div class="space-y-3 text-left">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono">
        <span>🏆</span> FOYDALANUVCHILAR REYTINGI
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        Global Leaderboard & XP Shohsupasi
      </h1>
      <p class="text-sm sm:text-base text-surface-400 leading-relaxed max-w-3xl">
        Darslarni o‘rganish, mashqlarni bajarish va har kungi faollik orqali XP to‘plab yetakchilar safiga qo‘shiling!
      </p>
    </div>

    <!-- Top 3 Podium Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 items-end">
      <!-- 2nd Place -->
      <div class="p-5 rounded-2xl bg-surface-900/80 border border-slate-700/60 flex flex-col items-center text-center space-y-3 order-2 sm:order-1 sm:h-64 justify-center">
        <div class="text-2xl">🥈</div>
        <div class="w-14 h-14 rounded-full bg-slate-800 border-2 border-slate-400 flex items-center justify-center text-xl font-bold">
          👩‍💻
        </div>
        <div>
          <h3 class="font-bold text-white text-sm">Madina R.</h3>
          <p class="text-[11px] text-surface-400">Level 8</p>
        </div>
        <div class="px-3 py-1 rounded-lg bg-surface-950 font-mono text-xs font-bold text-surface-200">
          2,450 XP
        </div>
      </div>

      <!-- 1st Place (Winner) -->
      <div class="p-6 rounded-2xl bg-gradient-to-b from-amber-500/20 via-surface-900 to-surface-900 border border-amber-500/40 flex flex-col items-center text-center space-y-3 order-1 sm:order-2 sm:h-76 justify-center shadow-xl shadow-amber-500/10">
        <div class="text-3xl animate-bounce">👑 🥇</div>
        <div class="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-2xl font-bold">
          👨‍💻
        </div>
        <div>
          <h3 class="font-bold text-white text-base">Javohir X.</h3>
          <p class="text-xs text-amber-400 font-mono font-semibold">Level 10 • Legend</p>
        </div>
        <div class="px-4 py-1.5 rounded-lg bg-surface-950 font-mono text-sm font-bold text-amber-400 border border-amber-500/30">
          3,820 XP
        </div>
      </div>

      <!-- 3rd Place -->
      <div class="p-5 rounded-2xl bg-surface-900/80 border border-amber-700/40 flex flex-col items-center text-center space-y-3 order-3 sm:order-3 sm:h-60 justify-center">
        <div class="text-2xl">🥉</div>
        <div class="w-12 h-12 rounded-full bg-amber-900/40 border-2 border-amber-600 flex items-center justify-center text-lg font-bold">
          🧑‍💻
        </div>
        <div>
          <h3 class="font-bold text-white text-sm">Bekzod U.</h3>
          <p class="text-[11px] text-surface-400">Level 7</p>
        </div>
        <div class="px-3 py-1 rounded-lg bg-surface-950 font-mono text-xs font-bold text-surface-200">
          1,980 XP
        </div>
      </div>
    </div>

    <!-- Full Leaderboard Table -->
    <div class="rounded-2xl bg-surface-900/60 border border-surface-800 overflow-hidden text-left">
      <div class="p-4 bg-surface-950/80 border-b border-surface-800 flex items-center justify-between text-xs text-surface-400 font-mono">
        <span>O‘rin & Foydalanuvchi</span>
        <span>Daraja & XP</span>
      </div>

      <div class="divide-y divide-surface-800/60 text-xs">
        <div
          v-for="user in leaderboardList"
          :key="user.rank"
          class="p-4 flex items-center justify-between hover:bg-surface-800/40 transition-colors"
          :class="{ 'bg-brand-500/10 border-l-4 border-brand-500': user.isCurrent }"
        >
          <div class="flex items-center gap-3">
            <span class="w-6 font-mono font-bold text-center" :class="user.isCurrent ? 'text-brand-400' : 'text-surface-400'">
              #{{ user.rank }}
            </span>
            <div class="w-8 h-8 rounded-full bg-surface-800 border border-surface-700 flex items-center justify-center text-xs">
              {{ user.avatar }}
            </div>
            <div>
              <div class="font-bold text-white flex items-center gap-2">
                <span>{{ user.name }}</span>
                <span v-if="user.isCurrent" class="px-1.5 py-0.5 rounded bg-brand-500 text-surface-950 text-[10px] font-mono font-bold">Siz</span>
              </div>
              <div class="text-[10px] text-surface-400">{{ user.streak }} kunlik streak 🔥</div>
            </div>
          </div>

          <div class="text-right font-mono">
            <div class="font-bold text-brand-400">{{ user.xp.toLocaleString() }} XP</div>
            <div class="text-[10px] text-surface-400">Level {{ user.level }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useProgressStore } from '../stores/progress';

const progressStore = useProgressStore();

const leaderboardList = computed(() => [
  { rank: 1, name: 'Javohir X.', avatar: '👨‍💻', xp: 3820, level: 10, streak: 45, isCurrent: false },
  { rank: 2, name: 'Madina R.', avatar: '👩‍💻', xp: 2450, level: 8, streak: 28, isCurrent: false },
  { rank: 3, name: 'Bekzod U.', avatar: '🧑‍💻', xp: 1980, level: 7, streak: 19, isCurrent: false },
  { rank: 4, name: 'Sardorbek K.', avatar: '👨‍💻', xp: 1740, level: 7, streak: 15, isCurrent: false },
  { rank: 5, name: 'Nilufar M.', avatar: '👩‍💻', xp: 1520, level: 7, streak: 14, isCurrent: false },
  { rank: 6, name: 'Diyorbek O.', avatar: '🧑‍💻', xp: 1390, level: 7, streak: 12, isCurrent: false },
  { rank: 7, name: 'Abdulloh (Siz)', avatar: '👨‍💻', xp: progressStore.xp, level: progressStore.level, streak: progressStore.streak, isCurrent: true },
  { rank: 8, name: 'Shahzod T.', avatar: '👨‍💻', xp: 1100, level: 6, streak: 9, isCurrent: false },
]);
</script>
