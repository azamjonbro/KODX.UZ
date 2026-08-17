<template>
  <div class="space-y-10 max-w-4xl pb-16">
    <!-- Title & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <div class="flex items-center gap-2 text-xs font-mono text-brand-400">
        <span>JavaScript Asoslari</span>
        <span>/</span>
        <span class="text-surface-400">1-Dars</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        JavaScript Kirish — Veb Sahifaga Jon va Aql Kiritish
      </h1>
      <p class="text-base sm:text-lg text-surface-300 leading-relaxed">
        JavaScript — bu veb-sahifalarni jonlantiruvchi, foydalanuvchi harakatlariga javob beruvchi va mantiqiy hisob-kitoblarni bajaruvchi haqiqiy dasturlash tili.
      </p>

      <div class="flex flex-wrap items-center gap-4 text-xs text-surface-400 pt-2">
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          ⏱️ O‘qish vaqti: 6 daqiqa
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          🎯 Daraja: Boshlang‘ich
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          📚 MDN: JavaScript Basics
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-transparent border border-amber-500/20 space-y-3">
      <div class="flex items-center gap-2 text-amber-400 font-bold text-base">
        <span class="text-xl">👶</span>
        <span>5 yoshli bola uchun tushuntirish: Sehrli Robotning Miyasi</span>
      </div>
      <p class="text-sm text-surface-200 leading-relaxed">
        Siz chiroyli o‘yinchoq robot yasadingiz:
      </p>
      <ul class="text-xs text-surface-300 space-y-1.5 list-disc list-inside">
        <li>Uning temir tanasi — bu <strong>HTML</strong>.</li>
        <li>Uning yaltiroq yashil bo‘yog‘i va chiroqlari — bu <strong>CSS</strong>.</li>
        <li>Endi uning pultidagi <strong>"Yurish"</strong> yoki <strong>"Salom berish"</strong> tugmasini bossangiz, robot gapiradi va sakraydi. Mana shu robotning o‘ylashi va harakat qilishi — <strong>JavaScript</strong>!</li>
      </ul>
    </div>

    <!-- JavaScript nima qila oladi? -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> JavaScript Vebda Nima Qiladi?
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-2">
          <div class="text-2xl">⚡</div>
          <div class="font-bold text-white">Hodisalarni Tinglash</div>
          <p class="text-surface-400">Tugma bosilishi, sichqoncha harakati yoki klaviatura tugmalarini ushlaydi.</p>
        </div>
        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-2">
          <div class="text-2xl">🔄</div>
          <div class="font-bold text-white">Sahifani Yangilash (DOM)</div>
          <p class="text-surface-400">Sahifani qayta yuklamasdan matn, rasm yoki dizaynni lahzada o‘zgartiradi.</p>
        </div>
        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-2">
          <div class="text-2xl">🌐</div>
          <div class="font-bold text-white">Server bilan Gaplashish</div>
          <p class="text-surface-400">API orqali ma’lumotlar bazasidan yangi xabarlarni yuklab oladi.</p>
        </div>
      </div>
    </div>

    <!-- ⚡ Interaktiv JavaScript Hisoblagich Laboratoriyasi -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">⚡</span> Jonli Sinov: Birinchi JavaScript Mantiqingiz
      </h2>
      <p class="text-sm text-surface-400">
        Tugmalarni bosing va JavaScript o‘zgaruvchilarni qanday hisoblab, ekranga chiqarishini ko‘ring:
      </p>

      <div class="p-5 rounded-2xl bg-surface-900 border border-surface-800 space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Code -->
          <div class="p-4 rounded-xl bg-surface-950 border border-surface-800 space-y-2">
            <div class="text-xs font-mono text-surface-500">JavaScript kodi:</div>
            <pre class="text-xs font-mono text-amber-300"><code>let hisob = {{ count }};

function oshirish() {
  hisob = hisob + 1;
}

function kamaytirish() {
  hisob = hisob - 1;
}

function tozalash() {
  hisob = 0;
}</code></pre>
          </div>

          <!-- Interactive UI Counter -->
          <div class="p-6 rounded-xl bg-surface-950 border border-surface-800 flex flex-col items-center justify-center space-y-4">
            <div class="text-xs font-mono text-surface-400">Hisoblagich Qiymati:</div>
            <div class="text-5xl font-black font-mono text-brand-400">{{ count }}</div>

            <div class="flex items-center gap-2">
              <button
                @click="count--"
                class="px-4 py-2 bg-surface-800 hover:bg-surface-700 text-white font-bold rounded-lg text-sm transition-colors"
              >
                - Kamaytirish
              </button>
              <button
                @click="count = 0"
                class="px-3 py-2 bg-surface-900 hover:bg-surface-800 text-surface-400 font-mono rounded-lg text-xs transition-colors"
              >
                0
              </button>
              <button
                @click="count++"
                class="px-4 py-2 bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold rounded-lg text-sm transition-colors"
              >
                + Oshirish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="pt-6 border-t border-surface-800 flex flex-wrap items-center justify-between gap-4">
      <router-link
        to="/css/box-model"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-900 hover:bg-surface-800 text-surface-300 text-xs font-semibold border border-surface-700 transition-colors"
      >
        <span>← CSS: Box Model</span>
      </router-link>

      <router-link
        to="/javascript/ozgaruvchilar"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors"
      >
        <span>Keyingi Dars: JS O‘zgaruvchilar →</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>