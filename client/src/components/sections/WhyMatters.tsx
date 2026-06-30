/*
 * WHY THIS MATTERS NOW — Section 2
 * Design: Dark Precision Engineering — tight card grid, monospaced labels
 */

import { useRef } from "react";
import { useInView } from "@/components/hooks/useInView";
import { AlertTriangle, Key, Shield, Fingerprint } from "lucide-react";

const problems = [
  {
    icon: Key,
    title: "Static API keys leak, spread, and never truly expire",
    body: "Long-lived credentials are high-value targets. They accumulate across environments, resist rotation, and leave no per-request trace when compromised.",
  },
  {
    icon: AlertTriangle,
    title: "OAuth and client secrets don't work for autonomous agents",
    body: "OAuth was designed for delegated human authorization. Autonomous agents need per-request machine identity — not browser flows or long-lived client secrets.",
  },
  {
    icon: Shield,
    title: "Gateways authorize traffic, not identity or intent",
    body: "Rate limiting and IP allowlists are traffic controls. They cannot verify who is calling, what they signed, or whether the request was replayed.",
  },
  {
    icon: Fingerprint,
    title: "No system today gives per-request, verifiable machine identity",
    body: "Every request from an agent or machine should carry a cryptographic proof of identity. Today, none does by default.",
  },
];

export default function WhyMatters() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="why" ref={ref} style={{ padding: "6rem 0", position: "relative" }}>
      <div className="tp-section-divider" style={{ marginBottom: "6rem" }} />
      <div className="container">
        {/* Header */}
        <div
          style={{
            marginBottom: "3.5rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <div className="tp-label" style={{ marginBottom: "1rem" }}>
            The problem
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              letterSpacing: "-0.025em",
              color: "oklch(0.94 0.006 240)",
              maxWidth: "560px",
              lineHeight: 1.15,
            }}
          >
            AI agents and machines are breaking traditional auth
          </h2>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
            borderRadius: "0.75rem",
            overflow: "hidden",
          }}
        >
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                style={{
                  background: "oklch(0.085 0.008 240)",
                  padding: "2rem",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(24px)",
                  transition: `all 0.6s ease ${0.1 + i * 0.1}s`,
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "0.5rem",
                    background: "rgba(0,212,255,0.08)",
                    border: "1px solid rgba(0,212,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <Icon size={18} style={{ color: "#00d4ff" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9375rem",
                    letterSpacing: "-0.01em",
                    color: "oklch(0.88 0.006 240)",
                    lineHeight: 1.4,
                    marginBottom: "0.75rem",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "oklch(0.52 0.01 240)",
                  }}
                >
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* Closing line */}
        <div
          style={{
            marginTop: "2.5rem",
            textAlign: "center",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}
        >
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "1.0625rem",
              color: "#00d4ff",
              letterSpacing: "-0.01em",
            }}
          >
            Trustplane moves authorization into the request itself.
          </p>
        </div>
      </div>
    </section>
  );
}
