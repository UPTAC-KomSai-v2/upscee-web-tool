import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    evaluations: [],
    feedback: {}
  },
  mutations: {
    setEvaluations(state, payload) {
      state.evaluations = payload;
    }
  },
  actions: {
    fetchEvaluations({ commit }) {
      // Fetch evaluations from the backend
    }
  }
});
    