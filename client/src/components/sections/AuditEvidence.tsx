/*
 * AUDIT & EVIDENCE — Section 9
 * Design: Dark Precision Engineering — terminal-style log display, strong positioning
 */

import { useRef, useState, useEffect } from "react";
import { useInView } from "@/components/hooks/useInView";

const auditFields = [
  { key: "client_id", value: "agent-intel-prod", label: "Client identity" },
  { key: "proof_type", value: "canonical_transcript", label: "Proof verified" },
  { key: "key_id", value: "key-rotating-es256", label: "Key used" },
  { key: "session_id", value: "sess-runtime-bounded", label: "Session scope" },
  { key: "method", value: "GET", label: "Request method" },
  { key: "path", value: "/accounts", label: "Request path" },
  { key: "body_hash", value: "sha256:a3f9...", label: "Body hash" },
  { key: "nonce", value: "n-4c7b9e2a", label: "Replay nonce" },
  { key: "time_bucket", value: "1710676800", label: "Time bucket" },
  { key: "policy_match", value: "allow:intel.read", label: "Policy matched" },
  { key: "decision", value: "ALLOW", label: "Decision", highlight: true },
  { key: "upstream_result", value: "200 OK in 24ms", label: "Upstream result", success: true },
];

function AuditLog({ inView }: { inView: boolean }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setVisibleCount(count);
      if (count >= auditFields.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div
      style={{
        background: "rgba(0,0,0,0.5)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "0.75rem",
        overflow: "hidden",
        fontFamily: "'IBM Plex Mono', monospace",
      }}
    >
      {/* Terminal header */}
      <div
        style={{
          padding: "0.75rem 1.25rem",
          background: "rgba(255,255,255,0.03)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <div style={{ display: "flex", gap: "0.375rem" }}>
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c, opacity: 0.7 }} />
          ))}
        </div>
        <span
          style={{
            fontSize: "0.6875rem",
            color: "oklch(0.4 0.01 240)",
            marginLeft: "0.5rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          audit_evidence.json
        </span>
      </div>

      {/* Log entries */}
      <div style={{ padding: "1.25rem" }}>
        <div style={{ color: "rgba(0,212,255,0.5)", fontSize: "0.6875rem", marginBottom: "0.75rem" }}>
          {"// request_id: req-8b3f2c1a9e"}
        </div>
        {auditFields.map((field, i) => (
          <div
            key={field.key}
            style={{
              display: "flex",
              gap: "0.5rem",
              fontSize: "0.75rem",
              lineHeight: 1.8,
              opacity: i < visibleCount ? 1 : 0,
              transition: "opacity 0.2s ease",
            }}
          >
            <span style={{ color: "oklch(0.45 0.01 240)", minWidth: "130px" }}>
              {field.key}:
            </span>
            <span
              style={{
                color: field.highlight
                  ? "#00d4ff"
                  : field.success
                  ? "#22c55e"
                  : "oklch(0.72 0.01 240)",
                fontWeight: field.highlight || field.success ? 500 : 400,
              }}
            >
              "{field.value}"
            </span>
            <span style={{ color: "oklch(0.35 0.01 240)", fontSize: "0.6875rem", alignSelf: "center" }}>
              // {field.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AuditEvidence() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="audit" ref={ref} style={{ padding: "6rem 0" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="audit-grid"
        >
          {/* Left: log */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-24px)",
              transition: "all 0.7s ease 0.1s",
            }}
          >
            <AuditLog inView={inView} />
          </div>

          {/* Right: text */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(24px)",
              transition: "all 0.7s ease 0.2s",
            }}
          >
            <div className="tp-label" style={{ marginBottom: "1rem" }}>Audit and evidence</div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                letterSpacing: "-0.025em",
                color: "oklch(0.94 0.006 240)",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              Security you can prove
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "oklch(0.58 0.01 240)",
                marginBottom: "2rem",
              }}
            >
              Every authorization decision produces evidence-grade data. Not just allow or deny: who called, what proof was verified, which policy matched, whether replay checks passed, and what the provider boundary returned upstream.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { label: "Who called", value: "Client identity and enrolled key" },
                { label: "What proof was verified", value: "Canonical transcript signature" },
                { label: "Which policy matched", value: "Explicit allow or deny reason" },
                { label: "Replay and session checks", value: "Nonce, time bucket, session scope" },
                { label: "Final upstream result", value: "Boundary outcome recorded" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.75rem 0",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    gap: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      color: "oklch(0.75 0.008 240)",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.6875rem",
                      color: "oklch(0.5 0.01 240)",
                      textAlign: "right",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                color: "#00d4ff",
                marginTop: "2rem",
                letterSpacing: "-0.01em",
              }}
            >
              Authorization evidence stays linked to the final runtime outcome.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .audit-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
