import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const legislations = defineCollection({
  loader: glob({ base: './src/content/legislations', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    name: z.string(),
    created: z.object({
      author: z.string(),
      date: z.coerce.date()
    }),
    updated: z.object({
      author: z.string(),
      date: z.coerce.date()
    }).optional(),
    description: z.string().optional(),
    priority: z.number().default(0)
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { legislations };