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
        <a :href="`https://${A.shareUrl}`" target="blank" class="link">
          <picture>
            <img :src="A.artworkUrl" alt="" />
          </picture>
          <i :class="'hoverIcon fab ' + A.shareIcon"></i>
        </a>
        <div class="info">
          <span>{{ A.Date }}</span>
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
      Artworks,
    };
  },
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
      display: inline-block;
      margin: 0.7rem 1.5rem;
      flex-direction: column;
      border-radius: $borderRadius12;
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
          font-size: 7em;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -170%);
          opacity: 0;
          @include ColorTransition;
        }
      }
      &:hover a img {
        filter: brightness(25%);
        border: solid 3px rgb(194, 194, 194);
      }
      &:hover a .hoverIcon {
        opacity: 1;
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