<template>
  <NuxtLink :to="cardSlug">
    <article
      class="flex min-h-full flex-col items-center gap-8 overflow-clip rounded-md bg-zinc-50 md:flex-row"
    >
      <NuxtImg
        :src="cardImage"
        format="avif"
        class="aspect-[1.66] object-cover md:max-w-[40%]"
        width="800"
        height="1200"
        :alt="`image for ${cardTitle}`"
      />
      <div
        aria-label="content"
        class="mt-2 flex min-h-full flex-col items-start gap-8 p-6"
      >
        <div>
          <h3
            class="text-balance text-2xl font-medium text-zinc-950 md:text-4xl"
          >
            {{ cardTitle }}
          </h3>
          <p class="max-w-[65ch] pt-6 text-base text-zinc-500 md:text-lg">
            {{ cardSummary }}
          </p>
        </div>
        <button
          class="mt-2 text-base font-semibold text-indigo-600 hover:underline md:text-lg"
        >
          Read more
        </button>

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
  cardSummary: String,
  cardDate: String,
});
</script>

<style scoped></style>
