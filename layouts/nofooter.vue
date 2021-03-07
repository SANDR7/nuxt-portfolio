<template>
  <div>
    <Nav/>
    <pageTransition name="contentAni">
      <Nuxt />
    </pageTransition>
  </div>
</template>
<script>
import Nav from './partials/nav';
export default {
  components: {
    Nav
  }
}
</script>
<style lang="css">
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css";
</style>
