import Vue from "vue";
import Vuex from "vuex";
import ComicsModule from "./comics";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    comisc: ComicsModule
  }
})
