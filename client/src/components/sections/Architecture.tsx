/*
 * ARCHITECTURE — Section 5
 * Design: Dark Precision Engineering — two-plane split layout with diagram
 * Uses generated architecture diagram image
 */

import { useRef } from "react";
import { useInView } from "@/components/hooks/useInView";

const ARCH_DIAGRAM = "https://d2xsxph8kpxj0f.cloudfront.net/310519663447221905/H8JPDiTDsJ3QfNiXuH3bu8/trustplane-arch-diagram-GfRRqTF3hkK84AZBhh9nhV.webp";

const controlPlaneItems = [
  "Tenants, APIs, and client records",
  "Trust anchors and provider configuration",
  "Rollout modes: off, observe, enforce",
  "Key enrollment and session lifecycle",
  "Provider ownership verification",
];

const authPlaneItems = [
  "Verify canonical request proofs",
  "Enforce replay protection and nonce checks",
  "Validate session scope and runtime context",
  "Mint short-lived ES256 JWTs",
  "Record evidence-grade audit logs",
];

function PlaneCard({
  label,
  title,
  items,
  accent,
  delay,
  inView,
}: {
  label: string;
  title: string;
  items: string[];
  accent?: boolean;
  delay: number;
  inView: boolean;
}) {
  return (
    <div
      style={{
        flex: 1,
        background: accent ? "rgba(0,212,255,0.05)" : "rgba(255,255,255,0.03)",
        border: accent ? "1px solid rgba(0,212,255,0.2)" : "1px solid rgba(255,255,255,0.07)",
        borderRadius: "0.75rem",
        padding: "2rem",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `all 0.6s ease ${delay}s`,
      }}
    >
      <div className="tp-label" style={{ marginBottom: "0.75rem" }}>{label}</div>
      <h3
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: "1.25rem",
          letterSpacing: "-0.02em",
          color: "oklch(0.94 0.006 240)",
          marginBottom: "1.5rem",
        }}
      >
        {title}
      </h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
        {items.map((item, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.625rem",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              lineHeight: 1.55,
              color: "oklch(0.6 0.01 240)",
            }}
          >
            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "#00d4ff",
                flexShrink: 0,
                marginTop: "0.45rem",
                opacity: 0.7,
              }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Architecture() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.05 });

  return (
    <section id="architecture" ref={ref} style={{ padding: "6rem 0" }}>
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
          <div className="tp-label" style={{ marginBottom: "1rem" }}>Architecture</div>
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
            Two planes. One verifiable authorization system.
          </h2>
        </div>

        {/* Diagram */}
        <div
          style={{
            marginBottom: "2.5rem",
            borderRadius: "0.75rem",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.07)",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.8s ease 0.2s",
          }}
        >
          <img
            src={ARCH_DIAGRAM}
            alt="Trustplane Architecture: Client → Provider Adapter → Auth Plane → API → Audit"
            style={{ width: "100%", display: "block" }}
          />
        </div>

        {/* Two-plane split */}
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            flexWrap: "wrap",
          }}
        >
          <PlaneCard
            label="Control Plane"
            title="Configure"
            items={controlPlaneItems}
            delay={0.3}
            inView={inView}
          />
          <PlaneCard
            label="Auth Plane"
            title="Verify"
            items={authPlaneItems}
            accent
            delay={0.4}
            inView={inView}
          />
        </div>

        {/* Flow summary */}
        <div
          style={{
            marginTop: "2.5rem",
            padding: "1.5rem 2rem",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "0.5rem",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.5rem",
              justifyContent: "center",
            }}
          >
            {["Configure in Control Plane", "→", "Verify in Auth Plane", "→", "Enforce at Provider Boundary", "→", "Forward allowed traffic", "→", "Upstream API unchanged"].map((step, i) => (
              <span
                key={i}
                style={{
                  fontFamily: step === "→" ? "'Inter', sans-serif" : "'IBM Plex Mono', monospace",
                  fontSize: step === "→" ? "0.875rem" : "0.75rem",
                  fontWeight: step === "→" ? 400 : 500,
                  color: step === "→" ? "rgba(0,212,255,0.4)" : "oklch(0.55 0.01 240)",
                  letterSpacing: step === "→" ? 0 : "0.04em",
                }}
              >
                {step}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
