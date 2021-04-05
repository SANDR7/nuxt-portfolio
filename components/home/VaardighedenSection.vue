<template>
  <div class="Vaardigheden">
    <div class="Cards">
      <!-- Frameworks -->
      <div class="Card">
        &lt;{{ framework }}&gt;
        <div style="margin-top: 0.6rem; margin-left: 1rem; position: absolute">
          &lt;Libraries &#47;&gt;
        </div>
        <div class="Scroll">
          <div class="subCard" v-for="(Framework, id) in Frameworks" :key="id">
            <!-- <div v-for="(n, id) in even([1,2,3,4])" :key="id">
              {{ n }}
            </div> -->
            <img
              :src="Framework.Image_src"
              :alt="Framework.Image_alt"
              height="70"
              width="70"
            />
            <div class="Frameworks">
              <div class="header">{{ Framework.name }}</div>
              <div>
                Startd since
                <span class="GREEN"> {{ Framework.BeginDate }}</span>
              </div>
              <div>
                <a
                  :href="Framework.Url_src"
                  title="Framework website"
                  target="blank"
                  ><i class="far fa-info-circle"></i> {{ Framework.name }}</a
                >
              </div>
            </div>
          </div>
        </div>
        &lt;&#47;{{ framework }}&gt;
      </div>
      <!-- Programmeertalen -->
      <div class="Card">
        <!-- <div style="margin-left: 1rem; position: absolute;">import &#123; Databases &#125; from sources</div> -->
        <div>
          import <span :style="'color:' + colorimport">&#123;</span> Databases
          <span :style="'color:' + colorimport">&#125;</span>
          <span>from</span>
          sources&#59;
        </div>
        <span style="position: absolute"> return &#40; </span>
        <div style="margin-left: 1rem; margin-top: 1.5rem; position: absolute">
          programming-Languages&#59;
        </div>
        <!-- <div style="margin-top: 1.5rem; margin-left: 1rem; position: absolute;">programming&#95;Languages&#59;</div> -->
        <div class="Scroll">
          <div
            class="subCard"
            v-for="(ProgrammeerTaal, id) in ProgrammeerTalen"
            :key="id"
          >
            <img
              :src="ProgrammeerTaal.Image_src"
              :alt="ProgrammeerTaal.Image_alt"
              height="70"
              width="70"
            />
            <div class="ProgrammeerTalen">
              <div class="header">{{ ProgrammeerTaal.name }}</div>
              <div>
                Started since
                <span class="ORANGE"> {{ ProgrammeerTaal.BeginDate }}</span>
              </div>
            </div>
          </div>
        </div>
        &#41;
      </div>
      <!-- Programms -->
      <div class="Card">
        C&#58;&#92;Users&#92;<span class="Accent">{{ GebruikersNaam }}</span
        >&#92;Programs&#92;Tools
        <div class="Scroll">
          <div class="subCard" v-for="(Programma, id) in Programmas" :key="id">
            <div class="NaamPrograms">
              <div class="header RED">{{ Programma.name }}</div>
              <div>{{ Programma.cat }}</div>
            </div>
            <div class="Logo">
              <img
                loading="lazy"
                class="logoImg"
                :src="Programma.Image_src"
                :alt="Programma.Image_alt"
                height="70"
                width="70"
              />
            </div>
          </div>
        </div>
        &#92;
        <br />
        <br /><span class="Accent">{{ GebruikersNaam }}</span> &rsaquo;
        Knowledge &rsaquo; Computers &#38; Software
        <div class="Scroll">
          <div class="subCard" v-for="(Kennis, id) in ComputerKennis" :key="id">
            <div class="NaamOs">
              <div class="header RED">{{ Kennis.name }}</div>
              <div>{{ Kennis.cat }}</div>
            </div>
            <div class="Logo">
              <img
                loading="lazy"
                class="logoImg"
                :src="Kennis.Image_src"
                :alt="Kennis.Image_alt"
                height="70"
                width="70"
              />
            </div>
          </div>
        </div>
        &rsaquo;
      </div>
    </div>
    <div class="Overig">
      Other&#95;Skills &#38;&#38; Interests &#123;
      <div class="Card">
        <div class="scroll">
          <div class="subCard">frontend development</div>
          <div class="subCard">User Interface design</div>
          <div class="subCard">User Experience design</div>
          <div class="subCard">graphic design</div>
          <div class="subCard">Logo design</div>
          <div class="subCard">SEO</div>
          <div class="subCard">JSON</div>
          <div class="subCard">Illustrator</div>
          <div class="subCard">Photoshop</div>
          <div class="subCard">Adobe Xd</div>
          <div class="subCard">JSX</div>
          <div class="subCard">GeoJSON</div>
          <div class="subCard">XML</div>
          <div class="subCard">API's</div>
          <div class="subCard">OpenWeatherMap</div>
          <div class="subCard">progressive web app</div>
          <div class="subCard">AJAX</div>
          <div class="subCard">reliable</div>
          <div class="subCard">Racing cyclist</div>
          <div class="subCard">Speedcubing</div>
          <div class="subCard">Lego technic Builder</div>
        </div>
      </div>
      &#125;
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      framework: "Frameworks",
      GebruikersNaam: "SANDR7",
      colorimport: "#FFD720",
    };
  },
  computed: {
    ...mapState([
      "Frameworks",
      "ProgrammeerTalen",
      "Programmas",
      "ComputerKennis",
    ]),
  },
};
</script>

