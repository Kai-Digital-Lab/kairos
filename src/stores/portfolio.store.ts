import { atom } from 'nanostores';

// Runtime shape consumed by ProjectModal + portfolio layouts.
// Kept in sync with the `projects` collection schema (src/content/config.ts).
// Shared core fields + optional per-lens facets.

export interface ExifData {
    camera: string;
    lens?: string;
    iso?: string;
    shutter?: string;
    aperture?: string;
}

export interface Wireframe {
    label: string;
    title: string;
    image?: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    role?: string;
}

export interface ProjectData {
    // ── Core ──
    id: string;
    title: string;
    summary: string;
    fullDescription: string;   // shown in ProjectModal
    heroImage: string;         // URL or gradient CSS class
    tags: string[];
    year?: number;
    link?: string;

    // ── Optional facets ──
    designer?: { concept: string; guidelines?: string };
    engineer?: { stack: string[]; solution: string; repoUrl?: string; codeSnippet?: string };
    photographer?: { exif?: ExifData; seriesName?: string; location?: string };
    caseStudy?: { problem: string; process: string[]; wireframes?: Wireframe[] };
    consultant?: { testimonial?: Testimonial; serviceProcess?: string[] };
}

// 狀態：目前選中的專案 (null 代表沒選/關閉)
export const activeProject = atom<ProjectData | null>(null);
