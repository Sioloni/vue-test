import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import CardPage from "../components/CardPage.vue";

let router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/",
      component: HomePage,
    },
    {
      name: "Home",
      path: "/home",
      component: HomePage,
    },
    {
      name: "Page",
      path: "/home/:id",
      component: CardPage,
    },
  ],
});

export default router;
