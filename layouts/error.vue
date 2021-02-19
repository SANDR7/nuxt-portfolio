<template>
  <div class="Sections Errors">
    <div class="Section Error">
      <h5>{{ error.statusCode }} Error</h5>
      <div class="Background">
        <div>{{ error.message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "nofooter",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss">
.Sections {
  .Error {
    height: 80vh;
    &::after {
      height: 84vh;
      background-repeat: repeat-y;
    }
    h5 {
      @include ColorTransition;
      font-size: $fs-header * 1.3;
      letter-spacing: 2px;
      // text-align: center;
      text-transform: uppercase;
      font-weight: 700;
      margin: 0 4rem;
      transform: translateY(34%);
      padding: 1rem 0;
      -webkit-text-stroke: transparent;
      -webkit-text-fill-color: var(--TxtColor);
      opacity: $WmarkOpacity * 5.8;
      &::after {
        content: ";";
        -webkit-text-fill-color: $OrangeColor1;
      }
    }
  }
}
</style>