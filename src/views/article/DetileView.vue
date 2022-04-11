<template>
  <h3>Detale</h3>
  {{ findd.title }}
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const findd = store.getters["article/findSlug"];
    console.log(findd);
    return { findd };
  },
};
</script>

<style></style>
