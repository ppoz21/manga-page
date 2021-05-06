import ComicsApi from "../api/comisc";

const FETCHING_COMICS = "FETCHING_COMICS",
  FETCHING_COMICS_SUCCESS = "FETCHING_COMICS_SUCCESS",
  FETCHING_COMICS_ERROR = "FETCHING_COMICS_ERROR";

export default {
  namespaced: true,
  state: {
    isLoading: false,
    error: null,
    comics: []
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
    hasComisc(state) {
      return state.comics !== null && state.comics.length > 0;
    },
    comics(state) {
      return state.comics
    }
  },
  mutations: {
    [FETCHING_COMICS](state) {
      state.isLoading = true;
      state.error = null;
      state.comics = [];
    },
    [FETCHING_COMICS_SUCCESS](state, comics) {
      state.isLoading = false;
      state.error = null;
      state.comics = comics;
    },
    [FETCHING_COMICS_ERROR](state, error) {
      state.isLoading = false;
      state.error = error;
      state.comics = [];
    }
  },
  actions: {
    async findAll({ commit }) {
      commit(FETCHING_COMICS);
      try {
        let response = await ComicsApi.findAll();
        commit(FETCHING_COMICS_SUCCESS, response.data);
        return response.data;
      }
      catch (e)
      {
        commit(FETCHING_COMICS_ERROR, e);
        return null;
      }
    },
    async findLatest({ commit })
    {
      commit(FETCHING_COMICS);
      try {
        let response = await ComicsApi.findLatest();
        commit(FETCHING_COMICS_SUCCESS, response.data);
        return response.data;
      }
      catch (e)
      {
        commit(FETCHING_COMICS_ERROR, e);
        return null;
      }
    }
  }
};
