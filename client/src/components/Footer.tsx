/*
 * FOOTER — Trustplane Marketing
 * Design: Dark Precision Engineering — minimal, monospaced, infrastructure-grade
 */

import { Link } from "wouter";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    {
      group: "Product",
      items: [
        { label: "Core Runtime", href: "/#what" },
        { label: "Architecture", href: "/architecture" },
        { label: "Provider Boundary", href: "/provider-boundary" },
        { label: "Audit & Evidence", href: "/#audit" },
      ],
    },
    {
      group: "Developers",
      items: [
        { label: "Documentation", href: "https://docs.auth.trustplane.dev" },
        { label: "Architecture", href: "https://docs.auth.trustplane.dev/architecture/overview" },
        { label: "Provider Integration", href: "https://docs.auth.trustplane.dev/deploy/overview" },
      ],
    },
    {
      group: "Company",
      items: [
        { label: "Why Trustplane", href: "/#why" },
        { label: "Security", href: "/security" },
        { label: "Contact Trustplane", href: "/contact" },
      ],
    },
  ];

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "3.5rem",
        paddingBottom: "2.5rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr repeat(3, 1fr)",
            gap: "3rem",
            marginBottom: "3rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "0.375rem",
                  background: "rgba(0,212,255,0.1)",
                  border: "1px solid rgba(0,212,255,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L13 4.5V9.5L7 13L1 9.5V4.5L7 1Z" stroke="#00d4ff" strokeWidth="1.2" fill="none"/>
                  <path d="M7 4L10 5.75V9.25L7 11L4 9.25V5.75L7 4Z" fill="rgba(0,212,255,0.2)" stroke="#00d4ff" strokeWidth="0.8"/>
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  letterSpacing: "-0.02em",
                  color: "oklch(0.88 0.006 240)",
                }}
              >
                Trustplane
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8125rem",
                lineHeight: 1.65,
                color: "oklch(0.45 0.01 240)",
                maxWidth: "240px",
              }}
            >
              The cryptographic authorization layer for AI agents and machine systems.
            </p>
          </div>

          {/* Link groups */}
          {links.map((group) => (
            <div key={group.group}>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.625rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "oklch(0.4 0.01 240)",
                  marginBottom: "1rem",
                }}
              >
                {group.group}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {group.items.map((item) => (
                  <li key={item.label}>
                    {item.href.startsWith("http") ? (
                    <a
                      href={item.href}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.8125rem",
                        color: "oklch(0.5 0.01 240)",
                        textDecoration: "none",
                        transition: "color 0.15s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.color = "oklch(0.82 0.006 240)";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.color = "oklch(0.5 0.01 240)";
                      }}
                    >
                      {item.label}
                    </a>
                    ) : (
                    <Link href={item.href}>
                      <a
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.8125rem",
                          color: "oklch(0.5 0.01 240)",
                          textDecoration: "none",
                          transition: "color 0.15s ease",
                        }}
                        onMouseEnter={(e) => {
                          (e.target as HTMLElement).style.color = "oklch(0.82 0.006 240)";
                        }}
                        onMouseLeave={(e) => {
                          (e.target as HTMLElement).style.color = "oklch(0.5 0.01 240)";
                        }}
                      >
                        {item.label}
                      </a>
                    </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.6875rem",
              color: "oklch(0.35 0.01 240)",
              letterSpacing: "0.04em",
            }}
          >
            © {year} Trustplane. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[
              { label: "Documentation", href: "https://docs.auth.trustplane.dev" },
              { label: "Security", href: "/security" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              item.href.startsWith("http") ? (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: "oklch(0.38 0.01 240)",
                    textDecoration: "none",
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "oklch(0.6 0.01 240)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "oklch(0.38 0.01 240)";
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} href={item.href}>
                  <a
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      color: "oklch(0.38 0.01 240)",
                      textDecoration: "none",
                      transition: "color 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "oklch(0.6 0.01 240)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = "oklch(0.38 0.01 240)";
                    }}
                  >
                    {item.label}
                  </a>
                </Link>
              )
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
