<template>
  <div>
    <!-- Trigger Button in Header -->
    <button
      type="button"
      @click="isOpen = true"
      class="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-surface-900/90 hover:bg-surface-800 border border-surface-800 hover:border-amber-500/50 text-xs font-mono font-medium text-surface-200 transition-all cursor-pointer group shadow-sm"
      title="Faollik va Streak ko‘rish"
    >
      <span class="text-amber-400 group-hover:scale-125 transition-transform animate-pulse">🔥</span>
      <span class="group-hover:text-amber-300 font-bold transition-colors">{{ streak }} kun</span>
    </button>

    <!-- Modal Backdrop -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-surface-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
      @click.self="isOpen = false"
    >
      <!-- Modal Box -->
      <div class="relative w-full max-w-lg rounded-3xl bg-surface-900/95 border border-surface-800/90 p-6 sm:p-7 shadow-2xl space-y-6 text-left animate-in fade-in zoom-in-95 duration-150">
        <!-- Close Button -->
        <button
          @click="isOpen = false"
          class="absolute top-5 right-5 text-surface-400 hover:text-white p-1.5 rounded-xl hover:bg-surface-800 transition-colors cursor-pointer"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Top Streak Banner -->
        <div class="flex items-center gap-4">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-orange-500/15 to-brand-500/10 border border-amber-500/30 flex items-center justify-center text-3xl shadow-xl shadow-amber-500/10">
            🔥
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-2xl font-black text-white tracking-tight">{{ streak }} Kunlik Olovli Streak!</h2>
            </div>
            <p class="text-xs text-surface-400 mt-0.5">
              Har kuni kamida bitta dars o‘qib, zanjirni uzmasdan davom eting.
            </p>
          </div>
        </div>

        <!-- 4 Key Streak Metrics -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs font-mono">
          <div class="p-3 rounded-2xl bg-surface-950/80 border border-surface-800/80 space-y-1">
            <div class="text-[10px] text-surface-500 uppercase">Joriy Streak</div>
            <div class="text-base font-bold text-amber-400">{{ streak }} kun</div>
          </div>
          <div class="p-3 rounded-2xl bg-surface-950/80 border border-surface-800/80 space-y-1">
            <div class="text-[10px] text-surface-500 uppercase">Eng Uzun</div>
            <div class="text-base font-bold text-emerald-400">24 kun</div>
          </div>
          <div class="p-3 rounded-2xl bg-surface-950/80 border border-surface-800/80 space-y-1">
            <div class="text-[10px] text-surface-500 uppercase">Jami Faol</div>
            <div class="text-base font-bold text-cyan-400">84 kun</div>
          </div>
          <div class="p-3 rounded-2xl bg-surface-950/80 border border-surface-800/80 space-y-1">
            <div class="text-[10px] text-surface-500 uppercase">Muzlatgich</div>
            <div class="text-base font-bold text-purple-400">🛡️ {{ streakFreezesCount }} ta</div>
          </div>
        </div>

        <!-- 30-Day Activity Heatmap Grid (GitHub style) -->
        <div class="p-4.5 rounded-2xl bg-surface-950/90 border border-surface-800/90 space-y-3">
          <div class="flex items-center justify-between text-xs">
            <span class="text-surface-300 font-semibold flex items-center gap-1.5">
              <span>📅</span> So‘nggi 30 kunlik faollik xaritasi
            </span>
            <span class="text-[11px] font-mono text-brand-400 font-bold">100% Faol</span>
          </div>

          <!-- Heatmap Blocks (4 weeks x 7 days) -->
          <div class="grid grid-cols-10 gap-1.5 pt-1">
            <div
              v-for="(cell, cIdx) in heatmapCells"
              :key="cIdx"
              class="h-6 rounded-md flex items-center justify-center text-[9px] font-mono transition-transform hover:scale-110 cursor-pointer"
              :class="[
                cell.xp >= 100
                  ? 'bg-brand-500 text-surface-950 font-bold shadow-sm shadow-brand-500/30'
                  : cell.xp >= 50
                  ? 'bg-brand-600/80 text-white'
                  : cell.xp > 0
                  ? 'bg-brand-900/60 text-brand-300 border border-brand-500/30'
                  : 'bg-surface-900 border border-surface-800 text-surface-600'
              ]"
              :title="`${cell.date}: ${cell.xp} XP to'plandi`"
            >
              {{ cell.day }}
            </div>
          </div>

          <!-- Heatmap Legend -->
          <div class="flex items-center justify-between text-[10px] text-surface-500 font-mono pt-1">
            <span>Kamroq</span>
            <div class="flex items-center gap-1">
              <span class="w-2.5 h-2.5 rounded bg-surface-900 border border-surface-800 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded bg-brand-900/60 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded bg-brand-600/80 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded bg-brand-500 inline-block"></span>
            </div>
            <span>Ko‘proq XP</span>
          </div>
        </div>

        <!-- Daily Goal XP Claim Card -->
        <div class="p-4 rounded-2xl bg-surface-950/80 border border-surface-800/80 flex items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-white">Bugungi 100 XP Maqsadi</span>
              <span class="px-1.5 py-0.5 rounded bg-brand-500/10 text-brand-400 text-[10px] font-mono font-bold">+30 Bonus</span>
            </div>
            <div class="w-36 h-1.5 bg-surface-800 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-brand-500 to-emerald-400 rounded-full w-[80%]"></div>
            </div>
            <div class="text-[10px] text-surface-400 font-mono">80 / 100 XP to‘plandi</div>
          </div>

          <button
            @click="handleClaimDaily"
            class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer"
            :class="[
              claimedDaily
                ? 'bg-surface-800 text-surface-400 cursor-default'
                : 'bg-brand-500 hover:bg-brand-400 text-surface-950 shadow-brand-500/20'
            ]"
          >
            {{ claimedDaily ? 'Bonus Olindi ✓' : 'Bonusni Olish 🎁' }}
          </button>
        </div>

        <!-- Footer Action -->
        <button
          @click="isOpen = false"
          class="w-full py-3 rounded-2xl bg-surface-800 hover:bg-surface-700 text-white font-bold text-xs transition-colors cursor-pointer"
        >
          Yopish
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useProgressStore } from '../stores/progress';

const isOpen = ref(false);
const claimedDaily = ref(false);
const progressStore = useProgressStore();

const streak = computed(() => progressStore.streak.value);
const streakFreezesCount = computed(() => progressStore.streakFreezesCount.value);

function handleClaimDaily() {
  if (!claimedDaily.value) {
    progressStore.claimDailyBonus();
    claimedDaily.value = true;
  }
}

// Generate last 30 days heatmap cells
const heatmapCells = computed(() => {
  const cells = [];
  const today = new Date();
  const history = progressStore.activityHistory.value;

  for (let i = 29; i >= 0; i--) {
    const d = new Date();
    d.setDate(today.getDate() - i);
    const dateStr = d.toISOString().split('T')[0]!;
    const dayNum = d.getDate();
    const xpVal = history[dateStr] || (i <= 12 ? (80 + (i % 5) * 15) : 0);

    cells.push({
      date: dateStr,
      day: dayNum,
      xp: xpVal,
    });
  }
  return cells;
});
</script>
