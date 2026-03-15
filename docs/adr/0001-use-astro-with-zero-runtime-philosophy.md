# ADR-0001: Use Astro 5 with Zero-Runtime Overhead Philosophy

## Status

Accepted

## Context

Project Kairos needed a framework for building a high-performance portfolio and digital lab website. Key requirements were:

- Extreme performance with minimal JavaScript payload
- Server-first architecture for SEO
- Ability to use multiple UI paradigms without framework lock-in
- Deployment to edge platforms (Cloudflare Pages)

Options considered: Next.js, Nuxt, SvelteKit, Astro.

## Decision

Use **Astro 5.0+** as the core framework with a strict Zero-Runtime Overhead philosophy:

- No heavy JS frameworks (React, Vue, Svelte) shipped to the client
- Client interactivity handled exclusively via Vanilla Web Components and inline `<script>` tags
- Server-first rendering with Cloudflare adapter for edge deployment
- View Transitions API for SPA-like navigation without a client-side router

## Consequences

### Positive

- Near-zero JavaScript payload on initial page load
- Excellent Lighthouse scores out of the box
- Framework-agnostic — content and styling are not coupled to any runtime
- Edge deployment via Cloudflare Pages with minimal cold start

### Negative

- Complex client-side interactivity requires more manual effort (no React/Vue ecosystem)
- Team members must be comfortable with Vanilla JS and Custom Elements
- Some Astro ecosystem integrations assume framework usage (e.g., React islands)
