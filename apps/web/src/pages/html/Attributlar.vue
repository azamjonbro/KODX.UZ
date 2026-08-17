<template>
  <div class="space-y-10 max-w-4xl pb-20 text-left">
    <!-- Breadcrumbs Navigation -->
    <nav class="flex items-center flex-wrap gap-2 text-xs font-mono text-surface-400">
      <router-link to="/html/kirish" class="hover:text-surface-200 transition-colors">HTML Asoslari</router-link>
      <span class="text-surface-600">&gt;</span>
      <span class="text-surface-400">1-Modul</span>
      <span class="text-surface-600">&gt;</span>
      <span class="text-brand-400 font-bold">HTML Atributlar & Global Properties</span>
    </nav>

    <!-- Title & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        HTML Atributlar — Teglarning Xususiyatlari & Parametrlari
      </h1>
      <p class="text-sm sm:text-base text-surface-300 leading-relaxed font-normal">
        Atributlar elementning xulq-atvori, ko‘rinishi, manzili, kirish imkoniyati (A11y/ARIA) yoki xotiradagi dataset parametrlarini belgilab beradi.
      </p>

      <!-- Premium Metadata Badges -->
      <div class="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono">
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          O‘qish vaqti: 6 daqiqa
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Global & Custom Dataset
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Blink ElementData
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya + C++ Under-the-hood Toggle -->
    <div class="p-6 rounded-2xl bg-surface-900/40 border border-surface-800/80 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2.5 text-amber-400 font-bold text-sm sm:text-base">
          <span class="text-xl">👶</span>
          <span>5 yoshli bola uchun tushuntirish: Odamning Pasporti va Kiyimi</span>
        </div>
        <button
          @click="showUnderTheHood = !showUnderTheHood"
          class="px-2.5 py-1 rounded-lg bg-surface-800 hover:bg-surface-700 text-[11px] font-mono text-brand-400 border border-brand-500/30 transition-all cursor-pointer"
        >
          <span>{{ showUnderTheHood ? 'Analogiyaga qaytish' : '🔬 Ostidagi Kodni Ko‘rish' }}</span>
        </button>
      </div>

      <div v-if="!showUnderTheHood" class="space-y-2 text-xs sm:text-sm text-surface-300 leading-relaxed animate-in fade-in duration-200">
        <p>Teg bu shunchaki <strong>"Bola"</strong>. Lekin qaysi bola?</p>
        <ul class="space-y-1 list-disc list-inside text-surface-400 text-xs">
          <li><code>ism="Ali"</code> — uning ismi nimaligini bildiradi.</li>
          <li><code>kiyim-rangi="qizil"</code> — qanday kiyimda ekanligini aytadi.</li>
          <li><code>yoshi="5"</code> — uning yoshini bildiradi.</li>
        </ul>
        <p class="pt-1">
          HTMLda ham <code>&lt;a&gt;</code> shunchaki havola. Lekin <code>href="https://kodx.uz"</code> atributi uni qayerga olib borishini belgilaydi!
        </p>
      </div>

      <div v-else class="space-y-2 font-mono text-xs animate-in fade-in duration-200">
        <div class="text-cyan-300 font-bold">Blink C++ ElementData: Atributlar Xotira Reprezentatsiyasi</div>
        <pre class="p-3.5 rounded-xl bg-surface-950 border border-surface-800 text-cyan-300 text-[11px] leading-relaxed overflow-x-auto"><code>// third_party/blink/renderer/core/dom/element_data.h
class ElementData : public GarbageCollected&lt;ElementData&gt; {
  // Atributlar juftligi: [QualifiedName (nomi), AtomicString (qiymati)]
  Attribute attribute_array_[]; 
  uint32_t bitfield_; // is_synchronized_with_v8, has_class, has_id
};</code></pre>
      </div>
    </div>

    <!-- 1. Global Atributlar -->
    <section class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 1. Global Atributlar (Barcha Teglarda Ishlaydi)
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-1.5">
          <div class="text-brand-400 font-bold text-sm">id va class</div>
          <p class="text-surface-300 text-[11px] font-sans leading-relaxed">
            <code>id="unique-hero"</code> sahifada yagona bo‘lishi shart. <code>class="btn primary"</code> esa bir nechta elementga umumiy CSS berish uchun ishlatiladi.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-1.5">
          <div class="text-blue-400 font-bold text-sm">data-* (Custom Dataset)</div>
          <p class="text-surface-300 text-[11px] font-sans leading-relaxed">
            Dasturchilar JavaScript uchun maxsus ma’lumot saqlashi mumkin: <code>data-user-id="42"</code>. JS da <code>el.dataset.userId</code> orqali o‘qiladi.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-1.5">
          <div class="text-purple-400 font-bold text-sm">hidden va tabindex</div>
          <p class="text-surface-300 text-[11px] font-sans leading-relaxed">
            <code>hidden</code> elementni ekranda yashiradi (display: none). <code>tabindex="0"</code> esa klaviatura orqali fokus olish imkonini beradi.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-1.5">
          <div class="text-amber-400 font-bold text-sm">contenteditable & dir</div>
          <p class="text-surface-300 text-[11px] font-sans leading-relaxed">
            <code>contenteditable="true"</code> foydalanuvchiga matnni to‘g‘ridan-to‘g‘ri tahrirlash imkonini beradi. <code>dir="ltr" / "rtl"</code> esa matn yo‘nalishini belgilaydi.
          </p>
        </div>
      </div>
    </section>

    <!-- 2. Mantiqiy (Boolean) Atributlar -->
    <section class="space-y-3 pt-2">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 2. Mantiqiy (Boolean) Atributlar
      </h2>
      <p class="text-xs sm:text-sm text-surface-300 leading-relaxed">
        Boolean atributlar qiymat talab qilmaydi. Agar atribut mavjud bo‘lsa — <strong>TRUE</strong>, yozilmasa — <strong>FALSE</strong> hisoblanadi:
      </p>

      <div class="p-4 rounded-xl bg-surface-950 border border-surface-800 font-mono text-xs text-emerald-300 overflow-x-auto space-y-1">
        <div>&lt;input type="checkbox" <span class="text-amber-300 font-bold">checked</span>&gt; <span class="text-surface-500">// Boshlang'ich belgilangan</span></div>
        <div>&lt;button <span class="text-amber-300 font-bold">disabled</span>&gt;Muzlatilgan Tugma&lt;/button&gt; <span class="text-surface-500">// Bosib bo'lmaydi</span></div>
        <div>&lt;input type="text" <span class="text-amber-300 font-bold">required</span>&gt; <span class="text-surface-500">// To'ldirish majburiy</span></div>
      </div>
    </section>

    <!-- Interactive Live Code Editor -->
    <section class="space-y-4 pt-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 3. Jonli Mashq: Atributlarni Sinab Ko‘ring
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