<template>
  <div class="WelcomeCoverHome">
    <div class="Cover">
      <div class="leftSide">
        <div class="text">
          <div class="WMark">
            Portfolio — Web developer <br />
            0{{ countProjects }} \ 0{{ countExercises }}
          </div>
          <h2 class="Header">Developing the web by Creating for You.</h2>
          <p>
            Hey there! Welcome to my personal portfolio, I'm {{ fname }}
            {{ lname }} {{ llname }} and here you'll find my collection of
            projects and skills that I've collected over the years. I'm
            currently a student at the
            <a href="https://www.glr.nl/" target="blank" title="School name"
              >Grafisch Lyceum Rotterdam</a
            >
            based in The Netherlands as a
            <span class="Accent">full-stack developer</span>.
            <br />
            <br />I'm also a graphic designer,
            <span class="Accent">UI & UX designer</span>, Lego technic builder,
            <a href="https://en.wikipedia.org/wiki/Speedcubing" target="blank"
              >speedcuber</a
            >, computer enthusiast and a tech savvy.
          </p>
        </div>
        <div class="CtA">
          <nuxt-link class="CtAButton" to="/Projects"
            >View my Projects</nuxt-link
          >
          <span>Searching for a Dutch internship</span>
          <span
            >NL&nbsp;•&nbsp;<a
              href="https://src.sandervanast.com/CV.pdf"
              target="blank"
              class="Download"
              >Donwload my Resume</a
            ></span
          >
        </div>
      </div>
      <div class="rightSide">
        <h1 class="name">
          <span>{{ fname }}</span>
          <span>{{ lname }}</span>
          <span>{{ llname }}</span>
        </h1>
        <div class="Hero">
          <img
            src="https://src.sandervanast.com/images/PNG/Sander.png"
            width="460"
            height="520"
            alt="Sander"
          />
          <div class="ide">SMA ⁄ 07{{ date - 2002 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projects from "~~/projects";
import exercises from "~~/SomeExercises";
export default {
  data() {
    return {
      fname: "Sander",
      lname: "van",
      llname: "Ast",
      date: new Date().getFullYear(),
      projects,
      exercises,
      countProjects: projects.length,
      countExercises: exercises.length,
    };
  },
};
</script>

<style lang="scss">
.WelcomeCoverHome {
  @include BackgroundImage(
    "https://src.sandervanast.com/images/PNG/BackgroundImage0.png"
  );
  &::after {
    height: 125%;
  }
  background-size: cover;
  .Cover {
    margin: 0 6rem;
    display: flex;
    justify-content: space-between;
    .leftSide {
      @include CardBackground;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: max-content;
      z-index: 0.5;
      flex: 1;
      transform: translate(0%, 8%);
      background-color: var(--BackGroundCardLevel1);
      .text {
        margin: 0 2rem;
        .Header {
          margin: 1.5rem 0 0rem;
          font-size: $fs-paragraph-2 * 1.5;
          font-weight: 700;
          letter-spacing: 1px;
        }
        a {
          color: var(--TxtColor);
          @include HoverFx(1px, var(--TxtColor), 0);
        }
        p {
          font-size: $fs-paragraph-1;
          width: 100%;
          .Accent {
            filter: contrast(900%);
          }
        }
      }
      .CtA {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: 0 2rem;
        .CtAButton,
        a {
          margin: 1rem 0;
          text-align: center;
          @include HoverFx(0, transparent, 0);
        }
        .CtAButton {
          @include ButtonStyle;
        }
        .Download {
          color: var(--TxtColor);
          filter: brightness(3);
          text-transform: uppercase;
          width: max-content;
          @include HoverFx(2px, var(--TxtColor), 0);
          &:hover {
            filter: brightness(1);
          }
        }
      }
      .WMark {
        position: absolute;
        z-index: -5;
        top: 1.5em;
        // filter: brightness(4.3);
        opacity: $WmarkOpacity * 3;
        text-transform: uppercase;
        font-size: $fs-paragraph-1;
        font-family: "Share Tech Mono", monospace;
      }
    }
    .rightSide {
      flex: 0;
      display: none;
      .name {
        z-index: -1;
        display: grid;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 150px;
        text-transform: uppercase;
        font-weight: 700;
        line-height: 95px;
        letter-spacing: 8px;

        user-select: none;
        opacity: $WmarkOpacity * 3.5;

        @include funkyText(2px);
        -webkit-text-stroke: 2px $OrangeColor1;
        $left: 58%;
        span:nth-child(2) {
          transform: translateX($left);
          max-width: 300px;
        }
        span:nth-child(3) {
          transform: translateX($left * 1.2);
          max-width: 300px;
        }
      }
      .Hero {
        height: 55%;
        display: none;
        justify-content: space-between;
        user-select: none;
        img {
          transform: translate(-2%, -22%);
          height: 30vw;
          max-height: 530px;
          width: auto;
        }
        .ide {
          display: flex;
          align-items: flex-end;
          font-weight: 300;
          font-size: $fs-header;
          user-select: none;
          text-align: right;
          // filter: brightness(4.7);
          opacity: $WmarkOpacity;
          font-family: "Share Tech Mono", monospace;
        }
      }
    }
  }
}
/* Smartphones (portrait) ----------- */
@media only screen and (min-width: $MobileSize1) and (orientation: portrait) {
  .WelcomeCoverHome {
    .Cover {
      flex-direction: column;
      margin: 0 1rem;
      .leftSide {
        flex: 0.9;
        height: max-content;
        transform: translateY(7%);
        padding: 2rem 0;
        .text {
          margin: 0 2rem;
          .Header {
            margin: 1.5rem 0 0.2rem;
            line-height: 30px;
            font-size: $fs-paragraph-2 * 1.5;
          }
          p {
            font-size: $fs-paragraph-1 * 0.9;
            width: 100%;
          }
        }
        .CtA {
          width: 85%;
          .CtAButton {
            font-size: $fs-paragraph-2 * 1.1;
          }
        }
      }
      .rightSide {
        height: 730px;
        display: none;
      }
    }
  }
}
@media only screen and (max-width: $MobileSize1) {
  .WelcomeCoverHome {
    .Cover {
      flex-direction: column;
      margin: 0 1rem;
      .leftSide {
        flex: 0.9;
        height: max-content;
        transform: translateY(7%);
        padding: 2rem 0;
        .text {
          margin: 0 2rem;
          .Header {
            margin: 1.5rem 0 0.2rem;
            line-height: 30px;
            font-size: $fs-paragraph-2 * 1.5;
          }
          p {
            font-size: $fs-paragraph-1 * 0.9;
            width: 100%;
          }
        }
        .CtA {
          width: 80%;
        }
      }
      .rightSide {
        height: 730px;
        display: none;
      }
    }
  }
}
/* Laptops ----------- */
@media only screen and (min-width: $TabletSize1) and (orientation: portrait) {
  .WelcomeCoverHome {
    .Cover {
      .leftSide {
        flex: 1.8;
      }
      .rightSide {
        flex: 0.3;

        .Hero {
          img {
            display: none;
          }
          .ide {
            transform: translate(70vw, 170%) !important;
          }
        }
      }
    }
  }
}
/* Tablet ----------- */
@media only screen and (min-width: $TabletSize1) {
  .WelcomeCoverHome {
    .Cover {
      margin: 0 2rem;
      .leftSide {
        flex: 1.3;
        height: max-content;
        transform: translateY(7%);
        padding: 2rem 0;
        .text {
          .Header {
            margin: 1.5rem 0 0.2rem;
            line-height: 30px;
            font-size: $fs-header * 0.55;
          }
          p {
            font-size: $fs-paragraph-1 * 0.9;
            width: 100%;
          }
        }
        .CtA {
          width: 65%;
          .CtAButton {
            font-size: $fs-header * 0.46;
          }
        }
      }
      .rightSide {
        display: block;
        height: 530px;
        flex: 0.7;
        .name {
          display: none;
        }
        .Hero {
          height: 100%;
          display: flex;
          img {
            height: 36vw;
            transform: translate(-5%, 0);
          }
          .ide {
            font-size: $fs-header * 0.6;
            width: max-content;
            transform: translate(0, 3%);
          }
        }
      }
    }
  }
}
/* Tablet ----------- */
@media only screen and (min-width: $TabletSize1) and (orientation: portrait) {
  .WelcomeCoverHome {
    .Cover {
      .rightSide {
        .Hero {
          height: 90%;
          display: none;
        }
      }
    }
  }
}
/* Laptops ----------- */
@media only screen and (min-width: $Laptop1) {
  .WelcomeCoverHome {
    &::after {
      height: 117%;
    }
    .Cover {
      margin: 0 2rem;
      .leftSide {
        flex: 0.55;
        transform: translateX(0);
        padding: 0 1rem;
        height: 550px;
        transform: translateY(4%);
        .text {
          .Header {
            font-size: $fs-header * 0.7;
            font-weight: 700;
            line-height: 40px;
            letter-spacing: 1px;
            width: 85%;
          }
          a {
            color: var(--TxtColor);
            @include HoverFx(1px, var(--TxtColor), 0);
          }
          p {
            font-size: $fs-paragraph-1;
            width: 100%;
          }
        }
        .CtA {
          width: 60%;
        }
      }
      .rightSide {
        display: block;
        height: 600px;
        .name {
          display: grid;
          font-size: 140px;
          line-height: 87px;
          transform: translateX(0);
          $left: 109%;
          span:nth-child(2) {
            transform: translateX($left);
          }
          span:nth-child(3) {
            transform: translateX($left * 1.14);
          }
        }
        .Hero {
          height: 55%;
          img {
            height: 30vw;
            transform: translate(-3%, -28%);
          }
          .ide {
            font-size: $fs-header;
          }
        }
      }
    }
  }
}
/* Desktop ----------- */
@media only screen and (min-width: $LargeScreen1) {
  .WelcomeCoverHome {
    &::after {
      height: 125%;
    }
    .Cover {
      margin: 0 6rem;
      .leftSide {
        transform: translateY(17%);
        .text {
          .Header {
            font-size: $fs-header * 0.55;
            width: 100%;
          }
          p {
            font-size: $fs-paragraph-2;
            width: 100%;
          }
        }
        .CtA {
          width: 50%;
        }
      }
      .rightSide {
        height: 100%;
        .name {
          font-size: 152px;
          line-height: 95px;
          $left: 130%;
          transform: translate(3%, 8%);
          span:nth-child(2) {
            transform: translateX($left);
          }
          span:nth-child(3) {
            transform: translateX($left * 1.2);
          }
        }
        .Hero {
          height: 55%;
          img {
            height: 30vw;
            transform: translate(-10%, -20%);
          }
          .ide {
            font-size: $fs-header;
            transform: translate(0%, -22%);
          }
        }
      }
    }
  }
}
</style>