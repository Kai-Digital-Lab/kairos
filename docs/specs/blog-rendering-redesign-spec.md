# Design Spec — Blog Article Rendering Redesign

> **Issue:** #19 · **Scope:** blog article + index pages, type tokens, Shiki config.
> **Repo:** `Kai-Digital-Lab/kairos` · read `CLAUDE.md` before touching anything.

---

## 1. Objective

Give long-form bilingual (en / zh-tw) blog reading a distinctive **editorial identity** without
adding any runtime framework and without breaking the zero-runtime / View-Transition conventions.

The old article page read as generic: greyscale `prose-slate`, a centred narrow column, headings
sharing the body family, no Shiki theme, and a scroll-progress listener that leaked across
View-Transition navigations.

**Definition of done in one line:** a reader lands on a post and immediately recognises it as *this*
site — a Technical Director's editorial — with a working, non-leaking section rail.

---

## 2. Design concept — "The Technical Director's editorial layout"

Echo the author's 技術型導演 positioning and the site's engineering-proud tone by making
**monospace the structural accent** (section numbers, eyebrows, meta line). This deliberately avoids
the common AI-design defaults (cream + high-contrast serif + terracotta). Colour extends the existing
`primary` + `purple` gradient — no new palette.

### Type pairing (confirmed)

| Role | Face | Loading | Rationale |
|---|---|---|---|
| **Display** (H1, headings) | Space Grotesk (variable) | Latin webfont, blog pages only | Geometric, engineering-toned, has personality without the serif/cream cluster. |
| **Accent** (numbers, eyebrow, meta) | Space Mono | Latin webfont, blog pages only | Same lineage as Space Grotesk → coherent pairing; mono-as-structure fits the tone. |
| **Body** | system sans + CJK fallback | no download | `sans` token enriched with PingFang TC / Microsoft JhengHei / Noto Sans TC. |

**Why no CJK webfont:** Traditional-Chinese webfonts are heavy (hundreds of KB even subset). System
CJK fonts render zh-tw well and cost nothing — the leanness that the zero-runtime philosophy demands.
The `sans` enrichment is applied globally (system fonts only, no download), improving zh-tw everywhere.

Tokens live in `tailwind.config.mjs` as **new** `display` / `accent` keys — the global `mono` token is
left untouched, so the site header logo and other existing `font-mono` usages are unaffected.

---

## 3. Layout

- **Asymmetric two-column grid** at `lg`: `grid-cols-[13rem_minmax(0,1fr)]`, collapses to one column below.
- **Left-aligned display H1** (not centred), mono eyebrow above, mono meta line below
  (`date / author / reading time`, bilingual). Reading time is computed inline from `post.body`
  (Latin words ÷ 200 + CJK glyphs ÷ 400).
- **Drop-cap** on the opening paragraph via a Tailwind arbitrary variant on the prose container.
- **Reading measure** replaces `max-w-none`: `70ch` for Latin, `34em` (narrower) for CJK.

---

## 4. Signature section rail

- Auto-generated **server-side** from `render(post).headings` (h2/h3), numbered `01 / 02 …` in the
  accent font. Numbering is justified because posts are genuinely sequential (`## 第一步…`, `## 第二步…`).
- **Heading anchors:** Astro already auto-adds matching `id`s to rendered headings (verified in the
  build output, incl. CJK slugs) — so **`rehype-slug` is NOT needed**; the only new deps are the two
  `@fontsource` packages.
- Rail links are **real anchors** (`<a href="#slug">`) — keyboard- and no-JS-friendly.
- **Sticky** at `top-24` to clear the `fixed h-16` header.
- **Integrated reading progress:** the standalone top scroll-bar is folded in. One passive scroll
  handler drives both the rail's progress fill + `%` label (desktop) and a thin top bar (mobile).
- Rail is `hidden lg:block`; on mobile the top bar (`lg:hidden`) takes over.

### Lifecycle — `<article-rail>` Custom Element

The rail is a native Custom Element mirroring the established pattern
(`FullBleedCarouselLayout.astro`, `ProjectModal.astro`): set up the `IntersectionObserver`
(active-section highlight, lifted from `Header.astro` scroll-spy) and the passive scroll listener in
`connectedCallback`; `observer.disconnect()` + `removeEventListener` in `disconnectedCallback`.
Because `<ClientRouter />` fires `connected`/`disconnected` on every View-Transition swap, listeners
**never accumulate** — this replaces (and fixes) the old leaking `astro:page-load` scroll listener.

---

## 5. Markdown polish

- `markdown.shikiConfig` set to dual themes (`github-light` / `github-dark`), `wrap: true`.
- The conflicting `prose-pre:bg-slate-900` is removed so Shiki controls the code background; dark mode
  swaps to the `--shiki-dark` CSS variables via `html.dark .astro-code` (class strategy) in `global.css`.
- Inline code uses the accent font; blockquotes use the `primary` accent, de-italicised.

---

## 6. Accessibility

- `prefers-reduced-motion` disables the global smooth-scroll (`global.css`).
- Rail links are real anchors with `aria-current` on the active section; keyboard focus visible.
- Contrast holds AA in light and dark.

---

## 7. Acceptance criteria (from issue #19)

- [x] `npm run build` green; `npx astro check` no new errors.
- [x] Not greyscale-only: display / accent / body roles visibly distinct; accent used with restraint.
- [x] Rail auto-generates from headings, tracks active section, integrates progress, collapses on mobile.
- [x] Renders in en + zh-tw; CJK glyphs intact; comfortable measure.
- [x] Scroll/rail listeners survive a View Transition and do not leak; no `DOMContentLoaded`.
- [x] Shiki dual theme applied; code consistent light + dark.
- [x] Zero new runtime frameworks; client JS stays lean (only the two `@fontsource` build deps added).
- [x] a11y floor: reduced-motion respected, focus visible, contrast AA, rail links are real anchors.
