<template>
  <div class="rounded-2xl bg-surface-950 border border-surface-800 shadow-2xl overflow-hidden text-left space-y-0">
    <!-- Video Player Top Bar -->
    <div class="flex items-center justify-between px-4 py-3 bg-surface-900 border-b border-surface-800">
      <div class="flex items-center gap-2.5">
        <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div class="w-3 h-3 rounded-full bg-brand-500/80"></div>
        <span class="text-xs font-mono font-bold text-white ml-2 flex items-center gap-1.5">
          <svg class="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Brauzer Rendering Pipeline Simulyatori
        </span>
      </div>

      <div class="flex items-center gap-2">
        <span class="px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 text-[10px] font-mono font-bold border border-brand-500/20">
          BOSQICH {{ currentStepIndex + 1 }} / {{ steps.length }}
        </span>
      </div>
    </div>

    <!-- Main Visual Canvas Area (Screen) -->
    <div class="p-6 bg-gradient-to-b from-surface-950 to-surface-900 min-h-[280px] flex flex-col justify-between relative overflow-hidden">
      <!-- Animated Background Grid -->
      <div class="absolute inset-0 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none"></div>

      <!-- Stage Visual Content -->
      <div class="relative z-10 space-y-4">
        <!-- Stage Title & Description -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-brand-500/15 border border-brand-500/30 flex items-center justify-center text-xl shadow-lg shadow-brand-500/10">
              {{ currentStep.icon }}
            </div>
            <div>
              <h4 class="text-sm font-bold text-white">{{ currentStep.title }}</h4>
              <p class="text-xs text-surface-400">{{ currentStep.subtitle }}</p>
            </div>
          </div>
          <span class="text-xs font-mono text-brand-400 font-bold hidden sm:inline-block">
            {{ currentStep.latency }}
          </span>
        </div>

        <!-- Interactive Diagram Box -->
        <div class="p-4 rounded-xl bg-surface-950/90 border border-surface-800 space-y-3 font-mono text-xs">
          <!-- Flow Diagram -->
          <div class="flex items-center justify-around flex-wrap gap-2 py-2 text-center text-[11px]">
            <div
              v-for="(st, sIdx) in steps"
              :key="st.id"
              @click="setStep(sIdx)"
              class="flex items-center gap-1.5 cursor-pointer px-2.5 py-1.5 rounded-lg transition-all"
              :class="[
                currentStepIndex === sIdx
                  ? 'bg-brand-500 text-surface-950 font-bold shadow-md shadow-brand-500/20 scale-105'
                  : currentStepIndex > sIdx
                  ? 'bg-surface-800 text-brand-400 border border-brand-500/30'
                  : 'bg-surface-900 text-surface-500 border border-surface-800'
              ]"
            >
              <span>{{ st.short }}</span>
              <span v-if="currentStepIndex > sIdx">✓</span>
            </div>
          </div>

          <!-- Dynamic Visual Data Representation -->
          <div class="p-3.5 rounded-lg bg-surface-900 border border-surface-800 text-surface-200 text-xs leading-relaxed min-h-[90px] flex items-center justify-center">
            <!-- Step 1: Bytes -->
            <div v-if="currentStepIndex === 0" class="text-center space-y-1.5 w-full">
              <div class="text-[10px] text-surface-400 uppercase tracking-wider">Raw Binary Bytes Stream over TLS 1.3:</div>
              <div class="text-emerald-400 font-bold break-all animate-pulse">
                00111100 00100001 01000100 01001111 01000011 01010100 01011001 01010000 01000101...
              </div>
              <div class="text-[11px] text-surface-400">Server → Socket Buffer (1460 bytes MTU packet)</div>
            </div>

            <!-- Step 2: Tokens -->
            <div v-else-if="currentStepIndex === 1" class="flex flex-wrap items-center justify-center gap-2 w-full">
              <span class="px-2 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">DOcTYPE: html</span>
              <span class="text-surface-500">→</span>
              <span class="px-2 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">StartTag: html</span>
              <span class="text-surface-500">→</span>
              <span class="px-2 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">StartTag: body</span>
              <span class="text-surface-500">→</span>
              <span class="px-2 py-1 rounded bg-brand-500/20 text-brand-300 border border-brand-500/30">Characters: "Salom"</span>
            </div>

            <!-- Step 3: DOM Tree -->
            <div v-else-if="currentStepIndex === 2" class="space-y-1 text-center w-full">
              <div class="text-brand-400 font-bold">Document Node (C++ HTMLDocument instance)</div>
              <div class="text-surface-400">└── html [lang="uz"]</div>
              <div class="text-surface-400 pl-4">├── head → (meta, title)</div>
              <div class="text-surface-400 pl-4">└── body → (h1: "Salom, Dunyo!", p, button)</div>
            </div>

            <!-- Step 4: Layout -->
            <div v-else-if="currentStepIndex === 3" class="grid grid-cols-2 gap-2 text-[11px] w-full">
              <div class="p-2 rounded bg-surface-950 border border-surface-800">
                <span class="text-cyan-400 font-bold">&lt;h1&gt;</span>: x=24px, y=32px, w=760px, h=40px
              </div>
              <div class="p-2 rounded bg-surface-950 border border-surface-800">
                <span class="text-cyan-400 font-bold">&lt;p&gt;</span>: x=24px, y=88px, w=760px, h=24px
              </div>
            </div>

            <!-- Step 5: GPU Paint -->
            <div v-else class="text-center space-y-1.5 w-full">
              <div class="text-brand-400 font-bold flex items-center justify-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-brand-400 animate-ping"></span>
                <span>GPU Rasterization Buffer @ 60 FPS (Compositor Thread)</span>
              </div>
              <div class="text-[11px] text-surface-300">Piksellar GPU VRAM orqali displey monitoriga muvaffaqiyatli chizildi! ✨</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls Timeline Bar -->
      <div class="pt-4 border-t border-surface-800 flex flex-wrap items-center justify-between gap-3 relative z-10">
        <!-- Play / Pause & Step Buttons -->
        <div class="flex items-center gap-2">
          <button
            @click="togglePlay"
            class="px-3.5 py-1.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-brand-500/20 cursor-pointer"
          >
            <span v-if="isPlaying">⏸ Pauza</span>
            <span v-else>▶ Ijro etish</span>
          </button>

          <button
            @click="prevStep"
            :disabled="currentStepIndex === 0"
            class="p-1.5 rounded-lg bg-surface-900 hover:bg-surface-800 border border-surface-700 text-surface-300 hover:text-white disabled:opacity-30 cursor-pointer"
            title="Oldingi bosqich"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            @click="nextStep"
            :disabled="currentStepIndex === steps.length - 1"
            class="p-1.5 rounded-lg bg-surface-900 hover:bg-surface-800 border border-surface-700 text-surface-300 hover:text-white disabled:opacity-30 cursor-pointer"
            title="Keyingi bosqich"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Speed Selector -->
        <div class="flex items-center gap-1 text-[11px] font-mono">
          <span class="text-surface-500 mr-1">Tezlik:</span>
          <button
            v-for="sp in [0.5, 1, 2]"
            :key="sp"
            @click="playbackSpeed = sp"
            class="px-2 py-0.5 rounded transition-colors"
            :class="playbackSpeed === sp ? 'bg-surface-800 text-brand-400 font-bold' : 'text-surface-500 hover:text-surface-300'"
          >
            {{ sp }}x
          </button>
        </div>
      </div>
    </div>

    <!-- Under-the-hood C++ Engine Code Snippet (Synchronized with Step) -->
    <div class="p-4 bg-surface-950 border-t border-surface-800/80 text-xs font-mono space-y-2">
      <div class="flex items-center justify-between text-[11px] text-surface-400">
        <span class="flex items-center gap-1.5">
          <span class="text-brand-400 font-bold">🔬 Chromium Blink Engine (C++):</span>
          <span>{{ currentStep.engineFile }}</span>
        </span>
        <span class="text-surface-500">v8 / blink runtime</span>
      </div>

      <pre class="p-3 rounded-lg bg-surface-900/90 border border-surface-800/80 text-cyan-300 overflow-x-auto text-[11px] leading-relaxed"><code>{{ currentStep.codeSnippet }}</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue';

