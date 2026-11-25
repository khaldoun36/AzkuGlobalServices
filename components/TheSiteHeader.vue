<template>
  <header class="sticky top-0 right-0 left-0 z-9999 bg-white py-6 xl:px-20">
    <div class="header-layout flex items-center justify-between">
      <NuxtLink to="/">
        <img
          src="/assets/logo.png"
          alt="Azku Global Services"
          class="max-h-10"
        />
      </NuxtLink>
      <nav aria-label="Main" class="hidden items-center gap-10 xl:flex">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.slug"
          :to="link.slug"
          :class="{ 'nav-anchor': link.slug.includes('#') }"
          class="space-x-10 text-sm font-medium text-zinc-500"
          >{{ link.name }}</NuxtLink
        >
      </nav>
      <TheSiteButton intent="primary" to="/contact-us">
        Contact us
        <Icon name="tabler:arrow-up-right" class="text-zinc-50" size="18px" />
      </TheSiteButton>
    </div>
    <nav
      aria-label="Main"
      class="flex snap-x items-center justify-between gap-8 overflow-x-auto border-b border-zinc-100 py-6 xl:hidden"
    >
      <NuxtLink
        v-for="link in navLinks"
        :key="link.slug"
        :to="link.slug"
        :class="{ 'nav-anchor': link.slug.includes('#') }"
        class="snap-start space-x-10 text-base font-medium whitespace-nowrap text-zinc-500"
        >{{ link.name }}</NuxtLink
      >
    </nav>
  </header>
</template>

<script setup>
import navLinks from "../data/navLinks.json";
</script>

<style scoped>
@reference "../assets/css/main.css";

/* Links to a section of a page (#...) count as "active" whenever their page
   is open, so only links to whole pages are highlighted. */
.router-link-active:not(.nav-anchor),
.router-link-exact-active:not(.nav-anchor) {
  color: var(--color-zinc-950);
}

.site-btn {
  color: var(--color-zinc-50) !important;
}
</style>
