import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
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

const literature = defineCollection({
  loader: glob({ base: './src/content/literature', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date()
  }),
});

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string()
  }),
});

export const collections = { legislations, literature, news };
