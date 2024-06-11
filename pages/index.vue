<template>
  <HomeHeroSection class="md:px-4 lg:px-20" />
  <ClientOnly fallbackTag="span">
    <Vue3Marquee class="overflow-clip py-8" :gradient="true">
      <NuxtImg
        v-for="n in 12"
        :key="n"
        :src="`/assets/company_logos/logo-${n}.png`"
        class="mx-8 scale-[1.1]"
        format="avif"
        placeholder
      />
    </Vue3Marquee>
    <template #fallback>
      <!-- this will be rendered on server side -->
      <p>Loading logos...</p>
    </template>
  </ClientOnly>
  <ClientOnly fallbackTag="span">
    <Vue3Marquee class="pb-8" direction="reverse" :gradient="true">
      <NuxtImg
        v-for="n in 11"
        :key="n"
        :src="`/assets/company_logos/logo-${24 - n}.png`"
        class="mx-8 scale-[1.1]"
        format="avif"
        placeholder
      />
    </Vue3Marquee>
    <template #fallback>
      <!-- this will be rendered on server side -->
      <p>Loading logos...</p>
    </template>
  </ClientOnly>
  <HomeOurServices id="what-we-do" class="scroll-mt-40 lg:scroll-mt-28" />

  <!-- our project start -->
  <ContentList path="/projects" v-slot="{ list }">
    <div v-for="article in list.slice(0, 1)" :key="article._path">
      <HomeOurProjects
        :projectSlug="`/projects/${slugify(article.title)}`"
        :projectTitle="article.title"
        :projectFor="article.projectFor"
        :startDate="article.startDate"
        :endDate="article.endDate"
      />
    </div>
  </ContentList>
  <!-- our project end -->

<!--  <HomeOurNews />-->
</template>

<script setup></script>

<style scoped></style>
