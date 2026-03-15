# ADR-0004: Atomic Design Component Architecture

## Status

Accepted

## Context

As the landing page grew (Hero, Portfolio, Services, Pricing, About, Contact), components needed clear classification to prevent a flat, unstructured `components/` directory. We needed a system that separates reusable UI primitives from business-specific logic.

## Decision

Adopt a **domain-driven Atomic Design** structure under `src/components/`:

```
components/
├── common/       # UI atoms — Button, Card, Badge
├── sections/     # Landing page blocks — Hero, About, Services, Contact
├── domain/       # Business logic by category — corporate/, ecommerce/, software/
└── layout/       # Structural — Header, Footer, SEO
```

Component conventions:

- Props defined via `interface Props` with `[key: string]: any` for pass-through
- Styles composed as `[baseStyles, variants[variant], className].join(" ")`
- Always spread `{...rest}` on root element
- Accept `class` prop for external overrides

## Consequences

### Positive

- Clear mental model: "where does this component belong?"
- `common/` components are fully reusable across all pages and themes
- `domain/` isolates theme-specific layouts without polluting shared components
- Consistent prop and styling patterns across all components

### Negative

- Three-way classification can be ambiguous for edge cases
- `sections/` components contain inline translations, making them less portable
- New contributors need to understand the classification rules
