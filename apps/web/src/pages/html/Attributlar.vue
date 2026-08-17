<template>
  <div class="space-y-10 max-w-4xl pb-16">
    <!-- Title & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <div class="flex items-center gap-2 text-xs font-mono text-brand-400">
        <span>HTML Asoslari</span>
        <span>/</span>
        <span class="text-surface-400">3-Dars</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        HTML Atributlar — Teglarning Qo‘shimcha Qobiliyatlari
      </h1>
      <p class="text-base sm:text-lg text-surface-300 leading-relaxed">
        Atributlar tegning xulq-atvori, ko‘rinishi, manzili yoki shaxsiy identifikatorini belgilab beruvchi maxsus kalit so‘zlardir.
      </p>

      <div class="flex flex-wrap items-center gap-4 text-xs text-surface-400 pt-2">
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          ⏱️ O‘qish vaqti: 6 daqiqa
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          🎯 Daraja: Boshlang‘ich
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          📚 MDN: HTML Attributes Guide
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-brand-500/10 to-transparent border border-emerald-500/20 space-y-3">
      <div class="flex items-center gap-2 text-emerald-400 font-bold text-base">
        <span class="text-xl">👶</span>
        <span>5 yoshli bola uchun tushuntirish: Odamning Pasporti va Kiyimi</span>
      </div>
      <p class="text-sm text-surface-200 leading-relaxed">
        Teg bu shunchaki <strong>"Bola"</strong>. Lekin qaysi bola?
      </p>
      <ul class="text-xs text-surface-300 space-y-1.5 list-disc list-inside">
        <li><code>ism="Ali"</code> — uning ismi nimaligini bildiradi.</li>
        <li><code>kiyim-rangi="qizil"</code> — qanday kiyimda ekanligini aytadi.</li>
        <li><code>yoshi="5"</code> — uning yoshini bildiradi.</li>
      </ul>
      <p class="text-xs text-surface-400 pt-1">
        HTMLda ham <code>&lt;a&gt;</code> shunchaki havola. Lekin <code>href="https://google.com"</code> atributi uni qayerga olib borishini ko‘rsatadi!
      </p>
    </div>

    <!-- Atribut Sintaksisi -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> Sintaksis: Atributlar Qanday Yoziladi?
      </h2>
      <p class="text-sm text-surface-300">
        Atributlar har doim <strong>ochuvchi teg</strong> ichida, <code>nomi="qiymati"</code> ko‘rinishida yoziladi:
      </p>

      <div class="p-4 rounded-xl bg-surface-950 border border-surface-800 font-mono text-xs sm:text-sm">
        <div class="text-surface-500 mb-2">// Umumiy qoida:</div>
        <span class="text-brand-400">&lt;teg-nomi</span> <span class="text-amber-300">atribut-nomi</span>=<span class="text-emerald-300">"qiymat"</span><span class="text-brand-400">&gt;</span>Matn<span class="text-brand-400">&lt;/teg-nomi&gt;</span>
      </div>
    </div>

    <!-- ⚡ Interaktiv Atributlar Sinov Maydoni -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">⚡</span> Jonli Sinov: Atributlarni O‘zgartiring
      </h2>
      <p class="text-sm text-surface-400">
        Quyidagi boshqaruv elementlari orqali atributlarni o‘zgartiring va natijani ko‘ring:
      </p>

      <div class="p-5 rounded-2xl bg-surface-900 border border-surface-800 space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <!-- Input Type toggle -->
          <div class="space-y-1.5">
            <label class="text-xs font-semibold text-surface-300">Input turi (type):</label>
            <select
              v-model="inputType"
              class="w-full px-3 py-2 bg-surface-950 border border-surface-700 rounded-lg text-xs text-white focus:outline-none focus:border-brand-500"
            >
              <option value="text">text (Oddiy matn)</option>
              <option value="password">password (Maxfiy parol)</option>
              <option value="checkbox">checkbox (Tanlov)</option>
              <option value="color">color (Rang tanlash)</option>
            </select>
          </div>

          <!-- Placeholder -->
          <div class="space-y-1.5">
            <label class="text-xs font-semibold text-surface-300">Yordamchi matn (placeholder):</label>
            <input
              v-model="placeholderText"
              type="text"
              class="w-full px-3 py-2 bg-surface-950 border border-surface-700 rounded-lg text-xs text-white focus:outline-none focus:border-brand-500"
            />
          </div>

          <!-- Disabled state -->
          <div class="flex items-center gap-2 pt-6">
            <input
              id="disCheckbox"
              v-model="isDisabled"
              type="checkbox"
              class="w-4 h-4 rounded border-surface-700 text-brand-500 focus:ring-brand-500"
            />
            <label for="disCheckbox" class="text-xs font-semibold text-surface-300 cursor-pointer">
              disabled (Faolsizlantirish)
            </label>
          </div>
        </div>

        <!-- Generated Code & Live Preview -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div class="p-4 rounded-xl bg-surface-950 border border-surface-800 space-y-2">
            <div class="text-xs font-mono text-surface-500">Hosil bo‘lgan HTML kodi:</div>
            <pre class="text-xs font-mono text-emerald-300"><code>&lt;input
  type="{{ inputType }}"
  placeholder="{{ placeholderText }}"{{ isDisabled ? '\n  disabled' : '' }}
/&gt;</code></pre>
          </div>

          <div class="p-4 rounded-xl bg-white text-surface-950 flex flex-col justify-center items-center">
            <div class="text-xs font-semibold text-gray-500 mb-2">Brauzerdagi Natija:</div>
            <input
              :type="inputType"
              :placeholder="placeholderText"
              :disabled="isDisabled"
              class="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Eng Mashhur Atributlar Jadvali -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> Eng Ko‘p Uchraydigan Global & Maxsus Atributlar
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-1.5">
          <span class="font-mono font-bold text-brand-400 text-sm">id="birlik"</span>
          <p class="text-surface-300">Sahifada yagona bo‘lgan maxsus nom. Bir sahifada bitta ID faqat bitta elementga beriladi.</p>
        </div>

        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-1.5">
          <span class="font-mono font-bold text-brand-400 text-sm">class="tugma asosiy"</span>
          <p class="text-surface-300">CSS va JavaScript uchun guruhlash nomi. Bir nechta element bir xil klassga ega bo‘lishi mumkin.</p>
        </div>

        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-1.5">
          <span class="font-mono font-bold text-brand-400 text-sm">src="rasm.jpg"</span>
          <p class="text-surface-300">Faqat <code>&lt;img&gt;</code>, <code>&lt;script&gt;</code> va <code>&lt;iframe&gt;</code> teglari uchun faylning joylashgan manzilini bildiradi.</p>
        </div>

        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-1.5">
          <span class="font-mono font-bold text-brand-400 text-sm">alt="Mushukcha rasmi"</span>
          <p class="text-surface-300">Rasm yuklanmay qolganda yoki ko‘zi ojiz insonlar uchun ekranni o‘quvchi dasturlar o‘qiydigan muqobil matn.</p>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="pt-6 border-t border-surface-800 flex flex-wrap items-center justify-between gap-4">
      <router-link
        to="/html/taglar"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-900 hover:bg-surface-800 text-surface-300 text-xs font-semibold border border-surface-700 transition-colors"
      >
        <span>← 2-Dars: HTML Teglar</span>
      </router-link>

      <router-link
        to="/css/kirish"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors"
      >
        <span>Keyingi Bo‘lim: CSS Kirish →</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputType = ref('text');
const placeholderText = ref('Ismingizni kiriting...');
const isDisabled = ref(false);
</script>