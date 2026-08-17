<template>
  <div class="relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
    <!-- Hero Section -->
    <section class="text-center py-12 md:py-16 space-y-6">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono">
        <span class="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
        KODX 2.0 • O‘zbek dasturchilari uchun ta'lim platformasi
      </div>

      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
        Dasturlashni <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-300">amaliyot</span> orqali mukammal o‘rganing
      </h1>

      <p class="text-lg sm:text-xl text-surface-400 max-w-2xl mx-auto font-normal leading-relaxed">
        Learn → Understand → Code → Practice → Solve → Track Progress → Build Projects. Oddiy nazariya emas, interaktiv tajriba!
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
        <router-link
          to="/html/kirish"
          class="px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-semibold text-sm transition-all shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 hover:-translate-y-0.5"
        >
          🚀 Kurslarni Boshlash
        </router-link>
        <router-link
          to="/javascript/kirish"
          class="px-6 py-3 rounded-xl bg-surface-900 hover:bg-surface-800 border border-surface-700 text-surface-200 font-semibold text-sm transition-all hover:-translate-y-0.5"
        >
          ⚙️ JavaScript Asoslari
        </router-link>
      </div>
    </section>

    <!-- Tech Stacks Section -->
    <section class="py-12">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="text-2xl font-bold text-white tracking-tight">O‘quv yo‘nalishlari</h2>
          <p class="text-sm text-surface-400">Zamonaviy texnologiyalarni noldan professional darajagacha o‘rganing</p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <router-link
          v-for="item in techTracks"
          :key="item.slug"
          :to="item.link"
          class="group p-5 rounded-2xl bg-surface-900/60 border border-surface-800/80 hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-900 flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-3xl">{{ item.icon }}</span>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded-md bg-surface-800 text-surface-400 group-hover:text-brand-300 transition-colors">
                {{ item.tag }}
              </span>
            </div>
            <h3 class="font-bold text-lg text-white group-hover:text-brand-400 transition-colors mb-1">{{ item.title }}</h3>
            <p class="text-xs text-surface-400 leading-relaxed">{{ item.description }}</p>
          </div>
          <div class="mt-4 pt-3 border-t border-surface-800/60 flex items-center justify-between text-xs text-surface-500 group-hover:text-surface-300">
            <span>{{ item.lessonsCount }} mavzular</span>
            <span class="font-mono text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity">Kirish →</span>
          </div>
        </router-link>
      </div>
    </section>

    <!-- Platform Features -->
    <section class="py-12 border-t border-surface-800/80">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 rounded-2xl bg-surface-900/40 border border-surface-800/60">
          <div class="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center font-bold text-lg mb-4">
            ⚡
          </div>
          <h3 class="text-base font-bold text-white mb-2">Interaktiv Kod Muharriri</h3>
          <p class="text-xs text-surface-400 leading-relaxed">
            Brauzeringizda to‘g‘ridan-to‘g‘ri kod yozing, natijani lahzada ko‘ring va testlar orqali tekshiring.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-surface-900/40 border border-surface-800/60">
          <div class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-lg mb-4">
            🗺️
          </div>
          <h3 class="text-base font-bold text-white mb-2">Tizimli Yo‘l Xaritalari</h3>
          <p class="text-xs text-surface-400 leading-relaxed">
            Frontend, Backend va Fullstack yo‘nalishlarida noldan ishga joylashishgacha bo‘lgan aniq bosqichlar.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-surface-900/40 border border-surface-800/60">
          <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold text-lg mb-4">
            🏆
          </div>
          <h3 class="text-base font-bold text-white mb-2">Gamifikatsiya & Sertifikat</h3>
          <p class="text-xs text-surface-400 leading-relaxed">
            Har bir muvaffaqiyat uchun XP yig‘ing, yutuqlarni oching va tasdiqlanuvchi QR-kodli sertifikatga ega bo‘ling.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const techTracks = [
  {
    title: 'HTML',
    slug: 'html',
    icon: '🌐',
    tag: 'Web Asoslari',
    description: 'Veb sahifalarning skeleti va semantik teglari',
    lessonsCount: '3+',
    link: '/html/kirish',
  },
  {
    title: 'CSS & Flex/Grid',
    slug: 'css',
    icon: '🎨',
    tag: 'Styling',
    description: 'Zamonaviy vizual dizayn, Box Model va responsiv layout',
    lessonsCount: '3+',
    link: '/css/kirish',
  },
  {
    title: 'JavaScript',
    slug: 'javascript',
    icon: '⚙️',
    tag: 'Dasturlash',
    description: 'O‘zgaruvchilar, funksiyalar, DOM va asinxron dasturlash',
    lessonsCount: '3+',
    link: '/javascript/kirish',
  },
  {
    title: 'TypeScript',
    slug: 'typescript',
    icon: '🔷',
    tag: 'Static Types',
    description: 'Katta masshtabli loyihalar uchun qat’iy tiplar',
    lessonsCount: 'Yaqinda',
    link: '/javascript/kirish',
  },
  {
    title: 'Vue 3',
    slug: 'vue',
    icon: '🟢',
    tag: 'Frontend',
    description: 'Reaktivlik, Composition API va Pinia ekotizimi',
    lessonsCount: 'Yaqinda',
    link: '/html/kirish',
  },
  {
    title: 'Tailwind CSS',
    slug: 'tailwind',
    icon: '🌬️',
    tag: 'Utility-first',
    description: 'Tezkor va modulli stillash ramkasi',
    lessonsCount: 'Yaqinda',
    link: '/css/kirish',
  },
  {
    title: 'Node.js & Express',
    slug: 'nodejs',
    icon: '🚀',
    tag: 'Backend',
    description: 'REST API, Prisma ORM va PostgreSQL bilan ishlash',
    lessonsCount: 'Yaqinda',
    link: '/javascript/kirish',
  },
  {
    title: 'PostgreSQL & Docker',
    slug: 'database',
    icon: '🐘',
    tag: 'Database',
    description: 'Relyatsion ma\'lumotlar bazasi va konteynerizatsiya',
    lessonsCount: 'Yaqinda',
    link: '/',
  },
];
</script>
