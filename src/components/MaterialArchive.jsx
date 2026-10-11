import React, { useState } from "react";
import { MATERIAL_SWATCHES } from "../data/roomData";

export default function MaterialArchive() {
  const [activeSwatch, setActiveSwatch] = useState(MATERIAL_SWATCHES[0]);

  return (
    <section
      id="materials-section"
      style={{
        padding: "64px 24px",
        backgroundColor: "var(--color-ivory-50)",
        borderBottom: "1px solid var(--color-ivory-300)"
      }}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span className="badge-arch">TACTILE ARCHIVE</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-500)" }}>
              • SENSORY TEXTURES FOR LEASED SPACES
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
            Texture replaces paint when landlords forbid color
          </h2>
          <p style={{ fontSize: 15, color: "var(--color-ink-600)", marginTop: 6, maxWidth: 640 }}>
            In rental flats where repainting walls is penalized with deposit cuts, physical texture provides depth. Explore our studio's four workhorse materials.
          </p>
        </div>

        {/* Swatches Grid & Detail Explorer */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
            alignItems: "center"
          }}
          className="swatches-layout-grid"
        >
          {/* Swatch Selector Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {MATERIAL_SWATCHES.map((swatch) => {
              const isSelected = activeSwatch.id === swatch.id;
              return (
                <div
                  key={swatch.id}
                  onClick={() => setActiveSwatch(swatch)}
                  style={{
                    backgroundColor: "#FFF",
                    borderRadius: "var(--radius-sm)",
                    border: isSelected ? "2px solid var(--color-ink-900)" : "1px solid var(--color-ivory-300)",
                    overflow: "hidden",
                    cursor: "pointer",
                    boxShadow: isSelected ? "var(--shadow-editorial)" : "var(--shadow-subtle)",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                    transform: isSelected ? "translateY(-2px)" : "none"
                  }}
                >
                  {/* Swatch Photo Thumbnail */}
                  <div style={{ height: "140px", overflow: "hidden", position: "relative" }}>
                    <img
                      src={swatch.image}
                      alt={swatch.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease"
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 8,
                        left: 8,
                        background: "rgba(24, 27, 25, 0.75)",
                        color: "#FAF8F5",
                        fontFamily: "var(--font-mono)",
                        fontSize: 9,
                        padding: "2px 6px",
                        borderRadius: 2
                      }}
                    >
                      {swatch.texture}
                    </div>
                  </div>

                  <div style={{ padding: "12px 14px" }}>
                    <h4
                      style={{
                        fontFamily: "var(--font-editorial)",
                        fontSize: 15,
                        fontWeight: 600,
                        color: "var(--color-ink-900)",
                        marginBottom: 2
                      }}
                    >
                      {swatch.name}
                    </h4>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        color: "var(--color-ink-500)",
                        textTransform: "uppercase"
                      }}
                    >
                      {swatch.id.replace("-", " ")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Swatch Spec Sheet Card */}
          <div
            style={{
              backgroundColor: "#FFF",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--color-ivory-300)",
              overflow: "hidden",
              boxShadow: "var(--shadow-subtle)"
            }}
          >
            {/* High-res macro view */}
            <div style={{ position: "relative", height: "260px" }}>
              <img
                src={activeSwatch.image}
                alt={activeSwatch.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  background: "#181B19",
                  color: "#FAF8F5",
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  padding: "4px 8px",
                  borderRadius: 2,
                  border: "1px solid var(--color-ink-600)"
                }}
              >
                MACRO WEAVE SPECIMEN
              </div>
            </div>

            <div style={{ padding: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
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
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    padding: "3px 8px",
                    borderRadius: 3,
                    backgroundColor: "var(--color-ivory-200)",
                    color: "var(--color-ink-700)"
                  }}
                >
                  {activeSwatch.texture}
                </span>
              </div>

              {/* Renter Specific Utility */}
              <div style={{ marginBottom: 16 }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "var(--color-ink-500)",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: 4
                  }}
                >
                  Why It Solves Renter Headaches
                </span>
                <p style={{ fontSize: 13, color: "var(--color-ink-800)", lineHeight: 1.5 }}>
                  {activeSwatch.renterTip}
                </p>
              </div>

              {/* Best Applications */}
              <div style={{ borderTop: "1px dashed var(--color-ivory-300)", paddingTop: 14 }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "var(--color-ink-500)",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: 4
                  }}
                >
                  Recommended Applications
                </span>
                <p style={{ fontSize: 13, color: "var(--color-ink-700)" }}>
                  {activeSwatch.bestFor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
