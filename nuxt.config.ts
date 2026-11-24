import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  // rendering stratgy
  nitro: {
    prerender: {
      routes: [
        "/",
        "/projects",
        "/who-we-are",
        "/epc",
        "/field-services",
        "/supply-chain",
        "news-and-insights",
        "contact-us",
        "compliance-and-safety",
      ],
    },
  },
  modules: [
    "vue3-carousel-nuxt",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "@nuxt/content",
  ],

  // google fonts config
  fonts: {
    families: [
      {
        name: "IBM Plex Sans",
        provider: "google",
        weights: [400, 500, 600, 700],
        styles: ["normal"],
        display: "swap",
        preload: true,
      },
    ],
  },

  icon: {
    mode: "svg",
  },

  content: {
    experimental: {
      sqliteConnector: "native",
    },
  },
});
