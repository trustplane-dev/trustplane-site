# Project Context

Context for anyone (human or AI agent) working on this repository. Read this
before making changes.

## What this is

Public marketing site for **`trustplane.dev`** — the site for the **open-source
TrustPlane auth plane**. Hand-written static HTML/CSS, hosted on GitHub Pages.

> Note: `main` currently carries a Vite + React SPA version of this site. This
> branch (`redesign/opensource-geo`) is the static multi-page version. The
> **positioning and terminology below are canonical for both** — only the tech
> stack differs.

## Positioning (important)

- **TrustPlane** (the auth plane) is the **open-source** project. This site is
  its public face. Lead with the open-source core: control plane, auth plane,
  provider-owned boundary enforcement, replay-safe request verification,
  short-lived downstream JWTs, and evidence-grade audit.
- The **enterprise offering** of TrustPlane is a **separate, non-open-source
  product** with its own name and domain. Enterprise-only capabilities must
  **not** be presented as part of the open-source project on this site, and
  internal/enterprise codenames and domains must not appear in this repo's
  source. `tests/sanity_test.sh` enforces this.

## Canonical terminology

Use these terms exactly. They are shared with the product and the docs; drifting
from them makes the site contradict itself and the documentation.

| Concept | Use | Do not use |
| --- | --- | --- |
| The project / brand | **TrustPlane** | Trust Plane, TP |
| Runtime that verifies requests in the request path | **auth plane** (product name: **TrustPlane Auth**) | "the runtime" alone, "verifying boundary", "enforcement engine" |
| Plane that manages policy, enrollment, revocation, audit | **control plane** (product name: **TrustPlane Control**) | **governance plane**, "management plane" |
| Enforcement point deployed by the API owner | **provider-owned boundary**; the **provider adapter** | "the gateway", "the proxy" (alone) |
| The thing making the call | **caller** (an agent or a service). Once enrolled it is a **client** with a **client record**. | "consumer", "machine system", mixing client/caller at random |
| Per-request credential | **request proof** — a **canonical transcript signature** over method, path, body hash, time bucket, nonce, and client identity | "a cryptographic proof" with no noun, "token", "passport" |
| Credential handed to upstream after an allow | **short-lived downstream JWT** (ES256) | "session token", "access token" |
| Identity model | **client record** (stable anchor) → **enrolled public keys** (short-lived, rotating) → **sessions** (bounded runtime executions; scoped, time-limited, revocable) | "API key", "service account" |
| What makes enrollment work | **enrolled public keys** and **trust anchors** | **trust material** |
| Replay defence | **replay protection** via **nonce storage** and **time-bucket validation** | "single-use" used interchangeably with request binding |
| Audit | **evidence-grade audit**; per-decision **audit records** | "logs" |
| Callers in aggregate | **AI agents and machine callers**, **machine-to-machine (M2M)**, **machine clients** | **machine systems** |
| Risk being removed | **standing authority** / **standing privilege** | "standing power" |
| Local verification | verification happens **in the request path, in your own infrastructure**, with **no external dependency per request** | "no phone-home" |

Two distinct guarantees that must not be conflated:

- **Request binding** stops a proof being reused against a *different* call
  (different method, path, or body). Failure reason: `request_binding_mismatch`.
- **Replay protection** stops the *same* call being submitted twice. Failure
  reason: `jti_replay`.

## Tech stack (this branch)

- Static HTML, one file per page, no build step and no framework.
- Shared stylesheet: `assets/site.css`. Shared behaviour: `script.js`.
- Pages: `index.html`, `auth.html`, `control.html`, `solutions.html`,
  `pricing.html`, `downloads.html`.
- Machine-readable surfaces: `llms.txt`, `pricing.md`, `robots.txt`,
  `sitemap.xml`.

## Build & deploy

- No build. The repository root *is* the deployed site.
- Hosting: GitHub Pages from this branch via GitHub Actions
  (`.github/workflows/pages.yml`).
- Canonical domain `trustplane.dev` is set via `CNAME`; `.nojekyll` disables
  Jekyll processing.
- Local preview: `python3 -m http.server 8080`.
- Verify with `bash tests/sanity_test.sh` before finishing. It checks tag
  balance, JSON-LD validity, CSS class coverage, internal links, required meta
  tags, FAQ parity between JSON-LD and visible markup, and that no internal
  references leak.

## External links & integrations

- **Documentation** lives at **`https://docs.auth.trustplane.dev`** (note the
  `auth.` subdomain), built from the `trustplane-auth-docs` repo. It is a
  Docusaurus site with `routeBasePath: '/'`. Real top-level paths include:
  `/start/quickstart`, `/architecture/overview`, `/capabilities/overview`,
  `/cli/overview`, `/deploy/overview`, `/reference/release-artifacts`.
  These docs cover **TrustPlane Auth only**. When linking docs, use real slugs —
  deep links to non-existent pages 404.
- **No contact/sales form.** As an open-source project, calls-to-action point to
  **GitHub** (`https://github.com/trustplane-dev`) and the docs — not a sales
  contact form and not a `mailto:` sales alias. The org's core repo
  (`trustplane-auth`) may still be private during open-sourcing; GitHub CTAs
  link to the org page so they never 404.
- Analytics: none wired in deliberately. An earlier revision carried an
  unconfigured umami `<script>` with `%VITE_ANALYTICS_*%` placeholders; it was
  removed to avoid a broken tag.

## Related repositories (GitHub org `trustplane-dev`)

- `trustplane-auth` — core open-source auth plane.
- `trustplane-auth-docs` — documentation site (Docusaurus → `docs.auth.trustplane.dev`).
- `trustplane-auth-deploy` — Helm charts.
- `trustplane-auth-sdk-go` / `-js` / `-python` — public caller SDKs.
- `trustplane-site` — this repo.

Some of the above may still be private while open-sourcing is in progress; do
not add public links to repos that are not yet public (they would 404 for
visitors), and do not advertise an SDK as available before it ships.

## Conventions

- Keep only public site source here. Research notes, drafts, and source PDFs
  stay outside the published repo.
- Claims must be consistent across `index.html`, the inner pages, `llms.txt`,
  and `pricing.md`. These four surfaces are read by different audiences and
  contradicting each other is the most common defect in this repo.
