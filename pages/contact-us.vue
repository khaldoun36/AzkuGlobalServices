<template>
  <div
    class="grid grid-cols-1 grid-rows-2 items-baseline justify-between gap-8 *:min-h-[700px] *:py-6 md:mt-24 md:*:py-20 lg:grid-cols-2 lg:grid-rows-1"
  >
    <TheSiteContainer as="main" className="gap-4 flex  items-start flex-col">
      <h2
        class="l text-balance text-left text-4xl font-semibold text-zinc-950 md:text-6xl"
      >
        Contact Us
      </h2>

      <!-- Form Start -->

      <form action="#" class="min-w-full space-y-8 pt-4">
        <div>
          <label for="name" class="mb-2 block text-sm font-medium text-zinc-900"
            >Your name</label
          >
          <input
            type="text"
            id="name"
            class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-md border border-zinc-300 bg-zinc-50 p-2.5 text-sm text-zinc-900 shadow-sm"
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label
            for="email"
            class="mb-2 block text-sm font-medium text-zinc-900"
            >Your email</label
          >
          <input
            type="email"
            id="email"
            class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-md border border-zinc-300 bg-zinc-50 p-2.5 text-sm text-zinc-900 shadow-sm"
            placeholder="name@company-name.com"
            required
          />
        </div>
        <div>
          <label
            for="subject"
            class="mb-2 block text-sm font-medium text-zinc-900"
            >Subject</label
          >
          <input
            type="text"
            id="subject"
            class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-md border border-zinc-300 bg-zinc-50 p-3 text-sm text-zinc-900 shadow-sm"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="mb-2 block text-sm font-medium text-zinc-900"
            >Your message</label
          >
          <textarea
            id="message"
            rows="6"
            class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-md border border-zinc-300 bg-zinc-50 p-2.5 text-sm text-gray-900 shadow-sm"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-md px-5 py-3 text-center text-sm font-medium text-zinc-50 focus:outline-none focus:ring-4 sm:w-fit"
        >
          Send message
        </button>
      </form>

      <!-- Form end -->
    </TheSiteContainer>
    <TheSiteContainer
      as="section"
      className="max-w-full bg-gradient-to-r from-[#1e3c72] to-[#2a5298] gap-4 flex  items-start flex-col"
    >
      <h1 class="text-2xl font-semibold text-zinc-50 md:text-4xl">
        Contact Information
      </h1>
      <p class="max-w-[75ch] text-base text-zinc-300 md:text-lg">
        Have a question or need assistance? Reach out to us via email, phone, or
        by filling out the form below. We're here to help and will get back to
        you as soon as possible.
      </p>
      <div class="space-y-3.5 hover:*:underline">
        <NuxtLink
          to="mailto:Info@azkuglobalservices.com"
          class="flex items-center gap-3 text-sm text-zinc-300"
        >
          <Icon name="tabler:mail" size="20px" />
          <span>Info@azkuglobalservices.com</span>
        </NuxtLink>
        <NuxtLink
          to="tel:+97144544310"
          class="flex items-center gap-3 text-sm text-zinc-300"
        >
          <Icon name="tabler:phone" size="20px" />
          <span>04 454 4310</span>
        </NuxtLink>
        <NuxtLink
          to="tel:+97144544310"
          class="flex items-center gap-3 text-sm text-zinc-300"
          v-for="location in officeLocations"
          :key="location.location"
        >
          <Icon name="tabler:map-pin" size="20px" />
          <span>{{ location.location }}</span>
        </NuxtLink>
      </div>
    </TheSiteContainer>
  </div>
</template>

<script setup>
import officeLocations from "../data/officeLocations.json";

const handleFormSubmit = () => {
  console.log("hgello world");
};
</script>

<style scoped></style>
