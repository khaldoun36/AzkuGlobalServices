<template>
  <div
    class="mt-24 grid max-w-full grid-cols-1 items-start gap-10 md:mt-28 lg:grid-cols-2"
  >
    <TheSiteContainer as="main" className="lg:px-0 xl:pl-20 grid gap-8">
      <h1 class="text-3xl md:text-5xl font-semibold text-zinc-800 text-balance">Our
        mission,
        Our legacy,
        Our
        Certifications</h1>
      <NuxtImg
        src="https://ik.imagekit.io/1p7sbsx42/about_us.jpg?updatedAt=1715337017431"
        format="avif"
        width="4608"
        height="3465"
        sizes="484px"
        class="aspect-[4/4] h-auto w-full self-start overflow-clip rounded-md object-cover object-center shadow-md brightness-90"
      />
    </TheSiteContainer>

    <section class="flex max-w-full flex-col gap-4 px-6 lg:pr-20 mt-4">
      <h2
        class="content-title pb-4 text-2xl font-medium text-zinc-950 md:text-4xl"
      >
        Who we are
      </h2>
      <p class="text-base text-zinc-500">
        Since its founding, AGS has emerged as a leading provider of specialized
        services and solutions for the oil and gas industry across the Middle
        East. With deep local roots and an unparalleled understanding of the
        regional business landscape, we have built a trusted reputation for
        successfully executing a diverse range of complex projects and expertly
        navigating the unique challenges of operating in this dynamic market.
      </p>
      <p class="text-base text-zinc-500">
        Our presence in the region is stronger than ever, with strategically
        located offices in Iraq, Dubai, and Houston that enable us to deliver
        cost-effective, high-quality, and timely services to an extensive
        international client base. From national oil companies to global
        drilling contractors and EPCM firms, we are dedicated to helping our
        partners succeed in the lucrative yet demanding Middle Eastern energy
        sector.
      </p>
      <p class="text-base text-zinc-500">
        We are proud members of esteemed organizations such as the
        <span class="font-semibold">US-Iraq Business Dialogue</span>,
        <span class="font-semibold">US-Iraq
        Chamber of Commerce</span>, <span class="font-semibold">Iraqi
        Federation of Industries</span> , and the <span class="font-semibold">Iraqi Businessmen
          Association</span>. Our memberships reflect our commitment to fostering strong business relationships and promoting economic growth between the US and Iraq.
      </p>
      <!-- Our values -->
      <h2
        class="content-title py-4 text-2xl font-medium text-zinc-950 md:text-4xl"
      >
        Our Values
      </h2>
      <p class="text-base text-zinc-500">
        At the heart of our success lies an unwavering commitment to delivering
        value-added services, cutting-edge equipment and materials, and
        personalized solutions tailored to each client's distinct needs. Our
        seasoned team believes that every challenge presents an opportunity, and
        we work tirelessly to provide innovative, impactful answers that create
        lasting positive change for our clients' organizations.
      </p>
      <p class="text-base text-zinc-500">
        Building long-term, trust-based partnerships is the cornerstone of our
        business. We are proud to be a trusted advisor and go-to resource for
        our clients, leveraging our local expertise and expansive regional
        network to provide a comprehensive range of services that support their
        growth and expansion across the Middle East. Together, we are forging
        the future of energy in this dynamic, high-stakes market.
      </p>
      <!-- Our Certificates -->
      <!--  -->

      <h2
        class="content-title py-4 text-2xl font-medium text-zinc-950 md:text-4xl"
        id="compliance-and-safety"
      >
        Qualified Expertise
      </h2>
      <p class="text-base text-zinc-500">
        Azku Global Services is committed to providing our clients with the
        highest quality services and solutions, safety is of paramount
        importance that we prioritize in all of our operations. We are
        <NuxtLink
          to="https://ik.imagekit.io/1p7sbsx42/certificates/113271_Scanned%20Cert%20ISO%2045001.pdf?updatedAt=1715620638549"
          target="_blank"
          rel="noreferrer"
          class="font-semibold underline underline-offset-2"
          >ISO 45001:2018</NuxtLink
        >,
        <NuxtLink
          to="https://ik.imagekit.io/1p7sbsx42/certificates/113271_Scanned%20Cert%20ISO%209001.pdf?updatedAt=1715620638540"
          target="_blank"
          rel="noreferrer"
          class="font-semibold underline underline-offset-2"
          >ISO 9001:2015</NuxtLink
        >, and
        <NuxtLink
          to="https://ik.imagekit.io/1p7sbsx42/certificates/113271_Scanned%20Cert%20ISO%2014001.pdf?updatedAt=1715620638495"
          target="_blank"
          rel="noreferrer"
          class="font-semibold underline underline-offset-2"
          >ISO 14001:2015</NuxtLink
        >
        certified company that aim to deliver exceptional value to our clients
        by following all regulatory processes and quality checks. Working with
        Azku Global Services will be a smooth and stress-free experience.
      </p>
    </section>
  </div>
</template>

<script setup>
</script>

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
  background-color: theme('colors.zinc.950');
}
</style>
