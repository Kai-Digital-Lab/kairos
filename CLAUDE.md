# Project Kairos - CLAUDE.md

## Project Overview

Kairos is the official website for Kai Digital Lab (K-LAB), built with Astro 5.0+ following a **Zero-Runtime Overhead** philosophy. No heavy JS frameworks (React/Vue/Svelte) — interactivity uses Vanilla Web Components and Nano Stores only.

## Tech Stack

- **Framework:** Astro 5.0+ (SSR mode with Cloudflare adapter)
- **Styling:** Tailwind CSS v3 with dark mode (`class` strategy)
- **State:** Nano Stores (atom + persistentAtom)
- **Type Safety:** TypeScript strict mode
- **Content:** Astro Content Collections with Zod schemas
- **Deployment:** Cloudflare Pages

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build

## Project Structure

```
src/
├── components/
│   ├── common/       # UI atoms (Button, Card, Badge)
│   ├── domain/       # Business logic components by category
│   ├── layout/       # Header, Footer, SEO
│   └── sections/     # Landing page sections (Hero, About, Services...)
├── content/          # Content Collections (blog, themes)
├── layouts/          # BaseLayout → PageLayout hierarchy
├── pages/            # Routes ([lang]/index, blog, 404)
├── stores/           # Nano Stores (theme, layout, portfolio)
├── styles/           # Global CSS (Tailwind directives)
└── types/            # TypeScript interfaces
```

## Architecture Rules

1. **No heavy frameworks.** Do not introduce React, Vue, Svelte, or similar runtime-heavy libraries. Use native Custom Elements for client interactivity.
2. **Layout hierarchy:** `BaseLayout` (HTML/head/theme init) → `PageLayout` (Header + slot + Footer). Always compose through this chain.
3. **Component classification:** `common/` = reusable UI primitives, `sections/` = landing page blocks, `domain/` = business-specific logic.

## Component Conventions

### Props Pattern

```astro
---
interface Props {
    variant?: "primary" | "secondary";
    class?: string;
    [key: string]: any;
}

const { variant = "primary", class: className, ...rest } = Astro.props;

const baseStyles = "rounded-lg px-4 py-2";
const variants = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-200 text-gray-800",
};
const classes = [baseStyles, variants[variant], className].join(" ");
---

<div class={classes} {...rest}>
    <slot />
</div>
```

### Key Patterns

- Always spread `{...rest}` on root element
- Combine styles via string array `.join(" ")`
- Accept `class` prop for external overrides
- Dark mode: use `dark:` prefix in Tailwind classes

## I18n Rules

- **Locales:** `en` (default), `zh-tw`
- **Routing:** Prefix all routes — `/en/...`, `/zh-tw/...`
- **Translations are inline** within each component, not in external files:

```typescript
const lang = Astro.currentLocale || "en";

const translations = {
    en: { title: "Hello" },
    "zh-tw": { title: "你好" },
};

const t = translations[lang as keyof typeof translations] || translations.en;
```

- Always fallback to `translations.en`
- Construct locale-aware links with `/${lang}/...`

## State Management

Use Nano Stores only. Pattern:

```typescript
// Define
import { atom } from 'nanostores';
export const isMenuOpen = atom(false);

// Use in <script>
document.addEventListener("astro:page-load", () => {
    isMenuOpen.subscribe((value) => { /* react */ });
});
```

- Use `persistentAtom` for values that survive page reload (e.g., theme preference)
- Always listen inside `astro:page-load` to support View Transitions

## Styling Guidelines

- Mobile-first responsive design (`md:` breakpoints)
- Dark mode via `.dark` class on `<html>`
- Icons are inline SVGs using `currentColor`
- Use `@tailwindcss/typography` (`prose` class) for rich content
- Animations via Tailwind utilities (`transition-all`, `duration-300`)

## Content Collections

- `blog`: Markdown content with Zod-validated frontmatter (title, description, pubDate, tags, etc.)
- `themes`: JSON data defining layout themes with content focus metadata

## Git Conventions

Use [Conventional Commits](https://www.conventionalcommits.org/) format:

```
type(scope): description
```

**Types:** `feat`, `fix`, `refactor`, `docs`, `chore`, `build`, `test`, `perf`

**Scopes (optional):** `core`, `ui`, `content`, `themes`, `blog`, `seo`, `deps`

Examples:
- `feat(blog): add blog index page with pagination`
- `fix(seo): resolve duplicate canonical tags in BaseLayout`
- `refactor(themes): migrate layouts to shared atomic components`
- `docs: add ADR for rendering strategy`

## Do NOT

- Add runtime JS frameworks (React, Vue, Svelte, Solid)
- Create external i18n translation files — keep translations inline
- Use `document.addEventListener("DOMContentLoaded", ...)` — use `astro:page-load` instead
- Skip TypeScript interfaces for component props
