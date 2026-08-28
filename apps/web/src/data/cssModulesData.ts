/**
 * KODX.uz — CSS darslari uchun chuqur kontent generatori.
 *
 * HTML generatori DOM daraxti va parser haqida bo'lsa, bu generator
 * Blink Style Engine — CSSOM qurilishi, selektor moslashtirish, kaskad,
 * ComputedStyle, LayoutNG va Paint/Composite bosqichlari haqida.
 */

import type { ComprehensiveLesson } from './lessonTypes.ts';

/** Sarlavhadan "1.2." kabi raqamli prefiksni olib tashlaydi. */
function clean(title: string): string {
  return title.replace(/^[\d.]+\s*/, '').trim();
}

/** C++ identifikatori uchun xavfsiz nom. */
function pascal(title: string): string {
  const ascii = title.replace(/[^a-zA-Z0-9 ]/g, ' ').trim();
  const parts = ascii.split(/\s+/).filter(Boolean);
  const name = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
  return name || 'Generic';
}

/** Dars slugidan taxminiy CSS xususiyat nomi. */
function cssProperty(slug: string): string {
  return slug.replace(/[^a-z0-9-]/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || 'color';
}

/**
 * Modul raqamiga qarab darsning render pipeline'dagi asosiy bosqichini
 * aniqlaydi. Bu CRP narxini realroq ko'rsatish uchun kerak.
 */
function pipelineProfile(moduleOrder: number) {
  // 11–12 (Flexbox/Grid), 08–10 (box model, display, position) — layoutga ta'sir qiladi.
  if ([8, 9, 10, 11, 12, 17].includes(moduleOrder)) {
    return {
      reflow: 'High' as const,
      repaint: 'Medium' as const,
      compositeOnly: false,
      stage: 'Layout (LayoutNG)',
      explanation:
        'Bu guruhdagi xususiyatlar element geometriyasini o‘zgartiradi, shuning uchun LayoutNG butun formatting context uchun qayta hisoblanadi (Reflow), so‘ng Paint va Composite bosqichlari takrorlanadi.',
    };
  }
  // 07 (rang/fon), 18 (filter/shadow) — asosan paint.
  if ([7, 13, 18].includes(moduleOrder)) {
    return {
      reflow: 'None' as const,
      repaint: 'High' as const,
      compositeOnly: false,
      stage: 'Paint (Skia)',
      explanation:
        'Geometriya o‘zgarmaydi — Layout o‘tkazib yuboriladi, ammo Skia display list qayta yoziladi va tegishli qatlam qayta rasterizatsiya qilinadi.',
    };
  }
  // 15 (transform/animatsiya) — compositor thread.
  if ([15].includes(moduleOrder)) {
    return {
      reflow: 'None' as const,
      repaint: 'None' as const,
      compositeOnly: true,
      stage: 'Composite (GPU)',
      explanation:
        'transform va opacity Compositor Thread da ishlanadi: Main Thread band bo‘lsa ham animatsiya 120 FPS da davom etadi.',
    };
  }
  // Qolganlari — style recalc bosqichi.
  return {
    reflow: 'Medium' as const,
    repaint: 'Medium' as const,
    compositeOnly: false,
    stage: 'Style Recalc',
    explanation:
      'O‘zgarish avval Invalidation Set orqali tegishli tugunlarni belgilaydi, so‘ng ComputedStyle qayta hisoblanadi va zarur bo‘lsa Layout hamda Paint chaqiriladi.',
  };
}

export function generateCssLessonData(
  slug: string,
  title: string,
  moduleTitle: string,
  moduleOrder: number,
  estimatedMinutes = 7,
): ComprehensiveLesson {
  const cleanTitle = clean(title);
  const safeName = pascal(cleanTitle);
  const prop = cssProperty(slug);
  const profile = pipelineProfile(moduleOrder);

  return {
    id: `${moduleOrder}.${slug}`,
    course: 'css',
    slug,
    title,
    moduleTitle,
    moduleOrder,
    description: `CSS spetsifikatsiyasi (§ ${cleanTitle}) va Chromium Blink Style Engine asosida "${cleanTitle}" ning kaskad, ComputedStyle, layout va rasterizatsiya darajasidagi chuqur tahlili.`,
    estimatedMinutes,
    spec: `W3C CSS Specification — ${cleanTitle}`,
    kidAnalogy: {
      title: `Kiyim-kechak Qoidasi: ${cleanTitle}`,
      story: `Tasavvur qiling, HTML — bu qo‘g‘irchoqning tanasi, CSS esa uning kiyimi. "${cleanTitle}" — bu kiyimni qaysi tartibda kiyish kerakligini aytuvchi qoida. Agar avval paltoni, keyin ko‘ylakni kiysangiz, hamma narsa g‘alati ko‘rinadi. Brauzer ham xuddi shunday: u har bir qoidani aniq navbat bilan qo‘llaydi va oxirgi "g‘olib" qoidani tanlaydi.`,
      keyTakeaway: `${cleanTitle} — brauzerga elementni qanday ko‘rinishga keltirishni aytadigan qoida bo‘lib, u ${profile.stage} bosqichida hisobga olinadi.`,
    },
    cppInternalCode: {
      filename: `third_party/blink/renderer/core/css/resolver/style_resolver.cc`,
      code: `// Chromium Blink Style Engine: ${cleanTitle} resolution
#include "third_party/blink/renderer/core/css/resolver/style_resolver.h"
#include "third_party/blink/renderer/core/css/resolver/match_result.h"
#include "third_party/blink/renderer/core/css/style_engine.h"
#include "third_party/blink/renderer/core/style/computed_style.h"

namespace blink {

// 1-bosqich: selektorlarni moslashtirish va kaskad natijasini yig'ish.
void StyleResolver::MatchAllRules(StyleResolverState& state,
                                  ElementRuleCollector& collector) {
  MatchUARules(collector);        // Brauzerning standart stillari
  MatchUserRules(collector);      // Foydalanuvchi stillari
  MatchAuthorRules(state, collector);  // Sizning CSS faylingiz
}

// 2-bosqich: ${prop} qiymatini ComputedStyle ga yozish.
void StyleBuilder::Apply${safeName}(StyleResolverState& state,
                                    const CSSValue& value) {
  ComputedStyleBuilder& builder = state.StyleBuilder();
  if (value.IsInitialValue()) {
    builder.SetInitial${safeName}();
    return;
  }
  // Hisoblangan qiymat (computed value) ComputedStyle ga saqlanadi.
  builder.Set${safeName}(StyleBuilderConverter::Convert${safeName}(state, value));
  // ${profile.stage} bosqichi uchun invalidatsiya bayrog'i.
  state.GetElement().SetNeedsStyleRecalc(kLocalStyleChange);
}

}  // namespace blink`,
      explanation: `Blink da har bir CSS deklaratsiyasi StyleResolver orqali kaskaddan o‘tadi va StyleBuilder yordamida C++ ning ComputedStyle obyektiga yoziladi. Bir xil stilga ega elementlar ComputedStyle ni Matched Properties Cache orqali baham ko‘radi — bu xotirani sezilarli tejaydi.`,
    },
    attributes: [
      { name: 'inherit', type: 'CSS-wide keyword', defaultVal: '—', description: 'Qiymatni ota elementning hisoblangan qiymatidan oladi.', isGlobal: true },
      { name: 'initial', type: 'CSS-wide keyword', defaultVal: '—', description: 'Xususiyatni spetsifikatsiyadagi boshlang‘ich qiymatiga qaytaradi.', isGlobal: true },
      { name: 'unset', type: 'CSS-wide keyword', defaultVal: '—', description: 'Meros olinadigan bo‘lsa inherit, aks holda initial kabi ishlaydi.', isGlobal: true },
      { name: 'revert', type: 'CSS-wide keyword', defaultVal: '—', description: 'Qiymatni oldingi kaskad origin (masalan, brauzer stillari) darajasiga qaytaradi.', isGlobal: true },
      { name: 'revert-layer', type: 'CSS-wide keyword', defaultVal: '—', description: 'Qiymatni oldingi @layer qatlamidagi holatiga qaytaradi.', isGlobal: true },
      { name: '!important', type: 'Priority flag', defaultVal: 'false', description: 'Deklaratsiyani kaskadning yuqori pog‘onasiga ko‘taradi — juda ehtiyot bo‘lib ishlating.', isGlobal: true },
    ],
    proTips: [
      `Selektorlarni qisqa tuting: Blink selektorlarni o‘ngdan chapga o‘qiydi, shuning uchun \`.card p span\` emas, \`.card__label\` kabi bitta sinf tezroq moslashadi.`,
      `Takrorlanuvchi qiymatlarni custom property (\`--brand: #22c55e\`) ga chiqaring — bu Matched Properties Cache samaradorligini oshiradi va dark mode’ni bitta joydan boshqarish imkonini beradi.`,
      `Animatsiyada faqat \`transform\` va \`opacity\` ni o‘zgartiring: bu Layout va Paint ni chetlab o‘tib, to‘g‘ridan-to‘g‘ri Compositor Thread da ishlaydi.`,
      `\`@layer\` bilan kaskad qatlamlarini oldindan e’lon qiling (reset → base → components → utilities) — shunda \`!important\` ga umuman ehtiyoj qolmaydi.`,
    ],
    gotchas: [
      `Specificity urushiga \`!important\` bilan javob berish — bu qisqa muddatli yechim; keyingi safar yana kuchliroq selektor kerak bo‘ladi va CSS boshqarib bo‘lmas holga keladi.`,
      `\`width\`, \`top\`, \`margin\` kabi geometrik xususiyatlarni animatsiya qilish har kadrda Reflow chaqiradi va 60 FPS ni buzadi.`,
      `Element o‘lchamini JS orqali o‘qish (\`offsetHeight\`) darhol sinxron Layout ni majburlaydi — o‘qish va yozishni aralashtirsangiz "layout thrashing" yuzaga keladi.`,
      `\`display: none\` element AXTree dan ham o‘chadi — screen readerlar uni umuman ko‘rmaydi; vizual yashirish uchun \`.sr-only\` patternidan foydalaning.`,
    ],
    deepDive: {
      blinkClassHierarchy: [
        'blink::CSSParser',
        'blink::StyleSheetContents',
        'blink::RuleSet',
        'blink::ElementRuleCollector',
        'blink::StyleResolver',
        `blink::ComputedStyle (${prop})`,
      ],
      memoryAllocation: `ComputedStyle obyekti ~ 700 Bayt; bir xil stilga ega elementlar uni Matched Properties Cache orqali baham ko‘radi (copy-on-write ScopedRefPtr).`,
      crpCost: {
        reflow: profile.reflow,
        repaint: profile.repaint,
        compositeOnly: profile.compositeOnly,
        explanation: profile.explanation,
      },
      axTreeMapping: {
        implicitRole: 'CSS rolni o‘zgartirmaydi — role faqat HTML semantikasi va ARIA orqali aniqlanadi.',
        accessibleName: 'CSS `content` bilan qo‘shilgan matn ba’zi screen readerlarda o‘qiladi, ammo unga tayanmang.',
        keyboardNav: '`:focus-visible` uchun ko‘rinadigan outline qoldiring; `outline: none` ni kompensatsiyasiz ishlatmang.',
      },
      security: {
        xssVector: `CSS injection: foydalanuvchi kiritgan qiymat \`style\` atributiga to‘g‘ridan-to‘g‘ri qo‘shilsa, \`background-image: url(...)\` orqali ma’lumot chetga uzatilishi mumkin.`,
        cspPolicy: `Content-Security-Policy: style-src 'self'; img-src 'self' data:;`,
        sanitizationTip: `Dinamik stillarni satr birlashtirish bilan emas, \`element.style.setProperty('--x', value)\` yoki oldindan tayyor sinflar orqali bering.`,
      },
      coreWebVitals: {
        metric: profile.compositeOnly ? 'INP' : moduleOrder <= 2 ? 'FCP' : 'CLS',
        impact: profile.compositeOnly
          ? 'Compositor da ishlaydigan animatsiyalar Main Thread ni band qilmaydi, shuning uchun INP past qoladi.'
          : moduleOrder <= 2
            ? 'CSS render-blocking resurs: u yuklanmaguncha brauzer birinchi pikselni ham chizmaydi.'
            : 'O‘lchamlari oldindan belgilanmagan elementlar yuklanish paytida kontentni siljitadi va CLS ni oshiradi.',
        optimizationRule: profile.compositeOnly
          ? 'Faqat transform/opacity ni animatsiya qiling va kerak bo‘lsa `will-change` ni faqat animatsiya davomida yoqing.'
          : moduleOrder <= 2
            ? 'Critical CSS ni inline qiling, qolganini `media="print" onload` yoki `rel="preload"` bilan kechiktiring.'
            : 'Rasm va konteynerlarga `aspect-ratio` yoki aniq `width`/`height` bering.',
      },
      debuggingChallenge: {
        title: `${cleanTitle} — Kaskad va Performance Xatosini Tuzatish`,
        brokenCode: `/* XATO KOD */
#page .content div.card p.title {   /* haddan tashqari kuchli selektor */
  color: red !important;            /* !important bilan urush */
}

.card {
  width: 300px;
  transition: width .3s, margin-left .3s;  /* layoutni animatsiya qilyapti */
}

.card:focus {
  outline: none;                    /* fokus umuman ko'rinmaydi */
}`,
        fixedCode: `/* TUZATILGAN KOD */
@layer components {
  .card__title {                    /* bitta sinf — past specificity */
    color: var(--card-title-color, #ef4444);
  }

  .card {
    width: 300px;
    /* faqat compositor xususiyatlari animatsiya qilinadi */
    transition: transform .3s ease, opacity .3s ease;
  }

  .card:focus-visible {
    outline: 2px solid var(--brand-500);
    outline-offset: 2px;            /* fokus ko'rinadi */
  }
}`,
        bugDescription: `Uchta xato bor: (1) juda kuchli selektor va \`!important\` kaskadni boshqarib bo‘lmas holga keltiradi; (2) \`width\` va \`margin-left\` animatsiyasi har kadrda Reflow chaqiradi; (3) \`outline: none\` klaviatura foydalanuvchilari uchun fokusni ko‘rinmas qiladi.`,
        hints: [
          'Selektorni bitta sinfga tushiring va kaskadni @layer bilan boshqaring.',
          'Layout chaqiradigan xususiyatlar o‘rniga transform/opacity ni animatsiya qiling.',
          'outline ni o‘chirsangiz, :focus-visible uchun muqobil ko‘rsatkich bering.',
        ],
      },
    },
    content: `## 🏛️ 1. Spetsifikatsiya va Nazariya

W3C CSS spetsifikatsiyasiga ko‘ra, **\`${cleanTitle}\`** stil tizimining muhim qismi bo‘lib, u brauzerning **${profile.stage}** bosqichida hisobga olinadi.

### 📐 Sintaksis va Qiymatlar
- **Qo‘llaniladigan elementlar**: modulga qarab barcha elementlar yoki muayyan formatting context ishtirokchilari.
- **Meros olinadimi**: tipografiya va rang xususiyatlari — ha; geometriya xususiyatlari — yo‘q.
- **Boshlang‘ich qiymat**: spetsifikatsiyada belgilangan \`initial\` qiymati.

\`\`\`css
/* Standart namuna */
.kodx-element {
  /* asosiy deklaratsiya */
  ${prop === 'color' ? 'color: oklch(72% 0.17 150)' : `/* ${cleanTitle} */`};

  /* qiymatni o'zgaruvchi orqali boshqarish */
  --kodx-accent: oklch(72% 0.17 150);
  border: 1px solid color-mix(in oklab, var(--kodx-accent) 40%, transparent);
}
\`\`\`

---

## 🔬 2. Blink Style Engine va Render Pipeline

Brauzer CSS faylini o‘qiganidan piksel chizilgunga qadar quyidagi bosqichlardan o‘tadi:

\`\`\`
[ CSS baytlari ] ──> [ Tokenizer ] ──> [ CSSOM / RuleSet ]
                                            │
                                            ▼
[ Selector Matching (o'ngdan chapga) ] ──> [ Cascade + Specificity ]
                                            │
                                            ▼
[ ComputedStyle ] ──> [ LayoutNG ] ──> [ Paint (Skia) ] ──> [ GPU Composite ]
\`\`\`

1. **CSSOM qurilishi**: qoidalar \`RuleSet\` ga indekslanadi (id, class, tag bo‘yicha buckets).
2. **Selector Matching**: Blink selektorni **o‘ngdan chapga** o‘qiydi — shuning uchun eng o‘ngdagi qism qanchalik aniq bo‘lsa, shuncha tez.
3. **Cascade**: origin → \`@layer\` → specificity → hujjatdagi tartib bo‘yicha g‘olib aniqlanadi.
4. **ComputedStyle**: g‘olib qiymatlar C++ obyektiga yoziladi va Matched Properties Cache orqali baham ko‘riladi.
5. **Layout → Paint → Composite**: geometriya, display list va GPU qatlamlari hosil bo‘ladi.

> [!NOTE]
> Ushbu dars mavzusi asosan **${profile.stage}** bosqichiga tegishli: ${profile.explanation}

---

## ⚖️ 3. Kaskad, Specificity va Amaliy Qoidalar

Specificity uchta raqam bilan o‘lchanadi — \`(id, class/attribute/pseudo-class, element/pseudo-element)\`:

\`\`\`css
p                       /* (0,0,1) */
.card p                 /* (0,1,1) */
#main .card p           /* (1,1,1) — g'olib */
:where(#main) .card p   /* (0,1,1) — :where() specificity ni 0 qiladi */
\`\`\`

> [!IMPORTANT]
> \`!important\` — bu yechim emas, kechiktirilgan muammo. Uning o‘rniga \`@layer\` bilan qatlamlarni tartiblang:

\`\`\`css
@layer reset, base, components, utilities;
/* utilities har doim components ustidan g'olib — !important kerak emas */
\`\`\``,
    codeExample: `<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${cleanTitle} — KODX CSS Laboratoriyasi</title>
    <style>
      /* Kaskad qatlamlari: tartib shu yerda belgilanadi */
      @layer base, components;

      @layer base {
        :root {
          --brand: oklch(72% 0.17 150);
          --bg: oklch(14% 0.01 260);
          --fg: oklch(96% 0.01 260);
          --radius: 16px;
        }

        * { box-sizing: border-box; }

        body {
          margin: 0;
          padding: 24px;
          background: var(--bg);
          color: var(--fg);
          font-family: system-ui, -apple-system, sans-serif;
          /* fluid tipografiya */
          font-size: clamp(14px, 1vw + 10px, 17px);
        }
      }

      @layer components {
        .kodx-card {
          /* logical properties — RTL tillarda ham to'g'ri ishlaydi */
          padding-block: 20px;
          padding-inline: 24px;
          background: color-mix(in oklab, var(--fg) 6%, transparent);
          border: 1px solid color-mix(in oklab, var(--brand) 30%, transparent);
          border-radius: var(--radius);

          /* faqat compositor xususiyatlari animatsiya qilinadi */
          transition: transform .25s ease, opacity .25s ease;
        }

        .kodx-card:hover {
          transform: translateY(-4px);
        }

        .badge {
          display: inline-block;
          padding: 4px 10px;
          background: color-mix(in oklab, var(--brand) 18%, transparent);
          color: var(--brand);
          border-radius: 8px;
          font: bold 11px ui-monospace, monospace;
        }

        /* Container query: konteyner kengligiga qarab moslashadi */
        .grid {
          container-type: inline-size;
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          margin-block-start: 20px;
        }
      }

      /* Foydalanuvchi harakatni kamaytirishni so'ragan bo'lsa — hurmat qilamiz */
      @media (prefers-reduced-motion: reduce) {
        * { transition: none !important; animation: none !important; }
      }
    </style>
  </head>
  <body>
    <div class="kodx-card">
      <span class="badge">CSS Normativ Namuna</span>
      <h2>${cleanTitle}</h2>
      <p>Qiymatlarni o‘zgartirib, Layout / Paint / Composite bosqichlari qanday qayta ishga tushishini DevTools &gt; Performance da kuzating.</p>
    </div>
  </body>
</html>`,
    quiz: [
      {
        question: 'Blink selektorlarni qaysi yo‘nalishda moslashtiradi?',
        options: [
          'O‘ngdan chapga (eng o‘ngdagi qismdan boshlab)',
          'Chapdan o‘ngga (birinchi qismdan boshlab)',
          'Tasodifiy tartibda',
          'Faqat DOM daraxti tugagach, bir vaqtda',
        ],
        correct: 0,
        explanation:
          'Blink selektorni o‘ngdan chapga o‘qiydi: avval "key selector" bo‘yicha nomzod elementlar topiladi, so‘ng chapga qarab shartlar tekshiriladi. Shuning uchun qisqa va aniq key selector eng tez ishlaydi.',
      },
      {
        question: 'Kaskadda g‘olib deklaratsiya qaysi tartibda aniqlanadi?',
        options: [
          'Origin va importance → @layer → specificity → hujjatdagi tartib',
          'Faqat specificity → fayl hajmi',
          'Faqat hujjatdagi tartib — oxirgisi doim g‘olib',
          'Selektor uzunligi bo‘yicha',
        ],
        correct: 0,
        explanation:
          'CSS Cascade spetsifikatsiyasi aniq navbatni belgilaydi: avval origin va importance, keyin kaskad qatlamlari (@layer), so‘ng specificity va eng oxirida hujjatdagi tartib.',
      },
      {
        question: `Qaysi xususiyatlarni animatsiya qilish Layout va Paint bosqichlarini butunlay chetlab o‘tadi?`,
        options: [
          'transform va opacity',
          'width va height',
          'margin va padding',
          'top va left',
        ],
        correct: 0,
        explanation:
          'transform va opacity Compositor Thread da GPU orqali ishlanadi. Qolganlari Layout yoki Paint ni majburlaydi va Main Thread band bo‘lsa animatsiya sekinlashadi.',
      },
      {
        question: '`:where(#main)` selektorining specificity qiymati nechaga teng?',
        options: [
          '(0,0,0) — :where() specificity ni butunlay nolga tushiradi',
          '(1,0,0) — ID sifatida hisoblanadi',
          '(0,1,0) — class sifatida hisoblanadi',
          '(1,1,1)',
        ],
        correct: 0,
        explanation:
          ':where() o‘z argumentlarining specificity sini har doim nolga tenglashtiradi. :is() esa aksincha — argumentlar orasidagi eng kuchlisining specificity sini oladi.',
      },
    ],
  };
}
