<template>
  <div class="h-screen">
      <Header/>
    <body class="h-3/4">
      <div class="flex justify-center h-24 m-4 rounded-full overflow-hidden">
        <img
          src="@/assets/images/user.webp"
          alt="image de porfil de l'utilisateur"
        />
      </div>
      <div class="flex justify-center mt-5 mb-5">
        <table class="p-5 w-3/4 flex text-center flex-col bg-[url('@/assets/images/paper-grey.webp')] bg-cover rounded-lg">
          <thead class="text-lg bg-white border-black border-4 rounded-tr-lg rounded-tl-lg w-full flex justify-center">
            <tr>
              <th>Profil utilisateur</th>
            </tr>
          </thead>
          <tbody>
            <tr class="flex">
              <td  class="bg-white border-black border-2 w-1/2">Département</td>
              <td  class="bg-white border-black border-2 w-1/2"></td>
            </tr>
            <tr class="flex">
              <td  class="bg-white border-black border-2 w-1/2">Nom</td>
              <td  class="bg-white border-black border-2 w-1/2"></td>
            </tr>
             <tr class="flex">
              <td  class="bg-white border-black border-2 w-1/2">Prénom</td>
              <td  class="bg-white border-black border-2 w-1/2"></td>
            </tr>
            <tr class="flex">
              <td  class="bg-white border-black border-2 w-1/2">Email</td>
              <td  class="bg-white border-black border-2 w-1/2"></td>
            </tr>
            <tr class="flex">
              <td  class="bg-white border-black border-2 w-1/2">Mot de passe</td>
              <td  class="bg-white border-black border-2 w-1/2"></td>
            </tr>
         </tbody>
        </table>
      </div>
            <div class="flex justify-center">
        <button
          @click="submitForm"
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
    middleware: 'authenticated'
}
</script>
