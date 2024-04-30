// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // rendering stratgy
  nitro: {
    prerender: {
      routes: [
        "/",
        "/projects",
        "/who-we-are",
        "news-and-insights",
        "contact-us",
        "compliance-and-safety",
      ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "nuxt-icon",
    "@vueuse/nuxt",
    "vue3-carousel-nuxt",
    "@nuxt/content",
  ],

  // google fonts config
  googleFonts: {
    families: {
      "IBM Plex Sans": {
        wght: [400, 500, 600, 700],
      },
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
    preload: true,
    download: true,
  },
});
