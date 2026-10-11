import React, { useState, useMemo } from "react";
import { CHECKLIST_ITEMS } from "../data/roomData";
import { Check, ShieldCheck, Clock, FileText, AlertCircle } from "lucide-react";

export default function BudgetPlanner({ onExportBrief }) {
  // Budget ceiling slider: default ₹2,500
  const [budgetLimit, setBudgetLimit] = useState(2500);
  
  // Selected items initialized with all free items + first 2 purchases
  const [selectedItems, setSelectedItems] = useState(() => {
    return CHECKLIST_ITEMS.filter(
      (item) => item.category === "free" || item.id === "diy-1" || item.id === "buy-1"
    ).map((item) => item.id);
  });

  const [activeCategory, setActiveCategory] = useState("all"); // 'all' | 'free' | 'diy' | 'buy'

  const toggleItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // Calculations
  const totalCost = useMemo(() => {
    return selectedItems.reduce((acc, id) => {
      const item = CHECKLIST_ITEMS.find((it) => it.id === id);
      return acc + (item ? item.cost : 0);
    }, 0);
  }, [selectedItems]);

  const remaining = budgetLimit - totalCost;
  const isOverBudget = remaining < 0;

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return CHECKLIST_ITEMS;
    return CHECKLIST_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="budget-section"
      style={{
        padding: "64px 24px",
        backgroundColor: "var(--color-ivory-100)",
        borderBottom: "1px solid var(--color-ivory-300)"
      }}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        {/* Section Header: Architectural Ledger Format */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span className="badge-arch badge-terracotta">
              COST SCHEDULE // BILL OF QUANTITIES
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-500)" }}>
              • LOCAL MARKET VALUATION
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
                Cost-calibrated plan for ₹{budgetLimit.toLocaleString()} ceiling
              </h2>
              <p style={{ fontSize: 15, color: "var(--color-ink-600)", marginTop: 6, maxWidth: 640 }}>
                Every intervention is indexed by installation effort, lease safety, and local street pricing. Slide your budget cap to configure which interventions to execute first.
              </p>
            </div>

            {/* Export brief button - Functional, Zero AI Gimmicks */}
            {onExportBrief && (
              <button
                onClick={onExportBrief}
                className="btn btn-secondary hide-mobile"
                style={{ fontSize: 13, gap: 6 }}
              >
                <FileText size={14} />
                <span>Export Cost Schedule</span>
              </button>
            )}
          </div>
        </div>

        {/* Budget Planner Arena */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.8fr",
            gap: 32,
            alignItems: "start"
          }}
          className="budget-planner-grid"
        >
          {/* Left Column: Architectural Ledger Summary Plate */}
          <div
            style={{
              backgroundColor: "#FFF",
              padding: "24px",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--color-ivory-300)",
              boxShadow: "var(--shadow-subtle)",
              position: "sticky",
              top: "84px"
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--color-ink-500)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "block",
                marginBottom: 12
              }}
            >
              EXPENDITURE CEILING
            </span>

            {/* Big readable budget number */}
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 16 }}>
              <span
                style={{
                  fontFamily: "var(--font-editorial)",
                  fontSize: 44,
                  fontWeight: 600,
                  color: "var(--color-ink-900)",
                  lineHeight: 1
                }}
              >
                ₹{budgetLimit.toLocaleString()}
              </span>
              <span style={{ fontSize: 13, color: "var(--color-ink-500)", fontFamily: "var(--font-mono)" }}>
                MAX CAP
              </span>
            </div>

            {/* Slider */}
            <div style={{ marginBottom: 24 }}>
              <input
                type="range"
                min="0"
                max="5000"
                step="250"
                value={budgetLimit}
                onChange={(e) => setBudgetLimit(Number(e.target.value))}
                className="studio-slider"
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "var(--color-ink-500)",
                  marginTop: 8
                }}
              >
                <span>₹0 (Pure Hacks)</span>
                <span>₹2,500</span>
                <span>₹5,000 (Complete Revival)</span>
              </div>
            </div>

            {/* Cost Breakdown Tally */}
            <div
              style={{
                borderTop: "1px dashed var(--color-ivory-300)",
                paddingTop: 18,
                display: "flex",
                flexDirection: "column",
                gap: 12
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                <span style={{ color: "var(--color-ink-600)" }}>Selected items ({selectedItems.length}):</span>
                <strong style={{ fontFamily: "var(--font-mono)", color: "var(--color-ink-900)" }}>
                  ₹{totalCost.toLocaleString()}
                </strong>
              </div>

              {/* Remaining balance notice with reassuring tone */}
              <div
                style={{
                  padding: "12px 14px",
                  borderRadius: "var(--radius-xs)",
                  backgroundColor: isOverBudget ? "var(--color-terracotta-bg)" : "var(--color-sage-bg)",
                  border: `1px solid ${isOverBudget ? "rgba(200, 102, 75, 0.3)" : "rgba(107, 127, 109, 0.3)"}`
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  {isOverBudget ? (
                    <AlertCircle size={15} color="var(--color-terracotta)" />
                  ) : (
                    <ShieldCheck size={15} color="var(--color-sage-dark)" />
                  )}
                  <strong
                    style={{
                      fontSize: 12,
                      fontFamily: "var(--font-mono)",
                      color: isOverBudget ? "var(--color-terracotta-dark)" : "var(--color-sage-dark)"
                    }}
                  >
                    {isOverBudget ? "OVER BUDGET BY ₹" + Math.abs(remaining).toLocaleString() : "REMAINING IN POCKET: ₹" + remaining.toLocaleString()}
                  </strong>
                </div>

                <p style={{ fontSize: 11, color: "var(--color-ink-700)", lineHeight: 1.4 }}>
                  {isOverBudget
                    ? "Uncheck one purchase to stay comfortably under your ceiling."
                    : "No guilt. Every single rupee left over stays safe in your savings account."}
                </p>
              </div>

              {/* Free items reassuring reminder */}
              <div style={{ fontSize: 11, color: "var(--color-ink-500)", fontStyle: "italic", marginTop: 4 }}>
                * 4 of the most impactful transformation steps cost exactly ₹0.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Action Checklist */}
          <div>
            {/* Category filter tabs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                marginBottom: 20
              }}
            >
              <button
                onClick={() => setActiveCategory("all")}
                className={`btn ${activeCategory === "all" ? "btn-primary" : "btn-secondary"}`}
                style={{ fontSize: 12, padding: "6px 14px" }}
              >
                All Recommendations ({CHECKLIST_ITEMS.length})
              </button>
              <button
                onClick={() => setActiveCategory("free")}
                className={`btn ${activeCategory === "free" ? "btn-primary" : "btn-secondary"}`}
                style={{ fontSize: 12, padding: "6px 14px" }}
              >
                ₹0 Free Fixes (4)
              </button>
              <button
                onClick={() => setActiveCategory("diy")}
                className={`btn ${activeCategory === "diy" ? "btn-primary" : "btn-secondary"}`}
                style={{ fontSize: 12, padding: "6px 14px" }}
              >
                DIY Low-Cost (4)
              </button>
              <button
                onClick={() => setActiveCategory("buy")}
                className={`btn ${activeCategory === "buy" ? "btn-primary" : "btn-secondary"}`}
                style={{ fontSize: 12, padding: "6px 14px" }}
              >
                Renter Purchases (5)
              </button>
            </div>

            {/* Checklist Items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {filteredItems.map((item) => {
                const isChecked = selectedItems.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    style={{
                      backgroundColor: "#FFF",
                      borderRadius: "var(--radius-sm)",
                      border: isChecked ? "1.5px solid var(--color-ink-900)" : "1px solid var(--color-ivory-300)",
                      padding: "16px 20px",
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                      display: "grid",
                      gridTemplateColumns: "24px 1fr auto",
                      gap: 16,
                      alignItems: "start"
                    }}
                  >
                    {/* Checkbox */}
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 4,
                        border: isChecked ? "2px solid var(--color-ink-900)" : "1.5px solid var(--color-ivory-400)",
                        backgroundColor: isChecked ? "var(--color-ink-900)" : "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FFF",
                        marginTop: 2
                      }}
                    >
                      {isChecked && <Check size={14} strokeWidth={3} />}
                    </div>

                    {/* Content */}
                    <div>
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        <h4
                          style={{
                            fontFamily: "var(--font-ui)",
                            fontSize: 15,
                            fontWeight: 600,
                            color: "var(--color-ink-900)"
                          }}
                        >
                          {item.title}
                        </h4>

                        {item.category === "free" && (
                          <span className="badge-arch badge-sage">
                            ₹0 FREE HACK
                          </span>
                        )}
                        {item.category === "diy" && (
                          <span className="badge-arch badge-terracotta">
                            DIY PROJECT
                          </span>
                        )}
                        {item.category === "buy" && (
                          <span className="badge-arch">
                            RENTER ASSET
                          </span>
                        )}
                      </div>

                      <p style={{ fontSize: 13, color: "var(--color-ink-600)", lineHeight: 1.5, marginBottom: 8 }}>
                        {item.description}
                      </p>

                      <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 11, color: "var(--color-ink-500)", fontFamily: "var(--font-mono)" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                          <Clock size={11} />
                          {item.time}
                        </span>
                        <span>•</span>
                        <span>{item.difficulty}</span>
                        <span>•</span>
                        <span style={{ color: "var(--color-sage-dark)" }}>Zero-damage certified</span>
                      </div>
                    </div>

                    {/* Cost tag */}
                    <div style={{ textAlign: "right", minWidth: 64 }}>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 16,
                          fontWeight: 700,
                          color: item.cost === 0 ? "var(--color-sage-dark)" : "var(--color-ink-900)"
                        }}
                      >
                        {item.cost === 0 ? "₹0" : `₹${item.cost}`}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
