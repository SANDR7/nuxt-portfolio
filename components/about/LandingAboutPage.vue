<template>
  <div class="WelcomeCoverAbout">
    <div class="Cover">
      <div class="leftSide">
        <div class="Gallery">
          <img
            src="https://src.sandervanast.com/images/PNG/Over/AboutImage_F1.png"
            height="416"
            width="400"
            class="F1"
            style="grid-area: F1"
            alt="F1"
          />
          <img
            src="https://src.sandervanast.com/images/PNG/Over/AboutImage_F2.png"
            height="200"
            width="200"
            class="F2"
            style="grid-area: F2"
            alt="F2"
          />
          <img
            src="https://src.sandervanast.com/images/PNG/Over/AboutImage_F3.png"
            height="200"
            width="200"
            class="F3"
            style="grid-area: F3"
            alt="F3"
          />
          <img
            src="https://src.sandervanast.com/images/PNG/Over/AboutImage_F4.png"
            height="200"
            width="616"
            class="F4"
            style="grid-area: F4"
            alt="F4"
          />
          <img
            src="https://src.sandervanast.com/images/PNG/Over/AboutImage_F5.png"
            height="416"
            width="200"
            class="F5"
            style="grid-area: F5"
            alt="F5"
          />
          <img
            src="https://src.sandervanast.com/images/PNG/Over/AboutImage_F6.png"
            height="200"
            width="200"
            class="F6"
            style="grid-area: F6"
            alt="F6"
          />
        </div>
      </div>
      <div class="rightSide">
        <div class="text">
          <div class="WMark">About \ 07{{ date - 2002 }}</div>
          <h1 class="Header">{{ fname }} {{ lname }} {{ llname }}</h1>
          <p>
            I'm a student at the Grafisch Lyceum Rotterdam based in The
            Netherlands as a full-stack developer. My passion for web
            development came partially from a friend of mine that I've met in
            2016. Nowadays I keep learning new skills every day and staying up
            to date with new technologies.
            <br />
            <br />Besides programming, I also listen to music, watching Formula
            1, Lego Technic builder, co-owner of a business, messing with
            graphic designs, working at a hostpital and keep myself active with
            by running, cycling and walking.
          </p>
        </div>
        <div class="Achievements">
          <h2 class="SubHeader">Personal Achievements</h2>
          <div class="Acvied">
            <a
              target="blank"
              href="https://worldskillsnetherlands.nl/skillstalents/zuid-holland-hawks/"
              >Skills Talent</a
            >
            <a
              target="blank"
              href="https://www.nederlandfietsland.nl/lf-routes/eregalerij-ronde-van-nederland?page=6"
              >Tour of Holland</a
            >
            <a target="blank" href="https://www.triathlongo.nl/"
              >Triathlon Herkingen</a
            >
          </div>
        </div>
        <div class="Socials">
          <h2 class="SubHeader">Follow me everywhere you'd like</h2>
          <div class="medias">
            <a
              :title="`LinkedIn ${kind}`"
              href="https://www.linkedin.com/in/sander-van-ast/"
              target="blank"
              >LinkedIn</a
            >
            <a
              :title="`Github ${kind}`"
              href="https://github.com/SANDR7"
              target="blank"
              >GitHub</a
            >
            <a
              :title="`Dribbble ${kind}`"
              href="https://dribbble.com/SANDR7"
              target="blank"
              >Dribbble</a
            >
            <a
              :title="`Facebook ${kind}`"
              href="https://www.facebook.com/profile.php?id=100009821328030"
              target="blank"
              >FaceBook</a
            >
            <a
              :title="`Instagraom ${kind}`"
              href="https://www.instagram.com/sander.ast/"
              target="blank"
              >Instagram</a
            >
            <a
              :title="`Twitter ${kind}`"
              href="https://twitter.com/SANDR__7"
              target="blank"
              >Twitter</a
            >
            <a
              :title="`Discord ${kind}`"
              href="https://discord.com/users/288274960496066560"
              target="blank"
              >Discord</a
            >
            <a
              :title="`Snapchat ${kind}`"
              href="https://www.snapchat.com/add/sandervanast"
              target="blank"
              >SnapChat</a
            >
            <a
              :title="`spotify ${kind}`"
              href="https://open.spotify.com/user/smvanast1?si=AczDHlNzSVuxJUnplmhlXA"
              target="blank"
              >Spotify</a
            >
            <a
              title="e-mail"
              href="mailto:contact@sandervanast.com"
              target="blank"
              >Mail</a
            >
            <a title="phone number" href="tel:0681314693" target="blank"
              >Phone</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fname: "Sander",
      lname: "van",
      llname: "Ast",
      date: new Date().getFullYear(),
      kind: 'profile',
    };
  },
};
</script>

