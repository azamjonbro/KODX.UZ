<template>
  <div class="space-y-8 max-w-4xl pb-16">
    <!-- Breadcrumbs Navigation -->
    <nav class="flex items-center flex-wrap gap-2 text-xs font-mono text-surface-400">
      <router-link to="/html/kirish" class="hover:text-surface-200 transition-colors">HTML Asoslari</router-link>
      <span class="text-surface-600">&gt;</span>
      <span class="hover:text-surface-200">1-Modul</span>
      <span class="text-surface-600">&gt;</span>
      <span class="hover:text-surface-200">2. Web Qanday Ishlaydi</span>
      <span class="text-surface-600">&gt;</span>
      <span class="text-brand-400 font-semibold">2.1. Client va Server nima?</span>
    </nav>

    <!-- Page Title & Header Meta -->
    <div class="space-y-4">
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        HTML Kirish — Web Sahifaning Skeleti
      </h1>
      <p class="text-sm sm:text-base text-surface-300 leading-relaxed font-normal">
        HTML nima, u qanday ishlaydi va nima uchun har qanday web-sayt aynan undan boshlanishini eng sodda misollar orqali tushunib olamiz.
      </p>

      <!-- Metadata Badges -->
      <div class="flex flex-wrap items-center gap-2.5 pt-1 text-xs">
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-lg border border-surface-800 text-surface-300">
          <span>⏱️</span> O‘qish vaqti: 5 daqiqa
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-lg border border-surface-800 text-surface-300">
          <span>🚀</span> Daraja: Boshlang‘ich
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-lg border border-surface-800 text-surface-300">
          <span>🌐</span> MDN Standarti: HTML Living Standard
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Tushuntirish: Odam va Uy analogiyasi (Callout Box) -->
    <div class="p-6 rounded-2xl bg-surface-900/40 border border-surface-800/80 space-y-4">
      <div class="flex items-center gap-2 text-amber-400 font-bold text-sm sm:text-base">
        <span class="text-xl">👶</span>
        <span>5 yoshli bola uchun tushuntirish: Odam va Uy analogiyasi</span>
      </div>
      <p class="text-xs sm:text-sm text-surface-300 leading-relaxed">
        Tasavvur qiling, siz <strong>Lego o‘yinchog‘i</strong> yoki yangi <strong>robot</strong> yasayapsiz:
      </p>

      <!-- 3 Analogy Cards (HTML Skelet, CSS Kiyim & Bo'yoq, JavaScript Miya) -->
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

    <!-- Section 1: HTML o'zi nima? -->
    <section id="html-nima" class="space-y-3 pt-2">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400 font-bold">#</span> HTML o‘zi nima?
      </h2>
      <p class="text-xs sm:text-sm text-surface-300 leading-relaxed">
        <strong>HTML</strong> — <em>HyperText Markup Language</em> (Gipermatnli belgilash tili) degan ma’noni anglatadi.
        U dasturlash tili emas, balki <strong>belgilash (markup)</strong> tilidir. Brauzer (Chrome, Safari, Firefox) matn, rasm, video va tugmalarni qanday tartibda joylashtirish kerakligini aynan HTML orqali tushunadi.
      </p>
    </section>

    <!-- Section 2: Mukammal HTML Hujjat Strukturasi -->
    <section id="hujjat-strukturasi" class="space-y-3 pt-2">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400 font-bold">#</span> Mukammal HTML Hujjat Strukturasi
      </h2>
      <p class="text-xs sm:text-sm text-surface-300">
        Har qanday to‘g‘ri web-sahifa quyidagi asosiy skeletdan tashkil topadi:
      </p>

      <!-- Code Snippet Box -->
      <div class="rounded-xl overflow-hidden border border-surface-800 bg-surface-950/90 shadow-xl">
        <!-- Top bar with language and copy button -->
        <div class="flex items-center justify-between px-4 py-2.5 bg-surface-900/90 border-b border-surface-800 text-xs font-mono text-surface-400">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-white uppercase tracking-wide">HTML</span>
          </div>
          <button
            @click="copyCode"
            class="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-800 hover:bg-surface-700 text-surface-300 hover:text-white transition-colors text-[11px]"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
            <span>{{ isCopied ? 'Nusxalandi! ✓' : 'Nusxa olish' }}</span>
          </button>
        </div>

        <!-- Code Block Content -->
        <div class="p-4 overflow-x-auto font-mono text-xs leading-relaxed flex">
          <!-- Line Numbers -->
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
          <!-- Syntax Highlighted Code -->
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

    <!-- Additional sections for TOC matching -->
    <section id="tarix-qisqacha" class="space-y-3 pt-2">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400 font-bold">#</span> HTML tarixidan qisqacha
      </h2>
      <p class="text-xs sm:text-sm text-surface-300 leading-relaxed">
        1991-yilda Tim Berners-Lee tomonidan CERN laboratoriyasida yaratilgan HTML bugungi kunda milliardlab foydalanuvchilarning kundalik axborot almashish poydevoriga aylandi.
      </p>
    </section>

    <section id="qanday-ishlaydi" class="space-y-3 pt-2">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400 font-bold">#</span> HTML qanday ishlaydi?
      </h2>
      <p class="text-xs sm:text-sm text-surface-300 leading-relaxed">
        Foydalanuvchi veb-sayt manzilini kiritganda, server HTML faylni yuboradi. Brauzer ushbu kodni satrma-satr o‘qib, xotirada DOM (Document Object Model) daraxtini hosil qiladi va ekranda chizadi.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isCopied = ref(false);

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