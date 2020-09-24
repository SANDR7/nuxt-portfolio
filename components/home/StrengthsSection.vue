<template>
  <div class="Services">
    <div class="Cards">
      <div class="Card" v-for="(Service, id) in Services" :key="id">
        <i class="Icon" :class=Service.icon></i>
        <div class="Content">
          <header class="Header"><h3>{{ Service.Name }}</h3></header>
          <p>{{ Service.Desc }}</p>
        </div>
      </div>
    </div>
    <div class="Werkwijze">
      <div class="Header">Qualities</div>
      <div class="bulletPoints">
        <div class="bulletPoint" v-for="(Werkwijze, id) in Werkwijzes" :key="id">
          <div class="SubHeader">{{ Werkwijze.stapHeader }}
          <p>{{ Werkwijze.desc}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState([
      "Services"
    ]),
  },
  data () {
    return {
      Werkwijzes: [
        {
          stapHeader: "Creative",
          desc: `My inpiration comes from all different places. 
                From simply surfing the web to taking the racing bike for a spin.
          `
        },
        {
          stapHeader: 'Organized',
          desc: `To structure my files and storage space is very important to me, it allows 
                me to quickly navigate through files to save time and effort.
          `
        },
        {
          stapHeader: 'Focused',
          desc: `When I'm starting something such as a project I make sure that I'm fully dedicated to it,
                I'm a person that doesn't get distracted quickly.
          `
        },
        {
          stapHeader: 'Studious',
          desc: `Knowledge is power in my opinion, so the more knowledge I have the more things I could achieve.
                I've this in the back of my mind.
          `
        },
        {
          stapHeader: 'Supportive',
          desc: `Helping other people is one of the things I enjoy doing.
                Giving them what they where looking for; a designer website.
          `
        },
      ]
    }
  }
  
}
</script>

<style lang="scss">
.Services {
    font-size: $fs-paragraph-2;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1300px) {
      flex-direction: column;
    }
    .Cards {
        width: 45%;
        @media screen and (max-width: 1300px) {
          width: 100%;
        }
        .Card {
            @include CardBackground;
            padding: 1rem;
            margin: 4rem 0;
            display: flex;
            align-items: center;
            
            .svg-inline--fa {
                font-size: 80px;
                width: auto;
                margin: 2rem;
                color: $GreenColor1;
            }
            .Content {
                margin: 1rem;
                width: 100%;
                .Header {
                    font-weight: 700;
                    line-height: 40px;
                     font-size: $fs-header / 2;
                    h3 {
                     font-size: $fs-header / 2;
                    }
                }
                p {
                    position: relative;
                    font-size: $fs-paragraph-1;
                    &::after {
                      content: ',,';
                      font-size: $fs-paragraph-1 * 5;
                      font-weight: 900;
                      opacity: $WmarkOpacity / 2;
                      font-family: serif;
                      bottom: 160%;
                      right: 0;
                      position: absolute;
                    }
                }
            }
            
        }
    }
    .Werkwijze {
        width: 45%;
        counter-reset: eenStap;
        @media screen and (max-width: 1300px) {
          width: 100%;
        }
        .Header {
            @include funkyText(2px);
            z-index: -5;
            position: absolute;
            opacity: $WmarkOpacity / 2;
            font-weight: 900;
            letter-spacing: 3px;
            text-transform: uppercase;
            transform-origin: center;
            transform: rotate(90deg) translate(50%, -150%);
            font-size: $fs-header * 2.2;
            h3 {
              font-size: $fs-header * 2.2;
            }
        }
        .bulletPoints {
            .bulletPoint {
                font-size: $fs-header * .9;
                font-weight: 500;
                margin: 1rem 0;
                width: 100%;
                .SubHeader {
                    &::before {
                        counter-increment: eenStap;
                        content: counter(eenStap)'. ';
                        color: $OrangeColor1;
                        font-weight: 700;
                        font-size: $fs-paragraph-2 * 4.4;
                    }
                }
                p {
                  font-size: $fs-paragraph-2;
                  font-weight: 400;
                  width: 80%;
                }
            }
        }
    }
}
/* Tablet ----------- */
  @media only screen and (min-width: $MobileSize1)  {
    .Services {
      .Cards {
        .Card {
          .Icon {
            display: none;
          }
          .Content {
            .Header {
              font-size: $fs-header * .45;
            }
            p {
              &::after {
                content: '';
              }
            }
          }
        }
      }
      .Werkwijze {
        .Header {
          display: none;
        }
        .bulletPoints {
          margin: 0 .4rem;
            .bulletPoint {
                font-size: $fs-header * .6;
                font-weight: 500;
                margin: 1rem 0;
                width: 100%;
                .SubHeader {
                    &::before {
                        counter-increment: eenStap;
                        content: counter(eenStap)'. ';
                        color: $OrangeColor1;
                        font-weight: 700;
                        font-size: $fs-paragraph-2 * 3;
                    }
                }
                p {
                  font-size: $fs-paragraph-1;
                  font-weight: 400;
                  width: 100%;
                }
            }
        }
      }
    }
  }
  /* Tablet ----------- */
  @media only screen and (min-width: $TabletSize1) and (orientation : portrait){
    .Services {
      .Cards {
        .Card {
          .Icon {
            display: block;
          }
          .Content {
            p {
              &::after {
                content: ',,';
              }
            }
          }
        }
      }
      .Werkwijze {
        .Header {
          transform: rotate(90deg) translate(40%, -180%);
          display: block;
        }
        .bulletPoints {
          margin: 0 .4rem;
            .bulletPoint {
                p {
                  font-size: $fs-paragraph-1;
                  font-weight: 400;
                  width: 70%;
                }
            }
        }
      }
    }
  }
