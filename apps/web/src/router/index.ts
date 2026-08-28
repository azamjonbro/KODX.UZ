import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../pages/Home.vue';
import HtmlLayout from '../layouts/HtmlLayout.vue';
import CssLayout from '../layouts/CssLayout.vue';
import JsLayout from '../layouts/JsLayout.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../pages/Login.vue'),
  },
  {
    path: '/roadmaps',
    name: 'roadmaps',
    component: () => import('../pages/Roadmaps.vue'),
  },
  {
    path: '/practice',
    name: 'practice',
    component: () => import('../pages/Practice.vue'),
  },
  {
    path: '/practice/:id',
    name: 'practice-workspace',
    component: () => import('../pages/PracticeWorkspace.vue'),
  },
  {
    path: '/challenges',
    name: 'challenges',
    component: () => import('../pages/Challenges.vue'),
  },
  {
    path: '/leaderboard',
    name: 'leaderboard',
    component: () => import('../pages/Leaderboard.vue'),
  },
  {
    path: '/dictionary',
    name: 'dictionary',
    component: () => import('../pages/Dictionary.vue'),
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../pages/News.vue'),
  },
  {
    path: '/explorer',
    name: 'knowledge-explorer',
    component: () => import('../pages/KnowledgeExplorer.vue'),
  },
  /*
   * Kurs marshrutlari.
   *
   * Har bir kurs uchun:
   *  1) qo'lda yozilgan boy sahifalar — katalogdagi HAQIQIY slug ustida turadi,
   *     shuning uchun ular sidebar va prev/next navigatsiyasidan ham topiladi;
   *  2) eski URL'lar redirect orqali yangi slugga yo'naltiriladi (link buzilmaydi);
   *  3) qolgan barcha darslar `:lessonSlug` orqali DynamicLessonView'ga tushadi.
   */
  {
    path: '/html',
    component: HtmlLayout,
    children: [
      { path: '', redirect: '/html/web-sahifa-nima' },

      // 01. WEB ASOSLARI
      { path: 'web-sahifa-nima', name: 'html-web-sahifa-nima', component: () => import('../pages/html/WebSahifaNima.vue') },
      { path: 'client-server', name: 'html-client-server', component: () => import('../pages/html/ClientServer.vue') },
      { path: 'browser-qanday-ishlaydi', name: 'html-browser-qanday-ishlaydi', component: () => import('../pages/html/BrowserIshlashi.vue') },
      { path: 'http-sorovlar', name: 'html-http-sorovlar', component: () => import('../pages/html/HttpSorovlar.vue') },
      { path: 'domain-hosting', name: 'html-domain-hosting', component: () => import('../pages/html/DomainHosting.vue') },

      // 02. TARIX VA STANDARTLAR
      { path: 'tim-berners-lee', name: 'html-tim-berners-lee', component: () => import('../pages/html/TimBernersLee.vue') },
      { path: 'whatwg-living-standard', name: 'html-whatwg-living-standard', component: () => import('../pages/html/StandartlarWhatwg.vue') },

      // 03. HTML ASOSLARI
      { path: 'html-nima', name: 'html-html-nima', component: () => import('../pages/html/Kirish.vue') },
      { path: 'teg', name: 'html-teg', component: () => import('../pages/html/Taglar.vue') },
      { path: 'atribut', name: 'html-atribut', component: () => import('../pages/html/Attributlar.vue') },

      // 04 / 06 / 09 / 12 / 13 / 22
      { path: 'head-tag', name: 'html-head-tag', component: () => import('../pages/html/HeadMeta.vue') },
      { path: 'semantika', name: 'html-semantika', component: () => import('../pages/html/Semantika.vue') },
      { path: 'img-tag', name: 'html-img-tag', component: () => import('../pages/html/Rasmlar.vue') },
      { path: 'form-tag', name: 'html-form-tag', component: () => import('../pages/html/Formalar.vue') },
      { path: 'dialog-tag', name: 'html-dialog-tag', component: () => import('../pages/html/Dialog.vue') },
      { path: 'seo-asoslari', name: 'html-seo-asoslari', component: () => import('../pages/html/SeoOptimizatsiya.vue') },

      // Eski URL'lar — yangi sluglarga yo'naltiriladi
      { path: 'standartlar-whatwg', redirect: '/html/whatwg-living-standard' },
      { path: 'kirish', redirect: '/html/html-nima' },
      { path: 'taglar', redirect: '/html/teg' },
      { path: 'attributlar', redirect: '/html/atribut' },
      { path: 'head-meta', redirect: '/html/head-tag' },
      { path: 'rasmlar', redirect: '/html/img-tag' },
      { path: 'formalar', redirect: '/html/form-tag' },
      { path: 'dialog', redirect: '/html/dialog-tag' },
      { path: 'seo', redirect: '/html/seo-asoslari' },

      // Katalogdagi qolgan barcha darslar
      { path: ':lessonSlug', component: () => import('../pages/DynamicLessonView.vue') },
    ],
  },
  {
    path: '/css',
    component: CssLayout,
    children: [
      { path: '', redirect: '/css/css-tarixi' },

      { path: 'css-nima', name: 'css-css-nima', component: () => import('../pages/css/Kirish.vue') },
      { path: 'type-selector', name: 'css-type-selector', component: () => import('../pages/css/Selectorlar.vue') },
      { path: 'box-model-asoslari', name: 'css-box-model-asoslari', component: () => import('../pages/css/BoxModel.vue') },
      { path: 'display-outer-inner', name: 'css-display-outer-inner', component: () => import('../pages/css/DisplayPosition.vue') },
      { path: 'flex-container', name: 'css-flex-container', component: () => import('../pages/css/Flexbox.vue') },
      { path: 'grid-container', name: 'css-grid-container', component: () => import('../pages/css/Grid.vue') },
      { path: 'custom-properties', name: 'css-custom-properties', component: () => import('../pages/css/ModernCss.vue') },

      // Eski URL'lar
      { path: 'kirish', redirect: '/css/css-nima' },
      { path: 'selectorlar', redirect: '/css/type-selector' },
      { path: 'box-model', redirect: '/css/box-model-asoslari' },
      { path: 'display-position', redirect: '/css/display-outer-inner' },
      { path: 'flexbox', redirect: '/css/flex-container' },
      { path: 'grid', redirect: '/css/grid-container' },
      { path: 'modern', redirect: '/css/custom-properties' },

      { path: ':lessonSlug', component: () => import('../pages/DynamicLessonView.vue') },
    ],
  },
  {
    path: '/javascript',
    component: JsLayout,
    children: [
      { path: '', redirect: '/javascript/js-tarixi' },

      { path: 'js-vs-ecmascript', name: 'js-js-vs-ecmascript', component: () => import('../pages/javascript/Kirish.vue') },
      { path: 'var-let-const', name: 'js-var-let-const', component: () => import('../pages/javascript/Ozgaruvchilar.vue') },
      { path: 'function-declaration', name: 'js-function-declaration', component: () => import('../pages/javascript/Funksiyalar.vue') },
      { path: 'dom-daraxti', name: 'js-dom-daraxti', component: () => import('../pages/javascript/Dom.vue') },
      { path: 'addeventlistener', name: 'js-addeventlistener', component: () => import('../pages/javascript/Events.vue') },
      { path: 'promise-asoslari', name: 'js-promise-asoslari', component: () => import('../pages/javascript/AsyncJs.vue') },

      // Eski URL'lar
      { path: 'kirish', redirect: '/javascript/js-vs-ecmascript' },
      { path: 'ozgaruvchilar', redirect: '/javascript/var-let-const' },
      { path: 'funksiyalar', redirect: '/javascript/function-declaration' },
      { path: 'dom', redirect: '/javascript/dom-daraxti' },
      { path: 'events', redirect: '/javascript/addeventlistener' },
      { path: 'async', redirect: '/javascript/promise-asoslari' },

      { path: ':lessonSlug', component: () => import('../pages/DynamicLessonView.vue') },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../pages/NotFound.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
