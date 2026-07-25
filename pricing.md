# Pricing — TrustPlane

TrustPlane is open-source software. The auth plane, SDKs, CLI, provider adapter, local broker, and Helm chart are free to use, modify, and self-host.

## Open source (self-hosted)

- **Price:** $0
- **Licence:** MIT
- **Includes:**
  - TrustPlane Auth — the auth plane: verifier, local broker, reverse-proxy provider adapter
  - Go SDK and TypeScript SDK for signing request proofs
  - CLI for key generation, request-proof signing, and policy bundle signing
  - Reverse-proxy provider adapter (digest-pinned container image)
  - Local broker that signs request proofs on behalf of callers
  - Helm chart for Kubernetes deployment
  - Conformance vectors, example demos, and worked integration flows
- **Support:** Community support via GitHub issues at github.com/trustplane-dev
- **Limits:** No usage limits — self-hosted, runs in your own infrastructure
- **No external dependency per request:** The auth plane verifies using local trust anchors and a signed policy bundle. It works offline, with no account, database, or hosted bundle source required to run.

## Managed fleet governance (future direction)

- **Price:** Not available
- **Status:** Managed fleet governance — signed bundle distribution, revocation propagation, audit at scale, and multitenant policy management across many deployments — is a separate future direction. It is not part of the open-source project and is not for sale today.
- **Target:** Teams that want TrustPlane enforcement without operating the signing and distribution plane themselves.

## Getting started

- **Self-hosted (free):** https://github.com/trustplane-dev
- **Documentation:** https://docs.auth.trustplane.dev
- **Quickstart:** https://docs.auth.trustplane.dev/start/quickstart
- **Downloads:** https://trustplane.dev/downloads.html

Last updated: 2026-06-30
