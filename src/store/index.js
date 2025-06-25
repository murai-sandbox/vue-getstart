import { createStore } from 'vuex'

const mockApiCall = (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'mock-jwt-token',
        user: {
          id: 1,
          email: email,
          name: 'Test User',
          loginTime: new Date().toLocaleString('ja-JP')
        }
      })
    }, 1000)
  })
}

export default createStore({
  state: {
    isAuthenticated: false,
    user: null,
    token: null
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    user: state => state.user,
    token: state => state.token
  },
  mutations: {
    SET_AUTH(state, { user, token }) {
      state.isAuthenticated = true
      state.user = user
      state.token = token
    },
    CLEAR_AUTH(state) {
      state.isAuthenticated = false
      state.user = null
      state.token = null
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        const response = await mockApiCall(email, password)
        commit('SET_AUTH', response)
        return response
      } catch (error) {
        throw new Error('ログインに失敗しました')
      }
    },
    logout({ commit }) {
      commit('CLEAR_AUTH')
    }
  },
  modules: {
  }
})
