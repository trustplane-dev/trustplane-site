/*
 * CORE CAPABILITIES — Section 4
 * Design: Dark Precision Engineering — large feature cards, asymmetric layout
 */

import { useRef } from "react";
import { useInView } from "@/components/hooks/useInView";
import { Bot, ArrowLeftRight, Layers } from "lucide-react";

const capabilities = [
  {
    icon: Bot,
    tag: "Agent Authorization",
    title: "Authorize AI agents and machine callers with request-bound identity.",
    body: "Every request carries cryptographic proof tied to an enrolled client identity, scoped policy context, and a bounded runtime window.",
    accent: true,
  },
  {
    icon: ArrowLeftRight,
    tag: "Machine-to-Machine Authorization",
    title: "Replace shared API keys with verifiable request-level authorization.",
    body: "Machine clients enroll public keys and sign canonical request transcripts. The Auth Plane verifies each proof at runtime before the request reaches the provider boundary.",
    accent: false,
  },
  {
    icon: Layers,
    tag: "Provider Boundary",
    title: "Enforce at a provider-owned boundary without rewriting the upstream API.",
    body: "The packaged provider adapter verifies Trustplane decisions, evaluates readiness, and forwards only authorized traffic into existing upstream services.",
    accent: false,
  },
];

export default function CoreCapabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.05 });

  return (
    <section id="capabilities" ref={ref} style={{ padding: "6rem 0", background: "rgba(0,212,255,0.015)" }}>
      <div className="tp-section-divider" />
      <div className="container" style={{ paddingTop: "6rem" }}>
        {/* Header */}
        <div
          style={{
            marginBottom: "3.5rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <div className="tp-label" style={{ marginBottom: "1rem" }}>Capabilities</div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              letterSpacing: "-0.025em",
              color: "oklch(0.94 0.006 240)",
              lineHeight: 1.15,
              maxWidth: "520px",
            }}
          >
            Built for real-world agent and machine access
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div
                key={i}
                style={{
                  background: cap.accent
                    ? "rgba(0,212,255,0.06)"
                    : "rgba(255,255,255,0.03)",
                  border: cap.accent
                    ? "1px solid rgba(0,212,255,0.25)"
                    : "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "0.75rem",
                  padding: "2rem",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(24px)",
                  transition: `all 0.6s ease ${0.1 + i * 0.1}s`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "0.5rem",
                      background: cap.accent ? "rgba(0,212,255,0.15)" : "rgba(0,212,255,0.07)",
                      border: "1px solid rgba(0,212,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={20} style={{ color: "#00d4ff" }} />
                  </div>
                  <span className="tp-label" style={{ fontSize: "0.625rem" }}>
                    {cap.tag}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "1rem",
                    letterSpacing: "-0.015em",
                    color: "oklch(0.9 0.006 240)",
                    lineHeight: 1.4,
                    marginBottom: "0.875rem",
                  }}
                >
                  {cap.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "oklch(0.52 0.01 240)",
                  }}
                >
                  {cap.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="tp-section-divider" style={{ marginTop: "6rem" }} />
    </section>
  );
}
