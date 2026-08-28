<template>
  <div class="rounded-2xl bg-surface-950 border border-surface-800 p-6 text-left space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between border-b border-surface-800 pb-4">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center text-xl font-bold">
          🔬
        </div>
        <div>
          <h3 class="text-base font-bold text-white">Chromium Blink & V8 Xotira Arxitekturasi (Hard & Deep)</h3>
          <p class="text-xs text-surface-400">WHATWG Living Standard & C++ Memory Allocation</p>
        </div>
      </div>
      <span class="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-400 text-xs font-mono font-bold border border-purple-500/20">
        CORE INTERNALS
      </span>
    </div>

    <!-- 3 Core Technical Pillars -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
      <!-- 1. Node Allocation -->
      <div class="p-4 rounded-xl bg-surface-900/80 border border-surface-800 space-y-2">
        <div class="text-purple-400 font-bold flex items-center gap-1.5">
          <span>🧠</span> C++ Node Xotirasi
        </div>
        <p class="text-surface-300 text-[11px] leading-relaxed">
          Har bir HTML tegi Blink dvigatelida <strong>HTMLElement</strong> C++ klassining obyektidir. U vptr (virtual table pointer), parent, nextSibling va childNodes ko‘rsatkichlarini (pointer) saqlaydi.
        </p>
      </div>

      <!-- 2. Standards vs Quirks Mode -->
      <div class="p-4 rounded-xl bg-surface-900/80 border border-surface-800 space-y-2">
        <div class="text-cyan-400 font-bold flex items-center gap-1.5">
          <span>⚖️</span> Standards vs Quirks
        </div>
        <p class="text-surface-300 text-[11px] leading-relaxed">
          Agar <code>&lt;!DOCTYPE html&gt;</code> e’lon qilinmasa, brauzer 1999-yildagi Netscape/IE eski xatolarini takrorlovchi <strong>Quirks Mode</strong> rejimiga o‘tib, Box Model o‘lchamlarini noto‘g‘ri hisoblaydi.
        </p>
      </div>

      <!-- 3. Memory Leaks & Detached DOM -->
      <div class="p-4 rounded-xl bg-surface-900/80 border border-surface-800 space-y-2">
        <div class="text-red-400 font-bold flex items-center gap-1.5">
          <span>🛡️</span> Detached DOM Xavfi
        </div>
        <p class="text-surface-300 text-[11px] leading-relaxed">
          Agar DOM elementi sahifadan o‘chirilsa-yu, lekin JavaScript o‘zgaruvchisida unga havola saqlanib qolsa, V8 Garbage Collector uni xotiradan tozalay olmaydi va <strong>Memory Leak</strong> yuzaga keladi.
        </p>
      </div>
    </div>

    <!-- Blink C++ Code Representation -->
    <div class="space-y-2">
      <div class="flex items-center justify-between text-xs font-mono text-surface-400">
        <span class="text-brand-400 font-bold">📄 Blink Engine C++ Struktura (third_party/blink/renderer/core/dom/element.h):</span>
        <span>sizeof(Element) ≈ 96 Bytes</span>
      </div>

      <pre class="p-4 rounded-xl bg-surface-900/90 border border-surface-800 text-cyan-300 font-mono text-xs overflow-x-auto leading-relaxed"><code><span class="text-purple-400">class</span> <span class="text-yellow-300">CORE_EXPORT</span> <span class="text-emerald-400">Element</span> : <span class="text-purple-400">public</span> <span class="text-emerald-400">ContainerNode</span> {
 <span class="text-purple-400">private:</span>
  <span class="text-surface-500">// V8 va Blink o'rtasidagi to'g'ridan-to'g'ri C++ pointer havolalari</span>
  <span class="text-blue-400">QualifiedName</span> tag_name_;                <span class="text-surface-500">// Masalan: "html", "h1", "div"</span>
  <span class="text-blue-400">Member&lt;ElementData&gt;</span> element_data_;      <span class="text-surface-500">// Atributlar ro'yxati (id, class, lang)</span>
  <span class="text-blue-400">Member&lt;LayoutObject&gt;</span> layout_object_;    <span class="text-surface-500">// Ekrandagi render qilinuvchi piksellar</span>
  <span class="text-purple-400">uint32_t</span> element_flags_;               <span class="text-surface-500">// Holat bitlari (is_focused, is_active)</span>
};</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
// Chromium Blink C++ Engine Inspector Component
</script>
