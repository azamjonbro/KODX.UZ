import { createRouter, createWebHistory } from "vue-router";
import Home from '@/pages/Home.vue';
import HtmlLayout from  "../layouts/HtmlLayout.vue";
import CssLayout from "../layouts/CssLayout.vue";
import JsLayout from "../layouts/JsLayout.vue";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/html",
    component: HtmlLayout,
    children: [
      { path: "kirish", component: () => import("../pages/html/Kirish.vue") },
      { path: "taglar", component: () => import("../pages/html/Taglar.vue") },
      { path: "attributlar", component: () => import("../pages/html/Attributlar.vue") }
    ]
  },
  {
    path: "/css",
    component: CssLayout,
    children: [
      { path: "kirish", component: () => import("../pages/css/Kirish.vue") },
      { path: "selectorlar", component: () => import("../pages/css/Selectorlar.vue") },
      { path: "box-model", component: () => import("../pages/css/BoxModel.vue") }
    ]
  },
  {
    path: "/javascript",
    component: JsLayout,
    children: [
      { path: "kirish", component: () => import("../pages/javascript/Kirish.vue") },
      { path: "ozgaruvchilar", component: () => import("../pages/javascript/Ozgaruvchilar.vue") },
      { path: "funksiyalar", component: () => import("../pages/javascript/Funksiyalar.vue") }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
