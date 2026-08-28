<template>
  <div class="space-y-10 max-w-4xl pb-20 text-left">
    <!-- Breadcrumbs Navigation -->
    <nav class="flex items-center flex-wrap gap-2 text-xs font-mono text-surface-400">
      <router-link to="/html/kirish" class="hover:text-surface-200 transition-colors">HTML Asoslari</router-link>
      <span class="text-surface-600">&gt;</span>
      <span class="text-surface-400">3-Modul</span>
      <span class="text-surface-600">&gt;</span>
      <span class="text-brand-400 font-bold">3.1. WHATWG Teglar & 5 Toifasi</span>
    </nav>

    <!-- Title & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        HTML Teglar — 5 Xil Toifasi, Afzalliklari va Sayt Strukturasi
      </h1>
      <p class="text-sm sm:text-base text-surface-300 leading-relaxed font-normal">
        WHATWG HTML Living Standard bo‘yicha barcha 162 ta teg 5 ta asosiy toifaga (Content Models) bo‘linadi. Ularning to‘g‘ri kombinatsiyasi mukammal sayt strukturasini tashkil etadi.
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
          5 Content Models
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Site Structure Skeleton
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya + C++ Under-the-hood Toggle -->
    <div class="p-6 rounded-2xl bg-surface-900/40 border border-surface-800/80 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2.5 text-amber-400 font-bold text-sm sm:text-base">
          <span class="text-xl">👶</span>
          <span>5 yoshli bola uchun tushuntirish: O‘yinchoq Shaharcha Bloklari</span>
        </div>
        <button
          @click="showUnderTheHood = !showUnderTheHood"
          class="px-2.5 py-1 rounded-lg bg-surface-800 hover:bg-surface-700 text-[11px] font-mono text-brand-400 border border-brand-500/30 transition-all cursor-pointer"
        >
          <span>{{ showUnderTheHood ? 'Analogiyaga qaytish' : '🔬 Blink C++ ElementFactory Kodini Ko‘rish' }}</span>
        </button>
      </div>

      <div v-if="!showUnderTheHood" class="space-y-2 text-xs sm:text-sm text-surface-300 leading-relaxed animate-in fade-in duration-200">
        <p>
          Lego shaharchasi qurishda hamma g‘ishtlar har xil vazifani bajaradi:
        </p>
        <ul class="space-y-1 list-disc list-inside text-surface-400 text-xs">
          <li><strong>Poydevor g‘ishti (Metadata)</strong> — shaharchaning pasporti.</li>
          <li><strong>Katta devorlar (Sectioning)</strong> — uylar va ko‘chalarning chegarasi.</li>
          <li><strong>Eshik va qo‘ng‘iroqlar (Interactive)</strong> — bosilganda ochiladigan qismlar.</li>
        </ul>
      </div>

      <div v-else class="space-y-2 font-mono text-xs animate-in fade-in duration-200">
        <div class="text-cyan-300 font-bold">Blink Dvigateli: C++ Tag Name Lookup & Node Creation</div>
        <pre class="p-3.5 rounded-xl bg-surface-950 border border-surface-800 text-cyan-300 text-[11px] leading-relaxed overflow-x-auto"><code>// third_party/blink/renderer/core/html/custom/element_factory.cc
