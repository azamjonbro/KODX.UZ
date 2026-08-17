<template>
  <div class="space-y-10 max-w-4xl pb-16">
    <!-- Header / Breadcrumbs & Title -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <div class="flex items-center gap-2 text-xs font-mono text-brand-400">
        <span>HTML Asoslari</span>
        <span>/</span>
        <span class="text-surface-400">1-Dars</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        HTML Kirish — Veb Sahifaning Skeleti
      </h1>
      <p class="text-base sm:text-lg text-surface-300 leading-relaxed">
        HTML nima, u qanday ishlaydi va nima uchun har qanday veb-sayt aynan undan boshlanishini eng sodda misollar orqali tushunib olamiz.
      </p>

      <div class="flex flex-wrap items-center gap-4 text-xs text-surface-400 pt-2">
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          ⏱️ O‘qish vaqti: 5 daqiqa
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          🎯 Daraja: Boshlang‘ich
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          📚 MDN Standarti: HTML5
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Tushuntirish (Analogy Box) -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-brand-500/10 to-transparent border border-amber-500/20 space-y-3">
      <div class="flex items-center gap-2 text-amber-400 font-bold text-base">
        <span class="text-xl">👶</span>
        <span>5 yoshli bola uchun tushuntirish: Odam va Uy analogiyasi</span>
      </div>
      <p class="text-sm text-surface-200 leading-relaxed">
        Tasavvur qiling, siz <strong>Lego o‘yinchog‘i</strong> yoki yangi <strong>robot</strong> yasayapsiz:
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
        <div class="p-3.5 rounded-xl bg-surface-950/80 border border-surface-800 space-y-1">
          <p class="font-bold text-brand-400">🦴 HTML (Skelet)</p>
          <p class="text-surface-400">Odamning suyaklari yoki uyning g‘ishtlari. U hamma narsaning asosiy o‘rnini belgilaydi.</p>
        </div>
        <div class="p-3.5 rounded-xl bg-surface-950/80 border border-surface-800 space-y-1">
          <p class="font-bold text-blue-400">🎨 CSS (Kiyim & Bo‘yoq)</p>
          <p class="text-surface-400">Chiroyli kiyimlar, sochlarning rangi, ko‘zlarning nuri va xonaning devor qog‘ozi.</p>
        </div>
        <div class="p-3.5 rounded-xl bg-surface-950/80 border border-surface-800 space-y-1">
          <p class="font-bold text-amber-400">🧠 JavaScript (Miya)</p>
          <p class="text-surface-400">Robotning yurishi, gapirishi, tugma bosilganda sakrashi va xursand bo‘lishi.</p>
        </div>
      </div>
    </div>

    <!-- MDN Chuqur Tushuncha -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> HTML o‘zi nima?
      </h2>
      <p class="text-sm sm:text-base text-surface-300 leading-relaxed">
        <strong>HTML</strong> — <em>HyperText Markup Language</em> (Gipermatnli belgilash tili) degan ma’noni anglatadi.
        U dasturlash tili emas, balki <strong>belgilash (markup)</strong> tilidir. Brauzer (Chrome, Safari, Firefox) matn, rasm, video va tugmalarni qanday tartibda joylashtirish kerakligini aynan HTML orqali tushunadi.
      </p>
    </div>

    <!-- Eng Birinchi HTML Hujjat Strukturasi -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> Mukammal HTML Hujjat Strukturasi
      </h2>
      <p class="text-sm text-surface-300">
        Har qanday to‘g‘ri veb-sahifa quyidagi asosiy skeletdan tashkil topadi:
      </p>

      <div class="rounded-xl overflow-hidden border border-surface-800 bg-surface-950">
        <div class="flex items-center justify-between px-4 py-2.5 bg-surface-900 border-b border-surface-800 text-xs font-mono text-surface-400">
          <span>index.html</span>
          <span class="text-brand-400">HTML5</span>
        </div>
        <pre class="p-4 text-xs sm:text-sm font-mono text-surface-200 overflow-x-auto leading-relaxed"><code><span class="text-surface-500">&lt;!-- 1. Brauzerga bu eng zamonaviy HTML5 ekanligini aytamiz --&gt;</span>
