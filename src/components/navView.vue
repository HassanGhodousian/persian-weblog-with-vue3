<template>
  <nav
    id="nav"
    class="navbar navbar-expand-lg navbar-light mb-5"
    style="background-color: #e3f2fd"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">سروناز</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">صفحه اصلی</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">درباره ما</router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              v-if="store.state.log.isAuthenticated"
              to="/profile"
              >پروفایل</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              v-if="!store.state.log.isAuthenticated"
              to="/login"
              >ورود</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              v-if="!store.state.log.isAuthenticated"
              to="/register"
              >عضویت</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              v-if="store.state.log.isAuthenticated"
              to="/logout"
              >خروج</router-link
            >
          </li>
        </ul>
        <form class="d-flex me-auto">
          <input
            class="form-control me-2"
            type="search"
            placeholder="جست و جو"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary" type="submit">جستوجو</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "navView",
  setup() {
    const store = useStore();

    console.log("status", store.state.log.isAuthenticated);
    return { store };
  },
};
</script>
