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
  {
    path: '/html',
    component: HtmlLayout,
    children: [
      { path: '', redirect: '/html/kirish' },
      { path: 'kirish', name: 'html-kirish', component: () => import('../pages/html/Kirish.vue') },
      { path: 'taglar', name: 'html-taglar', component: () => import('../pages/html/Taglar.vue') },
      { path: 'attributlar', name: 'html-attributlar', component: () => import('../pages/html/Attributlar.vue') },
      { path: 'head-meta', name: 'html-head-meta', component: () => import('../pages/html/HeadMeta.vue') },
      { path: 'semantika', name: 'html-semantika', component: () => import('../pages/html/Semantika.vue') },
      { path: 'rasmlar', name: 'html-rasmlar', component: () => import('../pages/html/Rasmlar.vue') },
      { path: 'formalar', name: 'html-formalar', component: () => import('../pages/html/Formalar.vue') },
      { path: 'dialog', name: 'html-dialog', component: () => import('../pages/html/Dialog.vue') },
      { path: 'seo', name: 'html-seo', component: () => import('../pages/html/SeoOptimizatsiya.vue') },
      // Dynamic Database-driven route for any other HTML lesson
      { path: ':lessonSlug', component: () => import('../pages/DynamicLessonView.vue') },
    ],
  },
  {
    path: '/css',
    component: CssLayout,
    children: [
      { path: '', redirect: '/css/kirish' },
      { path: 'kirish', name: 'css-kirish', component: () => import('../pages/css/Kirish.vue') },
      { path: 'selectorlar', name: 'css-selectorlar', component: () => import('../pages/css/Selectorlar.vue') },
      { path: 'box-model', name: 'css-box-model', component: () => import('../pages/css/BoxModel.vue') },
      { path: 'display-position', name: 'css-display-position', component: () => import('../pages/css/DisplayPosition.vue') },
      { path: 'flexbox', name: 'css-flexbox', component: () => import('../pages/css/Flexbox.vue') },
      { path: 'grid', name: 'css-grid', component: () => import('../pages/css/Grid.vue') },
      { path: 'modern', name: 'css-modern', component: () => import('../pages/css/ModernCss.vue') },
      // Dynamic Database-driven route for any other CSS lesson
      { path: ':lessonSlug', component: () => import('../pages/DynamicLessonView.vue') },
    ],
  },
  {
    path: '/javascript',
    component: JsLayout,
    children: [
      { path: '', redirect: '/javascript/kirish' },
      { path: 'kirish', name: 'js-kirish', component: () => import('../pages/javascript/Kirish.vue') },
      { path: 'ozgaruvchilar', name: 'js-ozgaruvchilar', component: () => import('../pages/javascript/Ozgaruvchilar.vue') },
      { path: 'funksiyalar', name: 'js-funksiyalar', component: () => import('../pages/javascript/Funksiyalar.vue') },
      { path: 'dom', name: 'js-dom', component: () => import('../pages/javascript/Dom.vue') },
      { path: 'events', name: 'js-events', component: () => import('../pages/javascript/Events.vue') },
      { path: 'async', name: 'js-async', component: () => import('../pages/javascript/AsyncJs.vue') },
      // Dynamic Database-driven route for any other JS lesson
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
