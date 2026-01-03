import { defineCollection, z } from 'astro:content';

const themeCollection = defineCollection({
    type: 'data',
    schema: z.array(z.object({
        id: z.string(),
        name: z.string(),
        layoutComponent: z.string(),
        styleClasses: z.string(),
        contentFocus: z.object({
            title: z.string(),
            primaryCTA: z.string(),
            metadataPriority: z.array(z.string()),
            // Optional fields
            galleryType: z.string().optional(),
            displayCodeBlocks: z.boolean().optional(),
            showTestimonials: z.boolean().optional(),
            ctaFrequency: z.string().optional(),
            useMockups: z.boolean().optional(),
            displayWireframes: z.boolean().optional(),
            displayCharts: z.boolean().optional(),
            showPlanComparison: z.boolean().optional(),
            showSpecials: z.boolean().optional(),
            showPlayer: z.boolean().optional(),
            hasSidebar: z.boolean().optional(),
            printableLayout: z.boolean().optional(),
            showMapEmbeds: z.boolean().optional(),
            denseGrid: z.boolean().optional(),
            centerContent: z.boolean().optional(),
            deepNavigation: z.boolean().optional(),
            showFlowCharts: z.boolean().optional(),
            showImpactData: z.boolean().optional(),
            immersivePhotos: z.boolean().optional(),
            showCredentials: z.boolean().optional(),
            highlightFreeTier: z.boolean().optional(),
            shortForm: z.boolean().optional(),
            verticalLayout: z.boolean().optional(),
            showKanban: z.boolean().optional(),
            showRegulatedTrust: z.boolean().optional(),
        }),
        description: z.string(),
    }))
});

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        slug: z.string().optional(),
        author: z.string().default('Kevin Hsieh'),
        image: z.string().optional(),
        tags: z.array(z.string()).default(['Tech']),
        isDraft: z.boolean().default(false),
        canonicalURL: z.string().optional(),
    })
});

export const collections = {
    'themes': themeCollection,
    'blog': blogCollection,
};
