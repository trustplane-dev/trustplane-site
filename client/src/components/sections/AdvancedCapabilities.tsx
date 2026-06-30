/*
 * ADVANCED CAPABILITIES — Section 10
 * Design: Dark Precision Engineering — premium cards with clear public hierarchy
 */

import { useRef } from "react";
import { useInView } from "@/components/hooks/useInView";
import { useTheme } from "@/contexts/ThemeContext";
import { EyeOff, Cpu, Shield, WalletCards } from "lucide-react";

const advanced = [
  {
    icon: Shield,
    tag: "Core",
    title: "The primary Trustplane operating model",
    body: "Control Plane, Auth Plane, provider-owned boundary enforcement, replay-safe request verification, short-lived downstream JWT issuance, and evidence-grade audit.",
    badge: "Primary",
  },
  {
    icon: WalletCards,
    tag: "Economy",
    title: "Governed spend for priced actions",
    body: "An optional extension for versioned offers, tenant enablement, client spend policy, and request-linked reservation and settlement.",
    badge: "Extension",
  },
  {
    icon: EyeOff,
    tag: "Blindfold",
    title: "Advanced disclosure controls",
    body: "A narrower advanced mode for verification-sensitive environments that require stronger disclosure controls than the core request-proof path.",
    badge: "Advanced",
  },
  {
    icon: Cpu,
    tag: "Enclave",
    title: "Selective high-assurance path",
    body: "A constrained path for environments that require stronger runtime isolation and attestation assumptions than the main Trustplane operating model.",
    badge: "Selective",
  },
];

export default function AdvancedCapabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const bgColor = isDark ? "rgba(0,212,255,0.015)" : "rgba(0,136,204,0.015)";
  const accentColor = isDark ? "#00d4ff" : "#0088cc";
  const textPrimary = isDark ? "oklch(0.94 0.006 240)" : "oklch(0.15 0.01 240)";
  const textSecondary = isDark ? "oklch(0.55 0.01 240)" : "oklch(0.45 0.01 240)";
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const primaryColor = "#22c55e";
  const primaryBg = isDark ? "rgba(34,197,94,0.08)" : "rgba(34,197,94,0.08)";
  const primaryBorder = isDark ? "rgba(34,197,94,0.2)" : "rgba(34,197,94,0.2)";
  const advancedColor = isDark ? "oklch(0.5 0.01 240)" : "oklch(0.45 0.01 240)";
  const advancedBg = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
  const advancedBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  return (
    <section
      id="advanced"
      ref={ref}
      style={{
        padding: "6rem 0",
        background: bgColor,
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
          <div className="tp-label" style={{ marginBottom: "1rem" }}>Platform surface</div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              letterSpacing: "-0.025em",
              color: textPrimary,
              lineHeight: 1.15,
              maxWidth: "520px",
            }}
          >
            A clear product surface, ordered around the shipped core
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.65,
              color: textSecondary,
              maxWidth: "520px",
              marginTop: "1rem",
            }}
          >
            Trustplane should lead publicly with the shipped core operating model. Economy is optional and additive. Blindfold and Enclave remain advanced paths with narrower adoption requirements.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {advanced.map((cap, i) => {
            const Icon = cap.icon;
            const isPrimary = cap.badge === "Primary";
            const isExtension = cap.badge === "Extension";
            const isSelective = cap.badge === "Selective";
            return (
              <div
                key={i}
                style={{
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "0.75rem",
                  padding: "2rem",
                  position: "relative",
                  overflow: "hidden",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(24px)",
                  transition: `all 0.6s ease ${0.1 + i * 0.12}s`,
                }}
              >
                {/* Top accent line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: isPrimary
                      ? `linear-gradient(90deg, ${primaryColor}, transparent)`
                      : isExtension
                      ? `linear-gradient(90deg, ${accentColor}, transparent)`
                      : `linear-gradient(90deg, ${accentColor}, transparent)`,
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "0.5rem",
                      background: isPrimary
                        ? isDark ? "rgba(34,197,94,0.08)" : "rgba(34,197,94,0.08)"
                        : isDark ? "rgba(0,212,255,0.08)" : "rgba(0,136,204,0.08)",
                      border: isPrimary
                        ? `1px solid ${primaryBorder}`
                        : isDark ? "1px solid rgba(0,212,255,0.15)" : "1px solid rgba(0,136,204,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={20} style={{ color: isPrimary ? primaryColor : accentColor }} />
                  </div>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.5625rem",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: isPrimary ? primaryColor : isExtension || isSelective ? accentColor : advancedColor,
                      background: isPrimary ? primaryBg : isExtension || isSelective ? (isDark ? "rgba(0,212,255,0.08)" : "rgba(0,136,204,0.08)") : advancedBg,
                      border: `1px solid ${isPrimary ? primaryBorder : isExtension || isSelective ? (isDark ? "rgba(0,212,255,0.2)" : "rgba(0,136,204,0.2)") : advancedBorder}`,
                      padding: "0.25rem 0.5rem",
                      borderRadius: "0.25rem",
                    }}
                  >
                    {cap.badge}
                  </span>
                </div>

                <div className="tp-label" style={{ marginBottom: "0.625rem", opacity: 0.8, color: accentColor }}>
                  {cap.tag}
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "1.0625rem",
                    letterSpacing: "-0.015em",
                    color: textPrimary,
                    lineHeight: 1.35,
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
                    color: textSecondary,
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
