import Vue from "vue"
import Vuex from "vuex"
import navbar from './modules/navbar'
import sidebar from './modules/sidebar'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    navbar,
    sidebar
  },

  state: {

  },

  actions: {

  },

  mutations: {

  },
});
