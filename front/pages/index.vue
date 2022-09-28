<template>
  <div class="h-screen">
    <Header />
    <body class="h-3/4">
      <div class="flex flex-row h-full w-full">
        <div class="h-full w-full flex flex-col">
          <router-link
            to="/newPost"
            class="bg-black bg-opacity-50 text-white text-center h-7 mb-8 text-lg hover:bg-opacity-75 hover:duration-300"
            >Nouvelle publication</router-link
          >
          <div class="flex flex-col w-full items-center gap-10">
            <router-link
              :to="'/' + post.id"
              v-for="post in posts"
              :key="post.id"
              class="w-2/3 hover:scale-105"
            >
              <Post :post="post" />
            </router-link>
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
    return {}
  },
  computed: {
    posts() {
      return this.$store.state.posts
    },
    
  },
  created() {
    if (this.$store.state.posts == null) {
      this.$store.dispatch('getPosts')
    }
  },

  methods: {},
  middleware: 'authenticated',
}
</script>
