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

## Work is confidential — there's no project gallery

Most of the studio's work is undertaken under client confidentiality, so the site does not show
a portfolio of named projects. Instead, `src/lib/services.ts` holds one entry per discipline
(residential / commercial / hospitality) describing the *kind* of work undertaken:

```ts
{
  slug: "residential",
  title: "Residential",
  summary: "Homes designed around how you actually live.",
  description: ["...", "...", "..."],
  image: "https://images.unsplash.com/...", // mood imagery, not a client photo
}
```

`src/app/work/page.tsx` and `src/app/work/[category]/page.tsx` both render from this file — edit
the copy there to change what's shown. `image` is illustrative mood photography; swap it for a
file in `public/images/` the same way as any other image, and remove the `images.unsplash.com`
entry from `next.config.ts` once no Unsplash URLs remain anywhere in the site.

## Updating copy

- **Home / About / Enquire pages** — edit the JSX directly in `src/app/{page}/page.tsx`. Body
  copy is plain text/paragraphs, not sourced from a CMS.
- **Work / by-discipline copy** — edit `src/lib/services.ts` (see above).
- **Logo** — replace `public/logo.svg` with the client-supplied wordmark/mark. It's rendered by
  `src/components/ui/Logo.tsx` at a fixed brand colour (gold), sized via the `h-16 w-auto` class.
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
