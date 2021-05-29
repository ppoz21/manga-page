import ComicsApi from "../api/comisc";

const FETCHING_COMIC = "FETCHING_COMICS",
  FETCHING_COMIC_SUCCESS = "FETCHING_COMICS_SUCCESS",
  FETCHING_COMIC_ERROR = "FETCHING_COMICS_ERROR";

export default {
  namespaced: true,
  state: {
    isLoading: false,
    error: null,
    comic: null
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    hasError(state) {
      return state.error !== null;
    },
    error(state) {
      return state.error;
    },
    hasComis(state) {
      return state.comic !== null;
    },
    comic(state) {
      return state.comic
    }
  },
  mutations: {
    [FETCHING_COMIC](state) {
      state.isLoading = true;
      state.error = null;
      state.comics = null;
    },
    [FETCHING_COMIC_SUCCESS](state, comic) {
      state.isLoading = false;
      state.error = null;
      state.comic = comic;
    },
    [FETCHING_COMIC_ERROR](state, error) {
      state.isLoading = false;
      state.error = error;
      state.comics = null;
    }
  },
  actions: {
    async find({ commit }, id) {
      commit(FETCHING_COMIC);
      try {
        let response = await ComicsApi.find(id);
        commit(FETCHING_COMIC_SUCCESS, response.data);
        return response.data;
      }
      catch (e)
      {
        commit(FETCHING_COMIC_ERROR, e);
        return null;
      }
    }
  }
}
