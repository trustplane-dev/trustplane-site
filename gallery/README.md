# TrustPlane Site Gallery

A click-through catalog of every TrustPlane marketing/site build, for stakeholder review.
Open `index.html` (or serve this folder) to browse all 14 builds as thumbnails, each linking
into the real rendered pages.

## Run locally
```bash
cd gallery && python3 -m http.server 8080
# open http://localhost:8080/
```

## What's inside
- `index.html` — the central gallery board
- `thumbs/` — live home-page renders (1440×900) used as tile thumbnails
- `sites/NN-<name>/` — each build, self-contained with relative asset paths

## Sources captured (rendered 2026-07-23)
| # | Build | Source |
|---|-------|--------|
| 01–03 | Clear Signal / Command Plane / Ledger | new proposals (feature/enterprise-redesign-proposals) |
| 04 | Auth+Control site | branch redesign/auth-control-site (b15a06c) |
| 05 | Auth+Control humanised | branch redesign/auth-control-humanised (c97f825) |
| 06 | Enterprise GTM | branch redesign/enterprise-gtm-site (fc0db89) |
| 07 | Open-source / GEO | branch redesign/opensource-geo (e13c33f) |
| 08 | Main (current production) | branch main (63bac93) — Vite React SPA, rebuilt |
| 09 | Enterprise full SPA | branch variant/enterprise-full (94f70a0) — rebuilt |
| 12 | Mergematter monorepo site | ppp/trustplane/marketing-site — rebuilt |
| 10 | Site v2 | ppp/trustplane-site-v2 |
| 11 | Open-source landing | ppp/trustplane-dev-oss-site |
| 13 | Theme sample (Auth Sites) | ppp/trustplane-theme-sample (dist) |
| 14 | Console redesign (A–D) | ppp/trustplane-console-redesign |

### Notes
- SPA builds (08, 09, 12) were rebuilt with relative asset paths and **hash routing**
  (`#/architecture`, `#/security`, `#/economy`) so every page is reachable in a subfolder.
- Static builds had root-absolute paths (`/assets/…`) rewritten to relative for subfolder hosting.
- This is a review snapshot — the authoritative source for each build remains its branch/folder above.
