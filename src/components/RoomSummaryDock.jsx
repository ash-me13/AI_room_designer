import React from "react";
import { ShieldCheck, Compass, Wallet } from "lucide-react";
import { ROOM_PRESETS, CHECKLIST_ITEMS } from "../data/roomData";

export default function RoomSummaryDock({
  selectedPresetId,
  selectedStyleId,
  budgetLimit,
  selectedItems
}) {
  const currentPreset = ROOM_PRESETS.find((p) => p.id === selectedPresetId) || ROOM_PRESETS[0];
  const currentStyle = currentPreset.styles[selectedStyleId] || currentPreset.styles["japandi"];

  const totalCost = selectedItems.reduce((acc, id) => {
    const item = CHECKLIST_ITEMS.find((it) => it.id === id);
    return acc + (item ? item.cost : 0);
  }, 0);

  const remaining = budgetLimit - totalCost;
  const isOverBudget = remaining < 0;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid var(--color-ivory-300)",
        borderTop: "1px solid var(--color-ivory-200)",
        padding: "12px 24px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16
        }}
      >
        {/* Left Side: Active Room & Style at a glance */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--color-ink-500)",
                backgroundColor: "var(--color-ivory-100)",
                padding: "3px 8px",
                borderRadius: 2
              }}
            >
              ACTIVE PLAN
            </span>
          </div>

          {/* Room Pill */}
          <button
            onClick={() => scrollTo("studio-section")}
            style={{
              background: "none",
              border: "none",
              display: "flex",
              alignItems: "center",
              gap: 6,
              cursor: "pointer",
              padding: 0,
              fontSize: 13,
              color: "var(--color-ink-900)"
            }}
            title="Jump to room visualizer"
          >
            <Compass size={14} color="var(--color-terracotta)" />
            <span>Room: <strong>{currentPreset.name}</strong> <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-ink-500)" }}>(Demo Sample)</span></span>
          </button>

          <span style={{ color: "var(--color-ivory-300)" }} className="hide-mobile">•</span>

          {/* Style Pill */}
          <button
            onClick={() => scrollTo("studio-section")}
            style={{
              background: "none",
              border: "none",
              display: "flex",
              alignItems: "center",
              gap: 6,
              cursor: "pointer",
              padding: 0,
              fontSize: 13,
              color: "var(--color-ink-900)"
            }}
            title="Jump to style picker"
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: currentStyle.accentColor,
                display: "inline-block",
                border: "1px solid rgba(0,0,0,0.15)"
              }}
            />
            <span>Style: <strong>{currentStyle.name}</strong></span>
          </button>
        </div>

        {/* Right Side: Budget and Deposit Safety */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 18 }}>
          {/* Budget Snapshot */}
          <button
            onClick={() => scrollTo("budget-section")}
            style={{
              background: "none",
              border: "none",
              display: "flex",
              alignItems: "center",
              gap: 6,
              cursor: "pointer",
              padding: 0,
              fontSize: 13,
              color: isOverBudget ? "var(--color-terracotta-dark)" : "var(--color-ink-900)"
            }}
            title="Jump to budget planner"
          >
            <Wallet size={14} color={isOverBudget ? "var(--color-terracotta)" : "var(--color-sage-dark)"} />
            <span>
              Budget: <strong>₹{totalCost.toLocaleString()}</strong> of ₹{budgetLimit.toLocaleString()} planned
              {" "}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: isOverBudget ? "var(--color-terracotta)" : "var(--color-sage-dark)",
                  fontWeight: 600,
                  marginLeft: 4
                }}
              >
                ({isOverBudget ? `₹${Math.abs(remaining).toLocaleString()} over` : `₹${remaining.toLocaleString()} left`})
              </span>
            </span>
          </button>

          <span style={{ color: "var(--color-ivory-300)" }} className="hide-mobile">•</span>

          {/* Zero Damage Guarantee */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              fontSize: 12,
              fontFamily: "var(--font-mono)",
              color: "var(--color-sage-dark)",
              fontWeight: 600
            }}
          >
            <ShieldCheck size={14} />
            <span>100% DEPOSIT SAFE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
