<template>
  <div class="h-screen">
    <Header />
    <div class="w-full justify-center flex-col bg-white mb-10 h-3/4">
      <form
        class="w-4/5 mx-auto p-10 bg-[url('@/assets/images/paper-grey.webp')] bg-cover rounded-lg flex flex-col md:flex-row m-5"
      >
        <div class="flex w-full p-2 gap-5 flex-col md:w-1/2">
          <label
            class="text-lg text-center font-medium text-white"
            for="department"
            >Département<input
              class="border-4 rounded-lg p-2 w-full border-black text-black focus:outline-none"
              type="text"
              name="department"
              placeholder="comptabiliter"
              v-model="department"
              pattern="[a-zA-Z .,'-]+"
              required
          /></label>
          <label class="text-lg text-center font-medium text-white" for="name"
            >Nom<input
              class="border-4 rounded-lg p-2 w-full border-black text-black focus:outline-none"
              type="text"
              name="name"
              placeholder="DOE"
              v-model="name"
              pattern="[a-zA-Z .,'-]+"
              required
          /></label>
          <label
            class="text-lg text-center font-medium text-white"
            for="firstname"
            >Prénom<input
              class="border-4 rounded-lg p-2 w-full border-black text-black focus:outline-none"
              type="text"
              name="firstname"
              placeholder="John"
              v-model="firstname"
              pattern="[a-zA-Z .,'-]+"
              required
          /></label>
        </div>
        <div class="flex w-full p-2 gap-5 flex-col md:w-1/2">
          <label class="text-lg text-center font-medium text-white" for="email"
            >Email<input
              class="border-4 rounded-lg p-2 w-full border-black text-black focus:outline-none"
              type="email"
              name="email"
              placeholder="yuldrish@gmail.com"
              v-model="email"
              pattern="[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9._-]+[.]{1}[a-z]{2,10}"
              required
          /></label>
          <label
            class="text-lg text-center font-medium text-white"
            for="password"
            >Password<input
              class="border-4 rounded-lg p-2 w-full border-black text-black focus:outline-none"
              type="password"
              name="password"
              placeholder="********"
              v-model="password"
              pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
              required
          /></label>
          <label
            class="text-lg text-center font-medium text-white"
            for="password"
            >Password confirmation<input
              class="border-4 rounded-lg p-2 w-full border-black text-black focus:outline-none"
              type="password"
              name="password"
              placeholder="********"
              v-model="ctrlpassword"
              pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
              required
          /></label>
        </div>
      </form>
      <div class="flex justify-center">
        <button
          @click="submitForm"
          class="text-lg font-bold rounded-lg w-1/2 border-black border-4 hover:bg-black hover:text-white sm:w-1/4"
        >
          Valider <i class="fas fa-user-plus"></i>
        </button>
      </div>
    </div>
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
      ctrlpassword: '',
      name: '',
      firstname: '',
      department: '',
    }
  },

  methods: {
    submitForm: function () {
      let data = {
        email: this.email,
        password: this.password,
        ctrlpassword: this.ctrlpassword,
        name: this.name,
        firstname: this.firstname,
        department: this.department,
      }
      this.$store
        .dispatch('register', data)
        .then(() => this.$router.push('/'))
        .catch((err) => console.log(err))
    },
  },
  middleware: 'authenticated',
}
</script>
