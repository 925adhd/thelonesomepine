# CLAUDE.md — The Lonesome Pine

This file provides instructions for AI developers working on this project.

## Project Overview

- **Business**: The Lonesome Pine — a local plant nursery
- **Location**: Inside The Rabbit Hole vendor area, Leitchfield, Grayson County, Kentucky
- **Stack**: Next.js (App Router), TypeScript, Tailwind CSS v4
- **Style**: Modern country, clean, plant-focused. Dark green (`pine-*`) and white.

## Project Structure

```
app/              → Pages (App Router). Each folder = a route.
components/       → Reusable UI components
  layout/         → Header, Footer (used in root layout)
  home/           → Homepage-specific sections
  ui/             → Shared UI primitives (PlantCard, SectionHeading, etc.)
config/           → Site config (site.ts) and metadata config (metadata.ts)
data/             → JSON content files (plants.json, etc.)
lib/              → Utilities (structured-data.ts, utils.ts)
types/            → TypeScript type definitions
public/images/    → Static images
docs/             → Project documentation
```

## How to Add a New Page

1. Create `app/<page-name>/page.tsx`
2. Export `metadata` for SEO (title, description)
3. Use `SectionHeading` for the page header
4. Add the route to `config/site.ts` → `navigation` array
5. Add the route to `app/sitemap.ts`

## How to Add a New Component

1. Create the file in the appropriate `components/` subfolder
2. Use TypeScript interfaces for all props
3. Use semantic HTML elements
4. Keep components as server components unless interactivity is needed
5. Only add `"use client"` if the component uses hooks, event handlers, or browser APIs

## How to Edit Content

- **Plant data**: Edit `data/plants.json`
- **Business info** (name, phone, address, hours): Edit `config/site.ts`
- **SEO metadata**: Edit `config/metadata.ts` for global, or per-page `metadata` exports
- **Navigation links**: Edit `config/site.ts` → `navigation` array

## How to Update SEO

- Global metadata: `config/metadata.ts`
- Per-page metadata: Export `metadata` from each `page.tsx`
- Structured data: `lib/structured-data.ts`
- Sitemap: `app/sitemap.ts`
- Robots: `app/robots.ts`
- Title template: Set in `config/metadata.ts` → `title.template`

## Coding Standards

- **TypeScript**: Use types everywhere. Define shared types in `types/index.ts`
- **Components**: Small, focused, one responsibility
- **Semantic HTML**: Use `<section>`, `<article>`, `<nav>`, `<address>`, etc.
- **Accessibility**: Include `aria-label`, `aria-labelledby`, `alt` text, proper heading hierarchy
- **Server components by default**: Only use `"use client"` when necessary
- **No inline styles**: Use Tailwind classes only
- **Data separation**: Content lives in `data/` and `config/`, not in components

## Naming Conventions

- **Files**: PascalCase for components (`PlantCard.tsx`), camelCase for utilities (`utils.ts`)
- **CSS**: Tailwind utility classes only. Custom theme values in `globals.css` `@theme`
- **Types**: PascalCase, exported from `types/index.ts`

## Critical Rules

1. **Do not remove or modify the structured data** in `lib/structured-data.ts` without understanding its SEO impact
2. **Maintain heading hierarchy** (h1 → h2 → h3, no skipping)
3. **Keep all images optimized** — use Next.js `Image` component when adding real images
4. **Don't break the mobile layout** — design mobile-first
5. **Keep the green/white color scheme** — use `pine-*` and `primary` theme tokens
6. **Test with `npm run build`** before considering changes complete

## Deployment

- Deployed on Vercel
- Push to `main` branch triggers automatic deployment
- Environment variables must be set in Vercel dashboard
