<template>
  <div
    class="mt-24 grid max-w-full grid-cols-1 items-start gap-10 md:mt-28 lg:grid-cols-2"
  >
    <TheSiteContainer as="main" className="lg:px-0 xl:pl-20">
      <NuxtImg
        src="https://images.unsplash.com/photo-1562237553-36ad661d6f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        format="avif"
        width="2070"
        height="1380"
        class="aspect-[16/10] h-auto w-full self-start overflow-clip rounded-md object-cover object-center shadow-md"
      />
    </TheSiteContainer>

    <section class="flex max-w-full flex-col gap-4 px-6 lg:pr-20">
      <h1
        class="content-title pb-4 text-3xl font-medium text-zinc-950 md:text-5xl"
      >
        Who we are
      </h1>
      <p class="text-base text-zinc-500 md:text-lg">
        Since its founding, AGS has emerged as a leading provider of specialized
        services and solutions for the oil and gas industry across the Middle
        East. With deep local roots and an unparalleled understanding of the
        regional business landscape, we have built a trusted reputation for
        successfully executing a diverse range of complex projects and expertly
        navigating the unique challenges of operating in this dynamic market.
      </p>
      <p class="text-base text-zinc-500 md:text-lg">
        Our presence in the region is stronger than ever, with strategically
        located offices in Iraq, Dubai, and Houston that enable us to deliver
        cost-effective, high-quality, and timely services to an extensive
        international client base. From national oil companies to global
        drilling contractors and EPCM firms, we are dedicated to helping our
        partners succeed in the lucrative yet demanding Middle Eastern energy
        sector.
      </p>
      <!-- Our values -->
      <h2
        class="content-title py-4 text-3xl font-medium text-zinc-950 md:text-5xl"
      >
        Our Values
      </h2>
      <p class="text-base text-zinc-500 md:text-lg">
        At the heart of our success lies an unwavering commitment to delivering
        value-added services, cutting-edge equipment and materials, and
        personalized solutions tailored to each client's distinct needs. Our
        seasoned team believes that every challenge presents an opportunity, and
        we work tirelessly to provide innovative, impactful answers that create
        lasting positive change for our clients' organizations.
      </p>
      <p class="text-base text-zinc-500 md:text-lg">
        Building long-term, trust-based partnerships is the cornerstone of our
        business. We are proud to be a trusted advisor and go-to resource for
        our clients, leveraging our local expertise and expansive regional
        network to provide a comprehensive range of services that support their
        growth and expansion across the Middle East. Together, we are forging
        the future of energy in this dynamic, high-stakes market.
      </p>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
.content-title {
  position: relative;
}

.content-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0px;
  width: 20%;
  height: 1.5px;
  background-color: theme(colors.zinc.950);
}
</style>
