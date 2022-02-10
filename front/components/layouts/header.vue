<template>
  <header class="sticky top-0">
    <div
      class="
        w-full
        h-48
        flex
        justify-center
        relative
        bg-[url('@/assets/images/paper-grey.webp')] bg-cover
      "
    >
      <div>
        <img
          src="@/assets/images/groupomania.webp"
          alt="logo de couleur blanche de l'entreprise groupomania"
          class="h-full"
        />
      </div>
      <nav
        class="
          absolute
          right-3
          bottom-3
          sm:right-5 sm:bottom-5
          flex flex-col
          items-end
        "
      >
        <button
          @click="isOpen = !isOpen"
          tabindex="-1"
          class="
            relative
            z-20
            border-white border-4
            rounded-lg
            focus:rounded-br-none focus:rounded-bl-none
            w-20
            sm:w-40
            focus:bg-black
          "
        >
          <i class="fas fa-bars font-bold text-white text-lg"
            ><span class="hidden sm:contents"> Menu</span></i
          >
        </button>
        <div
          v-if="isOpen"
          @click="isOpen = false"
          class="fixed inset-0 h-full w-full bg-black opacity-50"
        ></div>
        <div
          v-if="isOpen"
          class="
            absolute
            top-9
            text-base
            w-40
            sm:w-full
            text-white
            border-2 border-white
            rounded-tl-lg rounded-bl-lg rounded-br-lg
            sm:rounded-tl-none
            text-center
            overflow-hidden
            shadow-xl
          "
        >
          <router-link
            class="
              block
              bg-black
              hover:bg-opacity-25 hover:font-bold hover:duration-300
            "
            to="/"
            >Accueil
          </router-link>
          <router-link
            class="
              block
              bg-black
              hover:bg-opacity-25 hover:font-bold hover:duration-300
            "
            to="/profil"
            >Profil
          </router-link>
          <router-link
            v-if="!isLoggedIn"
            class="
              block
              bg-black
              hover:bg-opacity-25 hover:font-bold hover:duration-300
            "
            to="/login"
            >Connexion
          </router-link>
          <button
            v-if="isLoggedIn"
            @click="logout"
            class="
              block
              w-full
              bg-black
              hover:bg-opacity-25 hover:font-bold hover:duration-300
            "
          >
            Déconnexion
          </button>
          <router-link
            v-if="!isLoggedIn"
            class="
              block
              bg-black
              hover:bg-opacity-25 hover:font-bold hover:duration-300
            "
            to="/signUp"
            >S'inscrire
          </router-link>
        </div>
      </nav>
    </div>
    <div class="border-2 w-full h-1 border-white"></div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },

  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn
    },
  },

  methods: {
    logout: function () {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/')
      })
    },
  },
}
</script>
