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

// ── Projects collection ──
// Mirrors the themes pattern: type 'data', split by locale file
// (projects-en.json / projects-zh-tw.json), stable shared `id`.
// Shared core fields + optional per-lens facets, same philosophy
// as contentFocus above.

const exifSchema = z.object({
    camera: z.string(),
    lens: z.string().optional(),
    iso: z.string().optional(),
    shutter: z.string().optional(),
    aperture: z.string().optional(),
});

const wireframeSchema = z.object({
    label: z.string(),   // e.g. "Wireframe 01"
    title: z.string(),   // e.g. "Authentication Flow"
    image: z.string().optional(),
});

const testimonialSchema = z.object({
    quote: z.string(),
    author: z.string(),
    role: z.string().optional(),
});

const projectsCollection = defineCollection({
    type: 'data',
    schema: z.array(z.object({
        // ── Core (every project has these) ──
        id: z.string(),                 // stable across locales
        title: z.string(),
        summary: z.string(),            // one-line, used in grids/cards
        fullDescription: z.string(),    // shown in ProjectModal
        heroImage: z.string(),          // URL or gradient CSS class
        tags: z.array(z.string()),
        year: z.number().optional(),
        link: z.string().optional(),

        // ── Optional facets (surfaced per theme lens) ──
        // Designer (WaterfallGrid): Concept, Guidelines
        designer: z.object({
            concept: z.string(),
            guidelines: z.string().optional(),
        }).optional(),

        // Engineer (StandardDivided): Stack, Solution, repo
        engineer: z.object({
            stack: z.array(z.string()),
            solution: z.string(),
            repoUrl: z.string().optional(),
            codeSnippet: z.string().optional(),  // fenced code as string
        }).optional(),

        // Photographer (FullBleedCarousel): Exif, Series, Location
        photographer: z.object({
            exif: exifSchema.optional(),
            seriesName: z.string().optional(),
            location: z.string().optional(),
        }).optional(),

        // UX/UI (StructuredCaseStudy): Problem, Process, Wireframes
        caseStudy: z.object({
            problem: z.string(),
            process: z.array(z.string()),
            wireframes: z.array(wireframeSchema).optional(),
        }).optional(),

        // Consultant (LongPageLanding): Testimonials, ServiceProcess
        consultant: z.object({
            testimonial: testimonialSchema.optional(),
            serviceProcess: z.array(z.string()).optional(),
        }).optional(),
    })),
});

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        language: z.enum(['en', 'zh-tw']).default('en'),
        translationKey: z.string().optional(),
        slug: z.string().optional(),
        author: z.string().default('Kevin Hsieh'),
        image: z.string().optional(),
        tags: z.array(z.string()).default(['Tech']),
        isDraft: z.boolean().default(false),
        canonicalURL: z.string().optional(),
        mediumUrl: z.string().url().optional(),
    })
});

export const collections = {
    'themes': themeCollection,
    'blog': blogCollection,
    'projects': projectsCollection,
};
