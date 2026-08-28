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

      <!-- Right Header Elements: Streak, Bell, Login Button & Avatar -->
      <div class="flex items-center gap-3 sm:gap-4">
        <!-- Daily Streak (🔥 12 kun) Modal Trigger -->
        <StreakModal />

        <!-- Notification Bell Dropdown -->
        <NotificationDropdown />

        <!-- User Profile Dropdown Menu -->
        <ProfileMenu />

        <!-- Quick Login Link Button -->
        <router-link
          to="/login"
          class="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-500/10 hover:bg-brand-500 border border-brand-500/30 hover:border-transparent text-brand-400 hover:text-surface-950 text-xs font-bold transition-all shadow-sm"
        >
          <span>Kirish</span>
          <span>→</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import StreakModal from './StreakModal.vue';
import NotificationDropdown from './NotificationDropdown.vue';
import ProfileMenu from './ProfileMenu.vue';

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
