<template>
  <TheSiteContainer
    as="main"
    class="mt-24 max-w-full md:mt-28"
    className="px-0 lg:px-20"
  >
    <h1
      class="text-left text-4xl font-semibold text-balance text-zinc-950 md:text-6xl lg:max-w-[25ch]"
    >
      Discover Our Latest Projects
    </h1>
    <div
      aria-label="news container"
      class="mt-8 grid grid-cols-1 grid-rows-1 gap-8 md:grid-cols-1"
    >
      <template v-if="list">
        <div v-for="article in list" :key="article.path">
          <NewsNormalNews
            :cardSlug="`/projects/${slugify(article.title)}`"
            :cardTitle="article.title"
            :cardImage="article.thumbnail"
            :cardSummary="article.summary"
          />
        </div>
      </template>
    </div>
  </TheSiteContainer>
</template>

<script setup>
import slugify from "~/utils/slugify";

const { data: list } = await useAsyncData("projects", () =>
  queryCollection("projects").all(),
);
</script>

<style scoped></style>
