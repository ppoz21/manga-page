import Vue from "vue";
import Vuex from "vuex";
import ComicsModule from "./comics";
import ComicSingle from "./comic"
import ChapterSingle from "./chapter"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    comisc: ComicsModule,
    comic: ComicSingle,
    chapters: ChapterSingle
  }
})
