# Filmy Food

Luxury cinematic restaurant landing page built with Next.js 14, TypeScript, and Tailwind CSS.

## Requirements

- Node.js 20+
- npm 10+

## Development

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Production Checks

```bash
npm run lint
npm run typecheck
npm run build
npm run audit:prod
```

Or run all quality + build checks in one command:

```bash
npm run check
```

## Environment Variables

Create `.env.local` (and set equivalent variables in your hosting platform):

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_PHONE=+91 99999 99999
NEXT_PUBLIC_CONTACT_PHONE_RAW=919999999999
NEXT_PUBLIC_CONTACT_EMAIL=hello@filmyfood.com
NEXT_PUBLIC_MAPS_URL=https://maps.google.com/?q=Lower+Parel+Mumbai
NEXT_PUBLIC_SOCIAL_INSTAGRAM=
NEXT_PUBLIC_SOCIAL_X=
NEXT_PUBLIC_SOCIAL_YOUTUBE=
```

You can copy from `.env.example`.

Variable usage:

- `NEXT_PUBLIC_SITE_URL`: canonical URL, sitemap, robots metadata.
- `NEXT_PUBLIC_CONTACT_PHONE` and `NEXT_PUBLIC_CONTACT_EMAIL`: footer + schema contact data.
- `NEXT_PUBLIC_CONTACT_PHONE_RAW`: WhatsApp number for booking/order CTAs.
- `NEXT_PUBLIC_MAPS_URL`: directions button URL.
- `NEXT_PUBLIC_SOCIAL_*`: social icons (hidden automatically if not provided).

## Run Production Server Locally

```bash
npm run build
npm run start
```

## Deployment Notes

- App is configured with production-safe security headers in `next.config.mjs`.
- `robots.txt` and `sitemap.xml` are generated from metadata routes.
- Keep dependencies up to date and monitor advisories with `npm run audit:prod`.

## Included Hardening

- Strict security headers: `CSP`, `HSTS`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and permissions policy.
- URL normalization for env-driven site URL values (prevents invalid URL build crashes).
- External links hardened with `rel="noopener noreferrer"`.
- No broken placeholder social links (icons render only when URLs are configured).

## Functional UX Included

- Reservation form validates user input and opens a prefilled WhatsApp booking message.
- Hero and floating order buttons use configurable WhatsApp contact.
- Newsletter form triggers a prefilled mail draft (no backend required).
- Location section uses configurable directions URL.

## Gumroad Seller Handoff

Before packaging for sale:

1. Keep `.env.example` in the product and do **not** include real `.env.local` secrets.
2. Run `npm run check` before upload.
3. Deploy once (Vercel recommended) and verify homepage, booking CTA, and map button.
4. Provide buyers this setup flow: `npm ci` → copy `.env.example` to `.env.local` → `npm run dev`.
