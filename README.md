# Fiona Reid Interiors

A luxury interior design portfolio and enquiry site built with Next.js (App Router), TypeScript,
Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in real values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding portfolio images

All project data lives in [`src/lib/works.ts`](src/lib/works.ts). Each entry is a `Work` object:

```ts
{
  id: "belgravia-townhouse",
  title: "Belgravia Townhouse",
  location: "London, UK",
  category: "residential", // "residential" | "commercial" | "hospitality"
  coverImage: "/images/belgravia-cover.jpg",
  images: ["/images/belgravia-1.jpg", "/images/belgravia-2.jpg"],
  description: "...",
  year: 2024,
}
```

Until real photography is supplied, `coverImage`/`images` point at Unsplash placeholder URLs.
To swap in real photography:

1. Drop image files into `public/images/`.
2. Update `coverImage` and `images` in `src/lib/works.ts` to reference `/images/your-file.jpg`.
3. Remove the `images.unsplash.com` entry from `next.config.ts` once no Unsplash URLs remain.

## Updating copy

- **Home / About / Enquire pages** — edit the JSX directly in `src/app/{page}/page.tsx`. Body
  copy is plain text/paragraphs, not sourced from a CMS.
- **Logo** — replace `public/logo.svg` with the client-supplied wordmark/mark. It is rendered by
  `src/components/ui/Logo.tsx`, which inverts to white on dark backgrounds via CSS `filter`.
- **Colour palette / type scale** — defined once in `src/app/globals.css`. Do not introduce
  additional colours outside the documented palette.

## Environment variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | API key for [Resend](https://resend.com), used to send enquiry form emails |
| `CONTACT_EMAIL` | Address that receives enquiry submissions |
| `NEXT_PUBLIC_SITE_URL` | Public site URL (used for metadata) |

Set these in `.env.local` for local development, and under **Vercel → Project → Settings →
Environment Variables** for production/preview deployments.

## Deployment

The project auto-deploys via Vercel on push to `main`. Preview deployments are created for pull
requests. See `vercel.json` and `.github/workflows/ci.yml` for build/CI configuration.

## Scripts

```bash
npm run dev     # start dev server
npm run build   # production build
npm run start   # run production build locally
npm run lint    # eslint
```
