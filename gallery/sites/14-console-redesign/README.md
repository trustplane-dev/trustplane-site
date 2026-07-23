# TrustPlane Control Plane — Redesign Samples

Standalone UI design samples. **No monorepo files were edited or added** — this folder lives
outside `trustplane/` and is self-contained.

## Two directions to compare (open both)
- **Sample A — `index.html`** (`console-redesign.css`): **Cyber-Tech** — extends the live UI you
  liked (neon indigo, glow, all-mono-uppercase labels), now with dark+light. *Based on your
  liked look, not the reference (reference screenshots couldn't be rendered).*
- **Sample B — `index-b.html`** (`console-redesign-b.css`): **Operator / Calm Precision** — my
  free-rein direction with no reference: neutral chrome, a single azure accent used for *signal*,
  mono reserved for data only, softer "ink" dark + a true first-class light. Calmer, lower-fatigue,
  enterprise-credible.

Same content/pages in both, so it's a true A/B of *feel*. Everything below applies to both.

## What it is
A working prototype of:
1. **Token foundation** — semantic CSS variables (`console-redesign.css`) with a **dark default**
   (the live "Cyber-Tech" indigo aesthetic) and a derived **light theme**, switched via
   `data-theme` on `<html>`.
2. **Theme toggle** — sun/moon in the topbar; persists to `localStorage`; respects
   `prefers-color-scheme` on first load.
3. **Two exemplar pages** — **Dashboard** (KPI tiles, live decision stream, trust-anchor/source
   panel) and **Audit / Decision Trace** (the hero: filterable decision table + a detail drawer
   showing the full proof-bound decision — reason, matched source rule, presented vs required
   key-binding tier, replay, request binding, freshness, transcript-v1).
   Plus inline component coverage: cards, stat tiles, buttons (primary/secondary/danger),
   badges (allow/deny, `attested_workload`/`software`, freshness), inputs/selects, dense tables,
   code/JSON viewer, scope chip, pills.

## How to view
Open `index.html` in any browser (double-click / `file://`). No build, no node, no deps.
Click **Audit** in the sidebar and click any row to open the decision trace. Toggle theme top-right.

## How it maps to the real `console-ui`
- Mirrors the actual nav (`tenantNav` + `platformNav`) and routes (Dashboard, Audit, etc.).
- Keeps the Cyber-Tech signature: near-black surfaces, indigo `#818cf8` accent, JetBrains-Mono
  uppercase micro-labels, thin borders, subtle glow — extended to a **light** counterpart.
- Domain-true content: multi-anchor sources (External / DOKS SPIRE / EC2 / EKS-n8n), honest tiers,
  real deny reasons (`insufficient_key_binding`, `jti_replay`, `source_subject_mismatch`,
  `stale_bundle_fail_closed`).

## How to port into console-ui later (when approved)
The console uses **Tailwind v4 `@theme`** with hardcoded dark hex. To adopt this:
1. Replace the hardcoded `@theme` values with the **semantic tokens** here, mapped through
   `@theme` so existing utilities keep working.
2. Add a small `ThemeProvider` that sets `data-theme` + persists (same logic as the inline script).
3. Add the toggle to `Topbar.tsx`. Rework `.cyber-card` / `.cyber-button-*` / `.cyber-badge`
   to consume tokens → both themes work without touching pages.

## Caveat
I could not render the `Quantum-Cryptanalysis` reference (JS SPA; screenshot reads were
interrupted). This sample is grounded in the **Cyber-Tech aesthetic you already liked**, built
for dark+light. Share the reference cues (accent ramp, motion, hero motif) and I'll tune the
accent/gradient/motion knobs to match.
