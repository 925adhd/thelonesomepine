# 🌲 The Lonesome Pine

A modern website for The Lonesome Pine — a local plant nursery inside The Rabbit Hole vendor area in Leitchfield, Grayson County, Kentucky.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm (comes with Node.js)

### Setup

```bash
# Clone the repository
git clone <repo-url>
cd lonesomepine

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start development server       |
| `npm run build`   | Build for production            |
| `npm run start`   | Start production server         |
| `npm run lint`    | Run ESLint                      |
| `npm run format`  | Format code with Prettier       |

## Project Structure

```
app/              → Routes and pages
components/       → React components (layout, home, ui)
config/           → Site configuration and metadata
data/             → JSON content (plants, etc.)
lib/              → Utility functions
types/            → TypeScript type definitions
public/           → Static assets (images, icons)
docs/             → Project documentation
```

See [PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md) for detailed documentation.

## Editing Content

- **Plants**: Edit `data/plants.json`
- **Business info**: Edit `config/site.ts`
- **SEO**: Edit `config/metadata.ts`

See [CONTENT_EDITING.md](docs/CONTENT_EDITING.md) for a full guide.

## Documentation

- [Project Structure](docs/PROJECT_STRUCTURE.md)
- [SEO Guide](docs/SEO_GUIDE.md)
- [Component Guide](docs/COMPONENT_GUIDE.md)
- [Styling Guide](docs/STYLING_GUIDE.md)
- [Content Editing](docs/CONTENT_EDITING.md)
- [Deployment](docs/DEPLOYMENT.md)
- [CLAUDE.md](CLAUDE.md) — Instructions for AI developers

## License

Private project. All rights reserved.
