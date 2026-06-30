import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Shield, WalletCards, ScrollText } from "lucide-react";

const offerFlow = [
  {
    step: "01",
    title: "Authorize the request through Trustplane core",
    body: "The core authorization path stays primary. Identity, request proof, replay controls, and policy checks happen first.",
  },
  {
    step: "02",
    title: "Authorize spend for an enabled priced route",
    body: "Only approved priced routes invoke the extension. Offer version, tenant wallet state, and client spend policy are checked before execution.",
  },
  {
    step: "03",
    title: "Reserve and settle against the same evidence chain",
    body: "Spend can reserve, capture, release, or reconcile against the same request-linked audit record without mutating the core auth flow.",
  },
];

export default function EconomyPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <Navbar />
      <main>
        <section id="economy" style={{ padding: "7rem 0 5rem" }}>
          <div className="container">
            <div style={{ maxWidth: "760px", marginBottom: "3.5rem" }}>
              <div className="tp-label" style={{ marginBottom: "1rem" }}>Economy extension</div>
              <h1
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "oklch(0.96 0.006 240)",
                  marginBottom: "1.25rem",
                }}
              >
                Govern spend on priced actions without weakening authorization
              </h1>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.0625rem",
                  lineHeight: 1.7,
                  color: "oklch(0.58 0.01 240)",
                  maxWidth: "620px",
                }}
              >
                Economy is an optional Trustplane extension. The request is authorized first.
                Only then can an enabled priced route reserve, capture, release, or reconcile
                spend against the same request evidence.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.25rem",
                marginBottom: "3rem",
              }}
            >
              {[
                {
                  icon: WalletCards,
                  title: "Tenant-owned wallet",
                  body: "Tenant owners fund the wallet. Clients receive spend caps and policy, but they do not become wallets themselves.",
                },
                {
                  icon: ScrollText,
                  title: "Request-linked settlement",
                  body: "Offers, reservations, captures, releases, and reconciliation stay linked to the verified request and its audit chain.",
                },
                {
                  icon: Shield,
                  title: "Authorization remains primary",
                  body: "If no economy attachment exists, the request behaves exactly like Trustplane without the extension.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="tp-card" style={{ padding: "1.75rem" }}>
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "0.5rem",
                        background: "rgba(0,212,255,0.08)",
                        border: "1px solid rgba(0,212,255,0.16)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1rem",
                      }}
                    >
                      <Icon size={18} style={{ color: "#00d4ff" }} />
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: "1rem",
                        letterSpacing: "-0.015em",
                        color: "oklch(0.9 0.006 240)",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.875rem",
                        lineHeight: 1.7,
                        color: "oklch(0.52 0.01 240)",
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                );
              })}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
                marginBottom: "3rem",
              }}
            >
              {offerFlow.map((item) => (
                <div
                  key={item.step}
                  className="tp-card"
                  style={{
                    padding: "1.5rem",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  <div className="tp-label" style={{ marginBottom: "0.75rem" }}>Step {item.step}</div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      color: "oklch(0.9 0.006 240)",
                      lineHeight: 1.4,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8125rem",
                      lineHeight: 1.7,
                      color: "oklch(0.5 0.01 240)",
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                padding: "2rem",
                borderRadius: "0.75rem",
                background: "rgba(0,212,255,0.05)",
                border: "1px solid rgba(0,212,255,0.16)",
                maxWidth: "720px",
              }}
            >
              <div className="tp-label" style={{ marginBottom: "0.875rem" }}>Current scope</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.8rem" }}>
                {[
                  "Versioned provider offers and tenant enablement",
                  "Tenant wallet, client spend policy, and provider receivables",
                  "Reservation, capture, release, and reconciliation linked to the request",
                  "No generic wallet, payouts, or broad marketplace behavior in the core path",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <CheckCircle2 size={16} style={{ color: "#00d4ff", marginTop: "0.1rem", flexShrink: 0 }} />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.875rem",
                        lineHeight: 1.65,
                        color: "oklch(0.8 0.006 240)",
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: "3rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="/contact" className="tp-btn-primary">
                Contact Trustplane
                <ArrowRight size={16} />
              </a>
              <a href="https://docs.auth.trustplane.dev" className="tp-btn-ghost">
                Read the Economy Docs
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
