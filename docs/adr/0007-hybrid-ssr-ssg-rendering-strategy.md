# ADR-0007: Hybrid SSR + Selective SSG Rendering Strategy

## Status

Accepted

## Context

Kairos uses the Cloudflare adapter with `output: 'server'` (SSR by default). However, content-heavy pages like blog posts and theme explorers benefit from static generation (SSG) for better performance and SEO. Astro supports opting individual pages into SSG via `export const prerender = true`.

## Decision

Adopt a **hybrid rendering strategy**:

- **Default SSR** (`output: 'server'`) for pages that need runtime flexibility (e.g., locale redirects, dynamic error handling)
- **Selective SSG** via `export const prerender = true` for content-driven pages:
  - Blog posts (`blog/[...slug].astro`) — static HTML per post
  - Theme explorer routes (`[category].astro`, `[theme].astro`) — static HTML per theme
- Use `getStaticPaths()` only on pages with `prerender = true`

## Consequences

### Positive

- Best of both worlds: SSR flexibility where needed, SSG performance where possible
- Blog posts served as static HTML — zero TTFB overhead, better SEO
- Cloudflare edge caching works optimally with pre-rendered pages
- Clear per-page opt-in keeps the decision explicit and auditable

### Negative

- Must remember to add `prerender = true` on any new static page (see Issue #5)
- `getStaticPaths()` is silently ignored without `prerender = true` — easy to miss
- Mixed rendering modes can confuse contributors unfamiliar with Astro's hybrid model
