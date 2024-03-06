import { defineCollection, z } from "astro:content";

const project = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    status: z.string().optional(),
    develop: z.string().optional(),
    tags: z.string().array().optional(),
    feature: z.boolean(),
    url: z.object({
      name: z.string().optional(),
      path: z.string().optional()
    })
  }),
});

export const collections = { project };
