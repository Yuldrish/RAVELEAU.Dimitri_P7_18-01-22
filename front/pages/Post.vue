<template>
  <div class="h-screen w-full">
    <Header />
    <body class="w-full">
      <div class="flex justify-center p-3">
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
                src="@/assets/images/user.webp"
                alt="image de porfil de l'utilisateur"
                class="object-cover"
              />
            </div>
            <div class="flex-grow">
              <p>test</p>
              <p>test</p>
            </div>
            <div><i class="fas fa-ellipsis-h"></i></div>
          </header>

          <h1 class="text-2xl font-bold">test</h1>
          <div>
            <p>test</p>
            <div class="w-full">
              <img
                src="https://picsum.photos/200"
                class="object-cover w-full h-96"
              />
            </div>
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
}
</script>