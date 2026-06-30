# TrustPlane Site

Public marketing site for `trustplane.dev`.

Built with Vite + React + TypeScript (SPA, client-side routing via `wouter`),
deployed to GitHub Pages.

## Prerequisites

- Node.js 20.19+ or 22.12+
- pnpm (pinned via the `packageManager` field; use `corepack enable` to get it)

## Local Development

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

The dev server runs at http://localhost:3000.

## Build

```bash
pnpm build
```

Static output is written to `dist/public/` (this is what gets deployed).

## Deployment

This repo deploys to GitHub Pages from `main` via GitHub Actions
(`.github/workflows/pages.yml`):

1. `pnpm install --frozen-lockfile`
2. `pnpm build` → `dist/public`
3. Copy `index.html` → `404.html` (SPA deep-link fallback)
4. Upload `dist/public` and deploy to Pages

Canonical domain: `trustplane.dev` (set via `client/public/CNAME`, emitted into
the build output). `.nojekyll` is included so Pages serves files as-is.

## Notes

- The contact form posts to a standalone API endpoint (override with
  `VITE_CONTACT_API`); no backend runs in this repo.
- Documentation links point to the TrustPlane Auth docs site
  (`docs.auth.trustplane.dev`, built from the `trustplane-auth-docs` repo).
- Only public site source should live here. Research notes, drafts, and source
  PDFs should stay outside the published repository.
