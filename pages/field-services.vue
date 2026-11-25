<template>
  <TheSiteContainer as="div" class="prose mx-auto mt-24 max-w-[100ch] md:mt-28">
    <h1
      class="text-left text-4xl font-semibold text-balance text-zinc-950 md:text-6xl lg:max-w-[25ch]"
    >
      Field Services
    </h1>
    <NuxtImg
      src="https://ik.imagekit.io/1p7sbsx42/field%20services/photo_2023-11-05_12-00-51%20(2).jpg?tr=w-1200,h-600,c-at_least?updatedAt=1714031501538"
      format="webp"
      preload
      alt="Excavators laying flexible pipeline at a field site"
      class="aspect-4/3 min-w-full object-cover"
    />
    <p>
      We leverage our strong local presence and experienced local and expatriate
      teams to offer a variety of field services. Our certified engineers and
      technicians deliver process, pipeline, industrial, mechanical, electrical,
      and instrumentation services. Before executing any field service, our team
      conducts competence assessments, safety training, insurance arrangements,
      and other necessary preparations. Our field services include:
    </p>
    <h2>Our specializations</h2>
    <ul
      class="mt-8 grid gap-x-8 rounded-md bg-zinc-100/50 p-8 *:my-3 md:grid-cols-2"
    >
      <li>High Pressure Water Jetting</li>
      <li>Chemical Cleaning</li>
      <li>Oil Flushing</li>
      <li>Nitrogen Leak Testing / Nitrogen Purging</li>
      <li>Industrial Coating</li>
      <li>Controlled bolting, flange management</li>
      <li>Pipeline cleaning, pigging, testing, and drying.</li>
      <li>Flowlines Installation</li>
      <li>Engineering & Supervision CSU / TAR</li>
      <li>Electrical and Instrumentation Services</li>
    </ul>
  </TheSiteContainer>
</template>
<script setup lang="ts">
const description =
  "Certified engineers and technicians delivering process, pipeline, industrial, mechanical, electrical and instrumentation field services.";

useSeoMeta({
  title: "Field Services",
  ogTitle: "Field Services",
  description,
  ogDescription: description,
});
</script>
