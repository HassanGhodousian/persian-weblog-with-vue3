<template>
  <div class="logout">
    <h1>logout</h1>
    <button @click="doLogout" class="btn btn-danger">logout</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    function doLogout() {
      store.commit("logout");
      router.push("/login");
    }
    return {
      doLogout,
    };
  },
};
</script>

<style></style>
