<template>
  <div class="Background">
    <h2>Download Resume</h2>
    <button class="download" @click="viewCV()">Download CV</button>
  </div>
</template>

<script>
export default {
  layout: "nofooter",
  methods: {
    viewCV: function () {
      window.location.href = "https://www.sandervanast.com/CV.pdf";
    },
  },
  beforeMount() {
    this.viewCV();
  },
};
</script>

<style lang="scss">
.Background {
  border-radius: $borderRadius8;
  padding: 2.5rem 6rem;
  height: max-content;
  h2,
  h4 {
    @include ColorTransition;
    font-size: $fs-header * 1.3;
    -webkit-text-stroke: transparent;
    -webkit-text-fill-color: var(--TxtColor);
    opacity: $WmarkOpacity * 5.8;
    &::after {
      content: ";";
      -webkit-text-fill-color: $OrangeColor1;
      @include ColorTransition;
    }
  }
  .download {
    @include ButtonStyle;
  }
}
</style>