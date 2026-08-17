<template>
  <div class="space-y-10 max-w-4xl pb-16">
    <!-- Title & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <div class="flex items-center gap-2 text-xs font-mono text-brand-400">
        <span>JavaScript Asoslari</span>
        <span>/</span>
        <span class="text-surface-400">2-Dars</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        JavaScript O‘zgaruvchilar — let, const va var
      </h1>
      <p class="text-base sm:text-lg text-surface-300 leading-relaxed">
        O‘zgaruvchilar (Variables) — dastur davomida ma’lumotlarni kompyuter xotirasida saqlash va ulardan qayta-qayta foydalanish uchun ajratilgan nomli konteynerlardir.
      </p>

      <div class="flex flex-wrap items-center gap-4 text-xs text-surface-400 pt-2">
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          ⏱️ O‘qish vaqti: 7 daqiqa
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          🎯 Daraja: Boshlang‘ich
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          📚 MDN: JavaScript Variables
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-brand-500/10 to-transparent border border-emerald-500/20 space-y-3">
      <div class="flex items-center gap-2 text-emerald-400 font-bold text-base">
        <span class="text-xl">👶</span>
        <span>5 yoshli bola uchun tushuntirish: Yorliqli Quti va Qulflangan Seyf</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
        <div class="p-3.5 rounded-xl bg-surface-950 border border-brand-500/40 space-y-1">
          <p class="font-bold text-brand-400">📦 let (Ochiq Quti)</p>
          <p class="text-surface-300">Bugun bu qutiga <strong>olma</strong> solishingiz mumkin. Ertaga olmani olib, o‘rniga <strong>nok</strong> solishingiz mumkin. Qiymati o‘zgaradi!</p>
        </div>
        <div class="p-3.5 rounded-xl bg-surface-950 border border-amber-500/40 space-y-1">
          <p class="font-bold text-amber-400">🔒 const (Qulflangan Seyf)</p>
          <p class="text-surface-300">Bir marta ichiga <strong>oltin tanga</strong> solib qulfladingiz. Uni boshqa hech qachon almashtirib bo‘lmaydi. Qiymati o‘zgarmas (konstanta)!</p>
        </div>
      </div>
    </div>

    <!-- ⚡ Interaktiv O'zgaruvchilar Maydoni -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">⚡</span> Jonli Sinov: let va const Farqi
      </h2>
      <p class="text-sm text-surface-400">
        O‘zingiz o‘zgaruvchi e’lon qiling va unga yangi qiymat berib ko‘ring:
      </p>

      <div class="p-5 rounded-2xl bg-surface-900 border border-surface-800 space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- Keyword selection -->
          <div class="space-y-1.5">
            <label class="text-xs font-semibold text-surface-300">Kalit so‘zni tanlang:</label>
            <select
              v-model="varKeyword"
              class="w-full px-3 py-2 bg-surface-950 border border-surface-700 rounded-lg text-xs text-white focus:outline-none focus:border-brand-500"
            >
              <option value="let">let (O‘zgaruvchan)</option>
              <option value="const">const (O‘zgarmas / Konstant)</option>
            </select>
          </div>

          <!-- Variable Value -->
          <div class="space-y-1.5">
            <label class="text-xs font-semibold text-surface-300">Yangi qiymat berish:</label>
            <input
              v-model="userInputValue"
              type="text"
              class="w-full px-3 py-2 bg-surface-950 border border-surface-700 rounded-lg text-xs text-white focus:outline-none focus:border-brand-500"
              placeholder="Masalan: 'Toshkent'"
            />
          </div>
        </div>

        <!-- Code Preview & Result -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div class="p-4 rounded-xl bg-surface-950 border border-surface-800 space-y-2">
            <div class="text-xs font-mono text-surface-500">JavaScript kodi:</div>
            <pre class="text-xs font-mono text-emerald-300"><code>{{ varKeyword }} shahar = "Samarqand";
<span class="text-surface-500">// Endi qiymatni o‘zgartirib ko‘ramiz:</span>
shahar = "{{ userInputValue }}";</code></pre>
          </div>

          <div class="p-4 rounded-xl bg-surface-950 border border-surface-800 flex flex-col justify-center">
            <div class="text-xs font-mono text-surface-500 mb-2">Konsol Natijasi:</div>
            <div
              v-if="varKeyword === 'let'"
              class="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono"
            >
              ✅ Muvaffaqiyatli: shahar = "{{ userInputValue }}"
            </div>
            <div
              v-else
              class="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono space-y-1"
            >
              <div>❌ TypeError: Assignment to constant variable.</div>
              <div class="text-[11px] text-surface-400">Izoh: `const` bilan yaratilgan o‘zgaruvchining qiymatini qayta o‘zgartirib bo‘lmaydi!</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Asosiy Ma'lumot Turlari (Data Types) -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> JavaScript Asosiy Ma’lumot Turlari
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
        <div class="p-3.5 rounded-xl bg-surface-900 border border-surface-800 space-y-1">
          <span class="font-mono font-bold text-emerald-400">String (Matn)</span>
          <p class="text-surface-400">Qo‘shtirnoq ichidagi so‘zlar: <code>"Salom"</code></p>
        </div>
        <div class="p-3.5 rounded-xl bg-surface-900 border border-surface-800 space-y-1">
          <span class="font-mono font-bold text-blue-400">Number (Raqam)</span>
          <p class="text-surface-400">Butun va kasr sonlar: <code>25</code>, <code>3.14</code></p>
        </div>
        <div class="p-3.5 rounded-xl bg-surface-900 border border-surface-800 space-y-1">
          <span class="font-mono font-bold text-purple-400">Boolean (Mantiqiy)</span>
          <p class="text-surface-400">Faqat <code>true</code> (haqiqat) yoki <code>false</code> (yolg‘on)</p>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="pt-6 border-t border-surface-800 flex flex-wrap items-center justify-between gap-4">
      <router-link
        to="/javascript/kirish"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-900 hover:bg-surface-800 text-surface-300 text-xs font-semibold border border-surface-700 transition-colors"
      >
        <span>← 1-Dars: JS Kirish</span>
      </router-link>

      <router-link
        to="/javascript/funksiyalar"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors"
      >
        <span>Keyingi Dars: JS Funksiyalar →</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const varKeyword = ref('let');
const userInputValue = ref('Toshkent');
</script>