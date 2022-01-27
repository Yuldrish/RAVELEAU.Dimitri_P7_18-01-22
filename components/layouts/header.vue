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
            class="relative z-20 border-white border-4 rounded-lg focus:rounded-br-none focus:rounded-bl-none w-20 sm:w-40 focus:bg-black"
          >
            <i class="fas fa-bars font-bold text-white text-lg"
              ><span class="hidden sm:contents"> Menu</span></i
            >
          </button>
          <button
            v-if="isOpen"
            @click="isOpen = false"
            tabindex="-1"
            class="fixed inset-0 h-full w-full bg-black opacity-50"
          ></button>
          <div
            v-if="isOpen"
            class="absolute text-base w-40 text-white border-2 border-white rounded-bl-lg rounded-br-lg text-center overflow-hidden shadow-xl"
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
              href="/login"
              >Connexion</a
            >
            <a
              class="block bg-black hover:bg-opacity-0 hover:font-bold"
              href="/"
              >Déconnexion</a
            >
            <a
              class="block bg-black hover:bg-opacity-0 hover:font-bold"
              href="/signUp"
              >S'inscrire</a
            >
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
