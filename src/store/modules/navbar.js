export default {
  namespaced: true,
  // == data
  state: {
    loading: false
  },

  // == computed
  getters: {},

  // == methods
  actions: {},

  mutations: {
    initialize(state, loading) {
      state.loading = loading;
    },

    loadOperation(state, isLoading) {
      state.loading = isLoading;
    }
  }
};
