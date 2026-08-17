<template>
  <div class="space-y-10 max-w-4xl pb-20 text-left">
    <!-- Breadcrumbs Navigation -->
    <nav class="flex items-center flex-wrap gap-2 text-xs font-mono text-surface-400">
      <router-link to="/html/kirish" class="hover:text-surface-200 transition-colors">HTML Asoslari</router-link>
      <span class="text-surface-600">&gt;</span>
      <span class="text-surface-400">1-Modul</span>
      <span class="text-surface-600">&gt;</span>
      <span class="text-surface-400">2. Web Qanday Ishlaydi</span>
      <span class="text-surface-600">&gt;</span>
      <span class="text-brand-400 font-bold">2.1. Client va Server nima?</span>
    </nav>

    <!-- Page Title & Header Meta -->
    <div class="space-y-4">
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        HTML Kirish — Web Sahifaning Skeleti
      </h1>
      <p class="text-sm sm:text-base text-surface-300 leading-relaxed font-normal">
        HTML nima, u qanday ishlaydi va nima uchun har qanday web-sayt aynan undan boshlanishini eng sodda misollar va chuqur brauzer injiniringi orqali tushunib olamiz.
      </p>

      <!-- Premium Metadata Badges -->
      <div class="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono">
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          O‘qish vaqti: 5 daqiqa
        </span>

        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Daraja: Boshlang‘ichdan Chuqur
        </span>

        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          WHATWG Living Standard
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Tushuntirish + Ostidagi Real C++ Kodi (Callout Box) -->
    <div class="p-6 rounded-2xl bg-surface-900/40 border border-surface-800/80 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2.5 text-amber-400 font-bold text-sm sm:text-base">
          <span class="text-xl">👶</span>
          <span>5 yoshli bola uchun tushuntirish: Odam va Uy analogiyasi</span>
        </div>
        <button
          @click="showUnderTheHood = !showUnderTheHood"
          class="px-2.5 py-1 rounded-lg bg-surface-800 hover:bg-surface-700 text-[11px] font-mono text-brand-400 border border-brand-500/30 transition-all cursor-pointer flex items-center gap-1"
        >
          <span>{{ showUnderTheHood ? 'Analogiyaga qaytish' : '🔬 Ostidagi Kodni Ko‘rish' }}</span>
        </button>
      </div>

      <!-- Regular Analogies View -->
      <div v-if="!showUnderTheHood" class="space-y-4 animate-in fade-in duration-200">
        <p class="text-xs sm:text-sm text-surface-300 leading-relaxed">
          Tasavvur qiling, siz <strong>Lego o‘yinchog‘i</strong> yoki yangi <strong>robot</strong> yasayapsiz:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
          <!-- HTML Card -->
          <div class="p-4 rounded-xl bg-surface-950/90 border border-surface-800/90 flex gap-3 items-start">
            <div class="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-md">
              5
            </div>
            <div class="space-y-1">
              <h4 class="text-xs font-bold text-white">HTML (Skelet)</h4>
              <p class="text-[11px] text-surface-400 leading-relaxed">
                Odamning suyaklari yoki uyning g‘ishtlari. U hamma narsaning asosiy o‘rnini belgilaydi.
              </p>
            </div>
          </div>

          <!-- CSS Card -->
          <div class="p-4 rounded-xl bg-surface-950/90 border border-surface-800/90 flex gap-3 items-start">
            <div class="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-md">
              3
            </div>
            <div class="space-y-1">
              <h4 class="text-xs font-bold text-white">CSS (Kiyim & Bo‘yoq)</h4>
              <p class="text-[11px] text-surface-400 leading-relaxed">
                Chiroyli kiyimlar, sochlarning rangi, ko‘zlarning nuri va xonaning devor qog‘ozi.
              </p>
            </div>
          </div>

          <!-- JS Card -->
          <div class="p-4 rounded-xl bg-surface-950/90 border border-surface-800/90 flex gap-3 items-start">
            <div class="w-8 h-8 rounded-lg bg-yellow-500 flex items-center justify-center text-surface-950 font-black text-xs shrink-0 shadow-md">
              JS
            </div>
            <div class="space-y-1">
              <h4 class="text-xs font-bold text-white">JavaScript (Miya)</h4>
              <p class="text-[11px] text-surface-400 leading-relaxed">
                Robotning yurishi, gapirishi, tugma bosilganda sakrashi va xursand bo‘lishi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Under-the-hood Real C++ Engine Code View -->
      <div v-else class="space-y-3 font-mono text-xs animate-in fade-in duration-200">
        <div class="text-[11px] text-purple-300 font-bold flex items-center gap-2">
          <span>⚙️</span>
          <span>Brauzer Dvigateli Ichida: HTML/CSS/JS C++ Obektlar O‘zaro Aloqasi</span>
        </div>
        <pre class="p-3.5 rounded-xl bg-surface-950 border border-surface-800 text-cyan-300 text-[11px] leading-relaxed overflow-x-auto"><code><span class="text-surface-500">// 1. HTML: Xotirada DOM Elementini yaratish</span>
