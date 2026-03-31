# Content Editing Guide

## Quick Reference

| What to change          | File to edit              |
| ----------------------- | ------------------------- |
| Business name           | `config/site.ts`          |
| Phone number            | `config/site.ts`          |
| Email address           | `config/site.ts`          |
| Address                 | `config/site.ts`          |
| Business hours          | `config/site.ts`          |
| Social media links      | `config/site.ts`          |
| Navigation links        | `config/site.ts`          |
| Plant inventory         | `data/plants.json`        |
| Page titles/descriptions| Each `app/*/page.tsx`     |
| Global SEO              | `config/metadata.ts`      |
| Homepage hero text      | `components/home/Hero.tsx`|
| About page text         | `app/about/page.tsx`      |

## Editing Plant Data

Plants are stored in `data/plants.json`. Each plant has this structure:

```json
{
  "id": "unique-slug",
  "name": "Plant Name",
  "category": "Houseplants",
  "price": 12.99,
  "description": "Brief description of the plant.",
  "care": "Care instructions.",
  "image": "/images/plants/filename.jpg",
  "inStock": true,
  "featured": false
}
```

### Categories

Valid categories: `"Houseplants"`, `"Outdoor Plants"`, `"Succulents"`, `"Vegetable Starts"`

To add a new category, also update `types/index.ts` → `PlantCategory` and `app/plants/page.tsx` → `categoryOrder`.

### Featured Plants

Set `"featured": true` to show a plant on the homepage. Keep this to 4 plants for the best layout.

## Adding Plant Images

1. Add the image to `public/images/plants/`
2. Use a descriptive filename (e.g., `golden-pothos.jpg`)
3. Optimize the image (compress, reasonable dimensions ~800x800px)
4. Update the plant's `"image"` field in `data/plants.json`

## Editing Business Hours

In `config/site.ts`, update the `hours` array. Use `"Closed"` for the `open` field on closed days:

```ts
{ day: "Monday", open: "Closed", close: "" },
{ day: "Tuesday", open: "10:00 AM", close: "5:00 PM" },
```
