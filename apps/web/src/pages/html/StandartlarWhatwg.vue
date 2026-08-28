<template>
  <div class="space-y-10 max-w-4xl pb-20 text-left">
    <!-- Breadcrumbs Navigation -->
    <nav class="flex items-center flex-wrap gap-2 text-xs font-mono text-surface-400">
      <router-link to="/html/kirish" class="hover:text-surface-200 transition-colors">HTML Asoslari</router-link>
      <span class="text-surface-600">&gt;</span>
      <span class="text-surface-400">1-Modul</span>
      <span class="text-surface-600">&gt;</span>
      <span class="text-brand-400 font-bold">1.2. Standartlar & WHATWG</span>
    </nav>

    <!-- Title & Header Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        HTML Standartlari — W3C, WHATWG va Living Standardning G‘alabasi
      </h1>
      <p class="text-sm sm:text-base text-surface-300 leading-relaxed font-normal">
        Nega XHTML2 loyihasi muvaffaqiyatsizlikka uchradi? Brauzer ishlab chiquvchilari (Apple, Mozilla, Opera, Google) qanday qilib WHATWG orqali zamonaviy HTML5 Living Standardni yaratdilar?
      </p>

      <!-- Premium Badges -->
      <div class="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono">
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          O‘qish vaqti: 7 daqiqa
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          WHATWG Living Standard
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          XHTML2 vs HTML5 Tarixi
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya + C++ Under-the-hood Toggle -->
    <div class="p-6 rounded-2xl bg-surface-900/40 border border-surface-800/80 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2.5 text-amber-400 font-bold text-sm sm:text-base">
          <span class="text-xl">👶</span>
          <span>5 yoshli bola uchun tushuntirish: O‘yin Qoidalari va Do‘stlar Kelishuvi</span>
        </div>
        <button
          @click="showUnderTheHood = !showUnderTheHood"
          class="px-2.5 py-1 rounded-lg bg-surface-800 hover:bg-surface-700 text-[11px] font-mono text-brand-400 border border-brand-500/30 transition-all cursor-pointer"
        >
          <span>{{ showUnderTheHood ? 'Analogiyaga qaytish' : '🔬 Standart Nizomi Kodini Ko‘rish' }}</span>
        </button>
      </div>

      <div v-if="!showUnderTheHood" class="space-y-2 text-xs sm:text-sm text-surface-300 leading-relaxed animate-in fade-in duration-200">
        <p>
          Agar futbol o‘ynayotganingizda har bir bola o‘zicha yangi qoida o‘ylab topsa, o‘yin buziladi.
        </p>
        <p class="pt-1">
          WHATWG — bu butun dunyodagi eng katta brauzer ustalari yig‘ilib, hamma uchun bitta umumiy, adolatli va doimiy yangilanib turadigan <strong>Yagona Qoidalar Kitobi</strong>dir!
        </p>
      </div>

      <div v-else class="space-y-2 font-mono text-xs animate-in fade-in duration-200">
        <div class="text-cyan-300 font-bold">2019-yil 28-may: W3C va WHATWG o‘rtasidagi Rasmiy Bitim</div>
        <pre class="p-3.5 rounded-xl bg-surface-950 border border-surface-800 text-cyan-300 text-[11px] leading-relaxed overflow-x-auto"><code>// WHATWG HTML Living Standard yagona haqiqiy normativ manba deb e'lon qilindi:
// URL: https://html.spec.whatwg.org/multipage/
// W3C endi alohida HTML versiya chiqarmaydi, WHATWG standartini tasdiqlaydi.</code></pre>
      </div>
    </div>

    <!-- The Living Standard Concept (Hard & Deep) -->
    <section class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 1. "HTML6 Chiqmaydi" — Living Standard Nimani Anglatadi?
      </h2>

      <div class="p-5 rounded-2xl bg-surface-900 border border-surface-800 text-xs text-surface-300 space-y-3 leading-relaxed">
        <p>
          Oldin HTML 2.0, HTML 3.2, HTML 4.01 kabi raqamli versiyalar bir necha yilda bir marta kitob sifatida nashr etilardi. Bu yangi texnologiyalar (masalan, yangi audio/video formatlar yoki CSS xususiyatlari) kiritilishini yillab sekinlashtirardi.
        </p>
        <p>
          <strong>WHATWG Living Standard</strong> — bu "Tirik Standart". U har kuni, har hafta brauzerlar rivojlanishi bilan birga doimiy yangilanib boradi. Shu sababli HTML hech qachon eskirmaydi!
        </p>
      </div>
    </section>

    <!-- Interactive Live Code Editor -->
    <section class="space-y-4 pt-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 2. Jonli Mashq: WHATWG HTML5 Sintaksisini Sinab Ko‘ring
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
