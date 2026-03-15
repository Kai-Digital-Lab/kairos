# ADR-0006: Shared Atomic Components Refactor

## Status

Accepted

## Context

After Phase 3, the 25 theme layouts (5 categories x 5 themes) each contained duplicated UI patterns — buttons, badges, and cards with inconsistent HTML structures and utility classes. This created maintenance overhead and visual inconsistency across themes.

## Decision

Introduce shared atomic components in `src/components/common/` and refactor all theme layouts to consume them:

- **Button.astro** — variants (primary, secondary, outline, ghost), sizes (sm, md, lg), dynamic element (button vs anchor)
- **Badge.astro** — variants (neutral, success, warning, error, info, primary), sizes (sm, md)
- **Card.astro** — variants (default, hover, bordered)

Each component follows the established pattern:

- `baseStyles` + `variants` object + `className` override
- `{...rest}` spread for arbitrary attributes
- `<slot />` for content projection

Theme-specific aesthetics preserved via Tailwind class overrides on the `class` prop.

## Consequences

### Positive

- Single source of truth for core UI elements
- Visual consistency across all 25 theme layouts
- Reduced code duplication — theme layouts became simpler
- Easier to add new variants or fix styling bugs globally

### Negative

- Theme layouts lost some self-containment — they now depend on shared components
- Override conflicts possible when theme-specific Tailwind classes clash with base styles
- Required a large-scale refactor touching all theme layout files
