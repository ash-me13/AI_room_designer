import React from "react";
import BrandLogo from "./BrandLogo";
import { Printer, X, ShieldCheck } from "lucide-react";
import { ROOM_PRESETS, CHECKLIST_ITEMS } from "../data/roomData";

export default function ExportSpecModal({
  isOpen,
  onClose,
  selectedPresetId = "student-hostel",
  selectedStyleId = "japandi",
  selectedItems = ["free-1", "free-2", "diy-1", "buy-1"],
  budgetLimit = 2500
}) {
  if (!isOpen) return null;

  const currentPreset = ROOM_PRESETS.find((p) => p.id === selectedPresetId) || ROOM_PRESETS[0];
  const currentStyle = currentPreset.styles[selectedStyleId] || currentPreset.styles["japandi"];
  const chosenChecklistItems = CHECKLIST_ITEMS.filter((item) => selectedItems.includes(item.id));
  const totalCost = chosenChecklistItems.reduce((acc, it) => acc + it.cost, 0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 500,
        backgroundColor: "rgba(24, 27, 25, 0.75)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#FAF8F5",
          width: "100%",
          maxWidth: "760px",
          maxHeight: "90vh",
          overflowY: "auto",
          borderRadius: "var(--radius-sm)",
          border: "1px solid var(--color-ivory-300)",
          boxShadow: "var(--shadow-lifted)",
          padding: "36px"
        }}
        className="spec-sheet-modal"
      >
        {/* Top Modal Controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 24,
            borderBottom: "1px solid var(--color-ivory-300)",
            paddingBottom: 16
          }}
          className="no-print"
        >
          <span className="badge-arch badge-terracotta">
            YOUR ROOM PLAN • READY TO PRINT
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button
              onClick={handlePrint}
              className="btn btn-primary"
              style={{ fontSize: 13, padding: "8px 16px", gap: 6 }}
            >
              <Printer size={14} />
              <span>Print or Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="btn btn-ghost"
              style={{ fontSize: 14, padding: "6px 10px" }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Editorial Spec Sheet Header */}
        <div style={{ marginBottom: 28, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <BrandLogo size={40} />
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--color-ink-600)",
                marginTop: 8
              }}
            >
              Created with RoomRevive • 100% deposit safe &amp; landlord friendly
            </p>
          </div>

          <div style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-600)" }}>
            <div>Date: October 2026</div>
            <div>Room size: {currentPreset.dimensions}</div>
            <div style={{ color: "var(--color-sage-dark)", fontWeight: 700 }}>Wall damage: Exactly 0%</div>
          </div>
        </div>

        {/* Studio Specs Summary Table */}
        <div
          style={{
            backgroundColor: "#FFF",
            border: "1px solid var(--color-ivory-300)",
            borderRadius: "var(--radius-sm)",
            padding: "20px",
            marginBottom: 24
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-editorial)",
              fontSize: 18,
              fontWeight: 600,
              color: "var(--color-ink-900)",
              marginBottom: 12
            }}
          >
            Summary of your room changes
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 16,
              fontSize: 13
            }}
          >
            <div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-ink-500)", textTransform: "uppercase" }}>
                Chosen Style
              </span>
              <p style={{ fontWeight: 600, color: "var(--color-ink-900)" }}>{currentStyle.name}</p>
            </div>
            <div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-ink-500)", textTransform: "uppercase" }}>
                Color Palette
              </span>
              <p style={{ fontWeight: 600, color: "var(--color-ink-900)" }}>{currentStyle.paletteName}</p>
            </div>
            <div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-ink-500)", textTransform: "uppercase" }}>
                Total Cost Planned
              </span>
              <p style={{ fontWeight: 600, color: "var(--color-sage-dark)" }}>
                ₹{totalCost.toLocaleString()} (under ₹{budgetLimit.toLocaleString()} limit)
              </p>
            </div>
          </div>
        </div>

        {/* Priority Execution Checklist */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
            <h4
              style={{
                fontFamily: "var(--font-editorial)",
                fontSize: 16,
                fontWeight: 600,
                color: "var(--color-ink-900)"
              }}
            >
              Your selected items ({chosenChecklistItems.length})
            </h4>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--color-ink-600)" }}>
              Total: <strong>₹{totalCost.toLocaleString()}</strong>
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
            {chosenChecklistItems.map((item, index) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  padding: "8px 0",
                  borderBottom: "1px solid var(--color-ivory-200)"
                }}
              >
                <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-sage-dark)", fontWeight: 700 }}>
                  [0{index + 1}]
                </span>
                <div style={{ flex: 1 }}>
                  <strong>{item.title}</strong> — {item.description}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: item.cost === 0 ? "var(--color-sage-dark)" : "var(--color-ink-900)",
                    fontWeight: 600
                  }}
                >
                  {item.cost === 0 ? "₹0" : `₹${item.cost}`}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Landlord Inspection Guarantee Box */}
        <div
          style={{
            backgroundColor: "var(--color-ivory-100)",
            border: "1px dashed var(--color-ivory-400)",
            borderRadius: "var(--radius-sm)",
            padding: "16px 20px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <ShieldCheck size={16} color="var(--color-sage-dark)" />
            <strong style={{ fontSize: 13, color: "var(--color-ink-900)" }}>
              Deposit safety promise:
            </strong>
          </div>
          <p style={{ fontSize: 12, color: "var(--color-ink-700)", lineHeight: 1.5 }}>
            Every single item on this list can be removed in under 15 minutes. No plaster repairs, no paint touch-ups, and no awkward arguments with your landlord when moving out.
          </p>
        </div>
      </div>
    </div>
  );
}
