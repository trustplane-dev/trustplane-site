/*
 * HOW IT WORKS — Between Architecture and Identity
 * Design: Dark Precision Engineering — numbered horizontal steps with connecting lines
 */

import { useRef } from "react";
import { useInView } from "@/components/hooks/useInView";
import { Settings, KeyRound, PenLine, CheckCheck } from "lucide-react";

const steps = [
  {
    icon: Settings,
    num: "01",
    title: "Configure in Control Plane",
    body: "Define tenants, APIs, clients, trust anchors, and rollout settings. The Control Plane is your source of truth for authorization policy.",
  },
  {
    icon: KeyRound,
    num: "02",
    title: "Enroll client keys",
    body: "Machine clients and agents enroll public keys. Private keys stay local. Trustplane stores only the public key and expiry state.",
  },
  {
    icon: PenLine,
    num: "03",
    title: "Sign every request",
    body: "The SDK or CLI produces a canonical transcript signature covering method, path, body hash, time bucket, nonce, and client identity.",
  },
  {
    icon: CheckCheck,
    num: "04",
    title: "Verify, enforce, and audit",
    body: "Auth Plane validates the proof, checks replay protection, mints a short-lived JWT, and records evidence-grade audit data for every decision.",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.05 });

  return (
    <section id="how" ref={ref} style={{ padding: "6rem 0" }}>
      <div className="container">
        <div
          style={{
            marginBottom: "3.5rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <div className="tp-label" style={{ marginBottom: "1rem" }}>How it works</div>
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
            From configuration to verified requests
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
            position: "relative",
          }}
          className="how-grid"
        >
          {/* Connecting line */}
          <div
            style={{
              position: "absolute",
              top: "28px",
              left: "calc(12.5% + 18px)",
              right: "calc(12.5% + 18px)",
              height: "1px",
              background: "linear-gradient(90deg, rgba(0,212,255,0.3), rgba(0,212,255,0.1), rgba(0,212,255,0.3))",
              zIndex: 0,
            }}
            className="how-connector"
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                style={{
                  padding: "0 1.5rem 0 1rem",
                  position: "relative",
                  zIndex: 1,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(24px)",
                  transition: `all 0.6s ease ${0.1 + i * 0.12}s`,
                }}
              >
                {/* Icon circle */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "oklch(0.085 0.008 240)",
                    border: "1px solid rgba(0,212,255,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    boxShadow: "0 0 0 4px oklch(0.085 0.008 240)",
                  }}
                >
                  <Icon size={22} style={{ color: "#00d4ff" }} />
                </div>

                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.625rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    color: "rgba(0,212,255,0.5)",
                    marginBottom: "0.5rem",
                  }}
                >
                  STEP {step.num}
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9375rem",
                    letterSpacing: "-0.01em",
                    color: "oklch(0.88 0.006 240)",
                    lineHeight: 1.35,
                    marginBottom: "0.625rem",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    lineHeight: 1.65,
                    color: "oklch(0.5 0.01 240)",
                  }}
                >
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .how-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
          .how-connector {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .how-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
