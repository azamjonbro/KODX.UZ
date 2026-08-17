export interface TopicItem {
  title: string;
  path: string;
}

export interface TopicsData {
  html: TopicItem[];
  css: TopicItem[];
  javascript: TopicItem[];
}

export const topics: TopicsData = {
  html: [
    { title: "1. HTML Kirish", path: "/html/kirish" },
    { title: "2. HTML Teglar", path: "/html/taglar" },
    { title: "3. HTML Atributlar", path: "/html/attributlar" },
    { title: "4. Head & Meta SEO", path: "/html/head-meta" },
    { title: "5. Semantik HTML", path: "/html/semantika" },
    { title: "6. Rasmlar & Optimizatsiya", path: "/html/rasmlar" },
    { title: "7. Formalar & Inputlar", path: "/html/formalar" },
    { title: "8. Zamonaviy <dialog>", path: "/html/dialog" },
    { title: "9. SEO & Core Web Vitals", path: "/html/seo" }
  ],
  css: [
    { title: "1. CSS Kirish", path: "/css/kirish" },
    { title: "2. CSS Selectorlar", path: "/css/selectorlar" },
    { title: "3. CSS Box Model", path: "/css/box-model" },
    { title: "4. CSS Flexbox", path: "/css/flexbox" },
    { title: "5. CSS Grid", path: "/css/grid" },
    { title: "6. Zamonaviy CSS", path: "/css/modern" }
  ],
  javascript: [
    { title: "1. JS Kirish", path: "/javascript/kirish" },
    { title: "2. JS O'zgaruvchilar", path: "/javascript/ozgaruvchilar" },
    { title: "3. JS Funksiyalar", path: "/javascript/funksiyalar" },
    { title: "4. DOM Manipulyatsiyasi", path: "/javascript/dom" },
    { title: "5. Hodisalar (Events)", path: "/javascript/events" },
    { title: "6. Asinxron JS & Event Loop", path: "/javascript/async" }
  ]
};
