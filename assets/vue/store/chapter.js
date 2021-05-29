import ChaptersApi from "../api/chapter";

const FETCHING_CHAPTER = "FETCHING_CHAPTER",
  FETCHING_CHAPTER_SUCCESS = "FETCHING_CHAPTER_SUCCESS",
  FETCHING_CHAPTER_ERROR = "FETCHING_CHAPTER_ERROR";

export default {
  namespaced: true,
  state: {
    isLoading: false,
    error: null,
    chapters: []
  },
  getters: {
    isLoadingChapters(state) {
      return state.isLoading;
    },
    hasErrorChapters(state) {
      return state.error !== null;
    },
    errorChapters(state) {
      return state.error;
    },
    hasChapters(state) {
      return state.chapters !== null && state.chapters.length > 0;
    },
    chapters(state) {
      return state.chapters
    }
  },
  mutations: {
    [FETCHING_CHAPTER](state) {
      state.isLoadingChapters = true;
      state.errorChapters = null;
      state.chapters = [];
    },
    [FETCHING_CHAPTER_SUCCESS](state, comic) {
      state.isLoadingChapters = false;
      state.errorChapters = null;
      state.chapters = comic;
    },
    [FETCHING_CHAPTER_ERROR](state, error) {
      state.isLoadingChapters = false;
      state.errorChapters = error;
      state.chapters = [];
    }
  },
  actions: {
    async findByChapter({ commit }, id) {
      commit(FETCHING_CHAPTER);
      try {
        let response = await ChaptersApi.findByChapter(id);
        commit(FETCHING_CHAPTER_SUCCESS, response.data);
        return response.data;
      }
      catch (e)
      {
        commit(FETCHING_CHAPTER_ERROR, e);
        return null;
      }
    }
  }
}
