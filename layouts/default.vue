<template>
  <div>
    <Nav/>
    <transition name="contentAni">
      <Nuxt />
    </transition>
    <Footer/>
  </div>
</template>
<script>
import Nav from './partials/nav';
import Footer from './partials/footer';
export default {
  components: {
    Nav,
    Footer
  }
}
</script>
<style lang="css">
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css";
</style>
