<template>
  <TheSiteContainer as="div" class="prose mx-auto mt-24 max-w-[100ch] md:mt-28">
    <h1
      class="text-left text-4xl font-semibold text-balance text-zinc-950 md:text-6xl lg:max-w-[25ch]"
    >
      Supply Chain
    </h1>
    <NuxtImg
      src="https://ik.imagekit.io/1p7sbsx42/supply%20chain/WhatsApp%20Image%202023-09-06%20at%2012.23.28..jpg?tr=w-1200,h-600,c-at_least?updatedAt=1714033649718"
      format="webp"
      preload
      alt="Skid-mounted equipment package loaded on a truck"
      class="aspect-4/3 min-w-full object-cover"
    />
    <p>
      We proudly stand as a major industrial equipment supplier in the Middle
      East, catering to a variety of industries. Partnering with global
      manufacturers and regional stockists, we deliver high-quality products
      that meet the stringent standards of the oil and gas sectors and the
      unique needs of our customers.
    </p>
    <p>
      From humble beginnings, we have evolved into a leading supply chain
      partner, backed by our strong industry presence. Our deep market knowledge
      and ability to offer tailored solutions have cemented our status as a
      market leader. We supply a wide range of industrial products for upstream,
      midstream, and downstream applications.
    </p>
    <p>
      Over the years, we have consistently provided top-tier products that meet
      our customers' specific needs. We take pride in surpassing client
      expectations and seamlessly delivering solutions that exceed their
      requirements.
    </p>
    <h2>Our specializations</h2>
    <ul
      class="mt-8 grid gap-x-8 rounded-md bg-zinc-100/50 p-8 *:my-3 md:grid-cols-2"
    >
      <li>Gas Compressor Packages</li>
      <li>Flare Gas Recovery System</li>
      <li>Gas Sweetening Units</li>
      <li>Separators and Scrubbers</li>
      <li>Pressure Vessels & Heat Exchangers</li>
      <li>Solar powered Manifold and Skids</li>
      <li>Dehydration and Desalination Units</li>
      <li>Wellhead Control Panel</li>
      <li>Chemical Injection Packages & Corrosion Inhibitor Skids</li>
    </ul>
  </TheSiteContainer>
</template>
<script setup lang="ts">
const description =
  "A major industrial equipment supplier in the Middle East, delivering high-quality products for upstream, midstream and downstream oil and gas applications.";

useSeoMeta({
  title: "Supply Chain",
  ogTitle: "Supply Chain",
  description,
  ogDescription: description,
});
</script>
