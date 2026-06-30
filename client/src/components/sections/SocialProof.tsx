/*
 * SOCIAL PROOF STRIP — Between Hero and WhyMatters
 * Design: Dark Precision Engineering — monospaced stats, horizontal divider strip
 */

import { useRef, useEffect, useState } from "react";
import { useInView } from "@/components/hooks/useInView";

const stats = [
  { value: "Per-request", label: "Authorization granularity" },
  { value: "ES256", label: "Downstream JWT signing" },
  { value: "Replay-safe", label: "Nonce and timestamp controls" },
  { value: "Evidence-linked", label: "Decision plus final outcome" },
];

function CountUp({ target, suffix = "", inView }: { target: string; suffix?: string; inView: boolean }) {
  return (
    <span
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        fontSize: "1.75rem",
        letterSpacing: "-0.03em",
        color: "#00d4ff",
        opacity: inView ? 1 : 0,
        transition: "opacity 0.6s ease",
      }}
    >
      {target}
    </span>
  );
}

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.3 });

  return (
    <section ref={ref} style={{ padding: "3rem 0" }}>
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.015)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0",
            }}
            className="stats-grid"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  padding: "2rem 1.5rem",
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(16px)",
                  transition: `all 0.5s ease ${i * 0.08}s`,
                  textAlign: "center",
                }}
              >
                <CountUp target={stat.value} inView={inView} />
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.6rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "oklch(0.42 0.01 240)",
                    marginTop: "0.375rem",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .stats-grid > div:nth-child(2) {
            border-right: none !important;
          }
          .stats-grid > div:nth-child(1),
          .stats-grid > div:nth-child(2) {
            border-bottom: 1px solid rgba(255,255,255,0.06);
          }
        }
      `}</style>
    </section>
  );
}
