<template>
  <TheSiteContainer as="div" class="prose mx-auto mt-24 max-w-[100ch] md:mt-28">
    <h1
      class="text-left text-4xl font-semibold text-balance text-zinc-950 md:text-6xl lg:max-w-[25ch]"
    >
      Engineering, procurement and construction (EPC)
    </h1>
    <NuxtImg
      src="https://ik.imagekit.io/1p7sbsx42/epc/photo_1.jpeg?tr=w-1200,h-600,c-at_least?updatedAt=1714029469853"
      format="webp"
      preload
      alt="Oil and gas processing facility with pipework and pressure vessels"
      class="aspect-4/3 min-w-full object-cover"
    />
    <p>
      As a highly experienced industrial EPC company, we provide a wide array of
      services to address the diverse needs of our clients. Our thorough
      approach to project management covers every phase, from initial design to
      final commissioning and handover. We are dedicated to delivering
      outstanding results and ensuring a seamless transition for our clients.
      Our proven track record spans successful project management in the
      petrochemical, oil and gas, construction, and energy sectors.
    </p>
    <h2>Our specializations</h2>
    <ul
      class="mt-8 grid gap-x-8 rounded-md bg-zinc-100/50 p-8 *:my-3 md:grid-cols-2"
    >
      <li>Multi-discipline Engineering, Procurement & Construction</li>
      <li>Gas Compressor Stations</li>
      <li>Specialized Pipeline & Piping Systems</li>
      <li>Degassing Stations</li>
      <li>Corrosion Monitoring System</li>
      <li>Process Engineering Package</li>
      <li>Electrical & Instrumentation Works</li>
      <li>Commissioning & Re-habilitation services</li>
      <li>Tank Farms</li>
    </ul>
    <h2>Engineering</h2>
    <ul
      class="mt-8 grid gap-x-8 rounded-md bg-zinc-100/50 p-8 *:my-3 md:grid-cols-2"
    >
      <li>Feasibility studies</li>
      <li>Local site survey</li>
      <li>Civil, mechanical, electrical and instrumentation</li>
      <li>Design and layout</li>
      <li>Basic and detailed engineering</li>
    </ul>
    <h2>Procurement</h2>
    <ul
      class="mt-8 grid gap-x-8 rounded-md bg-zinc-100/50 p-8 *:my-3 md:grid-cols-2"
    >
      <li>Worldwide procurement capability</li>
      <li>Vendor qualification and selection</li>
      <li>Logistics and project expediting</li>
      <li>Quality assurance and control</li>
      <li>Pricing and budgeting</li>
      <li>Materials management</li>
    </ul>
    <h2>Construction</h2>
    <ul
      class="mt-8 grid gap-x-8 rounded-md bg-zinc-100/50 p-8 *:my-3 md:grid-cols-2"
    >
      <li>Construction services</li>
      <li>Laser scanning / As-built documentation</li>
      <li>Field supervision</li>
      <li>Cost and schedule control</li>
      <li>Quality control</li>
      <li>Materials inspection and control</li>
      <li>Commissioning and startup</li>
    </ul>
    <h2>Project Management</h2>
    <ul
      class="mt-8 grid gap-x-8 rounded-md bg-zinc-100/50 p-8 *:my-3 md:grid-cols-2"
    >
      <li>EPCM services</li>
      <li>Risk assessment and management</li>
      <li>Project performance monitoring</li>
      <li>Introduction of new technologies</li>
      <li>Cost and schedule control</li>
    </ul>
  </TheSiteContainer>
</template>
<script setup lang="ts">
const description =
  "EPC services for the oil and gas sector, covering every project phase from initial design to final commissioning and handover.";

useSeoMeta({
  title: "Engineering, Procurement and Construction (EPC)",
  ogTitle: "Engineering, Procurement and Construction (EPC)",
  description,
  ogDescription: description,
});
</script>
