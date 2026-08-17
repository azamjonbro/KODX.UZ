<template>
  <header class="sticky top-0 z-50 w-full border-b border-surface-800/80 bg-surface-950/80 backdrop-blur-xl">
    <div class="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-6">
        <router-link to="/" class="flex items-center gap-2 font-bold text-lg text-surface-100 hover:text-white transition-colors">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 to-brand-400 flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
            <span class="font-mono text-sm font-black">&lt;/&gt;</span>
          </div>
          <span class="font-mono tracking-tight font-extrabold text-xl text-white">KODX<span class="text-brand-400">.uz</span></span>
        </router-link>

        <nav class="hidden md:flex items-center gap-1">
          <router-link
            to="/"
            class="px-3 py-1.5 text-sm font-medium rounded-md transition-colors text-surface-300 hover:text-white hover:bg-surface-800/50"
            active-class="!text-white !bg-surface-800"
          >
            Bosh sahifa
          </router-link>
          <router-link
            to="/html/kirish"
            class="px-3 py-1.5 text-sm font-medium rounded-md transition-colors text-surface-300 hover:text-white hover:bg-surface-800/50"
            active-class="!text-white !bg-surface-800"
          >
            HTML
          </router-link>
          <router-link
            to="/css/kirish"
            class="px-3 py-1.5 text-sm font-medium rounded-md transition-colors text-surface-300 hover:text-white hover:bg-surface-800/50"
            active-class="!text-white !bg-surface-800"
          >
            CSS
          </router-link>
          <router-link
            to="/javascript/kirish"
            class="px-3 py-1.5 text-sm font-medium rounded-md transition-colors text-surface-300 hover:text-white hover:bg-surface-800/50"
            active-class="!text-white !bg-surface-800"
          >
            JavaScript
          </router-link>
        </nav>
      </div>

      <div class="flex items-center gap-3">
        <span class="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
          v2.0 Beta
        </span>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 text-surface-400 hover:text-white transition-colors rounded-lg hover:bg-surface-800/60"
          title="GitHub Repository"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// Header component for KODX 2.0
</script>
