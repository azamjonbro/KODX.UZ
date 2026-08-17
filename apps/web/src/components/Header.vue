<template>
  <header class="sticky top-0 z-30 w-full border-b border-surface-800/80 bg-surface-950/80 backdrop-blur-xl">
    <div class="w-full flex h-14 items-center justify-between px-6">
      <!-- Top Center Navigation Tabs -->
      <nav class="flex items-center gap-1.5">
        <router-link
          v-for="link in topLinks"
          :key="link.path"
          :to="link.path"
          class="px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150"
          :class="[
            isLinkActive(link)
              ? 'bg-surface-900 text-white border border-surface-700/60 shadow-sm'
              : 'text-surface-400 hover:text-surface-100 hover:bg-surface-900/40'
          ]"
        >
          {{ link.label }}
        </router-link>
      </nav>

      <!-- Right Header Elements: Streak, Bell & Avatar -->
      <div class="flex items-center gap-4">
        <!-- Daily Streak (🔥 12 kun) -->
        <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-900/80 border border-surface-800/80 text-xs font-mono font-medium text-surface-200">
          <span class="text-amber-400">🔥</span>
          <span>12 kun</span>
        </div>

        <!-- Notification Bell -->
        <button
          type="button"
          class="relative p-2 text-surface-400 hover:text-white rounded-lg hover:bg-surface-900 transition-colors"
          title="Xabarnomalar"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-400"></span>
        </button>

        <!-- User Profile Avatar -->
        <div class="w-8 h-8 rounded-full overflow-hidden bg-surface-800 border border-surface-700 flex items-center justify-center cursor-pointer hover:border-brand-500 transition-colors">
          <span class="text-xs font-bold text-surface-200">👨‍💻</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

interface NavItem {
  label: string;
  path: string;
  exact?: boolean;
}

const topLinks: NavItem[] = [
  { label: 'Bosh sahifa', path: '/', exact: true },
  { label: 'Kurslar', path: '/html/kirish' },
  { label: 'Yo\'l xaritalari', path: '/roadmaps' },
  { label: 'Amaliyot', path: '/practice' },
  { label: 'Challenges', path: '/challenges' },
];

function isLinkActive(link: NavItem) {
  if (link.exact) {
    return route.path === link.path;
  }
  if (link.label === 'Kurslar') {
    return route.path.startsWith('/html') || route.path.startsWith('/css') || route.path.startsWith('/javascript');
  }
  return route.path.startsWith(link.path);
}
</script>