<span class="text-purple-400">auto*</span> element = <span class="text-blue-400">MakeGarbageCollected&lt;HTMLHeadingElement&gt;</span>(document);
element-&gt;SetInnerHTML(<span class="text-emerald-300">"Salom, Dunyo!"</span>);

<span class="text-surface-500">// 2. CSS: Rang va Shrift stillarini hisoblash (CSSOM)</span>
<span class="text-purple-400">auto*</span> style = document-&gt;GetStyleResolver().ResolveStyle(element);
element-&gt;SetComputedStyle(style); <span class="text-surface-500">// color: #22c55e</span>

<span class="text-surface-500">// 3. JavaScript: V8 Event Listenerni C++ obyektiga ulash</span>
element-&gt;AddEventListener(<span class="text-emerald-300">"click"</span>, v8_callback_function);</code></pre>
      </div>
    </div>

    <!-- 🎬 Video-Uslubidagi Interaktiv Brauzer Visualizatori (Interactive Engine Visualizer) -->
    <section id="brauzer-oqishi" class="space-y-3">
      <div class="flex items-center justify-between">
        <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
          <span class="text-brand-400 font-bold">#</span> Brauzer HTML ni qanday o‘qiydi?
        </h2>
        <span class="text-xs font-mono text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded-lg border border-brand-500/20">
          🎬 Interaktiv Simulyator
        </span>
      </div>
      <p class="text-xs sm:text-sm text-surface-300 leading-relaxed">
        Quyidagi interaktiv video simulyatordan foydalanib, serverdan baytlar kelishidan boshlab ekranda piksellar chizilishigacha bo‘lgan barcha bosqichlarni nazorat qiling:
      </p>

      <InteractiveEngineVisualizer />
    </section>

    <!-- Section 1: HTML o'zi nima? -->
    <section id="html-nima" class="space-y-3 pt-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400 font-bold">#</span> HTML o‘zi nima?
      </h2>
      <p class="text-xs sm:text-sm text-surface-300 leading-relaxed">
        <strong>HTML</strong> — <em>HyperText Markup Language</em> (Gipermatnli belgilash tili) degan ma’noni anglatadi.
        U dasturlash tili emas, balki <strong>belgilash (markup)</strong> tilidir. Brauzer (Chrome, Safari, Firefox) matn, rasm, video va tugmalarni qanday tartibda joylashtirish kerakligini aynan HTML orqali tushunadi.
      </p>
    </section>

    <!-- Section 2: Mukammal HTML Hujjat Strukturasi -->
    <section id="hujjat-strukturasi" class="space-y-3 pt-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400 font-bold">#</span> Mukammal HTML Hujjat Strukturasi
      </h2>
      <p class="text-xs sm:text-sm text-surface-300">
        Har qanday to‘g‘ri web-sahifa quyidagi asosiy skeletdan tashkil topadi:
      </p>

      <!-- Code Snippet Box -->
      <div class="rounded-xl overflow-hidden border border-surface-800 bg-surface-950/90 shadow-xl">
        <div class="flex items-center justify-between px-4 py-2.5 bg-surface-900/90 border-b border-surface-800 text-xs font-mono text-surface-400">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-white uppercase tracking-wide">HTML5 STANDARTI</span>
          </div>
          <button
            @click="copyCode"
            class="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-800 hover:bg-surface-700 text-surface-300 hover:text-white transition-colors text-[11px] cursor-pointer"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
            <span>{{ isCopied ? 'Nusxalandi! ✓' : 'Nusxa olish' }}</span>
          </button>
        </div>

        <div class="p-4 overflow-x-auto font-mono text-xs leading-relaxed flex">
          <div class="select-none text-surface-600 pr-4 text-right space-y-0.5 border-r border-surface-800/80 mr-4">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
          </div>
          <pre class="text-surface-200"><code><span class="text-surface-500">&lt;!DOCTYPE html&gt;</span>
