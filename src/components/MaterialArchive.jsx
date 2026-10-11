import React, { useState } from "react";
import { MATERIAL_SWATCHES } from "../data/roomData";
import { ShieldCheck, Sparkles, MoveRight, Layers, Feather } from "lucide-react";

export default function MaterialArchive() {
  const [activeSwatch, setActiveSwatch] = useState(MATERIAL_SWATCHES[0]);

  const activeIndex = MATERIAL_SWATCHES.findIndex((s) => s.id === activeSwatch.id);

  return (
    <section
      id="materials-section"
      style={{
        padding: "80px 24px",
        backgroundColor: "var(--color-ivory-100)",
        borderBottom: "1px solid var(--color-ivory-300)"
      }}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ marginBottom: 44 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <span className="badge-arch badge-terracotta">TACTILE MATERIAL ARCHIVE</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-500)" }}>
              • MACRO STUDY FOR ZERO-PAINT RENTALS
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 20
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-editorial)",
                  fontSize: "clamp(28px, 3.4vw, 42px)",
                  fontWeight: 400,
                  color: "var(--color-ink-900)",
                  lineHeight: 1.2
                }}
              >
                When landlords ban wall paint, let tactile texture do the work
              </h2>
              <p style={{ fontSize: 15, color: "var(--color-ink-600)", marginTop: 8, maxWidth: 680, lineHeight: 1.6 }}>
                You don't need a fresh coat of paint to give a room depth. Touchable surfaces—crinkled washed linen, braided golden jute, and porous terracotta—absorb harsh echoes, diffuse harsh fluorescent light, and bring organic warmth that flat rental walls lack.
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--color-ink-600)",
                  backgroundColor: "#FFF",
                  padding: "6px 12px",
                  borderRadius: "var(--radius-xs)",
                  border: "1px solid var(--color-ivory-300)"
                }}
              >
                TOUCHABLE SWATCHES (04)
              </span>
            </div>
          </div>
        </div>

        {/* Asymmetric Photographic & Text Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: 40,
            alignItems: "start"
          }}
          className="swatches-layout-grid"
        >
          {/* Left Column: Large Photographic Composition */}
          <div
            style={{
              position: "relative",
              backgroundColor: "#FFF",
              border: "1px solid var(--color-ivory-300)",
              borderRadius: "var(--radius-sm)",
              overflow: "hidden",
              boxShadow: "var(--shadow-editorial)"
            }}
          >
            {/* Archival Masthead Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 18px",
                borderBottom: "1px solid var(--color-ivory-300)",
                backgroundColor: "var(--color-ivory-50)",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--color-ink-600)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: activeSwatch.shade, display: "inline-block" }} />
                <span>PLATE NO. 0{activeIndex + 1} — {activeSwatch.name.toUpperCase()}</span>
              </div>
              <span style={{ color: "var(--color-ink-400)" }}>SCALE 1:1 MACRO</span>
            </div>

            {/* High-Resolution Macro Photographic View */}
            <div
              style={{
                position: "relative",
                height: "440px",
                overflow: "hidden",
                backgroundColor: "var(--color-ivory-200)"
              }}
            >
              <img
                src={activeSwatch.image}
                alt={activeSwatch.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease"
                }}
              />

              {/* Architectural Corner Crop Marks */}
              <div style={{ position: "absolute", top: 14, left: 14, width: 14, height: 14, borderTop: "2px solid rgba(255,255,255,0.7)", borderLeft: "2px solid rgba(255,255,255,0.7)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: 14, right: 14, width: 14, height: 14, borderTop: "2px solid rgba(255,255,255,0.7)", borderRight: "2px solid rgba(255,255,255,0.7)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: 14, left: 14, width: 14, height: 14, borderBottom: "2px solid rgba(255,255,255,0.7)", borderLeft: "2px solid rgba(255,255,255,0.7)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: 14, right: 14, width: 14, height: 14, borderBottom: "2px solid rgba(255,255,255,0.7)", borderRight: "2px solid rgba(255,255,255,0.7)", pointerEvents: "none" }} />

              {/* Floating Architectural Badge */}
              <div
                style={{
                  position: "absolute",
                  top: 18,
                  left: 18,
                  backgroundColor: "rgba(24, 27, 25, 0.85)",
                  backdropFilter: "blur(4px)",
                  color: "#FAF8F5",
                  padding: "6px 12px",
                  borderRadius: "var(--radius-xs)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  border: "1px solid rgba(255, 255, 255, 0.15)"
                }}
              >
                <Layers size={13} />
                <span>{activeSwatch.texture.toUpperCase()}</span>
              </div>
            </div>

            {/* Photographic Overlay Plate & Renter Reality Quote */}
            <div
              style={{
                padding: "24px 28px",
                backgroundColor: "#FFF",
                borderTop: "1px solid var(--color-ivory-300)"
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <span
                  style={{
                    fontFamily: "var(--font-editorial)",
                    fontSize: 32,
                    lineHeight: 1,
                    color: "var(--color-terracotta)",
                    userSelect: "none"
                  }}
                >
                  “
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-editorial)",
                      fontSize: 16,
                      fontStyle: "italic",
                      color: "var(--color-ink-900)",
                      lineHeight: 1.5,
                      marginBottom: 10
                    }}
                  >
                    {activeSwatch.renterTip}
                  </p>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      color: "var(--color-ink-500)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em"
                    }}
                  >
                    ROOMREVIVE MATERIAL SPECIFICATION • 100% ZERO-DRILL
                  </span>
                </div>
              </div>

              {/* Quick Specification Strip */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 12,
                  marginTop: 20,
                  paddingTop: 16,
                  borderTop: "1px dashed var(--color-ivory-300)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11
                }}
              >
                <div>
                  <span style={{ color: "var(--color-ink-400)", display: "block", fontSize: 10 }}>SECURITY DEPOSIT</span>
                  <span style={{ color: "var(--color-sage-dark)", fontWeight: 700 }}>0% Risk (Zero Nails)</span>
                </div>
                <div>
                  <span style={{ color: "var(--color-ink-400)", display: "block", fontSize: 10 }}>PORTABILITY</span>
                  <span style={{ color: "var(--color-ink-800)", fontWeight: 600 }}>Folds in 60s</span>
                </div>
                <div>
                  <span style={{ color: "var(--color-ink-400)", display: "block", fontSize: 10 }}>DURABILITY</span>
                  <span style={{ color: "var(--color-ink-800)", fontWeight: 600 }}>Multi-year lease</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Asymmetric Swatch Selector & Practical Guidance */}
          <div>
            {/* Interactive Swatch Horizontal Selector */}
            <div style={{ marginBottom: 24 }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "var(--color-ink-500)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  display: "block",
                  marginBottom: 10
                }}
              >
                SELECT A TACTILE MATERIAL TO EXAMINE
              </span>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {MATERIAL_SWATCHES.map((swatch, idx) => {
                  const isSelected = activeSwatch.id === swatch.id;
                  return (
                    <button
                      key={swatch.id}
                      onClick={() => setActiveSwatch(swatch)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "10px 12px",
                        backgroundColor: isSelected ? "var(--color-ivory-50)" : "#FFF",
                        border: isSelected ? "2px solid var(--color-ink-900)" : "1px solid var(--color-ivory-300)",
                        borderRadius: "var(--radius-xs)",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "all 0.15s ease",
                        boxShadow: isSelected ? "var(--shadow-subtle)" : "none"
                      }}
                    >
                      {/* Swatch Tiny Circle Image */}
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: "50%",
                          overflow: "hidden",
                          flexShrink: 0,
                          border: "1px solid var(--color-ivory-300)"
                        }}
                      >
                        <img
                          src={swatch.image}
                          alt={swatch.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>

                      <div style={{ overflow: "hidden" }}>
                        <div
                          style={{
                            fontFamily: "var(--font-ui)",
                            fontSize: 12,
                            fontWeight: isSelected ? 700 : 500,
                            color: "var(--color-ink-900)",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                          }}
                        >
                          {swatch.name}
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: 10,
                            color: "var(--color-ink-500)"
                          }}
                        >
                          0{idx + 1} • {swatch.texture}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Deep-Dive Material Spec Sheet */}
            <div
              style={{
                backgroundColor: "#FFF",
                border: "1px solid var(--color-ivory-300)",
                borderRadius: "var(--radius-sm)",
                padding: "28px",
                boxShadow: "var(--shadow-subtle)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 3,
                      backgroundColor: activeSwatch.shade,
                      border: "1px solid rgba(0,0,0,0.1)"
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: "var(--font-editorial)",
                      fontSize: 22,
                      fontWeight: 600,
                      color: "var(--color-ink-900)"
                    }}
                  >
                    {activeSwatch.name}
                  </h3>
                </div>

                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    padding: "3px 8px",
                    borderRadius: "var(--radius-xs)",
                    backgroundColor: "var(--color-ivory-100)",
                    color: "var(--color-ink-700)",
                    border: "1px solid var(--color-ivory-300)"
                  }}
                >
                  {activeSwatch.texture}
                </span>
              </div>

              {/* Renter Why & Application */}
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      color: "var(--color-ink-500)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      display: "block",
                      marginBottom: 4
                    }}
                  >
                    WHERE TO PLACE IN YOUR ROOM
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 13,
                      color: "var(--color-ink-800)",
                      backgroundColor: "var(--color-ivory-50)",
                      padding: "10px 14px",
                      borderRadius: "var(--radius-xs)",
                      border: "1px solid var(--color-ivory-200)"
                    }}
                  >
                    <Sparkles size={14} color="var(--color-terracotta)" />
                    <span>{activeSwatch.bestFor}</span>
                  </div>
                </div>

                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      color: "var(--color-ink-500)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      display: "block",
                      marginBottom: 4
                    }}
                  >
                    WHY IT WORKS SO WELL IN RENTALS
                  </span>
                  <p style={{ fontSize: 13, color: "var(--color-ink-700)", lineHeight: 1.55 }}>
                    {activeSwatch.renterTip}
                  </p>
                </div>

                <div
                  style={{
                    backgroundColor: "var(--color-sage-bg)",
                    border: "1px solid rgba(107, 127, 109, 0.25)",
                    borderRadius: "var(--radius-xs)",
                    padding: "12px 14px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10
                  }}
                >
                  <ShieldCheck size={16} color="var(--color-sage-dark)" style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        fontWeight: 700,
                        color: "var(--color-sage-dark)",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: 2
                      }}
                    >
                      MOVING-DAY GUARANTEE
                    </span>
                    <p style={{ fontSize: 12, color: "var(--color-ink-800)", margin: 0, lineHeight: 1.45 }}>
                      When your lease ends, shake it out or fold it into a tote bag. Requires no scraping, leaves no wall patches, and travels effortlessly into your next apartment.
                    </p>
                  </div>
                </div>

                {/* Direct Action Link */}
                <button
                  onClick={() => {
                    const el = document.getElementById("budget-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn btn-secondary"
                  style={{
                    fontSize: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 14px",
                    marginTop: 4
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Feather size={14} />
                    <span>See affordable pieces using this texture</span>
                  </span>
                  <MoveRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
