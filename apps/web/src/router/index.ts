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
    ],
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
