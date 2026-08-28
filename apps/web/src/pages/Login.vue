<template>
  <div class="w-full flex-1 flex items-center justify-center p-4 sm:p-8 my-auto relative select-none">
    <!-- Ambient Background Glows -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-brand-600/20 via-emerald-500/10 to-transparent blur-[120px] rounded-full pointer-events-none"></div>

    <div class="relative z-10 w-full max-w-md space-y-6">
      <!-- Top Brand Header -->
      <div class="text-center space-y-2">
        <router-link to="/" class="inline-flex items-center gap-2.5 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-brand-400 flex items-center justify-center text-surface-950 font-black shadow-lg shadow-brand-500/25 group-hover:scale-105 transition-transform">
            <span class="font-mono text-base">&lt;/&gt;</span>
          </div>
          <span class="font-mono tracking-tight font-extrabold text-2xl text-white">
            KODX<span class="text-brand-400">.uz</span>
          </span>
        </router-link>
        <p class="text-xs text-surface-400">
          O‘zbek dasturchilari platformasiga xush kelibsiz!
        </p>
      </div>

      <!-- Auth Card -->
      <div class="rounded-2xl bg-surface-900/80 border border-surface-800/80 backdrop-blur-2xl shadow-2xl p-6 space-y-5 text-left">
        <!-- Auth Tabs (Kirish / Ro'yxatdan o'tish) -->
        <div class="grid grid-cols-2 gap-1 p-1 rounded-xl bg-surface-950/80 border border-surface-800">
          <button
            type="button"
            @click="isRegister = false"
            class="py-2 text-xs font-bold rounded-lg transition-all"
            :class="!isRegister ? 'bg-surface-800 text-brand-400 shadow-sm' : 'text-surface-400 hover:text-white'"
          >
            Kirish (Login)
          </button>
          <button
            type="button"
            @click="isRegister = true"
            class="py-2 text-xs font-bold rounded-lg transition-all"
            :class="isRegister ? 'bg-surface-800 text-brand-400 shadow-sm' : 'text-surface-400 hover:text-white'"
          >
            Ro‘yxatdan o‘tish
          </button>
        </div>

        <!-- OAuth Buttons -->
        <div class="grid grid-cols-2 gap-3">
          <button
            type="button"
            @click="oauthLogin('github')"
            class="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-surface-950 hover:bg-surface-800 border border-surface-700 text-xs font-medium text-surface-200 transition-colors"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </button>

          <button
            type="button"
            @click="oauthLogin('google')"
            class="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-surface-950 hover:bg-surface-800 border border-surface-700 text-xs font-medium text-surface-200 transition-colors"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.36 7.33 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.16 0 9.97 0 12s.45 3.84 1.24 5.42l4.04-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.93 6.72-4.93z"/>
            </svg>
            <span>Google</span>
          </button>
        </div>

        <div class="flex items-center gap-3">
          <div class="h-px flex-1 bg-surface-800"></div>
          <span class="text-[10px] text-surface-500 font-mono uppercase">Yoki email orqali</span>
          <div class="h-px flex-1 bg-surface-800"></div>
        </div>

        <!-- Form Fields -->
        <form @submit.prevent="handleSubmit" class="space-y-3.5">
          <div v-if="isRegister" class="space-y-1">
            <label class="text-[11px] font-semibold text-surface-300">Ism va Familiya</label>
            <input
              v-model="form.name"
              type="text"
              required
              placeholder="Abdulloh Aliyev"
              class="w-full px-3.5 py-2 bg-surface-950 border border-surface-700 focus:border-brand-500 rounded-xl text-xs text-white placeholder-surface-500 focus:outline-none focus:ring-1 focus:ring-brand-500/30"
            />
          </div>

          <div class="space-y-1">
            <label class="text-[11px] font-semibold text-surface-300">Email manzili</label>
            <input
              v-model="form.email"
              type="email"
              required
              placeholder="abdulloh@example.com"
              class="w-full px-3.5 py-2 bg-surface-950 border border-surface-700 focus:border-brand-500 rounded-xl text-xs text-white placeholder-surface-500 focus:outline-none focus:ring-1 focus:ring-brand-500/30"
            />
          </div>

          <div class="space-y-1">
            <div class="flex items-center justify-between">
              <label class="text-[11px] font-semibold text-surface-300">Maxfiy parol</label>
              <a v-if="!isRegister" href="#" class="text-[10px] text-brand-400 hover:underline">Unutdingizmi?</a>
            </div>
            <div class="relative">
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                required
                placeholder="••••••••"
                class="w-full px-3.5 py-2 pr-10 bg-surface-950 border border-surface-700 focus:border-brand-500 rounded-xl text-xs text-white placeholder-surface-500 focus:outline-none focus:ring-1 focus:ring-brand-500/30"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-2.5 text-surface-500 hover:text-white"
              >
                {{ showPassword ? '🙈' : '👁️' }}
              </button>
            </div>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-all shadow-lg shadow-brand-500/20 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span v-if="loading" class="w-4 h-4 rounded-full border-2 border-surface-950 border-t-transparent animate-spin"></span>
            <span>{{ isRegister ? 'Akkaunt yaratish 🚀' : 'Tizimga kirish 🚀' }}</span>
          </button>
        </form>

        <!-- Feedback Alert if Success -->
        <div v-if="successMsg" class="p-3 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs text-center font-medium">
          {{ successMsg }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isRegister = ref(false);
const showPassword = ref(false);
const loading = ref(false);
const successMsg = ref('');

const form = reactive({
  name: '',
  email: '',
  password: '',
});

function handleSubmit() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    successMsg.value = isRegister.value
      ? 'Akkauntingiz muvaffaqiyatli yaratildi! Xush kelibsiz.'
      : 'Muvaffaqiyatli tizimga kirdingiz! Yo‘naltirilmoqda...';

    setTimeout(() => {
      router.push('/html/kirish');
    }, 1000);
  }, 800);
}

function oauthLogin(provider: string) {
  successMsg.value = `${provider.toUpperCase()} orqali autentifikatsiya qilindi!`;
  setTimeout(() => {
    router.push('/html/kirish');
  }, 800);
}
</script>
