<template>
  <navView />

  <router-view class="container" />
</template>
<script>
import navView from "@/components/navView.vue";
import { useRoute } from "vue-router";
import { onMounted, watch } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  name: "appView",

  components: {
    navView,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.commit("log/onStart");
    });
    watch(useRoute(), () => {
      store.commit("log/onStart");
    });
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.navbar-brand {
  color: #2c3e50 !important;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
