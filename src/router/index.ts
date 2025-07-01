import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Guide from '../views/Guide/Guide.vue'; // Guide import qilindi
import ErrorPage from "../components/404/404.vue"
const routes: Array<RouteRecordRaw> = [
 {
  path: '/',
  name: 'Home',
  component: Home,
 },
 {
  path: '/guide',
  name: 'Guide',
  component: Guide,
 },
 {
  path: '/:pathMatch(.*)*',
  name: '404Page',
  component: ErrorPage,
 },
];

const router = createRouter({
 history: createWebHistory(),
 routes,
});

export default router;