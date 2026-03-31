# Deployment Guide

## Platform: Vercel

This project is designed to deploy on [Vercel](https://vercel.com), the company behind Next.js.

## First-Time Setup

### 1. Create a Vercel Account

Sign up at [vercel.com](https://vercel.com) using your GitHub account.

### 2. Import the Repository

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Vercel auto-detects Next.js — no build settings changes needed

### 3. Set Environment Variables

In the Vercel dashboard → Project Settings → Environment Variables, add:

| Variable                    | Value                           |
| --------------------------- | ------------------------------- |
| `NEXT_PUBLIC_SITE_URL`      | `https://yourdomain.com`        |
| `NEXT_PUBLIC_GOOGLE_MAPS_KEY` | Your Google Maps API key (optional) |

### 4. Configure Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow the DNS configuration instructions
4. Vercel handles SSL automatically

## Deployment Workflow

Every push to the `main` branch triggers an automatic production deployment.

Pull requests create preview deployments with unique URLs for testing.

## Build Commands

| Command         | Purpose              |
| --------------- | -------------------- |
| `npm run build` | Production build     |
| `npm run start` | Start production server locally |

## Pre-Deployment Checklist

- [ ] Update `NEXT_PUBLIC_SITE_URL` in environment variables
- [ ] Replace placeholder phone/email in `config/site.ts`
- [ ] Add real plant images to `public/images/plants/`
- [ ] Create an OG image at `public/images/og-image.jpg` (1200x630px)
- [ ] Add a favicon to `app/favicon.ico`
- [ ] Run `npm run build` locally to verify no errors
- [ ] Test all pages on mobile
- [ ] Verify structured data with Google's Rich Results Test
- [ ] Submit sitemap to Google Search Console

## Performance

The site uses:
- Server components (minimal client JS)
- Next.js Image optimization
- Static generation where possible
- Tailwind CSS (small CSS bundle)

Target Lighthouse scores: 90+ across all categories.
