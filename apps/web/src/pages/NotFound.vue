<template>
  <div class="w-full flex-1 flex flex-col items-center justify-center px-4 py-6 md:py-8 my-auto relative select-none">
    <!-- Ambient Background Glows -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[280px] bg-gradient-to-tr from-brand-600/15 via-emerald-500/10 to-transparent blur-[100px] rounded-full pointer-events-none"></div>

    <div class="relative z-10 max-w-2xl w-full mx-auto text-center flex flex-col items-center justify-center space-y-5">
      <!-- Status Badge -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/25 text-brand-400 text-[11px] font-mono">
        <span class="w-1.5 h-1.5 rounded-full bg-brand-400 animate-ping"></span>
        <span>HTTP STATUS 404 • SAHIFA TOPILMADI</span>
      </div>

      <!-- Giant 404 Glitch & Glowing Typography -->
      <div class="relative">
        <h1 class="font-mono text-6xl sm:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-surface-200 to-surface-500 drop-shadow-2xl leading-none">
          4<span class="text-brand-400 animate-pulse">0</span>4
        </h1>
        <div class="text-[11px] font-mono text-brand-400/80 tracking-widest uppercase mt-1">
          // ROUTE_NOT_FOUND_EXCEPTION
        </div>
      </div>

      <!-- Descriptive Text -->
      <div class="space-y-1 max-w-lg mx-auto">
        <h2 class="text-lg sm:text-xl font-bold text-white tracking-tight">
          Adashib qoldingizmi?
        </h2>
        <p class="text-xs text-surface-400 leading-relaxed font-normal">
          Siz qidirayotgan manzil mavjud emas, nomi o‘zgargan yoki server xotirasidan o‘chirilgan.
        </p>
      </div>

      <!-- Interactive Code Snippet (Terminal Card) -->
      <div class="rounded-xl bg-surface-900/80 border border-surface-800/80 backdrop-blur-xl shadow-2xl overflow-hidden text-left w-full max-w-xl mx-auto font-mono text-xs">
        <!-- Terminal Header -->
        <div class="flex items-center justify-between px-3.5 py-2 bg-surface-950/90 border-b border-surface-800/80">
          <div class="flex items-center gap-1.5">
            <span class="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-brand-500/80 inline-block"></span>
            <span class="text-[10px] text-surface-500 ml-2">router_resolver.ts</span>
          </div>
          <span class="text-[9px] text-brand-400/80 bg-brand-500/10 px-1.5 py-0.5 rounded border border-brand-500/20">TypeScript</span>
        </div>

        <!-- Terminal Body -->
        <div class="p-3.5 space-y-1 text-[11px] overflow-x-auto text-surface-300">
          <div>
            <span class="text-purple-400">const</span> <span class="text-yellow-300">targetPath</span> = <span class="text-emerald-300">"{{ currentPath }}"</span>;
          </div>
          <div>
            <span class="text-purple-400">const</span> <span class="text-yellow-300">page</span> = <span class="text-purple-400">await</span> <span class="text-blue-400">KnowledgeUniverse</span>.<span class="text-brand-300">resolve</span>(<span class="text-yellow-300">targetPath</span>);
          </div>
          <div class="pt-0.5 text-red-400 flex items-center gap-1.5">
            <span>✖ Error:</span>
            <span>404 Not Found at Universe.render()</span>
          </div>
          <div class="text-surface-400 pt-0.5 text-[10px]">
            <span class="text-brand-400">💡 Tavsiya:</span> Bosh sahifaga qaytish yoki quyidagi ommabop yo‘nalishlarni tanlang.
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-wrap items-center justify-center gap-2.5 pt-1">
        <router-link
          to="/"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-all shadow-lg shadow-brand-500/20 hover:scale-105 active:scale-95"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>Bosh sahifaga qaytish</span>
        </router-link>

        <router-link
          to="/html/kirish"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-900 hover:bg-surface-800 border border-surface-700 text-surface-200 hover:text-white font-semibold text-xs transition-all hover:scale-105 active:scale-95"
        >
          <svg class="w-3.5 h-3.5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span>Kurslarni boshlash</span>
        </router-link>
      </div>

      <!-- Quick Courses Shortcuts Grid (Ommabop Kurslar) -->
      <div class="pt-4 border-t border-surface-800/80 w-full max-w-xl">
        <h3 class="text-[10px] font-mono font-bold uppercase tracking-wider text-surface-500 mb-2.5 text-center">
          Ommabop yo‘nalishlar
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <router-link
            to="/html/kirish"
            class="group p-2.5 rounded-xl bg-surface-900/50 hover:bg-surface-800/60 border border-surface-800 hover:border-brand-500/40 transition-all text-left space-y-0.5"
          >
            <div class="flex items-center justify-between">
              <span class="text-base">🌐</span>
              <span class="text-[9px] font-mono text-brand-400 group-hover:translate-x-0.5 transition-transform">Kirish →</span>
            </div>
            <div class="text-xs font-bold text-white group-hover:text-brand-300">HTML Asoslari</div>
            <div class="text-[10px] text-surface-400 truncate">Veb sahifalar skeleti</div>
          </router-link>

          <router-link
            to="/css/kirish"
            class="group p-2.5 rounded-xl bg-surface-900/50 hover:bg-surface-800/60 border border-surface-800 hover:border-blue-500/40 transition-all text-left space-y-0.5"
          >
            <div class="flex items-center justify-between">
              <span class="text-base">🎨</span>
              <span class="text-[9px] font-mono text-blue-400 group-hover:translate-x-0.5 transition-transform">Kirish →</span>
            </div>
            <div class="text-xs font-bold text-white group-hover:text-blue-300">CSS & Dizayn</div>
            <div class="text-[10px] text-surface-400 truncate">Flexbox, Grid va stillar</div>
          </router-link>

          <router-link
            to="/javascript/kirish"
            class="group p-2.5 rounded-xl bg-surface-900/50 hover:bg-surface-800/60 border border-surface-800 hover:border-yellow-500/40 transition-all text-left space-y-0.5"
          >
            <div class="flex items-center justify-between">
              <span class="text-base">⚙️</span>
              <span class="text-[9px] font-mono text-yellow-400 group-hover:translate-x-0.5 transition-transform">Kirish →</span>
            </div>
            <div class="text-xs font-bold text-white group-hover:text-yellow-300">JavaScript</div>
            <div class="text-[10px] text-surface-400 truncate">DOM va asinxron kod</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentPath = computed(() => route.fullPath || '/unknown-route');
</script>
