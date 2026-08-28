/**
 * KODX.uz — JavaScript darslari uchun chuqur kontent generatori.
 *
 * Bu yerdagi "internals" HTML dagi Blink DOM emas, balki **V8** dvigateli:
 * Parser → Ignition → Sparkplug → Maglev → TurboFan quvuri, hidden class
 * va inline cache tizimi, Orinoco GC hamda event loop.
 */

import type { ComprehensiveLesson } from './lessonTypes';

function clean(title: string): string {
  return title.replace(/^[\d.]+\s*/, '').trim();
}

function pascal(title: string): string {
  const ascii = title.replace(/[^a-zA-Z0-9 ]/g, ' ').trim();
  const parts = ascii.split(/\s+/).filter(Boolean);
  const name = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
  return name || 'Generic';
}

/**
 * Modul raqamiga qarab darsning V8 quvuridagi asosiy joyini aniqlaydi.
 * Bu "internals" tabidagi ma'lumotni har bir mavzu uchun mos qiladi.
 */
function enginePhase(moduleOrder: number) {
  // Event loop, asinxron, brauzer API — runtime va navbatlar.
  if ([14, 15, 17, 18].includes(moduleOrder)) {
    return {
      phase: 'Event Loop & Task Queues',
      file: 'v8/src/execution/microtask-queue.cc',
      hierarchy: [
        'v8::Isolate',
        'v8::internal::MicrotaskQueue',
        'blink::scheduler::MainThreadScheduler',
        'blink::scheduler::TaskQueue',
        'blink::EventLoop',
      ],
      memory: 'Har bir Promise reaction ~ 96 Bayt: PromiseReactionJobTask obyekti microtask navbatida saqlanadi.',
      cost: { reflow: 'Low' as const, repaint: 'Low' as const, compositeOnly: false },
      costText:
        'Microtask navbati har bir macrotask oxirida **to‘liq** bo‘shatiladi. Uzun microtask zanjiri rendering bosqichini kechiktiradi va INP ni oshiradi.',
      metric: 'INP' as const,
      metricImpact:
        'Uzun ishlaydigan task yoki cheksiz microtask zanjiri Main Thread ni bloklaydi — foydalanuvchi bosgan tugma kech javob beradi.',
      metricRule:
        'Og‘ir ishni `queueMicrotask` emas, `scheduler.yield()`, `requestIdleCallback` yoki Web Worker ga bo‘lib bering.',
    };
  }
  // DOM va hodisalar — Blink bilan chegara.
  if ([16].includes(moduleOrder)) {
    return {
      phase: 'V8 ↔ Blink Bindings',
      file: 'third_party/blink/renderer/bindings/core/v8/v8_element.cc',
      hierarchy: [
        'v8::Object (JS wrapper)',
        'blink::ScriptWrappable',
        'blink::EventTarget',
        'blink::Node',
        'blink::Element',
      ],
      memory:
        'Har bir DOM tugun ikki joyda yashaydi: Oilpan heap dagi C++ obyekt (~128 B) va V8 heap dagi wrapper (~56 B). Ular o‘zaro kuchli bog‘langan.',
      cost: { reflow: 'High' as const, repaint: 'High' as const, compositeOnly: false },
      costText:
        'DOM ni o‘qish (`offsetHeight`) sinxron Layout ni majburlaydi; o‘qish va yozishni aralashtirish "layout thrashing" ga olib keladi.',
      metric: 'CLS' as const,
      metricImpact:
        'JS orqali kech qo‘shilgan DOM tugunlari mavjud kontentni pastga siljitadi va CLS ni oshiradi.',
      metricRule:
        'DOM o‘zgarishlarini `DocumentFragment` da to‘plang va joyni oldindan zaxiralab qo‘ying (skeleton, `min-height`).',
    };
  }
  // V8 dvigateli va xotira.
  if ([20, 21].includes(moduleOrder)) {
    return {
      phase: 'V8 Compiler Pipeline & Heap',
      file: 'v8/src/compiler/turbofan-compiler.cc',
      hierarchy: [
        'v8::internal::Parser',
        'v8::internal::BytecodeGenerator (Ignition)',
        'v8::internal::baseline::BaselineCompiler (Sparkplug)',
        'v8::internal::maglev::MaglevCompiler',
        'v8::internal::compiler::Pipeline (TurboFan)',
      ],
      memory:
        'Young generation (Scavenger, semi-space ~ 8 MB) va Old generation (Mark-Compact). Uzoq yashagan obyektlar ikki marta scavenge dan keyin promote qilinadi.',
      cost: { reflow: 'None' as const, repaint: 'None' as const, compositeOnly: false },
      costText:
        'Kompilyatsiya va GB Main Thread da pauza yaratadi. Major GC pauzasi 10 ms dan oshsa, foydalanuvchi buni "lag" sifatida sezadi.',
      metric: 'TBT' as const,
      metricImpact:
        'JIT warm-up va GC pauzalari Total Blocking Time ni oshiradi — sahifa ko‘rinadi, lekin bosishga javob bermaydi.',
      metricRule:
        'Obyekt shaklini (hidden class) barqaror saqlang, monomorf funksiyalar yozing va issiq siklda yangi obyekt yaratmang.',
    };
  }
  // Sintaksis, turlar, funksiyalar, scope — parse va bytecode.
  return {
    phase: 'Parse → Ignition Bytecode',
    file: 'v8/src/interpreter/bytecode-generator.cc',
    hierarchy: [
      'v8::internal::Scanner',
      'v8::internal::Parser',
      'v8::internal::AstNode',
      'v8::internal::BytecodeGenerator',
      'v8::internal::Interpreter (Ignition)',
    ],
    memory:
      'Har bir funksiya uchun SharedFunctionInfo (~ 80 B) va BytecodeArray saqlanadi; lazy parsing tufayli tana faqat birinchi chaqiruvda to‘liq tahlil qilinadi.',
    cost: { reflow: 'None' as const, repaint: 'None' as const, compositeOnly: false },
    costText:
      'Bu bosqich rendering ga bevosita tegmaydi, ammo katta bundle parse qilinishi birinchi interaktivlikni kechiktiradi.',
    metric: 'TBT' as const,
    metricImpact:
      'Katta JS bundle parse va kompilyatsiya vaqtida Main Thread band bo‘ladi va sahifa "muzlab" turadi.',
    metricRule:
      'Kodni `import()` bilan bo‘lib yuklang, ishlatilmagan kodni tree-shaking bilan olib tashlang.',
  };
}

