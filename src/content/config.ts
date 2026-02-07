import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articlesCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        category: z.string(),
        heroImage: image(),
        author: z.string(),
        draft: z.boolean().optional(),
    }),
});

export const collections = {
    articles: articlesCollection,
};
