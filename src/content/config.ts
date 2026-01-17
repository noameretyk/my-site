import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string(),
    image: z.string().optional(),
    hidden: z.boolean().optional().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};