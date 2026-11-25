<template>
  <TheSiteContainer
    as="div"
    class="mt-24 max-w-full md:mt-28"
    className="px-0 lg:px-20"
  >
    <h1
      class="text-left text-4xl font-semibold text-balance text-zinc-950 md:text-6xl lg:max-w-[25ch]"
    >
      Discover Our Latest Projects
    </h1>
    <div class="mt-8 grid grid-cols-1 grid-rows-1 gap-8 md:grid-cols-1">
      <template v-if="list">
        <div v-for="(article, index) in list" :key="article.path">
          <NewsNormalNews
            :cardSlug="article.path"
            :cardTitle="article.title"
            :cardImage="article.thumbnail"
            :cardSummary="article.summary"
            :cardLoading="index < 2 ? 'eager' : 'lazy'"
          />
        </div>
      </template>
    </div>
  </TheSiteContainer>
</template>

<script setup>
const { data: list } = await useProjects();

const description =
  "Selected oil and gas projects delivered by Azku Global Services, from gas compressor stations to corrosion monitoring and commissioning services.";

useSeoMeta({
  title: "Projects",
  ogTitle: "Projects",
  description,
  ogDescription: description,
});
</script>

<style scoped></style>
