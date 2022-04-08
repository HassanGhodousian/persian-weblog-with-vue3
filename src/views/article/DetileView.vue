<template>
  <h3>Detale</h3>
  <!-- {{ article.title }} -->
</template>

<script>
import { reactive } from "@vue/reactivity";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    let articlse = reactive(localStorage.getItem("articlse"));
    articlse = JSON.parse(articlse);
    const artilcle = articlse.findIndex(
      (article) => article.slus == route.params.slug
    );
    console.log(artilcle);
  },
};
</script>

<style></style>
