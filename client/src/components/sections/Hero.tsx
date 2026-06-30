/*
 * HERO SECTION — Trustplane Marketing
 * Design: Dark Precision Engineering
 * Full-bleed hero with animated request flow diagram, electric cyan accents
 * Background: generated hero image with dark overlay + grid pattern
 */

import { useEffect, useState } from "react";
import { ArrowRight, ChevronRight, ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663447221905/H8JPDiTDsJ3QfNiXuH3bu8/trustplane-hero-bg-U6VJjwN5jVm4josWGie6bn.webp";

const flowNodes = [
  { id: "caller", label: "Caller", sublabel: "Agent or Service" },
  { id: "proof", label: "Request Proof", sublabel: "Canonical Transcript" },
  { id: "trustplane", label: "Trustplane", sublabel: "Auth Plane", highlight: true },
  { id: "provider", label: "Boundary", sublabel: "Provider Adapter" },
  { id: "api", label: "Upstream", sublabel: "Business API" },
  { id: "audit", label: "Evidence", sublabel: "Audit Chain" },
];

function AnimatedFlow() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((s) => (s + 1) % flowNodes.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          minWidth: "560px",
          padding: "1rem 0",
        }}
      >
        {flowNodes.map((node, i) => (
          <div key={node.id} style={{ display: "flex", alignItems: "center", flex: node.highlight ? "1.3" : "1" }}>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.375rem",
              }}
            >
              <div
                style={{
                  width: node.highlight ? "48px" : "40px",
                  height: node.highlight ? "48px" : "40px",
                  borderRadius: node.highlight ? "0.5rem" : "50%",
                  background: node.highlight
                    ? "rgba(0,212,255,0.15)"
                    : activeStep >= i
                    ? "rgba(0,212,255,0.08)"
                    : "rgba(255,255,255,0.04)",
                  border: node.highlight
                    ? "1.5px solid rgba(0,212,255,0.55)"
                    : activeStep >= i
                    ? "1px solid rgba(0,212,255,0.3)"
                    : "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.4s ease",
                  boxShadow: node.highlight && activeStep >= i
                    ? "0 0 16px rgba(0,212,255,0.2)"
                    : "none",
                }}
              >
                {node.highlight ? (
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                    <path d="M9 2L16 5.75V12.25L9 16L2 12.25V5.75L9 2Z" stroke="#00d4ff" strokeWidth="1.2" fill="rgba(0,212,255,0.1)"/>
                    <path d="M6 9L8 11L12 7" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <div
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: activeStep >= i ? "#00d4ff" : "rgba(255,255,255,0.18)",
                      transition: "background 0.4s ease",
                    }}
                  />
                )}
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.5625rem",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: node.highlight
                      ? "#00d4ff"
                      : activeStep >= i
                      ? "oklch(0.82 0.006 240)"
                      : "oklch(0.42 0.01 240)",
                    transition: "color 0.4s ease",
                  }}
                >
                  {node.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.5rem",
                    color: "oklch(0.38 0.01 240)",
                    marginTop: "1px",
                  }}
                >
                  {node.sublabel}
                </div>
              </div>
            </div>

            {i < flowNodes.length - 1 && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 2px",
                  marginBottom: "20px",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "1px",
                    background: activeStep > i
                      ? "rgba(0,212,255,0.45)"
                      : "rgba(255,255,255,0.07)",
                    transition: "background 0.4s ease",
                  }}
                />
                <ChevronRight
                  size={9}
                  style={{
                    color: activeStep > i ? "rgba(0,212,255,0.55)" : "rgba(255,255,255,0.1)",
                    transition: "color 0.4s ease",
                    marginLeft: "-3px",
                    flexShrink: 0,
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "5rem",
        paddingBottom: "4rem",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.16,
          zIndex: 0,
        }}
      />

      {/* Grid overlay */}
      <div
        className="tp-grid-bg"
        style={{ position: "absolute", inset: 0, zIndex: 1, opacity: 0.55 }}
      />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "40%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "600px",
          background: "radial-gradient(ellipse, rgba(0,212,255,0.055) 0%, transparent 65%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            maxWidth: "860px",
          }}
        >
          {/* Label badge */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(14px)",
              transition: "all 0.55s ease 0.08s",
              marginBottom: "1.5rem",
            }}
          >
            <span
              className="tp-label"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.375rem 0.875rem",
                background: "rgba(0,212,255,0.07)",
                border: "1px solid rgba(0,212,255,0.18)",
                borderRadius: "2rem",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "#00d4ff",
                  display: "inline-block",
                  boxShadow: "0 0 6px rgba(0,212,255,0.8)",
                  animation: "nodePulse 2s ease-in-out infinite",
                }}
              />
              Cryptographic Authorization Layer
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.75rem, 6.5vw, 4.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "oklch(0.96 0.006 240)",
              marginBottom: "1.5rem",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(18px)",
              transition: "all 0.6s ease 0.18s",
            }}
          >
            Authorization for AI agents
            <br />
            <span style={{ color: "#00d4ff" }}>and machine systems,</span>
            <br />
            powered by cryptographic proof.
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1rem, 2.2vw, 1.1875rem)",
              lineHeight: 1.7,
              color: "oklch(0.58 0.01 240)",
              maxWidth: "560px",
              marginBottom: "2.5rem",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(18px)",
              transition: "all 0.6s ease 0.28s",
            }}
          >
            Trustplane combines a control plane, auth plane, and provider-owned boundary
            model to verify cryptographic request proofs, issue short-lived downstream
            JWTs, prevent replay, and keep evidence linked to the final provider outcome.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.875rem",
              marginBottom: "3.5rem",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(18px)",
              transition: "all 0.6s ease 0.38s",
            }}
          >
            <a href="/contact" className="tp-btn-primary" style={{ fontSize: "0.9375rem", padding: "0.75rem 1.75rem" }}>
              Contact Trustplane
              <ArrowRight size={16} />
            </a>
            <a href="https://docs.auth.trustplane.dev" className="tp-btn-ghost" style={{ fontSize: "0.9375rem", padding: "0.75rem 1.75rem" }}>
              Read the Docs
            </a>
          </div>

          {/* Animated flow card */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.8s ease 0.55s",
            }}
          >
            <div
              style={{
                padding: "1.125rem 1.5rem",
                background: "rgba(10,11,13,0.75)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "0.75rem",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="tp-label"
                style={{ marginBottom: "0.625rem", opacity: 0.6 }}
              >
                Request flow — live
              </div>
              <AnimatedFlow />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.25rem",
          opacity: visible ? 0.4 : 0,
          transition: "opacity 1s ease 1.2s",
          animation: visible ? "scrollBounce 2s ease-in-out 1.5s infinite" : "none",
        }}
      >
        <ChevronDown size={18} style={{ color: "oklch(0.6 0.01 240)" }} />
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "100px",
          background: "linear-gradient(transparent, oklch(0.085 0.008 240))",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
