<template>
  <div>
    <header>
      <div
        class="w-full h-48 flex justify-center relative bg-[url('@/assets/images/paper-grey.webp')] bg-cover"
      >
        <div>
          <img
            src="@/assets/images/groupomania.webp"
            alt="logo de couleur rouge de l'entreprise groupomania"
            class="h-full"
          />
        </div>
        <nav class="absolute right-5 top-6">
          <button
            @click="isOpen = !isOpen"
            class="relative z-20 border-white border-4 rounded-lg w-40 focus:bg-black"
          >
            <i class="fas fa-bars font-bold text-white text-lg"> Menu</i>
          </button>
          <button
            v-if="isOpen"
            @click="isOpen = false"
            tabindex="-1"
            class="fixed inset-0 h-full w-full bg-black opacity-50"
          ></button>
          <div
            v-if="isOpen"
            class="absolute text-base w-40 text-white border-2 border-white rounded-lg text-center overflow-hidden shadow-xl"
          >
            <a
              class="block bg-black hover:bg-opacity-0 hover:font-bold"
              href="/"
              >Accueil</a
            >
            <a
              class="block bg-black hover:bg-opacity-0 hover:font-bold"
              href="/profil"
              >Profil</a
            >
            <a
              class="block bg-black hover:bg-opacity-0 hover:font-bold"
              href="login"
              >Connexion</a
            >
            <a
              class="block bg-black hover:bg-opacity-0 hover:font-bold"
              href="/"
              >Déconnexion</a
            >
          </div>
        </nav>
      </div>
      <div class="border-2 w-full h-1 border-white"></div>
    </header>
    <footer>
      <div class="border-2 w-full h-1 border-white"></div>
      <div
        class="w-full h-24 flex justify-center bg-[url('@/assets/images/paper-grey.webp')] bg-cover"
      >
        <ul class="flex flex-row gap-8 text-white text-lg">
          <li class="flex flex-col justify-center">
            <i class="fab fa-twitter-square text-5xl ml-1"></i>
            <a href="#">twitter</a>
          </li>
          <li class="flex flex-col justify-center">
            <i class="fab fa-facebook-square text-5xl ml-4"></i>
            <a href="#">facebook</a>
          </li>
          <li class="flex flex-col justify-center">
            <i class="fab fa-instagram-square text-5xl ml-4"></i>
            <a href="#">instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
