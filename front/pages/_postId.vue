<template>
  <div class="h-screen w-full">
    <Header />
    <body class="w-full">
      <div class="flex items-center p-3 flex-col">
        <div
          class="
            w-3/4
            flex flex-col
            gap-y-2
            text-white
            p-3
            bg-[url('@/assets/images/paper-grey.webp')] bg-cover
            rounded-xl
          "
        >
          <header class="w-full flex h-10 justify-around items-center gap-x-3">
            <div class="h-full rounded-full w-10 overflow-hidden">
              <img
                :src="user.photo"
                alt="image de porfil de l'utilisateur"
                class="object-cover"
              />
            </div>
            <div class="flex-grow">
              <p>{{ user.name }}</p>
              <p>{{ post.dateTime }}</p>
            </div>
            <div><i class="fas fa-ellipsis-h"></i></div>
          </header>
          <div class="flex justify-between">
            <h1 class="text-2xl font-bold">{{ post.title }}</h1>
            <div class="flex gap-x-2 items-end text-2xl">
              <i class="far fa-thumbs-up"></i>
              <i class="far fa-thumbs-down -mb-1.5"></i>
            </div>
          </div>
          <div>
            <p>{{ post.content }}</p>
            <div class="w-full">
              <img :src="post.multimedia" class="object-cover w-full h-96" />
            </div>
          </div>
        </div>
        <div class="w-3/4 mt-3">
          <label for="comment">
            <input
              type="text"
              name="comment"
              id="comment"
              class="border-4 rounded-lg border-gray-600 w-full pl-2 pr-2"
            />
          </label>
          <div class="mt-3">
            <Comment :comment="comment" />
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-3 items-center p-3">
        <router-link
          class="
            text-lg
            font-bold
            text-black
            rounded-lg
            w-1/4
            flex
            justify-center
            border-black border-4
            hover:bg-black hover:text-white hover:duration-300
          "
          to="/"
          >Retour
        </router-link>
        <router-link
          class="
            text-lg
            font-bold
            text-black
            rounded-lg
            w-1/4
            flex
            justify-center
            border-black border-4
            hover:bg-[url('@/assets/images/paper-grey.webp')]
            hover:text-white
            hover:duration-300
          "
          to="/"
          >Modifier
        </router-link>
        <router-link
          class="
            text-lg
            font-bold
            text-black
            rounded-lg
            w-1/4
            flex
            justify-center
            border-black border-4
            hover:bg-red-700 hover:bg-cover hover:text-white hover:duration-300
          "
          to="/"
          >Supprimer
        </router-link>
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

  props: {},

  data() {
    return {}
  },

  methods: {},
  computed: {
    post() {
      return (
        (this.$store.state.posts || []).find(
          (post) => post.id.toString() === this.$route.params.postId.toString()
        ) ?? {}
      )
    },
    user() {
      return (
        (this.$store.state.users || []).find(
          (user) => user.id.toString() === this.post.userId.toString()
        ) ?? {}
      )
    },
  },

  created() {
    if (this.$store.state.posts == null) {
      this.$store.dispatch('getPosts')
    }
    if (this.$store.state.users == null) {
      this.$store.dispatch('getUsers')
    }
  },
}
</script>
