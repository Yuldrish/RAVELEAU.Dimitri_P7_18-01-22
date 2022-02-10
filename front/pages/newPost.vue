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
          <label class="text-lg font-medium text-center text-white" for="title"
            >Titre<input
              class="
                border-4
                rounded-lg
                p-2
                w-full
                border-black
                text-black
                focus:outline-none
                text-center
              "
              type="text"
              name="title"
              placeholder="Titre de la publication"
              required
          /></label>
          <label class="text-lg font-medium text-white" for="message"
            >Message
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              class="
                border-4
                rounded-lg
                p-2
                w-full
                border-black
                text-black
                focus:outline-none
              "
              placeholder="Message de la publication"
            ></textarea>
          </label>
          <button
            type="submit"
            class="
              text-white text-base
              font-semibold
              flex flex-col
              items-center
              rounded-lg
              w-1/6
              pb-1
              border-white border-2
              hover:bg-white
              hover:text-black
              hover:border-black
              hover:duration-500
            "
          >
            Ajouter
            <span class="text-xs -mt-2"> Img, Video </span>
          </button>
        </div>
      </form>
      <div class="flex flex-col gap-3 items-center">
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
            hover:bg-black hover:text-white
          "
          to="/"
          >Publier
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
}
</script>