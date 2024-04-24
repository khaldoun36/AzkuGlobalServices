<template>
  <NuxtLink to="https://tailwindcss.com/docs/z-index">
    <article
      ref="content"
      class="content mt-14 flex aspect-[18/9] h-auto w-full flex-col justify-end gap-6 rounded-md p-8 text-zinc-50 md:mt-16"
    >
      <h3 class="max-w-[35ch] text-2xl font-medium md:text-4xl">
        Design, supply and supervision of installation and commissioning of a
        new Gas Compressor Station at Ajeel Field
      </h3>
      <time class="text-base font-medium text-zinc-200/90 md:text-lg">
        19 April 2024
      </time>
    </article>
  </NuxtLink>
</template>

<script setup>
import heroImage from "../assets/visual/hero_image_2.avif";
const content = ref();
onMounted(() => {
  content.value.style.backgroundImage = `url(${heroImage})`;
  content.value.style.backgroundSize = `cover`;
});
</script>

<style scoped>
.content {
  position: relative;
  overflow: clip;
}

.content::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: theme(colors.zinc.950/40%);
  z-index: 1;
}

.content h3,
.content time {
  z-index: 999;
}
</style>
