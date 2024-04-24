<template>
  <NuxtLink :class="twMerge(button({ intent, size }))">
    <slot />
  </NuxtLink>
</template>

<script setup>
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const button = cva(
  [
    "h-10",
    "flex",
    "items-center",
    "justify-center",
    "gap-2",
    "text-center",
    "px-5",
    "text-sm",
    "font-medium",
    "text-zinc-900",
    "rounded-md",
    "cursor-pointer",
    "active:scale-90",
    "focus:outline-2",
    "focus:outline-offset-2",
    "transition-colors",
  ],

  {
    variants: {
      intent: {
        primary: [
          "text-zinc-50",
          "bg-indigo-500",
          "hover:bg-indigo-600",
          "focus:outline-indigo-200",
        ],
        secondary: [
          "text-zinc-50",
          "hover:bg-indigo-200/50",
          "focus:outline-indigo-200",
        ],
      },
      size: {
        small: "small",
        medium: "medium",
      },
    },
  },
);

const props = defineProps({
  intent: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "small",
  },
});
</script>

<style scoped></style>
