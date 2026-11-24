<template>
  <TheSiteContainer
    as="main"
    class="prose mx-auto mt-24 max-w-[100ch] md:mt-28"
  >
    <template v-if="doc">
      <h1
        class="text-left text-4xl font-semibold text-balance text-zinc-950 md:text-6xl lg:max-w-[25ch]"
      >
        {{ doc.title }}
      </h1>
      <Carousel>
        <Slide v-for="(image, index) in doc.visiuals" :key="index">
          <NuxtImg
            :src="image"
            format="avif"
            class="aspect-3/2 object-contain"
            width="800"
            height="1200"
            :alt="`Project image ${index}`"
          />
        </Slide>

        <template #addons>
          <Pagination
            style="
              --vc-pgn-border-radius: 999px;
              --vc-pgn-active-color: #09090b;
              --vc-pgn-background-color: #d4d4d8;
              --vc-pgn-width: 32px;
            "
          />
        </template>
      </Carousel>
      <ContentRenderer :value="doc" />
    </template>
  </TheSiteContainer>
</template>

<script setup>
const route = useRoute();

const { data: doc } = await useAsyncData(route.path, () =>
  queryCollection("projects").path(route.path).first(),
);

useSeoMeta({
  title: () => doc.value?.title,
  ogTitle: () => doc.value?.title,
  description: () => doc.value?.description,
  ogDescription: () => doc.value?.description,
});
</script>
