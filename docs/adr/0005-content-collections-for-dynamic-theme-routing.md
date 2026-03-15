# ADR-0005: Content Collections for Dynamic Theme Routing

## Status

Accepted

## Context

Phase 3 introduced a "Theme Explorer" feature with 5 categories (Portfolio, E-Commerce, Corporate, Content/News, Software/SaaS), each containing 5 sub-themes. We needed a data-driven approach to:

- Define theme metadata (layout, styles, content focus) without hardcoding
- Generate dynamic routes for each category and sub-theme
- Validate theme data at build time
- Support i18n per theme (separate JSON per locale)

## Decision

Use **Astro Content Collections** with JSON data files and Zod schema validation:

- Theme definitions stored as JSON in `src/content/themes/` (e.g., `corporate-en.json`, `corporate-zh-tw.json`)
- Zod schema in `src/content/config.ts` validates all theme entries at build time
- Dynamic routes via `[category].astro` and `[theme].astro` using `getStaticPaths()`
- Each theme entry defines: `id`, `name`, `layoutComponent`, `styleClasses`, `contentFocus`, `description`

## Consequences

### Positive

- Adding a new theme is just a JSON file — no code changes needed
- Build-time validation catches missing fields or typos before deployment
- Type-safe access to theme data via `getEntry()` and `getCollection()`
- Clean separation between theme data and layout components

### Negative

- JSON files can become verbose with many optional `contentFocus` fields
- No visual editor for theme data — must edit JSON directly
- Separate files per locale (e.g., `corporate-en.json` + `corporate-zh-tw.json`) increases file count
