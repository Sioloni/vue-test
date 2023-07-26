import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import CardPage from "../components/CardPage.vue";
import AdminPage from "../components/AdminPage.vue";

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
    {
      name: "Admin",
      path: "/home/admin",
      component: AdminPage,
    },
  ],
});

export default router;
