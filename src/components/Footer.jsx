import React from "react";

export default function Footer({ onOpenExport }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--color-ink-900)",
        color: "var(--color-ivory-100)",
        padding: "64px 24px 40px 24px",
        borderTop: "1px solid var(--color-ink-800)"
      }}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: 48,
            marginBottom: 48
          }}
          className="footer-grid"
        >
          {/* Brand & Manifesto Column */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                {/* Dark mode logo mark */}
                <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                  <rect width="36" height="36" rx="4" fill="#252B27" />
                  <path d="M9 27V14C9 9.58 13.03 6 18 6C22.97 6 27 9.58 27 14V27" stroke="#FAF8F5" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="6" y1="27" x2="30" y2="27" stroke="#C8664B" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="18" cy="14" r="4" fill="#C8664B" />
                  <line x1="18" y1="19" x2="18" y2="24" stroke="#FAF8F5" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
                </svg>
                <span style={{ fontFamily: "var(--font-editorial)", fontSize: 20, color: "#FAF8F5", letterSpacing: "0.03em" }}>
                  RoomRevive Studio
                </span>
              </div>
            </div>

            <p
              style={{
                fontFamily: "var(--font-editorial)",
                fontSize: 16,
                fontStyle: "italic",
                color: "var(--color-sand)",
                lineHeight: 1.5,
                maxWidth: 420,
                marginBottom: 16
              }}
            >
              “Good design belongs to everyone, even if your lease is only for 11 months.”
            </p>

            <p style={{ fontSize: 13, color: "var(--color-ink-400)", lineHeight: 1.6, maxWidth: 440 }}>
              A friendly design guide and room visualizer built for students and renters living in small spaces. Simple swaps, zero wall drilling, and no wasted money.
            </p>
          </div>

          {/* Quick Studio Navigation */}
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--color-sand)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 16
              }}
            >
              Explore RoomRevive
            </span>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, fontSize: 13 }}>
              <li>
                <button
                  onClick={() => scrollTo("studio-section")}
                  style={{ background: "none", border: "none", color: "var(--color-ivory-200)", cursor: "pointer", padding: 0, textAlign: "left" }}
                >
                  Room Makeovers &amp; Visualizer
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("materials-section")}
                  style={{ background: "none", border: "none", color: "var(--color-ivory-200)", cursor: "pointer", padding: 0, textAlign: "left" }}
                >
                  Textures &amp; Material Swatches
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("budget-section")}
                  style={{ background: "none", border: "none", color: "var(--color-ivory-200)", cursor: "pointer", padding: 0, textAlign: "left" }}
                >
                  Budget Planner (₹0–₹5,000)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("handbook-section")}
                  style={{ background: "none", border: "none", color: "var(--color-ivory-200)", cursor: "pointer", padding: 0, textAlign: "left" }}
                >
                  The Renter's Playbook
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenExport}
                  style={{ background: "none", border: "none", color: "var(--color-terracotta-light)", cursor: "pointer", padding: 0, textAlign: "left" }}
                >
                  Save Printable Room Plan
                </button>
              </li>
            </ul>
          </div>

          {/* Colophon & Practical Specs */}
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--color-sand)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 16
              }}
            >
              Design Notes
            </span>

            <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 12, color: "var(--color-ink-400)" }}>
              <div>
                <strong style={{ color: "var(--color-ivory-200)", display: "block" }}>Typefaces:</strong>
                Fraunces (Editorial) &amp; Plus Jakarta Sans &amp; Space Mono
              </div>
              <div>
                <strong style={{ color: "var(--color-ivory-200)", display: "block" }}>Color Palette:</strong>
                Warm Ivory, Natural Jute, Terracotta, Muted Sage, Ink Charcoal
              </div>
              <div>
                <strong style={{ color: "var(--color-ivory-200)", display: "block" }}>Deposit Guarantee:</strong>
                100% renter friendly • Zero wall holes
              </div>
            </div>
          </div>
        </div>

        {/* Product Credibility & Authenticity Pledge */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "var(--radius-xs)",
            padding: "16px 20px",
            marginBottom: 32,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16
          }}
        >
          <div style={{ maxWidth: 680 }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-sand)",
                display: "block",
                marginBottom: 4
              }}
            >
              AUTHENTICITY &amp; CREDIBILITY PLEDGE
            </span>
            <p style={{ fontSize: 12, color: "var(--color-ivory-200)", lineHeight: 1.5, margin: 0 }}>
              RoomRevive is an independent design tool built for everyday living. We never fabricate customer reviews, user counts, or awards. Sample rooms are clearly labeled illustrative demo models, and uploaded photos are analyzed directly on your actual space without stock image substitutions. All price estimates reflect verified 2026 market benchmarks.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--color-sage-light)", flexWrap: "wrap" }}>
            <span>✓ 0 FABRICATED METRICS</span>
            <span>•</span>
            <span>✓ 4 FREE ₹0 FIXES</span>
            <span>•</span>
            <span>✓ 100% ZERO DEPOSIT DAMAGE</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid var(--color-ink-800)",
            paddingTop: 24,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 11,
            fontFamily: "var(--font-mono)",
            color: "var(--color-ink-500)",
            gap: 12
          }}
        >
          <div>
            © 2026 RoomRevive. Built for rented spaces and real homes.
          </div>
          <div>
            Designed with care for rented rooms and student budgets.
          </div>
        </div>
      </div>
    </footer>
  );
}
