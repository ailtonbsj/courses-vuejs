<template>
  <v-app>
    <Menu />
    <Header />
    <v-main>
      <Carousel />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Menu from './components/Menu.vue'
import Header from './components/Header.vue'
import Carousel from './components/Carousel.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Menu, Header, Carousel, Footer
  }
}
</script>
