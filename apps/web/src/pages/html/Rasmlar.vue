<template>
  <div class="space-y-10 max-w-4xl pb-20 text-left">
    <!-- Breadcrumbs Navigation -->
    <nav class="flex items-center flex-wrap gap-2 text-xs font-mono text-surface-400">
      <router-link to="/html/kirish" class="hover:text-surface-200 transition-colors">HTML Asoslari</router-link>
      <span class="text-surface-600">&gt;</span>
      <span class="text-surface-400">2-Modul</span>
      <span class="text-surface-600">&gt;</span>
      <span class="text-brand-400 font-bold">Multimedia & Responsive Rasmlar</span>
    </nav>

    <!-- Title & Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        HTML Multimedia — Rasmlar va Zamonaviy &lt;picture&gt; Standartlari
      </h1>
      <p class="text-sm sm:text-base text-surface-300 leading-relaxed font-normal">
        Rasmlarni vebda to‘g‘ri yuklash — sahifa tezligi (LCP), qidiruv tizimlari (SEO) va foydalanuvchi trafigini tejashdagi eng muhim omildir.
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
          AVIF / WebP Formatlar
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          CLS & Lazy Loading
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya + C++ Under-the-hood Toggle -->
    <div class="p-6 rounded-2xl bg-surface-900/40 border border-surface-800/80 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2.5 text-amber-400 font-bold text-sm sm:text-base">
          <span class="text-xl">👶</span>
          <span>5 yoshli bola uchun tushuntirish: Suratlar Albomi</span>
        </div>
        <button
          @click="showUnderTheHood = !showUnderTheHood"
          class="px-2.5 py-1 rounded-lg bg-surface-800 hover:bg-surface-700 text-[11px] font-mono text-brand-400 border border-brand-500/30 transition-all cursor-pointer"
        >
          <span>{{ showUnderTheHood ? 'Analogiyaga qaytish' : '🔬 Ostidagi Kodni Ko‘rish' }}</span>
        </button>
      </div>

      <div v-if="!showUnderTheHood" class="space-y-2 text-xs sm:text-sm text-surface-300 leading-relaxed animate-in fade-in duration-200">
        <p>
          Albomdagi rasmni ko‘rsatish uchun uni chizish shart emas, unga fotosuratni yopishtirish kifoya.
        </p>
        <p class="pt-1">
          HTMLda ham <code>&lt;img&gt;</code> tegi rasmning o‘zini fayl ichida saqlamaydi, balki rasm qayerdaligini (<code>src="rasm.jpg"</code>) ko‘rsatuvchi ko‘zgudir!
        </p>
      </div>

      <div v-else class="space-y-2 font-mono text-xs animate-in fade-in duration-200">
        <div class="text-cyan-300 font-bold">Blink Image Loader: Asynchronous Decoding & Memory Cache</div>
        <pre class="p-3.5 rounded-xl bg-surface-950 border border-surface-800 text-cyan-300 text-[11px] leading-relaxed overflow-x-auto"><code>// third_party/blink/renderer/core/html/html_image_element.cc
void HTMLImageElement::SelectSourceURL(ImageLoader& loader) {
  KURL url = SelectBestFitSourceFromPictureParent(); // AVIF > WebP > PNG
  loader.Load(url, ImageLoader::kAsyncDecoding); // UI ni qotirmasdan fonga yuklash
}</code></pre>
      </div>
    </div>

    <!-- Responsive Picture Element (Hard & Deep) -->
    <section class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 1. Zamonaviy &lt;picture&gt; va WebP/AVIF Formatlari
      </h2>

      <div class="rounded-xl overflow-hidden border border-surface-800 bg-surface-950 font-mono text-xs">
        <div class="p-4 text-cyan-300 leading-relaxed space-y-1">
          <div><span class="text-brand-400">&lt;picture&gt;</span></div>
          <div class="pl-4"><span class="text-surface-500">// 1. Agar brauzer AVIF ni qo'llab-quvvatlasa (eng kichik hajm)</span></div>
          <div class="pl-4"><span class="text-brand-400">&lt;source</span> <span class="text-amber-300">type</span>=<span class="text-emerald-300">"image/avif"</span> <span class="text-amber-300">srcset</span>=<span class="text-emerald-300">"hero.avif"</span><span class="text-brand-400">&gt;</span></div>
          <div class="pl-4"><span class="text-surface-500">// 2. Agar WebP ni qo'llab-quvvatlasa</span></div>
          <div class="pl-4"><span class="text-brand-400">&lt;source</span> <span class="text-amber-300">type</span>=<span class="text-emerald-300">"image/webp"</span> <span class="text-amber-300">srcset</span>=<span class="text-emerald-300">"hero.webp"</span><span class="text-brand-400">&gt;</span></div>
          <div class="pl-4"><span class="text-surface-500">// 3. Eski brauzerlar uchun zaxira</span></div>
          <div class="pl-4"><span class="text-brand-400">&lt;img</span> <span class="text-amber-300">src</span>=<span class="text-emerald-300">"hero.jpg"</span> <span class="text-amber-300">alt</span>=<span class="text-emerald-300">"Asosiy Banner"</span> <span class="text-amber-300">width</span>=<span class="text-emerald-300">"800"</span> <span class="text-amber-300">height</span>=<span class="text-emerald-300">"450"</span> <span class="text-amber-300">loading</span>=<span class="text-emerald-300">"lazy"</span><span class="text-brand-400">&gt;</span></div>
          <div><span class="text-brand-400">&lt;/picture&gt;</span></div>
        </div>
      </div>
    </section>

    <!-- Interactive Live Code Editor -->
    <section class="space-y-4 pt-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 2. Jonli Mashq: Multimedia Elementlarini Joylashtiring
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
