export default {
  namespaced: true,
  // == data
  state: {
    open: false
  },

  // == computed
  getters: {},

  // == methods
  actions: {
    updateByMenu({ state }, isOpen) {
      state.open = isOpen;
    }
  },

  mutations: {}
};