export function generateJsLessonData(
  slug: string,
  title: string,
  moduleTitle: string,
  moduleOrder: number,
  estimatedMinutes = 7,
): ComprehensiveLesson {
  const cleanTitle = clean(title);
  const safeName = pascal(cleanTitle);
  const engine = enginePhase(moduleOrder);

  return {
    id: `${moduleOrder}.${slug}`,
    course: 'javascript',
    slug,
    title,
    moduleTitle,
    moduleOrder,
    description: `ECMAScript spetsifikatsiyasi (§ ${cleanTitle}) va V8 dvigateli asosida "${cleanTitle}" ning bytecode, xotira, event loop va xavfsizlik darajasidagi chuqur tahlili.`,
    estimatedMinutes,
    spec: `ECMAScript Language Specification — ${cleanTitle}`,
    kidAnalogy: {
      title: `Oshxona Retsepti: ${cleanTitle}`,
      story: `Tasavvur qiling, JavaScript — bu oshpaz, kod esa retsept. "${cleanTitle}" — retseptdagi muhim qadam. Oshpaz avval butun retseptni tez ko‘zdan kechiradi (parse), keyin qadamlarni sodda buyruqlarga aylantiradi (bytecode), va agar bir taomni juda ko‘p marta pishirsa — uni yoddan, ancha tezroq tayyorlay boshlaydi (JIT optimizatsiya). Ammo mehmon to‘satdan retseptni o‘zgartirsa, oshpaz yana qog‘ozga qaytadi (deoptimizatsiya).`,
      keyTakeaway: `${cleanTitle} — V8 ning **${engine.phase}** bosqichida ishlanadi va kodingizning tezligiga bevosita ta’sir qiladi.`,
    },
    cppInternalCode: {
      filename: engine.file,
      code: `// V8 Engine: ${cleanTitle} — ${engine.phase}
#include "src/execution/isolate.h"
#include "src/objects/js-objects.h"
#include "src/interpreter/bytecode-generator.h"

namespace v8 {
namespace internal {

// 1-bosqich: manba kod AST ga aylantiriladi (lazy parsing bilan).
void BytecodeGenerator::Visit${safeName}(${safeName}Node* node) {
  // Har bir tugun uchun registr ajratiladi (register allocator).
  RegisterAllocationScope scope(this);
  Register result = register_allocator()->NewRegister();

  VisitForAccumulatorValue(node->expression());
  builder()->StoreAccumulatorInRegister(result);

  // 2-bosqich: Inline Cache uchun feedback slot ajratiladi.
  // Bu slot obyekt shakli (hidden class) ni eslab qoladi.
  FeedbackSlot slot = feedback_spec()->AddLoadICSlot();
  builder()->LoadNamedProperty(result, ast_string_constants()->${slug.replace(/[^a-z0-9]/gi, '_')}_string(), feedback_index(slot));
}

// 3-bosqich: funksiya "issiq" bo'lsa, TurboFan uni optimallashtiradi.
// Agar obyekt shakli kutilganidan boshqa bo'lsa — Deopt sodir bo'ladi.
void Isolate::Deoptimize${safeName}(Handle<JSFunction> function, DeoptimizeReason reason) {
  Deoptimizer::DeoptimizeFunction(*function, reason);
}

}  // namespace internal
}  // namespace v8`,
      explanation: `V8 kodni bir necha bosqichda ishlaydi: Parser AST hosil qiladi, Ignition uni bytecode ga aylantiradi, funksiya ko‘p chaqirilsa Sparkplug → Maglev → TurboFan uni mashina kodiga kompilyatsiya qiladi. Feedback slotlar (Inline Cache) obyekt shakllarini eslab qoladi — shakl doimiy bo‘lsa kod tez, o‘zgarib tursa deoptimizatsiya sodir bo‘ladi.`,
    },
    attributes: [
      { name: 'typeof', type: 'Operator', defaultVal: '"undefined"', description: 'Qiymatning primitiv turini satr sifatida qaytaradi (`typeof null === "object"` — tarixiy bug).', isGlobal: true },
      { name: 'Object.prototype', type: 'Prototype', defaultVal: '{}', description: 'Prototip zanjirining eng yuqori bo‘g‘ini — barcha obyektlar shu yerda tugaydi.', isGlobal: true },
      { name: 'this', type: 'Binding', defaultVal: 'undefined (strict)', description: 'Chaqiruv usuliga qarab aniqlanadi; arrow funksiyalarda leksik ravishda meros olinadi.', isGlobal: true },
      { name: 'Symbol.iterator', type: 'Well-known Symbol', defaultVal: 'undefined', description: 'Obyektni `for...of` va spread uchun iterable qiladi.', isGlobal: true },
      { name: '[[Prototype]]', type: 'Internal slot', defaultVal: 'Object.prototype', description: 'Ichki prototip havolasi; `Object.getPrototypeOf()` orqali o‘qiladi.', isGlobal: true },
    ],
    proTips: [
      `Obyekt shaklini barqaror saqlang: barcha maydonlarni konstruktorda bir xil tartibda e’lon qiling — V8 bitta hidden class ishlatadi va Inline Cache monomorf bo‘lib qoladi.`,
      `\`===\` ni standart qilib oling: \`==\` type coercion qoidalarini ishga tushiradi va \`null == undefined\` kabi kutilmagan natijalar beradi.`,
      `Uzun sinxron ishni bo‘laklarga bo‘ling: 50 ms dan oshgan har qanday task foydalanuvchi bosishini kechiktiradi va INP ni buzadi.`,
      `\`Promise.all\` bilan parallel, \`for await...of\` bilan ketma-ket bajarishni ongli tanlang — noto‘g‘ri tanlov so‘rovlarni bir necha barobar sekinlashtiradi.`,
    ],
    gotchas: [
      `\`for\` siklida \`var\` ishlatish — barcha callbacklar bitta o‘zgaruvchini baham ko‘radi; \`let\` har iteratsiya uchun yangi binding yaratadi.`,
      `Element o‘chirilgandan keyin qolib ketgan event listener detached DOM tugunini xotirada ushlab turadi (memory leak).`,
      `\`async\` funksiya ichidagi \`await\` dan keyingi kod microtask sifatida ishlaydi — u \`try/catch\` bilan o‘ralmagan bo‘lsa, xato \`unhandledrejection\` ga aylanadi.`,
      `Obyektga keyinchalik yangi maydon qo‘shish hidden class o‘tishini keltirib chiqaradi va issiq funksiyani deoptimizatsiya qilishi mumkin.`,
    ],
    deepDive: {
      blinkClassHierarchy: engine.hierarchy,
      memoryAllocation: engine.memory,
      crpCost: {
        reflow: engine.cost.reflow,
        repaint: engine.cost.repaint,
        compositeOnly: engine.cost.compositeOnly,
        explanation: engine.costText,
      },
      axTreeMapping: {
        implicitRole: 'JavaScript rolni o‘zi bermaydi — u faqat DOM va ARIA atributlarini o‘zgartirish orqali AXTree ga ta’sir qiladi.',
        accessibleName: 'Dinamik yangilangan matn uchun `aria-live="polite"` bering, aks holda screen reader o‘zgarishni e’lon qilmaydi.',
        keyboardNav: 'Klik handlerini `div` ga emas, `<button>` ga qo‘ying — aks holda Enter/Space ishlamaydi va fokus tartibi buziladi.',
      },
      security: {
        xssVector: `\`element.innerHTML = userInput\` yoki \`eval(userInput)\` — foydalanuvchi kiritgan satr kod sifatida bajariladi.`,
        cspPolicy: `Content-Security-Policy: script-src 'self' 'nonce-{random}'; object-src 'none'; base-uri 'self';`,
        sanitizationTip: `Matn uchun \`textContent\`, HTML kerak bo‘lsa \`DOMPurify.sanitize()\` yoki Trusted Types dan foydalaning. \`eval\` va \`new Function\` dan butunlay voz keching.`,
      },
      coreWebVitals: {
        metric: engine.metric,
        impact: engine.metricImpact,
        optimizationRule: engine.metricRule,
      },
      debuggingChallenge: {
        title: `${cleanTitle} — Amaliy JavaScript Xatosini Tuzatish`,
        brokenCode: `// XATO KOD
function setup(items) {
  for (var i = 0; i < items.length; i++) {          // 1) var — bitta binding
    document.querySelectorAll('.row')[i]
      .addEventListener('click', function () {
        console.log('Bosildi:', i);                 // har doim items.length
      });
  }

  var total = 0;
  for (var j = 0; j < items.length; j++) {
    total += document.querySelector('#list').offsetHeight;  // 2) layout thrashing
    document.querySelector('#list').style.height = total + 'px';
  }

  fetch('/api/data').then(r => r.json()).then(render);      // 3) xato ushlanmagan
}`,
        fixedCode: `// TUZATILGAN KOD
function setup(items) {
  const rows = document.querySelectorAll('.row');

  // 1) let — har iteratsiyada yangi binding
  rows.forEach((row, i) => {
    row.addEventListener('click', () => console.log('Bosildi:', i));
  });

  // 2) avval hammasini o'qish, keyin yozish — thrashing yo'q
  const list = document.querySelector('#list');
  const height = list.offsetHeight * items.length;
  list.style.height = \`\${height}px\`;

  // 3) xatolar aniq ushlanadi
  fetch('/api/data')
    .then(r => {
      if (!r.ok) throw new Error(\`HTTP \${r.status}\`);
      return r.json();
    })
    .then(render)
    .catch(err => console.error('Maʼlumot yuklanmadi:', err));
}`,
        bugDescription: `Uchta klassik xato: (1) \`var\` funksiya scope’ida bo‘lgani uchun barcha callbacklar bir xil \`i\` ni ko‘radi; (2) siklda DOM ni o‘qish va yozish aralashtirilgan — har iteratsiyada sinxron Layout majburlanadi; (3) \`fetch\` zanjirida \`.catch()\` yo‘q, shuning uchun tarmoq xatosi jimgina yo‘qoladi.`,
        hints: [
          'Blok scope kerak bo‘lsa `let`/`const` ishlating — closure har iteratsiyada yangi binding oladi.',
          'DOM o‘qish (offsetHeight) va yozish (style) ni ajrating: avval hammasini o‘qing, keyin yozing.',
          'Har bir Promise zanjiri `.catch()` yoki `try/catch` bilan tugashi kerak.',
        ],
      },
    },
    content: `## 🏛️ 1. ECMAScript Standarti va Nazariya

ECMAScript spetsifikatsiyasiga ko‘ra, **\`${cleanTitle}\`** til semantikasining muhim qismi bo‘lib, V8 da **${engine.phase}** bosqichida ishlanadi.

\`\`\`javascript
// Standart namuna
'use strict';

const config = Object.freeze({
  name: '${cleanTitle}',
  version: 1,
});

function ${safeName.charAt(0).toLowerCase() + safeName.slice(1)}Demo(input) {
  if (typeof input !== 'string') {
    throw new TypeError('input string bo‘lishi kerak');
  }
  return \`\${config.name}: \${input.trim()}\`;
}
\`\`\`

---

## 🔬 2. V8 Dvigateli: Manba koddan mashina kodigacha

\`\`\`
[ Manba kod ] ──> [ Scanner/Parser ] ──> [ AST ]
                                          │
                                          ▼
                              [ Ignition: Bytecode ]
                                          │
             issiq bo'lsa ────────────────┼────────────────
                    │                     │               │
                    ▼                     ▼               ▼
            [ Sparkplug ]          [ Maglev ]      [ TurboFan ]
             (baseline)          (o'rta JIT)     (to'liq optimizatsiya)
                                          │
                                          ▼
                                 [ Mashina kodi ]
                            (Deopt bo'lsa — bytecode ga qaytadi)
\`\`\`

1. **Parser**: kod AST ga aylanadi. Ichki funksiyalar *lazy* — faqat chaqirilganda to‘liq tahlil qilinadi.
2. **Ignition**: AST dan registrga asoslangan bytecode hosil qilinadi.
3. **Feedback Vector**: har bir property murojaati uchun **Inline Cache** obyekt shaklini eslab qoladi.
4. **Sparkplug → Maglev → TurboFan**: funksiya qanchalik "issiq" bo‘lsa, shuncha chuqur optimallashtiriladi.
5. **Deoptimizatsiya**: kutilgan shakl buzilsa, V8 mashina kodini tashlab, bytecode ga qaytadi.

> [!NOTE]
> ${engine.costText}

---

## ⏱️ 3. Event Loop: Task va Microtask

\`\`\`javascript
console.log('1');                          // sinxron

setTimeout(() => console.log('2'), 0);     // macrotask

Promise.resolve().then(() => console.log('3'));  // microtask

queueMicrotask(() => console.log('4'));    // microtask

console.log('5');                          // sinxron

// Natija: 1 → 5 → 3 → 4 → 2
\`\`\`

**Qoida:** har bir macrotask tugagach, brauzer **butun** microtask navbatini bo‘shatadi va faqat shundan keyin rendering (style → layout → paint) bosqichiga o‘tadi.

---

## 🛡️ 4. Xavfsizlik

> [!IMPORTANT]
> Foydalanuvchi kiritgan hech qanday satrni kod sifatida bajarmang.

\`\`\`javascript
// ❌ XAVFLI
element.innerHTML = userInput;
eval(userInput);
new Function(userInput)();

// ✅ XAVFSIZ
element.textContent = userInput;
element.setAttribute('data-value', userInput);
// HTML kerak bo'lsa:
element.innerHTML = DOMPurify.sanitize(userInput);
\`\`\``,
    codeExample: `// ${cleanTitle} — KODX JavaScript Laboratoriyasi
'use strict';

/**
 * V8 uchun do'stona obyekt: barcha maydonlar konstruktorda,
 * bir xil tartibda e'lon qilinadi -> bitta hidden class.
 */
class LessonMetric {
  #startedAt;                    // private maydon

  constructor(name, value) {
    this.name = name;            // maydon tartibi doim bir xil
    this.value = value;
    this.updatedAt = Date.now();
    this.#startedAt = performance.now();
  }

  get elapsed() {
    return performance.now() - this.#startedAt;
  }

  toJSON() {
    return { name: this.name, value: this.value, elapsed: this.elapsed };
  }
}

// --- Asinxron: xatolar aniq ushlanadi, so'rov bekor qilinishi mumkin ---
async function loadMetrics(signal) {
  try {
    const res = await fetch('/api/metrics', { signal });
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return await res.json();
  } catch (err) {
    if (err.name === 'AbortError') return [];   // bekor qilingan — normal holat
    console.error('Metrikalar yuklanmadi:', err);
    return [];
  }
}

// --- Event loop tartibini o'z ko'zingiz bilan ko'ring ---
function demoEventLoop() {
  const order = [];

  order.push('sinxron-1');
  setTimeout(() => order.push('macrotask'), 0);
  Promise.resolve().then(() => order.push('microtask'));
  order.push('sinxron-2');

  // Barcha microtasklardan keyin natijani chop etamiz
  setTimeout(() => console.table(order), 10);
}

// --- DOM: o'qish va yozishni ajratamiz (layout thrashing yo'q) ---
function renderMetrics(container, metrics) {
  const fragment = document.createDocumentFragment();

  for (const metric of metrics) {
    const row = document.createElement('div');
    row.className = 'metric-row';
    row.textContent = \`\${metric.name}: \${metric.value}\`;  // XSS xavfsiz
    fragment.append(row);
  }

  container.replaceChildren(fragment);   // bitta DOM operatsiyasi
}

const controller = new AbortController();
loadMetrics(controller.signal).then(data => {
  const metrics = data.map(d => new LessonMetric(d.name, d.value));
  renderMetrics(document.querySelector('#metrics'), metrics);
});

demoEventLoop();`,
    quiz: [
      {
        question: 'V8 da "issiq" (tez-tez chaqiriladigan) funksiya qaysi bosqichlardan o‘tadi?',
        options: [
          'Ignition → Sparkplug → Maglev → TurboFan',
          'TurboFan → Ignition → Parser',
          'Faqat Ignition — boshqa bosqich yo‘q',
          'Kod har safar noldan interpretatsiya qilinadi',
        ],
        correct: 0,
        explanation:
          'V8 ko‘p bosqichli quvurga ega: Ignition bytecode dan boshlanadi, funksiya qizigani sari Sparkplug (baseline), Maglev (o‘rta) va TurboFan (to‘liq optimizatsiya) ishga tushadi.',
      },
      {
        question: '`console.log(1); setTimeout(() => console.log(2)); Promise.resolve().then(() => console.log(3)); console.log(4);` — natija qanday?',
        options: [
          '1, 4, 3, 2',
          '1, 2, 3, 4',
          '1, 4, 2, 3',
          '1, 3, 4, 2',
        ],
        correct: 0,
        explanation:
          'Avval sinxron kod (1, 4), keyin microtask navbati (3), va eng oxirida macrotask (2). Microtasklar har doim macrotaskdan oldin bo‘shatiladi.',
      },
      {
        question: 'Obyektga keyinchalik yangi maydon qo‘shish nima uchun performansga zarar beradi?',
        options: [
          'Hidden class o‘tishi sodir bo‘lib, Inline Cache polimorf bo‘lib qoladi va deoptimizatsiya yuz berishi mumkin',
          'Obyekt hajmi ikki barobar oshadi',
          'Garbage collector obyektni umuman tozalay olmaydi',
          'Hech qanday ta’siri yo‘q',
        ],
        correct: 0,
        explanation:
          'V8 obyektlarni hidden class (Map) orqali kuzatadi. Maydon qo‘shilganda yangi hidden class yaratiladi; bir xil koddan turli shakllar o‘tsa, Inline Cache monomorfdan polimorfga o‘tadi va TurboFan optimizatsiyani bekor qiladi.',
      },
      {
        question: 'XSS hujumining oldini olish uchun eng xavfsiz usul qaysi?',
        options: [
          'element.textContent bilan matn sifatida qo‘yish',
          'element.innerHTML ga to‘g‘ridan-to‘g‘ri yozish',
          'eval() bilan bajarish',
          'document.write() ishlatish',
        ],
        correct: 0,
        explanation:
          'textContent kiritilgan satrni faqat matn sifatida qabul qiladi va hech qanday HTML yoki skriptni bajarmaydi. HTML kerak bo‘lsa DOMPurify.sanitize() yoki Trusted Types ishlatiladi.',
      },
    ],
  };
}
