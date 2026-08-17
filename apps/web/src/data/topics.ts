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
    totalLessons: 15,
    completedLessons: 2,
    modules: [
      {
        id: 'html-mod-1',
        title: '1. HTML Tarixi va Evolyutsiyasi',
        order: 1,
        isCompleted: true,
        lessons: [
          {
            id: '1.1',
            slug: 'tarix',
            title: '1.1. Tim Berners-Lee va Web 1.0',
            path: '/html/tarix',
            estimatedMinutes: 5,
            isCompleted: true,
          },
          {
            id: '1.2',
            slug: 'standartlar',
            title: '1.2. HTML Standartlari va WHATWG',
            path: '/html/standartlar',
            estimatedMinutes: 6,
            isCompleted: true,
          },
          {
            id: '1.3',
            slug: 'web-sahifa-nima',
            title: '1.3. Web Sahifa nima?',
            path: '/html/web-sahifa-nima',
            estimatedMinutes: 4,
            isCompleted: true,
          },
        ],
      },
      {
        id: 'html-mod-2',
        title: '2. Web Qanday Ishlaydi: Client...',
        order: 2,
        isCompleted: false,
        lessons: [
          {
            id: '2.1',
            slug: 'kirish',
            title: '2.1. Client va Server nima?',
            path: '/html/kirish',
            estimatedMinutes: 5,
            isCompleted: false,
          },
          {
            id: '2.2',
            slug: 'browser-qanday-ishlaydi',
            title: '2.2. Browser qanday ishlaydi?',
            path: '/html/browser-qanday-ishlaydi',
            estimatedMinutes: 7,
            isCompleted: false,
          },
          {
            id: '2.3',
            slug: 'http-sorovlar',
            title: '2.3. HTTP so\'rov va javoblar',
            path: '/html/http-sorovlar',
            estimatedMinutes: 8,
            isCompleted: false,
          },
          {
            id: '2.4',
            slug: 'domain-hosting',
            title: '2.4. Domain va Hosting nima?',
            path: '/html/domain-hosting',
            estimatedMinutes: 6,
            isCompleted: false,
          },
        ],
      },
      {
        id: 'html-mod-3',
        title: '3. HTML5 Hujjat Skeleti va <!...',
        order: 3,
        isCompleted: false,
        lessons: [
          {
            id: '3.1',
            slug: 'taglar',
            title: '3.1. <!DOCTYPE html> va Skelet',
            path: '/html/taglar',
            estimatedMinutes: 6,
            isCompleted: false,
          },
          {
            id: '3.2',
            slug: 'semantika',
            title: '3.2. Semantik Teglar (<header>, <main>)',
            path: '/html/semantika',
            estimatedMinutes: 8,
            isCompleted: false,
          },
          {
            id: '3.3',
            slug: 'attributlar',
            title: '3.3. HTML Global Atributlari',
            path: '/html/attributlar',
            estimatedMinutes: 5,
            isCompleted: false,
          },
        ],
      },
      {
        id: 'html-mod-4',
        title: '4. <head>, Charset va Viewport',
        order: 4,
        isCompleted: false,
        lessons: [
          {
            id: '4.1',
            slug: 'head-meta',
            title: '4.1. Meta Teglar & Viewport',
            path: '/html/head-meta',
            estimatedMinutes: 5,
            isCompleted: false,
          },
          {
            id: '4.2',
            slug: 'rasmlar',
            title: '4.2. Rasmlar va Multimedia',
            path: '/html/rasmlar',
            estimatedMinutes: 7,
            isCompleted: false,
          },
        ],
      },
      {
        id: 'html-mod-5',
        title: '5. Google SEO, OpenGraph va ...',
        order: 5,
        isCompleted: false,
        lessons: [
          {
            id: '5.1',
            slug: 'seo',
            title: '5.1. SEO va Core Web Vitals',
            path: '/html/seo',
            estimatedMinutes: 9,
            isCompleted: false,
          },
          {
            id: '5.2',
            slug: 'formalar',
            title: '5.2. Formalar & Validatsiya',
            path: '/html/formalar',
            estimatedMinutes: 8,
            isCompleted: false,
          },
          {
            id: '5.3',
            slug: 'dialog',
            title: '5.3. Zamonaviy <dialog> & Popover',
            path: '/html/dialog',
            estimatedMinutes: 6,
            isCompleted: false,
          },
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
  html: coursesData.html.modules.flatMap(m => m.lessons.map(l => ({ title: l.title, path: l.path }))),
  css: coursesData.css.modules.flatMap(m => m.lessons.map(l => ({ title: l.title, path: l.path }))),
  javascript: coursesData.javascript.modules.flatMap(m => m.lessons.map(l => ({ title: l.title, path: l.path }))),
};
