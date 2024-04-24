<template>
  <NuxtLink to="https://tailwindcss.com/docs/z-index">
    <article class="overflow-clip rounded-md bg-zinc-50 hover:underline">
      <NuxtImg
        src="https://images.unsplash.com/photo-1713184355726-d3a31d822fcc?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        format="avif"
      />
      <div
        aria-label="content"
        class="mt-2 flex flex-col items-start gap-8 p-6"
      >
        <h3 class="text-2xl font-medium text-zinc-950 md:text-4xl">
          Lorem ipsum dolor sit amet.
        </h3>

        <time
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
</script>

<style lang="scss" scoped></style>
