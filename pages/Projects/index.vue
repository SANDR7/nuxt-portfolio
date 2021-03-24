<template>
  <div class="Sections" style="margin-top: 0">
    <div class="Section AllProjects" ref="projHeader">
      <h4>Highlighted Projects</h4>
      <div class="Background ProjectenGrid">
        <div
          class="Card"
          v-for="(project, index) in projects.slice(isVisible_Proj).reverse()"
          :key="index.id"
        >
          <div class="CardHeader">
            <div class="sort">{{ project.soort }} / {{ project.Datum }}</div>
            <div class="ProjectNaam">{{ project.Projectnaam }}</div>
          </div>
          <picture>
            <img
              :src="project.Img_src_PNG"
              :alt="project.id + '-Thumbnail'"
              height="500"
              width="628"
            />
            <source
              :srcset="project.Img_src_WEBP"
              :alt="project.id + '-Thumbnail'"
              height="500"
              width="628"
            />
          </picture>
          <div class="Description">
            <p title="Description">{{ project.FullDesc }}</p>
          </div>
          <div class="UsedLang">
            <div class="title">Used Techniques</div>
            <div class="ProgrammeerTalen" v-html="project.UsedTech.Langs"></div>
            <div
              class="ProgrammeerTalen"
              v-html="project.UsedTech.Programs"
            ></div>
          </div>

          <div class="links" @click="ScrolltoTop">
            <nuxt-link title="Open Case Study" :to="`/Projects/${project.id}`">
              <i class="far fa-file-search"></i><span>Case Study</span>
            </nuxt-link>
            <a :href="project.Url_src" target="blank" title="View Website">
              <i class="far fa-link"></i><span>Visit Site</span>
            </a>
          </div>
        </div>
        <br />
      </div>
      <div class="padding">
        <button class="showMore" @click="showProjects">
          {{ showMoreTxtProj }}
        </button>
      </div>
    </div>

    <div class="Section AllExercises" ref="exerHeader">
      <h4>Fun Exercises</h4>
      <div class="Background ProjectenGrid">
        <div
          class="Card"
          v-for="(SomeExercise, index) in SomeExercises.slice(
            isVisible_Excer
          ).reverse()"
          :key="index.id"
        >
          <div class="CardHeader">
            <div class="sort">
              {{ SomeExercise.soort }} / {{ SomeExercise.Datum }}
            </div>
            <div class="ProjectNaam">{{ SomeExercise.Projectnaam }}</div>
          </div>
          <picture>
            <source
              :srcset="SomeExercise.Img_src_WEBP"
              :alt="SomeExercise.id + '-Thumbnail'"
              height="500"
              width="628"
            />
            <img
              :src="SomeExercise.Img_src_PNG"
              :alt="SomeExercise.id + '-Thumbnail'"
              height="500"
              width="628"
            />
          </picture>
          <div class="Description">
            <p title="Description">{{ SomeExercise.FullDesc }}</p>
          </div>

          <div v-html="SomeExercise.UsedTech.tags" class="tags"></div>
          <div class="UsedLang">
            <div class="title">Used Techniques</div>
            <div
              class="ProgrammeerTalen"
              v-html="SomeExercise.UsedTech.Langs"
            ></div>
            <div
              class="ProgrammeerTalen"
              v-html="SomeExercise.UsedTech.Programs"
            ></div>
          </div>

          <div class="links">
            <a
              :class="hasRepo"
              v-if="
                SomeExercise.gitRepo === true
                  ? (hasRepo = 'showRepo')
                  : (hasRepo = 'noRepo')
              "
              :href="`${SomeExercise.Git_url}`"
              target="blank"
            >
              <i class="far fa-code-branch"></i><span>Source Code</span>
            </a>
            <a :href="SomeExercise.Url_src" target="blank" title="View Website">
              <i class="far fa-link"></i><span>Visit Site</span>
            </a>
          </div>
        </div>
        <br />
      </div>
      <div class="padding">
        <button class="showMore" @click="showExcercies">
          {{ showMoreTxt }}
        </button>
      </div>
    </div>

    <div class="Section">
      <h4>Other Projects</h4>
      <div class="Background">
        <DesignSection />
      </div>
    </div>
    <div class="Section">
      <h4>we can work together</h4>
      <div class="Background">
        <ContactSection />
      </div>
    </div>
  </div>
