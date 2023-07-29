import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import CardPage from "../components/CardPage.vue";
import AdminPage from "../components/AdminPage.vue";

let router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "",
      path: "/",
      component: HomePage,
    },
    {
      name: "Page",
      path: "/product/:id",
      component: CardPage,
    },
    {
      name: "Admin",
      path: "/admin",
      component: AdminPage,
    },
  ],
});

export default router;
