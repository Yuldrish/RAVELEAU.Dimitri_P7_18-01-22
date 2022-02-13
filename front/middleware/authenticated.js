export default function ({ store, redirect, route }) {
  if (
    store.getters.isLoggedIn &&
    (route.fullPath == '/signUp' || route.fullPath == '/login')
  ) {
    // Si l'utilisateur est authentifié et qu'il essaie d'acceder aux pages de connexion,
    // alors il est automatiquement redirigé vers la page d'accueil
    return redirect('/')
  } else if (
    !store.getters.isLoggedIn &&
    route.fullPath != '/signUp' &&
    route.fullPath != '/login'
  ) {
    // Si l'utilisateur n'est pas authentifié et qu'il essaie d'acceder a des pages autre que ceux de connexion,
    // alors l'accès est refusé, et donc il est redirigé automatiquement vers le login
    return redirect('/login')
  }
}