<span class="text-brand-400">&lt;html</span> <span class="text-amber-300">lang</span>=<span class="text-emerald-300">"uz"</span><span class="text-brand-400">&gt;</span>
  <span class="text-brand-400">&lt;head&gt;</span>
    <span class="text-brand-400">&lt;meta</span> <span class="text-amber-300">charset</span>=<span class="text-emerald-300">"UTF-8"</span><span class="text-brand-400">&gt;</span>
    <span class="text-brand-400">&lt;meta</span> <span class="text-amber-300">name</span>=<span class="text-emerald-300">"viewport"</span> <span class="text-amber-300">content</span>=<span class="text-emerald-300">"width=device-width, initial-scale=1.0"</span><span class="text-brand-400">&gt;</span>
    <span class="text-brand-400">&lt;title&gt;</span>Mening Birinchi Sahifam<span class="text-brand-400">&lt;/title&gt;</span>
  <span class="text-brand-400">&lt;/head&gt;</span>
  <span class="text-brand-400">&lt;body&gt;</span>
    <span class="text-brand-400">&lt;h1&gt;</span>Salom, Dunyo!<span class="text-brand-400">&lt;/h1&gt;</span>
  <span class="text-brand-400">&lt;/body&gt;</span>
<span class="text-brand-400">&lt;/html&gt;</span></code></pre>
        </div>
      </div>
    </section>

    <!-- 🔬 Hard & Deep Engine Architecture Component -->
    <section id="asosiy-qismlar" class="pt-4">
      <BrowserInternalsDeepDive />
    </section>

    <!-- ⚡ Jonli Kod Muharriri va Xotira Inspektori (Interactive Code Playground) -->
    <section id="qanday-ishlaydi" class="space-y-3 pt-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400 font-bold">#</span> Interaktiv Amaliyot: O‘zingiz Kod Yozing
      </h2>
      <p class="text-xs sm:text-sm text-surface-300 leading-relaxed">
        Quyidagi kodni o‘zgartiring va DOM daraxti hamda xotira qanday o‘zgarishini real vaqtda kuzating:
      </p>

      <InteractiveCodePlayground />
    </section>

    <!-- Additional sections for TOC matching -->
    <section id="tarix-qisqacha" class="space-y-3 pt-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400 font-bold">#</span> HTML tarixidan qisqacha
      </h2>
      <p class="text-xs sm:text-sm text-surface-300 leading-relaxed">
        1991-yilda Tim Berners-Lee tomonidan CERN laboratoriyasida yaratilgan HTML bugungi kunda milliardlab foydalanuvchilarning kundalik axborot almashish poydevoriga aylandi.
      </p>
    </section>

    <section id="keyingi-qadam" class="space-y-3 pt-4 border-t border-surface-800">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400 font-bold">#</span> Keyingi qadam
      </h2>
      <p class="text-xs sm:text-sm text-surface-300 leading-relaxed">
        Endi siz HTML nima ekanligini, uning brauzer xotirasida qanday tahlil qilinishini bilasiz. Keyingi darsda brauzerning tarmoq va HTTP mexanizmlari bilan chuqurroq tanishamiz.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InteractiveEngineVisualizer from '../../components/InteractiveEngineVisualizer.vue';
import InteractiveCodePlayground from '../../components/InteractiveCodePlayground.vue';
import BrowserInternalsDeepDive from '../../components/BrowserInternalsDeepDive.vue';

const isCopied = ref(false);
const showUnderTheHood = ref(false);

const sampleCode = `<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mening Birinchi Sahifam</title>
  </head>
  <body>
    <h1>Salom, Dunyo!</h1>
  </body>
</html>`;

function copyCode() {
  navigator.clipboard.writeText(sampleCode);
  isCopied.value = true;
  setTimeout(() => {
    isCopied.value = false;
  }, 2000);
}
</script>