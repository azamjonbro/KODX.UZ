<template>
  <div class="space-y-10 max-w-4xl pb-16">
    <!-- Header & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <div class="flex items-center gap-2 text-xs font-mono text-brand-400">
        <span>HTML Asoslari</span>
        <span>/</span>
        <span class="text-surface-400">7-Dars</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        Interaktiv Formalar va Zamonaviy Inputlar
      </h1>
      <p class="text-base sm:text-lg text-surface-300 leading-relaxed">
        Foydalanuvchilar bilan muloqot qilish: ro‘yxatdan o‘tish, to‘lovlar, fayl yuklash va avtomatik forma validatsiyasi.
      </p>

      <div class="flex flex-wrap items-center gap-4 text-xs text-surface-400 pt-2">
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          ⏱️ O‘qish vaqti: 10 daqiqa
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          🎯 Daraja: Boshlang‘ich - O‘rta
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          📚 MDN: HTML Forms Guide
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-transparent border border-purple-500/20 space-y-3">
      <div class="flex items-center gap-2 text-purple-400 font-bold text-base">
        <span class="text-xl">👶</span>
        <span>5 yoshli bola uchun tushuntirish: Sehrli Anketani To‘ldirish</span>
      </div>
      <p class="text-sm text-surface-200 leading-relaxed">
        Maktabga qabul qilinish uchun berilgan qog‘oz anketani tasavvur qiling: ismingizni yozish joyi, tug‘ilgan sanangizni tanlash va rasmingizni yopishtirish joyi bor.
      </p>
      <p class="text-xs text-surface-300 leading-relaxed">
        <strong>HTML forma</strong> — bu kompyuterdagi xuddi shu anketa. Siz ma’lumotlarni kiritasiz va "Yuborish" tugmasini bossangiz, u to‘g‘ridan-to‘g‘ri serverga (direktorga) yetkaziladi!
      </p>
    </div>

    <!-- ⚡ Interaktiv Forma Validatori -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">⚡</span> Jonli Sinov: Zamonaviy Ro‘yxatdan O‘tish Formasi
      </h2>
      <p class="text-sm text-surface-400">
        Quyidagi formani to‘ldiring va HTML5 ning avtomatik tekshiruvini sinab ko‘ring:
      </p>

      <div class="p-6 rounded-2xl bg-surface-900 border border-surface-800 space-y-6">
        <form @submit.prevent="handleSubmit" class="space-y-4 max-w-md mx-auto">
          <div>
            <label class="block text-xs font-semibold text-surface-300 mb-1">To‘liq Ismingiz (kamida 3 ta harf):</label>
            <input
              v-model="formData.name"
              type="text"
              required
              minlength="3"
              class="w-full px-3.5 py-2.5 bg-surface-950 border border-surface-700 rounded-xl text-xs text-white focus:outline-none focus:border-brand-500"
              placeholder="Masalan: Anvar Qosimov"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-surface-300 mb-1">Email manzili:</label>
            <input
              v-model="formData.email"
              type="email"
              required
              class="w-full px-3.5 py-2.5 bg-surface-950 border border-surface-700 rounded-xl text-xs text-white focus:outline-none focus:border-brand-500"
              placeholder="anvar@gmail.com"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-surface-300 mb-1">Yo‘nalishni tanlang:</label>
            <select
              v-model="formData.track"
              class="w-full px-3.5 py-2.5 bg-surface-950 border border-surface-700 rounded-xl text-xs text-white focus:outline-none focus:border-brand-500"
            >
              <option value="frontend">Frontend Dasturchi</option>
              <option value="backend">Backend Dasturchi</option>
              <option value="fullstack">Fullstack Dasturchi</option>
            </select>
          </div>

          <button
            type="submit"
            class="w-full py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-all shadow-lg shadow-brand-500/20"
          >
            Formani Yuborish 🚀
          </button>
        </form>

        <div v-if="submittedMessage" class="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono text-center">
          {{ submittedMessage }}
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="pt-6 border-t border-surface-800 flex flex-wrap items-center justify-between gap-4">
      <router-link
        to="/html/rasmlar"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-900 hover:bg-surface-800 text-surface-300 text-xs font-semibold border border-surface-700 transition-colors"
      >
        <span>← 6-Dars: Rasmlar & Optimizatsiya</span>
      </router-link>

      <router-link
        to="/html/dialog"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors"
      >
        <span>Keyingi Dars: Zamonaviy &lt;dialog&gt; →</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const formData = reactive({
  name: '',
  email: '',
  track: 'frontend',
});

const submittedMessage = ref('');

const handleSubmit = () => {
  submittedMessage.value = `✅ Tabriklaymiz, ${formData.name}! Sizning ${formData.track} yo‘nalishiga arizangiz qabul qilindi.`;
};
</script>
