<template>
  <TheSiteContainer
    as="main"
    class="mt-24 max-w-full md:mt-28"
    className="px-0 lg:px-20"
  >
    <h1
      class="text-balance text-left text-4xl font-semibold text-zinc-950 md:text-6xl lg:max-w-[25ch]"
    >
      Discover Our Latest Projects
    </h1>
    <div
      aria-label="news container"
      class="mt-8 grid grid-cols-1 grid-rows-1 gap-8 md:grid-cols-1"
    >
      <ContentList path="/projects" v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
          <NewsNormalNews
            :cardSlug="`/projects/${slugify(article.title)}`"
            :cardTitle="article.title"
            :cardImage="article.thumbnail"
          />
        </div>
      </ContentList>
    </div>
  </TheSiteContainer>
</template>

<script setup>
import slugify from "~/utils/slugify";
</script>

<style scoped></style>
