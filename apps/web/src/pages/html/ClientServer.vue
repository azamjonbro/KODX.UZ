<template>
  <div class="space-y-10 max-w-4xl pb-20 text-left">
    <!-- Breadcrumbs Navigation -->
    <nav class="flex items-center flex-wrap gap-2 text-xs font-mono text-surface-400">
      <router-link to="/html/kirish" class="hover:text-surface-200 transition-colors">HTML Asoslari</router-link>
      <span class="text-surface-600">&gt;</span>
      <span class="text-surface-400">2-Modul</span>
      <span class="text-surface-600">&gt;</span>
      <span class="text-brand-400 font-bold">2.1. Client & Server Arxitekturasi</span>
    </nav>

    <!-- Title & Header Meta -->
    <div class="space-y-4 border-b border-surface-800 pb-6">
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        Client va Server Nima? — Webning Asosiy Muloqot Modeli
      </h1>
      <p class="text-sm sm:text-base text-surface-300 leading-relaxed font-normal">
        Internetdagi barcha ma’lumot almashinuvi Client (Mijoz — Brauzer/Ilova) va Server (Katta quvvatli kompyuter) o‘rtasidagi Request (So‘rov) va Response (Javob) tsikliga tayanadi.
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
          TCP 3-Way Handshake
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-900/90 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          TLS 1.3 Encryption
        </span>
      </div>
    </div>

    <!-- 👶 5 Yoshli Bola Uchun Analogiya + C++ Under-the-hood Toggle -->
    <div class="p-6 rounded-2xl bg-surface-900/40 border border-surface-800/80 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2.5 text-amber-400 font-bold text-sm sm:text-base">
          <span class="text-xl">👶</span>
          <span>5 yoshli bola uchun tushuntirish: Restoran va Oshpaz</span>
        </div>
        <button
          @click="showUnderTheHood = !showUnderTheHood"
          class="px-2.5 py-1 rounded-lg bg-surface-800 hover:bg-surface-700 text-[11px] font-mono text-brand-400 border border-brand-500/30 transition-all cursor-pointer"
        >
          <span>{{ showUnderTheHood ? 'Analogiyaga qaytish' : '🔬 Tarmoq Soketi Kodini Ko‘rish' }}</span>
        </button>
      </div>

      <div v-if="!showUnderTheHood" class="space-y-2 text-xs sm:text-sm text-surface-300 leading-relaxed animate-in fade-in duration-200">
        <p>Restoranga bordingiz:</p>
        <ul class="space-y-1 list-disc list-inside text-surface-400 text-xs">
          <li><strong>Client (Mijoz)</strong> — sizsiz! Menyu orqali "Menga bitta muzqaymoq bering" deb buyurtma (Request) berasiz.</li>
          <li><strong>Server (Oshpaz)</strong> — oshxonada turgan usta. Buyurtmangizni olib, muzqaymoq tayyorlaydi va sizga likopchada (Response) qaytaradi.</li>
        </ul>
      </div>

      <div v-else class="space-y-2 font-mono text-xs animate-in fade-in duration-200">
        <div class="text-cyan-300 font-bold">Linux / C++ Socket: TCP Handshake & Connection</div>
        <pre class="p-3.5 rounded-xl bg-surface-950 border border-surface-800 text-cyan-300 text-[11px] leading-relaxed overflow-x-auto"><code>// POSIX socket connection (Client to Server)
int sockfd = socket(AF_INET, SOCK_STREAM, 0);
connect(sockfd, (struct sockaddr*)&amp;server_addr, sizeof(server_addr));
// 1. SYN -> 2. SYN-ACK -> 3. ACK (TCP Ulanish o'rnatildi)</code></pre>
      </div>
    </div>

    <!-- Request Response Cycle (Hard & Deep) -->
    <section class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 1. Request — Response Tsiklining 4 Bosqichi
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-2">
          <div class="text-brand-400 font-bold text-sm">1. HTTP Request (So‘rov)</div>
          <p class="text-surface-300 text-[11px] font-sans leading-relaxed">
            Brauzer serverga URL, HTTP metod (GET/POST), sarlavhalar (Headers: User-Agent, Cookie) va body yuboradi.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-surface-900 border border-surface-800 space-y-2">
          <div class="text-emerald-400 font-bold text-sm">2. HTTP Response (Javob)</div>
          <p class="text-surface-300 text-[11px] font-sans leading-relaxed">
            Server so‘rovni qayta ishlab, Status kod (200 OK, 404 Not Found), javob sarlavhalari va HTML baytlarini qaytaradi.
          </p>
        </div>
      </div>
    </section>

    <!-- Interactive Live Code Editor -->
    <section class="space-y-4 pt-4">
      <h2 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <span class="text-brand-400">#</span> 2. Jonli Mashq: Serverga So‘rov Yuborishni Sinab Ko‘ring
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
