# SEO Guide

## Overview

SEO for The Lonesome Pine is configured for local business visibility. The goal is to rank well for plant nursery searches in the Leitchfield / Grayson County / Kentucky area.

## SEO Configuration Locations

| What                  | Where                          |
| --------------------- | ------------------------------ |
| Global metadata       | `config/metadata.ts`           |
| Per-page metadata     | Each `page.tsx` → `metadata`   |
| Structured data       | `lib/structured-data.ts`       |
| Sitemap               | `app/sitemap.ts`               |
| Robots.txt            | `app/robots.ts`                |
| Site info             | `config/site.ts`               |
| Open Graph image      | `public/images/og-image.jpg`   |

## Title Template

The title template is: `%s | The Lonesome Pine`

The home page uses the default: `The Lonesome Pine — Your Local Plant Nursery in Leitchfield, KY`

Each subpage overrides with its own title (e.g., "Our Plants | The Lonesome Pine").

## Structured Data (JSON-LD)

A `LocalBusiness` schema is injected in the root layout. It includes:
- Business name, description, URL
- Phone, email, address
- Opening hours
- Geographic coordinates
- Social media profiles
- Price range and payment methods

Update `config/site.ts` to change any of these values — the structured data is generated dynamically.

## Checklist for New Pages

1. Export `metadata` with `title` and `description`
2. Use proper heading hierarchy (h1 first, then h2, h3)
3. Add the route to `app/sitemap.ts`
4. Include internal links to other pages where natural
5. Use descriptive, keyword-relevant headings
6. Keep descriptions under 160 characters
7. Add alt text to all images

## Local SEO Tips

- Keep NAP (Name, Address, Phone) consistent across the site
- Mention "Leitchfield", "Grayson County", and "Kentucky" naturally in content
- Use location-specific terms (e.g., "Kentucky garden", "local nursery")
- Encourage Google Business Profile reviews
- Add real photos with descriptive filenames and alt text
