<template>
  <TheSiteContainer as="main" class="mt-24 max-w-full md:mt-28">
    <h1
      class="text-balance text-left text-4xl font-semibold text-zinc-950 md:text-6xl lg:max-w-[25ch]"
    >
      Latest News and Insights
    </h1>

    <NewsFeaturedNews />
    <div
      aria-label="news container"
      class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3"
    >
      <!-- <NewsNormalNews v-for="n in 4" :key="n" /> -->
    </div>
  </TheSiteContainer>
</template>

<script setup></script>

<style scoped></style>
