<template>
  <Head>
      <Meta charset="UTF-8"/>
      <Meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <Title>Azku Global Services</Title>
      <Meta name="description"
          content="World-class engineering resources, a robust procurement network for proprietary equipment, and local construction expertise in Iraq."/>

  </Head>
  <div class="px-4 lg:px-8">
    <TheSiteHeader />
    <NuxtPage />
    <TheSiteFooter />
  </div>
</template>

<script setup>
useHead({

  link: [{ rel: 'icon', type: 'image/png', href: '/AGS_logo.png' }],
})
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