<span class="text-purple-400">&lt;!DOCTYPE html&gt;</span>
<span class="text-brand-400">&lt;html</span> <span class="text-amber-300">lang</span>=<span class="text-emerald-300">"uz"</span><span class="text-brand-400">&gt;</span>
  <span class="text-brand-400">&lt;head&gt;</span>
    <span class="text-surface-500">&lt;!-- Sahifa kodi va sarlavhasi (Foydalanuvchiga ko‘rinmaydi, brauzer uchun) --&gt;</span>
    <span class="text-brand-400">&lt;meta</span> <span class="text-amber-300">charset</span>=<span class="text-emerald-300">"UTF-8"</span> <span class="text-brand-400">/&gt;</span>
    <span class="text-brand-400">&lt;title&gt;</span>Mening Birinchi Sahifam<span class="text-brand-400">&lt;/title&gt;</span>
  <span class="text-brand-400">&lt;/head&gt;</span>
  <span class="text-brand-400">&lt;body&gt;</span>
    <span class="text-surface-500">&lt;!-- Sahifaning ko‘rinadigan qismi (Tana) --&gt;</span>
    <span class="text-brand-400">&lt;h1&gt;</span>Salom, Dunyo! 👋<span class="text-brand-400">&lt;/h1&gt;</span>
    <span class="text-brand-400">&lt;p&gt;</span>Men KODX orqali dasturlashni o‘rganmoqdaman.<span class="text-brand-400">&lt;/p&gt;</span>
    <span class="text-brand-400">&lt;button&gt;</span>Meni Bosing!<span class="text-brand-400">&lt;/button&gt;</span>
  <span class="text-brand-400">&lt;/body&gt;</span>
<span class="text-brand-400">&lt;/html&gt;</span></code></pre>
      </div>
    </div>

    <!-- ⚡ Interaktiv Jonli Sinov (Interactive Live Demo) -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">⚡</span> Jonli Sinov: O‘zingiz Sinab Ko‘ring
      </h2>
      <p class="text-sm text-surface-400">
        Quyidagi kodni o‘zgartiring va o‘ng tarafdagi natija qanday o‘zgarishini darhol ko‘ring:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-2">
          <div class="flex items-center justify-between text-xs font-mono text-surface-400">
            <span>Matnni o‘zgartiring:</span>
          </div>
          <input
            v-model="customTitle"
            type="text"
            class="w-full px-3 py-2 text-sm bg-surface-950 border border-surface-700 rounded-lg text-white focus:outline-none focus:border-brand-500"
            placeholder="Sarlavhani kiriting..."
          />
          <textarea
            v-model="customParagraph"
            rows="3"
            class="w-full px-3 py-2 text-sm bg-surface-950 border border-surface-700 rounded-lg text-white focus:outline-none focus:border-brand-500"
            placeholder="Paragraf matni..."
          ></textarea>
        </div>

        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 flex flex-col justify-center">
          <div class="text-xs font-mono text-surface-400 mb-2 pb-1 border-b border-surface-800">
            Brauzerda ko‘rinishi:
          </div>
          <div class="bg-white text-surface-900 p-4 rounded-lg shadow-inner space-y-2">
            <h1 class="text-xl font-bold text-gray-900">{{ customTitle || 'Salom, Dunyo!' }}</h1>
            <p class="text-sm text-gray-700">{{ customParagraph || 'Men KODX orqali dasturlashni o‘rganmoqdaman.' }}</p>
            <button class="px-3 py-1.5 bg-brand-500 text-white rounded text-xs font-semibold hover:bg-brand-600">
              Meni Bosing!
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Muhim Eslatmalar (Callout) -->
    <div class="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 space-y-2">
      <div class="flex items-center gap-2 text-blue-400 font-bold text-sm">
        <span>💡</span>
        <span>MDN Maslahati</span>
      </div>
      <p class="text-xs sm:text-sm text-surface-300 leading-relaxed">
        Har doim <code>&lt;!DOCTYPE html&gt;</code> e’lonini sahifangizning eng birinchi qatoriga qo‘ying. Bu brauzerga sahifani eski standartlar (quirks mode) bilan emas, balki eng yangi standartlar asosida chizishni buyuradi.
      </p>
    </div>

    <!-- Foydali Havolalar & GitHub -->
    <div class="pt-6 border-t border-surface-800 flex flex-wrap items-center justify-between gap-4">
      <a
        href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-xs font-medium text-brand-400 hover:text-brand-300 hover:underline"
      >
        <span>📖 Rasmiy MDN Hujjatlari: Introduction to HTML →</span>
      </a>

      <router-link
        to="/html/taglar"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors"
      >
        <span>Keyingi Dars: HTML Teglar →</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const customTitle = ref('Salom, KODX O‘quvchisi! 🚀');
const customParagraph = ref('HTML bu veb olamining poydevori. Har bir sayt shu yerdan boshlanadi.');
</script>