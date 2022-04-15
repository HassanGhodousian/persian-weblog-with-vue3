// import { reactive } from "@vue/reactivity";
import { useRoute } from "vue-router";
const article = {
  namespaced: true,
  state: {
    store: " ",
  },
  getters: {
    findSlug() {
      const route = useRoute();
      let articlse = localStorage.getItem("article");
      articlse = JSON.parse(articlse);
      const article = articlse.find(
        (article) => article.slug == route.params.slug
      );

      return { article };
    },
  },
  actions: {},
  modules: {},
};
export default article;
