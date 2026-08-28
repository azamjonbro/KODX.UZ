<template>
  <div class="space-y-8 max-w-5xl mx-auto pb-24 text-left animate-in fade-in duration-300">
    <!-- Top Breadcrumb & Quick Actions -->
    <div class="flex items-center justify-between flex-wrap gap-3 text-xs font-mono">
      <nav class="flex items-center flex-wrap gap-2 text-surface-400">
        <router-link :to="courseTheme.rootPath" class="hover:text-surface-200 transition-colors flex items-center gap-1">
          <span>{{ courseTheme.icon }}</span> {{ courseTheme.title }}
        </router-link>
        <span class="text-surface-600">&gt;</span>
        <span class="text-surface-400">{{ lesson?.moduleTitle }}</span>
        <span class="text-surface-600">&gt;</span>
        <span class="text-brand-400 font-bold">{{ lesson?.title }}</span>
      </nav>

      <div class="flex items-center gap-2">
        <button
          @click="toggleBookmark"
          class="p-2 rounded-xl border border-surface-800 bg-surface-900/60 hover:bg-surface-800 text-surface-400 hover:text-amber-400 transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
          :title="isBookmarked ? 'Saqlanganlardan o‘chirish' : 'Darsni saqlab qo‘yish'"
        >
          <span :class="isBookmarked ? 'text-amber-400' : ''">{{ isBookmarked ? '★' : '☆' }}</span>
          <span class="text-[11px] hidden sm:inline">{{ isBookmarked ? 'Saqlandi' : 'Saqlash' }}</span>
        </button>
      </div>
    </div>

    <!-- Hero Header Banner (Ultra Premium Glassmorphic Studio Card) -->
    <div class="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-surface-900/90 via-surface-950/90 to-brand-950/30 border border-surface-800/80 hover:border-surface-700/80 shadow-2xl overflow-hidden backdrop-blur-xl space-y-5">
      <div class="absolute -right-16 -top-16 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -left-16 -bottom-16 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Module & ID Pill -->
      <div class="flex flex-wrap items-center justify-between gap-2">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono font-bold">
          <span>⚡</span> {{ lesson?.moduleTitle }}
        </div>
        <span class="text-xs font-mono text-surface-500 font-semibold">ID: {{ lesson?.id }}</span>
      </div>

      <!-- Main Title & Description -->
      <div class="space-y-2.5">
        <h1 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
          {{ lesson?.title }}
        </h1>
        <p class="text-xs sm:text-sm text-surface-300 leading-relaxed max-w-3xl">
          {{ lesson?.description }}
        </p>
      </div>

      <!-- CRP Performance Badges Bar -->
      <div class="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono">
        <span class="inline-flex items-center gap-1.5 bg-surface-950/80 px-3 py-1.5 rounded-xl border border-surface-800 text-surface-300 shadow-sm">
          <svg class="w-3.5 h-3.5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ lesson?.estimatedMinutes }} daqiqa o‘qish
        </span>
        <span class="inline-flex items-center gap-1.5 bg-surface-950/80 px-3 py-1.5 rounded-xl border border-surface-800 text-blue-400 shadow-sm font-semibold">
          <span>📜</span> {{ lesson?.spec }}
        </span>
        <span
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-semibold shadow-sm"
          :class="[
            lesson?.deepDive?.crpCost?.reflow === 'High'
              ? 'bg-red-950/40 text-red-400 border-red-500/30'
              : lesson?.deepDive?.crpCost?.reflow === 'Medium'
              ? 'bg-amber-950/40 text-amber-400 border-amber-500/30'
              : 'bg-emerald-950/40 text-emerald-400 border-emerald-500/30'
          ]"
        >
          <span>⚡</span> Reflow: {{ lesson?.deepDive?.crpCost?.reflow }}
        </span>
        <span class="inline-flex items-center gap-1.5 bg-purple-950/40 px-3 py-1.5 rounded-xl border border-purple-500/30 text-purple-300 shadow-sm font-semibold">
          <span>♿</span> {{ lesson?.deepDive?.axTreeMapping?.implicitRole }}
        </span>
      </div>
    </div>

    <!-- Multi-Layer Tab Navigator (Sleek Glassmorphic Pills) -->
    <div class="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-surface-950/90 border border-surface-800/80 backdrop-blur-xl">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        class="px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer select-none"
        :class="[
          activeTab === tab.id
            ? 'bg-brand-500 text-surface-950 font-bold shadow-lg shadow-brand-500/25 scale-[1.02]'
            : 'text-surface-400 hover:text-white hover:bg-surface-900/80'
        ]"
      >
        <span>{{ tab.icon }}</span>
        <span>{{ tab.label }}</span>
        <span
          v-if="tab.badge"
          class="px-1.5 py-0.5 rounded-md text-[10px] font-mono"
          :class="activeTab === tab.id ? 'bg-surface-950/20 text-surface-950 font-bold' : 'bg-surface-800 text-surface-400'"
        >
          {{ tab.badge }}
        </span>
      </button>
    </div>

    <!-- TAB 1: 📘 Darslik & Standartlar (Normative Theory & Specs) -->
    <div v-if="activeTab === 'theory'" class="space-y-8 animate-in fade-in duration-200">
      <!-- Rendered Markdown Content -->
      <div
        class="prose prose-invert max-w-none text-surface-200 text-sm sm:text-base leading-relaxed space-y-4 font-sans"
        v-html="renderedContent"
      ></div>

      <!-- Attributes Reference Table -->
      <div v-if="lesson?.attributes && lesson.attributes.length > 0" class="space-y-3 pt-4">
        <h3 class="text-base sm:text-lg font-bold text-white flex items-center gap-2">
          <span>📋</span> Standart Atributlar Jadvali
        </h3>
        <div class="overflow-x-auto rounded-2xl border border-surface-800 bg-surface-950/60 shadow-xl">
          <table class="w-full text-left text-xs font-mono divide-y divide-surface-800">
            <thead class="bg-surface-900/90 text-surface-400 uppercase tracking-wider">
              <tr>
                <th class="p-3.5">Atribut</th>
                <th class="p-3.5">Turi</th>
                <th class="p-3.5">Boshlang‘ich</th>
                <th class="p-3.5">Tavsifi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-surface-800/60">
              <tr v-for="attr in lesson.attributes" :key="attr.name" class="hover:bg-surface-900/40 transition-colors">
                <td class="p-3.5 font-bold text-brand-400">{{ attr.name }}</td>
                <td class="p-3.5 text-blue-400">{{ attr.type }}</td>
                <td class="p-3.5 text-surface-500">{{ attr.defaultVal }}</td>
                <td class="p-3.5 font-sans text-surface-300">{{ attr.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Pro Tips & Gotchas Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <!-- Pro Tips -->
        <div class="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
          <div class="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <span>💡</span> Pro Maslahatlar (Best Practices)
          </div>
          <ul class="space-y-2 text-xs text-surface-300 list-disc list-inside leading-relaxed">
            <li v-for="(tip, idx) in lesson?.proTips" :key="idx">{{ tip }}</li>
          </ul>
        </div>

        <!-- Gotchas / Pitfalls -->
        <div class="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-3">
          <div class="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <span>⚠️</span> Ko‘p Uchraydigan Xatolar (Gotchas)
          </div>
          <ul class="space-y-2 text-xs text-surface-300 list-disc list-inside leading-relaxed">
            <li v-for="(gotcha, idx) in lesson?.gotchas" :key="idx">{{ gotcha }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- TAB 2: 🔬 Dvigatel ichki tuzilishi (Blink / Style Engine / V8) -->
    <div v-else-if="activeTab === 'internals'" class="space-y-6 animate-in fade-in duration-200">
      <!-- C++ Class Hierarchy Visualizer -->
      <div class="p-6 rounded-3xl bg-surface-900/80 border border-surface-800 space-y-4">
        <h3 class="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
          <span>🧬</span> {{ courseTheme.internalsHeading }}
        </h3>

        <div class="flex flex-wrap items-center gap-2 font-mono text-xs">
          <template v-for="(cls, cIdx) in lesson?.deepDive?.blinkClassHierarchy" :key="cIdx">
            <span
              class="px-3 py-1.5 rounded-xl border shadow-sm"
              :class="[
                cIdx === (lesson?.deepDive?.blinkClassHierarchy?.length || 0) - 1
                  ? 'bg-brand-500/20 text-brand-300 border-brand-500/40 font-bold'
                  : 'bg-surface-950 text-surface-300 border-surface-800'
              ]"
            >
              {{ cls }}
            </span>
            <span v-if="cIdx < (lesson?.deepDive?.blinkClassHierarchy?.length || 0) - 1" class="text-surface-600 font-bold">→</span>
          </template>
        </div>

        <div class="p-3.5 rounded-2xl bg-surface-950 border border-surface-800/80 text-xs text-surface-400 font-mono flex items-center justify-between">
          <span>Xotiradagi Hajmi:</span>
          <span class="text-brand-400 font-bold">{{ lesson?.deepDive?.memoryAllocation }}</span>
        </div>
      </div>

      <!-- Real C++ Implementation Code Card -->
      <div class="p-6 rounded-3xl bg-surface-900/80 border border-surface-800 space-y-4">
        <div class="flex items-center justify-between border-b border-surface-800 pb-3">
          <div class="flex items-center gap-2">
            <span class="text-lg">⚙️</span>
            <h4 class="text-sm font-bold text-white font-mono">{{ courseTheme.engineName }} C++ Implementatsiyasi</h4>
          </div>
          <span class="text-[11px] font-mono text-brand-400">{{ lesson?.cppInternalCode?.filename }}</span>
        </div>

        <pre class="p-4 rounded-2xl bg-surface-950 border border-surface-800 text-cyan-300 text-xs font-mono leading-relaxed overflow-x-auto shadow-inner"><code>{{ lesson?.cppInternalCode?.code }}</code></pre>

        <p class="text-xs text-surface-300 leading-relaxed font-sans">
          {{ lesson?.cppInternalCode?.explanation }}
        </p>
      </div>

      <BrowserInternalsDeepDive />
    </div>

    <!-- TAB 3: ♿ Accessibility & AXTree (A11y & Screen Readers) -->
    <div v-else-if="activeTab === 'a11y'" class="space-y-6 animate-in fade-in duration-200">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Implicit Role -->
        <div class="p-5 rounded-2xl bg-surface-900/80 border border-surface-800 space-y-2">
          <div class="text-[11px] font-mono text-surface-400 uppercase">WAI-ARIA Implicit Role</div>
          <div class="text-base font-bold text-brand-400 font-mono">{{ lesson?.deepDive?.axTreeMapping?.implicitRole }}</div>
          <p class="text-xs text-surface-400">Brauzer ushbu elementga avtomatik biriktiruvchi accessibility roli.</p>
        </div>

        <!-- Accessible Name Algorithm -->
        <div class="p-5 rounded-2xl bg-surface-900/80 border border-surface-800 space-y-2">
          <div class="text-[11px] font-mono text-surface-400 uppercase">Accessible Name (accName)</div>
          <div class="text-xs font-bold text-blue-400 font-mono">{{ lesson?.deepDive?.axTreeMapping?.accessibleName }}</div>
          <p class="text-xs text-surface-400">Ekran o‘quvchi dasturlar nomni hisoblash ketma-ketligi.</p>
        </div>

        <!-- Keyboard Navigation -->
        <div class="p-5 rounded-2xl bg-surface-900/80 border border-surface-800 space-y-2">
          <div class="text-[11px] font-mono text-surface-400 uppercase">Klaviatura Fokusi</div>
          <div class="text-xs font-bold text-purple-400 font-mono">Tab / Space / Enter</div>
          <p class="text-xs text-surface-400">{{ lesson?.deepDive?.axTreeMapping?.keyboardNav }}</p>
        </div>
      </div>

      <!-- Screen Reader Output Simulation -->
      <div class="p-6 rounded-3xl bg-surface-900/80 border border-surface-800 space-y-4">
        <h4 class="text-sm font-bold text-white font-mono flex items-center gap-2">
          <span>🔊</span> NVDA / VoiceOver Ekran O‘quvchi Ovozli Simulyatsiyasi
        </h4>
        <div class="p-4 rounded-2xl bg-surface-950 border border-purple-500/30 font-mono text-xs text-purple-300 leading-relaxed flex items-center gap-3">
          <span class="text-xl">🎙️</span>
          <span>"{{ lesson?.title }}, {{ lesson?.deepDive?.axTreeMapping?.implicitRole }}, boshqaruv tugmasi. Faollashtirish uchun Enter bosing."</span>
        </div>
      </div>
    </div>

    <!-- TAB 4: 🛡️ Xavfsizlik & Core Web Vitals -->
    <div v-else-if="activeTab === 'security'" class="space-y-6 animate-in fade-in duration-200">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Security & XSS -->
        <div class="p-6 rounded-3xl bg-surface-900/80 border border-red-500/30 space-y-4">
          <div class="flex items-center gap-2 text-red-400 font-bold text-sm font-mono">
            <span>🛡️</span> XSS Vektori va Xavflar
          </div>
          <div class="p-3.5 rounded-xl bg-surface-950 border border-red-500/20 text-xs font-mono text-red-300">
            {{ lesson?.deepDive?.security?.xssVector }}
          </div>
          <p class="text-xs text-surface-300 leading-relaxed">
            <strong>Himoya Qoidasi:</strong> {{ lesson?.deepDive?.security?.sanitizationTip }}
          </p>
        </div>

        <!-- Core Web Vitals -->
        <div class="p-6 rounded-3xl bg-surface-900/80 border border-blue-500/30 space-y-4">
          <div class="flex items-center gap-2 text-blue-400 font-bold text-sm font-mono">
            <span>⚡</span> Core Web Vitals (Metrika: {{ lesson?.deepDive?.coreWebVitals?.metric }})
          </div>
          <p class="text-xs text-surface-300 leading-relaxed">
            {{ lesson?.deepDive?.coreWebVitals?.impact }}
          </p>
          <div class="p-3.5 rounded-xl bg-surface-950 border border-blue-500/20 text-xs font-mono text-blue-300">
            <strong>Optimizatsiya:</strong> {{ lesson?.deepDive?.coreWebVitals?.optimizationRule }}
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 5: 👶 5 Yoshli Bola Uchun (Story & C++ Under-the-hood Toggle) -->
    <div v-else-if="activeTab === 'kid'" class="space-y-6 animate-in fade-in duration-200">
      <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-brand-500/10 to-surface-900 border border-amber-500/30 space-y-6 shadow-2xl">
        <div class="flex items-center justify-between flex-wrap gap-2 border-b border-amber-500/20 pb-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-2xl flex items-center justify-center">
              👶
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">{{ lesson?.kidAnalogy?.title }}</h3>
              <p class="text-xs text-amber-400 font-mono">Sodda hayotiy analogiya orqali tushunish</p>
            </div>
          </div>

          <button
            @click="showKidUnderTheHood = !showKidUnderTheHood"
            class="px-3 py-1.5 rounded-xl bg-surface-900 hover:bg-surface-800 text-xs font-mono text-brand-400 border border-brand-500/30 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>{{ showKidUnderTheHood ? 'Analogiyaga qaytish' : '🔬 Ostidagi Real Kodni Ko‘rish' }}</span>
          </button>
        </div>

        <div v-if="!showKidUnderTheHood" class="space-y-4">
          <p class="text-sm sm:text-base text-surface-200 leading-relaxed font-normal">
            {{ lesson?.kidAnalogy?.story }}
          </p>

          <div class="p-4 rounded-2xl bg-surface-950/80 border border-amber-500/20 flex items-center gap-3 text-xs">
            <span class="text-lg">🎯</span>
            <span class="text-amber-300 font-medium"><strong>Xulosa:</strong> {{ lesson?.kidAnalogy?.keyTakeaway }}</span>
          </div>
        </div>

        <!-- Under the Hood C++ Snippet -->
        <div v-else class="space-y-3 animate-in fade-in duration-200">
          <div class="flex items-center justify-between text-xs font-mono text-cyan-300">
            <span>{{ lesson?.cppInternalCode?.filename }}</span>
            <span class="text-surface-400">{{ courseTheme.engineName }} Core</span>
          </div>
          <pre class="p-4 rounded-2xl bg-surface-950 border border-surface-800 text-cyan-300 text-xs font-mono leading-relaxed overflow-x-auto shadow-inner"><code>{{ lesson?.cppInternalCode?.code }}</code></pre>
          <p class="text-xs text-surface-400 leading-relaxed font-sans">
            {{ lesson?.cppInternalCode?.explanation }}
          </p>
        </div>
      </div>
    </div>

    <!-- TAB 6: 💻 Jonli Sandbox (Interactive IDE) -->
    <div v-else-if="activeTab === 'sandbox'" class="space-y-4 animate-in fade-in duration-200">
      <InteractiveCodePlayground />
    </div>

    <!-- TAB 7: 🎬 Video Simulyator -->
    <div v-else-if="activeTab === 'video'" class="space-y-4 animate-in fade-in duration-200">
      <InteractiveEngineVisualizer />
    </div>

    <!-- TAB 8: 🧩 Debugging Challenge & Quiz Arena -->
    <div v-else-if="activeTab === 'quiz'" class="space-y-8 animate-in fade-in duration-200">
      <!-- Debugging Challenge Card -->
      <div v-if="lesson?.deepDive?.debuggingChallenge" class="p-6 sm:p-8 rounded-3xl bg-surface-900/90 border border-amber-500/30 space-y-5 shadow-xl">
        <div class="flex items-center justify-between border-b border-surface-800 pb-3">
          <div class="flex items-center gap-2.5">
            <span class="text-xl">🛠️</span>
            <h3 class="text-base font-bold text-white">{{ lesson.deepDive.debuggingChallenge.title }}</h3>
          </div>
          <span class="text-xs font-mono font-bold text-amber-400">+25 XP Challenge</span>
        </div>

        <p class="text-xs text-surface-300 leading-relaxed">
          {{ lesson.deepDive.debuggingChallenge.bugDescription }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
          <!-- Broken Code -->
          <div class="space-y-1.5">
            <div class="text-red-400 font-bold flex items-center gap-1">
              <span>✗</span> Xato Kod:
            </div>
            <pre class="p-3.5 rounded-2xl bg-surface-950 border border-red-500/30 text-red-300 overflow-x-auto leading-relaxed"><code>{{ lesson.deepDive.debuggingChallenge.brokenCode }}</code></pre>
          </div>

          <!-- Fixed Code -->
          <div class="space-y-1.5">
            <div class="text-emerald-400 font-bold flex items-center gap-1">
              <span>✓</span> To‘g‘rilangan Normativ Kod:
            </div>
            <pre class="p-3.5 rounded-2xl bg-surface-950 border border-emerald-500/30 text-emerald-300 overflow-x-auto leading-relaxed"><code>{{ lesson.deepDive.debuggingChallenge.fixedCode }}</code></pre>
          </div>
        </div>
      </div>

      <!-- Multiple Choice Quiz Card -->
      <div class="p-6 sm:p-8 rounded-3xl bg-surface-900/80 border border-surface-800 space-y-6">
        <div class="flex items-center justify-between border-b border-surface-800 pb-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-500/40 text-xl flex items-center justify-center">
              🎯
            </div>
            <div>
              <h3 class="text-base font-bold text-white">Tezkor Injiniring Savollari</h3>
              <p class="text-xs text-surface-400 font-mono">To‘g‘ri javoblar orqali +XP to‘plang</p>
            </div>
          </div>
          <span class="text-xs font-mono text-brand-400 font-bold">{{ quizScore }} / {{ (lesson?.quiz || []).length }} Ball</span>
        </div>

        <div class="space-y-5">
          <div
            v-for="(q, qIdx) in (lesson?.quiz || [])"
            :key="qIdx"
            class="p-5 rounded-2xl bg-surface-950 border border-surface-800 space-y-3 text-left"
          >
            <h4 class="text-sm font-bold text-white">{{ qIdx + 1 }}. {{ q.question }}</h4>
            <div class="space-y-2">
              <button
                v-for="(opt, oIdx) in q.options"
                :key="oIdx"
                @click="answerQuiz(qIdx, oIdx)"
                :disabled="userAnswers[qIdx] !== undefined"
                class="w-full p-3 rounded-xl text-xs font-mono text-left transition-all border cursor-pointer flex items-center justify-between"
                :class="[
                  userAnswers[qIdx] === undefined
                    ? 'bg-surface-900 border-surface-800 hover:border-brand-500/50 text-surface-200'
                    : oIdx === q.correct
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                    : userAnswers[qIdx] === oIdx
                    ? 'bg-red-500/20 border-red-500 text-red-300 font-bold'
                    : 'bg-surface-900 border-surface-800/40 text-surface-500 opacity-50'
                ]"
              >
                <span>{{ opt }}</span>
                <span v-if="userAnswers[qIdx] !== undefined && oIdx === q.correct">✓</span>
                <span v-else-if="userAnswers[qIdx] === oIdx && oIdx !== q.correct">✗</span>
              </button>
            </div>
            <p v-if="userAnswers[qIdx] !== undefined" class="text-[11px] text-surface-400 pt-1">
              💡 <strong>Izoh:</strong> {{ q.explanation }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Navigation -->
    <div class="pt-8 border-t border-surface-800 flex flex-col lg:flex-row items-center justify-between gap-4">
      
      <!-- Previous Lesson -->
      <button
        v-if="prevLesson"
        @click="navigateToLesson(prevLesson.path)"
        class="w-full lg:w-[30%] group flex items-center gap-3 p-3 rounded-xl bg-surface-900/70 hover:bg-surface-800/80 border border-surface-800 hover:border-surface-700 text-surface-300 hover:text-white transition-all text-xs cursor-pointer"
      >
        <div class="w-8 h-8 rounded-lg bg-surface-800 group-hover:bg-surface-700 flex items-center justify-center text-surface-400 group-hover:text-white transition-colors shrink-0">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </div>
        <div class="min-w-0 flex-1 text-left">
          <div class="text-[10px] text-surface-500 font-medium uppercase tracking-wider">Oldingi dars</div>
          <div class="truncate font-semibold text-surface-200 group-hover:text-white">{{ prevLesson.title }}</div>
        </div>
      </button>
      <div v-else class="w-full lg:w-[30%] hidden lg:block"></div>

      <!-- Mark Completed Button -->
      <button
        @click="completeLesson"
        class="w-full lg:w-[35%] px-8 py-3.5 rounded-2xl font-bold text-sm transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
        :class="[
          isCompleted
            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
            : 'bg-brand-500 hover:bg-brand-400 text-surface-950 shadow-brand-500/25 hover:scale-105'
        ]"
      >
        <span v-if="isCompleted">✓ Dars O‘zlashtirildi</span>
        <span v-else>Darsni O‘zlashtirdim ✓ (+50 XP)</span>
      </button>

      <!-- Next Lesson (Prominent Green Card) -->
      <button
        v-if="nextLesson"
        @click="navigateToLesson(nextLesson.path)"
        class="w-full lg:w-[30%] group flex items-center gap-3 p-3 rounded-xl bg-brand-950/80 hover:bg-brand-900/90 border border-brand-500/30 hover:border-brand-500/60 text-surface-100 transition-all text-xs shadow-lg shadow-brand-950/40 cursor-pointer"
      >
        <div class="min-w-0 flex-1 text-right">
          <div class="text-[10px] text-brand-400 font-semibold uppercase tracking-wider">Keyingi dars</div>
          <div class="truncate font-bold text-white group-hover:text-brand-300">{{ nextLesson.title }}</div>
        </div>
        <div class="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-400 group-hover:bg-brand-500 group-hover:text-surface-950 flex items-center justify-center transition-all shrink-0">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </button>
      <div v-else class="w-full lg:w-[30%] hidden lg:block"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { resolveCourseSlug } from '../data/topics';
import { courseThemes, getLesson, getNeighbours } from '../data/lessonRegistry';
import type { ComprehensiveLesson } from '../data/lessonTypes';
import { renderMarkdown } from '../utils/markdown';
import { useProgressStore } from '../stores/progress';
import InteractiveEngineVisualizer from '../components/InteractiveEngineVisualizer.vue';
import InteractiveCodePlayground from '../components/InteractiveCodePlayground.vue';
import BrowserInternalsDeepDive from '../components/BrowserInternalsDeepDive.vue';

const route = useRoute();
const router = useRouter();
const progressStore = useProgressStore();

const lesson = ref<ComprehensiveLesson | null>(null);
const activeTab = ref('theory');
const showKidUnderTheHood = ref(false);
const isBookmarked = ref(false);
const userAnswers = ref<Record<number, number>>({});
const quizScore = ref(0);

/** Joriy kurs (html / css / javascript) URL yo'lidan aniqlanadi. */
const courseSlug = computed(() => resolveCourseSlug(route.path));

/** Kursga mos breadcrumb, tab nomlari va dvigatel nomi. */
const courseTheme = computed(() => courseThemes[courseSlug.value]);

/** Tab ro'yxati ham kursga qarab o'zgaradi (Blink / Style Engine / V8). */
const tabs = computed(() => courseTheme.value.tabs);

const lessonSlug = computed(() => {
  const param = route.params.lessonSlug as string | undefined;
  if (param) return param;
  const parts = route.path.split('/').filter(Boolean);
  return parts[parts.length - 1] ?? '';
});

const neighbours = computed(() => getNeighbours(courseSlug.value, lessonSlug.value));
const prevLesson = computed(() => neighbours.value.prev);
const nextLesson = computed(() => neighbours.value.next);

const isCompleted = computed(() => {
  return progressStore.isLessonCompleted(route.path);
});

function fetchLesson() {
  userAnswers.value = {};
  quizScore.value = 0;
  showKidUnderTheHood.value = false;
  activeTab.value = 'theory';

  lesson.value = getLesson(courseSlug.value, lessonSlug.value);
}

function toggleBookmark() {
  isBookmarked.value = !isBookmarked.value;
}

function answerQuiz(qIdx: number, oIdx: number) {
  if (userAnswers.value[qIdx] !== undefined) return;
  userAnswers.value[qIdx] = oIdx;
  if (lesson.value?.quiz && lesson.value.quiz[qIdx]?.correct === oIdx) {
    quizScore.value++;
    progressStore.addXp(10);
  }
}

function completeLesson() {
  progressStore.toggleLessonComplete(route.path);
}

function navigateToLesson(path: string) {
  router.push(path);
}

const renderedContent = computed(() => renderMarkdown(lesson.value?.content ?? ''));

onMounted(() => {
  fetchLesson();
});

watch([lessonSlug, courseSlug], () => {
  fetchLesson();
});
</script>