const currentStepIndex = ref(0);
const isPlaying = ref(false);
const playbackSpeed = ref(1);
let timer: any = null;

const steps = [
  {
    id: 's1',
    short: '1. Baytlar',
    title: '1. Tarmoq Baytlari (Raw Network Bytes)',
    subtitle: 'Serverdan HTTP/2 yoki HTTP/3 oqimi orqali 0 va 1 lardan iborat baytlar ketma-ketligi keladi.',
    icon: '🌐',
    latency: '15-40ms (TTFB)',
    engineFile: 'core/html/parser/html_document_parser.cc',
    codeSnippet: `// Blink: HTMLDocumentParser::AppendBytes
void HTMLDocumentParser::AppendBytes(const char* bytes, size_t length) {
  raw_data_buffer_.Append(bytes, length);
  tokenizer_->FeedBuffer(raw_data_buffer_);
}`,
  },
  {
    id: 's2',
    short: '2. Tokenizer',
    title: '2. Tokenizatsiya va State Machine',
    subtitle: 'WHATWG HTML State Machine belgilar oqimini StartTag, EndTag va Character tokenlariga ajratadi.',
    icon: '⚙️',
    latency: '2-5ms',
    engineFile: 'core/html/parser/html_tokenizer.cc',
    codeSnippet: `// Blink: HTMLTokenizer::NextToken
bool HTMLTokenizer::NextToken(SegmentedString& source, HTMLToken& token) {
  if (state_ == kDataState) {
    if (source.CurrentChar() == '<') {
      state_ = kTagOpenState; // <html, <body, <h1 ochildi
    }
  }
  return token.IsEmitted();
}`,
  },
  {
    id: 's3',
    short: '3. DOM Tree',
    title: '3. Xotirada DOM Daraxtini Qurish (Tree Construction)',
    subtitle: 'Tokenlar xotirada C++ Node obyektlariga aylanadi va ierarxik daraxt (Parent-Child) hosil qiladi.',
    icon: '🌳',
    latency: '4-8ms',
    engineFile: 'core/dom/document.cc',
    codeSnippet: `// Blink: HTMLTreeBuilder::ProcessToken
void HTMLTreeBuilder::ProcessToken(HTMLToken& token) {
  if (token.GetType() == HTMLToken::kStartTag) {
    Element* element = Document::CreateRawElement(token.GetName());
    current_node_->AppendChild(element); // Xotirada daraxtga ulanadi
  }
}`,
  },
  {
    id: 's4',
    short: '4. Layout',
    title: '4. Layout (Reflow) va Koordinatalar',
    subtitle: 'Brauzer har bir elementning ekrandagi aniq piksellardagi o‘rnini (X, Y, Width, Height) hisoblaydi.',
    icon: '📐',
    latency: '8-16ms (60fps budjeti)',
    engineFile: 'core/layout/layout_block_flow.cc',
    codeSnippet: `// Blink: LayoutBlockFlow::UpdateGeometry
void LayoutBlockFlow::UpdateGeometry() {
  LayoutUnit width = ComputeContentWidth();
  LayoutUnit height = ComputeContentHeight();
  SetBoundingBox(IntRect(x_, y_, width, height)); // Koordinata hisoblandi
}`,
  },
  {
    id: 's5',
    short: '5. GPU Paint',
    title: '5. GPU Rasterization & Paint',
    subtitle: 'Skia va GPU drayveri orqali piksellar ekranning RGB sub-piksellariga to‘liq chiziladi.',
    icon: '🎨',
    latency: '16.6ms (1 Frame)',
    engineFile: 'core/paint/compositing_recorder.cc',
    codeSnippet: `// Blink: Compositor::DispatchToGPU
void Compositor::DispatchToGPU(const cc::LayerTreeHost& host) {
  gpu_context_->DrawLayersToFrontBuffer(); // Displeyga piksel chiqarildi
}`,
  },
];

const currentStep = computed(() => {
  return steps[currentStepIndex.value] || steps[0]!;
});

function setStep(idx: number) {
  currentStepIndex.value = idx;
}

function nextStep() {
  if (currentStepIndex.value < steps.length - 1) {
    currentStepIndex.value++;
  } else {
    stopPlay();
  }
}

function prevStep() {
  if (currentStepIndex.value > 0) {
    currentStepIndex.value--;
  }
}

function togglePlay() {
  if (isPlaying.value) {
    stopPlay();
  } else {
    startPlay();
  }
}

function startPlay() {
  isPlaying.value = true;
  runTicker();
}

function stopPlay() {
  isPlaying.value = false;
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
}

function runTicker() {
  if (!isPlaying.value) return;
  const interval = 2500 / playbackSpeed.value;
  timer = setTimeout(() => {
    if (currentStepIndex.value < steps.length - 1) {
      currentStepIndex.value++;
      runTicker();
    } else {
      currentStepIndex.value = 0; // Loop or stop
      runTicker();
    }
  }, interval);
}

onUnmounted(() => {
  stopPlay();
});
</script>
