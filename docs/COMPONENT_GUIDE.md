# Component Guide

## Component Organization

```
components/
├── layout/     → Structural components (Header, Footer)
├── home/       → Homepage-specific sections
└── ui/         → Reusable UI primitives
```

## Creating a New Component

### Server Component (default)

```tsx
// components/ui/ExampleCard.tsx
interface ExampleCardProps {
  title: string;
  description: string;
}

export function ExampleCard({ title, description }: ExampleCardProps) {
  return (
    <article className="rounded-xl border border-pine-100 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-text-muted">{description}</p>
    </article>
  );
}
```

### Client Component (only when needed)

```tsx
"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

## Rules

1. **One component per file** — named export matching the filename
2. **TypeScript interfaces** for all props
3. **Semantic HTML** — use `<section>`, `<article>`, `<nav>`, etc.
4. **Accessibility** — aria labels, proper headings, keyboard navigation
5. **Server-first** — only use `"use client"` when you need hooks or event handlers
6. **No inline styles** — Tailwind only
7. **No data fetching in UI components** — pass data as props

## Existing Components

| Component           | Type   | Location                        | Purpose                     |
| ------------------- | ------ | ------------------------------- | --------------------------- |
| Header              | Client | `components/layout/Header.tsx`  | Site navigation             |
| Footer              | Server | `components/layout/Footer.tsx`  | Site footer                 |
| Hero                | Server | `components/home/Hero.tsx`      | Homepage hero banner        |
| FeaturedPlants      | Server | `components/home/FeaturedPlants.tsx` | Featured plants grid   |
| AboutPreview        | Server | `components/home/AboutPreview.tsx`   | About section on home  |
| LocationPreview     | Server | `components/home/LocationPreview.tsx`| Location card on home  |
| PlantCard           | Server | `components/ui/PlantCard.tsx`   | Plant product card          |
| SectionHeading      | Server | `components/ui/SectionHeading.tsx`   | Page/section heading   |
