/*
 * FINAL CTA — Section 11
 * Design: Dark Precision Engineering — strong closing with glow effect
 */

import { useRef } from "react";
import { useInView } from "@/components/hooks/useInView";
import { ArrowRight, BookOpen } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <section
      id="get-started"
      ref={ref}
      style={{
        padding: "8rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(0,212,255,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", textAlign: "center" }}>
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s ease",
          }}
        >
          <div className="tp-label" style={{ marginBottom: "1.5rem", display: "inline-block" }}>
            Get started
          </div>

          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.03em",
              color: "oklch(0.96 0.006 240)",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Deploy request-bound authorization at the provider boundary
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
              lineHeight: 1.65,
              color: "oklch(0.58 0.01 240)",
              maxWidth: "480px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "2.5rem",
            }}
          >
            Trustplane is the open-source control plane and auth plane for request-bound machine authorization, with provider-owned boundary enforcement that never weakens the authorization chain.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://github.com/trustplane-dev"
              target="_blank"
              rel="noreferrer"
              className="tp-btn-primary"
              style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}
            >
              View on GitHub
              <ArrowRight size={18} />
            </a>
            <a
              href="https://docs.auth.trustplane.dev"
              className="tp-btn-ghost"
              style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}
            >
              <BookOpen size={16} />
              Read the Docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
