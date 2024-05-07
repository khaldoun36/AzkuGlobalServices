<template>
  <TheSiteContainer as="main" class="prose mx-auto mt-24 max-w-[85ch] md:mt-28">
    <ContentDoc v-slot="{ doc }">
      <h1
        class="text-balance text-left text-4xl font-semibold text-zinc-950 md:text-6xl lg:max-w-[25ch]"
      >
        {{ doc.title }}
      </h1>
      <Carousel>
        <Slide v-for="(image, index) in doc.visiuals" :key="index">
          <NuxtImg
            :src="image"
            format="avif"
            class="aspect-[3/2] object-contain"
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
    </ContentDoc>
  </TheSiteContainer>
</template>
