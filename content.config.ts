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
        privatePrice: z.number().optional(),
        duration: z.string(),
        difficulty: z.string(),
        groupSize: z.string(),
        minGroupSize: z.number().optional(),
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
        referee: z
          .object({
            title: z.string().optional(),
            name: z.string().optional(),
            image: z.string().optional(),
            emoji: z.string().optional(),
            badges: z.array(z.string()).optional(),
            description: z.string().optional(),
            details: z
              .array(
                z.object({
                  icon: z.string().optional(),
                  text: z.string(),
                })
              )
              .optional(),
          })
          .optional(),
        reviews: z
          .array(
            z.object({
              name: z.string(),
              initials: z.string(),
              location: z.string(),
              quote: z.string(),
              rating: z.number(),
            })
          )
          .optional(),
      }),
    }),
  },
});
