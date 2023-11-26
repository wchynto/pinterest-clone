<template>
  <Navbar></Navbar>
  <Jumbotron></Jumbotron>
  <Gallery></Gallery>
  <Footer></Footer>
</template>

<script>
import Navbar from './components/partials/Navbar.vue'
import Jumbotron from './components/Jumbotron.vue'
import Gallery from './components/Gallery.vue'
import Footer from './components/partials/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Jumbotron,
    Gallery,
    Footer
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
