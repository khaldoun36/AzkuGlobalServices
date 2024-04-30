// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
