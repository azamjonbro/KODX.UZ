<template>
  <div class="relative">
    <!-- Trigger Slot / Default Avatar Button -->
    <div @click="isOpen = !isOpen" class="cursor-pointer">
      <slot>
        <div class="w-8 h-8 rounded-full overflow-hidden bg-surface-800 border border-surface-700 hover:border-brand-500 flex items-center justify-center transition-colors">
          <span class="text-xs font-bold text-surface-200">👨‍💻</span>
        </div>
      </slot>
    </div>

    <!-- Backdrop -->
    <div
      v-if="isOpen"
      @click="isOpen = false"
      class="fixed inset-0 z-40"
    ></div>

    <!-- Dropdown Menu -->
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-72 rounded-2xl bg-surface-900/95 border border-surface-800 backdrop-blur-2xl shadow-2xl z-50 overflow-hidden text-left animate-in fade-in zoom-in-95 duration-150"
    >
      <!-- User Info Header -->
      <div class="p-4 border-b border-surface-800/80 bg-surface-950/60 space-y-2">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-600 to-brand-400 flex items-center justify-center text-sm font-bold text-surface-950">
            👨‍💻
          </div>
          <div class="min-w-0">
            <h3 class="text-sm font-bold text-white truncate">Abdulloh</h3>
            <p class="text-[11px] text-surface-400 font-mono">abdulloh@kodx.uz</p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2 pt-2 text-center text-xs">
          <div class="p-2 rounded-xl bg-surface-900 border border-surface-800">
            <div class="text-[10px] text-surface-400 font-mono uppercase">Daraja</div>
            <div class="font-bold text-white">Level 7</div>
          </div>
          <div class="p-2 rounded-xl bg-surface-900 border border-surface-800">
            <div class="text-[10px] text-surface-400 font-mono uppercase">Tajriba</div>
            <div class="font-bold text-brand-400 font-mono">1,240 XP</div>
          </div>
        </div>
      </div>

      <!-- Navigation Links -->
      <div class="p-2 space-y-1 text-xs">
        <router-link
          to="/leaderboard"
          @click="isOpen = false"
          class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-surface-300 hover:text-white hover:bg-surface-800 transition-colors"
        >
          <span class="text-sm">🏆</span>
          <span>Mening Yutuqlarim va Reyting</span>
        </router-link>

        <router-link
          to="/roadmaps"
          @click="isOpen = false"
          class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-surface-300 hover:text-white hover:bg-surface-800 transition-colors"
        >
          <span class="text-sm">🗺️</span>
          <span>O‘quv Rejam va Yo‘l Xaritasi</span>
        </router-link>

        <router-link
          to="/login"
          @click="isOpen = false"
          class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-surface-300 hover:text-white hover:bg-surface-800 transition-colors"
        >
          <span class="text-sm">⚙️</span>
          <span>Profil Sozlamalari</span>
        </router-link>
      </div>

      <!-- Footer Auth Action -->
      <div class="p-2 border-t border-surface-800/80 bg-surface-950/60 flex items-center justify-between text-xs">
        <router-link
          to="/login"
          @click="isOpen = false"
          class="w-full py-2 px-3 text-center rounded-xl bg-surface-800 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30 text-surface-300 transition-colors font-medium border border-transparent"
        >
          Tizimdan chiqish (Logout)
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
</script>
