import React, { useState, useRef, useEffect, useCallback } from "react";
import { MoveHorizontal, Columns, SplitSquareVertical, Layers } from "lucide-react";

export default function BeforeAfterViewer({
  beforeImage,
  afterImage,
  styleName,
  annotations = [],
  activeAnnotation,
  onSelectAnnotation
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState("slider"); // 'slider' | 'sideBySide'
  const [showAnnotations, setShowAnnotations] = useState(true);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };
    const handleTouchMove = (e) => {
      if (isDragging && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    };

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchend", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDragging, handleMove]);

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--color-ivory-300)",
        boxShadow: "var(--shadow-editorial)",
        overflow: "hidden"
      }}
    >
      {/* Studio Header Toolbar */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 18px",
          borderBottom: "1px solid var(--color-ivory-200)",
          backgroundColor: "var(--color-ivory-50)",
          gap: 12
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "var(--color-terracotta)",
              display: "inline-block"
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              fontWeight: 700,
              color: "var(--color-ink-900)",
              letterSpacing: "0.04em"
            }}
          >
            SEE THE DIFFERENCE
          </span>
          <span style={{ color: "var(--color-ivory-300)" }}>|</span>
          <span
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 13,
              color: "var(--color-ink-600)"
            }}
          >
            {styleName}
          </span>
        </div>

        {/* View Mode controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            onClick={() => setShowAnnotations(!showAnnotations)}
            className={`btn ${showAnnotations ? "btn-secondary" : "btn-ghost"}`}
            style={{ fontSize: 12, padding: "5px 10px" }}
            title="Toggle room design tips"
          >
            <Layers size={13} />
            <span className="hide-mobile">Design Tips</span> ({annotations.length})
          </button>

          <div style={{ display: "inline-flex", background: "var(--color-ivory-200)", borderRadius: 4, padding: 2 }}>
            <button
              onClick={() => setViewMode("slider")}
              style={{
                border: "none",
                background: viewMode === "slider" ? "#FFF" : "transparent",
                color: viewMode === "slider" ? "var(--color-ink-900)" : "var(--color-ink-600)",
                padding: "4px 8px",
                borderRadius: 3,
                fontSize: 11,
                fontFamily: "var(--font-mono)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 4
              }}
            >
              <SplitSquareVertical size={12} />
              <span>Slider</span>
            </button>
            <button
              onClick={() => setViewMode("sideBySide")}
              style={{
                border: "none",
                background: viewMode === "sideBySide" ? "#FFF" : "transparent",
                color: viewMode === "sideBySide" ? "var(--color-ink-900)" : "var(--color-ink-600)",
                padding: "4px 8px",
                borderRadius: 3,
                fontSize: 11,
                fontFamily: "var(--font-mono)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 4
              }}
            >
              <Columns size={12} />
              <span>Side-by-Side</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Visual Arena */}
      {viewMode === "slider" ? (
        <div
          ref={containerRef}
          style={{
            position: "relative",
            width: "100%",
            height: "540px",
            userSelect: "none",
            overflow: "hidden",
            cursor: "ew-resize",
            backgroundColor: "var(--color-ink-900)"
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Base Layer: AFTER (Transformed) Image */}
          <img
            src={afterImage}
            alt="RoomRevive Transformed Room"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              pointerEvents: "none"
            }}
          />

          {/* Top Layer: BEFORE (Clipped via clipPath) Image */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
            }}
          >
            <img
              src={beforeImage}
              alt="Original Room Before"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                pointerEvents: "none"
              }}
            />

            {/* Before Friendly Stamp */}
            <div
              style={{
                position: "absolute",
                top: 16,
                left: 16,
                background: "#181B19",
                color: "#FAF8F5",
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                padding: "4px 9px",
                borderRadius: 2,
                letterSpacing: "0.06em",
                border: "1px solid var(--color-ink-600)"
              }}
            >
              BEFORE (PLAIN &amp; COLD)
            </div>
          </div>

          {/* After Friendly Stamp */}
          <div
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              background: "var(--color-terracotta-dark)",
              color: "#FAF8F5",
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              padding: "4px 9px",
              borderRadius: 2,
              letterSpacing: "0.06em",
              border: "1px solid rgba(255, 255, 255, 0.25)"
            }}
          >
            AFTER (WARM &amp; COZY)
          </div>

          {/* Precision Architectural Vernier Slider Divider */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${sliderPosition}%`,
              transform: "translateX(-50%)",
              width: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none"
            }}
          >
            {/* Precision Hairline */}
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                width: 1.5,
                backgroundColor: "#FAF8F5",
                boxShadow: "0 0 4px rgba(0,0,0,0.5)"
              }}
            />

            {/* Architectural Drafting Slider Indicator */}
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 2,
                backgroundColor: "var(--color-ivory-50)",
                border: "1.5px solid var(--color-ink-900)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-ink-900)",
                cursor: "ew-resize",
                zIndex: 10
              }}
            >
              <MoveHorizontal size={14} strokeWidth={2.4} />
            </div>
          </div>

          {/* Precision Coordinate Pins (Clean architectural stamps, zero glowing halo) */}
          {showAnnotations &&
            annotations.map((ann) => {
              const isSelected = activeAnnotation?.id === ann.id;
              if (ann.x < sliderPosition) return null;

              return (
                <div
                  key={ann.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectAnnotation(isSelected ? null : ann);
                  }}
                  style={{
                    position: "absolute",
                    top: `${ann.y}%`,
                    left: `${ann.x}%`,
                    transform: "translate(-50%, -50%)",
                    zIndex: 20,
                    cursor: "pointer"
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 2,
                      backgroundColor: isSelected ? "var(--color-ink-900)" : "var(--color-terracotta)",
                      color: "#FFF",
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1.5px solid #FFFFFF",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                      transition: "transform 0.15s ease"
                    }}
                  >
                    0{ann.id}
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        /* Side-by-Side Mode */
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
            backgroundColor: "var(--color-ivory-300)"
          }}
          className="side-by-side-grid"
        >
          {/* Before Column */}
          <div style={{ position: "relative", height: "460px" }}>
            <img
              src={beforeImage}
              alt="Original Room Before"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                top: 14,
                left: 14,
                background: "rgba(24, 27, 25, 0.85)",
                color: "#FAF8F5",
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                padding: "4px 8px",
                borderRadius: 3
              }}
            >
              BEFORE
            </div>
          </div>

          {/* After Column */}
          <div style={{ position: "relative", height: "460px" }}>
            <img
              src={afterImage}
              alt="Transformed Room"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                top: 14,
                right: 14,
                background: "rgba(200, 102, 75, 0.9)",
                color: "#FAF8F5",
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                padding: "4px 8px",
                borderRadius: 3
              }}
            >
              AFTER: REVIVED
            </div>

            {/* Pins in side-by-side mode */}
            {showAnnotations &&
              annotations.map((ann) => {
                const isSelected = activeAnnotation?.id === ann.id;
                return (
                  <div
                    key={ann.id}
                    onClick={() => onSelectAnnotation(isSelected ? null : ann)}
                    style={{
                      position: "absolute",
                      top: `${ann.y}%`,
                      left: `${ann.x}%`,
                      transform: "translate(-50%, -50%)",
                      zIndex: 20,
                      cursor: "pointer"
                    }}
                  >
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        backgroundColor: isSelected ? "var(--color-ink-900)" : "var(--color-terracotta)",
                        color: "#FFF",
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 0 0 2px #fff"
                      }}
                    >
                      0{ann.id}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* Selected Annotation Detail Drawer */}
      {/* Selected Annotation Detail Drawer (Helpful, concrete designer advice) */}
      {activeAnnotation && (
        <div
          className="animate-fade-in"
          style={{
            padding: "20px 24px",
            backgroundColor: "var(--color-ivory-100)",
            borderTop: "1px solid var(--color-ivory-300)"
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  backgroundColor: "var(--color-ink-900)",
                  color: "#FFF",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}
              >
                0{activeAnnotation.id}
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-editorial)",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "var(--color-ink-900)"
                }}
              >
                {activeAnnotation.title}
              </h4>
              <span className="badge-arch badge-sage" style={{ fontSize: 10 }}>
                100% RENTER SAFE
              </span>
            </div>

            <button
              onClick={() => onSelectAnnotation(null)}
              className="btn btn-ghost"
              style={{ fontSize: 12, padding: "4px 8px", fontFamily: "var(--font-mono)" }}
            >
              Close ✕
            </button>
          </div>

          <p style={{ fontSize: 14, color: "var(--color-ink-800)", lineHeight: 1.5, marginBottom: 14 }}>
            {activeAnnotation.detail}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 14,
              backgroundColor: "#FFF",
              padding: "14px 16px",
              borderRadius: "var(--radius-xs)",
              border: "1px solid var(--color-ivory-300)"
            }}
          >
            {activeAnnotation.whyItHelps && (
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--color-terracotta)",
                    fontWeight: 700,
                    display: "block",
                    marginBottom: 4
                  }}
                >
                  💡 WHY THIS WORKS IN SMALL ROOMS
                </span>
                <p style={{ fontSize: 12, color: "var(--color-ink-700)", lineHeight: 1.5 }}>
                  {activeAnnotation.whyItHelps}
                </p>
              </div>
            )}

            {activeAnnotation.howToDoIt && (
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--color-sage-dark)",
                    fontWeight: 700,
                    display: "block",
                    marginBottom: 4
                  }}
                >
                  🛠️ HOW TO DO IT YOURSELF
                </span>
                <p style={{ fontSize: 12, color: "var(--color-ink-700)", lineHeight: 1.5 }}>
                  {activeAnnotation.howToDoIt}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer bar with interaction hint */}
      <div
        style={{
          padding: "10px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--color-ink-500)",
          borderTop: "1px solid var(--color-ivory-200)",
          backgroundColor: "#FFF"
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <MoveHorizontal size={13} />
          <span>Drag the divider left or right to see before vs after</span>
        </span>
        <span className="hide-mobile">
          Zero wall damage • 100% deposit safe
        </span>
      </div>
    </div>
  );
}
