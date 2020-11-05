<template>
  <div class="Sections ProjSec">
    <div class="Section Aproject">
      <h1>{{ project.Projectnaam }}</h1>
      <div class="Pinfo">
        <div>{{ project.UsedTech.Skills }}</div>
        <div>{{ project.Datum }}</div>
      </div>
      <!-- <div class="Background">
        Developing...
      </div> -->
      <article class="Background">
        <div class="firstSect">
          <img class="Image" :src="project.Img_src" alt="Projectname" />
          <div class="rightSect">
            <div class="objective">
              <h3 class="header">The Objective</h3>
              <p>
                {{ project.Objective }}
              </p>
            </div>
            <div class="requirements">
              <h3 class="header">The Requirements</h3>
              <div class="requirementsList">
                <ul class="scroll" v-html="project.Requirements"></ul>
              </div>
            </div>
          </div>
        </div>
        <div class="secondSect">
          <div class="leftSect">
            <div class="research">
              <h3 class="header">Research &amp; Approach</h3>
              <p>
                {{ project.Research }}
              </p>
            </div>
            <div class="columns">
              <div>
                <h3 class="header">The Experience</h3>
                <p>
                  {{ project.Ideas }}
                </p>
              </div>
              <div>
                <h3 class="header">Process</h3>
                <p>
                  {{ project.Process }}
                </p>
              </div>
            </div>
          </div>
          <div class="rightSect">
            <h3 class="header">Some thoughts</h3>
            <!-- <ul v-html="project."></ul> -->
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import projects from "~~/projects";
export default {
  head() {
    return {
      title: `Case Study | ${this.project.Projectnaam} - Sander van Ast`
    };
  },
  data() {
    return {
      projects
    };
  },
  computed: {
    project() {
      let id = this.$route.params.id;
      return this.projects.find(project => {
        return project.id == id;
      });
    }
  }
  // asyncData({store}) {
  //     console.log(store.state.ProjectCards)
  // },
  // layout: 'nofooter'
};
</script>
<style lang="scss">
.ProjSec {
  margin: -4rem 0 4rem !important;
  .Aproject {
    // height: 80vh;
    h1 {
      @include ColorTransition;
      font-size: $fs-header * 1.3;
      letter-spacing: 2px;
      font-weight: 700;
      margin: 2rem 4rem 1.5rem;
      transform: translateY(34%);
      padding: 1rem 0;
      -webkit-text-stroke: transparent;
      -webkit-text-fill-color: var(--TxtColor);
      opacity: $WmarkOpacity * 5.8;
      &::after {
        content: ".";
        @include ColorTransition;
        -webkit-text-stroke: 2px $OrangeColor1;
        -webkit-text-fill-color: transparent;
      }
    }
    // project datum en dienst
    .Pinfo {
      padding: 0 4rem;
      margin: 1rem 0 1.5rem;
      display: flex;
      width: 100%;
      text-transform: uppercase;
      justify-content: space-between;
      opacity: $WmarkOpacity * 3;
    }
    .Background {
      @include CardBackground;
      background-color: var(--BackgroundLevel2);
      box-shadow: $innerShadow;
      margin: 0 2rem;
      padding: 2rem 2.5rem !important;
      z-index: 10;

      .header {
        font-size: $fs-paragraph-2 * 1.5;
        text-transform: capitalize;
        &::after {
          content: ":";
          color: $OrangeColor1;
        }
      }

      p {
        font-size: $fs-paragraph-2;
        line-height: 36px;
      }
      .firstSect {
        display: flex;
        width: 100%;
        .Image {
          width: 45%;
          object-fit: cover;
          border-radius: $borderRadius12;
          filter: brightness(var(--ImageFilter));
        }
        .rightSect {
          margin: 0 4rem;
          width: 50%;
          // display: flex;
          // flex-direction: column;
          // justify-content: space-between;
          .objective {
            p {
              font-size: $fs-paragraph-2;
              line-height: 36px;
            }
          }
          .requirements {
            margin-top: 4rem;
            width: 100%;
            .requirementsList {
              margin: 1rem 0;
              @include CardBackground;
              padding: 1em 1.2em;
              .scroll {
                overflow-x: auto;
                scrollbar-width: thin; /* Firefox */
                display: flex;
              }
              ::-webkit-scrollbar {
                height: 5px;
              }
              .requirementItem {
                @include subCardBackground;
                margin: 0;
                margin-right: 3em;
                margin-bottom: 1em;
                min-width: 200px;
                justify-content: center;
              }
            }
          }
        }
      }
      .secondSect {
        display: flex;
        margin: 2rem 0;
        .leftSect {
          width: 73%;
          .research {
            margin-bottom: 2rem;
          }
          .columns {
            display: flex;
            width: 100%;
            justify-content: space-between;
            p {
              width: 90%;
            }
          }
        }
        .rightSect {
          @include CardBackground;
          margin: 0 4rem;
          padding: 1em 3em;
          min-width: max-content;
        }
      }
    }
  }
}
.Section:hover > h1 {
  @include ColorTransition;
  -webkit-text-stroke: transparent;
  -webkit-text-fill-color: var(--TxtColor);
  opacity: $WmarkOpacity * 5.8;
  &::after {
    content: ".";
    -webkit-text-fill-color: $OrangeColor1;
    @include ColorTransition;
  }
}
</style>
