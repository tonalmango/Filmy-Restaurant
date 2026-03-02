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
```

`NEXT_PUBLIC_SITE_URL` is used for canonical URLs, sitemap, and robots metadata.

## Run Production Server Locally

```bash
npm run build
npm run start
```

## Deployment Notes

- App is configured with production-safe security headers in `next.config.mjs`.
- `robots.txt` and `sitemap.xml` are generated from metadata routes.
- Keep dependencies up to date and monitor advisories with `npm run audit:prod`.
