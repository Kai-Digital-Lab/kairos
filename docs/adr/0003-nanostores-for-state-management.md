# ADR-0003: Nano Stores for State Management

## Status

Accepted

## Context

Kairos needs lightweight client-side state for theme toggling, mobile menu, and active portfolio selection. Traditional solutions (Redux, Zustand, Pinia) are framework-coupled and add significant bundle size, conflicting with the Zero-Runtime philosophy (ADR-0001).

## Decision

Use **Nano Stores** (`nanostores` + `@nanostores/persistent`) for all client-side state:

- `atom()` for simple reactive values (e.g., `isMenuOpen`)
- `persistentAtom()` for values persisted to `localStorage` (e.g., theme preference)
- Subscribe to stores inside `astro:page-load` event to support View Transitions
- Store files follow `[feature].store.ts` naming convention in `src/stores/`

## Consequences

### Positive

- Under 1KB total bundle size — aligns with Zero-Runtime philosophy
- Framework-agnostic — works with Vanilla JS, no React/Vue dependency
- `persistentAtom` provides localStorage sync with zero boilerplate
- Simple API: `atom()`, `.get()`, `.set()`, `.subscribe()`

### Negative

- No devtools for debugging state changes (unlike Redux DevTools)
- Limited to simple state patterns — not suited for complex derived state
- Must manually manage subscriptions inside `astro:page-load` for View Transitions compatibility
