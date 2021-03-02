<template>
  <header>
    <!-- <header style="margin-bottom: 8rem"> -->
    <div id="nav">
      <div
        class="ToggleTheme"
        @click="toggle"
        style="cursor: pointer"
        :title="`Current theme is ${this.darkMode || 'based on your system'}`"
      >
        <i class="fas fa-adjust"></i>
        <div class="ToggleText">{{ this.systemText }}</div>
      </div>
      <div class="NavLinks" @click="ScrolltoTop">
        <nuxt-link to="/" title="Home Page">Home</nuxt-link>
        <nuxt-link to="/Projects" title="Projects Page">Projects</nuxt-link>
        <nuxt-link to="/Contact" title="Contact Page">Contact</nuxt-link>
        <nuxt-link to="/About" title="About Page">About</nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      darkMode: "", // default value (system preference)
      systemText: "Switch up the mood 👀",
      brightSideTxt: "Switch to the Dark Side of the 🌑",
      DarkSideTxt: "Switch to 👨‍⚖️ Bright Side",
    };
  },
  methods: {
    toggle() {
      const result = window.matchMedia("(prefers-color-scheme: dark)");
      if (this.darkMode == result.matches || this.darkMode == "light") {
        this.darkMode = "dark";
        this.systemText = this.DarkSideTxt;
      } else {
        this.darkMode = "light";
        this.systemText = this.brightSideTxt;
      }
    },
    ScrolltoTop() {
      scrollTo({ scrollTop: 1200 }, "0");
    },
  },
  head() {
    return {
      bodyAttrs: {
        class: this.darkMode,
      },
    };
  },
};
</script>

<style lang="scss">
#nav {
  display: flex;
  // position: fixed;
  // top: 0;
  justify-content: space-between;
  margin: 1rem 1rem 1.5rem;
  padding: 1rem 3rem;
  z-index: 7 !important;
  background-color: var(--BackgroundNavColor);
  .ToggleTheme {
    @include subCardBackground;
    display: flex;
    align-items: center;
    padding: 0.7rem 1rem !important;
    .ToggleText {
      width: max-content;
    }
    .fa-adjust {
      font-size: $fs-header / 1.5;
      margin-right: 0.5em;
      @include ColorTransition;
      transform: rotate(var(--rotate));
    }
    &:hover {
      box-shadow: $innerShadowHover;
      border: solid 3px transparent;
    }
  }
  .NavLinks {
    display: block;
    overflow-x: auto;
    a {
      color: var(--TxtColor);
      font-size: 18px;
      margin: 0 1.5rem;
      text-decoration: none !important;
      outline: none;

      padding: 0.5rem 1rem;
      @include HoverFx(3px, $OrangeColor1, 0);
    }
    .nuxt-link-exact-active {
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -1px;
        width: 100%;
        height: 3px;
        background-color: $OrangeColor1;

        // @include ColorTransition;
        transform-origin: right;
        transform: scaleX(1);
        transition: transform 0.3s cubic-bezier(0, 0.79, 0.79, 0.93);
      }
    }
  }
}
/* Mobile ----------- */
@media only screen and (min-width: $MobileSize1) {
  #nav {
    display: inline-block;
    width: 80%;
    overflow-x: auto;
    align-items: center;
    background-color: transparent;
    white-space: nowrap;
      ::-webkit-scrollbar {
        height: 8px;
      }
    .ToggleTheme {
      position: absolute;
      padding: 0rem 0;
      left: 0;
      // margin: .5em 0;
      margin-top: 0.3em;
      .ToggleText {
        width: 100%;
      }
    }
    .NavLinks {
      height: 10vh;
      width: 100%;
      overflow-x: auto;
      scrollbar-width: thin; /* Firefox */
      display: inline-block;
      position: fixed;
      bottom: 0%;
      margin: auto 0;
      left: 0%;
      background-color: var(--BackgroundNavColor);
      align-items: center;
      z-index: 5 !important;
      padding-top: 3.5vh;
    }
  }
}
/* Tablet ----------- */
@media only screen and (min-width: $TabletSize1) {
  #nav {
    display: flex;
    width: 100%;
    .ToggleTheme {
      position: relative;
      padding: 0;
      .ToggleText {
        width: max-content;
      }
    }
    .NavLinks {
      position: relative;
      width: 100%;
      overflow: hidden;
      overflow-x: auto;
      background-color: transparent;
    }
  }
}
/* Laptops ----------- */
@media only screen and (min-width: $Laptop1) {
  #nav {
    margin: 0rem 1rem 1.5rem;
    padding: 0.8rem 1rem;
    .NavLinks {
      display: flex;
      justify-content: flex-end;
      padding-top: 0;
    }
  }
}
/* Desktop ----------- */
@media only screen and (min-width: $LargeScreen1) {
  #nav {
    margin: 0rem 1rem 1.5rem;
    padding: 0.8rem 3rem;
  }
}
</style>