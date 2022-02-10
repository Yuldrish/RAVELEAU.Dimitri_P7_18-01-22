const apiUrl = 'http://localhost:5000/api'

export const state = () => ({
  loginOk: false,
  users: null,
  posts: null,
  status: '',
  user: null,
  token: process.server ? '' : localStorage.getItem('token'),
})

export const getters = {
  isLoggedIn: (state) => (process.server ? '' : !!state.token),
  authStatus: (state) => state.status,
}

export const mutations = {
  LOGIN(state, user) {
    state.user = user
  },
  UPDATE_POSTS(state, posts) {
    state.posts = posts
  },
  auth_request(state) {
    state.status = 'loading'
  },
  auth_success(state, payload) {
    state.status = 'success'
    state.token = payload.token
    state.user = payload.user
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
  async login({ commit }, userData) {
    console.log('🚀 ~ file: index.js ~ line 43 ~ login ~ userData', userData)
    try {
      commit('auth_request')
      console.log('🚀 ~ file: index.js ~ line 43 ~ login ~ userData', userData)
      const userDataString = JSON.stringify(userData)
      console.log(
        '🚀 ~ file: index.js ~ line 50 ~ login ~ userDataString',
        userDataString
      )
      const resp = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        body: userDataString,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log('🚀 ~ file: index.js ~ line 53 ~ login ~ resp', resp)
      const data = await resp.json()
      console.log('🚀 ~ file: index.js ~ line 61 ~ login ~ data', data)
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
  /* login({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('auth-request')
      fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        body: JSON.stringify(user),
      }).then((resp) => {
        resp.json().then((data) => {
          const token = data.token
          const user = data.user

          localStorage.setItem('token', token)
          commit('auth_success', { token, user })
          resolve(data)
        })
      })
    })
    const user = {
      id: 'sffsdfsfs',
      name: 'Equipe Openclassroooms blabalaba',
      photo: 'https://picsum.photos/50',
    }
    commit('LOGIN', user)
  }, */

  async getPosts({ commit }) {
    const posts = await (await fetch(`${apiUrl}/posts`)).json()
    commit('UPDATE_POSTS', posts)
  },
}
