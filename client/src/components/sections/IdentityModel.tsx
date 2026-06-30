/*
 * IDENTITY MODEL — Section 6
 * Design: Dark Precision Engineering — asymmetric split with identity diagram
 * Uses generated identity visual image
 */

import { useRef } from "react";
import { useInView } from "@/components/hooks/useInView";

const IDENTITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663447221905/H8JPDiTDsJ3QfNiXuH3bu8/trustplane-identity-visual-H6NVkANVGYqTcXjxLF5Koa.webp";

const proofFields = [
  "tenant",
  "api",
  "client",
  "key",
  "session?",
  "method",
  "path",
  "body_hash",
  "time_bucket",
  "nonce",
];

export default function IdentityModel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section
      id="identity"
      ref={ref}
      style={{
        padding: "6rem 0",
        background: "rgba(0,212,255,0.015)",
      }}
    >
      <div className="tp-section-divider" />
      <div className="container" style={{ paddingTop: "6rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="identity-grid"
        >
          {/* Left: text */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-24px)",
              transition: "all 0.7s ease 0.1s",
            }}
          >
            <div className="tp-label" style={{ marginBottom: "1rem" }}>Identity model</div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                letterSpacing: "-0.025em",
                color: "oklch(0.94 0.006 240)",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              Stable identity.
              <br />
              Short-lived authority.
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
              {[
                {
                  title: "Client identity persists",
                  body: "The client record is the stable anchor. Keys and sessions rotate beneath it without changing who the client is.",
                },
                {
                  title: "Keys rotate and expire",
                  body: "Enrolled public keys are short-lived. Rotation happens without disrupting the client identity or requiring re-enrollment.",
                },
                {
                  title: "Sessions represent runtime executions",
                  body: "A session is delegated runtime authority — scoped to a client, API, and workload run. It expires and can be revoked.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    paddingLeft: "1rem",
                    borderLeft: "2px solid rgba(0,212,255,0.25)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      color: "oklch(0.88 0.006 240)",
                      marginBottom: "0.375rem",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      lineHeight: 1.65,
                      color: "oklch(0.52 0.01 240)",
                    }}
                  >
                    {item.body}
                  </div>
                </div>
              ))}
            </div>

            {/* Proof fields */}
            <div
              style={{
                padding: "1.25rem",
                background: "rgba(0,0,0,0.3)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "0.5rem",
              }}
            >
              <div className="tp-label" style={{ marginBottom: "0.875rem", opacity: 0.7 }}>
                Every request is bound to:
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                {proofFields.map((field) => (
                  <span
                    key={field}
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.6875rem",
                      fontWeight: 500,
                      color: field === "session?" ? "oklch(0.5 0.01 240)" : "#00d4ff",
                      background: field === "session?" ? "rgba(255,255,255,0.04)" : "rgba(0,212,255,0.08)",
                      border: `1px solid ${field === "session?" ? "rgba(255,255,255,0.07)" : "rgba(0,212,255,0.2)"}`,
                      borderRadius: "0.25rem",
                      padding: "0.25rem 0.5rem",
                    }}
                  >
                    {field}
                  </span>
                ))}
              </div>
            </div>

            {/* Tagline */}
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                color: "#00d4ff",
                marginTop: "1.75rem",
                letterSpacing: "-0.01em",
              }}
            >
              No more shared credentials. Every request proves itself.
            </p>
          </div>

          {/* Right: image */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(24px)",
              transition: "all 0.7s ease 0.3s",
            }}
          >
            <div
              style={{
                borderRadius: "1rem",
                overflow: "hidden",
                border: "1px solid rgba(0,212,255,0.15)",
                boxShadow: "0 0 60px rgba(0,212,255,0.06)",
              }}
            >
              <img
                src={IDENTITY_IMG}
                alt="Stable client identity with rotating short-lived keys and sessions"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="tp-section-divider" style={{ marginTop: "6rem" }} />

      <style>{`
        @media (max-width: 768px) {
          .identity-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
