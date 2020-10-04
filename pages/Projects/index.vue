<template>
  <div class="Sections" style="margin-top: 0">
    <div class="Section AllProjects" ref="projHeader">
      <h4>All my Projects</h4>
      <div class="Background ProjectenGrid">
        <div
          class="Card"
          v-for="project in projects.slice(isVisible_Proj).reverse()"
          :key="project.id"
        >
          <div class="CardHeader">
            <div class="sort">{{ project.soort }} / {{ project.Datum }}</div>
            <div class="ProjectNaam">{{ project.Projectnaam }}</div>
          </div>

          <img :src="project.Img_src" alt="ProjectImg" />

          <div class="UsedLang">
            <div class="title">Used Techniques</div>
            <div class="ProgrammeerTalen" v-html="project.UsedTech.Langs"></div>
            <div
              class="ProgrammeerTalen"
              v-html="project.UsedTech.Programs"
            ></div>
          </div>

          <div class="Description">
            <div class="title">Description</div>
            <p>{{ project.FullDesc }}</p>
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
        <button class="showMore"
         @click="showProjects"
         >
          {{ showMoreTxt }}
        </button>
      </div>
    </div>

    <div class="Section AllExercises" ref="exerHeader">
      <h4>Other Exercises</h4>
      <div class="Background ProjectenGrid">
        <div
          class="Card"
          v-for="(SomeExercise, index) in SomeExercises.slice(isVisible_Excer).reverse()"
          :key="index.id"
        >
          <div class="CardHeader">
            <div class="sort">
              {{ SomeExercise.soort }} / {{ SomeExercise.Datum }}
            </div>
            <div class="ProjectNaam">{{ SomeExercise.Projectnaam }}</div>
          </div>

          <img :src="SomeExercise.Img_src" alt="ProjectImg" />

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

          <div class="Description">
            <div class="title">Description</div>
            <p>{{ SomeExercise.FullDesc }}</p>
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
            <a
              :href="SomeExercise.Url_src"
              target="blank"
              title="View Website"
            >
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
      <h4>we can work together</h4>
      <div class="Background">
        <ContactSection />
      </div>
    </div>
  </div>
</template>

<script>
import projects from "~~/projects";
import SomeExercises from "~~/SomeExercises";
import ContactSection from "~/components/home/ContactSection";
export default {
  head() {
    return {
      title: "Projects - Sander van Ast"
    };
  },
  data() {
    return {
      projects,
      SomeExercises,
      showMoreTxt: "Show All",
      isVisible_Proj: 2,
      isVisible_Excer: 1,
    };
  },
  methods: {
    ScrolltoTop() {
      scrollTo({ scrollTop: 1200 }, "0");
    },
    showProjects() {
      if(this.isVisible_Proj = this.isVisible_Proj) {
        // shows all projects
        this.isVisible_Proj = 0;
        this.showMoreTxt = 'show less';
        // scroll to the beginning
        this.$refs['projHeader'].scrollIntoView(true);
      } else {
        // shows only 3 projects
        this.isVisible_Proj = 2;
        this.showMoreTxt = 'show all';
        // scroll to the beginning
        this.$refs['projHeader'].scrollIntoView(true);
      }
    },
    showExcercies() {
      if(this.isVisible_Excer = this.isVisible_Excer) {
        // shows all projects
        this.isVisible_Excer = 0;
        this.showMoreTxt = 'show less';
        // scroll to the beginning
        this.$refs['exerHeader'].scrollIntoView(true);
      } else {
        // shows only 2 projects
        this.isVisible_Excer = 1;
        this.showMoreTxt = 'show all';
        // scroll to the beginning
        this.$refs['exerHeader'].scrollIntoView(true);
      }
    },
  },
  components: {
    ContactSection
  }
};
</script>

<style lang="scss">
.Sections {
  .AllProjects,
  .AllExercises {
    @include BackgroundImage(
      "https://src.sandervanast.com/images/PNG/BackgroundImage4.png"
    );
    &::after {
      background-repeat: repeat-y;
    }
  }
  .Section {
    .padding {
      padding: 0rem 7rem;
      .showMore {
        @include ButtonStyle();
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
        .CardHeader {
          .sort {
            opacity: $WmarkOpacity;
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
          height: 300px;
          border-radius: $borderRadius8;
          object-fit: cover;
          object-position: 50% 50%;
          background-color: transparent;
          position: relative;
          filter: brightness(var(--ImageFilter));
        }
        .UsedLang {
          .ProgrammeerTalen {
            display: block;
            margin: .2rem 0;
            // width: 100%;
            .ProgrammeerTaal {
              display: inline-block;
              text-transform: uppercase;
              font-weight: bolder;
              font-size: 14px;
              letter-spacing: 0.7px;
              margin: .3rem .5rem;
              margin-left: 0;
              @include CardBackground;
              background-color: var(--BackGroundCardLevel2);
              height: max-content;
              width: max-content;
              padding: 1rem 1.5rem;
            }
            .ORANGE {
              color: $OrangeColor1;
            }
            .RED {
              color: $RedColor1;
            }
            .GREEN {
              color: $GreenColor1;
            }
          }
        }
        .Description,
        .UsedLang {
          .title {
            font-weight: 500;
            &::after {
              content: ":";
              color: $OrangeColor1;
            }
          }
        }
        .Description {
          min-height: 190px;
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
            cursor: default;
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
          .Description {
            min-height: 180px;
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
            .title {
              font-size: $fs-paragraph-1 * 1.3;
            }
            p {
              font-size: $fs-paragraph-1;
            }
          }
          .Description {
            min-height: 200px;
          }
        }
      }
      @media only screen and (min-width: $LargeScreen1) {
        .Card {
          img {
            height: 380px;
          }
          .Description {
            min-height: 200px;
          }
        }
      }
    }
  }
}
</style>
