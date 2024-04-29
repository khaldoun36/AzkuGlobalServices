<template>
  <NuxtLink :to="cardSlug">
    <article
      class="min-h-full overflow-clip rounded-md bg-zinc-50 hover:underline"
    >
      <NuxtImg
        :src="cardImage"
        format="avif"
        class="aspect-[3/2]"
        width="800"
        height="1200"
        :alt="`image for ${cardTitle}`"
      />
      <div
        aria-label="content"
        class="mt-2 flex flex-col items-start gap-8 p-6"
      >
        <h3 class="text-2xl font-medium text-zinc-950 md:text-4xl">
          {{ cardTitle }}
        </h3>

        <time
          v-if="cardDate"
          :datetime="formattedDate"
          class="text-base font-medium text-zinc-500 md:text-lg"
          >{{ formattedDate }}</time
        >
      </div>
    </article>
  </NuxtLink>
</template>

<script setup>
// Create a new Date object
const date = new Date();

// Define options for formatting
const options = { day: "numeric", month: "long", year: "numeric" };

// Format the date using the toLocaleDateString() method
const formattedDate = date.toLocaleDateString("en-US", options);

// Props
defineProps({
  cardSlug: String,
  cardImage: String,
  cardTitle: String,
  cardDate: String,
});
</script>

<style lang="scss" scoped></style>
