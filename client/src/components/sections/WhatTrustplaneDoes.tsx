/*
 * WHAT TRUSTPLANE DOES — Section 3
 * Design: Dark Precision Engineering — feature cards with cyan icon accents
 */

import { useRef } from "react";
import { useInView } from "@/components/hooks/useInView";
import { UserCheck, Clock, FileSignature, Cpu, RotateCcw, Ticket, BookOpen } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Stable machine identity",
    body: "Client records persist across key rotations. The identity of an agent or machine never changes, even as credentials cycle underneath it.",
  },
  {
    icon: Clock,
    title: "Short-lived keys and sessions",
    body: "Enrolled public keys expire automatically. Sessions represent bounded runtime executions — scoped, time-limited, and revocable.",
  },
  {
    icon: FileSignature,
    title: "Cryptographic request proofs",
    body: "Every request carries a canonical transcript signature covering method, path, body hash, time bucket, nonce, and client identity.",
  },
  {
    icon: Cpu,
    title: "Runtime verification at the edge",
    body: "The Auth Plane validates proofs at request time — checking key state, session scope, and replay protection before any traffic reaches upstream.",
  },
  {
    icon: RotateCcw,
    title: "Replay protection and time-bound validity",
    body: "Nonce storage and time-bucket validation reject stale or replayed requests. No request can be reused outside its validity window.",
  },
  {
    icon: Ticket,
    title: "JWT issuance for downstream systems",
    body: "After a request is allowed, Auth Plane mints a short-lived ES256 JWT for boundary-to-upstream forwarding or backend verification.",
  },
  {
    icon: BookOpen,
    title: "Evidence-grade audit for every decision",
    body: "Every authorization decision is recorded with request identity, proof context, policy match, replay checks, and the final upstream result.",
  },
];

export default function WhatTrustplaneDoes() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.05 });

  return (
    <section id="what" ref={ref} style={{ padding: "6rem 0" }}>
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "3.5rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <div className="tp-label">Core runtime</div>
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
            Authorization that travels with every request
          </h2>
        </div>

        {/* Feature grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
          }}
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="tp-card"
                style={{
                  padding: "1.5rem",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(24px)",
                  transition: `all 0.5s ease ${0.05 + i * 0.07}s`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.875rem",
                    marginBottom: "0.875rem",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "0.375rem",
                      background: "rgba(0,212,255,0.08)",
                      border: "1px solid rgba(0,212,255,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} style={{ color: "#00d4ff" }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      letterSpacing: "-0.01em",
                      color: "oklch(0.88 0.006 240)",
                      lineHeight: 1.3,
                    }}
                  >
                    {f.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    lineHeight: 1.65,
                    color: "oklch(0.52 0.01 240)",
                  }}
                >
                  {f.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
