import Vue from 'vue'
import Vuex from 'vuex'
import posters from '@/assets/posters.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posters: [...posters]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
