<template>
  <div class="relative">
    <!-- Notification Bell Button -->
    <button
      type="button"
      @click="isOpen = !isOpen"
      class="relative p-2 text-surface-400 hover:text-white rounded-lg hover:bg-surface-900 transition-colors"
      :class="{ 'text-white bg-surface-900': isOpen }"
      title="Bildirishnomalar"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
      <span v-if="unreadCount > 0" class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
    </button>

    <!-- Overlay backdrop for closing -->
    <div
      v-if="isOpen"
      @click="isOpen = false"
      class="fixed inset-0 z-40"
    ></div>

    <!-- Dropdown Menu -->
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-surface-900/95 border border-surface-800 backdrop-blur-2xl shadow-2xl z-50 overflow-hidden text-left animate-in fade-in zoom-in-95 duration-150"
    >
      <!-- Header -->
      <div class="flex items-center justify-between px-4 py-3 border-b border-surface-800/80 bg-surface-950/60">
        <div class="flex items-center gap-2">
          <h3 class="text-xs font-bold text-white uppercase tracking-wider">Bildirishnomalar</h3>
          <span v-if="unreadCount > 0" class="px-1.5 py-0.5 rounded-full bg-brand-500/20 text-brand-400 text-[10px] font-mono font-bold">
            {{ unreadCount }} yangi
          </span>
        </div>
        <button
          @click="markAllAsRead"
          class="text-[11px] text-surface-400 hover:text-brand-400 transition-colors"
        >
          O‘qilgan deb belgilash
        </button>
      </div>

      <!-- Filter Tabs -->
      <div class="flex border-b border-surface-800/80 px-3 pt-2 gap-1 bg-surface-950/30">
        <button
          v-for="tab in ['barchasi', 'yutuqlar', 'darslar']"
          :key="tab"
          @click="activeFilter = tab"
          class="px-3 py-1.5 text-[11px] font-semibold rounded-lg capitalize transition-all"
          :class="[
            activeFilter === tab
              ? 'bg-surface-800 text-brand-400 border border-surface-700/60'
              : 'text-surface-400 hover:text-surface-200'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Notification Items List -->
      <div class="max-h-80 overflow-y-auto divide-y divide-surface-800/60 p-1">
        <div
          v-for="item in filteredNotifications"
          :key="item.id"
          @click="markAsRead(item.id)"
          class="p-3 hover:bg-surface-800/50 rounded-xl transition-colors cursor-pointer flex gap-3 items-start group"
          :class="{ 'bg-surface-800/20': !item.read }"
        >
          <!-- Icon -->
          <div
            class="w-8 h-8 rounded-xl flex items-center justify-center text-sm shrink-0 border"
            :class="item.iconBg"
          >
            {{ item.icon }}
          </div>

          <!-- Content -->
          <div class="flex-1 min-w-0 space-y-0.5">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-white group-hover:text-brand-300 transition-colors truncate">
                {{ item.title }}
              </span>
              <span class="text-[10px] text-surface-500 font-mono shrink-0 ml-2">
                {{ item.time }}
              </span>
            </div>
            <p class="text-[11px] text-surface-300 leading-relaxed line-clamp-2">
              {{ item.message }}
            </p>
          </div>

          <!-- Unread Dot -->
          <span v-if="!item.read" class="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 shrink-0"></span>
        </div>

        <div v-if="filteredNotifications.length === 0" class="py-8 text-center text-surface-500 text-xs">
          Hech qanday bildirishnoma yo‘q
        </div>
      </div>

      <!-- Footer -->
      <div class="p-2.5 border-t border-surface-800/80 bg-surface-950/60 text-center">
        <router-link
          to="/html/kirish"
          @click="isOpen = false"
          class="text-[11px] text-brand-400 hover:underline font-semibold"
        >
          Faollik tarixini to‘liq ko‘rish →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const isOpen = ref(false);
const activeFilter = ref('barchasi');

interface NotificationItem {
  id: string;
  type: 'yutuqlar' | 'darslar' | 'tizim';
  title: string;
  message: string;
  time: string;
  icon: string;
  iconBg: string;
  read: boolean;
}

const notifications = ref<NotificationItem[]>([
  {
    id: 'n1',
    type: 'yutuqlar',
    title: '🔥 12 kunlik Streak!',
    message: 'Ketma-ket 12 kun davomida bilim oldingiz. +50 XP bonus qo‘shildi!',
    time: '5 daqiqa oldin',
    icon: '🔥',
    iconBg: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    read: false,
  },
  {
    id: 'n2',
    type: 'darslar',
    title: 'HTML Darsi Tugatildi',
    message: 'Siz "HTML Tarixi va Evolyutsiyasi" modulini 100% bajardingiz.',
    time: '2 soat oldin',
    icon: '✅',
    iconBg: 'bg-brand-500/10 border-brand-500/30 text-brand-400',
    read: false,
  },
  {
    id: 'n3',
    type: 'yutuqlar',
    title: '🏆 Level 7 Erishildi',
    message: 'Tabriklaymiz! Siz 1,240 XP ga yetdingiz va yangi nishonni ochdingiz.',
    time: 'Kecha',
    icon: '🏆',
    iconBg: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    read: true,
  },
  {
    id: 'n4',
    type: 'darslar',
    title: 'Yangi Amaliy Mashq',
    message: 'JavaScript bo‘limiga "Event Loop va Promise" mashqi qo‘shildi.',
    time: '2 kun oldin',
    icon: '⚡',
    iconBg: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    read: true,
  },
]);

const unreadCount = computed(() => {
  return notifications.value.filter(n => !n.read).length;
});

const filteredNotifications = computed(() => {
  if (activeFilter.value === 'barchasi') return notifications.value;
  return notifications.value.filter(n => n.type === activeFilter.value);
});

function markAllAsRead() {
  notifications.value.forEach(n => (n.read = true));
}

function markAsRead(id: string) {
  const found = notifications.value.find(n => n.id === id);
  if (found) found.read = true;
}
</script>
