/*
 * NAVBAR — Trustplane Marketing
 * Design: Dark Precision Engineering
 * Sticky top nav with blur backdrop, monospaced logo, ghost nav links, theme toggle
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Link } from "wouter";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Why Trustplane", href: "/#why" },
    { label: "Architecture", href: "/architecture" },
    { label: "Provider Boundary", href: "/provider-boundary" },
    { label: "Security", href: "/security" },
    { label: "Audit", href: "/#audit" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? theme === "dark"
            ? "rgba(10, 11, 13, 0.92)"
            : "rgba(250, 250, 250, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
          <a className="flex items-center gap-2.5 group" style={{ textDecoration: "none" }}>
            <div
              className="w-7 h-7 rounded flex items-center justify-center"
              style={{
                background: theme === "dark" ? "rgba(0,212,255,0.12)" : "rgba(0,136,204,0.12)",
                border: theme === "dark" ? "1px solid rgba(0,212,255,0.3)" : "1px solid rgba(0,136,204,0.3)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L13 4.5V9.5L7 13L1 9.5V4.5L7 1Z" stroke={theme === "dark" ? "#00d4ff" : "#0088cc"} strokeWidth="1.2" fill="none"/>
                <path d="M7 4L10 5.75V9.25L7 11L4 9.25V5.75L7 4Z" fill={theme === "dark" ? "rgba(0,212,255,0.2)" : "rgba(0,136,204,0.2)"} stroke={theme === "dark" ? "#00d4ff" : "#0088cc"} strokeWidth="0.8"/>
              </svg>
            </div>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "-0.02em",
                color: theme === "dark" ? "oklch(0.94 0.006 240)" : "oklch(0.15 0.01 240)",
              }}
            >
              Trustplane
            </span>
          </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
              <a
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: theme === "dark" ? "oklch(0.6 0.01 240)" : "oklch(0.45 0.01 240)",
                  padding: "0.375rem 0.75rem",
                  borderRadius: "0.375rem",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = theme === "dark" ? "oklch(0.94 0.006 240)" : "oklch(0.15 0.01 240)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = theme === "dark" ? "oklch(0.6 0.01 240)" : "oklch(0.45 0.01 240)";
                }}
              >
                {link.label}
              </a>
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://docs.auth.trustplane.dev" className="tp-btn-ghost" style={{ padding: "0.5rem 1rem", fontSize: "0.8125rem" }}>
              Read the Docs
            </a>
            <Link href="/contact">
            <a className="tp-btn-primary" style={{ padding: "0.5rem 1rem", fontSize: "0.8125rem" }}>
              Contact Trustplane
            </a>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: theme === "dark" ? "oklch(0.7 0.01 240)" : "oklch(0.45 0.01 240)", background: "none", border: "none" }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden py-4 border-t"
            style={{ borderColor: theme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" }}
          >
            <nav className="flex flex-col gap-1 mb-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                <a
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: theme === "dark" ? "oklch(0.7 0.01 240)" : "oklch(0.45 0.01 240)",
                    padding: "0.625rem 0.75rem",
                    borderRadius: "0.375rem",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2">
              <a href="https://docs.auth.trustplane.dev" className="tp-btn-ghost" style={{ justifyContent: "center" }}>
                Read the Docs
              </a>
              <Link href="/contact">
              <a onClick={() => setMobileOpen(false)} className="tp-btn-primary" style={{ justifyContent: "center" }}>
                Contact Trustplane
              </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
