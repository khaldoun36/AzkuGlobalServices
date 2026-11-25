<template>
  <Head>
    <Meta charset="UTF-8" />
    <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
  <div class="px-4 lg:px-8">
    <TheSiteHeader />
    <main>
      <NuxtPage />
    </main>
    <TheSiteFooter />
  </div>
</template>

<script setup>
const siteName = "Azku Global Services";
const siteDescription =
  "World-class engineering resources, a robust procurement network for proprietary equipment, and local construction expertise in Iraq.";

const route = useRoute();
const { siteUrl } = useRuntimeConfig().public;
const canonicalUrl = computed(
  () => `${siteUrl}${route.path === "/" ? "/" : route.path.replace(/\/$/, "")}`,
);

useHead({
  // Pages set their own title; the home page shows the site name alone.
  titleTemplate: (title) => (title ? `${title} | ${siteName}` : siteName),
  link: [
    { rel: "icon", type: "image/png", href: "/AGS_logo.png" },
    { rel: "canonical", href: canonicalUrl },
  ],
});

// Site-wide defaults; individual pages override title and description.
useSeoMeta({
  description: siteDescription,
  ogSiteName: siteName,
  ogType: "website",
  ogTitle: siteName,
  ogDescription: siteDescription,
  ogUrl: canonicalUrl,
  ogImage: `${siteUrl}/og-image.jpg`,
  twitterCard: "summary_large_image",
});
</script>

<style>
/* Global CSS */
html,
#__nuxt,
body {
  font-family: "IBM Plex Sans", system-ui, sans-serif;
  scroll-behavior: smooth;
}
</style>
