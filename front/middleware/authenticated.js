export default function ({ store, redirect, route }) {
  // Si l'utilisateur n'est pas authentifié

  if (!store.state.token) {
    if (route.fullPath == '/signUp') {
      return redirect('/signUp')
    }
    return redirect('/login')
  }
}
