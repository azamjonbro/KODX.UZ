import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Dashboard from '../pages/Dashboard.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
