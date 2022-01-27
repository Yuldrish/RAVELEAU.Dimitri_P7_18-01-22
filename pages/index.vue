<template>
  <div>
    <Header/>
    <body>

    </body>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/layouts/header.vue'
import Footer from '../components/layouts/footer.vue'

export default {
      components : {
    Header,
    Footer
    },

  name: 'IndexPage',
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
