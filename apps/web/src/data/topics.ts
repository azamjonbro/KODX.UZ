export interface SubthemeItem {
  id: string;
  slug: string;
  title: string;
  path: string;
  estimatedMinutes?: number;
  isCompleted?: boolean;
}

export interface ThemeModuleItem {
  id: string;
  title: string;
  order: number;
  isCompleted?: boolean;
  lessons: SubthemeItem[];
}

export interface CourseData {
  title: string;
  slug: string;
  totalLessons: number;
  completedLessons: number;
  modules: ThemeModuleItem[];
}

export const coursesData: Record<string, CourseData> = {
  html: {
    title: 'HTML ASOSLARI',
    slug: 'html',
    totalLessons: 35,
    completedLessons: 4,
    modules: [
      {
        id: 'html-mod-1',
        title: '01. Tarix va Standartlar',
        order: 1,
        isCompleted: true,
        lessons: [
          { id: '1.1', slug: 'html-tarixi', title: '1.1. HTML Tarixi & Tim Berners-Lee', path: '/html/html-tarixi', estimatedMinutes: 5, isCompleted: true },
          { id: '1.2', slug: 'html-2-0', title: '1.2. HTML 2.0 (RFC 1866)', path: '/html/html-2-0', estimatedMinutes: 6, isCompleted: true },
          { id: '1.3', slug: 'html-3-2', title: '1.3. HTML 3.2 va Jadvallar', path: '/html/html-3-2', estimatedMinutes: 6, isCompleted: true },
          { id: '1.4', slug: 'html-4-01', title: '1.4. HTML 4.01 va Doctype', path: '/html/html-4-01', estimatedMinutes: 7, isCompleted: true },
          { id: '1.5', slug: 'xhtml-davri', title: '1.5. XHTML va XML Qat‘iyligi', path: '/html/xhtml-davri', estimatedMinutes: 7, isCompleted: false },
          { id: '1.6', slug: 'html5-inqilobi', title: '1.6. HTML5 & WHATWG Living Standard', path: '/html/html5-inqilobi', estimatedMinutes: 8, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-2',
        title: '02. HTML Asoslari',
        order: 2,
        isCompleted: false,
        lessons: [
          { id: '2.1', slug: 'html-nima-markup', title: '2.1. Markup, Element va Atributlar', path: '/html/html-nima-markup', estimatedMinutes: 5, isCompleted: false },
          { id: '2.2', slug: 'nesting-parent-child', title: '2.2. Nesting & Parent / Child', path: '/html/nesting-parent-child', estimatedMinutes: 6, isCompleted: false },
          { id: '2.3', slug: 'character-references', title: '2.3. Character References (&amp;, &lt;)', path: '/html/character-references', estimatedMinutes: 5, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-3',
        title: '03. Hujjat Tuzilishi',
        order: 3,
        isCompleted: false,
        lessons: [
          { id: '3.1', slug: 'doctype-va-skelet', title: '3.1. <!DOCTYPE html>, <html>, <head>, <body>', path: '/html/doctype-va-skelet', estimatedMinutes: 6, isCompleted: false },
          { id: '3.2', slug: 'meta-link-base', title: '3.2. <meta>, <link>, <style>, <base>', path: '/html/meta-link-base', estimatedMinutes: 6, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-4',
        title: '04. Matn Elementlari',
        order: 4,
        isCompleted: false,
        lessons: [
          { id: '4.1', slug: 'matn-formatlash-inline', title: '4.1. <h1>-<h6>, <p>, <strong>, <em>, <mark>, <time>', path: '/html/matn-formatlash-inline', estimatedMinutes: 8, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-5',
        title: '05. Semantik',
        order: 5,
        isCompleted: false,
        lessons: [
          { id: '5.1', slug: 'semantik-landmarks', title: '5.1. <header>, <nav>, <main>, <article>, <aside>, <footer>', path: '/html/semantik-landmarks', estimatedMinutes: 8, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-6',
        title: '06. Havolalar va URL',
        order: 6,
        isCompleted: false,
        lessons: [
          { id: '6.1', slug: 'havolalar-url', title: '6.1. <a>, href, target, rel va URL Turlari', path: '/html/havolalar-url', estimatedMinutes: 7, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-7',
        title: '07. Ro‘yxatlar',
        order: 7,
        isCompleted: false,
        lessons: [
          { id: '7.1', slug: 'royxatlar', title: '7.1. <ul>, <ol>, <li> va Lug‘at (<dl>, <dt>, <dd>)', path: '/html/royxatlar', estimatedMinutes: 6, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-8',
        title: '08. Rasmlar',
        order: 8,
        isCompleted: false,
        lessons: [
          { id: '8.1', slug: 'rasmlar-responsive', title: '8.1. <img>, <picture>, srcset, sizes & CLS', path: '/html/rasmlar-responsive', estimatedMinutes: 8, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-9',
        title: '09. Audio / Video',
        order: 9,
        isCompleted: false,
        lessons: [
          { id: '9.1', slug: 'audio-video', title: '9.1. <audio>, <video>, <source> & <track>', path: '/html/audio-video', estimatedMinutes: 7, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-10',
        title: '10. Jadvallar',
        order: 10,
        isCompleted: false,
        lessons: [
          { id: '10.1', slug: 'jadvallar', title: '10.1. <table>, <thead>, <tbody>, colspan & rowspan', path: '/html/jadvallar', estimatedMinutes: 7, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-11',
        title: '11. Forms',
        order: 11,
        isCompleted: false,
        lessons: [
          { id: '11.1', slug: 'formalar-inputs', title: '11.1. <form>, <input> Barcha Turlari & Validatsiya', path: '/html/formalar-inputs', estimatedMinutes: 9, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-12',
        title: '12. Interactive Elementlar',
        order: 12,
        isCompleted: false,
        lessons: [
          { id: '12.1', slug: 'interactive-dialog-popover', title: '12.1. <dialog>, <details>, <summary> & Popover', path: '/html/interactive-dialog-popover', estimatedMinutes: 8, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-13',
        title: '13. Embedded Content',
        order: 13,
        isCompleted: false,
        lessons: [
          { id: '13.1', slug: 'embedded-iframe-canvas-svg', title: '13.1. <iframe>, <embed>, <object> & MathML', path: '/html/embedded-iframe-canvas-svg', estimatedMinutes: 7, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-14',
        title: '14. Canvas',
        order: 14,
        isCompleted: false,
        lessons: [
          { id: '14.1', slug: 'canvas-2d-webgl', title: '14.1. <canvas>, 2D Context & WebGL', path: '/html/canvas-2d-webgl', estimatedMinutes: 9, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-15',
        title: '15. SVG',
        order: 15,
        isCompleted: false,
        lessons: [
          { id: '15.1', slug: 'svg-grafika', title: '15.1. <svg>, <path>, <circle> & Maskalar', path: '/html/svg-grafika', estimatedMinutes: 8, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-16',
        title: '16. Global Attributlar',
        order: 16,
        isCompleted: false,
        lessons: [
          { id: '16.1', slug: 'global-attributlar', title: '16.1. id, class, hidden, tabindex, contenteditable, data-*', path: '/html/global-attributlar', estimatedMinutes: 7, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-17',
        title: '17. Scripting',
        order: 17,
        isCompleted: false,
        lessons: [
          { id: '17.1', slug: 'scripting-async-defer', title: '17.1. <script>, async, defer, module & <noscript>', path: '/html/scripting-async-defer', estimatedMinutes: 8, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-18',
        title: '18. Web Components',
        order: 18,
        isCompleted: false,
        lessons: [
          { id: '18.1', slug: 'web-components', title: '18.1. Custom Elements, Shadow DOM, <template> & <slot>', path: '/html/web-components', estimatedMinutes: 9, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-19',
        title: '19. HTML Parser',
        order: 19,
        isCompleted: false,
        lessons: [
          { id: '19.1', slug: 'html-parser-internals', title: '19.1. Tokenizer, Tree Construction & Error Recovery', path: '/html/html-parser-internals', estimatedMinutes: 9, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-20',
        title: '20. Accessibility',
        order: 20,
        isCompleted: false,
        lessons: [
          { id: '20.1', slug: 'accessibility-a11y', title: '20.1. WCAG 2.2, ARIA Rollar & AXObject Tree', path: '/html/accessibility-a11y', estimatedMinutes: 8, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-21',
        title: '21. SEO',
        order: 21,
        isCompleted: false,
        lessons: [
          { id: '21.1', slug: 'seo-structured-data', title: '21.1. Canonical, Robots, OpenGraph & JSON-LD Schema', path: '/html/seo-structured-data', estimatedMinutes: 8, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-22',
        title: '22. Security',
        order: 22,
        isCompleted: false,
        lessons: [
          { id: '22.1', slug: 'web-security-xss-csp', title: '22.1. XSS, CSP (Content Security Policy) & Sandboxing', path: '/html/web-security-xss-csp', estimatedMinutes: 8, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-23',
        title: '23. Browser Bilan Ishlash',
        order: 23,
        isCompleted: false,
        lessons: [
          { id: '23.1', slug: 'browser-render-pipeline', title: '23.1. DOM → CSSOM → Render Tree → Layout → Paint → Composite', path: '/html/browser-render-pipeline', estimatedMinutes: 9, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-24',
        title: '24. Deprecated / Obsolete',
        order: 24,
        isCompleted: false,
        lessons: [
          { id: '24.1', slug: 'deprecated-obsolete', title: '24.1. <font>, <center>, <marquee>, <applet> & CSS Muqobillari', path: '/html/deprecated-obsolete', estimatedMinutes: 6, isCompleted: false },
        ],
      },
      {
        id: 'html-mod-25',
        title: '25. Reference',
        order: 25,
        isCompleted: false,
        lessons: [
          { id: '25.1', slug: 'html-reference-matrix', title: '25.1. 162 ta WHATWG Elementlar Ensiklopediyasi & Moslik', path: '/html/html-reference-matrix', estimatedMinutes: 10, isCompleted: false },
        ],
      },
    ],
  },
  css: {
    title: 'CSS ASOSLARI',
    slug: 'css',
    totalLessons: 12,
    completedLessons: 1,
    modules: [
      {
        id: 'css-mod-1',
        title: '1. CSS Kirish va Asosiy Qoidalar',
        order: 1,
        isCompleted: true,
        lessons: [
          {
            id: '1.1',
            slug: 'kirish',
            title: '1.1. CSS Sintaksisi va Ulash',
            path: '/css/kirish',
            estimatedMinutes: 5,
            isCompleted: true,
          },
          {
            id: '1.2',
            slug: 'selectorlar',
            title: '1.2. CSS Selectorlar va Vorislik',
            path: '/css/selectorlar',
            estimatedMinutes: 7,
            isCompleted: false,
          },
        ],
      },
      {
        id: 'css-mod-2',
        title: '2. Box Model va Joylashuv',
        order: 2,
        isCompleted: false,
        lessons: [
          {
            id: '2.1',
            slug: 'box-model',
            title: '2.1. Margin, Padding va Border',
            path: '/css/box-model',
            estimatedMinutes: 6,
            isCompleted: false,
          },
          {
            id: '2.2',
            slug: 'display-position',
            title: '2.2. Display va Position turlari',
            path: '/css/display-position',
            estimatedMinutes: 8,
            isCompleted: false,
          },
        ],
      },
      {
        id: 'css-mod-3',
        title: '3. Flexbox & Grid Tizimlari',
        order: 3,
        isCompleted: false,
        lessons: [
          {
            id: '3.1',
            slug: 'flexbox',
            title: '3.1. Flexbox Asoslari',
            path: '/css/flexbox',
            estimatedMinutes: 10,
            isCompleted: false,
          },
          {
            id: '3.2',
            slug: 'grid',
            title: '3.2. CSS Grid Layout',
            path: '/css/grid',
            estimatedMinutes: 10,
            isCompleted: false,
          },
          {
            id: '3.3',
            slug: 'modern',
            title: '3.3. Zamonaviy CSS Xususiyatlari',
            path: '/css/modern',
            estimatedMinutes: 8,
            isCompleted: false,
          },
        ],
      },
    ],
  },
  javascript: {
    title: 'JAVASCRIPT ASOSLARI',
    slug: 'javascript',
    totalLessons: 14,
    completedLessons: 1,
    modules: [
      {
        id: 'js-mod-1',
        title: '1. JS Kirish va O\'zgaruvchilar',
        order: 1,
        isCompleted: true,
        lessons: [
          {
            id: '1.1',
            slug: 'kirish',
            title: '1.1. JS Nima va Qanday Ishlaydi',
            path: '/javascript/kirish',
            estimatedMinutes: 5,
            isCompleted: true,
          },
          {
            id: '1.2',
            slug: 'ozgaruvchilar',
            title: '1.2. let, const va Ma\'lumot turlari',
            path: '/javascript/ozgaruvchilar',
            estimatedMinutes: 6,
            isCompleted: false,
          },
        ],
      },
      {
        id: 'js-mod-2',
        title: '2. Funksiyalar va DOM',
        order: 2,
        isCompleted: false,
        lessons: [
          {
            id: '2.1',
            slug: 'funksiyalar',
            title: '2.1. Funksiyalar va Arrow Functions',
            path: '/javascript/funksiyalar',
            estimatedMinutes: 8,
            isCompleted: false,
          },
          {
            id: '2.2',
            slug: 'dom',
            title: '2.2. DOM Bilan Ishlash',
            path: '/javascript/dom',
            estimatedMinutes: 9,
            isCompleted: false,
          },
          {
            id: '2.3',
            slug: 'events',
            title: '2.3. Hodisalar (Events) Tinglash',
            path: '/javascript/events',
            estimatedMinutes: 7,
            isCompleted: false,
          },
        ],
      },
      {
        id: 'js-mod-3',
        title: '3. Asinxron JS va Event Loop',
        order: 3,
        isCompleted: false,
        lessons: [
          {
            id: '3.1',
            slug: 'async',
            title: '3.1. Promises & Async/Await',
            path: '/javascript/async',
            estimatedMinutes: 10,
            isCompleted: false,
          },
        ],
      },
    ],
  },
};

// Flattened fallback list for quick access
export const topics: Record<string, { title: string; path: string }[]> = {
  html: (coursesData['html']?.modules || []).flatMap(m => m.lessons.map(l => ({ title: l.title, path: l.path }))),
  css: (coursesData['css']?.modules || []).flatMap(m => m.lessons.map(l => ({ title: l.title, path: l.path }))),
  javascript: (coursesData['javascript']?.modules || []).flatMap(m => m.lessons.map(l => ({ title: l.title, path: l.path }))),
};
