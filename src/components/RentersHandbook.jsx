import React from "react";
import { RENTER_PRINCIPLES } from "../data/roomData";

export default function RentersHandbook() {
  return (
    <section
      id="handbook-section"
      style={{
        padding: "72px 24px",
        backgroundColor: "var(--color-ivory-100)",
        borderBottom: "1px solid var(--color-ivory-300)"
      }}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        {/* Editorial Broadsheet Layout (Replaces Repeating Card Grid) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "320px 1fr",
            gap: "56px",
            alignItems: "start"
          }}
          className="hero-grid"
        >
          {/* Left Column: Studio Codex Masthead & Index */}
          <div style={{ position: "sticky", top: "90px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span className="badge-arch badge-sage">STUDIO CODEX</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-500)" }}>
                • VOL. 04
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-editorial)",
                fontSize: "clamp(28px, 3vw, 36px)",
                fontWeight: 400,
                color: "var(--color-ink-900)",
                lineHeight: 1.15,
                marginBottom: 16
              }}
            >
              Four spatial canons for temporary living
            </h2>

            <p style={{ fontSize: 14, color: "var(--color-ink-700)", lineHeight: 1.6, marginBottom: 28 }}>
              Field-tested principles compiled from years of living in student hostels and rented flats. Not generic buzzwords — physical, lease-safe architectural habits.
            </p>

            {/* Quick Canon Directory */}
            <div
              style={{
                borderTop: "1px solid var(--color-ivory-300)",
                paddingTop: 18
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--color-ink-500)",
                  display: "block",
                  marginBottom: 12
                }}
              >
                INDEX OF CANONS
              </span>

              <ol style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {RENTER_PRINCIPLES.map((principle) => (
                  <li key={principle.number}>
                    <a
                      href={`#canon-${principle.number}`}
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 10,
                        textDecoration: "none",
                        fontSize: 13,
                        color: "var(--color-ink-800)",
                        transition: "color 0.15s ease"
                      }}
                    >
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-terracotta)", fontWeight: 700 }}>
                        {principle.number}
                      </span>
                      <span style={{ borderBottom: "1px dotted var(--color-ivory-400)" }}>
                        {principle.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right Column: Serial Editorial Essays (No Repeating Cards) */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {RENTER_PRINCIPLES.map((principle, index) => (
              <article
                key={principle.number}
                id={`canon-${principle.number}`}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid var(--color-ivory-300)",
                  borderRadius: "var(--radius-sm)",
                  padding: "32px 36px",
                  boxShadow: "var(--shadow-subtle)"
                }}
              >
                {/* Header Metadata Strip */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: 14,
                    marginBottom: 20,
                    borderBottom: "1px solid var(--color-ivory-200)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--color-ink-500)"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: "var(--color-terracotta)", fontWeight: 700 }}>
                      CANON № {principle.number}
                    </span>
                    <span>•</span>
                    <span style={{ textTransform: "uppercase" }}>
                      LEASE PROTOCOL
                    </span>
                  </div>
                  <span>SECTION 0{index + 1}</span>
                </div>

                {/* Canon Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-editorial)",
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "var(--color-ink-900)",
                    lineHeight: 1.25,
                    marginBottom: 16
                  }}
                >
                  {principle.title}
                </h3>

                {/* Canon Essay Body */}
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--color-ink-700)",
                    lineHeight: 1.7,
                    marginBottom: 24
                  }}
                >
                  {principle.body}
                </p>

                {/* Typographic Pull-Quote Block */}
                <div
                  style={{
                    borderLeft: "3px solid var(--color-terracotta)",
                    backgroundColor: "var(--color-ivory-50)",
                    padding: "14px 18px",
                    borderRadius: "0 var(--radius-xs) var(--radius-xs) 0"
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-editorial)",
                      fontSize: "15px",
                      fontStyle: "italic",
                      color: "var(--color-ink-900)",
                      lineHeight: 1.45
                    }}
                  >
                    “{principle.quote}”
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
