import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    number: z.number(),
    title: z.string(),
    hook: z.string(),
    rank: z.enum(['rookie', 'analyst', 'inspector', 'chief']),
    minutes: z.number().optional(),
    tools: z.string().optional(),
    status: z.enum(['live', 'soon']).default('soon'),
    video: z.string().optional(), // YouTube video ID
    updated: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({ title: z.string(), description: z.string().optional() }),
});

export const collections = { cases, pages };
