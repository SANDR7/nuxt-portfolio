<template>
  <div>
    <Nav/>
    <pageTransition name="contentAni" mode="out-in">
      <Nuxt />
    </pageTransition>
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
  },
   mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 2500)
    })
  }
}
</script>
<style lang="css">
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css";
</style>
