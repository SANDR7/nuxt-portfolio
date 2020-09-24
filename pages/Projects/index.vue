<template>
  <div class="Sections" style="margin-top: 0">
    <div class="Section AllProjects">
        <h4>All my Projects</h4>
      <div class="Background ProjectenGrid">
        <div
          class="Card"
          v-for="project in projects.slice().reverse()"
          :key="project.id"
        >
          <div class="CardHeader">
            <div class="sort">{{ project.soort }} / {{project.Datum}}</div>
            <div class="ProjectNaam">{{project.Projectnaam}}</div>
          </div>

          <img :src=project.Img_src alt="ProjectImg">

          <div class="UsedLang">
            <div class="title">Used Techniques</div>
            <div class="ProgrammeerTalen" v-html="project.UsedTech.Langs">
            </div>
            <div class="ProgrammeerTalen" v-html="project.UsedTech.Programs">
            </div>
          </div>

          <div class="Description">
            <div class="title">Description</div>
            <p>{{project.FullDesc}}</p>
          </div>

          <div class="links" @click="ScrolltoTop">
            <nuxt-link
              
              title="Open Case Study"
              :to="`/Projects/${project.id}`"
            >
              <i class="far fa-file-search"></i><span>Case Study</span>
            </nuxt-link>
            <a :href="project.Url_src" target="blank" title="View Website">
              <i class="far fa-link"></i><span>Visit Site</span>
            </a>
          </div>
        </div>
        <br>
      </div>
    </div>
    <div class="Section">
        <h4>we can work together</h4>
      <div class="Background">
        <ContactSection/>
      </div>
    </div>
  </div>
</template>

<script>
import projects from '~~/projects';
import ContactSection from "~/components/home/ContactSection";
export default {
  head() {
  return {
    title: 'Projects - Sander van Ast',
  }
  },
  data() {
    return {
      projects
    }
  },
  methods: {
    ScrolltoTop() {
      scrollTo({scrollTop:1200},'0');
    },
  },
  components: {
    ContactSection
  }
};
</script>

<style lang="scss">
.Sections {
  .AllProjects {
    @include BackgroundImage("https://src.sandervanast.com/images/PNG/BackgroundImage4.png");
    &::after {
    background-repeat: repeat-y;
    }
  }
  .Section {
    
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
            margin: .5rem;
            position: relative;
            .CardHeader {
              .sort {
                opacity: $WmarkOpacity;
                text-transform: uppercase;
                font-size: $fs-paragraph-1 * .8;
                font-family: "Share Tech Mono", monospace;
              }
              .ProjectNaam {
                font-weight: 700;
                text-transform: uppercase;
                font-size: $fs-paragraph-1;
                // letter-spacing: 0.7px;
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
                margin: .5rem 0;
                // width: 100%;
                .ProgrammeerTaal {
                  display: inline-block;
                  text-transform: uppercase;
                  font-weight: bolder;
                  font-size: 14px;
                  letter-spacing: .7px;
                  margin: .6rem 1rem;
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
                  content: ':';
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
                  padding: .5rem;
                  span {
                    margin: 0 .5rem;
                    font-size: $fs-paragraph-1 * .8;
                  }
              }
            }
          }
     @media only screen and (min-width: $TabletSize1) and (orientation : portrait) {
      grid-template-columns: repeat(1, 1fr);
     }
    @media only screen and (min-width: $TabletSize1) and (orientation : landscape) {
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