/* Tablet ----------- */
  @media only screen and (min-width: $TabletSize1) and (orientation : landscape) {
    .Services {
      .Cards {
        .Card {
          .Icon {
            display: block;
          }
          .Content {
            p {
              &::after {
                content: ',,';
              }
            }
          }
        }
      }
      .Werkwijze {
        .Header {
            transform: rotate(90deg) translate(40%, -290%);
          display: block;
        }
        .bulletPoints {
          margin: 0 .4rem;
            .bulletPoint {
                p {
                  font-size: $fs-paragraph-1;
                  font-weight: 400;
                  width: 70%;
                }
            }
        }
      }
    }
  }
/* Laptops ----------- */
  @media only screen and (min-width: $Laptop1) {
    .Services {
      .Cards {
        .Card {
            margin: 2em 0;
        }
      }
      .Werkwijze {
        .Header {
            transform: rotate(90deg) translate(40%, -80%);
        }
        .bulletPoints {
          margin: 0;
          .bulletPoint {
            font-size: $fs-header * .8;
            margin: .5rem 0;
            p {
              // font-size: $fs-paragraph-2 * .8;
              width: 90%;
            }
          }
        }
      }
    }
  }
/* Desktop ----------- */
  @media only screen and (min-width: $LargeScreen1) {
    .Services {
      .Cards {
        .Card {
            margin: 4em 0;
        }
      }
      .Werkwijze {
        .Header {
            transform: rotate(90deg) translate(48%, -250%);
        }
         .bulletPoints {
            .bulletPoint {
                font-size: $fs-header * .9;
                font-weight: 500;
                margin: 1rem 0;
                width: 100%;
                .SubHeader {
                    &::before {
                        counter-increment: eenStap;
                        content: counter(eenStap)'. ';
                        color: $OrangeColor1;
                        font-weight: 700;
                        font-size: $fs-paragraph-2 * 4;
                    }
                }
                p {
                  font-size: $fs-paragraph-2;
                  font-weight: 400;
                  width: 80%;
                }
            }
        }
      }
    }
  }
  @media only screen and (min-width: 2560px) {
    .Services {
      .Werkwijze {
        .Header {
            transform: rotate(90deg) translate(42%, -320%);
        }
      }
    }
  }
</style>