Element* HTMLTagFactory::CreateElement(const AtomicString& local_name, Document& document) {
  if (local_name == html_names::kH1Tag) return MakeGarbageCollected&lt;HTMLHeadingElement&gt;(document, 1);
  if (local_name == html_names::kButtonTag) return MakeGarbageCollected&lt;HTMLButtonElement&gt;(document);
  return MakeGarbageCollected&lt;HTMLUnknownElement&gt;(document, local_name);
}</code></pre>
      </div>
    </div>

    <!-- 5 Tag Categories (Hard & Deep) -->
    <section class="space-y-5">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 1. HTML Teglarining 5 Asosiy Toifasi va Afzalliklari
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
        <!-- 1. Metadata -->
        <div class="p-5 rounded-2xl bg-surface-900 border border-surface-800 space-y-2">
          <div class="text-brand-400 font-bold text-sm">1. Metadata Elementlari</div>
          <div class="text-[11px] text-surface-400">&lt;head&gt;, &lt;title&gt;, &lt;meta&gt;, &lt;link&gt;, &lt;style&gt;</div>
          <p class="text-surface-300 text-xs font-sans leading-relaxed pt-1">
            <strong>Afzalligi:</strong> Brauzer Preload Scanner orqali resurslarni parallel yuklaydi, FCP tezligini 60% ga oshiradi va SEO indekslashni ta'minlaydi.
          </p>
        </div>

        <!-- 2. Sectioning -->
        <div class="p-5 rounded-2xl bg-surface-900 border border-surface-800 space-y-2">
          <div class="text-blue-400 font-bold text-sm">2. Semantik Bo‘limlar (Sectioning)</div>
          <div class="text-[11px] text-surface-400">&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;section&gt;, &lt;footer&gt;</div>
          <p class="text-surface-300 text-xs font-sans leading-relaxed pt-1">
            <strong>Afzalligi:</strong> Ekran o‘quvchilar (AXTree) uchun navigatsiya landmarklarini yaratadi va Google qidiruv botlariga sahifa shajarasini bildiradi.
          </p>
        </div>

        <!-- 3. Grouping -->
        <div class="p-5 rounded-2xl bg-surface-900 border border-surface-800 space-y-2">
          <div class="text-purple-400 font-bold text-sm">3. Guruhlangan Matn (Grouping Content)</div>
          <div class="text-[11px] text-surface-400">&lt;p&gt;, &lt;blockquote&gt;, &lt;pre&gt;, &lt;ol&gt;, &lt;ul&gt;, &lt;figure&gt;, &lt;div&gt;</div>
          <p class="text-surface-300 text-xs font-sans leading-relaxed pt-1">
            <strong>Afzalligi:</strong> Matn o‘qiluvchanligini (Readability) oshiradi va brauzerga paragraflararo to‘g‘ri vertikal oraliq hisoblash imkonini beradi.
          </p>
        </div>

        <!-- 4. Phrasing -->
        <div class="p-5 rounded-2xl bg-surface-900 border border-surface-800 space-y-2">
          <div class="text-amber-400 font-bold text-sm">4. Inline Semantika (Phrasing)</div>
          <div class="text-[11px] text-surface-400">&lt;a&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;code&gt;, &lt;time&gt;, &lt;mark&gt;, &lt;span&gt;</div>
          <p class="text-surface-300 text-xs font-sans leading-relaxed pt-1">
            <strong>Afzalligi:</strong> Matn ichidagi sanalar (&lt;time&gt;), kalit kodlar va giperhavolalarni mashina tushunadigan formatga keltiradi.
          </p>
        </div>

        <!-- 5. Interactive & Form -->
        <div class="p-5 rounded-2xl bg-surface-900 border border-surface-800 space-y-2 md:col-span-2">
          <div class="text-emerald-400 font-bold text-sm">5. Interaktiv, Formalar & Multimedia (Interactive & Embedded)</div>
          <div class="text-[11px] text-surface-400">&lt;form&gt;, &lt;input&gt;, &lt;button&gt;, &lt;dialog&gt;, &lt;details&gt;, &lt;picture&gt;, &lt;video&gt;, &lt;canvas&gt;</div>
          <p class="text-surface-300 text-xs font-sans leading-relaxed pt-1">
            <strong>Afzalligi:</strong> Tashqi og‘ir JS kutubxonalarisiz to‘g‘ridan-to‘g‘ri brauzerning C++ dvigateli darajasida xavfsiz va 60/120 FPS da ishlovchi boy interfeys yaratadi.
          </p>
        </div>
      </div>
    </section>

    <!-- Complete Site Structure Skeleton -->
    <section class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 2. Zamonaviy Ideal Sayt Strukturasi (Production Architecture)
      </h2>

      <div class="p-5 rounded-2xl bg-surface-950 border border-surface-800 font-mono text-xs text-cyan-300 leading-relaxed overflow-x-auto">
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="uz"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;KODX — Professional Platforma&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- 1. Global Sayt Boshi --&gt;
    &lt;header&gt;
      &lt;a href="/"&gt;&lt;img src="logo.svg" alt="Logo"&gt;&lt;/a&gt;
      &lt;nav&gt;
        &lt;a href="/html"&gt;HTML&lt;/a&gt;
        &lt;a href="/css"&gt;CSS&lt;/a&gt;
      &lt;/nav&gt;
    &lt;/header&gt;

    &lt;!-- 2. Asosiy Yagona Mazmun --&gt;
    &lt;main&gt;
      &lt;article&gt;
        &lt;h1&gt;HTML5 Semantik Arxitekturasi&lt;/h1&gt;
        &lt;p&gt;Matn va rasm bloklari...&lt;/p&gt;
      &lt;/article&gt;

      &lt;aside&gt;
        &lt;h3&gt;Yon panel resurslari&lt;/h3&gt;
      &lt;/aside&gt;
    &lt;/main&gt;

    &lt;!-- 3. Global Sayt Yakuni --&gt;
    &lt;footer&gt;
      &lt;p&gt;&amp;copy; 2026 KODX.uz&lt;/p&gt;
    &lt;/footer&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>
    </section>

    <!-- Interactive Live Code Editor -->
    <section class="space-y-4 pt-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 3. Jonli Mashq: Sayt Strukturasi Teglarini Sinab Ko‘ring
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