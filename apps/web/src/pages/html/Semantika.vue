<template>
  <div class="space-y-10 max-w-4xl pb-20 text-left">
    <!-- Breadcrumbs Navigation -->
    <nav class="flex items-center flex-wrap gap-2 text-xs font-mono text-surface-400">
      <router-link to="/html/kirish" class="hover:text-surface-200 transition-colors">HTML Asoslari</router-link>
      <span class="text-surface-600">&gt;</span>
      <span class="text-surface-400">2-Modul</span>
      <span class="text-surface-600">&gt;</span>
      <span class="text-brand-400 font-bold">Semantik HTML5 & A11y</span>
    </nav>

    <!-- Title & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        Semantik HTML5 — Ma’noli va Qulay Veb Tuzilishi
      </h1>
      <p class="text-sm sm:text-base text-surface-300 leading-relaxed font-normal">
        Semantika — har bir elementga o‘z vazifasiga mos nom berish demakdir. U qidiruv botlari (Google) va ekran o‘quvchi dasturlar (Screen Readers) uchun sahifani tushunarli qiladi.
      </p>

      <!-- Premium Metadata Badges -->
      <div class="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono">
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          O‘qish vaqti: 8 daqiqa
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          WCAG 2.2 & Accessibility Tree
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Sectioning Elements
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya + C++ Under-the-hood Toggle -->
    <div class="p-6 rounded-2xl bg-surface-900/40 border border-surface-800/80 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2.5 text-amber-400 font-bold text-sm sm:text-base">
          <span class="text-xl">👶</span>
          <span>5 yoshli bola uchun tushuntirish: Gazeta Sahifasi</span>
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
          Gazetani ochganingizda eng tepasida uning nomi (<code>header</code>), ichida maqolalar (<code>article</code>) va pastida tahririyat manzili (<code>footer</code>) bo‘ladi.
        </p>
        <p class="pt-1">
          Agar hamma narsa bir xil qutilarga (<code>div</code>) solib qo‘yilsa, qaysi biri maqola-yu, qaysi biri menyu ekanligini hech kim ajrata olmasdi!
        </p>
      </div>

      <div v-else class="space-y-2 font-mono text-xs animate-in fade-in duration-200">
        <div class="text-cyan-300 font-bold">Blink Accessibility Tree: AXObjectCache & Landmark Roles</div>
        <pre class="p-3.5 rounded-xl bg-surface-950 border border-surface-800 text-cyan-300 text-[11px] leading-relaxed overflow-x-auto"><code>// third_party/blink/renderer/modules/accessibility/ax_node_object.cc
ax::mojom::Role AXNodeObject::DetermineAccessibilityRole() {
  if (element-&gt;HasTagName(html_names::kMainTag)) return ax::mojom::Role::kMain;
  if (element-&gt;HasTagName(html_names::kNavTag)) return ax::mojom::Role::kNavigation;
  if (element-&gt;HasTagName(html_names::kArticleTag)) return ax::mojom::Role::kArticle;
  return ax::mojom::Role::kGenericContainer; // Faqat div bo'lsa
}</code></pre>
      </div>
    </div>

    <!-- Div Soup vs Semantic HTML Comparison -->
    <section class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 1. "Div Soup" Kasalligi vs Semantik HTML5
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
        <div class="p-4 rounded-xl bg-red-950/20 border border-red-500/30 space-y-2">
          <div class="text-red-400 font-bold flex items-center gap-1.5 text-sm">
            <span>❌</span> Div Soup (Eski va Noto‘g‘ri)
          </div>
          <pre class="p-3 bg-surface-950 rounded-lg text-red-300 text-xs"><code>&lt;div class="header"&gt;
  &lt;div class="nav"&gt;...&lt;/div&gt;
&lt;/div&gt;
&lt;div class="content"&gt;
  &lt;div class="post"&gt;...&lt;/div&gt;
&lt;/div&gt;
&lt;div class="footer"&gt;...&lt;/div&gt;</code></pre>
        </div>

        <div class="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
          <div class="text-emerald-400 font-bold flex items-center gap-1.5 text-sm">
            <span>✓</span> Semantik HTML5 (To‘g‘ri va Standart)
          </div>
          <pre class="p-3 bg-surface-950 rounded-lg text-emerald-300 text-xs"><code>&lt;header&gt;
  &lt;nav&gt;...&lt;/nav&gt;
&lt;/header&gt;
&lt;main&gt;
  &lt;article&gt;...&lt;/article&gt;
&lt;/main&gt;
&lt;footer&gt;...&lt;/footer&gt;</code></pre>
        </div>
      </div>
    </section>

    <!-- Interactive Live Code Editor -->
    <section class="space-y-4 pt-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 2. Jonli Mashq: Semantik Skelet Yarating
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
