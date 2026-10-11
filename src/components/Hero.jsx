import React from "react";
import { ArrowDown, Compass, ShieldCheck, Ruler } from "lucide-react";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        position: "relative",
        padding: "64px 24px 72px 24px",
        borderBottom: "1px solid var(--color-ivory-300)",
        backgroundColor: "var(--color-ivory-50)"
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: "48px",
          alignItems: "center"
        }}
        className="hero-grid"
      >
        {/* Left Column: Editorial Headline & Manifesto */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span className="badge-arch badge-terracotta">
              <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "var(--color-terracotta)", display: "inline-block" }} />
              STUDIO FIELD NOTE № 01
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--color-ink-500)",
                letterSpacing: "0.04em"
              }}
            >
              • ZERO HOLES • ZERO DRILLS
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-editorial)",
              fontSize: "clamp(34px, 4.6vw, 56px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--color-ink-900)",
              marginBottom: 24
            }}
          >
            Your room doesn't need a makeover budget.
            <br />
            <span style={{ fontStyle: "italic", color: "var(--color-terracotta)" }}>
              It needs a better plan.
            </span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "17px",
              lineHeight: 1.65,
              color: "var(--color-ink-700)",
              maxWidth: "540px",
              marginBottom: 32
            }}
          >
            RoomRevive AI is an interior design studio engineered specifically for small rental flats, student hostels, and cramped PG bedrooms. We design around lease restrictions, landlord rules, and real student budgets from ₹0 to ₹5,000.
          </p>

          {/* Action CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14, marginBottom: 40 }}>
            <button
              onClick={() => scrollTo("studio-section")}
              className="btn btn-primary"
              style={{ padding: "13px 26px", fontSize: 15 }}
            >
              <span>Let's revive your room</span>
              <ArrowDown size={15} />
            </button>

            <button
              onClick={() => scrollTo("budget-section")}
              className="btn btn-secondary"
              style={{ padding: "13px 22px", fontSize: 14 }}
            >
              <span>Explore ₹0 Free Fixes</span>
            </button>
          </div>

          {/* Studio Guarantee Markers */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: 16,
              paddingTop: 24,
              borderTop: "1px dashed var(--color-ivory-300)"
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                <ShieldCheck size={14} color="var(--color-sage-dark)" />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, color: "var(--color-ink-900)" }}>
                  ZERO WALL DAMAGE
                </span>
              </div>
              <p style={{ fontSize: 12, color: "var(--color-ink-600)", lineHeight: 1.4 }}>
                Tension rods, Command mounts, &amp; clean-peel tape only.
              </p>
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                <Ruler size={14} color="var(--color-terracotta)" />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, color: "var(--color-ink-900)" }}>
                  SMALL FOOTPRINT LAB
                </span>
              </div>
              <p style={{ fontSize: 12, color: "var(--color-ink-600)", lineHeight: 1.4 }}>
                Optimized for tight 80 to 180 sq.ft rooms and single bunks.
              </p>
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                <Compass size={14} color="var(--color-ink-800)" />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, color: "var(--color-ink-900)" }}>
                  HONEST BUDGETS
                </span>
              </div>
              <p style={{ fontSize: 12, color: "var(--color-ink-600)", lineHeight: 1.4 }}>
                Prioritized checklists with transparent local market pricing.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Hero Plate */}
        <div style={{ position: "relative" }}>
          {/* Framed Editorial Visual Card */}
          <div
            style={{
              backgroundColor: "#FFF",
              padding: "16px",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--color-ivory-300)",
              boxShadow: "var(--shadow-editorial)",
              position: "relative"
            }}
          >
            {/* Top architectural stamp */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: 12,
                marginBottom: 12,
                borderBottom: "1px solid var(--color-ivory-200)",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--color-ink-600)"
              }}
            >
              <span>CASE STUDY № 82 • HOSTEL ROOM</span>
              <span className="badge-arch badge-sage">AFTER REVIVAL</span>
            </div>

            {/* Visual Image with architectural overlay */}
            <div style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-sm)" }}>
              <img
                src="/images/student_room_japandi_after_1791721184670.jpg"
                alt="Transformed Japandi Student Hostel Room"
                style={{
                  width: "100%",
                  height: "360px",
                  objectFit: "cover",
                  display: "block"
                }}
              />

              {/* Architectural measurement tags */}
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  left: 14,
                  background: "rgba(24, 27, 25, 0.78)",
                  backdropFilter: "blur(6px)",
                  color: "#FAF8F5",
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  padding: "4px 8px",
                  borderRadius: 3,
                  letterSpacing: "0.05em",
                  border: "1px solid rgba(255,255,255,0.15)"
                }}
              >
                LIGHTING: 2700K DIFFUSE
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: 14,
                  right: 14,
                  background: "rgba(24, 27, 25, 0.78)",
                  backdropFilter: "blur(6px)",
                  color: "#FAF8F5",
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  padding: "4px 8px",
                  borderRadius: 3,
                  letterSpacing: "0.05em",
                  border: "1px solid rgba(255,255,255,0.15)"
                }}
              >
                FLOOR: 100% BRAIDED JUTE
              </div>

              {/* Pin point sample */}
              <div
                style={{
                  position: "absolute",
                  top: "32%",
                  left: "35%",
                  transform: "translate(-50%, -50%)",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  pointerEvents: "none"
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: "var(--color-terracotta)",
                    color: "#fff",
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 0 4px rgba(200, 102, 75, 0.3)"
                  }}
                >
                  01
                </div>
                <div
                  style={{
                    background: "#FAF8F5",
                    color: "var(--color-ink-900)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    padding: "3px 8px",
                    borderRadius: 3,
                    border: "1px solid var(--color-ivory-300)",
                    whiteSpace: "nowrap"
                  }}
                >
                  Paper globe pendant
                </div>
              </div>
            </div>

            {/* Editorial Caption beneath image */}
            <div
              style={{
                marginTop: 14,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 12
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-editorial)",
                    fontSize: 14,
                    fontStyle: "italic",
                    color: "var(--color-ink-800)",
                    marginBottom: 2
                  }}
                >
                  "A ₹1,200 lighting &amp; floor shift completely erased the hospital feel."
                </p>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "var(--color-ink-500)",
                    textTransform: "uppercase"
                  }}
                >
                  Floor area: 9.0 m² • Total spend: ₹1,850
                </span>
              </div>

              {/* Tactile Mini Swatch cluster */}
              <div style={{ display: "flex", alignItems: "center", gap: 5, flexShrink: 0 }}>
                <span
                  title="Belgian Flax Linen"
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 3,
                    border: "1px solid var(--color-ivory-300)",
                    background: "url(/images/swatch_linen_weave_1791721461966.jpg) center/cover"
                  }}
                />
                <span
                  title="Natural Woven Jute"
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 3,
                    border: "1px solid var(--color-ivory-300)",
                    background: "url(/images/swatch_jute_weave_1791721542569.jpg) center/cover"
                  }}
                />
                <span
                  title="Unglazed Terracotta"
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 3,
                    border: "1px solid var(--color-ivory-300)",
                    background: "url(/images/swatch_terracotta_tile_1791721489065.jpg) center/cover"
                  }}
                />
              </div>
            </div>
          </div>

          {/* Underlay shadow plate */}
          <div
            style={{
              position: "absolute",
              top: 14,
              right: -10,
              bottom: -10,
              left: 10,
              border: "1px dashed var(--color-ivory-300)",
              borderRadius: "var(--radius-md)",
              zIndex: -1,
              pointerEvents: "none"
            }}
          />
        </div>
      </div>
    </section>
  );
}
