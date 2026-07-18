# Task Spec — Showcase Interaction Pass

> **Scope of Batch 1:** The 5 `software` category layouts only. This is the pilot batch for the interaction pass; it doubles as the template for the remaining 3 categories (`corporate`, `ecommerce`, `contentNews`), which are out of scope for this run.
> **Repo:** `Kai-Digital-Lab/kairos` · read `CLAUDE.md` before touching anything.

---

## 1. Objective

The 4 non-portfolio theme categories are **sales showcase templates**. Their content is already domain-coherent bilingual mock (not lorem ipsum), but every layout is **100% static** — no `<script>`, no Custom Elements, no `data-*`. Clicking anything does nothing, which is what makes them feel hollow.

This pass adds **one signature native Web Component interaction per layout**, mirroring the pattern already merged for the portfolio category (PR #17). It deliberately does **not** introduce a `projects`-style content collection — the real-data layer (ADR-0008) is overkill for demo templates nobody operates real content on.

**Definition of done in one line:** each of the 5 software layouts has one working, View-Transition-safe interaction, driven entirely from DOM `data-*` attributes so a future data-layer migration is a template swap.

---

## 2. In scope — the 5 layouts

| Layout | Signature interaction | Custom element |
|---|---|---|
| `FreemiumSinglePageLayout` | Monthly / annual billing toggle | `<billing-toggle>` |
| `ProjectManagementKanbanLayout` | Drag-and-drop cards between columns | `<kanban-board>` |
| `FintechDataLayout` | Timeframe tabs (1D / 1W / 1M) swap the chart + price | `<data-chart>` |
| `EnterpriseSalesLayout` | Accordion on the "Why choose us" reasons | `<sales-accordion>` |
| `MobileAppVerticalLayout` | Tap-to-check the in-phone task list | `<phone-screen>` |

---

## 3. Two disciplines (non-negotiable)

These are what keep a future "inline mock → content collection" migration transparent to the interaction layer:

1. **Interaction state is read from rendered DOM `data-*` attributes, never from the inline `t` object inside `<script>`.** Data needed for more than one visual state (annual prices, multiple chart series, checked state) is *rendered into the DOM* (may be hidden) so the script only reads the DOM.
2. **Never hardcode counts or categories in JS.** Derive them from the DOM via `querySelectorAll`.

---

## 4. The Web Component pattern to mirror

Source of truth: `src/components/domain/portfolio/FullBleedCarouselLayout.astro`.

- The root wrapper **is** the hyphenated custom element tag (add `block` to its `class` — custom elements are `display:inline` by default).
- All logic in a single trailing `<script>`; class definition + guarded registration:
  ```js
  if (!customElements.get("x-y")) customElements.define("x-y", XY);
  ```
- **Local listeners** (clicks on child elements) bind inside `connectedCallback` via `this.querySelector(...)` — they re-bind automatically because View Transitions construct a fresh element instance each navigation.
- **Global listeners** (`document`/`window`) use a **class-field arrow function** for a stable reference, added in `connectedCallback`, removed in `disconnectedCallback`.
- Visual changes only via `classList.toggle(...)`, `textContent`, and moving existing nodes — never re-render.
- Accessibility: real `<button>`s or `role` + `tabindex="0"` for triggers; `aria-expanded` / `aria-pressed` reflect state; keyboard-operable (Enter/Space).

---

## 5. Hard constraints (from CLAUDE.md)

1. Interactivity = Vanilla Web Components only. No React/Vue/Svelte/Solid; `package.json` untouched.
2. Custom Element lifecycle (`connectedCallback` / `disconnectedCallback`) is the View-Transitions strategy — do not use `DOMContentLoaded`.
3. TypeScript strict; keep each component's `interface Props`.
4. i18n: `en` (default) + `zh-tw`, inline `t` object, always `|| translations.en` fallback. Any new mock data (annual prices, extra chart series, task labels) is added to **both** locales with parity.
5. Tailwind: mobile-first, dark mode via `dark:`, inline SVG icons with `currentColor`.
6. Scope discipline: touch only the 5 software layouts + this spec. Do not touch the router, `ThemeDock`, or shared components.

---

## 6. Acceptance criteria

- [ ] `npm run build` green; `astro check` adds no new errors (4 pre-existing unrelated errors remain).
- [ ] All 5 interactions work in both locales across all 10 routes.
- [ ] Every interaction survives a View Transition — operate it, navigate away via ThemeDock, navigate back, operate it again.
- [ ] Zero interaction state read from the JS `t` object inside `<script>`; all read from DOM `data-*`.
- [ ] No hardcoded counts/categories in JS.
- [ ] `package.json` untouched.
- [ ] Conventional Commits, one `feat(software)` commit per layout.

---

## 7. Suggested commit sequence

1. `docs(specs): add showcase interaction pass spec`
2. `feat(software): add billing toggle to FreemiumSinglePageLayout`
3. `feat(software): add drag-and-drop to ProjectManagementKanbanLayout`
4. `feat(software): add timeframe tabs to FintechDataLayout`
5. `feat(software): add accordion to EnterpriseSalesLayout`
6. `feat(software): add tap-to-check tasks to MobileAppVerticalLayout`

---

## 8. Notes for future batches

`corporate`, `ecommerce`, `contentNews` follow the same disciplines and pattern. Reuse the interaction primitives established here (toggle, accordion, tabs) rather than re-inventing them per layout.
