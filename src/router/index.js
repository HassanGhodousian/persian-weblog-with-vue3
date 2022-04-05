import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import profileView from "../views/profileView.vue";
import loginView from "../views/loginView.vue";
import logoutView from "../views/logoutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/profile",
    name: "profile",
    component: profileView,
  },
  {
    path: "/login",
    name: "login",
    component: loginView,
  },
  {
    path: "/logout",
    name: "logout",
    component: logoutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
