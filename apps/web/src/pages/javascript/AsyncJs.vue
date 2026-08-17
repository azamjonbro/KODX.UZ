<template>
  <div class="space-y-10 max-w-4xl pb-16">
    <!-- Header & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <div class="flex items-center gap-2 text-xs font-mono text-brand-400">
        <span>JavaScript Asoslari</span>
        <span>/</span>
        <span class="text-surface-400">6-Dars</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        Asinxron JS, Promises va Event Loop
      </h1>
      <p class="text-base sm:text-lg text-surface-300 leading-relaxed">
        Serverdan ma’lumotlarni kutish (`async/await`), sahifani qotirib qo‘ymaslik va brauzerning Microtask vs Macrotask navbatlari sirlari.
      </p>

      <div class="flex flex-wrap items-center gap-4 text-xs text-surface-400 pt-2">
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          ⏱️ O‘qish vaqti: 12 daqiqa
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          🎯 Daraja: O‘rta - Yuqori
        </span>
        <span class="flex items-center gap-1.5 bg-surface-900 px-3 py-1.5 rounded-lg border border-surface-800">
          📚 MDN: Asynchronous JavaScript
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 via-brand-500/10 to-transparent border border-purple-500/20 space-y-3">
      <div class="flex items-center gap-2 text-purple-400 font-bold text-base">
        <span class="text-xl">👶</span>
        <span>5 yoshli bola uchun tushuntirish: Pitsa Buyurtmasi</span>
      </div>
      <p class="text-sm text-surface-200 leading-relaxed">
        Pitsa buyurtma qilsangiz, pitsaxona oldida 30 daqiqa qimirlamay qotib turmaysiz.
      </p>
      <p class="text-xs text-surface-300 leading-relaxed">
        Sizga <strong>chek (Promise / Va’da)</strong> beriladi. Siz uyga borib o‘yin o‘ynayverasiz (sahifa ishlayveradi). Kuryer kelganda (<code>resolve</code>), issiq pitsani yeb lazzatlanasiz!
      </p>
    </div>

    <!-- ⚡ Interaktiv Async/Await Simulyatori -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">⚡</span> Jonli Sinov: Serverga Asinxron So‘rov Simulyatsiyasi
      </h2>

      <div class="p-6 rounded-2xl bg-surface-900 border border-surface-800 space-y-6">
        <div class="flex items-center justify-between">
          <button
            @click="fetchData"
            :disabled="isLoading"
            class="px-5 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 disabled:opacity-50 text-surface-950 font-bold text-xs transition-all shadow-lg shadow-brand-500/20 flex items-center gap-2"
          >
            <span v-if="isLoading" class="animate-spin">⏳</span>
            <span>{{ isLoading ? 'Serverdan olinmoqda...' : 'Ma’lumotni Yuklash (Async Fetch)' }}</span>
          </button>

          <span class="text-xs font-mono text-surface-400">Status: {{ statusText }}</span>
        </div>

        <!-- Result Box -->
        <div class="p-4 rounded-xl bg-surface-950 border border-surface-800 font-mono text-xs text-emerald-300 min-h-[100px] flex items-center justify-center">
          <span v-if="!dataLoaded && !isLoading" class="text-surface-600 italic">"Ma’lumotni Yuklash" tugmasini bosing...</span>
          <div v-else-if="isLoading" class="text-brand-400 animate-pulse">
            🌐 API /api/v1/kurslar so‘rovi yuborildi... kutilmoqda...
          </div>
          <div v-else-if="dataLoaded" class="space-y-1 w-full">
            <div class="text-surface-400">✅ 200 OK — Qabul qilingan ma’lumot:</div>
            <pre class="text-xs text-emerald-400 bg-surface-900/60 p-2.5 rounded-lg"><code>{
  "kurs": "JavaScript Pro",
  "talabalar": 1250,
  "status": "Aktiv",
  "yuklanishVaqti": "1.2 soniya"
}</code></pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="pt-6 border-t border-surface-800 flex flex-wrap items-center justify-between gap-4">
      <router-link
        to="/javascript/events"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-900 hover:bg-surface-800 text-surface-300 text-xs font-semibold border border-surface-700 transition-colors"
      >
        <span>← 5-Dars: Hodisalar (Events)</span>
      </router-link>

      <router-link
        to="/"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-colors"
      >
        <span>Bosh Sahifaga Qaytish 🏠</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isLoading = ref(false);
const dataLoaded = ref(false);
const statusText = ref('Kutilmoqda (Idle)');

const fetchData = async () => {
  isLoading.value = true;
  dataLoaded.value = false;
  statusText.value = 'Yuklanmoqda...';

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1200));

  isLoading.value = false;
  dataLoaded.value = true;
  statusText.value = 'Muvaffaqiyatli yakunlandi!';
};
</script>
