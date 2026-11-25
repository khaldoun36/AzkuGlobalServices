<template>
  <TheSiteContainer
    as="section"
    class="flex flex-col items-start justify-between bg-zinc-50 py-8 lg:py-20"
  >
    <h2 class="max-w-[45ch] text-3xl font-medium text-zinc-950 md:text-5xl">
      Sustainable solutions, <br />personalized for you
    </h2>
    <!-- Our services Carousel -->
    <Carousel
      class="max-w-full pt-8"
      :wrap-around="true"
      :autoplay="5000"
      :pauseAutoplayOnHover="true"
      :breakpoints="breakpoints"
    >
      <Slide v-for="(service, index) in services" :key="index">
        <NuxtLink :to="service.slug" class="group block">
          <div
            class="carousel__item mx-1 mb-8 flex h-[calc(100%-2rem)] flex-col items-start gap-2 overflow-clip rounded-md bg-white p-8 shadow-sm md:mx-8"
          >
            <h3
              class="text-left text-lg font-medium text-zinc-950 capitalize group-hover:underline"
            >
              {{ service.serviceName }}
            </h3>
            <p class="text-justify text-sm text-zinc-500 md:min-h-[144px]">
              {{ service.description }}
            </p>
            <div
              class="card-visiuals mt-auto grid grid-cols-1 gap-8 overflow-clip pt-6"
            >
              <NuxtImg
                :src="service.image"
                :alt="`${service.serviceName} illustrative image`"
                format="avif"
                loading="lazy"
                width="1200"
                height="600"
                class="aspect-18/9 h-auto w-full overflow-clip rounded-sm object-cover shadow-md"
              />
            </div>
          </div>
        </NuxtLink>
      </Slide>

      <template #addons>
        <!-- <Navigation /> -->
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
  </TheSiteContainer>
</template>

<!-- <button type="button" class="carousel__pagination-button carousel__pagination-button--active" aria-label="Navigate to slide 1"></button> -->
<script setup>
// Services
import services from "../../data/services.json";

import "vue3-carousel/dist/carousel.css";
const breakpoints = ref({
  // 700px and up
  300: {
    itemsToShow: 1,
  },
  700: {
    itemsToShow: 1.35,
  },
  1024: {
    itemsToShow: 1.95,
  },
});
</script>

<style scoped>
/* Stretch every card to the height of the tallest one. */
.carousel :deep(.carousel__slide) {
  align-items: stretch;
}

@media screen and (min-width: 700px) {
  .carousel {
    -webkit-mask: linear-gradient(
      90deg,
      transparent,
      hsl(0 0% 98%) 20%,
      hsl(0 0% 98%) 80%,
      transparent
    );
  }
}
</style>
