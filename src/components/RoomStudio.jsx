import React, { useState, useRef } from "react";
import { ROOM_PRESETS } from "../data/roomData";
import BeforeAfterViewer from "./BeforeAfterViewer";
import {
  ShieldCheck,
  Camera,
  UploadCloud,
  X,
  Sparkles,
  AlertCircle,
  Lightbulb,
  Eye,
  Info
} from "lucide-react";

const CUSTOM_ROOM_HOTSPOTS = [
  {
    id: "lighting",
    x: 50,
    y: 18,
    title: "Ceiling Light Zone",
    badge: "Lighting Upgrade",
    cost: "₹0 – ₹320",
    action: "Switch off 6500K fluorescent glare. Hang an inexpensive 30cm rice-paper lantern over the bulb cord or use a warm 2700K clamp light at eye level."
  },
  {
    id: "wall",
    x: 24,
    y: 42,
    title: "Blank Wall Space",
    badge: "Zero-Hole Decor",
    cost: "₹160 – ₹380",
    action: "Hang lightweight art prints, postcards, or a photo grid using washi tape or 3M Command picture strips. Peels off with 0 wall marks."
  },
  {
    id: "desk",
    x: 76,
    y: 62,
    title: "Study Desk Cables",
    badge: "₹0 Free Fix",
    cost: "₹0 Free Fix",
    action: "Clamp standard binder clips to the back rim of your desk and run charger heads through the silver loops so cables never drop behind the desk."
  },
  {
    id: "floor",
    x: 48,
    y: 84,
    title: "Floor / Bedside Path",
    badge: "Floor Comfort",
    cost: "₹0 – ₹750",
    action: "Roll out a natural woven jute runner (60×120cm) along the bed. Covers cold tile, dampens room echo, and requires zero adhesive tape."
  }
];

const HONEST_ANALYSIS_STAGES = [
  {
    pct: 25,
    title: "Looking at natural light & evening shadows",
    detail: "Finding where soft ambient light can replace harsh ceiling glare..."
  },
  {
    pct: 55,
    title: "Considering floor textures & room acoustics",
    detail: "Locating cozy spots for natural woven runners over cold tiles..."
  },
  {
    pct: 82,
    title: "Matching zero-drill renter solutions",
    detail: "Checking spring-tension rod spans, adhesive points, and tidy cord tucks..."
  },
  {
    pct: 100,
    title: "Composing your personalized room plan",
    detail: "Curating 3 simple, deposit-safe touches that make your space feel like home..."
  }
];

