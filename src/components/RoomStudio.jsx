import React, { useState, useRef } from "react";
import { ROOM_PRESETS } from "../data/roomData";
import BeforeAfterViewer from "./BeforeAfterViewer";
import {
  ShieldCheck,
  Camera
} from "lucide-react";

export default function RoomStudio() {
  const [selectedPresetId, setSelectedPresetId] = useState("student-hostel");
  const [selectedStyleId, setSelectedStyleId] = useState("japandi");
  const [activeAnnotation, setActiveAnnotation] = useState(null);
  
  // Custom upload state
  const [customImage, setCustomImage] = useState(null);
  const [isAnalyzingCustom, setIsAnalyzingCustom] = useState(false);
  const [customRoomNotes, setCustomRoomNotes] = useState(null);
  const fileInputRef = useRef(null);

  // Renter constraints
  const [constraints, setConstraints] = useState({
    noDrilling: true,
    noPainting: true,
    fixedFurniture: true,
    harshTubeLighting: true
  });

  const toggleConstraint = (key) => {
    setConstraints((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const currentPreset = ROOM_PRESETS.find((p) => p.id === selectedPresetId) || ROOM_PRESETS[0];
  const currentStyle = currentPreset.styles[selectedStyleId] || currentPreset.styles["japandi"];

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        setCustomImage(uploadEvent.target.result);
        setIsAnalyzingCustom(true);
        setTimeout(() => {
          setIsAnalyzingCustom(false);
          setCustomRoomNotes({
            dimensions: "Looks like about 100 to 115 sq.ft",
            detectedLight: "Single overhead light casting cold shadows",
            recommendations: [
              "Clear desk visual clutter by gathering chargers, pens, and keys into one neat shallow tray.",
              "Add a small 2700K warm clip-on lamp by your bed or desk so you can turn off the cold ceiling light.",
              "Lay down a simple woven runner between your bed and desk to keep your feet warm on cold floors."
            ]
          });
        }, 800);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section
      id="studio-section"
      style={{
        padding: "64px 24px",
        backgroundColor: "var(--color-ivory-50)",
        borderBottom: "1px solid var(--color-ivory-300)"
      }}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span className="badge-arch">DESIGN STUDIO</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-500)" }}>
              • SIMPLE, REALISTIC MAKEOVERS
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 16
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-editorial)",
                  fontSize: "clamp(26px, 3.2vw, 38px)",
                  fontWeight: 400,
                  color: "var(--color-ink-900)"
                }}
              >
                What kind of room feels like you?
              </h2>
              <p style={{ fontSize: 15, color: "var(--color-ink-600)", marginTop: 6, maxWidth: 640 }}>
                Pick a room that looks like yours, or upload a quick photo of your actual space. Every single idea here is 100% renter-safe — no drilling, no angry landlord, and no lost deposit.
              </p>
            </div>

            {/* Room archetype selector pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                backgroundColor: "var(--color-ivory-200)",
                padding: 4,
                borderRadius: "var(--radius-sm)"
              }}
            >
              {ROOM_PRESETS.map((preset) => {
                const isActive = selectedPresetId === preset.id && !customImage;
                return (
                  <button
                    key={preset.id}
                    onClick={() => {
                      setSelectedPresetId(preset.id);
                      setCustomImage(null);
                    }}
                    style={{
                      border: "none",
                      backgroundColor: isActive ? "#FFF" : "transparent",
                      color: isActive ? "var(--color-ink-900)" : "var(--color-ink-700)",
                      boxShadow: isActive ? "var(--shadow-subtle)" : "none",
                      padding: "8px 16px",
                      borderRadius: "var(--radius-xs)",
                      fontFamily: "var(--font-ui)",
                      fontSize: 13,
                      fontWeight: isActive ? 600 : 400,
                      cursor: "pointer",
                      transition: "all 0.15s ease"
                    }}
                  >
                    {preset.name}
                  </button>
                );
              })}

              <button
                onClick={() => fileInputRef.current?.click()}
                style={{
                  border: "none",
                  backgroundColor: customImage ? "#FFF" : "transparent",
                  color: customImage ? "var(--color-ink-900)" : "var(--color-ink-700)",
                  boxShadow: customImage ? "var(--shadow-subtle)" : "none",
                  padding: "8px 14px",
                  borderRadius: "var(--radius-xs)",
                  fontFamily: "var(--font-ui)",
                  fontSize: 13,
                  fontWeight: customImage ? 600 : 400,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6
                }}
              >
                <Camera size={14} />
                <span>{customImage ? "Uploaded Room" : "Upload Your Room"}</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                style={{ display: "none" }}
              />
            </div>
          </div>
        </div>

        {/* Studio Workspace Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 0.7fr",
            gap: 32,
            alignItems: "start"
          }}
          className="studio-workspace-grid"
        >
          {/* Main Visualizer Canvas */}
          <div>
            {customImage ? (
              /* Custom uploaded room preview & analysis mode */
              <div
                style={{
                  backgroundColor: "#FFF",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--color-ivory-300)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-subtle)"
                }}
              >
                <div
                  style={{
                    padding: "12px 18px",
                    borderBottom: "1px solid var(--color-ivory-200)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "var(--color-ivory-50)"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "var(--color-sage)"
                      }}
                    />
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700 }}>
                      YOUR ROOM PHOTO
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setCustomImage(null);
                      setCustomRoomNotes(null);
                    }}
                    className="btn btn-ghost"
                    style={{ fontSize: 11, padding: "4px 8px" }}
                  >
                    Back to sample rooms
                  </button>
                </div>

                <div style={{ position: "relative", height: "480px", backgroundColor: "#181B19" }}>
                  <img
                    src={customImage}
                    alt="Uploaded Room"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain"
                    }}
                  />

                  {isAnalyzingCustom && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgba(24, 27, 25, 0.75)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FAF8F5"
                      }}
                    >
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          border: "2px solid #FAF8F5",
                          borderTopColor: "transparent",
                          borderRadius: "50%",
                          animation: "spin 1s linear infinite",
                          marginBottom: 12
                        }}
                      />
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>
                        Looking at your room's lighting and layout...
                      </p>
                    </div>
                  )}
                </div>

                {customRoomNotes && (
                  <div style={{ padding: "20px", backgroundColor: "var(--color-ivory-100)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <span className="badge-arch badge-sage">DESIGNER'S TAKE</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-600)" }}>
                        {customRoomNotes.dimensions}
                      </span>
                    </div>
                    <ul style={{ paddingLeft: 18, fontSize: 13, color: "var(--color-ink-800)", lineHeight: 1.6 }}>
                      {customRoomNotes.recommendations.map((rec, i) => (
                        <li key={i}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              /* Preset Interactive Slider */
              <BeforeAfterViewer
                beforeImage={currentPreset.beforeImage}
                afterImage={currentStyle.afterImage}
                roomTitle={currentPreset.name}
                styleName={currentStyle.name}
                annotations={currentStyle.annotations || []}
                activeAnnotation={activeAnnotation}
                onSelectAnnotation={setActiveAnnotation}
              />
            )}

            {/* Room Dimensions & Specs Strip */}
            <div
              style={{
                marginTop: 18,
                padding: "16px 20px",
                backgroundColor: "#FFF",
                border: "1px solid var(--color-ivory-300)",
                borderRadius: "var(--radius-sm)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 16
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    textTransform: "uppercase",
                    color: "var(--color-ink-500)",
                    display: "block",
                    marginBottom: 3
                  }}
                >
                  Room size
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700, color: "var(--color-ink-900)" }}>
                  {currentPreset.dimensions}
                </span>
              </div>

              <div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    textTransform: "uppercase",
                    color: "var(--color-ink-500)",
                    display: "block",
                    marginBottom: 3
                  }}
                >
                  The biggest quick fix
                </span>
                <span style={{ fontSize: 13, color: "var(--color-ink-800)" }}>
                  {currentStyle.keyChanges[0]}
                </span>
              </div>

              <div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    textTransform: "uppercase",
                    color: "var(--color-ink-500)",
                    display: "block",
                    marginBottom: 3
                  }}
                >
                  Deposit safety
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, fontWeight: 600, color: "var(--color-sage-dark)" }}>
                  <ShieldCheck size={15} />
                  100% Zero Wall Damage
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Style Mood Board & Renter Constraints */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Style Selector Card */}
            <div
              style={{
                backgroundColor: "#FFF",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--color-ivory-300)",
                padding: "22px",
                boxShadow: "var(--shadow-subtle)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <span className="badge-arch">CHOOSE A VIBE</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-500)" }}>
                  3 EASY LOOKS
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {Object.values(currentPreset.styles).map((style) => {
                  const isSelected = selectedStyleId === style.id;
                  return (
                    <div
                      key={style.id}
                      onClick={() => {
                        setSelectedStyleId(style.id);
                        setActiveAnnotation(null);
                      }}
                      style={{
                        padding: "14px 16px",
                        borderRadius: "var(--radius-sm)",
                        border: isSelected ? "1.5px solid var(--color-ink-900)" : "1px solid var(--color-ivory-300)",
                        backgroundColor: isSelected ? "var(--color-ivory-100)" : "transparent",
                        cursor: "pointer",
                        transition: "all 0.18s ease"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                        <h4
                          style={{
                            fontFamily: "var(--font-editorial)",
                            fontSize: 16,
                            fontWeight: 600,
                            color: "var(--color-ink-900)"
                          }}
                        >
                          {style.name}
                        </h4>
                        <span
                          style={{
                            width: 14,
                            height: 14,
                            borderRadius: "50%",
                            backgroundColor: style.accentColor,
                            border: "1px solid rgba(0,0,0,0.15)"
                          }}
                        />
                      </div>
                      <p style={{ fontSize: 12, color: "var(--color-ink-600)", lineHeight: 1.4 }}>
                        {style.tagline}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Style Manifesto Snippet */}
              <div
                style={{
                  marginTop: 18,
                  padding: "14px",
                  backgroundColor: "var(--color-ivory-50)",
                  borderRadius: "var(--radius-xs)",
                  border: "1px solid var(--color-ivory-300)"
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    textTransform: "uppercase",
                    color: "var(--color-ink-500)",
                    display: "block",
                    marginBottom: 4
                  }}
                >
                  Why this look works in small spaces
                </span>
                <p style={{ fontSize: 13, color: "var(--color-ink-800)", lineHeight: 1.5 }}>
                  {currentStyle.description}
                </p>
              </div>
            </div>

            {/* Renter Realities & Lease Restriction Guardrails */}
            <div
              style={{
                backgroundColor: "#FFF",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--color-ivory-300)",
                padding: "22px",
                boxShadow: "var(--shadow-subtle)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <ShieldCheck size={16} color="var(--color-terracotta)" />
                <h3
                  style={{
                    fontFamily: "var(--font-editorial)",
                    fontSize: 17,
                    fontWeight: 600,
                    color: "var(--color-ink-900)"
                  }}
                >
                  Your rental house rules
                </h3>
              </div>
              <p style={{ fontSize: 12, color: "var(--color-ink-600)", marginBottom: 14 }}>
                Check off whatever your landlord or hostel restricts, and we'll tailor every recommendation:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    fontSize: 13,
                    color: "var(--color-ink-800)",
                    cursor: "pointer"
                  }}
                >
                  <input
                    type="checkbox"
                    checked={constraints.noDrilling}
                    onChange={() => toggleConstraint("noDrilling")}
                    style={{ marginTop: 3, accentColor: "var(--color-ink-900)" }}
                  />
                  <div>
                    <strong>No drilling or nail holes</strong>
                    <p style={{ fontSize: 11, color: "var(--color-ink-500)" }}>
                      We'll stick to Command hooks, tension rods, and lean-against shelves only.
                    </p>
                  </div>
                </label>

                <label
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    fontSize: 13,
                    color: "var(--color-ink-800)",
                    cursor: "pointer"
                  }}
                >
                  <input
                    type="checkbox"
                    checked={constraints.noPainting}
                    onChange={() => toggleConstraint("noPainting")}
                    style={{ marginTop: 3, accentColor: "var(--color-ink-900)" }}
                  />
                  <div>
                    <strong>Can't repaint plain off-white walls</strong>
                    <p style={{ fontSize: 11, color: "var(--color-ink-500)" }}>
                      We'll bring in warmth with textured blankets, fabric runners, and soft lighting instead.
                    </p>
                  </div>
                </label>

                <label
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    fontSize: 13,
                    color: "var(--color-ink-800)",
                    cursor: "pointer"
                  }}
                >
                  <input
                    type="checkbox"
                    checked={constraints.fixedFurniture}
                    onChange={() => toggleConstraint("fixedFurniture")}
                    style={{ marginTop: 3, accentColor: "var(--color-ink-900)" }}
                  />
                  <div>
                    <strong>Stuck with heavy immovable furniture</strong>
                    <p style={{ fontSize: 11, color: "var(--color-ink-500)" }}>
                      We'll soften metal beds and bulky wardrobes with cozy throws, cushions, and neat bins.
                    </p>
                  </div>
                </label>

                <label
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    fontSize: 13,
                    color: "var(--color-ink-800)",
                    cursor: "pointer"
                  }}
                >
                  <input
                    type="checkbox"
                    checked={constraints.harshTubeLighting}
                    onChange={() => toggleConstraint("harshTubeLighting")}
                    style={{ marginTop: 3, accentColor: "var(--color-ink-900)" }}
                  />
                  <div>
                    <strong>Harsh white fluorescent ceiling light</strong>
                    <p style={{ fontSize: 11, color: "var(--color-ink-500)" }}>
                      We'll add gentle plug-in lamps and paper lanterns so you rarely have to flip that harsh switch.
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