</template>

<script>
import projects from "~~/projects";
import DesignSection from "~/components/about/DesignSection";
import SomeExercises from "~~/SomeExercises";
import ContactSection from "~/components/home/ContactSection";
export default {
  head() {
    return {
      titleTemplate: "Projects - %s",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Here you can view my projects that I have collected to show you what I'm capable of.",
        },
      ],
    };
  },
  data() {
    return {
      DesignSection,
      projects,
      SomeExercises,
      showMoreTxtProj: "Show More",
      showMoreTxt: "Show All",
      isVisible_Proj: projects.length - 3, // number of cards that are shown
      isVisible_Excer: SomeExercises.length - 3, // number of cards that are shown
    };
  },
  methods: {
    ScrolltoTop() {
      scrollTo({ scrollTop: 1200 }, "0");
    },
    showProjects() {
      if (this.isVisible_Proj > 2) {
        // shows all projects
        this.isVisible_Proj = this.projects.length - 6;
        this.showMoreTxtProj = "show less";
        // scroll to the beginning
        this.$refs["projHeader"].scrollIntoView({
          behavior: "smooth",
        });
      } else {
        // shows only 3 projects
        this.isVisible_Proj = this.projects.length - 3;
        this.showMoreTxtProj = "show more";
        // scroll to the beginning
        this.$refs["projHeader"].scrollIntoView({
          behavior: "smooth",
        });
      }
    },
    showExcercies() {
      if (this.isVisible_Excer > 2) {
        // shows all projects
        this.isVisible_Excer =
          this.SomeExercises.length - this.SomeExercises.length;
        this.showMoreTxt = "show less";
        // scroll to the beginning
        this.$refs["exerHeader"].scrollIntoView({
          behavior: "smooth",
        });
      } else {
        // shows only 2 projects
        this.isVisible_Excer = this.SomeExercises.length - 3;
        this.showMoreTxt = "show all";
        // scroll to the beginning
        this.$refs["exerHeader"].scrollIntoView({
          behavior: "smooth",
        });
      }
    },
  },
  components: {
    ContactSection,
  },
};
</script>

