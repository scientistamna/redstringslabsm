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
    videoDate: z.string().optional(), // shown while there is no video yet, e.g. "Friday 30 October"
    updated: z.string().optional(),
    chapters: z.array(z.object({ time: z.string(), label: z.string() })).default([]), // time like "1:30"
    downloads: z.array(z.object({ label: z.string(), file: z.string(), note: z.string().optional() })).default([]),
    resources: z.array(z.object({ label: z.string(), url: z.string().url(), note: z.string().optional() })).default([]),
    quiz: z.array(z.object({ q: z.string(), options: z.array(z.string()).min(2), answer: z.number(), explain: z.string() })).default([]),
    decoder: z.array(z.string()).default([]),
    challenge: z.string().optional(),
    parentNote: z.string().optional(),
    subtitles: z.array(z.string()).default([]), // language codes, e.g. ["ur","ar"]
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({ title: z.string(), description: z.string().optional() }),
});

export const collections = { cases, pages };