<style lang="scss">
.WelcomeCoverAbout {
  ::-webkit-scrollbar {
    height: 8px;
  }
  .Cover {
    display: flex;
    justify-content: space-around;
    flex-direction: column-reverse;
    .leftSide {
      width: 100%;
      display: grid;
      align-content: center;
      justify-content: center;
      position: relative;
      left: 3%;
      .Gallery {
        display: grid;
        margin: 2rem 0;
        // width: max-content;
        grid-template-areas:
          "F1 F4 F4 F3"
          "F2 F6 F5 F5";
        grid-gap: 1rem;
        img {
          border-radius: $borderRadius12 / 2;
          filter: brightness(var(--ImageFilter));
          object-fit: cover;
          width: 200px;
          height: 200px;
        }
        .F4 {
          width: 400px;
        }
        .F5 {
          width: 400px;
        }
      }
    }
    .rightSide {
      @include CardBackground;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: max-content;
      z-index: 0.5;
      width: 100%;
      background-color: var(--BackGroundCardLevel1);
      .text,
      .Achievements,
      .Socials {
        margin: 1.5rem 2rem;
        .Header {
          margin: 0.5rem 0 0rem;
          font-size: $fs-header;
          font-weight: 700;
          letter-spacing: 1px;
          line-height: 50px;
        }
        .SubHeader {
          &::after {
            content: ":";
            color: $OrangeColor1;
          }
        }
        a {
          color: var(--TxtColor);
          @include HoverFx(1px, var(--TxtColor), 0);
        }
        p {
          font-size: $fs-paragraph-2;
          width: 100%;
        }
      }
      .Socials {
        .medias {
          display: flex;
          overflow-x: auto;
          scrollbar-width: thin; /* Firefox */
          a {
            @include subCardBackground;
            margin: 0.5rem 0;
            padding: 1rem 2rem;
            @include HoverFx(0, transparent, 0);
            width: max-content;
            margin-right: 0.9rem;
            text-transform: uppercase;
            &:hover {
              box-shadow: $innerShadowHover;
            }
          }
        }
      }
      .Achievements {
        display: block;
        .Acvied {
          display: flex;
          overflow-x: auto;
          scrollbar-width: thin; /* Firefox */
          a {
            @include subCardBackground;
            @include HoverFx(0, transparent, 0);
            margin: 0.5rem 0;
            margin-right: 0.9rem;
            min-width: 350px;
            display: block;
            text-transform: capitalize;
            text-align: center;
            &:hover {
              box-shadow: $innerShadowHover;
            }
          }
        }
      }
      .WMark {
        // position: absolute;
        z-index: -5;
        // filter: brightness(4.3);
        opacity: $WmarkOpacity;
        text-transform: uppercase;
        font-size: $fs-paragraph-1;
        font-family: "Share Tech Mono", monospace;
      }
    }
    /* Smartphones (portrait) ----------- */
    @media only screen and (min-width: $MobileSize1) and (orientation: portrait) {
      flex-direction: column-reverse;
      margin: 0 1rem;
      .leftSide {
        .Gallery {
          display: grid;
          margin: 2rem 0;
          width: max-content;
          grid-template-areas:
            "F1 F4"
            "F2 F6"
            "F5 F3";
          grid-gap: 1rem;
          img {
            border-radius: $borderRadius12 / 2;
            filter: brightness(var(--ImageFilter));
            object-fit: cover;
            width: 125px;
            height: 125px;
          }
          .F4 {
            width: 125px;
          }
          .F5 {
            width: 125px;
          }
        }
      }
      .rightSide {
        margin-top: 4rem;
      }
    }
    /* Tablets ----------- */
    @media only screen and (min-width: $TabletSize1) {
      margin: 0 2rem;
    }
    /* Laptops ----------- */
    @media only screen and (min-width: $Laptop1) {
      margin: 0 2rem;
      flex-direction: row;
      .leftSide {
        .Gallery {
          display: grid;
          width: max-content;
          grid-template-areas:
            "F1 F1 F5"
            "F1 F1 F5"
            "F2 F3 F6"
            "F4 F4 F4";
          // grid-gap: 1rem;
          .F1 {
            width: 100%;
            height: 400px;
          }
          .F4 {
            width: 100%;
          }
          .F5 {
            width: 200px;
            height: 400px;
          }
        }
      }
      .rightSide {
        margin: 0 2rem;
        width: 45%;
      }
    }
    @media only screen and (min-width: $LargeScreen1) {
      margin: 0 6rem;
      .leftSide {
        width: 100%;
        .Gallery {
          display: grid;
          width: max-content;
          grid-template-areas:
            "F1 F1 F2 F5"
            "F1 F1 F3 F5"
            "F4 F4 F4 F6";
          grid-gap: 1rem;
          .F1,
          .F5 {
            height: 416px;
          }
        }
      }
      .rightSide {
        margin: 0 2rem;
        width: 48%;
      }
    }
  }
}

// /* Laptops ----------- */
// @media only screen and (min-width: $TabletSize1) and (orientation : portrait) {
//   .WelcomeCoverAbout {
//     .Cover {
//     }
//   }
// }
</style>
