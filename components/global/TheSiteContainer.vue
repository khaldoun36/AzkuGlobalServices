<template>
  <component :is="as" :class="twMerge('rounded-md px-6 lg:px-20', className)">
    <slot />
  </component>
</template>

<script setup>
import { twMerge } from "tailwind-merge";

const props = defineProps(["as", "className"]);
</script>

<style scoped></style>
