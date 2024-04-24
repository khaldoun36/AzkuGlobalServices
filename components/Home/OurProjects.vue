<template>
  <TheSiteContainer
    as="section"
    class="flex min-h-[700px] flex-col items-start justify-between gap-8 py-8 lg:py-20"
  >
    <h2 class="text-3xl font-medium text-zinc-950 md:text-5xl">
      Proven Expertise <br />Delivering Results
    </h2>
    <NuxtLink
      to="https://nuxtjs.org"
      class="project-background flex aspect-[2/3] max-h-[700px] min-w-full flex-col justify-end gap-6 rounded-md p-8 text-zinc-50 lg:aspect-[18/9]"
    >
      <h3 class="max-w-[45ch] text-2xl font-medium md:text-4xl">
        Design, supply and supervision of installation and commissioning of a
        new Gas Compressor Station at Ajeel Field
      </h3>
      <div class="flex items-center gap-4 text-lg text-zinc-500">
        <p><time datetime="2020">2020</time> &mdash; <time>Ongoing</time></p>
        <span>&bull;</span>
        <p>Project for North Oil Company (NOC)</p>
      </div>
    </NuxtLink>
  </TheSiteContainer>
</template>

<script setup></script>

<style scoped>
.project-background {
  background: linear-gradient(
      theme(colors.zinc.950 / 60%),
      theme(colors.zinc.950 / 60%)
    ),
    url("https://images.unsplash.com/photo-1562237553-fd52cb2067b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
}
</style>
