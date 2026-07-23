# Pricing — TrustPlane Auth

TrustPlane Auth is open-source software. The runtime, SDKs, CLI, adapter, broker, and Helm chart are free to use, modify, and self-host.

## Open Source (self-hosted)

- **Price:** $0
- **License:** MIT
- **Includes:**
  - TrustPlane Auth runtime (verifier, broker, brownfield adapter)
  - Go SDK and TypeScript SDK for signing proof-bound requests
  - CLI for key generation, passport issue/verify, and bundle signing
  - Brownfield reverse-proxy adapter (digest-pinned container image)
  - Local broker for request-bound passport issuance
  - Helm chart for Kubernetes deployment
  - Example demos and worked integration flows
- **Support:** Community support via GitHub issues at github.com/trustplane-dev
- **Limits:** No usage limits — self-hosted, runs in your own infrastructure
- **No mandatory phone-home:** The verifier uses local trust material and policy during request handling. It works offline, with no account, database, or hosted bundle source required to run.

## Managed Fleet Governance (future)

- **Price:** Not yet available
- **Status:** Managed fleet governance (signed bundle distribution, revocation, audit at scale, multi-tenant policy management) is a separate, future enterprise direction. It is not part of the current open-source runtime.
- **Target:** Teams that want TrustPlane Auth enforcement without operating the signing and distribution plane themselves.

## Getting Started

- **Self-hosted (free):** https://github.com/trustplane-dev
- **Documentation:** https://docs.auth.trustplane.dev
- **Quickstart:** https://trustplane.dev/downloads.html

Last updated: 2026-06-30
