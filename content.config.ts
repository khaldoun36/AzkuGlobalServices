import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: "page",
      source: "projects/*.md",
      schema: z.object({
        summary: z.string().optional(),
        startDate: z.string().optional(),
        endDate: z.string().optional(),
        projectFor: z.string().optional(),
        thumbnail: z.string().optional(),
        visiuals: z.array(z.string()).optional(),
      }),
    }),
  },
});
