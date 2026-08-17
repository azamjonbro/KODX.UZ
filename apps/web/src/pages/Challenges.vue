<template>
  <div class="space-y-8 max-w-5xl mx-auto pb-16">
    <!-- Header -->
    <div class="space-y-3 text-left">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono">
        <span>🎯</span> KUNLIK BELLASHUVLAR
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        Dasturlash Challenges & Viktorinalar
      </h1>
      <p class="text-sm sm:text-base text-surface-400 leading-relaxed max-w-3xl">
        Boshqalar bilan raqobatlashing, bilimingizni tezkor testlar orqali sinang va XP ko‘paytiruvchi yutuqlarga ega bo‘ling!
      </p>
    </div>

    <!-- Featured Daily Challenge Hero Card -->
    <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-950/80 via-surface-900 to-surface-900 border border-brand-500/30 space-y-5 text-left shadow-2xl relative overflow-hidden">
      <div class="absolute -right-10 -bottom-10 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="flex flex-wrap items-center justify-between gap-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 font-mono text-xs font-bold border border-amber-500/20 flex items-center gap-1">
            <span>🔥</span> KUNNING ASOSIY CHALLENGE'I
          </span>
          <span class="text-xs text-surface-400 font-mono">Qolgan vaqt: 08:42:15</span>
        </div>
        <span class="text-sm font-mono font-bold text-brand-400">+100 XP & Streak Shield</span>
      </div>

      <div class="space-y-2">
        <h2 class="text-2xl font-bold text-white">JavaScript: Arraylarni Duplikatsiz Tozalash (Unique Filter)</h2>
        <p class="text-xs sm:text-sm text-surface-300 max-w-2xl leading-relaxed">
          Berilgan massivdagi takrorlangan barcha elementlarni eng tezkor usulda (Set yoki O(n) xotira) filtrlab beruvchi funksiya yozing.
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-3 pt-2">
        <router-link
          to="/javascript/funksiyalar"
          class="px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-all shadow-lg shadow-brand-500/20"
        >
          Challenge'ni boshlash 🚀
        </router-link>
        <span class="text-xs text-surface-400 font-mono">Bugun 248 ta dasturchi ishtirok etdi</span>
      </div>
    </div>

    <!-- Active Mini Challenges Grid -->
    <div class="space-y-4">
      <h3 class="text-lg font-bold text-white">Boshqa faol bellashuvlar</h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="ch in miniChallenges"
          :key="ch.id"
          class="p-5 rounded-2xl bg-surface-900/60 border border-surface-800 space-y-3 flex flex-col justify-between"
        >
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-lg">{{ ch.icon }}</span>
              <span class="text-xs font-mono font-bold text-brand-400">+{{ ch.xp }} XP</span>
            </div>
            <h4 class="text-sm font-bold text-white">{{ ch.title }}</h4>
            <p class="text-xs text-surface-400 leading-relaxed">{{ ch.desc }}</p>
          </div>

          <div class="pt-2 border-t border-surface-800/80 flex items-center justify-between text-xs">
            <span class="text-[11px] font-mono text-surface-500">{{ ch.time }}</span>
            <router-link :to="ch.link" class="text-brand-400 hover:underline font-bold">
              Qatnashish →
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const miniChallenges = [
  {
    id: 'c1',
    title: 'CSS Grid 5 Daqiqalik Tezkor Quiz',
    desc: 'Grid template columns, areas va auto-fit bo‘yicha 5 ta test savoliga javob bering.',
    xp: 50,
    time: '5 daqiqa',
    icon: '🎨',
    link: '/css/grid',
  },
  {
    id: 'c2',
    title: 'HTML Semantika Xatolarini Topish',
    desc: 'Noto‘g‘ri yozilgan <div>lar o‘rniga to‘g‘ri semantik teglarni joylashtiring.',
    xp: 40,
    time: '10 daqiqa',
    icon: '🌐',
    link: '/html/semantika',
  },
];
</script>
