<template>
  <div>
    <!-- Trigger Button -->
    <button
      type="button"
      @click="isOpen = true"
      class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-900/80 hover:bg-surface-800 border border-surface-800/80 hover:border-amber-500/40 text-xs font-mono font-medium text-surface-200 transition-all cursor-pointer group"
      title="Faollik va Streak ko‘rish"
    >
      <span class="text-amber-400 group-hover:scale-125 transition-transform">🔥</span>
      <span class="group-hover:text-amber-300 transition-colors">12 kun</span>
    </button>

    <!-- Modal Backdrop -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-surface-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
      @click.self="isOpen = false"
    >
      <!-- Modal Content -->
      <div class="relative w-full max-w-md rounded-2xl bg-surface-900 border border-surface-800 p-6 shadow-2xl space-y-6 text-left animate-in fade-in zoom-in-95 duration-200">
        <!-- Close Button -->
        <button
          @click="isOpen = false"
          class="absolute top-4 right-4 text-surface-400 hover:text-white p-1 rounded-lg hover:bg-surface-800 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Big Streak Flame Icon & Title -->
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-600/20 to-orange-500/10 border border-amber-500/30 flex items-center justify-center text-3xl shadow-lg shadow-amber-500/10">
            🔥
          </div>
          <div>
            <h2 class="text-xl font-bold text-white tracking-tight">12 Kunlik Olovli Streak!</h2>
            <p class="text-xs text-surface-400">Har kuni dars o‘rganib, zanjirni uzmang!</p>
          </div>
        </div>

        <!-- Weekly Activity Calendar Grid -->
        <div class="p-4 rounded-xl bg-surface-950/80 border border-surface-800 space-y-3">
          <div class="flex items-center justify-between text-xs">
            <span class="text-surface-400 font-medium">Bu haftalik faollik:</span>
            <span class="text-brand-400 font-mono font-bold">7 / 7 kun bajarildi</span>
          </div>

          <div class="grid grid-cols-7 gap-2 text-center">
            <div
              v-for="(day, idx) in weekDays"
              :key="idx"
              class="flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors"
              :class="day.active ? 'bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold' : 'bg-surface-900 text-surface-500'"
            >
              <span class="text-[10px] uppercase font-mono">{{ day.label }}</span>
              <span class="text-xs">{{ day.active ? '🔥' : '○' }}</span>
            </div>
          </div>
        </div>

        <!-- Daily Goal Progress -->
        <div class="p-4 rounded-xl bg-surface-950/80 border border-surface-800 space-y-2">
          <div class="flex items-center justify-between text-xs">
            <span class="text-surface-300 font-medium">Bugungi XP maqsadi</span>
            <span class="font-mono text-brand-400 font-bold">80 / 100 XP</span>
          </div>
          <div class="w-full h-2 bg-surface-800 rounded-full overflow-hidden">
            <div class="h-full bg-gradient-to-r from-brand-500 to-emerald-400 rounded-full w-[80%]"></div>
          </div>
          <p class="text-[11px] text-surface-400">
            Yana 1 ta dars o‘qib yoki mashq ishlab kunlik 100 XP maqsadini to‘ldiring!
          </p>
        </div>

        <!-- Action Button -->
        <button
          @click="isOpen = false"
          class="w-full py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-all shadow-lg shadow-brand-500/20"
        >
          O‘rganishni davom ettirish 🚀
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

const weekDays = [
  { label: 'Du', active: true },
  { label: 'Se', active: true },
  { label: 'Ch', active: true },
  { label: 'Pa', active: true },
  { label: 'Ju', active: true },
  { label: 'Sh', active: true },
  { label: 'Ya', active: true },
];
</script>
