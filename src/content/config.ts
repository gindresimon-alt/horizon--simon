import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articlesCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        category: z.string(),
        heroImage: image().optional(),
        author: z.string(),
        draft: z.boolean().optional(),
    }),
});

const portfoliosCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/portfolios' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        heroImage: image(),
        images: z.array(z.array(image())),
        category: z.enum([
            "immobilier", "hospitality", "drone", "video", 
            "professionnels", "workshops", "sport", 
            "portraits", "grossesse", "couples"
        ]),
        clients: z.array(z.string()),
        location: z.string(),
        draft: z.boolean().optional(),
    }),
});

const otherPagesCollection = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/otherPages' }),
    schema: () => z.object({
        title: z.string(),
        description: z.string(),
        draft: z.boolean().optional(),
    }),
});

export const collections = {
    articles: articlesCollection,
    portfolios: portfoliosCollection,
    otherPages: otherPagesCollection,
};
