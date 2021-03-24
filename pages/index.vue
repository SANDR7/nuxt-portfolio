<template>
  <div class="home">
    <landingPage />
    <div class="Sections">
      <!-- Projecten -->
      <div class="Section projects">
        <h2>Projects</h2>
        <div class="Background">
          <ProjectenSection />
        </div>
      </div>
      <!-- Vaardigheden -->
      <div class="Section skills">
        <h2>My Skills</h2>
        <div class="Background">
          <VaardighedenSection />
        </div>
      </div>
      <!-- Strengths -->
      <div class="Section strengths">
        <h2>Strengths</h2>
        <div class="Background">
          <StrengthsSection />
        </div>
      </div>
      <!-- Contact -->
      <div class="Section contact">
        <h2>Contact</h2>
        <div class="Background">
          <ContactSection />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import landingPage from "~/components/home/landingPage";
import ProjectenSection from "~/components/home/ProjectenSection";
import VaardighedenSection from "~/components/home/VaardighedenSection";
import StrengthsSection from "~/components/home/StrengthsSection";
import ContactSection from "~/components/home/ContactSection";
export default {
  components: {
    landingPage,
    ProjectenSection,
    VaardighedenSection,
    StrengthsSection,
    ContactSection
  },
  head() {
    return {
      titleTemplate: "Personal Portfolio - %s"
    };
  }
};
</script>

<style lang="scss">
//
// Basic styling voor heel de website
//
* {
  margin: 0;
  padding: 0;
  font-family: "Rubik", sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  -webkit-font-smoothing: antialiased;
  color: var(--TxtColor);
  background-color: var(--BackgroundColor);
  overflow-x: hidden;
  @include ColorTransition;
  margin: 0 auto;
  max-width: 2160px;
  @media only screen and (min-width: $TabletSize1) and (orientation: portrait) {
    overflow-x: hidden;
  }
  @media only screen and (min-width: $TabletSize1) and (orientation: landscape) {
    overflow-x: hidden;
  }
}

li {
  list-style-type: none;
}
.Accent {
  color: $OrangeColor1;
  filter: contrast(180%);
}
a {
  @include HoverFx(2px, $LinkColor1, 0);
  text-decoration: none;
  color: $LinkColor1;
  @include ColorTransition;
  &:hover {
    color: var(--TxtColor);
  }
}
p {
  line-height: 26px;
  filter: contrast(60%);
}
// Scrollbar chrome
::-webkit-scrollbar-track {
  background: Color(backgroundLight);
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::selection {
  color: $OrangeColor1;
  background-color: #e6f4f1;
}
.ORANGE,
.RED,
.GREEN,
.PURPLE {
  &:hover {
    color: var(--TxtColor);
  }
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
.PURPLE {
  color: $PurpleColor1;
}
.Sections {
  margin: 4rem 0;
  width: 100%;
  height: 100%;
  // background-color: var(--BackgroundSections);
  // background-color: lightblue;
  .projects {
    @include BackgroundImage(
      "https://src.sandervanast.com/images/PNG/BackgroundImage1.png"
    );
  }
  .skills {
    @include BackgroundImage(
      "https://src.sandervanast.com/images/PNG/BackgroundImage2.png"
    );
  }
  .strengths {
    @include BackgroundImage(
      "https://src.sandervanast.com/images/PNG/BackgroundImage3.png"
    );
  }
  .Section {
    width: 100%;
    height: 100%;
    h2,
    h4 {
      @include ColorTransition;
      font-size: $fs-header * 0.9;
      transform: translateY(34%);
      margin: 0 2rem;
      -webkit-text-fill-color: var(--TxtColor);
      &::after {
        @include ColorTransition;
        content: ";";
        -webkit-text-fill-color: $OrangeColor1;
        color: $OrangeColor1;
        -webkit-text-fill-color: $OrangeColor1;
      }
    }
    .Background {
      padding: 2.5rem 1rem;
    }

    /* Smartphones (portrait) ----------- */
    @media only screen and (max-width: $MobileSize1) {
      h2,
      h4 {
        @include ColorTransition;
        font-size: $fs-header * 0.7;
        margin: 0 1rem;
      }
      .Background {
        padding: 2.5rem 0.5rem;
      }
    }
    /* iPads (portrait and landscape) ----------- */
    @media only screen and (min-device-width: $TabletSize1) {
      h2,
      h4 {
        @include ColorTransition;
        font-size: $fs-header * 1;
        transform: translateY(34%);
        margin: 0 4rem;
      }
      .Background {
        padding: 2.5rem 4rem;
      }
    }
    /* iPads (landscape) ----------- */
    @media only screen and (min-device-width: $TabletSize1) and (max-device-width: $TabletSize2) and (orientation: landscape) {
      h2,
      h4 {
        @include ColorTransition;
        font-size: $fs-header * 1;
        margin: 0 2rem;
      }
      .Background {
        padding: 2.5rem 2rem;
      }
    }
    /* iPads (portrait) ----------- */
    @media only screen and (min-device-width: $TabletSize1) and (max-device-width: $TabletSize2) and (orientation: portrait) {
      h2,
      h4 {
        @include ColorTransition;
        font-size: $fs-header * 1;
        margin: 0 2rem;
      }
      .Background {
        padding: 2.5rem 2rem;
      }
    }
    /* Laptops ----------- */
    @media only screen and (min-width: $Laptop1) {
      h2,
      h4 {
        @include ColorTransition;
        font-size: $fs-header * 1.2;
        letter-spacing: 2px;
        // text-align: center;
        font-weight: 700;
        margin: 0 2rem;
        transform: translateY(34%);
        padding: 1rem 0;

        @include funkyText(2px);
        opacity: $WmarkOpacity;
        &::after {
          @include ColorTransition;
          content: ";";
    -webkit-text-fill-color: transparent;
        }
      }
      .Background {
        padding: 2.5rem 2rem;
      }
    }
    /* Desktops ----------- */
    @media only screen and (min-width: $LargeScreen1) {
      margin: 2rem 0;
      h2,
      h4 {
        @include ColorTransition;
        text-transform: capitalize;
        font-size: $fs-header * 1.3;
        letter-spacing: 2px;
        // text-align: center;
        font-weight: 700;
        margin: 0 4rem;
        transform: translateY(34%);
        padding: 1rem 0;

        @include funkyText(2px);
        opacity: $WmarkOpacity;
        &::after {
          content: ";";
        }
      }

      .Background {
        border-radius: $borderRadius8;
        padding: 2.5rem 6rem;
        height: max-content;
      }
    }
  }
}
.Section:hover > h2,
.Section:hover > h4 {
  @include ColorTransition;
  -webkit-text-stroke: transparent;
  -webkit-text-fill-color: var(--TxtColor);
  opacity: $WmarkOpacity * 5.8;
  &::after {
    @include ColorTransition;
    content: ";";
    -webkit-text-stroke: transparent;
    -webkit-text-fill-color: $OrangeColor1;
  }
}
</style>
