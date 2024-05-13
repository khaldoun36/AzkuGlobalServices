<template>
  <header class="sticky left-0 right-0 top-0 z-[9999] bg-white py-6 xl:px-20">
    <div class="header-layout flex items-center justify-between">
      <NuxtLink to="/">
        <img src="/assets/logo.png" class="max-h-10" />
      </NuxtLink>
      <nav class="hidden items-center gap-10 xl:flex">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.slug"
          :to="link.slug"
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
      class="flex snap-x items-center justify-between gap-8 overflow-x-auto border-b border-zinc-100 py-6 xl:hidden"
    >
      <NuxtLink
        v-for="link in navLinks"
        :key="link.slug"
        :to="link.slug"
        class="snap-start space-x-10 whitespace-nowrap text-base font-medium text-zinc-500"
        >{{ link.name }}</NuxtLink
      >
    </nav>
  </header>
</template>

<script setup>
import navLinks from "../../data/navLinks.json";
</script>

<style scoped>
.router-link-active,
.router-link-exact-active {
  color: theme(colors.zinc.950);
}

.site-btn {
  color: theme(colors.zinc.50) !important;
}

.router-link-active:nth-child(3),
.router-link-exact-active:nth-child(3) {
  color: theme(colors.zinc.500);
}
.router-link-active:last-of-type,
.router-link-exact-active:last-of-type {
  color: theme(colors.zinc.500);
}
</style>
