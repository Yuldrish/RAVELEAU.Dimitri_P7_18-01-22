<template>
  <div class="h-screen">
    <Header />
    <body class="h-3/4">
      <div class="flex justify-center h-24 m-4">
        <img
          :src="user.photo"
          alt="image de porfil de l'utilisateur"
          class="object-cover w-24 rounded-full overflow-hidden"
        />
        <i class="fas fa-plus-circle -ml-3"></i>
      </div>
      <div class="flex justify-center mt-5 mb-5">
        <table
          class="p-5 w-3/4 flex text-center flex-col bg-[url('@/assets/images/paper-grey.webp')] bg-cover rounded-lg"
        >
          <thead
            class="text-lg bg-white border-black border-4 rounded-tr-lg rounded-tl-lg w-full flex justify-center"
          >
            <tr>
              <th>Profil utilisateur</th>
            </tr>
          </thead>
          <tbody>
            <tr class="flex">
              <td class="bg-white border-black border-2 w-1/2 overflow-hidden">
                Département
              </td>
              <td class="bg-white border-black border-2 w-1/2 overflow-hidden">
                {{ user.department }}
              </td>
            </tr>
            <tr class="flex">
              <td class="bg-white border-black border-2 w-1/2 overflow-hidden">
                Nom
              </td>
              <td class="bg-white border-black border-2 w-1/2 overflow-hidden">
                {{ user.name }}
              </td>
            </tr>
            <tr class="flex">
              <td class="bg-white border-black border-2 w-1/2 overflow-hidden">
                Prénom
              </td>
              <td class="bg-white border-black border-2 w-1/2 overflow-hidden">
                {{ user.firstname }}
              </td>
            </tr>
            <tr class="flex">
              <td class="bg-white border-black border-2 w-1/2 overflow-hidden">
                Email
              </td>
              <td class="bg-white border-black border-2 w-1/2 overflow-hidden">
                {{ user.email }}
              </td>
            </tr>
            <tr class="flex">
              <td class="bg-white border-black border-2 w-1/2 overflow-hidden">
                Mot de passe
              </td>
              <td class="bg-white border-black border-2 w-1/2 overflow-hidden">
                *********
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-center">
        <button
          @click="accountDelete"
          class="text-lg font-bold rounded-lg w-1/2 border-black border-4 hover:bg-black hover:text-white sm:w-1/4"
        >
          Supprimer le compte <i class="fas fa-user-times"></i>
        </button>
      </div>
    </body>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import Header from '../components/layouts/header.vue'
import Footer from '../components/layouts/footer.vue'

export default {
  components: {
    Header,
    Footer,
  },

  methods: {
    accountDelete: function () {},
  },

  data() {
    return {}
  },

  middleware: 'authenticated',

  computed: {
    user() {
      return this.$store.state.user ?? {}
    },
  },

  created() {
    if (this.$store.state.user == null) {
      this.$store.dispatch('getOneUser')
    }
  },
}
</script>
