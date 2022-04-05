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
      store.commit("onStart");
    });
    watch(useRoute(), () => {
      store.commit("onStart");
    });
  },
};
</script>
