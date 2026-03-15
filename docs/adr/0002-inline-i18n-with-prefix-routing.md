# ADR-0002: Inline I18n with Prefix Routing

## Status

Accepted

## Context

Kairos needs to support English (`en`) and Traditional Chinese (`zh-tw`). We needed to decide:

1. **Routing strategy** — subpath (`/en/`, `/zh-tw/`) vs. subdomain vs. query parameter
2. **Translation management** — external JSON files vs. inline translation objects within components

Astro provides built-in i18n routing with `prefixDefaultLocale` support.

## Decision

- Use **Astro's built-in i18n** with `prefixDefaultLocale: true`, generating `/en/...` and `/zh-tw/...` routes
- Keep **translations inline** within each component as co-located objects:

```typescript
const lang = Astro.currentLocale || "en";
const translations = {
    en: { title: "Hello" },
    "zh-tw": { title: "你好" },
};
const t = translations[lang as keyof typeof translations] || translations.en;
```

- Always fallback to `translations.en` if locale is missing
- Root `/` redirects to `/en/`

## Consequences

### Positive

- No build tooling or external i18n libraries required
- Translations live next to the component that uses them — easy to find and update
- Astro handles locale detection and route generation natively
- Type-safe access to translation keys within each component

### Negative

- Duplicate translation structures across components (no single source of truth)
- Adding a third locale requires editing every component individually
- No shared translation memory or reuse of common strings (e.g., "Learn More")
- May need to revisit if scaling beyond 2 locales (see Issue #6)
