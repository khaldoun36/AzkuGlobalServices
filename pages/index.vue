<template>
  <HomeHeroSection class="md:px-4 lg:px-20" />
  <!-- The min-heights below match the rendered height of each logo row, so
       the page does not shift while the logos load. -->
  <ClientOnly>
    <Vue3Marquee class="min-h-[157px] overflow-clip py-8" :gradient="true">
      <NuxtImg
        v-for="n in 12"
        :key="n"
        :src="`/assets/company_logos/logo-${n}.png`"
        :alt="`${clients[n - 1]} logo`"
        class="mx-8 scale-[1.1]"
        format="avif"
        placeholder
      />
    </Vue3Marquee>
    <template #fallback>
      <!-- this will be rendered on server side -->
      <div class="h-[157px]"></div>
    </template>
  </ClientOnly>
  <ClientOnly>
    <Vue3Marquee
      class="min-h-[104.5px] pb-8"
      direction="reverse"
      :gradient="true"
    >
      <NuxtImg
        v-for="n in 12"
        :key="n"
        :src="`/assets/company_logos/logo-${25 - n}.png`"
        :alt="`${clients[24 - n]} logo`"
        class="mx-8 scale-[1.1]"
        format="avif"
        placeholder
      />
    </Vue3Marquee>
    <template #fallback>
      <!-- this will be rendered on server side -->
      <div class="h-[104.5px]"></div>
    </template>
  </ClientOnly>
  <HomeOurServices id="what-we-do" class="scroll-mt-40 lg:scroll-mt-28" />

  <!-- our project start -->
  <template v-if="list">
    <div v-for="article in list.slice(0, 1)" :key="article.path">
      <HomeOurProjects
        :projectSlug="article.path"
        :projectTitle="article.title"
        :projectImage="article.thumbnail"
        :projectFor="article.projectFor"
        :startDate="article.startDate"
        :endDate="article.endDate"
      />
    </div>
  </template>
  <!-- our project end -->
</template>

<script setup>
import clients from "../data/clients.json";

const { data: list } = await useProjects();
</script>

<style scoped></style>
