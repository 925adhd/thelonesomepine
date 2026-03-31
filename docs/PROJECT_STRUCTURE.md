# Project Structure

## Directory Overview

```
lonesomepine/
├── app/                    # Next.js App Router pages
│   ├── about/page.tsx      # About page
│   ├── plants/page.tsx     # Plants/inventory page
│   ├── visit/page.tsx      # Visit us / location page
│   ├── contact/page.tsx    # Contact page
│   ├── globals.css         # Global styles and Tailwind theme
│   ├── layout.tsx          # Root layout (header, footer, fonts, structured data)
│   ├── not-found.tsx       # Custom 404 page
│   ├── page.tsx            # Home page
│   ├── robots.ts           # Robots.txt generation
│   └── sitemap.ts          # Sitemap.xml generation
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Site header with navigation
│   │   └── Footer.tsx      # Site footer
│   ├── home/
│   │   ├── Hero.tsx        # Homepage hero section
│   │   ├── FeaturedPlants.tsx  # Featured plants grid
│   │   ├── AboutPreview.tsx    # About section preview
│   │   └── LocationPreview.tsx # Location/map preview
│   └── ui/
│       ├── PlantCard.tsx       # Plant product card
│       └── SectionHeading.tsx  # Reusable page/section heading
│
├── config/
│   ├── site.ts             # Site-wide configuration (name, address, hours, nav)
│   └── metadata.ts         # SEO metadata defaults
│
├── data/
│   └── plants.json         # Plant inventory data
│
├── lib/
│   ├── structured-data.ts  # JSON-LD structured data for LocalBusiness
│   └── utils.ts            # Utility functions (cn, formatPrice)
│
├── types/
│   └── index.ts            # TypeScript type definitions
│
├── public/
│   ├── images/             # Site images
│   │   └── plants/         # Plant photos
│   └── icons/              # Favicon and app icons
│
├── docs/                   # Documentation
├── hooks/                  # Custom React hooks (future use)
├── styles/                 # Additional styles (future use)
└── utils/                  # Additional utilities (future use)
```

## Architecture Decisions

### Server Components by Default
All components are server components unless they need client interactivity (e.g., Header with mobile menu toggle). This maximizes performance and minimizes JavaScript sent to the browser.

### Data Separation
Content is stored in JSON files (`data/`) and configuration files (`config/`), not hardcoded in components. This makes content updates simple and prepares for a future CMS.

### Centralized SEO
Global metadata is in `config/metadata.ts`. Each page exports its own `metadata` for per-page overrides. Structured data is generated in `lib/structured-data.ts` and injected in the root layout.

### Tailwind v4 Theme
Custom colors are defined in `app/globals.css` using the `@theme` directive. The `pine-*` color scale provides the brand palette, with semantic aliases like `primary`, `text`, and `surface`.
