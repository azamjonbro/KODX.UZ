<template>
  <div class="space-y-10 max-w-4xl pb-16">
    <!-- Title & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <div class="flex items-center gap-2 text-xs font-mono text-brand-400">
        <span>CSS Asoslari</span>
        <span>/</span>
        <span class="text-surface-400">1-Dars</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        CSS Kirish — Veb Sahifaga Jon va Chiroy Bag‘ishlash
      </h1>
      <p class="text-base sm:text-lg text-surface-300 leading-relaxed">
        CSS nima, u HTML bilan qanday bog‘lanadi va veb-saytni oddiy qora-oq matndan zamonaviy vizual asarga qanday aylantiradi?
      </p>

      <div class="flex flex-wrap items-center gap-4 text-xs text-surface-400 pt-2">
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          ⏱️ O‘qish vaqti: 6 daqiqa
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          🎯 Daraja: Boshlang‘ich
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          📚 MDN: CSS Basics
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-transparent border border-pink-500/20 space-y-3">
      <div class="flex items-center gap-2 text-pink-400 font-bold text-base">
        <span class="text-xl">👶</span>
        <span>5 yoshli bola uchun tushuntirish: Bo‘yash Kitobi (Coloring Book)</span>
      </div>
      <p class="text-sm text-surface-200 leading-relaxed">
        Tasavvur qiling, sizga <strong>qora-oq chizilgan rasmlar daftari</strong> berildi. Bu — <strong>HTML</strong>.
      </p>
      <p class="text-xs text-surface-300 leading-relaxed">
        Siz qo‘lingizga <strong>rangli qalamlar va mo‘yqalam</strong> olasiz: uyni moviy rangga, quyoshni yorqin sariqqa, daraxtlarni zumrad yashilga bo‘yaysiz. Mana shu sizning rangli qalamlaringiz — <strong>CSS</strong> deb ataladi!
      </p>
    </div>

    <!-- CSS nima? -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> CSS qanday ishlaydi?
      </h2>
      <p class="text-sm sm:text-base text-surface-300 leading-relaxed">
        <strong>CSS</strong> — <em>Cascading Style Sheets</em> (Kaskadli uslublar jadvallari). U HTML elementlarining rangi, o‘lchami, shrifti, joylashuvi (layout) va animatsiyalarini boshqaradi.
      </p>
    </div>

    <!-- ⚡ Interaktiv CSS Stil Laboratoriyasi -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">⚡</span> Jonli Sinov: Tugmani Stil Bilan O‘zgartiring
      </h2>
      <p class="text-sm text-surface-400">
        Quyidagi slayderlar va ranglarni o‘zgartirib, CSS qoidalarining darhol ta’sirini ko‘ring:
      </p>

      <div class="p-5 rounded-2xl bg-surface-900 border border-surface-800 space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <!-- Background Color -->
          <div class="space-y-1.5">
            <label class="text-xs font-semibold text-surface-300">Orqa fon rangi (background):</label>
            <div class="flex items-center gap-2">
              <input
                v-model="boxBg"
                type="color"
                class="w-10 h-8 rounded border border-surface-700 cursor-pointer bg-transparent"
              />
              <span class="font-mono text-xs text-surface-400">{{ boxBg }}</span>
            </div>
          </div>

          <!-- Text Color -->
          <div class="space-y-1.5">
            <label class="text-xs font-semibold text-surface-300">Matn rangi (color):</label>
            <div class="flex items-center gap-2">
              <input
                v-model="boxColor"
                type="color"
                class="w-10 h-8 rounded border border-surface-700 cursor-pointer bg-transparent"
              />
              <span class="font-mono text-xs text-surface-400">{{ boxColor }}</span>
            </div>
          </div>

          <!-- Border Radius -->
          <div class="space-y-1.5">
            <label class="text-xs font-semibold text-surface-300">Burchak radiusi: {{ borderRadius }}px</label>
            <input
              v-model="borderRadius"
              type="range"
              min="0"
              max="30"
              class="w-full accent-brand-500"
            />
          </div>

          <!-- Padding -->
          <div class="space-y-1.5">
            <label class="text-xs font-semibold text-surface-300">Ichki masofa: {{ boxPadding }}px</label>
            <input
              v-model="boxPadding"
              type="range"
              min="8"
              max="32"
              class="w-full accent-brand-500"
            />
          </div>
        </div>

        <!-- Result -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div class="p-4 rounded-xl bg-surface-950 border border-surface-800 space-y-2">
            <div class="text-xs font-mono text-surface-500">CSS Kodi:</div>
            <pre class="text-xs font-mono text-pink-300"><code>.chiroyli-tugma {
  background-color: {{ boxBg }};
  color: {{ boxColor }};
  border-radius: {{ borderRadius }}px;
  padding: {{ boxPadding }}px 24px;
  font-weight: bold;
  cursor: pointer;
}</code></pre>
          </div>

          <div class="p-4 rounded-xl bg-surface-950 border border-surface-800 flex flex-col justify-center items-center">
            <div class="text-xs font-semibold text-surface-500 mb-4">Jonli Ko‘rinish:</div>
            <button
              :style="{
                backgroundColor: boxBg,
                color: boxColor,
                borderRadius: borderRadius + 'px',
                padding: boxPadding + 'px 24px',
              }"
              class="font-bold transition-all shadow-lg"
            >
              Mening Tugmam 🚀
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- CSS Ulanish Usullari -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> CSS ni HTMLga ulashning 3 usuli
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-2">
          <span class="font-bold text-brand-400 text-sm">1. Tashqi Fayl (External) ⭐</span>
          <p class="text-surface-300">Eng tavsiya etiladigan to‘g‘ri usul. <code>&lt;link rel="stylesheet" href="style.css"&gt;</code> orqali ulanadi.</p>
        </div>

        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-2">
          <span class="font-bold text-blue-400 text-sm">2. Ichki Stil (Internal)</span>
          <p class="text-surface-300">HTMLning <code>&lt;head&gt;</code> qismida <code>&lt;style&gt;</code> tegi ichida yoziladi.</p>
        </div>

        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-2">
          <span class="font-bold text-amber-400 text-sm">3. Qator Ichidagi (Inline)</span>
          <p class="text-surface-300">Elementning ichida <code>style="..."</code> atributi orqali yoziladi. Katta loyihalarda tavsiya etilmaydi.</p>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="pt-6 border-t border-surface-800 flex flex-wrap items-center justify-between gap-4">
      <router-link
        to="/html/attributlar"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-900 hover:bg-surface-800 text-surface-300 text-xs font-semibold border border-surface-700 transition-colors"
      >
        <span>← HTML: Atributlar</span>
      </router-link>

      <router-link
        to="/css/selectorlar"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors"
      >
        <span>Keyingi Dars: CSS Selektorlar →</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const boxBg = ref('#22a675');
const boxColor = ref('#ffffff');
const borderRadius = ref(12);
const boxPadding = ref(16);
</script>