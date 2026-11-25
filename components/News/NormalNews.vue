<template>
  <NuxtLink :to="cardSlug">
    <article
      class="flex min-h-full flex-col items-center overflow-clip rounded-md bg-zinc-50 md:flex-row md:gap-8"
    >
      <NuxtImg
        :src="cardImage"
        format="avif"
        :loading="cardLoading"
        class="aspect-[1.33] min-h-full object-cover md:max-w-[40%]"
        width="800"
        height="1200"
        :alt="`image for ${cardTitle}`"
      />
      <div class="mt-2 flex min-h-full flex-col items-start gap-8 p-6">
        <div>
          <h2
            class="max-w-[45ch] text-2xl font-medium text-balance text-zinc-950 md:text-4xl"
          >
            {{ cardTitle }}
          </h2>
          <p
            v-if="cardSummary"
            class="max-w-[65ch] pt-6 text-base text-zinc-500 md:text-lg"
          >
            {{ cardSummary.substring(0, 250) }}...
          </p>
        </div>
        <span
          class="mt-2 text-base font-semibold text-indigo-600 hover:underline md:text-lg"
        >
          Read more
        </span>

        <time
          v-if="cardDate"
          :datetime="cardDate"
          class="text-base font-medium text-zinc-500 md:text-lg"
          >{{ formattedDate }}</time
        >
      </div>
    </article>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  cardSlug: String,
  cardImage: String,
  cardTitle: String,
  cardSummary: String,
  cardDate: String,
  cardLoading: { type: String, default: "lazy" },
});

const formattedDate = computed(() =>
  props.cardDate
    ? new Date(props.cardDate).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "",
);
</script>

<style scoped></style>
