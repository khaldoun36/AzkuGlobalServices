<template>
  <div
    class="grid grid-cols-1 grid-rows-2 items-baseline justify-between gap-8 *:min-h-[700px] *:py-6 md:mt-24 md:*:py-20 lg:grid-cols-2 lg:grid-rows-1"
  >
    <TheSiteContainer as="div" className="gap-4 flex  items-start flex-col">
      <h1
        class="text-left text-4xl font-semibold text-balance text-zinc-950 md:text-6xl"
      >
        Contact Us
      </h1>

      <!-- Form Start -->

      <form @submit.prevent="submitForm" class="min-w-full space-y-8 pt-4">
        <div>
          <label for="name" class="mb-2 block text-sm font-medium text-zinc-900"
            >Your name</label
          >
          <input
            type="text"
            id="name"
            name="name"
            class="block w-full rounded-md border border-zinc-300 bg-zinc-50 p-2.5 text-sm text-zinc-900 shadow-xs"
            placeholder="John Doe"
            v-model="form.name"
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
            name="email"
            id="email"
            class="block w-full rounded-md border border-zinc-300 bg-zinc-50 p-2.5 text-sm text-zinc-900 shadow-xs"
            placeholder="name@company-name.com"
            v-model="form.email"
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
            class="block w-full rounded-md border border-zinc-300 bg-zinc-50 p-3 text-sm text-zinc-900 shadow-xs"
            placeholder="Let us know how we can help you"
            name="subject"
            v-model="form.subject"
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
            class="block w-full rounded-md border border-zinc-300 bg-zinc-50 p-2.5 text-sm text-gray-900 shadow-xs"
            placeholder="Leave a comment..."
            name="message"
            v-model="form.message"
          ></textarea>
        </div>
        <!-- Spam trap: hidden from people, so only bots tick it. -->
        <input
          type="checkbox"
          name="botcheck"
          v-model="botcheck"
          style="display: none"
          tabindex="-1"
          autocomplete="off"
        />
        <div>
          <button
            type="submit"
            :disabled="status === 'loading'"
            class="rounded-md bg-indigo-700 px-5 py-3 text-center text-sm font-medium text-zinc-50 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit"
          >
            {{ status === "loading" ? "Sending…" : "Send message" }}
          </button>
          <p
            role="status"
            class="text-sm font-medium"
            :class="[
              result && 'mt-4',
              status === 'error' ? 'text-red-700' : 'text-green-700',
            ]"
          >
            {{ result }}
          </p>
        </div>
      </form>

      <!-- Form end -->
    </TheSiteContainer>
    <TheSiteContainer
      as="section"
      className="max-w-full bg-linear-to-r/srgb from-[#1e3c72] to-[#2a5298] gap-4 flex  items-start flex-col"
    >
      <h2 class="text-2xl font-semibold text-zinc-50 md:text-4xl">
        Contact Information
      </h2>
      <p class="max-w-[75ch] text-base text-zinc-300 md:text-lg">
        Have a question or need assistance? Reach out to us via email, phone, or
        by filling out the form below. We're here to help and will get back to
        you as soon as possible.
      </p>
      <div class="space-y-3.5">
        <NuxtLink
          to="mailto:Info@azkuglobalservices.com"
          class="flex items-center gap-3 text-sm text-zinc-300 hover:underline"
        >
          <Icon name="tabler:mail" size="20px" />
          <span>Info@azkuglobalservices.com</span>
        </NuxtLink>
        <NuxtLink
          to="tel:+97144544310"
          class="flex items-center gap-3 text-sm text-zinc-300 hover:underline"
        >
          <Icon name="tabler:phone" size="20px" />
          <span>04 454 4310</span>
        </NuxtLink>
        <p
          class="flex items-center gap-3 text-sm text-zinc-300"
          v-for="location in officeLocations"
          :key="location.location"
        >
          <Icon name="tabler:map-pin" size="20px" />
          <span>{{ location.location }}</span>
        </p>
      </div>
    </TheSiteContainer>
  </div>
</template>

<script setup>
import officeLocations from "../data/officeLocations.json";

const description =
  "Get in touch with Azku Global Services by email, phone or the contact form. Offices in Dubai, Houston and Erbil.";

useSeoMeta({
  title: "Contact Us",
  ogTitle: "Contact Us",
  description,
  ogDescription: description,
});

const form = ref({
  // Web3Forms access keys are public by design: they only identify the inbox.
  access_key: "5843cff9-5b2c-4e9d-a08d-6cbb28ac930d",
  subject: "",
  name: "",
  email: "",
  message: "",
});
const botcheck = ref(false);

const result = ref("");
const status = ref("");

const submitForm = async () => {
  if (status.value === "loading") return;
  status.value = "loading";
  result.value = "";

  try {
    // A ticked spam trap means a bot filled the form: skip sending.
    if (!botcheck.value) {
      // $fetch throws on any non-2xx response.
      const response = await $fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form.value,
      });
      if (response?.success === false) {
        throw new Error("Web3Forms rejected the submission");
      }
    }

    status.value = "success";
    result.value = "Thank you. Your message has been sent.";
    // Only clear the fields once the message is safely sent.
    form.value.name = "";
    form.value.email = "";
    form.value.subject = "";
    form.value.message = "";
  } catch {
    status.value = "error";
    result.value =
      "Sorry, your message could not be sent. Please try again, or email us at Info@azkuglobalservices.com.";
  }
};
</script>

<style scoped></style>
