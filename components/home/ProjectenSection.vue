<template>
  <div class="Projecten">
    &#46;Recent Projects &#123;
    <div class="comment">Click this link ↓ to know more about the project</div>
    <div style="margin-left: 1rem" @click="ScrolltoTop">
      &#64;include
      <nuxt-link
        to="/Projects"
        title="All Projects"
        @click="ScrolltoTop"
        style="padding-bottom: 0.2em"
        >all&#95;Projects</nuxt-link
      >&#59;
    </div>
    <div class="Cards">
      <div
        class="Card"
        v-for="(project, id) in projects
          .slice(Math.max(projects.length - 3))
          .reverse()"
        :key="id"
      >
        <a :href="project.Url_src" target="blank">
          <picture>
            <source
              :srcset="project.Img_src_WEBP"
              :alt="project.id + '-Thumbnail'"
              height="500"
              width="628"
            />
            <img
              :src="project.Img_src_PNG"
              :alt="project.id + '-Thumbnail'"
              height="500"
              width="628"
            />
          </picture>
        </a>
        <div class="Beschrijving">
          <div class="subTitle">Quick Description</div>
          <p>{{ project.QuickDesc }}</p>
        </div>
        <header>{{ project.Projectnaam }}</header>
      </div>
    </div>
    &#125;
  </div>
</template>

<script>
import projects from "~~/projects";
export default {
  data() {
    return {
      projects,
    };
  },
  methods: {
    ScrolltoTop() {
      scrollTo({ scrollTop: 1200 }, "0");
    },
  },
};
</script>

<style lang="scss">
/* Variables */
.Projecten {
  font-size: $fs-paragraph-2;
  .comment {
    margin-left: 1rem;
    font-style: italic;
    &::before {
      content: "/* ";
    }
    &::after {
      content: " */";
    }
  }
  // deze div is een wrapper van de cards
  .Cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    grid-gap: 3rem;
    width: 100%;
    justify-content: center;
    margin: 1rem 0;
    font-size: $fs-paragraph-1;
    @media screen and (min-width: $TabletSize1) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0rem 1rem;
      .Card {
        padding: 2rem 1rem;
        header {
          font-size: $fs-paragraph-2 * 0.9;
        }
        .Beschrijving {
          min-height: 6rem;
        }
      }
    }
    .Card {
      @include CardBackground;
      box-shadow: $innerShadow;
      height: max-content;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      header {
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.7px;
        font-weight: 700;
        @media screen and (min-width: $Laptop1) {
          font-size: $fs-header * 0.4;
        }
        @media only screen and (min-width: $TabletSize1) {
          font-size: $fs-header * 0.7;
        }
        @media only screen and (min-width: $MobileSize1) {
          font-size: $fs-header * 0.4;
        }
      }
      a {
        @include HoverFx(0, transparent, 0);
        img {
          display: inline-block;
          width: 100%;
          margin: 0 auto;
          height: 300px;
          border-radius: $borderRadius8;
          object-fit: cover;
          background-color: transparent;
          position: relative;
          filter: brightness(var(--ImageFilter));
        }
        &:hover {
          filter: opacity(0.6);
        }
      }

      .Beschrijving {
        margin: 1rem 0 2rem;
        text-align: left;
        @media screen and (min-width: $Laptop1) {
          min-height: 5rem;
        }
        .subTitle {
          font-weight: 700;
          &::after {
            content: ":";
            color: $OrangeColor1;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 970px) {
  .Projecten {
    font-size: $fs-paragraph-2;
    // deze div is een wrapper van de cards
    .Cards {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 3rem 1rem;
    }
  }
}

@media only screen and (min-width: $LargeScreen1) {
  .Projecten {
    font-size: $fs-paragraph-2;
    // deze div is een wrapper van de cards
    .Cards {
      grid-gap: 3rem;
      .Card {
        padding: 2rem 2.5rem;
      }
    }
  }
}
</style>