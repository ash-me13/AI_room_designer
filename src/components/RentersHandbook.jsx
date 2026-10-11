import React from "react";
import { RENTER_PRINCIPLES } from "../data/roomData";

export default function RentersHandbook() {
  return (
    <section
      id="handbook-section"
      style={{
        padding: "64px 24px",
        backgroundColor: "var(--color-ivory-100)",
        borderBottom: "1px solid var(--color-ivory-300)"
      }}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ marginBottom: 40, textAlign: "left" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span className="badge-arch badge-sage">STUDIO CODEX</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-500)" }}>
              • THE RENTER'S COMPENDIUM
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-editorial)",
              fontSize: "clamp(26px, 3.2vw, 38px)",
              fontWeight: 400,
              color: "var(--color-ink-900)"
            }}
          >
            Four rules we live by in rented spaces
          </h2>
          <p style={{ fontSize: 15, color: "var(--color-ink-600)", marginTop: 6, maxWidth: 640 }}>
            Written by interior designers who spent years renting hostel rooms and studio flats. These aren't AI clichés — they are battle-tested spatial principles.
          </p>
        </div>

        {/* Editorial Principles 2x2 Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24
          }}
        >
          {RENTER_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              style={{
                backgroundColor: "#FFF",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--color-ivory-300)",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "var(--shadow-subtle)",
                position: "relative"
              }}
            >
              <div>
                {/* Large architectural number */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    marginBottom: 16
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 28,
                      fontWeight: 700,
                      color: "var(--color-terracotta)",
                      lineHeight: 1
                    }}
                  >
                    {principle.number}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      color: "var(--color-ink-400)",
                      letterSpacing: "0.08em"
                    }}
                  >
                    CANON
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-editorial)",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "var(--color-ink-900)",
                    marginBottom: 12,
                    lineHeight: 1.25
                  }}
                >
                  {principle.title}
                </h3>

                <p
                  style={{
                    fontSize: 13,
                    color: "var(--color-ink-700)",
                    lineHeight: 1.6,
                    marginBottom: 20
                  }}
                >
                  {principle.body}
                </p>
              </div>

              {/* Editorial Pull Quote */}
              <div
                style={{
                  borderTop: "1px dashed var(--color-ivory-300)",
                  paddingTop: 14,
                  marginTop: 10
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-editorial)",
                    fontSize: 13,
                    fontStyle: "italic",
                    color: "var(--color-ink-800)",
                    lineHeight: 1.4
                  }}
                >
                  “{principle.quote}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
