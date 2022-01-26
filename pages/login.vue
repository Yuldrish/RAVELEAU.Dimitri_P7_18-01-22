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
    <div class="w-full flex justify-center flex-col">
      <form class="w-3/4 mx-auto mt-5 mb-5 p-10 bg-[url('@/assets/images/paper-grey.webp')] bg-cover rounded-lg">
        <div class="flex p-2 gap-5 flex-col mb-5">
          <label class="text-lg font-medium text-white" for="email"
            >Email<input
              class="border-4 rounded-lg p-2 w-full border-black text-black"
              type="email"
              name="email"
              placeholder="yuldrish@gmail.com"
              v-model="email"
              required
          /></label>
          <label class="text-lg font-medium text-white" for="password"
            >Password<input
              class="border-4 rounded-lg p-2 w-full border-black text-black"
              type="password"
              name="password"
              placeholder="********"
              v-model="password"
              required
          /></label>
        </div>
      </form>
      <div class="flex justify-center">
        <button
          @click="submitForm"
          class="text-lg font-bold text-black rounded-lg w-1/4 border-black border-4 hover:bg-black hover:text-white"
        >
          Login <i class="fas fa-sign-in-alt"></i>
        </button>
      </div>
    </div>
    <footer class="fixed -z-10 bottom-0 w-full">
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
  data() {
    return {
      email: null,
      isOpen: false,
    }
  },
  methods: {
    submitForm: function (event) {
      event.preventDefault()
      console.log(this.email)
    },
  },
  // watch: {
  //   email: function (newEmail, oldEmail) {
  //     alert(`l'ancien email c'est ${oldEmail} et le nouveau c'est ${newEmail}`)
  //   },
  // },
}
</script>
