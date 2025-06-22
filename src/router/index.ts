import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Guide from '../views/Guide/Guide.vue'; // Guide import qilindi

const routes: Array<RouteRecordRaw> = [
 {
  path: '/',
  name: 'Home',
  component: Home,
 },
 {
  path: '/guide',
  name: 'Guide',
  component: Guide, // Guide route qo'shildi
 },
];

const router = createRouter({
 history: createWebHistory(),
 routes,
});

export default router;