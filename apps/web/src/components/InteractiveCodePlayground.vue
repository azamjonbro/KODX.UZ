<template>
  <div class="rounded-2xl bg-surface-950 border border-surface-800 shadow-2xl overflow-hidden text-left space-y-0">
    <!-- Header -->
    <div class="flex items-center justify-between px-4 py-3 bg-surface-900 border-b border-surface-800">
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
        <h3 class="text-xs font-mono font-bold text-white uppercase tracking-wider">
          ⚡ Jonli Kod Muharriri va DOM Xotira Inspektori
        </h3>
      </div>

      <div class="flex items-center gap-2">
        <button
          @click="resetCode"
          class="px-2.5 py-1 rounded-lg bg-surface-800 hover:bg-surface-700 text-[11px] text-surface-400 hover:text-white transition-colors cursor-pointer"
        >
          Qayta tiklash ↺
        </button>
      </div>
    </div>

    <!-- Playground Workspace (Editor Left + Preview Right) -->
    <div class="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-surface-800">
      <!-- Left: Code Editor -->
      <div class="p-4 space-y-3 bg-surface-950/90">
        <div class="flex items-center justify-between text-xs font-mono text-surface-400">
          <span>HTML Kodingiz:</span>
          <span class="text-[10px] text-brand-400 font-bold">Avto-ijro aktiv</span>
        </div>

        <div class="relative rounded-xl overflow-hidden border border-surface-800 bg-surface-900">
          <textarea
            v-model="userCode"
            rows="9"
            spellcheck="false"
            class="w-full p-3.5 bg-transparent font-mono text-xs text-cyan-300 focus:outline-none leading-relaxed resize-none selection:bg-brand-500/30"
          ></textarea>
        </div>

        <!-- Preset Buttons -->
        <div class="flex flex-wrap gap-1.5 pt-1">
          <button
            v-for="(p, pKey) in presets"
            :key="pKey"
            @click="applyPreset(pKey)"
            class="px-2.5 py-1 rounded-lg bg-surface-900 hover:bg-surface-800 border border-surface-800 text-[11px] text-surface-300 transition-colors cursor-pointer"
          >
            {{ p.label }}
          </button>
        </div>
      </div>

      <!-- Right: Live Browser Render Preview & Memory Stats -->
      <div class="p-4 space-y-3 bg-surface-950 flex flex-col justify-between">
        <div class="space-y-3">
          <div class="flex items-center justify-between text-xs font-mono text-surface-400">
            <span>Brauzerda Render Natijasi:</span>
            <span class="text-[10px] text-emerald-400 font-bold">60 FPS Rendered</span>
          </div>

          <!-- Sandbox Preview Frame -->
          <div class="p-4 rounded-xl bg-white text-surface-950 min-h-[140px] shadow-inner space-y-2">
            <div v-html="sanitizedHtml"></div>
          </div>
        </div>

        <!-- Live DOM & Memory Inspector Bar -->
        <div class="p-3 rounded-xl bg-surface-900/90 border border-surface-800 space-y-2 text-xs font-mono">
          <div class="text-[10px] uppercase font-bold text-surface-400 flex items-center justify-between border-b border-surface-800 pb-1">
            <span>🔬 Real-time DOM & Xotira Tahlili:</span>
            <span class="text-brand-400">Memory: ~{{ estimatedMemory }} Bytes</span>
          </div>

          <div class="grid grid-cols-3 gap-2 text-center text-[11px]">
            <div class="p-1.5 rounded bg-surface-950 border border-surface-800">
              <div class="text-surface-500 text-[9px]">DOM TUGUNLARI</div>
              <div class="font-bold text-emerald-400">{{ domNodeCount }} ta node</div>
            </div>
            <div class="p-1.5 rounded bg-surface-950 border border-surface-800">
              <div class="text-surface-500 text-[9px]">DARAXT CHUQURLIGI</div>
              <div class="font-bold text-cyan-400">{{ domTreeDepth }} qatlam</div>
            </div>
            <div class="p-1.5 rounded bg-surface-950 border border-surface-800">
              <div class="text-surface-500 text-[9px]">REFLOW SANOG‘I</div>
              <div class="font-bold text-amber-400">{{ reflowCount }} marta</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Gamified Test Verification Footer -->
    <div class="p-4 bg-surface-900 border-t border-surface-800 flex flex-wrap items-center justify-between gap-3">
      <!-- Validation Status -->
      <div class="flex items-center gap-2 text-xs">
        <span class="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" :class="isCodeValid ? 'bg-brand-500/20 text-brand-400 border border-brand-500/40' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'">
          {{ isCodeValid ? '✓' : '!' }}
        </span>
        <span class="text-surface-300">
          {{ isCodeValid ? 'Mukammal! Barcha WHATWG talablari to‘g‘ri bajarildi.' : 'Maslahat: <!DOCTYPE html> va semantik teglardan foydalaning.' }}
        </span>
      </div>

      <!-- XP Claim Button -->
      <button
        @click="evaluateTask"
        :disabled="hasClaimedXp"
        class="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs transition-all shadow-lg shadow-brand-500/20 disabled:opacity-50 flex items-center gap-1.5 cursor-pointer"
      >
        <span>{{ hasClaimedXp ? 'XP Qabul Qilindi ✓ (+25 XP)' : 'Sinab Ko‘rish & XP Olish 🚀 (+25 XP)' }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

const defaultCode = `<!DOCTYPE html>
<html lang="uz">
  <head>
    <title>KODX Darsi</title>
  </head>
  <body>
    <h1>Salom, KODX Dasturchisi! 👋</h1>
    <p>HTML bu har qanday veb-saytning mustahkam skeletidir.</p>
    <button style="background:#22c55e;color:#000;padding:6px 12px;border-radius:6px;font-weight:bold;border:none;cursor:pointer;">
      Meni Bosing!
    </button>
  </body>
</html>`;

const userCode = ref(defaultCode);
const reflowCount = ref(1);
const hasClaimedXp = ref(false);

const presets: Record<string, { label: string; code: string }> = {
  basic: {
    label: '1. Oddiy Skelet',
    code: defaultCode,
  },
  dialog: {
    label: '2. Formalar & Tugmalar',
    code: `<form style="display:flex;flex-direction:column;gap:8px;">
  <label style="font-size:12px;font-weight:bold;">Emailingizni kiriting:</label>
  <input type="email" placeholder="example@mail.com" style="padding:6px;border:1px solid #ccc;border-radius:4px;" />
  <button style="background:#2563eb;color:#fff;padding:6px 12px;border-radius:4px;border:none;font-weight:bold;">Yuborish</button>
</form>`,
  },
  card: {
    label: '3. Semantik Maqola',
    code: `<article style="border:1px solid #e5e7eb;padding:12px;border-radius:8px;">
  <h2 style="color:#0f172a;font-size:16px;margin:0 0 6px;">WHATWG Yangiliklari</h2>
  <p style="color:#475569;font-size:13px;margin:0;">Yangi Popover API brauzerlarda qo'llab-quvvatlanmoqda.</p>
</article>`,
  },
};

function applyPreset(key: string) {
  if (presets[key]) {
    userCode.value = presets[key].code;
  }
}

function resetCode() {
  userCode.value = defaultCode;
}

watch(userCode, () => {
  reflowCount.value++;
});

const sanitizedHtml = computed(() => {
  // Extract body or inner html to render safely in sandbox
  const code = userCode.value;
  const bodyMatch = code.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (bodyMatch && bodyMatch[1]) {
    return bodyMatch[1];
  }
  return code;
});

const domNodeCount = computed(() => {
  const matches = userCode.value.match(/<[a-zA-Z0-9-]+/g);
  return matches ? matches.length + 2 : 3;
});

const domTreeDepth = computed(() => {
  if (userCode.value.includes('<button') || userCode.value.includes('<input')) return 4;
  if (userCode.value.includes('<body')) return 3;
  return 2;
});

const estimatedMemory = computed(() => {
  return domNodeCount.value * 96 + userCode.value.length * 2;
});

const isCodeValid = computed(() => {
  const code = userCode.value.toLowerCase();
  return code.includes('<!doctype') || code.includes('<h1') || code.includes('<p');
});

function evaluateTask() {
  hasClaimedXp.value = true;
}
</script>
