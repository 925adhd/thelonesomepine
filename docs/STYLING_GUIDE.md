# Styling Guide

## Framework

This project uses **Tailwind CSS v4** with the `@tailwindcss/postcss` plugin.

## Theme

Custom theme values are defined in `app/globals.css` using the `@theme` directive.

### Brand Colors

| Token          | Hex       | Usage                          |
| -------------- | --------- | ------------------------------ |
| `pine-50`      | `#f0fdf4` | Light backgrounds, hover states|
| `pine-100`     | `#dcfce7` | Borders, dividers              |
| `pine-200`     | `#bbf7d0` | Secondary backgrounds          |
| `pine-500`     | `#22c55e` | Accent, buttons                |
| `pine-700`     | `#15803d` | Medium emphasis text           |
| `pine-900`     | `#14532d` | Primary text, headings         |
| `pine-950`     | `#052e16` | Dark backgrounds               |

### Semantic Tokens

| Token           | Maps to    | Usage                  |
| --------------- | ---------- | ---------------------- |
| `primary`       | `pine-900` | Headings, primary text |
| `primary-light` | `pine-800` | Hover states           |
| `primary-dark`  | `pine-950` | Footer background      |
| `accent`        | `pine-500` | CTA buttons, highlights|
| `surface`       | `#ffffff`  | Page background        |
| `surface-muted` | `#f9fafb`  | Alternate backgrounds  |
| `text`          | `#1f2937`  | Body text              |
| `text-muted`    | `#6b7280`  | Secondary text         |

## Design Tokens

- **Border radius**: `rounded-xl` (cards), `rounded-2xl` (larger containers), `rounded-full` (badges)
- **Shadows**: `shadow-sm` (cards), `shadow-md` (buttons), `shadow-lg` (hero CTAs)
- **Spacing**: Use Tailwind's spacing scale. Sections use `py-16 sm:py-24`.
- **Max width**: Content constrained to `max-w-6xl` with `px-4 sm:px-6 lg:px-8` padding.
- **Typography**: Inter font via Google Fonts. System font fallback stack.

## Responsive Design

Mobile-first approach. Key breakpoints:
- `sm:` (640px) — minor layout adjustments
- `md:` (768px) — desktop navigation shows
- `lg:` (1024px) — multi-column grids

## Rules

1. Use Tailwind utility classes only — no custom CSS except in `globals.css`
2. Use semantic color tokens (`text-primary`, `bg-pine-50`) not raw hex values
3. Never use `!important`
4. Keep the green/white color scheme — do not introduce new brand colors
5. Maintain consistent spacing and border radius patterns
