export default function ({ $axios, redirect, store }) {
  $axios.onRequest((config) => {
    config.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
      'token'
    )}`
  })
  $axios.onError((error) => {
    if (error.response.status === 401) {
      store.dispatch('logout')
    }
  })
}
