<template>
  <div class="space-y-10 max-w-4xl pb-20 text-left">
    <!-- Breadcrumbs Navigation -->
    <nav class="flex items-center flex-wrap gap-2 text-xs font-mono text-surface-400">
      <router-link to="/javascript/kirish" class="hover:text-surface-200 transition-colors">JavaScript Asoslari</router-link>
      <span class="text-surface-600">&gt;</span>
      <span class="text-surface-400">2-Modul</span>
      <span class="text-surface-600">&gt;</span>
      <span class="text-brand-400 font-bold">2.3. Hodisalar & Event Delegation</span>
    </nav>

    <!-- Title & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        DOM Hodisalari — Event Bubbling, Capturing & Delegation
      </h1>
      <p class="text-sm sm:text-base text-surface-300 leading-relaxed font-normal">
        Foydalanuvchining har bir harakati (klik, klaviatura, skroll) brauzerda hodisa (Event) yaratadi. DOM Event Flow (oqimi) 3 ta fazadan iborat.
      </p>

      <!-- Premium Metadata Badges -->
      <div class="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono">
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          O‘qish vaqti: 7 daqiqa
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Event Delegation Pattern
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Passive Listeners (120Hz Scroll)
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya + C++ Under-the-hood Toggle -->
    <div class="p-6 rounded-2xl bg-surface-900/40 border border-surface-800/80 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2.5 text-amber-400 font-bold text-sm sm:text-base">
          <span class="text-xl">👶</span>
          <span>5 yoshli bola uchun tushuntirish: Hovuzga Tosh Otish (Bubbles)</span>
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
          Suv ostidagi pufakcha eng chuqurdan boshlab tepaga qarab ko‘tariladi.
        </p>
        <p class="pt-1">
          HTML da ham tugmani bossangiz, hodisa avval tugmada sodir bo‘ladi, so‘ng uning otasiga (<code>div</code>), keyin <code>body</code> va <code>window</code> gacha pufakcha kabi ko‘tariladi (Bubbling)!
        </p>
      </div>

      <div v-else class="space-y-2 font-mono text-xs animate-in fade-in duration-200">
        <div class="text-cyan-300 font-bold">Blink EventDispatcher: 3-Phase Tree Traversal in C++</div>
        <pre class="p-3.5 rounded-xl bg-surface-950 border border-surface-800 text-cyan-300 text-[11px] leading-relaxed overflow-x-auto"><code>// third_party/blink/renderer/core/dom/events/event_dispatcher.cc
void EventDispatcher::Dispatch() {
  DispatchEventAtCapturing(); // 1. Tepadan pastga (Window -> Target)
  DispatchEventAtTarget();    // 2. Elementning o'zida
  DispatchEventAtBubbling();  // 3. Pastdan tepaga (Target -> Window)
}</code></pre>
      </div>
    </div>

    <!-- Event Delegation (Hard & Deep) -->
    <section class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 1. Event Delegation Pattern
      </h2>

      <div class="p-4 rounded-xl bg-surface-950 border border-surface-800 font-mono text-xs text-cyan-300 leading-relaxed space-y-1">
        <div class="text-surface-500">// 1000 ta &lt;li&gt; ga 1000 ta listener qo'ymasdan, faqat bitta &lt;ul&gt; ga ulash:</div>
        <div>document.<span class="text-yellow-300">querySelector</span>(<span class="text-emerald-300">'ul'</span>).<span class="text-yellow-300">addEventListener</span>(<span class="text-emerald-300">'click'</span>, (e) =&gt; {</div>
        <div class="pl-4"><span class="text-purple-400">if</span> (e.target.<span class="text-yellow-300">matches</span>(<span class="text-emerald-300">'li'</span>)) {</div>
        <div class="pl-8">console.<span class="text-yellow-300">log</span>(<span class="text-emerald-300">'Bosilgan element:'</span>, e.target.textContent);</div>
        <div class="pl-4">}</div>
        <div>});</div>
      </div>
    </section>

    <!-- Interactive Live Code Editor -->
    <section class="space-y-4 pt-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 2. Jonli Mashq: Hodisalarni Quloq Solish va Boshqarish
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
