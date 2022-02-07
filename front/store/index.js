const apiUrl = 'http://localhost:5000/api'

export const state = () => ({
  loginOk: false,
  users: null,
  posts: null,
  user: null,
})

export const mutations = {
  LOGIN(state, user) {
    state.user = user
  },
  UPDATE_POSTS(state, posts) {
    state.posts = posts
  },
}

export const actions = {
  login({ commit }, { email, password }) {
    // const token = fetch("apifsfsf")
    // const userId = token....
    const user = {
      id: 'sffsdfsfs',
      name: 'Equipe Openclassroooms blabalaba',
      photo: 'https://picsum.photos/50',
    }
    commit('LOGIN', user)
  },

  async getPosts({ commit }) {
    const posts = await (await fetch(`${apiUrl}/posts`)).json()
    commit('UPDATE_POSTS', posts)
  },
}
