import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        country: z.string(),
        activity: z.string(),
        price: z.number(),
        duration: z.string(),
        difficulty: z.string(),
        groupSize: z.string(),
        image: z.string(),
        gallery: z.array(z.string()).optional(),
        highlights: z.array(z.string()).optional(),
        included: z.array(z.string()).optional(),
        notIncluded: z.array(z.string()).optional(),
        bestTime: z.string().optional(),
        minElevation: z.string().optional(),
        maxElevation: z.string().optional(),
        itinerary: z
          .array(
            z.object({
              title: z.string(),
              content: z.string(),
            })
          )
          .optional(),
        referee: z.any().optional(),
      }),
    }),
    activities: defineCollection({
      type: "page",
      source: "activities/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        price: z.number(),
        duration: z.string(),
        difficulty: z.string(),
        groupSize: z.string(),
        image: z.string(),
        gallery: z.array(z.string()).optional(),
        highlights: z.array(z.string()).optional(),
        included: z.array(z.string()).optional(),
        notIncluded: z.array(z.string()).optional(),
        bestTime: z.string().optional(),
        minElevation: z.string().optional(),
        maxElevation: z.string().optional(),
        itinerary: z
          .array(
            z.object({
              title: z.string(),
              content: z.string(),
            })
          )
          .optional(),
        referee: z.any().optional(),
      }),
    }),
  },
});
