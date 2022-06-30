import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storageKey = 'leadhit-site-id'

export default new Vuex.Store({
  state: {
    siteId: null
  },
  getters: {
    getSiteId() {
      return state.siteId
    }
  },
  mutations: {
    setSiteId(state, data) {
      state.siteId = data
    },
  },
  actions: {
    REMOVE_SITE_ID({commit}) {
      localStorage.removeItem(storageKey)
      commit('setSiteId', null)
    },
    INITIALISE({commit}) {
      const data = localStorage.getItem(storageKey)
			if(data) {
				commit('setSiteId', JSON.parse(data))
			}
		},
    SET_SITE_ID({commit}, data) {
      localStorage.setItem(storageKey, JSON.stringify(data))
      commit('setSiteId', data)
    },
  },
  modules: {
  }
})
