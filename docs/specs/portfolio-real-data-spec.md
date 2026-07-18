# Task Spec — Portfolio Real-Data Refactor (Pilot Batch)

> **Target model:** Claude Fable 5 in Claude Code (agent mode)
> **Scope:** The 5 `portfolio` category layouts only. This is the pilot batch; the other 4 theme categories (ecommerce, corporate, contentNews, software) are explicitly out of scope for this run.
> **Repo:** `Kai-Digital-Lab/kairos` · read `CLAUDE.md` before touching anything.

---

## 1. Objective

Convert the 5 portfolio layouts from hardcoded mock demos into components that render from a **real, type-safe `projects` Content Collection**. Each layout presents the *same underlying portfolio* through its own lens (a visual designer's grid vs. an engineer's divided layout vs. a photographer's carousel, etc.). Add real interactivity via Vanilla Web Components — no CSS-only fakery.

**Definition of done in one line:** editing `src/content/projects/*.json` changes what all 5 portfolio layouts display, in both `en` and `zh-tw`, with working interactions.

---

## 2. In scope — the 5 layouts

| Theme id | Component | Facet it surfaces | Key interaction to build |
|---|---|---|---|
| `VisualDesigner` | `WaterfallGridLayout` | Concept, Guidelines | Click card → open existing `ProjectModal` |
| `SoftwareEngineer` | `StandardDividedLayout` | Stack, Solution, repo link | Tab/filter by tech stack; code-block render |
| `FreelanceConsultant` | `LongPageLandingLayout` | Testimonials, ServiceProcess | Testimonial carousel/rotator |
| `PhotographerArtist` | `FullBleedCarouselLayout` | Exif, SeriesName, Location | Full-bleed carousel (prev/next + keyboard) |
| `UXUIDesigner` | `StructuredCaseStudyLayout` | ProblemDefinition, DesignProcess, Wireframing | Wireframe stepper / process accordion |

---

## 3. Non-goals (do NOT do)

- Do **not** touch the other 20 layouts (ecommerce/corporate/contentNews/software).
- Do **not** introduce React/Vue/Svelte/Solid or any runtime-heavy lib.
- Do **not** create external i18n translation files — translations stay inline per component.
- Do **not** replace picsum/gradient placeholders with real binary image assets in this batch; keep image *references* in data but placeholder URLs are fine (real asset pipeline is a later batch).
- Do **not** redesign the `[theme].astro` router or `ThemeDock`.

---

## 4. Reuse existing infrastructure — don't reinvent

The repo already has scaffolding for this. **Build on it:**

- `src/stores/portfolio.store.ts` — already defines `ProjectData` interface + `activeProject` atom. Extend this interface rather than defining a parallel one.
- `src/components/domain/portfolio/ProjectModal.astro` — already a `<project-modal>` Web Component skeleton with `activeProject` wiring. Reuse it for the WaterfallGrid click-through; extend its rendered fields as needed.
- `src/components/common/` — `Button`, `Card`, `Badge`. Use these; do not hand-roll equivalents.
- Layout hierarchy `BaseLayout → PageLayout` — do not bypass.

---

## 5. Hard constraints (from CLAUDE.md — non-negotiable)

1. Interactivity = **Vanilla Web Components** (native Custom Elements) + Nano Stores only.
2. All client listeners registered inside `document.addEventListener("astro:page-load", …)` — **never** `DOMContentLoaded` (View Transitions will break otherwise).
3. `persistentAtom` only for values meant to survive reload; transient UI state uses `atom`.
4. TypeScript strict; every component keeps its `interface Props`.
5. i18n: `en` (default) + `zh-tw`, inline `translations` object, always `|| translations.en` fallback.
6. Tailwind: mobile-first, dark mode via `dark:` prefix, inline SVG icons with `currentColor`.
7. Conventional Commits, e.g. `feat(portfolio): add projects content collection`.

---

## 6. Phased plan

### Phase 1 — Design the `projects` Content Collection
- Add a `projects` data collection in `src/content/config.ts` with a Zod schema.
- Follow the **themes pattern** for i18n: split by locale as `src/content/projects/projects-en.json` and `projects-zh-tw.json` (mirrors `portfolio-en.json` / `portfolio-zh-tw.json`). Keep a stable shared `id` across locales so layouts can cross-reference.
- Schema must cover the union of facets the 5 layouts need. Model shared core fields + optional facet objects, mirroring how `contentFocus` already uses optional domain fields:
  - **Core:** `id`, `title`, `summary`, `heroImage` (ref/URL string), `tags: string[]`, `year`, `link?`
  - **Engineer facet (optional):** `stack: string[]`, `solution`, `repoUrl`, `codeSnippet?`
  - **Photographer facet (optional):** `exif?` (`{ camera, lens, iso, shutter, aperture }`), `seriesName?`, `location?`
  - **Case-study facet (optional):** `problem`, `process: string[]`, `wireframes?: {label,title}[]`
  - **Consultant facet (optional):** `testimonial?` (`{ quote, author, role }`), `serviceProcess?: string[]`
  - **Designer facet (optional):** `concept?`, `guidelines?`
- **STOP-AND-CONFIRM decision:** whether all layouts draw from *one shared project set* (recommended — same portfolio, different lenses) vs. per-theme project subsets. Default to the shared set unless there's a strong reason; note the choice in the ADR.

**Verify:** `npm run build` passes Zod validation with the seed data from Phase 2.

### Phase 2 — Seed realistic data
- Author **4–6 real-feeling projects** for Kevin Hsieh (Senior Technical Program Manager / Cloud Architecture). Content should be domain-coherent — an engineer project has a real-sounding stack + solution; a photographer entry has plausible EXIF + series name; a UX entry has an actual problem→process→wireframe arc.
- Full parity between `en` and `zh-tw`.
- No lorem ipsum. No `$42,093.12`-style filler.

**Verify:** both JSON files parse; counts and `id`s match across locales.

### Phase 3 — Refactor the 5 layouts to consume the collection
- Each layout receives the project list (via the page loading the `projects` collection alongside `themes`, or a shared loader — pick the cleaner Astro-idiomatic path and document it).
- Replace hardcoded `t.items` / mock arrays with real data. Keep the inline `t` object for *UI chrome strings only* (labels, buttons), not for project content.
- Each layout reads the facet relevant to its theme (engineer → `stack`/`solution`; photographer → `exif`; etc.) and degrades gracefully when a facet is absent.

**Verify:** `npm run dev`, visit all 5 `/en/explore/portfolio/<id>` and `/zh-tw/...` routes; each renders seeded data, no console errors.

### Phase 4 — Interactivity (Web Components)
Build the per-layout interaction listed in the §2 table. Each as a Custom Element, state via Nano Stores where cross-component (reuse `activeProject`), listeners inside `astro:page-load`. Carousels must support keyboard (←/→) and be dark-mode correct.

**Verify:** interactions work after client-side View Transition navigation (navigate away and back — listeners must re-bind).

---

## 7. Acceptance criteria

- [ ] `npm run build` green; TypeScript strict passes.
- [ ] Editing a project in `projects-en.json` visibly changes ≥3 of the 5 layouts.
- [ ] All 5 layouts render in both locales with full content parity.
- [ ] Every interaction survives a View Transition (no dead listeners).
- [ ] Zero new runtime frameworks in `package.json` diff.
- [ ] One ADR added under `docs/adr/` recording the shared-vs-per-theme data decision and the collection-loading approach.
- [ ] Commits follow Conventional Commits, logically sequenced (schema → data → refactor → interactivity).

---

## 8. Suggested commit sequence
1. `feat(content): add projects content collection schema + ADR`
2. `feat(content): seed portfolio projects (en + zh-tw)`
3. `refactor(portfolio): render WaterfallGrid + StandardDivided from projects data`
4. `refactor(portfolio): render Carousel + CaseStudy + LongPageLanding from projects data`
5. `feat(portfolio): add web-component interactions (carousel, filter, stepper, modal)`

---

## 9. Notes for the agent
- Read `CLAUDE.md`, `src/types/Theme.ts`, `src/content/config.ts`, and all 5 target layouts before writing code.
- When a design decision is genuinely ambiguous (§6 Phase 1 stop-and-confirm), surface it rather than guessing silently.
- Prefer extending `ProjectData` in `portfolio.store.ts` over a new parallel type.
- Keep diffs scoped to portfolio; if a change tempts you into the router or shared components, flag it instead of expanding scope.
