import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProfileView from "../views/profileView.vue";
import LoginView from "../views/loginView.vue";
import LogoutView from "../views/logoutView.vue";
import RegisterView from "../views/registerView.vue";
import ArticleView from "../views/article/ArticleView.vue";
import DetileView from "../views/article/DetileView.vue";
import store from "@/store/modules/log";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/article",
    name: "article",
    component: ArticleView,
    children: [
      {
        path: ":slug",
        name: "detile",
        component: DetileView,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
    meta: { loginRequired: true },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    // meta: { loginRedirect: true },
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView,
    // meta: { loginRequired: true },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    // meta: { loginRequired: true },
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
