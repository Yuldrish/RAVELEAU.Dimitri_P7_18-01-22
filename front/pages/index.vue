<template>
  <div class="h-screen">
    <Header />
    <body class="h-3/4">
      <div
        v-if="!loginOk"
        class="h-full w-full flex justify-center items-center"
      >
        <div
          class="
            bg-[url('@/assets/images/paper-grey.webp')] bg-cover
            rounded-2xl
            w-4/6
            h-3/6
            text-white
            flex
            justify-center
            flex-col
            items-center
            text-center
            font-bold
            text-2xl
          "
        >
          <p>
            Authentification requise. Veuillez vous <br />
            connecter pour accéder au forum.
          </p>
          <br />
          <router-link
            to="/login"
            class="
              mt-3
              border-white border-2
              rounded-lg
              py-2
              px-4
              flex
              justify-center
            "
            >Login
          </router-link>
        </div>
      </div>
      <div v-else class="flex flex-row h-full w-full">
        <div class="h-full w-full flex flex-col">
          <router-link to="/newPost" class="bg-gray-500"
            >Nouvelle publication</router-link
          >
          <div class="flex flex-col w-full items-center gap-10">
            <div v-for="post in posts" :key="post.id" class="w-2/3">
              <Post :post="post" />
            </div>
          </div>
        </div>
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

  name: 'IndexPage',
  data() {
    return {
      loginOk: true,
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts
    },
  },
  created() {
    if (this.loginOk && this.$store.state.posts == null) {
      this.$store.dispatch('getPosts')
    }
  },

  methods: {},
}
</script>
