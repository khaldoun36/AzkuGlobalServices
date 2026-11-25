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
      :style="backgroundStyle"
      class="project-background flex aspect-2/3 max-h-[700px] min-w-full flex-col justify-end gap-6 rounded-md p-8 text-zinc-50 lg:aspect-18/9"
    >
      <h3 class="max-w-[45ch] text-2xl font-medium md:text-4xl">
        {{ projectTitle }}
      </h3>
      <div
        v-if="startDate || projectFor"
        class="flex items-center gap-4 text-lg text-zinc-300"
      >
        <p v-if="startDate">
          <time :datetime="startDate">{{ startDate }}</time>
          <template v-if="endDate">
            &mdash;
            <time>{{ endDate }}</time>
          </template>
        </p>
        <span v-if="startDate && projectFor">&bull;</span>
        <p v-if="projectFor">Project for {{ projectFor }}</p>
      </div>
    </NuxtLink>
  </TheSiteContainer>
</template>

<script setup>
const props = defineProps([
  "projectSlug",
  "projectTitle",
  "projectImage",
  "projectFor",
  "startDate",
  "endDate",
]);

// The photo is passed to the stylesheet as a custom property so the dark
// overlay stays defined in CSS.
const backgroundStyle = computed(() =>
  props.projectImage
    ? { "--project-image": `url("${props.projectImage}")` }
    : undefined,
);
</script>

<style scoped>
@reference "../../assets/css/main.css";

.project-background {
  background:
    linear-gradient(
      --alpha(var(--color-zinc-950) / 60%),
      --alpha(var(--color-zinc-950) / 60%)
    ),
    var(--project-image, none);
  background-color: var(--color-zinc-950);
  background-size: cover;
}
</style>
