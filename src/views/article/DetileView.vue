<template>
  <div>
    <h3>{{ findd.article.title }}</h3>
    <p>
      {{ findd.article.discription }}
    </p>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const findd = store.getters["article/findSlug"];
    console.log("findd", findd.article.title);
    return { findd };
  },
};
</script>

<style></style>
