<template>
  <TheSiteContainer
    as="main"
    class="grid aspect-[2/3] max-h-[700px] min-w-full items-center justify-center overflow-clip p-6 lg:aspect-[18/9]"
  >
    <div class="content flex flex-col items-center justify-center gap-6">
      <h1
        class="text-balance text-center text-4xl font-semibold text-zinc-50 md:text-6xl lg:max-w-[25ch]"
      >
        Pioneering Energy Solutions for the Oil and Gas Industry
      </h1>
      <p
        class="max-w-[75ch] text-center text-base font-medium text-zinc-200/90 md:text-lg"
      >
        Our global network and local expertise empower you to overcome
        challenges and deliver cost-effective results. AGS provides specialized,
        customized services to maximize your impact.
      </p>
      <div class="btn-container flex items-center justify-center gap-6">
        <TheSiteButton intent="secondary">
          View Projects
          <Icon name="tabler:arrow-up-right" class="text-zinc-50" size="18px" />
        </TheSiteButton>
        <TheSiteButton intent="primary">
          Contact us
          <Icon name="tabler:arrow-up-right" class="text-zinc-50" size="18px" />
        </TheSiteButton>
      </div>
    </div>
  </TheSiteContainer>
</template>

<script setup></script>

<style scoped>
main {
  background: linear-gradient(
      theme(colors.zinc.950 / 60%),
      theme(colors.zinc.950 / 60%)
    ),
    url("../../assets/visual/hero_image_2.avif");
  background-size: cover;
}
</style>
