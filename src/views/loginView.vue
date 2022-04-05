<template>
  <div class="about">
    <h1>login</h1>
    <button @click="doLogin" class="btn btn-success">login</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    function doLogin() {
      store.commit("login", "abc123");
      router.push("/profile");
    }
    return {
      doLogin,
    };
  },
};
</script>

<style></style>
