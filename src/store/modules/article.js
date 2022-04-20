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
      let articlse = localStorage.getItem("articlse");
      articlse = JSON.parse(articlse);
      const article = articlse.find(
        (article) => article.slug == route.params.slug
      );
      return { article };
    },
  },
  actions: {},
  mutations: {
    doAdd(state, id) {
      console.log("iiiiid", state, id);
      let articlse = localStorage.getItem("articlse");
      articlse = JSON.parse(articlse);

      articlse.push(article);
      localStorage.setItem("article");
      return { articlse };
    },
  },
  modules: {},
};
export default article;
