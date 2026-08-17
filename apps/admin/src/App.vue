<template>
  <div class="min-h-screen bg-surface-950 text-surface-100 flex flex-col">
    <header class="border-b border-surface-800 bg-surface-900/80 px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-mono font-bold">
          K
        </div>
        <span class="font-bold text-lg text-white">KODX Admin</span>
      </div>
      <a href="http://localhost:5173" class="text-xs text-brand-400 hover:underline">← Asosiy Saytga O'tish</a>
    </header>
    <main class="flex-1">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
// Admin root App
</script>
