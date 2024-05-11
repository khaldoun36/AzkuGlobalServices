<template>
  <TheSiteContainer
    as="section"
    class="flex min-h-[700px] flex-col items-start justify-between gap-8 py-8 lg:py-20"
  >
    <h2 class="text-3xl font-medium text-zinc-950 md:text-5xl">
      Proven Expertise <br />Delivering Results
    </h2>
    <NuxtLink
      :to="projectSlug"
      class="project-background flex aspect-[2/3] max-h-[700px] min-w-full flex-col justify-end gap-6 rounded-md p-8 text-zinc-50 lg:aspect-[18/9]"
    >
      <h3 class="max-w-[45ch] text-2xl font-medium md:text-4xl">
        {{ projectTitle }}
      </h3>
      <div class="flex items-center gap-4 text-lg text-zinc-300">
        <p>
          <time datetime="2020">{{ startDate }}</time> &mdash;
          <time>{{ endDate }}</time>
        </p>
        <span>&bull;</span>
        <p>Project for {{ projectFor }}</p>
      </div>
    </NuxtLink>
  </TheSiteContainer>
</template>

<script setup>
const props = defineProps([
  "projectSlug",
  "projectTitle",
  "projectFor",
  "startDate",
  "endDate",
]);
</script>

<style scoped>
.project-background {
  background: linear-gradient(
      theme(colors.zinc.950 / 60%),
      theme(colors.zinc.950 / 60%)
    ),
    url("https://ik.imagekit.io/1p7sbsx42/projects/Gas%20Compressor%20Station/image002.jpg?tr=w-800,h-1200?updatedAt=1715338295325");
  background-size: cover;
}
</style>
