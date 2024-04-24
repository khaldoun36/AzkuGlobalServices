<template>
  <TheSiteContainer
    as="section"
    class="flex min-h-[700px] flex-col items-center justify-between gap-8 bg-zinc-950 py-8 lg:py-20"
  >
    <h2 class="text-center text-3xl font-medium text-zinc-50 md:text-5xl">
      Read our Latest Updates <br />and Industry Insights
    </h2>
    <NuxtLink
      to="https://nuxtjs.org"
      class="project-background shadow-zinc-40/50 flex aspect-[2/3] max-h-[700px] min-w-full flex-col justify-end gap-6 rounded-md p-8 text-zinc-50 shadow-xl shadow-zinc-800/25 lg:aspect-[18/9]"
    >
      <h3 class="max-w-[45ch] text-2xl font-medium md:text-4xl">
        Design, supply and supervision of installation and commissioning of a
        new Gas Compressor Station at Ajeel Field
      </h3>
    </NuxtLink>
  </TheSiteContainer>
</template>

<script setup></script>

<style scoped>
.project-background {
  background: linear-gradient(
      theme(colors.zinc.50 / 0%),
      theme(colors.zinc.50 / 10%),
      theme(colors.zinc.50 / 15%),
      theme(colors.zinc.950 / 100%)
    ),
    url("https://images.unsplash.com/photo-1562237548-3c36707230ce?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
}
</style>
