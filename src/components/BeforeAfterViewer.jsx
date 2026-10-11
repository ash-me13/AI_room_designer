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
            INTERACTIVE COMPARISON
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
            title="Toggle architectural callout pins"
          >
            <Layers size={13} />
            <span className="hide-mobile">Annotations</span> ({annotations.length})
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

            {/* Before Badge Tag */}
            <div
              style={{
                position: "absolute",
                top: 18,
                left: 18,
                background: "rgba(24, 27, 25, 0.85)",
                backdropFilter: "blur(4px)",
                color: "#FAF8F5",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                padding: "5px 10px",
                borderRadius: 3,
                letterSpacing: "0.06em",
                border: "1px solid rgba(255, 255, 255, 0.2)"
              }}
            >
              BEFORE: ORIGINAL ROOM
            </div>
          </div>

          {/* After Badge Tag */}
          <div
            style={{
              position: "absolute",
              top: 18,
              right: 18,
              background: "rgba(200, 102, 75, 0.9)",
              backdropFilter: "blur(4px)",
              color: "#FAF8F5",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              padding: "5px 10px",
              borderRadius: 3,
              letterSpacing: "0.06em",
              border: "1px solid rgba(255, 255, 255, 0.2)"
            }}
          >
            AFTER: REVIVED
          </div>

          {/* Interactive Slider Divider Handle */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${sliderPosition}%`,
              transform: "translateX(-50%)",
              width: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none"
            }}
          >
            {/* Vertical hairline */}
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                width: 2,
                backgroundColor: "#FAF8F5",
                boxShadow: "0 0 10px rgba(0,0,0,0.4)"
              }}
            />

            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                backgroundColor: "var(--color-ivory-50)",
                border: "2px solid var(--color-ink-900)",
                boxShadow: "0 4px 14px rgba(0,0,0,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-ink-900)",
                cursor: "ew-resize",
                zIndex: 10
              }}
            >
              <MoveHorizontal size={18} strokeWidth={2.2} />
            </div>
          </div>

          {/* Interactive Architectural Callout Pins (Rendered on After Area) */}
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
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      backgroundColor: isSelected ? "var(--color-ink-900)" : "var(--color-terracotta)",
                      color: "#FFF",
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: isSelected
                        ? "0 0 0 4px #FAF8F5, 0 4px 12px rgba(0,0,0,0.4)"
                        : "0 0 0 3px rgba(255,255,255,0.85), 0 2px 8px rgba(0,0,0,0.3)",
                      transition: "all 0.2s ease"
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
      {activeAnnotation && (
        <div
          className="animate-fade-in"
          style={{
            padding: "16px 20px",
            backgroundColor: "var(--color-ivory-100)",
            borderTop: "1px solid var(--color-ivory-300)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 16
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                backgroundColor: "var(--color-ink-900)",
                color: "#FFF",
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}
            >
              0{activeAnnotation.id}
            </div>
            <div>
              <h4
                style={{
                  fontFamily: "var(--font-editorial)",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "var(--color-ink-900)",
                  marginBottom: 3
                }}
              >
                {activeAnnotation.title}
              </h4>
              <p style={{ fontSize: 13, color: "var(--color-ink-700)", lineHeight: 1.5 }}>
                {activeAnnotation.detail}
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectAnnotation(null)}
            className="btn btn-ghost"
            style={{ fontSize: 11, padding: "4px 8px", fontFamily: "var(--font-mono)" }}
          >
            Close ✕
          </button>
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
          <span>Drag the center divider left/right to reveal before vs after</span>
        </span>
        <span className="hide-mobile">
          Zero wall holes required • 100% Renter safe
        </span>
      </div>
    </div>
  );
}
