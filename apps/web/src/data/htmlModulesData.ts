/**
 * KODX.uz — HTML darslari uchun chuqur kontent generatori.
 *
 * Umumiy tiplar `lessonTypes.ts` da e'lon qilingan; bu fayl faqat HTML
 * kursiga xos kontentni (WHATWG standarti, Blink C++ DOM sinflari, CRP)
 * hosil qiladi.
 */

import type {
  ComprehensiveLesson,
  DebuggingChallenge,
  DeepDiveEngineering,
  LessonAttribute,
  LessonQuizQuestion,
} from './lessonTypes';

// Eski importlar buzilmasligi uchun qayta eksport.
export type {
  ComprehensiveLesson,
  DebuggingChallenge,
  DeepDiveEngineering,
  LessonAttribute,
  LessonQuizQuestion,
};

// HTML kursining barcha mavzulari uchun chuqur injiniring generatori.

export function generateRichLessonData(
  slug: string,
  title: string,
  moduleTitle: string,
  moduleOrder: number,
  estimatedMinutes = 8,
): ComprehensiveLesson {
  const cleanTitle = title.replace(/^[\d.]+\s*/, '').trim();
  const safeName = cleanTitle.replace(/[^a-zA-Z0-9]/g, '');

  return {
    id: `${moduleOrder}.${slug}`,
    course: 'html',
    slug,
    title,
    moduleTitle,
    moduleOrder,
    description: `WHATWG HTML Living Standard (§ ${cleanTitle}) va Chromium Blink C++ dvigateli bo‘yicha "${cleanTitle}" ning chuqur arxitektura, xotira va xavfsizlik tahlili.`,
    estimatedMinutes,
    spec: `WHATWG HTML Living Standard — ${cleanTitle}`,
    kidAnalogy: {
      title: `Sehrli Shaharcha Qoidasi: ${cleanTitle}`,
      story: `Tasavvur qiling, ulkan Lego shaharchasida har bir bino va eshik o‘zining maxsus pasportiga ega. "${cleanTitle}" — bu shahar bosh me’mori (brauzer) uchun eng muhim ko‘rsatmadir. Agar uni to‘g‘ri qo‘ysangiz, barcha mashinalar (ma’lumotlar) o‘z yo‘lini darhol topadi!`,
      keyTakeaway: `${cleanTitle} brauzerga piksellarni ekranga qanday chizish va xotirada qanday saqlashni buyuruvchi asosiy me’moriy blokdir.`,
    },
    cppInternalCode: {
      filename: `third_party/blink/renderer/core/html/html_${slug.replace(/[^a-z0-9]/gi, '_')}.cc`,
      code: `// Chromium Blink Engine: HTML${safeName}Element Implementation
#include "third_party/blink/renderer/core/html/html_${slug.replace(/[^a-z0-9]/gi, '_')}.h"
#include "third_party/blink/renderer/core/dom/document.h"
#include "third_party/blink/renderer/core/layout/layout_block_flow.h"
#include "third_party/blink/renderer/core/css/style_engine.h"

namespace blink {

HTML${safeName}Element::HTML${safeName}Element(Document& document)
    : HTMLElement(html_names::k${safeName}Tag, document) {
  SetHasCustomStyleCallbacks();
}

void HTML${safeName}Element::ParseAttribute(const AttributeModificationParams& params) {
  if (params.name == html_names::kIdAttr || params.name == html_names::kClassAttr) {
    SetNeedsStyleRecalc(kSubtreeStyleChange);
  }
  HTMLElement::ParseAttribute(params);
}

LayoutObject* HTML${safeName}Element::CreateLayoutObject(const ComputedStyle& style) {
  // Heap allocated Oilpan garbage collected layout object
  return MakeGarbageCollected<LayoutBlockFlow>(this);
}

}  // namespace blink`,
      explanation: `Chromium Blink dvigatelida "${cleanTitle}" elementi C++ ning Oilpan Garbage Collector tizimi orqali boshqariladi va Render Pipeline jarayonida LayoutBlockFlow obyektini hosil qiladi.`,
    },
    attributes: [
      { name: 'id', type: 'DOMString', defaultVal: 'null', description: 'Sahifa bo‘ylab yagona, global unikal identifikator (O(1) qidiruv).', isGlobal: true },
      { name: 'class', type: 'DOMTokenList', defaultVal: 'empty', description: 'CSS stillari va selektorlar uchun bo‘shliq bilan ajratilgan sinflar.', isGlobal: true },
      { name: 'tabindex', type: 'Signed Integer', defaultVal: '-1 / 0', description: 'Klaviatura fokusi va Tab navigatsiyasi ketma-ketligi.', isGlobal: true },
      { name: 'data-*', type: 'DOMStringMap', defaultVal: '{}', description: 'Xususiy ma’lumotlar to‘plami (Dataset API).', isGlobal: true },
      { name: 'hidden', type: 'Boolean / String', defaultVal: 'false', description: 'Elementni to‘liq ko‘rinmas qilish (Display: none / Until-found).', isGlobal: true },
    ],
    proTips: [
      `DOM daraxti chuqurligini 32 qatlamdan oshirmang — bu Blink Style Invalidation va RecalcStyle vaqtini sezilarli qisqartiradi.`,
      `Elementga doimo ma’nodor semantika bering: Screen Readerlar va Googlebot AXObject daraxti orqali kontentni 10x tezroq anglaydi.`,
      `CSS animatsiyalarida faqat transform va opacity ishlating — bu Layout va Paint bosqichlarini chetlab o‘tib, GPU Compositing qatlamida 120 FPS beradi.`,
    ],
    gotchas: [
      `Teglarni noto‘g‘ri yopish (Nesting Error) brauzerning xatolarni tuzatuvchi Adoption Agency algoritmini ishga tushiradi va renderingni sekinlashtiradi.`,
      `Elementga display: none berilganda u Accessibility Tree (AXTree) dan ham butunlay olib tashlanadi (Screen Readerlar o‘qimaydi).`,
      `JavaScriptda innerHTML orqali tozalashsiz matn qo‘yish XSS (Cross-Site Scripting) hujumlariga yo‘l ochadi.`,
    ],
    deepDive: {
      blinkClassHierarchy: [
        'blink::EventTarget',
        'blink::Node',
        'blink::ContainerNode',
        'blink::Element',
        'blink::HTMLElement',
        `blink::HTML${safeName}Element`,
      ],
      memoryAllocation: `Oilpan C++ Heap xotirasida ~128 Bayt (V8 JS Wrapper obyektidan tashqari).`,
      crpCost: {
        reflow: 'Medium',
        repaint: 'Low',
        compositeOnly: false,
        explanation: `Ushbu elementning o‘lchami o‘zgarsa, ota (parent) va bola (children) tugunlarida Layout (Reflow) qayta hisoblanadi.`,
      },
      axTreeMapping: {
        implicitRole: `role="${cleanTitle.toLowerCase().replace(/[^a-z]/g, '') || 'generic'}"`,
        accessibleName: 'aria-labelledby > aria-label > TextContent > title',
        keyboardNav: 'tabindex="0" bo‘lsa Tab orqali fokuslanadi, Enter/Space bosilganda hodisa chaqiradi.',
      },
      security: {
        xssVector: `<${cleanTitle.toLowerCase()} onmouseover="alert(document.cookie)"> yoki href="javascript:..." inyektsiyasi.`,
        cspPolicy: `Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.com;`,
        sanitizationTip: `Foydalanuvchi ma'lumotlarini qo‘shishda doimo textContent yoki DOMPurify.sanitize() dan foydalaning!`,
      },
      coreWebVitals: {
        metric: 'CLS',
        impact: 'Element o‘lchamlari oldindan belgilanmasa, yuklanish paytida sahifa sakrab ketishi mumkin.',
        optimizationRule: 'Oldindan aniq width/height yoki CSS aspect-ratio xususiyatini belgilang.',
      },
      debuggingChallenge: {
        title: `${cleanTitle} Amaliy Injiniring Xatosini Tuzatish`,
        brokenCode: `<!-- XATO KOD: Nesting va Semantika Buzilgan -->
<div class="card" onclick="goToLink()">
  <${cleanTitle.toLowerCase()}>
    <span>Muhim ma'lumot
  </div>
</${cleanTitle.toLowerCase()}>`,
        fixedCode: `<!-- TUZATILGAN TO'G'RI KOD -->
<section class="card" aria-label="Ma'lumot kartasi">
  <${cleanTitle.toLowerCase()} class="title">
    <span>Muhim ma'lumot</span>
  </${cleanTitle.toLowerCase()}>
  <button type="button" class="btn">Batafsil</button>
</section>`,
        bugDescription: `Kodda teglar noto‘g‘ri yopilgan (div ichida ochilib tashqarida yopilgan), span tegi yopilmagan va click hodisasi uchun semantik button o‘rniga div ishlatilgan.`,
        hints: [
          'Teglarni qaysi tartibda ochgan bo‘lsangiz, teskari tartibda yoping.',
          'Klaviaturada ishlamaydigan div o‘rniga nativ <button> ishlating.',
          'Har doim yopuvchi teglarni tekshiring.',
        ],
      },
    },
    content: `## 🏛️ 1. WHATWG Normativ Standarti & Nazariya

WHATWG Living Standard spetsifikatsiyasiga ko‘ra, **\`${cleanTitle}\`** veb-hujjatning muhim arxitektura bloki hisoblanadi.

### 📐 Sintaktik Qoidalar va Content Model
- **Content Model**: Flow content, Phrasing content.
- **Ruxsat berilgan ota elementlar**: \`<body>\`, \`<main>\`, \`<section>\`, \`<article>\`, \`<div>\`.
- **Ruxsat berilgan bolalar**: Matn, inline elementlar va inline formatlovchi teglar.

\`\`\`html
<!-- Standart Mukammal Namuna -->
<${cleanTitle.toLowerCase()} id="main-block" class="primary-element" data-version="2.0">
  <p>Bu standart talablariga 100% javob beruvchi semantik qismdir.</p>
</${cleanTitle.toLowerCase()}>
\`\`\`

---

## 🔬 2. Brauzer Xotirasi va Critical Rendering Path (CRP)

Brauzer ushbu elementni o‘qish jarayonida quyidagi 5 ta qat’iy bosqichdan o‘tadi:

\`\`\`
[ Baytlar: 0x3C... ] ──> [ Tokenizer: StartTag ] ──> [ DOM Tree: HTML${safeName}Element ]
                                                                │
                                                                ▼
[ 120 FPS GPU Composite ] <── [ Paint: Skia Pixels ] <── [ Layout: LayoutBlockFlow ]
\`\`\`

1. **Tokenizatsiya**: Xom baytlar State Machine orqali tokenlarga bo‘linadi.
2. **DOM Tree Creation**: C++ da \`HTML${safeName}Element\` obyekti yaratiladi.
3. **ComputedStyle**: Kaskad qoidalari asosida CSS hisoblanadi.
4. **Layout (Reflow)**: Ekranning \`X, Y, Width, Height\` geometrik koordinatalari o‘lchanadi.
5. **GPU Paint & Composite**: Skia grafik kutubxonasi piksellarni GPU xotirasiga yozadi.

---

## 🛡️ 3. Xavfsizlik (Security) va Core Web Vitals

> [!IMPORTANT]
> **Xavfsizlik Qoidasi:** Hech qachon foydalanuvchidan kelgan tekshirilmagan satrni to‘g‘ridan-to‘g‘ri \`innerHTML\` ga ulamang!

\`\`\`javascript
// Xavfli XSS inyektsiyasi:
element.innerHTML = userComment; // BUZILISHI MUMKIN!

// Xavfsiz normativ usul:
element.textContent = userComment; // 100% XAVFSIZ
\`\`\``,
    codeExample: `<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${cleanTitle} — KODX Injiniring Laboratoriyasi</title>
    <style>
      :root {
        --brand-green: #22c55e;
        --dark-bg: #09090b;
      }
      body {
        margin: 0;
        padding: 24px;
        background: var(--dark-bg);
        color: #f4f4f5;
        font-family: system-ui, -apple-system, sans-serif;
      }
      .kodx-card {
        padding: 20px;
        background: rgba(24, 24, 27, 0.8);
        border: 1px solid rgba(34, 197, 94, 0.3);
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      }
      .badge {
        display: inline-block;
        padding: 4px 10px;
        background: rgba(34, 197, 94, 0.15);
        color: var(--brand-green);
        border-radius: 8px;
        font-size: 11px;
        font-family: monospace;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <div class="kodx-card">
      <span class="badge">WHATWG Normativ Namuna</span>
      <h2>${cleanTitle} Injiniringi</h2>
      <p>KODX laboratoriyasida jonli kodni o‘zgartirib, DOM va piksellar o‘zgarishini kuzating.</p>
    </div>
  </body>
</html>`,
    quiz: [
      {
        question: `"${cleanTitle}" elementi brauzerda qaysi bosqichda xotiraga yuklanadi?`,
        options: [
          'HTML Parsing & Tree Construction bosqichida',
          'Faqat sahifa yopilayotganda',
          'CSS to‘liq yuklanib bo‘lgandan so‘ng',
          'Hech qachon xotiraga yuklanmaydi',
        ],
        correct: 0,
        explanation: 'HTML parser xom baytlarni tokenlarga ajratib, Tree Construction paytida darhol C++ DOM obyektini xotiraga yuklaydi.',
      },
      {
        question: 'Qaysi CSS xususiyatlari Layout va Paint bosqichlarini chetlab o‘tib, to‘g‘ridan-to‘g‘ri GPU da ishlaydi?',
        options: [
          'transform va opacity',
          'width va height',
          'margin va padding',
          'top va left',
        ],
        correct: 0,
        explanation: 'Faqat transform va opacity xususiyatlari Compositor Thread da to‘g‘ridan-to‘g‘ri GPU orqali 120 FPS tezlikda render qilinadi.',
      },
      {
        question: 'XSS (Cross-Site Scripting) hujumining oldini olish uchun qaysi DOM xususiyatidan foydalanish eng xavfsiz?',
        options: [
          'element.textContent',
          'element.innerHTML',
          'document.write()',
          'eval()',
        ],
        correct: 0,
        explanation: 'textContent kiritilgan matndagi barcha HTML teglarni oddiy matn sifatida xavfsiz qabul qiladi va skriptlarni ishga tushirmaydi.',
      },
    ],
  };
}
