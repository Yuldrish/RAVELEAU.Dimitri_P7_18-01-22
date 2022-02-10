<template>
  <div class="h-screen">
    <Header />
    <body class="h-3/4">
      <form
        class="
          w-3/4
          mx-auto
          mt-5
          mb-5
          p-10
          bg-[url('@/assets/images/paper-grey.webp')] bg-cover
          rounded-lg
        "
      >
        <div class="flex p-2 gap-5 flex-col mb-5">
          <label class="text-lg font-medium text-white" for="email"
            >Email<input
              class="
                border-4
                rounded-lg
                p-2
                w-full
                border-black
                text-black
                focus:outline-none
              "
              type="email"
              name="email"
              placeholder="yuldrish@gmail.com"
              v-model="email"
              required
          /></label>
          <label class="text-lg font-medium text-white" for="password"
            >Password<input
              class="
                border-4
                rounded-lg
                p-2
                w-full
                border-black
                text-black
                focus:outline-none
              "
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
          class="
            text-lg
            font-bold
            text-black
            rounded-lg
            w-1/4
            border-black border-4
            hover:bg-black hover:text-white
          "
        >
          Login <i class="fas fa-sign-in-alt"></i>
        </button>
      </div>
    </body>
    <!--<Footer/>-->
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

  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    submitForm: function () {
      let data = { email: this.email, password: this.password }

      this.$store
        .dispatch('login', data)
        .then(() => this.$router.push('/'))
        .catch((err) => console.log(err))
    },
  },
}
</script>
