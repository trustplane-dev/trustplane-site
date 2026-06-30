# Project Context

Context for anyone (human or AI agent) working on this repository. Read this
before making changes.

## What this is

Public marketing site for **`trustplane.dev`** — the site for the **open-source
TrustPlane auth plane**. Single-page app, statically built, hosted on GitHub
Pages.

## Positioning (important)

- **TrustPlane** (the auth plane) is the **open-source** project. This site is
  its public face. Lead with the open-source core: control plane, auth plane,
  provider-owned boundary enforcement, replay-safe request verification,
  short-lived downstream JWTs, and evidence-grade audit.
- **MergeMatter** is the **separate enterprise offering** of TrustPlane. It is
  **not** open source. Enterprise-only capabilities (e.g. the **Economy**
  extension, **Blindfold**, **Enclave**) must **not** be presented as part of
  the open-source project on this site.
- Do not reference internal/enterprise domains (e.g. `*.mergematter.io`) in the
  public site source.

## Site variants (A vs B)

Two layouts exist; the repo currently ships **B**:

- **State A — enterprise-inclusive**: includes the Economy page, the
  "Advanced Capabilities" section (Economy / Blindfold / Enclave), and related
  nav/footer/CTA copy. **Preserved** in version control as tag
  `site-enterprise-full` and branch `variant/enterprise-full`.
- **State B — open-source only (current `main`)**: enterprise surface removed
  so the site is purely the open-source auth plane.

To restore A in the future: check out the `variant/enterprise-full` branch (or
the `site-enterprise-full` tag), or cherry-pick its content back onto `main`.
If A is re-adopted, point Economy/enterprise links at the enterprise docs/site,
not the open-source docs.

## Tech stack

- Vite + React + TypeScript, single-page app.
- Client-side routing via `wouter`.
- Tailwind CSS v4.
- Package manager: **pnpm** (pinned via the `packageManager` field; enable with
  `corepack enable`).
- `server/index.ts` is only a static file server for local preview; it is **not**
  used in production (GitHub Pages serves the static build).

## Build & deploy

- Build: `pnpm build` → output in **`dist/public/`** (this is what is deployed).
- Hosting: GitHub Pages, deployed from `main` via GitHub Actions
  (`.github/workflows/pages.yml`): install → build → copy
  `index.html` → `404.html` (SPA deep-link fallback) → upload `dist/public` →
  deploy.
- Canonical domain `trustplane.dev` is set via **`client/public/CNAME`** so it
  is emitted into the build output. `.nojekyll` lives in `client/public/` too.
- Any file that must appear in the deployed output goes in `client/public/`.

## External links & integrations

- **Documentation** lives at **`https://docs.auth.trustplane.dev`** (note the
  `auth.` subdomain), built from the `trustplane-auth-docs` repo. It is a
  Docusaurus site with `routeBasePath: '/'`. Real top-level paths include:
  `/start/quickstart`, `/architecture/overview`, `/capabilities/overview`,
  `/cli/overview`, `/deploy/overview`, `/reference/release-artifacts`.
  These docs cover **TrustPlane Auth only** — there is no Economy section.
  When linking docs, use real slugs (deep links to non-existent pages 404).
- **Contact form** posts to a standalone external API endpoint (overridable via
  `VITE_CONTACT_API`). There is no backend in this repo.
- Analytics: the upstream source had an unconfigured umami `<script>` using
  `%VITE_ANALYTICS_*%` placeholders; it was removed to avoid a broken tag. Wire
  in real analytics intentionally if needed.

## Related repositories (GitHub org `trustplane-dev`)

- `trustplane-auth` — core open-source auth plane.
- `trustplane-auth-docs` — documentation site (Docusaurus → `docs.auth.trustplane.dev`).
- `trustplane-auth-deploy` — Helm charts.
- `trustplane-auth-sdk-go` / `-js` / `-python` — public caller SDKs.
- `trustplane-site` — this repo.

Some of the above may still be private while open-sourcing is in progress; do
not add public links to repos that are not yet public (they would 404 for
visitors).

## Conventions

- Keep only public site source here. Research notes, drafts, and source PDFs
  stay outside the published repo.
- Verify changes with `pnpm check` (typecheck) and `pnpm build` before
  finishing.
- `dist/` and `node_modules/` are git-ignored.
