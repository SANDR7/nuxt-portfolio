<template>
  <header>
    <!-- <header style="margin-bottom: 8rem"> -->
    <div id="nav">
      <div
        class="ToggleTheme"
        @click="toggle"
        style="cursor: pointer"
        :title="`Current theme is ${this.darkMode}`"
      >
        <i
          class="fas fa-adjust"
          :style="
            this.isToggled
              ? 'transform: rotate(180deg)'
              : 'transform: rotate(0deg)'
          "
        ></i>
        <div class="ToggleText">
          Change theme to {{ this.isToggled ? "light" : "dark" }}
        </div>
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
      isToggled: false,
    };
  },
  methods: {
    toggle() {
      const result =  window.matchMedia("(prefers-color-scheme: dark)")
        if (this.darkMode == result.matches || this.darkMode == "light") {
          this.darkMode = "dark";
          this.isToggled = true;
        } else {
          this.darkMode = "light";
          this.isToggled = false;
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
  // background-color: var(--BackgroundNavColor);
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
    }
  }
  .NavLinks {
    display: block;
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
    .ToggleTheme {
      position: absolute;
      padding: 0rem 0;
    }
    .NavLinks {
      height: 10vh;
      width: 100%;
      overflow-x: auto;
      scrollbar-width: thin; /* Firefox */
      display: flex;
      position: fixed;
      bottom: 0%;
      left: 0%;
      background-color: var(--BackgroundNavColor);
      align-items: center;
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
    }
    .NavLinks {
      position: relative;
      justify-content: flex-end;
      overflow: hidden;
      background-color: transparent;
    }
  }
}
/* Laptops ----------- */
@media only screen and (min-width: $Laptop1) {
  #nav {
    margin: 0rem 1rem 1.5rem;
    padding: 0.8rem 1rem;
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