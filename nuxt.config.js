export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Sander van Ast",
    htmlAttrs: {
      lang: "en"
    },
    bodyAttrs: {
      class: ""
    },
    meta: [
      { "http-equiv": "Content-Type", content: "text/html; charset=UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "I'm a web developer student who wants to develop the web by creating for other people!"
      },
      // Meta tags voor google search results
      { "http-equiv": "content-language", content: "EN" },
      { "http-equiv": "X-UA-Comatible", content: "ie=edge" },
      { name: "robots", content: "all" },
      { name: "renderer", content: "webkit|ie-comp|ie-stand" },
      { name: "theme-color", content: "#ef794d" },
      { name: "msapplication-TileColor", content: "#F9F9F9" },
      {
        name: "keywords",
        content:
          "Portfolio, personal, Sander, webdeveloper, sma, develop, developing, web developer, web, websites"
      },
      // Meta tags voor Facebook search results  (Alleen van facebook)
      { property: "og:title", content: "Personal Portfolio - Sander van Ast" },
      { property: "og:site_name", content: "Portfolio - Sander van Ast" },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      {
        property: "og:description",
        content:
          "I'm a web developer student who wants to develop the web by creating for other people!"
      },
      { property: "og:url", content: "https://www.sandervanast.com/" },
      {
        property: "og:image",
        content: "https://src.sandervanast.com/images/PNG/Main_Banner.png"
      },
      { property: "og:image:width", content: "1201" },
      { property: "og:image:height", content: "631" },
      // Meta tags voor Twitter search results  (Alleen van twitter)
      { name: "twitter:title", content: "Personal Portfolio - Sander van Ast" },
      { name: "twitter:site", content: "https://www.sandervanast.com/" },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:description",
        content:
          "I'm a web developer student who wants to develop the web by creating for other people!"
      },
      {
        name: "twitter:image",
        content: "https://www.sandervanast.com/icon.png"
      }
    ],
    script: [
      { src: "https://firebasestorage.googleapis.com/v0/b/portfolioform-60d02.appspot.com/o/CODE%2Ffontawesome.js?alt=media&token=411c1e9d-5426-4499-8b34-68b1bb157a09" }
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700;900&family=Share+Tech+Mono&display=swap"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [],
  styleResources: {
    scss: ["@/assets/styles/*.scss"]
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    {
      src: "~/plugins/GoogleAnalytics.js",
      mode: "client"
    },
    {
      src: "~/plugins/ga.js",
      mode: "client"
    }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  serverMiddleware: [],
  /*
   ** Nuxt.js modules
   */
  buildModules: [
    [
      "@nuxtjs/dotenv",
      "@nuxtjs/google-analytics",
      {
        id: "UA-174166351-1"
      }
    ]
  ],

  googleAnalytics: {
    id: "UA-174166351-1" // Used as fallback if no runtime config is provided
  },
  modules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/recaptcha",
    'nuxt-animejs',
    ['@nuxtjs/dotenv', { path: './env/' }]
  ],
  router: {},

  loading: {
    continuous: true,
    color: '#FF7B47',
    height: '5px'
  },
  loadingIndicator: {
    name: 'circle',
    color: '#FF7B47',
    background: 'white'
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$anime.set(el, {
        opacity: 0
      })
    },

    enter(el, done) {
      this.$anime({
        targets: el,
        opacity: [0, 1],
        duration: 430,
        easing: 'easeInOutCubic',
        complete: done
      })
    },

    leave(el, done) {
      this.$anime({
        targets: el,
        opacity: [1, 0],
        duration: 430,
        easing: 'easeInOutCubic',
        complete: done
      })
    }
  },

  pwa: {
    icon: {
      iconSrc: "./static/icon.png"
    },
    meta: {
      title: "Portfolio - Sander",
      author: "Sander van Ast"
    },
    manifest: {
      short_name: "SMA",
      name: "Sander van Ast",
      description: "Developing the web by Creating for You.",
      start_url: "/",
      lang: "en",
      theme_color: "#ef794d",
      // shortcuts: [
      //   {
      //     name: "Contact Page",
      //     short_name: "Contact",
      //     descirption: "View my contact information",
      //     url: "/Contact",
      //     icon: [{ src: "/icon.png" }]
      //   },
      //   {
      //     name: "About Page",
      //     short_name: "About",
      //     descirption: "View my information about myself",
      //     url: "/About",
      //     icon: [{ src: "/icon.png" }]
      //   },
      //   {
      //     name: "Projects Page",
      //     short_name: "Projects",
      //     descirption: "View my projects",
      //     url: "/Projects",
      //     icon: [{ src: "/icon.png" }]
      //   }
      // ],
      background_color: "#F9F9F9",
      ogImage: `https://www.sandervanast.com/hi-icon.png`,
      useWebmanifestExtension: false
    }
  },

  recaptcha: {
    hideBadge: true, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: "6LcEJuIZAAAAAA6FGqXZ7QTm3MkvgsuDLjBtSXJP", // Site key for requests
    version: 2, // Version
    size: "normal", // Size: 'compact', 'normal', 'invisible' (v2)
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
