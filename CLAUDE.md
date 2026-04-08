# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Velourlux is a luxury e-commerce marketing site for custom and ready-made window treatments (curtains, shades, blinds, hardware). Currently a static frontend with no backend/API integration.

## Development Commands

All commands run from `velourlux-site/`:

```bash
npm run dev      # Local dev server at http://localhost:3000
npm run build    # Static export to /out directory
npm run start    # Serve production build
npm run lint     # ESLint with Next.js + TypeScript rules
```

No test framework is configured.

## Architecture

- **Next.js 16.2.2** with App Router, React 19, TypeScript
- **Static export** (`output: "export"` in next.config.ts) — no server-side features (no API routes, no SSR, no ISR)
- **GitHub Pages deployment** with `basePath: "/Velourlux"` — all asset paths must be prefixed accordingly
- **Vanilla CSS** in `src/app/globals.css` (~600 lines) — no Tailwind, no CSS modules, no CSS-in-JS
- **No external libraries** beyond React and Next.js

### Source Layout

- `src/app/page.tsx` — Homepage; contains product data as static arrays passed as props to components
- `src/app/layout.tsx` — Root layout with metadata and font imports
- `src/app/globals.css` — All styles (BEM-like classes, responsive via `clamp()` and media queries)
- `src/components/` — Page section components (Header, Hero, TrendingCarousel, Footer, etc.)

### Client vs Server Components

Client components (`"use client"`): Header, Footer, TrendingCarousel (need interactivity/scroll/refs).
Everything else is a server component.

## Important Notes

- **Next.js 16 has breaking changes** vs earlier versions. Read docs in `node_modules/next/dist/docs/` before using unfamiliar APIs.
- **Image paths** must use `basePath` prefix (`/Velourlux/images/...`) for GitHub Pages. Images are unoptimized (`images: { unoptimized: true }`).
- **Product data** lives inline in `src/app/page.tsx`, not in a database or CMS.
- **Deployment** is automatic: push to `main` triggers GitHub Actions → static build → GitHub Pages.
- Reference content and original assets are in `original-site/` at the repo root.
