import { createStore } from "vuex";
import log from "./modules/log.js";
import article from "./modules/article.js";
const store = createStore({
  modules: {
    log,
    article,
  },
});

export default store;
