<template>
  <!-- 
  photoshop etc.
  <i class="far fa-magic"></i>
  -------------------------------
  illustrator etc.
  <i class="far fa-bezier-curve"></i>
  -------------------------------
  layout from dribbble etc.
  <i class="far fa-object-group"></i>
 -->
  <div class="artGallery">
    <div class="Scroll">
      <div class="Artwork" v-for="(A, index) in Artworks" :key="index">
          <div class="Name">{{A.altDesc}}</div>
        <a :href="`${A.shareUrl}`" target="blank" class="link">
          <picture>
            <img :src="A.artworkUrl" :alt="A.altDesc" />
          </picture>
          <i :class="'hoverIcon fab fa-' + A.shareIcon"></i>
        </a>
        <div class="info">
          <span> {{ A.Date }}</span>
          <span class="kind?" v-html="A.iconKind"> </span>
        </div>
        <!-- <div class="artworkName">nice</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Artworks from "~~/artworks.js";
export default {
  data() {
    return {
      Artworks
    };
  }
};
</script>

<style lang="scss">
.artGallery {
  @include CardBackground;
  ::-webkit-scrollbar {
    height: 8px;
  }
  .Scroll {
    display: flex;
    overflow-x: auto;
    scrollbar-width: thin; /* Firefox */
    .Artwork {
      @include subCardBackground;
      // margin: 0.7rem 1.5rem;
      flex-direction: column;
      border-radius: $borderRadius12;
      box-shadow: $innerShadow;
      border: solid 3px transparent;
      padding: 1em 1.5em;
      @include ColorTransition;
      .Name {
        font-size: $fs-header / 2.2;
        margin: .5em 0;
        text-transform: capitalize;
      }
      .link {
        @include HoverFx(0, 0, 0);
        position: relative;
        img {
          @include ColorTransition;
          border-radius: $borderRadius12;
          filter: brightness(var(--ImageFilter));
          height: 280px;
          width: auto;
        }
        .hoverIcon {
          position: absolute;
          color: white !important;
          font-size: 9em;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -70%);
          opacity: 0;
          @include ColorTransition;
        }
      }
      &:hover {
        border: solid 3px #c2c2c2;
      }
      &:hover a img {
        filter: brightness(25%);
      }
      &:hover a .hoverIcon {
        opacity: 1;
        font-size: 7em;
        transform: translate(-50%, -50%);
        @include ColorTransition;
      }
      .info {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 0;
      }
      .artworkName {
        text-align: center;
        text-transform: uppercase;
        margin: 0.7rem 0;
      }
    }
  }
}
</style>
