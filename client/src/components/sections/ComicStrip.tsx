/*
 * COMIC STRIP — The Secret Handshake (Visual Comic)
 * Design: Dark Precision Engineering — 10-panel comic story with generated images
 * Story: Alice calls Bob without revealing secrets
 */

import { useRef } from "react";
import { useInView } from "@/components/hooks/useInView";
import { useTheme } from "@/contexts/ThemeContext";

const comicPanels = [
  {
    num: "1",
    title: "The Setup",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663447221905/H8JPDiTDsJ3QfNiXuH3bu8/comic-panel-1-setup-2U2CiVBrMDdEWNZmR4xBTy.webp",
  },
  {
    num: "2",
    title: "The Enrollment",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663447221905/H8JPDiTDsJ3QfNiXuH3bu8/comic-panel-2-enrollment-9XQgysLE4U4WG5TVCF47L9.webp",
  },
  {
    num: "3",
    title: "The Request Preparation",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663447221905/H8JPDiTDsJ3QfNiXuH3bu8/comic-panel-3-request-prep-7Pu29sigUo3zNVgY5eb3Yk.webp",
  },
  {
    num: "4",
    title: "The Signature",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663447221905/H8JPDiTDsJ3QfNiXuH3bu8/comic-panel-4-signature-icCsHjvZNC7UR4J9JRRt7j.webp",
  },
  {
    num: "5",
    title: "The Delivery",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663447221905/H8JPDiTDsJ3QfNiXuH3bu8/comic-panel-5-delivery-QEiE5bhqUVDDVtfdtPnV6i.webp",
  },
  {
    num: "6",
    title: "The Verification",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663447221905/H8JPDiTDsJ3QfNiXuH3bu8/comic-panel-6-verification-84CZyrPQeezrwUia4T9ngu.webp",
  },
  {
    num: "7",
    title: "The Confirmation",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663447221905/H8JPDiTDsJ3QfNiXuH3bu8/comic-panel-7-confirmation-Sa9zrXpCkjVD835h6XXpp6.webp",
  },
  {
    num: "8",
    title: "The Access",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663447221905/H8JPDiTDsJ3QfNiXuH3bu8/comic-panel-8-access-fWQxicXuHX68du6Y5pN5LB.webp",
  },
  {
    num: "9",
    title: "The Benefits",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663447221905/H8JPDiTDsJ3QfNiXuH3bu8/comic-panel-9-benefits-nkDW2YT9EeES8iac4mrtZN.webp",
  },
  {
    num: "10",
    title: "The Lesson",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663447221905/H8JPDiTDsJ3QfNiXuH3bu8/comic-panel-10-lesson-final-4QeqwhuPeyhD8UqFcLYphr.webp",
  },
];

export default function ComicStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const accentColor = isDark ? "#00d4ff" : "#0055aa";
  const textPrimary = isDark ? "oklch(0.94 0.006 240)" : "oklch(0.18 0.01 240)";
  const textSecondary = isDark ? "oklch(0.58 0.01 240)" : "oklch(0.35 0.015 240)";
  const panelBg = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)";
  const panelBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.12)";
  const dividerBg = isDark ? "rgba(0,212,255,0.015)" : "rgba(0,85,170,0.015)";
  const labelColor = accentColor;

  return (
    <section
      id="comic"
      ref={ref}
      style={{
        padding: "6rem 0",
        background: dividerBg,
      }}
    >
      <div className="tp-section-divider" />
      <div className="container" style={{ paddingTop: "6rem" }}>
        {/* Header */}
        <div
          style={{
            marginBottom: "3rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <div className="tp-label" style={{ marginBottom: "1rem", color: labelColor }}>
            Request walkthrough
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              letterSpacing: "-0.025em",
              color: textPrimary,
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            A visual walkthrough of request-bound authorization
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.6,
              color: textSecondary,
              maxWidth: "600px",
            }}
          >
            A visual sequence showing how client identity, request proofs, verification, provider-boundary enforcement, and evidence connect in one runtime chain.
          </p>
        </div>

        {/* Comic panels grid - 2 rows x 5 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
          className="comic-grid"
        >
          {comicPanels.map((panel, i) => (
            <div
              key={i}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `all 0.6s ease ${0.05 + i * 0.06}s`,
              }}
            >
              {/* Panel card with image */}
              <div
                style={{
                  background: panelBg,
                  border: `2px solid ${panelBorder}`,
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = accentColor;
                  e.currentTarget.style.boxShadow = `0 0 20px ${accentColor}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = panelBorder;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Panel number badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "0.75rem",
                    right: "0.75rem",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: isDark ? "rgba(0,212,255,0.15)" : "rgba(0,85,170,0.15)",
                    border: `1.5px solid ${accentColor}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 10,
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: accentColor,
                  }}
                >
                  {panel.num}
                </div>

                {/* Comic panel image */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1",
                    overflow: "hidden",
                    background: "#000",
                  }}
                >
                  <img
                    src={panel.image}
                    alt={`Panel ${panel.num}: ${panel.title}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                {/* Panel title */}
                <div
                  style={{
                    padding: "1rem",
                    borderTop: `1px solid ${panelBorder}`,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      letterSpacing: "-0.01em",
                      color: textPrimary,
                      lineHeight: 1.3,
                      margin: 0,
                    }}
                  >
                    {panel.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key concepts section */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "3rem",
            borderTop: `1px solid ${panelBorder}`,
          }}
        >
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "1.375rem",
              letterSpacing: "-0.015em",
              color: textPrimary,
              marginBottom: "2rem",
            }}
          >
            Key Concepts
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              { title: "Public Key Cryptography", desc: "Alice has a public key (shared with Trustplane) and a private key (kept secret). The private key signs requests; the public key verifies signatures." },
              { title: "Canonical Transcript", desc: "A standardized representation of the API request. Alice signs the transcript with her private key, creating a unique signature." },
              { title: "Control Plane", desc: "The management layer where Alice enrolls her public key, defines authorization policies, and configures her APIs." },
              { title: "Auth Plane", desc: "The verification layer that checks signatures at request time. It's stateless, scalable, and can be deployed close to your API gateways." },
              { title: "JWT Token", desc: "A short-lived token issued by the Auth Plane after successful verification. Bob uses this token to authorize Alice's request." },
              { title: "No Static Secrets", desc: "Unlike API keys, Alice never shares her private key. Each request is signed fresh. There are no long-lived secrets to leak." },
            ].map((concept, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem",
                  background: panelBg,
                  border: `1px solid ${panelBorder}`,
                  borderRadius: "0.625rem",
                  borderLeft: `3px solid ${accentColor}`,
                }}
              >
                <h4
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9375rem",
                    color: accentColor,
                    marginBottom: "0.5rem",
                    margin: 0,
                  }}
                >
                  {concept.title}
                </h4>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    lineHeight: 1.5,
                    color: textSecondary,
                    margin: "0.5rem 0 0 0",
                  }}
                >
                  {concept.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="tp-section-divider" style={{ marginTop: "6rem" }} />

      <style>{`
        @media (max-width: 1200px) {
          .comic-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .comic-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .comic-grid {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
