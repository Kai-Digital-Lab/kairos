# ADR-0008: Shared Projects Content Collection with Optional Facets

## Status

Accepted

## Context

The 5 portfolio layouts (`WaterfallGrid`, `StandardDivided`, `LongPageLanding`, `FullBleedCarousel`, `StructuredCaseStudy`) render hardcoded mock arrays. The Portfolio Real-Data Refactor (`docs/specs/portfolio-real-data-spec.md`) requires them to render from a real, type-safe Content Collection so that editing `src/content/projects/*.json` changes what every layout displays, in both `en` and `zh-tw`.

Two decisions had to be made:

1. **One shared project set vs. per-theme project subsets.**
2. **How layouts receive the collection data.**

## Decision

### One shared project set (not per-theme subsets)

All 5 portfolio layouts draw from a single shared `projects` collection. Each layout is a *lens* over the same underlying portfolio: the schema models shared core fields (`id`, `title`, `summary`, `fullDescription`, `heroImage`, `tags`, `year?`, `link?`) plus **optional facet objects** keyed by lens:

| Facet | Consumed by | Fields |
|---|---|---|
| `designer` | WaterfallGridLayout | `concept`, `guidelines?` |
| `engineer` | StandardDividedLayout | `stack`, `solution`, `repoUrl?`, `codeSnippet?` |
| `photographer` | FullBleedCarouselLayout | `exif?`, `seriesName?`, `location?` |
| `caseStudy` | StructuredCaseStudyLayout | `problem`, `process`, `wireframes?` |
| `consultant` | LongPageLandingLayout | `testimonial?`, `serviceProcess?` |

A layout reads only its facet and degrades gracefully when the facet is absent on a given project. The optional-facet approach mirrors the existing `contentFocus` pattern in the `themes` collection ([ADR-0005](0005-content-collections-for-dynamic-theme-routing.md)).

### Locale-split data files, loaded by the page

- **File layout** mirrors the `themes` pattern: `type: 'data'` collection with `src/content/projects/projects-en.json` and `projects-zh-tw.json`, each an array of project objects sharing stable `id`s across locales.
- **Loading approach:** the route `src/pages/[lang]/explore/[category]/[theme].astro` already resolves `getEntry("themes", `${category}-${lang}`)`. It will additionally load `getEntry("projects", `projects-${lang}`)` when `category === "portfolio"` and pass the array to the layout as a `projects` prop. Layouts stay purely presentational (no data-fetching inside them), matching how `theme` is already passed down.
- **Runtime type:** `ProjectData` in `src/stores/portfolio.store.ts` is the single runtime interface, kept in sync with the Zod schema in `src/content/config.ts`. Field renames from the old mock shape: `description` → `summary`, `image` → `heroImage`; `link` became optional. `ProjectModal.astro` (the only pre-existing consumer) was updated accordingly.

## Consequences

### Positive

- One dataset, one place to edit — "editing a project changes ≥3 of the 5 layouts" falls out naturally.
- Preserves the product narrative of "the same portfolio through different professional lenses"; datasets cannot drift apart.
- Schema style stays consistent with the established `contentFocus` shared-core + optional-fields pattern.
- Zod validates all project data on every build.

### Negative

- Projects carry facets some layouts ignore, and a layout may see fewer items if few projects carry its facet (acceptable at 4–6 seed projects).
- Layouts refactored in Phase 3 of the spec must null-check their facet and render a sensible fallback.
- If a future batch needs per-theme curation, an optional `lenses?: string[]` filter field should be added rather than splitting the dataset.
