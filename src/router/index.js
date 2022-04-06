import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import profileView from "../views/profileView.vue";
import loginView from "../views/loginView.vue";
import logoutView from "../views/logoutView.vue";
import store from "@/store";

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
    meta: { loginRequired: true },
  },
  {
    path: "/login",
    name: "login",
    component: loginView,
    meta: { loginRedirect: true },
  },
  {
    path: "/logout",
    name: "logout",
    component: logoutView,
    meta: { loginRequired: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.loginRequired)) {
    if (store.state.isAuthenticated) {
      next();
    } else {
      next("/login");
    }
  } else if (to.matched.some((record) => record.meta.loginRedirect)) {
    if (!store.state.isAuthenticated) {
      next();
    } else {
      next("/profile");
    }
  } else {
    next();
  }
});
export default router;
