# Fiona Reid Interiors

An SEO-first, conversion-focused interior design studio site built with Next.js (App Router),
TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in real values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Site map

| Route | Purpose |
|---|---|
| `/` | Homepage — hero, trust pillars, confidentiality note, recent work, process, services, locations, 3-pathway CTA |
| `/interior-designer-glasgow` | Glasgow location landing page (primary SEO/Ads target) |
| `/interior-designer-london` | London location landing page, same template as Glasgow |
| `/services` | The four services on offer, with pricing where confirmed |
| `/work`, `/work/[category]` | What kind of residential/commercial/hospitality work we do (see below — no named-project gallery) |
| `/about` | Fiona's story and the studio's process |
| `/journal`, `/journal/[slug]` | Blog for ongoing SEO |
| `/enquire` | Enquiry form (acts as the site's "contact" page) |
| `/thank-you` | Post-submission page; fires the GA4 `generate_lead` event and (once configured) the Google Ads conversion event. `noindex`'d and excluded from the sitemap. |

## Work is confidential — there's no named-project gallery

Most of the studio's work is undertaken under client confidentiality, so the site does not show
a portfolio of named projects with addresses. Instead, `src/lib/services.ts` holds one entry per
discipline (residential / commercial / hospitality) describing the *kind* of work undertaken, and
`src/app/work/page.tsx` / `src/app/work/[category]/page.tsx` render from it. If Fiona later wants
to name specific non-NDA projects publicly, that's the file to extend.

## Adding a journal post

Add an entry to `src/lib/journal.ts`:

```ts
{
  slug: "my-post-slug",
  title: "My Post Title",
  excerpt: "One sentence for the journal index and meta description.",
  date: "2026-07-01",
  body: ["Paragraph one.", "Paragraph two.", "..."],
}
```

The `/journal` index and `/journal/[slug]` detail page (with `Article` schema) pick it up
automatically — no other file needs to change. It's also added to `sitemap.xml` automatically.

## Adding a city / location page

`src/lib/locations.ts` holds one data object per city (Glasgow, London today); both location
pages render from the shared `src/components/sections/LocationLanding.tsx` template — there's no
duplicated markup. To add a new city:

1. Add an entry to `src/lib/locations.ts` (heading, intro copy, nearby areas, hero image, meta
   title/description).
2. Create `src/app/interior-designer-<city>/page.tsx` — copy the Glasgow page file, change the
   `slug` it looks up.
3. Add the new route to `src/app/sitemap.ts` and to the footer's `locations` list in
   `src/components/layout/Footer.tsx`.

## Updating copy

- **Home / About / Services / Enquire pages** — edit the JSX directly in `src/app/{page}/page.tsx`.
- **Work / by-discipline copy** — edit `src/lib/services.ts`.
- **Services / pricing** — edit `src/lib/offerings.ts`. Prices currently read "Price on enquiry" —
  see Outstanding TODOs below.
- **Studio name/address/phone/email/Instagram** — edit `src/lib/site.ts` once. Every page,
  the footer, JSON-LD, sitemap, and robots.txt all read from this single file.
- **Logo** — replace `public/logo.png` with the client-supplied mark (any raster/vector format;
  update the `src` in `src/components/ui/Logo.tsx` if the filename changes). It renders at a
  fixed pixel size derived from its real aspect ratio via the `size` prop, so it's never skewed.
- **Colour palette / type scale** — defined once in `src/app/globals.css`. Do not introduce
  additional colours outside the documented palette.

## Cookie consent & tracking IDs

`src/components/layout/CookieConsent.tsx` shows a banner on first visit; nothing is loaded until
the visitor clicks Accept (stored in `localStorage`, not a cookie, so it's not itself a tracking
mechanism). `src/components/analytics/Analytics.tsx` only injects the Google tag (`gtag.js`) once
consent is granted **and** at least one ID below is set.

Paste real values into `.env.local` (and Vercel → Project → Settings → Environment Variables):

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GA4_ID` | GA4 Measurement ID, e.g. `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_ADS_CONVERSION_ID` | Google Ads conversion ID, e.g. `AW-XXXXXXXXX` |
| `NEXT_PUBLIC_ADS_CONVERSION_LABEL` | Google Ads conversion label |
| `NEXT_PUBLIC_HOTJAR_ID` | Hotjar Site ID (numeric) |

The Ads conversion event itself fires from `src/components/sections/ThankYouContent.tsx` — there's
a commented-out `gtag('event', 'conversion', ...)` line ready to uncomment once you have the
label. Leaving all three variables blank is safe: the site runs normally with no tracking loaded
and no banner-related errors.

## Environment variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | API key for [Resend](https://resend.com), used to send enquiry form emails |
| `CONTACT_EMAIL` | Address that receives enquiry submissions |
| `NEXT_PUBLIC_SITE_URL` | Public site URL (used for metadata, sitemap, JSON-LD) |
| `NEXT_PUBLIC_GA4_ID` / `NEXT_PUBLIC_ADS_CONVERSION_ID` / `NEXT_PUBLIC_ADS_CONVERSION_LABEL` / `NEXT_PUBLIC_HOTJAR_ID` | See above |

## Outstanding TODOs (only Fiona can provide these)

- [ ] **Exact pricing** for the Online Design Consultation and any other service — currently shows
  "Price on enquiry" everywhere rather than an unconfirmed figure.
- [ ] **Real Google/Hotjar tracking IDs** — see "Cookie consent & tracking IDs" above.
- [ ] **Testimonials** — the homepage intentionally has no testimonials section yet. Only add one
  with genuine client quotes (name + project description they're comfortable with); don't
  fabricate placeholder quotes. Once 2-3 are available, add a section between "Recent Work" and
  "How We Work" in `src/app/page.tsx`.
- [ ] **"Schedule a Call" booking link** — the homepage CTA currently routes to `/enquire` like
  every other CTA. If Fiona sets up Calendly (or similar), swap the `href` for that pathway card
  in `src/app/page.tsx` (`ctaPathways[0].href`) for the booking URL.
- [ ] **"As featured in" publications** — not yet built (no content exists for it). If there's a
  list of press mentions, send them over and it's a quick addition to the homepage.
- [ ] **Real landing-page hero photo** — the homepage hero still uses an Unsplash placeholder;
  swap the `image` prop in `src/app/page.tsx`'s `<Hero>` for real studio photography.
- [ ] **Confirm the Glasgow studio coordinates** in `src/lib/site.ts` (`business.geo`) — currently
  an approximate lookup for 37 Otago Street, not verified against Google's own listing.

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
