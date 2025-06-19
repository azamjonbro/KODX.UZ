import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
 {
  path: '/',
  name: 'Home',
  component: () => import('../views/Home.vue'),
 },
 // Qo'shimcha routelar shu yerga qo'shiladi
];

const router = createRouter({
 history: createWebHistory(),
 routes,
});

export default router;