const apiUrl = 'http://localhost:5000/api'

export const state = () => ({
  loginOk: false,
  users: null,
  posts: null,
  status: '',
  user: null,
  userId: localStorage.getItem('userId'),
  comments: null,
  token: localStorage.getItem('token') || '',
})

export const getters = {
  isLoggedIn: (state) => !!state.token,
  authStatus: (state) => state.status,
}

export const mutations = {
  LOGIN(state, user) {
    state.user = user
  },
  UPDATE_POSTS(state, posts) {
    state.posts = posts
  },
  UPDATE_COMMENT(state, comments) {
    state.comments = comments
  },
  UPDATE_USERS(state, users) {
    state.users = users
  },
  UPDATE_ONE_USER(state, user) {
    state.user = user
  },
  auth_request(state) {
    state.status = 'loading'
  },
  auth_success(state, payload) {
    state.status = 'success'
    state.token = payload.token
    state.userId = payload.userId
  },
  auth_error(state) {
    state.status = 'error'
  },
  logout(state) {
    state.status = ''
    state.token = ''
  },
}

export const actions = {
  async register({ commit }, userData) {
    try {
      commit('auth_request')
      const userDataString = JSON.stringify(userData)
      userDataString
      const resp = await fetch(`${apiUrl}/auth/signup`, {
        method: 'POST',
        body: userDataString,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await resp.json()
      const token = data.token
      const user = data.user
      localStorage.setItem('token', token)
      commit('auth_success', { token, user })
      return data
    } catch (error) {
      commit('auth_error')
      localStorage.removeItem('token')
      return error
    }
  },

  async login({ commit }, userData) {
    try {
      commit('auth_request')
      const userDataString = JSON.stringify(userData)
      userDataString
      const resp = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        body: userDataString,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await resp.json()
      const token = data.token
      const userId = data.userId
      localStorage.setItem('token', token)
      localStorage.setItem('userId', userId)
      commit('auth_success', { token, userId })
      return data
    } catch (error) {
      commit('auth_error')
      localStorage.removeItem('token')
      return error
    }
  },

  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit('logout')
      localStorage.removeItem('token')
      resolve()
    })
  },

  async getPosts({ commit }) {
    const posts = await this.$axios(`${apiUrl}/posts`)
    commit('UPDATE_POSTS', posts.data)
  },

  async getUsers({ commit }) {
    const users = await this.$axios(`${apiUrl}/auth`)
    commit('UPDATE_USERS', users.data)
  },

  async getOneUser({ commit, state }) {
    const user = await this.$axios(`${apiUrl}/auth/profil/${state.userId}`)
    commit('UPDATE_ONE_USER', user.data)
  },
}
