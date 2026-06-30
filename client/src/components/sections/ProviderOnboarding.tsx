/*
 * PROVIDER ONBOARDING — Section 7
 * Design: Dark Precision Engineering — numbered step flow, strong positioning
 */

import { useRef } from "react";
import { useInView } from "@/components/hooks/useInView";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Deploy provider-owned adapter",
    body: "The packaged boundary adapter deploys alongside your existing API. No changes to your upstream business logic.",
  },
  {
    num: "02",
    title: "Verify ownership",
    body: "Complete an HTTP file or DNS TXT challenge to prove you control the provider domain. One-time setup.",
  },
  {
    num: "03",
    title: "Run preflight checks",
    body: "Trustplane validates adapter connectivity, Auth Plane reachability, and readiness before any traffic is affected.",
  },
  {
    num: "04",
    title: "Enable verification at the boundary",
    body: "Set rollout mode to enforce. The adapter now verifies every incoming request proof before forwarding traffic upstream.",
  },
  {
    num: "05",
    title: "Keep upstream API unchanged",
    body: "Your business API receives only verified, allowed requests — forwarded with a short-lived JWT for downstream use.",
  },
];

export default function ProviderOnboarding() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.05 });

  return (
    <section id="providers" ref={ref} style={{ padding: "6rem 0" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="provider-grid"
        >
          {/* Left: header + positioning */}
          <div
            style={{
              position: "sticky",
              top: "7rem",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            <div className="tp-label" style={{ marginBottom: "1rem" }}>Provider onboarding</div>
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
              Adopt without rewriting your APIs
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "oklch(0.58 0.01 240)",
                marginBottom: "2rem",
              }}
            >
              Trustplane's provider-owned boundary adapter sits in front of your existing API. You verify ownership, run preflight checks, and enable enforcement — without touching your upstream code.
            </p>

            {/* Key claim */}
            <div
              style={{
                padding: "1.25rem 1.5rem",
                background: "rgba(0,212,255,0.06)",
                border: "1px solid rgba(0,212,255,0.2)",
                borderRadius: "0.5rem",
                marginBottom: "2rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                <CheckCircle2 size={18} style={{ color: "#00d4ff", flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9375rem",
                    color: "oklch(0.9 0.006 240)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Works with your existing APIs — no rewrites required
                </span>
              </div>
            </div>

            {/* Rollout modes */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {[
                { mode: "off", desc: "Disabled" },
                { mode: "observe", desc: "Audit only" },
                { mode: "enforce", desc: "Active" },
              ].map((m) => (
                <div
                  key={m.mode}
                  style={{
                    padding: "0.5rem 0.875rem",
                    background: m.mode === "enforce" ? "rgba(0,212,255,0.08)" : "rgba(255,255,255,0.03)",
                    border: m.mode === "enforce" ? "1px solid rgba(0,212,255,0.25)" : "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "0.375rem",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.6875rem",
                      fontWeight: 500,
                      color: m.mode === "enforce" ? "#00d4ff" : "oklch(0.45 0.01 240)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {m.mode}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.6875rem",
                      color: "oklch(0.4 0.01 240)",
                      marginTop: "1px",
                    }}
                  >
                    {m.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  paddingBottom: i < steps.length - 1 ? "0" : "0",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(24px)",
                  transition: `all 0.6s ease ${0.1 + i * 0.1}s`,
                  position: "relative",
                }}
              >
                {/* Step number + line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "rgba(0,212,255,0.08)",
                      border: "1px solid rgba(0,212,255,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.625rem",
                        fontWeight: 500,
                        color: "#00d4ff",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      style={{
                        width: "1px",
                        flex: 1,
                        minHeight: "40px",
                        background: "rgba(0,212,255,0.12)",
                        margin: "4px 0",
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div style={{ paddingBottom: i < steps.length - 1 ? "2rem" : "0", paddingTop: "0.375rem" }}>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      letterSpacing: "-0.01em",
                      color: "oklch(0.88 0.006 240)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      lineHeight: 1.65,
                      color: "oklch(0.52 0.01 240)",
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .provider-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .provider-grid > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
