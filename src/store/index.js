import { createStore } from "vuex";
import log from "./modules/index";
const store = createStore({
  modules: {
    log,
  },
});

export default store;
