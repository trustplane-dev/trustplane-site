# trustplane.dev — site (v2, enterprise/editorial redesign)

A redesigned, on-brand marketing site for **Trustplane**. This version drops the "AI-template" look of v1
(emoji cards, gradient-text, symmetric grids) for an enterprise, editorial feel closer to Aembit / Okta / Auth0.

## What changed vs v1
- **On-brand:** near-black + electric cyan `#00d4ff` (matches the live trustplane.mergematter.io brand), not indigo/violet.
- **Real typography:** Space Grotesk (display) + Inter (body) + IBM Plex Mono (labels/code) — the brand fonts.
- **No emoji** — custom inline SVG line icons only.
- **Editorial layout:** asymmetric hero with a real request-flow diagram, mono "kicker" labels, hairline dividers,
  alternating feature rows, an editorial problem statement — not repeating symmetric card grids.
- **Concrete, human copy** drawn from the product's real voice ("every request carries verifiable identity and request proof").
- Still **GEO/SEO-first**: server-rendered HTML, JSON-LD (Organization / SoftwareApplication / FAQPage),
  `llms.txt`, `robots.txt` (AI crawlers allowed), `sitemap.xml`, consistent entity language.

## Preview (use a free port — avoid 8080/8099)
```bash
cd ppp/trustplane-site-v2
python3 -m http.server 8124
# open http://localhost:8124
```
Uses absolute paths and Google Fonts, so preview over http:// (not file://), online.

## Files
- `index.html` · `styles.css` · `assets/logo.svg`
- `llms.txt` · `robots.txt` · `sitemap.xml`

## Before launch
- Add `assets/og.png` (1200×630 social card).
- Wire real links (GitHub, docs, contact/demo).
- Add pillar pages (Why bearer tokens fail · MCP authorization · Secretless M2M) for GEO depth.
- Pick hosting (Cloudflare Pages / Vercel / Netlify / S3+CloudFront) and confirm name casing ("Trustplane" vs "TrustPlane").
