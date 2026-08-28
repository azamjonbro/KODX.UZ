<template>
  <div class="space-y-10 max-w-4xl pb-20 text-left">
    <!-- Breadcrumbs Navigation -->
    <nav class="flex items-center flex-wrap gap-2 text-xs font-mono text-surface-400">
      <router-link to="/javascript/kirish" class="hover:text-surface-200 transition-colors">JavaScript Asoslari</router-link>
      <span class="text-surface-600">&gt;</span>
      <span class="text-surface-400">3-Modul</span>
      <span class="text-surface-600">&gt;</span>
      <span class="text-brand-400 font-bold">3.1. Asinxron JS & Event Loop</span>
    </nav>

    <!-- Title & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        Asinxron JavaScript — Event Loop, Microtasks & Async/Await
      </h1>
      <p class="text-sm sm:text-base text-surface-300 leading-relaxed font-normal">
        JavaScript bir oqimli (single-threaded) bo‘lishiga qaramay, Event Loop va asinxron Web API lar orqali bir vaqtning o‘zida serverdan ma’lumot olish, animatsiyalarni chizish va foydalanuvchi kliklariga javob berishni qotirmasdan (non-blocking) bajaradi.
      </p>

      <!-- Premium Metadata Badges -->
      <div class="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono">
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          O‘qish vaqti: 10 daqiqa
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Microtask vs Macrotask Queue
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Promises & Async/Await
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya + C++ Under-the-hood Toggle -->
    <div class="p-6 rounded-2xl bg-surface-900/40 border border-surface-800/80 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2.5 text-amber-400 font-bold text-sm sm:text-base">
          <span class="text-xl">👶</span>
          <span>5 yoshli bola uchun tushuntirish: Restorandagi Chaqiruv Pageri</span>
        </div>
        <button
          @click="showUnderTheHood = !showUnderTheHood"
          class="px-2.5 py-1 rounded-lg bg-surface-800 hover:bg-surface-700 text-[11px] font-mono text-brand-400 border border-brand-500/30 transition-all cursor-pointer"
        >
          <span>{{ showUnderTheHood ? 'Analogiyaga qaytish' : '🔬 Ostidagi Kodni Ko‘rish' }}</span>
        </button>
      </div>

      <div v-if="!showUnderTheHood" class="space-y-2 text-xs sm:text-sm text-surface-300 leading-relaxed animate-in fade-in duration-200">
        <p>
          Fast-food kafeda buyurtma bergach, taom pishguncha kassa oldida qotib turmaysiz. Sizga raqamli <strong>pager</strong> berishadi va joyingizga borib o‘tirasiz.
        </p>
        <p class="pt-1">
          Taom tayyor bo‘lganda pager jiringlaydi (Promise resolved!) va borib issiq pitsani olasiz!
        </p>
      </div>

      <div v-else class="space-y-2 font-mono text-xs animate-in fade-in duration-200">
        <div class="text-cyan-300 font-bold">V8 Event Loop: Microtask Queue Execution in C++</div>
        <pre class="p-3.5 rounded-xl bg-surface-950 border border-surface-800 text-cyan-300 text-[11px] leading-relaxed overflow-x-auto"><code>// v8/src/execution/microtask-queue.cc
void MicrotaskQueue::PerformCheckpoint(Isolate* isolate) {
  // Call Stack bo'shagan zahoti barcha Promise microtasklarini birinchi navbatda bajarish
  while (!microtasks_.empty()) {
    ExecuteMicrotask(microtasks_.pop_front());
  }
}</code></pre>
      </div>
    </div>

    <!-- Event Loop Hierarchy (Hard & Deep) -->
    <section class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 1. Navbatlar Tartibi (Queue Priority)
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
        <div class="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-2">
          <div class="text-purple-400 font-bold text-sm">1. Call Stack (Sinxron)</div>
          <p class="text-surface-300 text-[11px] font-sans leading-relaxed">
            Hozir bajarilayotgan oddiy funksiya va amallar. U to‘liq bo‘shamaguncha boshqa navbatlar kutiladi.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
          <div class="text-emerald-400 font-bold text-sm">2. Microtasks (Yuqori Navbat)</div>
          <p class="text-surface-300 text-[11px] font-sans leading-relaxed">
            <code>Promise.then()</code>, <code>async/await</code>, <code>queueMicrotask()</code>. Call Stack bo‘shagan soniyaning o‘zidayoq bajariladi!
          </p>
        </div>

        <div class="p-4 rounded-xl bg-blue-950/20 border border-blue-500/30 space-y-2">
          <div class="text-blue-400 font-bold text-sm">3. Macrotasks (Oddiy Navbat)</div>
          <p class="text-surface-300 text-[11px] font-sans leading-relaxed">
            <code>setTimeout()</code>, <code>setInterval()</code>, <code>DOM Event callbacks</code>. Microtasklar tugagandan so‘ng navbat oladi.
          </p>
        </div>
      </div>
    </section>

    <!-- Interactive Live Code Editor -->
    <section class="space-y-4 pt-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 2. Jonli Mashq: Async/Await va Fetch So‘rovi
      </h2>
      <InteractiveCodePlayground />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InteractiveCodePlayground from '../../components/InteractiveCodePlayground.vue';

const showUnderTheHood = ref(false);
</script>
