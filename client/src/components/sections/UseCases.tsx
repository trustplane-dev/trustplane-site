/*
 * USE CASES — Section 8
 * Design: Dark Precision Engineering — horizontal scrollable cards on mobile, grid on desktop
 */

import { useRef } from "react";
import { useInView } from "@/components/hooks/useInView";
import { Store, Globe, Building2, Network, Cpu } from "lucide-react";

const useCases = [
  {
    icon: Store,
    title: "AI agents calling internal and external APIs",
    body: "Authorize first-party and third-party agents without issuing long-lived API keys. Every request carries verifiable identity and request proof.",
  },
  {
    icon: Globe,
    title: "Provider-managed APIs exposed to machine clients",
    body: "Providers can enforce per-request authorization at their own boundary without rewriting upstream APIs or managing shared credentials per caller.",
  },
  {
    icon: Building2,
    title: "Cross-organization API access",
    body: "Machine clients from partner organizations enroll through trust anchors. Authorization is cryptographic, not trust-on-first-use.",
  },
  {
    icon: Network,
    title: "Internal service-to-service authorization",
    body: "Replace internal API keys with request-level proofs. Every service-to-service call is verifiable, auditable, and replay-protected.",
  },
  {
    icon: Cpu,
    title: "Priced actions with governed spend",
    body: "Use the optional Economy extension where a route must authorize spend against the same request-linked trust chain as the core authorization decision.",
  },
];

export default function UseCases() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.05 });

  return (
    <section
      id="usecases"
      ref={ref}
      style={{
        padding: "6rem 0",
        background: "rgba(0,212,255,0.015)",
      }}
    >
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
          <div className="tp-label" style={{ marginBottom: "1rem" }}>Use cases</div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              letterSpacing: "-0.025em",
              color: "oklch(0.94 0.006 240)",
              lineHeight: 1.15,
            }}
          >
            Where Trustplane fits today
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1rem",
          }}
        >
          {useCases.map((uc, i) => {
            const Icon = uc.icon;
            return (
              <div
                key={i}
                className="tp-card"
                style={{
                  padding: "1.75rem",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(24px)",
                  transition: `all 0.5s ease ${0.1 + i * 0.08}s`,
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "0.5rem",
                    background: "rgba(0,212,255,0.07)",
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
                  {uc.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    lineHeight: 1.65,
                    color: "oklch(0.5 0.01 240)",
                  }}
                >
                  {uc.body}
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