<style lang="scss">
.Vaardigheden {
  font-size: $fs-paragraph-2;
  ::-webkit-scrollbar {
    width: 5px;
  }
  .Cards {
    display: grid;
    grid-template-columns: 0.8fr 0.8fr 1.2fr;
    grid-template-rows: 1fr;
    grid-template-areas: "frameworks programlang program";
    grid-gap: 2rem;
    justify-content: center;
    .Card {
      @include CardBackground;
      padding: 1.5rem 1.7rem;
      // Frameworks / libraries
      &:nth-child(1) {
        grid-area: frameworks;
        .Scroll {
          margin-top: 3rem;
          margin-bottom: 0.3rem;
          // .subCard {
          //   &:nth-child(1) {
          //     .Frameworks {
          //       // vue js
          //       @include ProgressBar(88%, $GreenColor1);
          //     }
          //   }

          //   &:nth-child(2) {
          //     .Frameworks {
          //       // react js
          //       @include ProgressBar(74%, $GreenColor1);
          //     }
          //   }

          //   &:nth-child(3) {
          //     .Frameworks {
          //       // sass js
          //       @include ProgressBar(93%, $GreenColor1);
          //     }
          //   }
          //   &:nth-child(4) {
          //     .Frameworks {
          //       // nuxt js
          //       @include ProgressBar(66%, $GreenColor1);
          //     }
          //   }
          //   &:nth-child(5) {
          //     .Frameworks {
          //       // gulp
          //       @include ProgressBar(63%, $GreenColor1);
          //     }
          //   }
          //   &:nth-child(6) {
          //     .Frameworks {
          //       // jQuery
          //       @include ProgressBar(86%, $GreenColor1);
          //     }
          //   }
          //   &:nth-child(7) {
          //     .Frameworks {
          //       // Nodejs
          //       @include ProgressBar(50%, $GreenColor1);
          //     }
          //   }
          //   &:nth-child(8) {
          //     .Frameworks {
          //       // Bootstrap
          //       @include ProgressBar(40%, $GreenColor1);
          //     }
          //   }
          //   &:nth-child(9) {
          //     .Frameworks {
          //       // Tailwindcss
          //       @include ProgressBar(62%, $GreenColor1);
          //     }
          //   }
          //   &:nth-child(10) {
          //     .Frameworks {
          //       // Foundation
          //       @include ProgressBar(48%, $GreenColor1);
          //     }
          //   }
          //   &:nth-child(11) {
          //     .Frameworks {
          //       // Chartjs
          //       @include ProgressBar(70%, $GreenColor1);
          //     }
          //   }
          //   &:nth-child(12) {
          //     .Frameworks {
          //       // Leaflet
          //       @include ProgressBar(56%, $GreenColor1);
          //     }
          //   }
          // }
        }
      }

      // Programmeertalen inclusief databases
      &:nth-child(2) {
        grid-area: programlang;
        .Scroll {
          margin-top: 3rem;
          margin-bottom: 0.3rem;
          // .subCard {
          //   &:nth-child(1) {
          //     .ProgrammeerTalen {
          //       // Javascript
          //       @include ProgressBar(76%, $OrangeColor1);
          //     }
          //   }

          //   &:nth-child(2) {
          //     .ProgrammeerTalen {
          //       // Typescipt
          //       @include ProgressBar(70%, $OrangeColor1);
          //     }
          //   }

          //   &:nth-child(3) {
          //     .ProgrammeerTalen {
          //       // HTML
          //       @include ProgressBar(100%, $OrangeColor1);
          //     }
          //   }

          //   &:nth-child(4) {
          //     .ProgrammeerTalen {
          //       // C#
          //       @include ProgressBar(40%, $OrangeColor1);
          //     }
          //   }

          //   &:nth-child(5) {
          //     .ProgrammeerTalen {
          //       // CSS
          //       @include ProgressBar(100%, $OrangeColor1);
          //     }
          //   }
          //   &:nth-child(6) {
          //     .ProgrammeerTalen {
          //       // PHP
          //       @include ProgressBar(65%, $OrangeColor1);
          //     }
          //   }
          //   &:nth-child(7) {
          //     .ProgrammeerTalen {
          //       // FireBase
          //       @include ProgressBar(34%, $PurpleColor1);
          //     }
          //   }
          //   &:nth-child(8) {
          //     .ProgrammeerTalen {
          //       // MongoDB
          //       @include ProgressBar(58%, $PurpleColor1);
          //     }
          //   }
          //   &:nth-child(9) {
          //     .ProgrammeerTalen {
          //       //My SQL
          //       @include ProgressBar(47%, $PurpleColor1);
          //     }
          //   }
          //   &:nth-child(10) {
          //     .ProgrammeerTalen {
          //       // Php My Admin
          //       @include ProgressBar(65%, $PurpleColor1);
          //     }
          //   }
          // }
        }
      }
      // Programma's
      &:nth-child(3) {
        grid-area: program;
        .Scroll {
          height: 160px;
          .subCard {
            .NaamPrograms,
            .NaamOs {
              width: 100%;
            }
          }
          // .subCard {
          //   font-size: $fs-paragraph-1;
          //   justify-content: space-between;
          //   $top: 85%;
          //   &:nth-child(n) {
          //     .header {
          //       font-size: $fs-paragraph-2;
          //       font-weight: 600;
          //       text-transform: capitalize;
          //     }
          //   }
          //   &:nth-child(1) {
          //     .NaamPrograms {
          //       // adobe
          //       @include ProgressBar(87%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }

          //     .NaamOs {
          //       // macox
          //       @include ProgressBar(62%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //   }

          //   &:nth-child(2) {
          //     .NaamPrograms {
          //       // Office
          //       @include ProgressBar(100%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //     .NaamOs {
          //       // windows
          //       @include ProgressBar(89%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //   }

          //   &:nth-child(3) {
          //     .NaamPrograms {
          //       // Visual studio code
          //       @include ProgressBar(92%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //     .NaamOs {
          //       // Windows Server
          //       @include ProgressBar(76%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //   }

          //   &:nth-child(4) {
          //     .NaamPrograms {
          //       // GitHub
          //       @include ProgressBar(75%, $RedColor1);
          //       path {
          //         fill: red;
          //       }
          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //     .NaamOs {
          //       // linux
          //       @include ProgressBar(34%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //   }
          //   &:nth-child(5) {
          //     .NaamPrograms {
          //       // google search console
          //       @include ProgressBar(80%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //     .NaamOs {
          //       // vmware
          //       @include ProgressBar(47%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //   }
          //   &:nth-child(6) {
          //     .NaamPrograms {
          //       // shopify
          //       @include ProgressBar(51%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //     .NaamOs {
          //       // Git
          //       @include ProgressBar(73%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //   }
          //   &:nth-child(7) {
          //     .NaamPrograms {
          //       // wordpress
          //       @include ProgressBar(30%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //     .NaamOs {
          //       // Yarn
          //       @include ProgressBar(87%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //   }
          //   &:nth-child(8) {
          //     .NaamPrograms {
          //       // trello
          //       @include ProgressBar(87%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //     .NaamOs {
          //       // figma
          //       @include ProgressBar(97%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //   }
          //   &:nth-child(9) {
          //     .NaamPrograms {
          //       // mircosoft teams
          //       @include ProgressBar(100%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //     .NaamOs {
          //       // Unity
          //       @include ProgressBar(43%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //   }
          //   &:nth-child(10) {
          //     .NaamPrograms {
          //       // google my business
          //       @include ProgressBar(92%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //     .NaamOs {
          //       // xampp
          //       @include ProgressBar(94%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //   }
          //   &:nth-child(11) {
          //     .NaamPrograms {
          //       // filezilla
          //       @include ProgressBar(98%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //     .NaamOs {
          //       //Notion
          //       @include ProgressBar(100%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //   }
          //   &:nth-child(12) {
          //     .NaamPrograms {
          //       // netlify
          //       @include ProgressBar(83%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //     .NaamOs {
          //       //Google cloud
          //       @include ProgressBar(70%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //   }
          //   &:nth-child(13) {
          //     .NaamPrograms {
          //       //Heroku
          //       @include ProgressBar(67%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //   }
          //   &:nth-child(14) {
          //     .NaamPrograms {
          //       //plesk
          //       @include ProgressBar(77%, $RedColor1);

          //       &::before,
          //       &::after {
          //         top: $top;
          //       }
          //     }
          //   }
          //   .NaamPrograms,
          //   .NaamOs {
          //     width: 80%;
          //   }

          //   img {
          //     flex: 1;
          //   }
          // }
        }
      }

      .Scroll {
        overflow-x: hidden;
        overflow-y: auto;
        height: 425px;
        margin: 1rem 0;
        margin-top: 1.8rem;
        scrollbar-width: thin;
        .subCard {
          display: flex;
          height: 120px;
          @include subCardBackground;
          $marginTop: 4px;
          .Frameworks {
            div {
              span {
                &:hover {
                  color: $GreenColor1;
                }
              }
            }
          }
          .ProgrammeerTalen {
            div {
              span {
                &:hover {
                  color: $OrangeColor1;
                }
              }
            }
          }
          .Frameworks,
          .ProgrammeerTalen {
            .header {
              text-transform: capitalize;
              font-weight: 700;
              font-size: $fs-header / 2.5;
            }
            div {
              margin-top: $marginTop;
            }
            div:nth-child(3) {
              margin-top: -1px;
              a {
                color: var(--TxtColor);
                font-size: $fs-paragraph-1;
                opacity: 0.6;
                @include HoverFx(1px, var(--TxtColor), 0);
              }
            }
          }
          .NaamPrograms,
          .NaamOs {
            .RED {
              &:hover {
                color: $RedColor1;
              }
            }
            div {
              margin-top: $marginTop;
            }
          }
          img {
            height: 70px;
            padding: 0.3rem;
            width: 50px;
            margin-right: 1rem;
            user-select: none;
            object-fit: contain;
          }
          p {
            font-size: $fs-paragraph-1;
          }
        }
      }
    }
  }
  .Overig {
    margin-top: 2rem;
    font-weight: 700;
    width: 100%;
    ::-webkit-scrollbar {
      height: 8px;
    }
    .Card {
      @include CardBackground;

      font-weight: 600;
      letter-spacing: 0.4px;
      margin: 1rem 0;
      width: 100%;
      padding: 0 1.5rem;
      .scroll {
        scroll-snap-type: x mandatory;
        display: flex;
        overflow-x: auto;
        scrollbar-width: thin; /* Firefox */
        .subCard {
          @include subCardBackground;
          box-shadow: $innerShadow;
          margin: 1.4rem 0;
          margin-right: 0.9rem;
          min-width: 300px;
          display: block;
          text-transform: capitalize;
          text-align: center;
        }
      }
    }
  }
}
/* Mobile ----------- */
@media only screen and (min-width: $MobileSize1) {
  .Vaardigheden {
    // background-color: red;
    .Cards {
      grid-gap: 2rem;
      grid-template-columns: repeat(1, 100%);
      grid-template-rows: 1fr;
      grid-template-areas: "frameworks" "programlang" "program";
      .Card {
        padding: 1.5rem 1.2rem;

        &:nth-child(3) {
          .Scroll {
            height: 300px;
          }
        }
        .Scroll {
          .subCard {
            .Frameworks,
            .ProgrammeerTalen {
              .header {
                text-transform: capitalize;
                font-weight: 700;
                font-size: $fs-paragraph-2 * 1.1;
              }
              p:nth-child(3) {
                margin-top: 30px;
                a {
                  color: var(--TxtColor);
                  opacity: 0.6;
                  @include HoverFx(1px, var(--TxtColor), 0);
                }
              }
            }
          }
          p {
            line-height: 16px;
          }
        }
      }
    }
  }
}
/* Tablet ----------- */
@media only screen and (min-width: $TabletSize1) {
  .Vaardigheden {
    // background-color: red;
    .Cards {
      grid-gap: 2rem;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
      grid-template-areas:
        "frameworks programlang"
        "program program";
      .Card {
        padding: 1.5rem 1.2rem;
        &:nth-child(3) {
          .Scroll {
            height: 270px;
          }
        }
        .Scroll {
          .subCard {
            .Frameworks,
            .ProgrammeerTalen {
              .header {
                text-transform: capitalize;
                font-weight: 700;
                font-size: $fs-header / 2.5;
              }
              p:nth-child(3) {
                margin-top: 18px;
                a {
                  color: var(--TxtColor);
                  opacity: 0.6;
                  @include HoverFx(1px, var(--TxtColor), 0);
                }
              }
            }
            img {
              width: 70px;
            }
            p {
              line-height: 24px;
            }
          }
        }
      }
    }
  }
}
/* Laptop ----------- */
@media only screen and (min-width: $Laptop1) {
  .Vaardigheden {
    // background-color: red;
    .Cards {
      grid-gap: 1rem;
      grid-template-columns: 0.8fr 0.8fr 1.12fr;
      grid-template-areas: "frameworks programlang program";
      .Card {
        padding: 1.5rem 1.2rem;
        &:nth-child(3) {
          .Scroll {
            height: 160px;
          }
        }
      }
    }
  }
}
/* Desktops ----------- */
@media only screen and (min-width: $LargeScreen1) {
  .Vaardigheden {
    background-color: transparent;
    .Cards {
      grid-gap: 2rem;

      .Card {
        padding: 1.5rem 1.7rem;
        .Scroll {
          .subCard {
            .Frameworks,
            .ProgrammeerTalen {
              .header {
                text-transform: capitalize;
                font-weight: 700;
                font-size: $fs-header / 2.5;
              }
              p:nth-child(3) {
                margin-top: 18px;
                a {
                  color: var(--TxtColor);
                  opacity: 0.6;
                  @include HoverFx(1px, var(--TxtColor), 0);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
