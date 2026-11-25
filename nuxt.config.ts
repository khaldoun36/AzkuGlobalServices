import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
    },
  },

  runtimeConfig: {
    public: {
      // Public address of the site, used for canonical links, the sitemap
      // and social-share images. Override with NUXT_PUBLIC_SITE_URL.
      siteUrl: "https://azkuglobalservices.com",
    },
  },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  // rendering stratgy
  nitro: {
    prerender: {
      // Follow links so every project page is prerendered too.
      crawlLinks: true,
      routes: [
        "/",
        "/projects",
        "/who-we-are",
        "/epc",
        "/field-services",
        "/supply-chain",
        "/contact-us",
        "/sitemap.xml",
      ],
    },
  },
  modules: [
    "vue3-carousel-nuxt",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/icon",
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
