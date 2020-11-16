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
              <div class="experience">
                <h3 class="header">The Experience</h3>
                <p>
                  {{ project.Ideas }}
                </p>
              </div>
              <div class="process">
                <h3 class="header">Process</h3>
                <p>
                  {{ project.Process }}
                </p>
              </div>
            </div>
            <div class="PreviewImg">
              <img :src="project.Img_src" alt="testing" />
            </div>
          </div>
          <div class="rightSect">
            <h3 class="header">Some thoughts</h3>
            <div class="ThoughtList">
              <ul class="scroll" v-html="project.Thoughts"></ul>
            </div>
            <h3 class="header">Used Techniques</h3>
            <div class="TechniqueList">
              <ul class="scroll" v-html="project.Techniques"></ul>
            </div>
          </div>
        </div>
      </article>
      <div class="endWord">
        <h3>Final Result</h3>
        <!-- <h3>Final Outcome</h3> -->
        <!-- <p>
          {{project.Summery}}
        </p> -->
      </div>
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
      font-size: $fs-paragraph-2;
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
        flex-direction: row;
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
              width: 100%;
            }

            .experience {
              @include CardBackground;
              margin-right: 4em;
              padding: 2em 3em;
            }
          }

          .PreviewImg {
            padding: 2em 0 0;
            border-radius: $borderRadius12;
            img {
              border-radius: $borderRadius12;
              width: 100%;
              height: 500px;
              object-fit: cover;
            }
          }
        }
        .rightSect {
          @include CardBackground;
          margin: 0 1.5rem;
          padding: 4em 3em;
          min-width: max-content;
          .ThoughtList,
          .TechniqueList {
            margin: 1em 0;
            ::-webkit-scrollbar {
              width: 5px;
            }
            .scroll,
            .scroll {
              overflow-y: auto;
              scrollbar-width: thin; /* Firefox */
              display: flex;
              flex-direction: column;
              height: 400px;
              .ThoughtItem,
              .TechniqueItem {
                @include subCardBackground;
                width: 95%;
                margin: 0.7rem 0;
                justify-content: center;
              }
            }
          }
        }
      }
    }
    @media only screen and (min-width: $MobileSize1) {
      // height: 80vh;
      h1 {
        font-size: $fs-header * 0.55;
        letter-spacing: 0px;
        font-weight: 700;
        margin: 2rem 2rem 1.5rem;
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
        padding: 0 2rem;
        margin: 1rem 0 1.5rem;
        display: flex;
        width: 100%;
        text-transform: uppercase;
        justify-content: space-between;
        opacity: $WmarkOpacity * 3;
        font-size: $fs-paragraph-2 * 0.7;
      }
      .Background {
        padding: 1rem 1.5rem !important;
        .header {
          &::after {
          }
        }
        p {
        }
        .firstSect {
          flex-direction: column;
          .Image {
            width: 100%;
            height: auto;
          }
          .rightSect {
            margin: 2rem 0;
            width: 100%;
            .objective {
              p {
                line-height: 28px;
                font-size: $fs-paragraph-1;
              }
            }
            .requirements {
              margin-top: 2rem;
              .requirementsList {
                .requirementItem {
                  margin-right: 2em;
                }
              }
            }
          }
        }
        .secondSect {
          flex-direction: column;
          // background-color: red;
          .leftSect {
            width: 100%;
            .research {
              p {
                line-height: 28px;
                font-size: $fs-paragraph-1;

              }
            }
            .columns {
              p {
              }
              .experience {
              }
            }
            .PreviewImg {
              img {
              }
            }
          }
          .rightSect {
            display: none;
            .ThoughtList,
            .TechniqueList {
              .scroll,
              .scroll {
                .ThoughtItem,
                .TechniqueItem {
                }
              }
            }
          }
        }
      }
    }
    // @media only screen and (min-width: $TabletSize1) {
    //   .Background {
    //     .header {
    //       &::after {
    //       }
    //     }
    //     p {
    //     }
    //     .firstSect {
    //       flex-direction: column;
    //       .Image {
    //         width: 100%;
    //         height: 100px;
    //       }
    //       .rightSect {
    //         .objective {
    //           p {
    //           }
    //         }
    //         .requirements {
    //           .requirementsList {
    //             .scroll {
    //             }
    //             .requirementItem {
    //             }
    //           }
    //         }
    //       }
    //     }
    //     .secondSect {
    //       .leftSect {
    //         .research {
    //         }
    //         .columns {
    //           p {
    //           }
    //           .experience {
    //           }
    //         }
    //         .PreviewImg {
    //           img {
    //           }
    //         }
    //       }
    //       .rightSect {
    //         .ThoughtList,
    //         .TechniqueList {
    //           .scroll,
    //           .scroll {
    //             .ThoughtItem,
    //             .TechniqueItem {
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    @media only screen and (min-width: $Laptop1) {
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
        font-size: $fs-paragraph-2;
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
          flex-direction: row;
          width: 100%;
          .Image {
            width: 45%;
            height: max-content;
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
                width: 100%;
              }

              .experience {
                @include CardBackground;
                margin-right: 4em;
                padding: 2em 3em;
              }
            }

            .PreviewImg {
              padding: 2em 0 0;
              border-radius: $borderRadius12;
              img {
                border-radius: $borderRadius12;
                width: 100%;
                height: 500px;
                object-fit: cover;
              }
            }
          }
          .rightSect {
            @include CardBackground;
            margin: 0 1.5rem;
            padding: 4em 3em;
            min-width: max-content;
            .ThoughtList,
            .TechniqueList {
              margin: 1em 0;
              ::-webkit-scrollbar {
                width: 5px;
              }
              .scroll,
              .scroll {
                overflow-y: auto;
                scrollbar-width: thin; /* Firefox */
                display: flex;
                flex-direction: column;
                height: 400px;
                .ThoughtItem,
                .TechniqueItem {
                  @include subCardBackground;
                  width: 95%;
                  margin: 0.7rem 0;
                  justify-content: center;
                }
              }
            }
          }
        }
      }
    }
    //   @media only screen and (min-width: $LargeScreen1) {
    //   .Background {
    //     .header {
    //       &::after {
    //       }
    //     }
    //     p {
    //     }
    //     .firstSect {
    //       flex-direction: column;
    //       .Image {
    //         width: 100%;
    //         height: 100px;
    //       }
    //       .rightSect {
    //         .objective {
    //           p {
    //           }
    //         }
    //         .requirements {
    //           .requirementsList {
    //             .scroll {
    //             }
    //             .requirementItem {
    //             }
    //           }
    //         }
    //       }
    //     }
    //     .secondSect {
    //       .leftSect {
    //         .research {
    //         }
    //         .columns {
    //           p {
    //           }
    //           .experience {
    //           }
    //         }
    //         .PreviewImg {
    //           img {
    //           }
    //         }
    //       }
    //       .rightSect {
    //         .ThoughtList,
    //         .TechniqueList {
    //           .scroll,
    //           .scroll {
    //             .ThoughtItem,
    //             .TechniqueItem {
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    .endWord {
      padding: 2rem 0;
      width: 100%;
      text-align: center;
      h3 {
        font-size: $fs-header * 0.8;
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
