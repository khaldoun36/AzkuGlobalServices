<template>
  <TheSiteContainer
    as="footer"
    class="mt-8 flex flex-col items-start justify-between gap-8 bg-zinc-50 py-8 md:mt-20 md:flex-row lg:py-20"
  >
    <NuxtLink to="/">
      <img src="/assets/logo.png" class="max-h-10" />
    </NuxtLink>
    <div aria-label="Pages">
      <h3 class="text-sm font-semibold text-zinc-950">Pages</h3>
      <nav class="flex flex-col items-start gap-4">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.slug"
          :to="link.slug"
          class="space-x-10 text-sm font-medium text-zinc-500 first:pt-4 hover:underline"
          >{{ link.name }}</NuxtLink
        >
      </nav>
    </div>
    <div aria-label="Office Locations">
      <h3 class="text-sm font-semibold text-zinc-950">Office Locations</h3>
      <div class="flex flex-col items-start gap-4">
        <p
          v-for="(office, index) in officeLocations"
          :key="index"
          class="space-x-10 text-sm font-medium text-zinc-500 first:pt-4"
        >
          {{ office.location }}
        </p>
      </div>
    </div>
    <div aria-label="Contact info">
      <h3 class="text-sm font-semibold text-zinc-950">Contact info</h3>
      <div class="flex flex-col items-start gap-4">
        <NuxtLink
          class="space-x-10 text-sm font-medium text-zinc-500 first:pt-4 hover:underline"
          to="mailto:Info@azkuglobalservices.com"
          target="_blank"
          rel="noopener"
        >
          Info@azkuglobalservices.com
        </NuxtLink>
        <!-- tel: -->
        <NuxtLink
          class="space-x-10 text-sm font-medium text-zinc-500 first:pt-4 hover:underline"
          to="tel:+97144544310"
          target="_blank"
          rel="noopener"
        >
          +971 4 4544310
        </NuxtLink>
      </div>
    </div>
  </TheSiteContainer>

  <p class="my-8 text-center text-sm font-medium text-zinc-500">
    &copy; Copyright {{ new Date().getFullYear() }} Azku Global Services. All
    Rights Reserved.
  </p>
</template>

<script setup>
import navLinks from "../../data/navLinks.json";
import officeLocations from "../../data/officeLocations.json";
</script>

<style scoped></style>
