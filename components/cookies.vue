<template>
  <div v-if="isOpen" class="cookie">
    <v-alert prominent type="info" color="#6859de">
      <v-row align="center">
        <v-col class="grow">
          <slot name="message">
            I use cookies to provide the services, analytics and marketing
            purposes. This helps to improve the targetted services.
            Click accept for the best user experience on our app.
          </slot>
        </v-col>
        <v-col class="shrink d-flex justify-end" cols="12" md="3">
          <br />
          <br />
          <a>
            <v-btn class="ma-2" @click="accept">{{ buttonTextAccept }}</v-btn>
          </a>
          <a>
            <v-btn class="ma-2" text @click="deny">{{ buttonTextDeny }}</v-btn>
          </a>
        </v-col>
      </v-row>
    </v-alert>
  </div>
</template>

<script>
export default {
  name: "CookieMessage",
  props: {
    buttonTextAccept: {
      type: String,
      default: "Accept"
    },
    buttonTextDeny: {
      type: String,
      default: "Deny"
    },
    message: {
      type: String,
      default:
        "We use cookies to provide our services and for analytics and marketing. To find out more about our use of cookies, please see our Privacy Policy. By continuing to browse our website, you agree to our use of cookies."
    },
    position: {
      type: String,
      default: "top"
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    containerPosition() {
      return `cookie--${this.position}`;
    }
  },
  created() {
    if (!this.getGDPR() === true) {
      this.isOpen = true;
    }
  },
  methods: {
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem("GDPR:accepted", true);
      }
    },
    accept() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem("GDPR:accepted", true);
      }
    },
    deny() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem("GDPR:accepted", false);
      }
    }
  }
};
</script>

<style lang="scss">
.cookie {
  z-index: 1;
  right: 0;
  position: fixed;
  bottom: 0;
  @include CardBackground;
  width: 22%;
  margin: 2em;
  background-color: #f8f9f9;
  backdrop-filter: blur(40px);
  .ma-2 {
    margin: 0 0.5em;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
