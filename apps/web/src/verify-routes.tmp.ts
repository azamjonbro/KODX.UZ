// createWebHistory import paytida `window` talab qiladi — minimal stub beramiz.
(globalThis as any).window = {
  location: { pathname: '/', search: '', hash: '', href: 'http://localhost/' },
  history: { state: null, replaceState() {}, pushState() {} },
  addEventListener() {}, removeEventListener() {},
};
(globalThis as any).document = { querySelector: () => null, baseURI: 'http://localhost/' };

import { createRouter, createMemoryHistory } from 'vue-router';
const routerConfig = (await import('./router/index')).default;
import { coursesData, getCourseLessons } from './data/topics';
import { COURSE_SLUGS } from './data/lessonTypes';

const r = createRouter({ history: createMemoryHistory(), routes: routerConfig.options.routes as any });

let fail = 0;
let dynamic = 0, rich = 0;

for (const c of COURSE_SLUGS) {
  for (const l of getCourseLessons(c)) {
    const m = r.resolve(l.path);
    if (m.matched.length === 0 || m.name === 'not-found') { console.log(`  ✗ ${l.path} -> not-found`); fail++; continue; }
    if (m.name) rich++; else dynamic++;
  }
  // kurs indeks sahifasi
  const idx = r.resolve(`/${c}`);
  if (idx.name === 'not-found') { console.log(`  ✗ /${c} indeks yo‘q`); fail++; }
  else console.log(`  /${c} -> ${idx.path}`);
}

// eski URL'lar redirect qilinishi kerak
const legacy = [
  ['/html/kirish','/html/html-nima'], ['/html/taglar','/html/teg'],
  ['/html/attributlar','/html/atribut'], ['/html/head-meta','/html/head-tag'],
  ['/html/rasmlar','/html/img-tag'], ['/html/formalar','/html/form-tag'],
  ['/html/dialog','/html/dialog-tag'], ['/html/seo','/html/seo-asoslari'],
  ['/html/standartlar-whatwg','/html/whatwg-living-standard'],
  ['/css/kirish','/css/css-nima'], ['/css/selectorlar','/css/type-selector'],
  ['/css/box-model','/css/box-model-asoslari'], ['/css/display-position','/css/display-outer-inner'],
  ['/css/flexbox','/css/flex-container'], ['/css/grid','/css/grid-container'],
  ['/css/modern','/css/custom-properties'],
  ['/javascript/kirish','/javascript/js-vs-ecmascript'],
  ['/javascript/ozgaruvchilar','/javascript/var-let-const'],
  ['/javascript/funksiyalar','/javascript/function-declaration'],
  ['/javascript/dom','/javascript/dom-daraxti'],
  ['/javascript/events','/javascript/addeventlistener'],
  ['/javascript/async','/javascript/promise-asoslari'],
];
for (const [from, to] of legacy) {
  const m = r.resolve(from);
  if (m.path !== to) { console.log(`  ✗ ${from} -> ${m.path} (kutilgan ${to})`); fail++; }
}

console.log(`\n  boy sahifa: ${rich}, dinamik: ${dynamic}, eski URL redirect: ${legacy.length}`);
console.log(fail === 0 ? '✅ Barcha marshrutlar to‘g‘ri' : `❌ ${fail} ta marshrut muammosi`);