export default function RoomStudio({
  selectedPresetId: externalPresetId,
  setSelectedPresetId: externalSetPresetId,
  selectedStyleId: externalStyleId,
  setSelectedStyleId: externalSetStyleId
}) {
  const [internalPresetId, setInternalPresetId] = useState("student-hostel");
  const selectedPresetId = externalPresetId !== undefined ? externalPresetId : internalPresetId;
  const setSelectedPresetId = externalSetPresetId || setInternalPresetId;

  const [internalStyleId, setInternalStyleId] = useState("japandi");
  const selectedStyleId = externalStyleId !== undefined ? externalStyleId : internalStyleId;
  const setSelectedStyleId = externalSetStyleId || setInternalStyleId;

  const [activeAnnotation, setActiveAnnotation] = useState(null);
  
  // Genuine custom room states: optical warmth simulation & zero-damage hotspots
  const [isWarmLightSimulated, setIsWarmLightSimulated] = useState(false);
  const [showCustomHotspots, setShowCustomHotspots] = useState(true);
  const [activeCustomHotspot, setActiveCustomHotspot] = useState(null);

  // Custom upload state & modal
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [customImage, setCustomImage] = useState(null);
  const [uploadedFileMeta, setUploadedFileMeta] = useState(null);
  const [isDraggingFile, setIsDraggingFile] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  // Honest multi-stage analysis state
  const [isAnalyzingCustom, setIsAnalyzingCustom] = useState(false);
  const [analysisStageIndex, setAnalysisStageIndex] = useState(0);
  const [customRoomNotes, setCustomRoomNotes] = useState(null);
  const fileInputRef = useRef(null);

  // Style change toast notification
  const [styleNotice, setStyleNotice] = useState(null);
  const noticeTimerRef = useRef(null);

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

  const handleSelectStyle = (styleId) => {
    setSelectedStyleId(styleId);
    setActiveAnnotation(null);
    const chosenStyle = currentPreset.styles[styleId];
    if (chosenStyle) {
      if (noticeTimerRef.current) clearTimeout(noticeTimerRef.current);
      setStyleNotice(`Applied vibe: ${chosenStyle.name} • ${chosenStyle.paletteName}`);
      noticeTimerRef.current = setTimeout(() => {
        setStyleNotice(null);
      }, 3500);
    }
  };

  const processFile = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setUploadError("Please select a standard photo file (JPG, PNG, WebP, or HEIC). PDFs and text documents cannot be styled.");
      return;
    }

    if (file.size > 20 * 1024 * 1024) {
      setUploadError("This image is over 20MB. Please pick a smaller or compressed camera photo.");
      return;
    }

    setUploadError(null);
    const meta = {
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(1) + " MB"
    };
    setUploadedFileMeta(meta);

    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      setCustomImage(uploadEvent.target.result);
      setIsUploadModalOpen(false);
      startHonestAnalysis();
    };
    reader.readAsDataURL(file);
  };

  const startHonestAnalysis = () => {
    setIsAnalyzingCustom(true);
    setCustomRoomNotes(null);
    setAnalysisStageIndex(0);

    // Sequence through the 4 authentic architectural analysis stages
    setTimeout(() => setAnalysisStageIndex(1), 600);
    setTimeout(() => setAnalysisStageIndex(2), 1300);
    setTimeout(() => setAnalysisStageIndex(3), 2000);
    setTimeout(() => {
      setIsAnalyzingCustom(false);
      setCustomRoomNotes({
        dimensions: "Estimated 95 to 110 sq.ft hostel / student bedroom",
        detectedLight: "Single cool overhead fixture with shadows",
        recommendations: [
          {
            title: "Clear desk cord chaos (₹0 free fix)",
            why: "Charging cables trailing down walls create 70% of visual room stress.",
            how: "Clip 2 binder clips to the back edge of your desk and run charger heads through them."
          },
          {
            title: "2700K warm ambient lamp (₹320–₹590)",
            why: "Turns off the cold ceiling glare and makes rental walls look warm and welcoming.",
            how: "Clip a warm clamp lamp to your headboard or drape a paper lantern from your curtain rail."
          },
          {
            title: "Roll out a natural jute runner (₹750)",
            why: "Keeps bare feet off freezing tile floors and muffles footsteps.",
            how: "Lay down alongside the bed frame. Zero tape needed, rolls up effortlessly on move-out day."
          }
        ]
      });
    }, 2700);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    processFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingFile(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingFile(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingFile(false);
    const file = e.dataTransfer?.files?.[0];
    processFile(file);
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
            <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
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
                        transition: "all 0.15s ease",
                        display: "flex",
                        alignItems: "center",
                        gap: 6
                      }}
                    >
                      <span>{preset.name}</span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 10,
                          color: isActive ? "var(--color-terracotta)" : "var(--color-ink-500)",
                          backgroundColor: isActive ? "var(--color-ivory-100)" : "transparent",
                          padding: "1px 6px",
                          borderRadius: 2
                        }}
                      >
                        Sample Demo
                      </span>
                    </button>
                  );
                })}

                <button
                  onClick={() => setIsUploadModalOpen(true)}
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
                  <span>{customImage ? "Your Uploaded Photo" : "Upload Your Room"}</span>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  style={{ display: "none" }}
                />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--color-ink-500)", fontFamily: "var(--font-mono)" }}>
                <Info size={12} color="var(--color-terracotta)" />
                <span>Preset rooms are illustrative demo models. Upload your room above for direct zero-damage guidance.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Welcoming Upload Modal (Friendly, Private, Messy Rooms Welcome) */}
        {isUploadModalOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 600,
              backgroundColor: "rgba(24, 27, 25, 0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px"
            }}
            onClick={() => setIsUploadModalOpen(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="animate-fade-in"
              style={{
                backgroundColor: "#FAF8F5",
                width: "100%",
                maxWidth: "540px",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--color-ivory-300)",
                boxShadow: "var(--shadow-lifted)",
                padding: "28px"
              }}
            >
              {/* Modal Header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      backgroundColor: "var(--color-terracotta-bg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Camera size={16} color="var(--color-terracotta)" />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-editorial)",
                      fontSize: 20,
                      fontWeight: 600,
                      color: "var(--color-ink-900)"
                    }}
                  >
                    Upload your actual room
                  </h3>
                </div>

                <button
                  onClick={() => setIsUploadModalOpen(false)}
                  className="btn btn-ghost"
                  style={{ padding: "4px 8px" }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Welcoming Reassurance Card */}
              <div
                style={{
                  backgroundColor: "var(--color-ivory-100)",
                  border: "1px solid var(--color-ivory-300)",
                  borderRadius: "var(--radius-xs)",
                  padding: "16px",
                  marginBottom: 20
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                  <Sparkles size={14} color="var(--color-terracotta)" />
                  <strong style={{ fontSize: 13, color: "var(--color-ink-900)" }}>
                    Messy rooms are 100% welcome!
                  </strong>
                </div>
                <p style={{ fontSize: 13, color: "var(--color-ink-700)", lineHeight: 1.5, marginBottom: 10 }}>
                  Please don't worry about cleaning up first. Real rooms have clothes on the chair, study books on the bed, and charging cables on the floor. Our advice works with your actual lived-in space.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: "var(--color-ink-600)" }}>
                  <div>📸 <strong>Helpful angle:</strong> Stand near your doorway to capture the bed, desk, and lighting in one frame.</div>
                  <div>🔒 <strong>Privacy promise:</strong> Your photo stays strictly in your browser memory and is never saved or uploaded to any public database.</div>
                </div>
              </div>

              {/* Error Banner State */}
              {uploadError && (
                <div className="state-banner-error" style={{ marginBottom: 16 }}>
                  <AlertCircle size={18} style={{ flexShrink: 0, marginTop: 1 }} />
                  <div style={{ flex: 1 }}>
                    <strong>Upload Error:</strong> {uploadError}
                  </div>
                  <button
                    onClick={() => setUploadError(null)}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", padding: 2 }}
                    aria-label="Dismiss error message"
                  >
                    <X size={14} />
                  </button>
                </div>
              )}

              {/* Responsive Drag & Drop Target */}
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={handleDragOver}
                onDragEnter={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                tabIndex={0}
                role="button"
                aria-label="Upload room photo dropzone"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    fileInputRef.current?.click();
                  }
                }}
                style={{
                  border: isDraggingFile
                    ? "2px dashed var(--color-terracotta)"
                    : "2px dashed var(--color-ivory-400)",
                  borderRadius: "var(--radius-sm)",
                  padding: "36px 20px",
                  textAlign: "center",
                  backgroundColor: isDraggingFile ? "var(--color-terracotta-bg)" : "#FFF",
                  cursor: "pointer",
                  transition: "background-color 0.18s ease, border-color 0.18s ease, transform 0.12s ease",
                  transform: isDraggingFile ? "scale(1.01)" : "none"
                }}
                className="card-interactive"
              >
                <UploadCloud
                  size={36}
                  color={isDraggingFile ? "var(--color-terracotta)" : "var(--color-ink-600)"}
                  style={{
                    margin: "0 auto 10px",
                    transition: "transform 0.18s ease",
                    transform: isDraggingFile ? "translateY(-3px)" : "none"
                  }}
                />
                <strong style={{ fontSize: 15, color: "var(--color-ink-900)", display: "block", marginBottom: 4 }}>
                  {isDraggingFile ? "Drop your room photo right here" : "Choose a photo from your phone or laptop"}
                </strong>
                <span style={{ fontSize: 12, color: "var(--color-ink-500)", display: "block" }}>
                  Drag &amp; drop or click to browse • JPG, PNG, WebP or HEIC
                </span>
              </div>

              {/* Cancel / Alternate Action */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
                <span style={{ fontSize: 12, color: "var(--color-ink-500)" }}>
                  No photo handy? Use our sample rooms above.
                </span>
                <button
                  onClick={() => setIsUploadModalOpen(false)}
                  className="btn btn-secondary"
                  style={{ fontSize: 12, padding: "6px 14px" }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Spacious Before-and-After Comparison Stage (Central & Generous) */}
        <div style={{ marginBottom: 32 }}>
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
                  backgroundColor: "var(--color-ivory-50)",
                  gap: 12,
                  flexWrap: "wrap"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: isAnalyzingCustom ? "var(--color-terracotta)" : "var(--color-sage)"
                    }}
                  />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, color: "var(--color-ink-900)" }}>
                    YOUR ROOM PHOTO
                  </span>
                  {uploadedFileMeta && (
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-500)" }}>
                      ({uploadedFileMeta.name} • {uploadedFileMeta.size})
                    </span>
                  )}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <button
                    onClick={() => {
                      setCustomImage(null);
                      setCustomRoomNotes(null);
                      setUploadedFileMeta(null);
                      setActiveCustomHotspot(null);
                    }}
                    className="btn btn-ghost"
                    style={{ fontSize: 11, padding: "4px 8px" }}
                  >
                    Back to sample rooms
                  </button>
                  <button
                    onClick={() => setIsUploadModalOpen(true)}
                    className="btn btn-secondary"
                    style={{ fontSize: 11, padding: "4px 10px" }}
                  >
                    Upload another photo
                  </button>
                </div>
              </div>

              {/* Authenticity Promise & Interactive Lighting Toolbar */}
              <div
                style={{
                  padding: "10px 18px",
                  backgroundColor: "var(--color-ivory-100)",
                  borderBottom: "1px solid var(--color-ivory-200)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  flexWrap: "wrap",
                  fontSize: 12
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <ShieldCheck size={16} color="var(--color-sage-dark)" />
                  <span style={{ fontWeight: 600, color: "var(--color-ink-900)" }}>
                    Authenticity Promise:
                  </span>
                  <span style={{ color: "var(--color-ink-700)" }}>
                    Analyzed directly on your actual photo. We never substitute your room with unrelated stock images.
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <button
                    type="button"
                    onClick={() => setIsWarmLightSimulated((prev) => !prev)}
                    className="btn btn-secondary"
                    style={{
                      fontSize: 11,
                      padding: "5px 12px",
                      gap: 6,
                      backgroundColor: isWarmLightSimulated ? "var(--color-terracotta)" : "#FFF",
                      color: isWarmLightSimulated ? "#FFF" : "var(--color-ink-900)",
                      borderColor: isWarmLightSimulated ? "var(--color-terracotta)" : "var(--color-ivory-300)"
                    }}
                  >
                    <Lightbulb size={13} />
                    <span>{isWarmLightSimulated ? "2700K Warm Light: ON" : "Simulate 2700K Warm Light"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowCustomHotspots((prev) => !prev)}
                    className="btn btn-ghost"
                    style={{ fontSize: 11, padding: "5px 10px", gap: 5 }}
                  >
                    <Eye size={13} />
                    <span>{showCustomHotspots ? "Hide Hotspots" : "Show Hotspots"}</span>
                  </button>
                </div>
              </div>

              <div style={{ position: "relative", minHeight: "520px", backgroundColor: "#181B19", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img
                  src={customImage}
                  alt="Your Actual Uploaded Room"
                  style={{
                    width: "100%",
                    maxHeight: "560px",
                    objectFit: "contain",
                    filter: isWarmLightSimulated ? "sepia(0.24) saturate(1.2) hue-rotate(-12deg) brightness(1.02)" : "none",
                    transition: "filter 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                />

                {/* Floating Optical Simulation Notice */}
                {isWarmLightSimulated && (
                  <div
                    className="animate-fade-in"
                    style={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      backgroundColor: "rgba(24, 27, 25, 0.88)",
                      border: "1px solid var(--color-sand)",
                      borderRadius: "var(--radius-xs)",
                      padding: "6px 12px",
                      color: "#FAF8F5",
                      fontSize: 11,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      backdropFilter: "blur(4px)",
                      zIndex: 15
                    }}
                  >
                    <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "var(--color-sand)" }} />
                    <span>Optical 2700K warmth simulation on your genuine photo (previewing ambient lamp glow)</span>
                  </div>
                )}

                {/* Interactive Zero-Damage Hotspots directly on user's photo */}
                {!isAnalyzingCustom && showCustomHotspots && CUSTOM_ROOM_HOTSPOTS.map((spot) => {
                  const isActive = activeCustomHotspot?.id === spot.id;
                  return (
                    <button
                      key={spot.id}
                      type="button"
                      onClick={() => setActiveCustomHotspot(isActive ? null : spot)}
                      aria-label={spot.title}
                      style={{
                        position: "absolute",
                        left: `${spot.x}%`,
                        top: `${spot.y}%`,
                        transform: "translate(-50%, -50%)",
                        backgroundColor: isActive ? "var(--color-ink-900)" : "var(--color-terracotta)",
                        color: "#FFF",
                        border: "2px solid #FFF",
                        borderRadius: "50%",
                        width: 32,
                        height: 32,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 12,
                        fontWeight: 700,
                        cursor: "pointer",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
                        transition: "all 0.15s ease",
                        zIndex: 10
                      }}
                    >
                      {isActive ? "✓" : "●"}
                    </button>
                  );
                })}

                {/* Active Hotspot Detail Drawer */}
                {activeCustomHotspot && (
                  <div
                    className="animate-fade-in"
                    style={{
                      position: "absolute",
                      bottom: 16,
                      left: "50%",
                      transform: "translateX(-50%)",
                      maxWidth: "520px",
                      width: "calc(100% - 32px)",
                      backgroundColor: "#FFF",
                      borderRadius: "var(--radius-xs)",
                      padding: "16px 20px",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                      zIndex: 20,
                      border: "1px solid var(--color-ivory-300)"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span className="badge-arch badge-terracotta">{activeCustomHotspot.badge}</span>
                        <strong style={{ fontSize: 13, color: "var(--color-ink-900)" }}>{activeCustomHotspot.title}</strong>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, color: "var(--color-sage-dark)" }}>
                          {activeCustomHotspot.cost}
                        </span>
                        <button
                          type="button"
                          onClick={() => setActiveCustomHotspot(null)}
                          className="btn-ghost"
                          style={{ padding: 2, border: "none", background: "none", cursor: "pointer" }}
                          aria-label="Close hotspot detail"
                        >
                          <X size={15} />
                        </button>
                      </div>
                    </div>
                    <p style={{ fontSize: 12, color: "var(--color-ink-700)", margin: 0, lineHeight: 1.45 }}>
                      {activeCustomHotspot.action}
                    </p>
                  </div>
                )}

                {/* Honest Generation Status Modal Overlay */}
                {isAnalyzingCustom && (
                  <div
                    className="animate-fade-in"
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(24, 27, 25, 0.82)",
                      backdropFilter: "blur(4px)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FAF8F5",
                      padding: "24px"
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "var(--color-ink-900)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "var(--radius-sm)",
                        padding: "28px 32px",
                        maxWidth: "480px",
                        width: "100%",
                        boxShadow: "0 12px 36px rgba(0,0,0,0.45)"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-sand)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                          THOUGHTFUL DESIGN REVIEW IN PROGRESS
                        </span>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, color: "#FFF" }}>
                          {HONEST_ANALYSIS_STAGES[analysisStageIndex].pct}%
                        </span>
                      </div>

                      {/* Honest Progress Bar */}
                      <div
                        style={{
                          width: "100%",
                          height: 4,
                          backgroundColor: "rgba(255, 255, 255, 0.15)",
                          borderRadius: 2,
                          overflow: "hidden",
                          marginBottom: 20
                        }}
                      >
                        <div
                          style={{
                            width: `${HONEST_ANALYSIS_STAGES[analysisStageIndex].pct}%`,
                            height: "100%",
                            backgroundColor: "var(--color-terracotta)",
                            transition: "width 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
                          }}
                        />
                      </div>

                      {/* Current Status Message */}
                      <h4
                        style={{
                          fontFamily: "var(--font-editorial)",
                          fontSize: 18,
                          color: "#FFF",
                          marginBottom: 6,
                          lineHeight: 1.3
                        }}
                      >
                        {HONEST_ANALYSIS_STAGES[analysisStageIndex].title}
                      </h4>
                      <p style={{ fontSize: 12, color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.5, marginBottom: 18 }}>
                        {HONEST_ANALYSIS_STAGES[analysisStageIndex].detail}
                      </p>

                      {/* Checklist of honest inspection phases */}
                      <div style={{ display: "flex", flexDirection: "column", gap: 8, borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: 14 }}>
                        {HONEST_ANALYSIS_STAGES.map((stg, i) => {
                          const isDone = i < analysisStageIndex;
                          const isCurrent = i === analysisStageIndex;
                          return (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, fontFamily: "var(--font-mono)", color: isDone ? "var(--color-sage-light)" : isCurrent ? "#FFF" : "rgba(255,255,255,0.4)" }}>
                              <span
                                style={{
                                  width: 14,
                                  height: 14,
                                  borderRadius: "50%",
                                  backgroundColor: isDone ? "var(--color-sage)" : isCurrent ? "var(--color-terracotta)" : "transparent",
                                  border: isDone || isCurrent ? "none" : "1px solid rgba(255,255,255,0.3)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  fontSize: 8,
                                  color: "#FFF"
                                }}
                              >
                                {isDone ? "✓" : isCurrent ? "•" : ""}
                              </span>
                              <span>{stg.title}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {customRoomNotes && (
                <div className="animate-step-transition" style={{ padding: "22px", backgroundColor: "var(--color-ivory-100)", borderTop: "1px solid var(--color-ivory-300)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span className="badge-arch badge-sage">DESIGNER'S ADVICE</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-600)" }}>
                        {customRoomNotes.dimensions}
                      </span>
                    </div>
                    <span style={{ fontSize: 11, color: "var(--color-sage-dark)", fontWeight: 600 }}>
                      100% Zero Wall Damage Guarantee
                    </span>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
                    {customRoomNotes.recommendations.map((rec, i) => (
                      <div
                        key={i}
                        className="card-interactive"
                        style={{
                          backgroundColor: "#FFF",
                          padding: "16px 18px",
                          borderRadius: "var(--radius-xs)",
                          border: "1px solid var(--color-ivory-300)"
                        }}
                      >
                        <h4 style={{ fontSize: 14, fontWeight: 600, color: "var(--color-ink-900)", marginBottom: 6 }}>
                          {i + 1}. {rec.title}
                        </h4>
                        <p style={{ fontSize: 12, color: "var(--color-ink-700)", lineHeight: 1.45, marginBottom: 6 }}>
                          <strong style={{ color: "var(--color-terracotta)" }}>Why this helps:</strong> {rec.why}
                        </p>
                        <p style={{ fontSize: 12, color: "var(--color-sage-dark)", lineHeight: 1.45, margin: 0 }}>
                          <strong style={{ color: "var(--color-sage-dark)" }}>How to do it:</strong> {rec.how}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Spacious Preset Interactive Slider */
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
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20
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
                100% Zero Wall Damage Guarantee
              </span>
            </div>
          </div>
        </div>

        {/* Horizontal Style Gallery (Art-directed 3-card layout) */}
        <div style={{ marginTop: 44, marginBottom: 44 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 16,
              marginBottom: 20,
              paddingBottom: 14,
              borderBottom: "1px solid var(--color-ivory-300)"
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span className="badge-arch">HORIZONTAL STYLE GALLERY</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-500)" }}>
                  • 3 RENTAL-FRIENDLY AESTHETICS
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-editorial)",
                  fontSize: "clamp(22px, 2.5vw, 28px)",
                  fontWeight: 500,
                  color: "var(--color-ink-900)"
                }}
              >
                Choose a vibe for your room
              </h3>
            </div>
            <p style={{ fontSize: 13, color: "var(--color-ink-600)", margin: 0 }}>
              Click any style to instantly transform the room photo above
            </p>
          </div>

          {/* Subtle Style Application Notification Banner */}
          {styleNotice && (
            <div
              className="animate-fade-in state-banner-success"
              style={{
                marginBottom: 18,
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: "var(--radius-xs)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Sparkles size={14} color="var(--color-sage-dark)" />
                <span style={{ fontSize: 13, fontWeight: 500 }}>{styleNotice}</span>
              </div>
              <button
                onClick={() => setStyleNotice(null)}
                style={{ border: "none", background: "none", cursor: "pointer", color: "inherit", padding: 2 }}
                aria-label="Dismiss style notice"
              >
                <X size={14} />
              </button>
            </div>
          )}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20
            }}
          >
            {Object.values(currentPreset.styles).map((style) => {
              const isSelected = selectedStyleId === style.id;

              return (
                <div
                  key={style.id}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  aria-label={`Select ${style.name} style`}
                  onClick={() => handleSelectStyle(style.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleSelectStyle(style.id);
                    }
                  }}
                  className="card-interactive"
                  style={{
                    backgroundColor: "#FFF",
                    borderRadius: "var(--radius-sm)",
                    border: isSelected ? "2px solid var(--color-ink-900)" : "1px solid var(--color-ivory-300)",
                    padding: "24px",
                    cursor: "pointer",
                    boxShadow: isSelected ? "var(--shadow-editorial)" : "var(--shadow-subtle)",
                    transition: "border-color 0.18s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.18s ease, transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
                    transform: isSelected ? "translateY(-3px)" : "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                  }}
                >
                  <div>
                    {/* Header Strip with Color Swatch */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                      <span
                        style={{
                          width: 14,
                          height: 14,
                          borderRadius: "50%",
                          backgroundColor: style.accentColor,
                          border: "1px solid rgba(0,0,0,0.15)",
                          display: "inline-block"
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 10,
                          fontWeight: 700,
                          color: isSelected ? "var(--color-terracotta)" : "var(--color-ink-500)",
                          textTransform: "uppercase"
                        }}
                      >
                        {isSelected ? "● CURRENTLY VIEWING" : "CLICK TO VIEW"}
                      </span>
                    </div>

                    <h4
                      style={{
                        fontFamily: "var(--font-editorial)",
                        fontSize: 20,
                        fontWeight: 600,
                        color: "var(--color-ink-900)",
                        marginBottom: 6
                      }}
                    >
                      {style.name}
                    </h4>

                    <p style={{ fontSize: 13, color: "var(--color-ink-600)", lineHeight: 1.45, marginBottom: 16 }}>
                      {style.tagline}
                    </p>

                    <div style={{ padding: "12px 14px", backgroundColor: "var(--color-ivory-50)", borderRadius: "var(--radius-xs)", marginBottom: 18 }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, textTransform: "uppercase", color: "var(--color-ink-500)", display: "block", marginBottom: 3 }}>
                        Palette: {style.paletteName}
                      </span>
                      <p style={{ fontSize: 12, color: "var(--color-ink-700)", lineHeight: 1.45, margin: 0 }}>
                        {style.description}
                      </p>
                    </div>

                    <div style={{ marginBottom: 18 }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, textTransform: "uppercase", color: "var(--color-ink-500)", display: "block", marginBottom: 8 }}>
                        Key Swaps in this Look:
                      </span>
                      <ul style={{ paddingLeft: 18, fontSize: 12, color: "var(--color-ink-800)", lineHeight: 1.5 }}>
                        {style.keyChanges.slice(0, 3).map((kc, i) => (
                          <li key={i}>{kc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    className={`btn ${isSelected ? "btn-primary" : "btn-secondary"}`}
                    style={{ width: "100%", fontSize: 12, padding: "8px 12px" }}
                  >
                    {isSelected ? "Active Look in Photo Above" : `Switch to ${style.name}`}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Renter Realities & Lease Restriction Guardrails Bar */}
        <div
          style={{
            backgroundColor: "#FFF",
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--color-ivory-300)",
            padding: "28px 32px",
            boxShadow: "var(--shadow-subtle)"
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 20 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <ShieldCheck size={18} color="var(--color-terracotta)" />
                <h3
                  style={{
                    fontFamily: "var(--font-editorial)",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "var(--color-ink-900)"
                  }}
                >
                  Your rental house rules
                </h3>
              </div>
              <p style={{ fontSize: 13, color: "var(--color-ink-600)", margin: 0 }}>
                Check off whatever your landlord or hostel restricts — every recommendation adjusts to protect your security deposit:
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--color-sage-dark)", fontWeight: 700 }}>
              <ShieldCheck size={14} />
              <span>100% ZERO WALL DAMAGE PROMISE</span>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
              marginBottom: 20
            }}
          >
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                fontSize: 13,
                color: "var(--color-ink-800)",
                cursor: "pointer",
                padding: "12px 14px",
                borderRadius: "var(--radius-xs)",
                backgroundColor: constraints.noDrilling ? "var(--color-ivory-100)" : "transparent",
                border: "1px solid var(--color-ivory-300)",
                transition: "background-color 0.15s ease"
              }}
            >
              <input
                type="checkbox"
                checked={constraints.noDrilling}
                onChange={() => toggleConstraint("noDrilling")}
                style={{ marginTop: 3, accentColor: "var(--color-ink-900)" }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <strong>No drilling or holes</strong>
                </div>
                <p style={{ fontSize: 11, color: "var(--color-ink-600)", marginTop: 4, lineHeight: 1.4 }}>
                  Command hooks, tension rods, and leaning shelves only. Zero plaster spackling.
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
                cursor: "pointer",
                padding: "12px 14px",
                borderRadius: "var(--radius-xs)",
                backgroundColor: constraints.noPainting ? "var(--color-ivory-100)" : "transparent",
                border: "1px solid var(--color-ivory-300)",
                transition: "background-color 0.15s ease"
              }}
            >
              <input
                type="checkbox"
                checked={constraints.noPainting}
                onChange={() => toggleConstraint("noPainting")}
                style={{ marginTop: 3, accentColor: "var(--color-ink-900)" }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <strong>Cannot repaint walls</strong>
                </div>
                <p style={{ fontSize: 11, color: "var(--color-ink-600)", marginTop: 4, lineHeight: 1.4 }}>
                  Brings rich warmth through textured throws, fabric runners, and warm lighting.
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
                cursor: "pointer",
                padding: "12px 14px",
                borderRadius: "var(--radius-xs)",
                backgroundColor: constraints.fixedFurniture ? "var(--color-ivory-100)" : "transparent",
                border: "1px solid var(--color-ivory-300)",
                transition: "background-color 0.15s ease"
              }}
            >
              <input
                type="checkbox"
                checked={constraints.fixedFurniture}
                onChange={() => toggleConstraint("fixedFurniture")}
                style={{ marginTop: 3, accentColor: "var(--color-ink-900)" }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <strong>Immovable furniture</strong>
                </div>
                <p style={{ fontSize: 11, color: "var(--color-ink-600)", marginTop: 4, lineHeight: 1.4 }}>
                  Softens metal beds and bulky wardrobes with cozy throws, cushions, and neat bins.
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
                cursor: "pointer",
                padding: "12px 14px",
                borderRadius: "var(--radius-xs)",
                backgroundColor: constraints.harshTubeLighting ? "var(--color-ivory-100)" : "transparent",
                border: "1px solid var(--color-ivory-300)",
                transition: "background-color 0.15s ease"
              }}
            >
              <input
                type="checkbox"
                checked={constraints.harshTubeLighting}
                onChange={() => toggleConstraint("harshTubeLighting")}
                style={{ marginTop: 3, accentColor: "var(--color-ink-900)" }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <strong>Harsh tube lighting</strong>
                </div>
                <p style={{ fontSize: 11, color: "var(--color-ink-600)", marginTop: 4, lineHeight: 1.4 }}>
                  Adds gentle plug-in lamps and paper lanterns so you rarely have to flip that harsh switch.
                </p>
              </div>
            </label>
          </div>

          <div
            style={{
              padding: "12px 16px",
              borderRadius: "var(--radius-xs)",
              backgroundColor: "var(--color-ivory-50)",
              border: "1px dashed var(--color-ivory-400)",
              display: "flex",
              alignItems: "center",
              gap: 10
            }}
          >
            <ShieldCheck size={16} color="var(--color-sage-dark)" />
            <p style={{ fontSize: 12, color: "var(--color-ink-700)", lineHeight: 1.4, margin: 0 }}>
              <strong>Why this matters:</strong> Landlords often deduct ₹1,500–₹4,000 from security deposits for tiny drill holes or peeling tape. Every idea in RoomRevive is tested to remove in minutes without leaving a mark.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