<style lang="scss">
.Sections {
  .AllProjects {
    @include BackgroundImage(
      "https://src.sandervanast.com/images/PNG/BackgroundImage4.png"
    );
  }
  .AllExercises {
    @include BackgroundImage(
      "https://src.sandervanast.com/images/PNG/BackgroundImage45.png"
    );
  }
  .AllExercises,
  .AllProjects {
    &::after {
      background-repeat: repeat-y;
      // background-position: 80%;
      opacity: 0.1 !important;
    }
  }
  .Section {
    .padding {
      padding: 0rem 2rem;
      // @include ButtonStyle();
      .showMore {
        @include ButtonStyle();
        margin: 0 auto;
      }
    }

    @media only screen and (min-width: $MobileSize1) {
      .padding {
        padding: 0rem 2rem;
        // @include ButtonStyle();
        .showMore {
          @include ButtonStyle();
          width: 100%;
          margin: 0 auto;
        }
      }
    }
    @media only screen and (min-width: $TabletSize1) {
      .padding {
        padding: 0rem 14rem;
        // @include ButtonStyle();
        .showMore {
          @include ButtonStyle();
          margin: 0 auto;
        }
      }
    }

    @media only screen and (min-width: $Laptop1) {
      .padding {
        padding: 0rem 7rem;
        // @include ButtonStyle();
        .showMore {
          @include ButtonStyle();
          width: 20%;
          margin: 0 auto;
        }
      }
    }
    .ProjectenGrid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      .Card {
        // text-align: center;
        @include CardBackground;
        box-shadow: inset -5px -5px 5px 0 rgba(68, 68, 68, 0.08),
          inset 5px 5px 5px 0 rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        margin: 0.5rem;
        position: relative;
        @supports (backdrop-filter: blur()) {
          backdrop-filter: blur(4px);
        }
        @supports not (backdrop-filter: blur()) {
          backdrop-filter: none;
        }
        .CardHeader {
          .sort {
            opacity: $WmarkOpacity * 3;
            text-transform: uppercase;
            font-size: $fs-paragraph-1 * 0.8;
            font-family: "Share Tech Mono", monospace;
          }
          .ProjectNaam {
            font-weight: 700;
            text-transform: uppercase;
            font-size: $fs-paragraph-1;
            // letter-spacing: 0.7px;
            &::after {
              @include ColorTransition;
              content: ".";
            }
          }
        }

        img {
          display: inline-block;
          width: 100%;
          margin: 1rem auto;
          height: 286px !important;
          border-radius: $borderRadius8;
          object-fit: cover;
          object-position: 50% 50%;
          background-color: transparent;
          position: relative;
          filter: brightness(var(--ImageFilter));
        }
        .tags {
          display: inline;
          margin: 0.4rem 0;
          .TAG {
            display: inline;
            margin-right: 0.5rem;
            text-transform: capitalize;
            opacity: $WmarkOpacity;
            &::before {
              content: "#";
            }
          }
        }
        .UsedLang {
          margin: 1em 0;
          .ProgrammeerTalen {
            display: block;
            margin: 0.5rem 0;
            // width: 100%;

            .ProgrammeerTaal {
              display: inline-block;
              text-transform: uppercase;
              font-weight: bolder;
              font-size: 14px;
              letter-spacing: 0.7px;
              margin: 0.3rem 0.5rem;
              margin-left: 0;
              @include CardBackground;
              background-color: var(--BackGroundCardLevel2) !important;
              height: max-content;
              width: max-content;
              padding: 1rem 1.5rem;
            }
          }
        }
        .Description,
        .UsedLang {
          margin: 1em 0;
          margin-bottom: 3em;
          .title {
            font-weight: 500;
            &::after {
              content: ":";
              color: $OrangeColor1;
            }
          }
        }
        .links {
          position: absolute;
          bottom: 3%;
          left: 0;
          display: flex;
          width: 100%;
          padding: 0 2rem;
          justify-content: space-between;
          a {
            font-size: $fs-paragraph-1 * 1.3;
            padding: 0.5rem;
            span {
              margin: 0 0.5rem;
              font-size: $fs-paragraph-1 * 0.8;
            }
          }
          .noRepo {
            pointer-events: none;
            // cursor: default;
            cursor: not-allowed;
            opacity: $WmarkOpacity * 2;
          }
        }
      }
      .Card:hover > .CardHeader .ProjectNaam {
        @include ColorTransition;
        -webkit-text-stroke: transparent;
        -webkit-text-fill-color: var(--TxtColor);
        opacity: $WmarkOpacity * 5.8;
        &::after {
          @include ColorTransition;
          content: ".";
          -webkit-text-fill-color: $OrangeColor1;
        }
      }
      @media only screen and (min-width: $TabletSize1) and (orientation: portrait) {
        grid-template-columns: repeat(1, 1fr);
      }
      @media only screen and (min-width: $TabletSize1) and (orientation: landscape) {
        grid-template-columns: repeat(2, 1fr);
        .Card {
          img {
            height: 300px;
          }
          .UsedLang {
            margin: 2em 0;
          }
          .links {
            a {
              span {
                font-size: $fs-paragraph-2;
              }
            }
          }
        }
      }
      @media only screen and (min-width: $Laptop1) {
        grid-template-columns: repeat(3, 33.33%);
        grid-gap: 2rem 0rem;
        .Card {
          padding: 1.5rem 2rem;
          img {
            height: 220px;
          }
          .Description,
          .UsedLang {
            margin: 4em 0;
            margin-top: 1em;
            .title {
              font-size: $fs-paragraph-1 * 1.3;
            }
            p {
              font-size: $fs-paragraph-1;
            }
          }
          .Description {
            margin: 0 !important;
          }
        }
      }
      @media only screen and (min-width: $LargeScreen1) {
        .Card {
          img {
            height: 380px;
          }
          .UsedLang {
            margin: 4em 0;
            margin-top: 2em;
            .title {
              font-size: $fs-paragraph-1 * 1.3;
            }
            p {
              font-size: $fs-paragraph-1;
            }
          }
          .Description {
            min-height: max-content;
          }
        }
      }
    }
  }
}
</style>
