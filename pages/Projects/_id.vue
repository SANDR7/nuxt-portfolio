<template>
  <div class="Sections">
    <div class="Section Aproject">
      <h5>{{project.Projectnaam}}</h5>
      <div class="Pinfo">
        <div>{{project.UsedTech.Skills}}</div>
        <div>{{project.Datum}}</div>
      </div>
      <div class="Background">
        Developing...
      </div>
      <!-- <article class="Background">
        <div class="topics t1">
          <div class="Objective topic">
            <header>Objective</header>
            <p>{{project.Objective}}</p>
          </div>
          <div class="Requirements topic">
            <div class="card">
            <header>Requirements</header>
            <ul v-html="project.Requirements"></ul>
            </div>
          </div>
        </div>
        <div class="topics t1">
          <div class="Research topic">
            <header>Research & Approach</header>
            <div class="card">
              <p>{{project.Research}}</p>
            </div>
          </div>
        </div>
        <div class="topics">
          <div class="Process topic">
            <header>Process</header>
            <div>
              <p>{{project.Process}}</p>
            </div>
          </div>
        </div>
      </article> -->
    </div>
  </div>
</template>


<script>
import projects from "~~/projects";
export default {
  head() {
    return {
      title: `Case Study | ${this.project.Projectnaam} - Sander van Ast`,
    };
  },
  data() {
    return {
      projects,
    };
  },
  computed: {
    project() {
      let id = this.$route.params.id;
      return this.projects.find((project) => {
        return project.id == id;
      });
    },
  },
  // asyncData({store}) {
  //     console.log(store.state.ProjectCards)
  // },
  // layout: 'nofooter'
};
</script>
<style lang="scss">
.Sections {
    .Aproject {
        // height: 80vh;
      h5 {
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
        .topics {
          .topic {
            margin: 1rem 0;
            header {
              font-size: $fs-header / 2;
              font-weight: 700;
              margin-bottom: .6rem;
              &::after {
                content: ':';
                color: $OrangeColor1;
              }
            }
            p {
              font-size: $fs-paragraph-2;
              line-height: 34px;
            }
            .card {
              @include CardBackground;
               background-color: var(--BackGroundCardLevel1);
               padding: 1.5rem;
            }
          }

          .Research {
            width: 60%;
          }
          .Objective {
            flex: 1;
            p {
              width: 97%;
            }
          }
          .Requirements {
            display: flex;
            width: 100%;
            justify-content: center;
            flex: 1;
            .card {
              width: 50%;
              padding: 1.5rem 2rem;
              ul {
                li {
                  margin: 1rem 0;
                  &::before {
                    content: '⋇ ';
                    color: $GreenColor1;
                  }
                }
              }
            }
          }

        }
        .t1 {
          display: flex;
        }
      }
    }
}
.Section:hover > h5 {
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