export default ({ app, store }, inject) => {
  // Ceci injecte $hello(msg) dans Vue, dans le context et le store.
  const api = window.fetch
  window.fetch = function () {
    return new Promise((resolve, reject) => {
      api
        .apply(this, arguments)
        .then((response) => {
          if (response.status === 401) {
            store.dispatch('logout')
          }
          resolve(response)
        })
        .catch((error) => {
          reject(response)
        })
    })
  }
  inject('api', api)
}
