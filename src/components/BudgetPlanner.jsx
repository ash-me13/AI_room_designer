import React, { useState, useMemo } from "react";
import { CHECKLIST_ITEMS } from "../data/roomData";
import { Check, ShieldCheck, Clock, FileText, AlertCircle, ChevronDown, ChevronUp, Sparkles, Wrench, ShoppingBag } from "lucide-react";

export default function BudgetPlanner({
  onExportBrief,
  budgetLimit: externalBudgetLimit,
  setBudgetLimit: externalSetBudgetLimit,
  selectedItems: externalSelectedItems,
  setSelectedItems: externalSetSelectedItems
}) {
  // Budget ceiling slider: default ₹2,500
  const [internalBudgetLimit, setInternalBudgetLimit] = useState(2500);
  const budgetLimit = externalBudgetLimit !== undefined ? externalBudgetLimit : internalBudgetLimit;
  const setBudgetLimit = externalSetBudgetLimit || setInternalBudgetLimit;

  // Selected items initialized with all free items + first 2 purchases
  const [internalSelectedItems, setInternalSelectedItems] = useState(() => {
    return CHECKLIST_ITEMS.filter(
      (item) => item.category === "free" || item.id === "diy-1" || item.id === "buy-1"
    ).map((item) => item.id);
  });
  const selectedItems = externalSelectedItems !== undefined ? externalSelectedItems : internalSelectedItems;
  const setSelectedItems = externalSetSelectedItems || setInternalSelectedItems;

  const [activeCategory, setActiveCategory] = useState("all"); // 'all' | 'free' | 'diy' | 'buy'
  const [expandedItemId, setExpandedItemId] = useState(null);

  const toggleItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleExpand = (id, e) => {
    e.stopPropagation();
    setExpandedItemId((prev) => (prev === id ? null : id));
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
        {/* Section Header: Friendly Budget Planner */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span className="badge-arch badge-terracotta">
              HONEST BUDGET PLANNER
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-500)" }}>
              • PRICED FOR REAL STUDENT BUDGETS
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
                Here's what you can change without spending more than ₹{budgetLimit.toLocaleString()}
              </h2>
              <p style={{ fontSize: 15, color: "var(--color-ink-600)", marginTop: 6, maxWidth: 640 }}>
                You don't need to do everything at once. In fact, four of the biggest fixes don't cost a single rupee. Set your budget limit below and pick what feels right for you today.
              </p>
            </div>

            {/* Export brief button */}
            {onExportBrief && (
              <button
                onClick={onExportBrief}
                className="btn btn-secondary hide-mobile"
                style={{ fontSize: 13, gap: 6 }}
              >
                <FileText size={14} />
                <span>Save this checklist</span>
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
          {/* Left Column: Ledger Summary Plate */}
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
              YOUR BUDGET LIMIT
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
                LIMIT
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
                <span>₹0 (Free tweaks)</span>
                <span>₹2,500</span>
                <span>₹5,000 (Full room refresh)</span>
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
                <span style={{ color: "var(--color-ink-600)" }}>Things you've picked ({selectedItems.length}):</span>
                <strong style={{ fontFamily: "var(--font-mono)", color: "var(--color-ink-900)" }}>
                  ₹{totalCost.toLocaleString()}
                </strong>
              </div>

              {/* Remaining balance notice with reassuring tone */}
              <div
                style={{
                  padding: "14px 16px",
                  borderRadius: "var(--radius-xs)",
                  backgroundColor: isOverBudget ? "var(--color-terracotta-bg)" : "var(--color-sage-bg)",
                  border: `1px solid ${isOverBudget ? "rgba(200, 102, 75, 0.3)" : "rgba(107, 127, 109, 0.3)"}`
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
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
                    {isOverBudget
                      ? `₹${Math.abs(remaining).toLocaleString()} OVER YOUR PLANNED LIMIT`
                      : remaining === 0
                      ? "SPOT-ON BUDGET (₹0 LEFT OVER)"
                      : `₹${remaining.toLocaleString()} LEFT OVER IN YOUR POCKET`}
                  </strong>
                </div>

                <p style={{ fontSize: 12, color: "var(--color-ink-700)", lineHeight: 1.45 }}>
                  {isOverBudget
                    ? "No worries at all! Just uncheck an item or two to keep your spending comfortable, or bookmark them for next month."
                    : remaining === 0
                    ? "Every single rupee is accounted for. You're getting the best value without spending a paisa more than intended."
                    : "Great job! Keep the extra money for chai, books, weekend plans, or groceries."}
                </p>
              </div>

              {/* Free items reassuring reminder */}
              <div style={{ fontSize: 11, color: "var(--color-ink-500)", fontStyle: "italic", marginTop: 4 }}>
                * 4 of the most impactful upgrades in this list cost exactly ₹0.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Action Checklist */}
          <div>
            {/* Spotlight Banner for Renters on ₹0 Budget */}
            <div
              style={{
                backgroundColor: "var(--color-ivory-50)",
                border: "1px solid var(--color-ivory-300)",
                borderRadius: "var(--radius-sm)",
                padding: "14px 18px",
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                gap: 12
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  backgroundColor: "var(--color-sage-bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}
              >
                <Sparkles size={14} color="var(--color-sage-dark)" />
              </div>
              <p style={{ fontSize: 12, color: "var(--color-ink-700)", lineHeight: 1.4, margin: 0 }}>
                <strong style={{ color: "var(--color-ink-900)" }}>Starting with ₹0?</strong> The 4 free fixes below take under 30 minutes total and make an immediate visual difference before you spend a single rupee.
              </p>
            </div>

            {/* Category filter tabs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                marginBottom: 16
              }}
            >
              <button
                onClick={() => setActiveCategory("all")}
                className={`btn ${activeCategory === "all" ? "btn-primary" : "btn-secondary"}`}
                style={{ fontSize: 12, padding: "6px 14px" }}
              >
                All ideas ({CHECKLIST_ITEMS.length})
              </button>
              <button
                onClick={() => setActiveCategory("free")}
                className={`btn ${activeCategory === "free" ? "btn-primary" : "btn-secondary"}`}
                style={{ fontSize: 12, padding: "6px 14px" }}
              >
                ₹0 Free fixes (4)
              </button>
              <button
                onClick={() => setActiveCategory("diy")}
                className={`btn ${activeCategory === "diy" ? "btn-primary" : "btn-secondary"}`}
                style={{ fontSize: 12, padding: "6px 14px" }}
              >
                Quick DIY projects (4)
              </button>
              <button
                onClick={() => setActiveCategory("buy")}
                className={`btn ${activeCategory === "buy" ? "btn-primary" : "btn-secondary"}`}
                style={{ fontSize: 12, padding: "6px 14px" }}
              >
                Things worth buying (5)
              </button>
            </div>

            {/* Checklist Items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {filteredItems.map((item) => {
                const isChecked = selectedItems.includes(item.id);
                const isExpanded = expandedItemId === item.id;

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
                      transition: "all 0.15s ease"
                    }}
                  >
                    <div
                      style={{
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
                            <span className="badge-arch badge-sage" style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                              <Sparkles size={11} />
                              ₹0 FREE FIX
                            </span>
                          )}
                          {item.category === "diy" && (
                            <span className="badge-arch badge-terracotta" style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                              <Wrench size={11} />
                              DIY PROJECT
                            </span>
                          )}
                          {item.category === "buy" && (
                            <span className="badge-arch" style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                              <ShoppingBag size={11} />
                              WORTH BUYING
                            </span>
                          )}
                        </div>

                        <p style={{ fontSize: 13, color: "var(--color-ink-600)", lineHeight: 1.5, marginBottom: 8 }}>
                          {item.description}
                        </p>

                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14, fontSize: 11, color: "var(--color-ink-500)", fontFamily: "var(--font-mono)" }}>
                          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                            <Clock size={11} />
                            {item.time}
                          </span>
                          <span>•</span>
                          <span>{item.difficulty}</span>
                          <span>•</span>
                          <span style={{ color: "var(--color-sage-dark)" }}>Zero wall damage</span>
                          <span>•</span>
                          <button
                            onClick={(e) => toggleExpand(item.id, e)}
                            style={{
                              background: "none",
                              border: "none",
                              color: "var(--color-terracotta)",
                              fontFamily: "var(--font-mono)",
                              fontSize: 11,
                              fontWeight: 600,
                              cursor: "pointer",
                              padding: 0,
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 3
                            }}
                          >
                            <span>{isExpanded ? "Hide advice" : "Why & how it works"}</span>
                            {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                          </button>
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

                    {/* Expandable Practical Advice Accordion */}
                    {isExpanded && (
                      <div
                        className="animate-fade-in"
                        style={{
                          marginTop: 14,
                          paddingTop: 14,
                          borderTop: "1px dashed var(--color-ivory-300)",
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                          gap: 12
                        }}
                      >
                        {item.whyItHelps && (
                          <div style={{ backgroundColor: "var(--color-ivory-50)", padding: "10px 14px", borderRadius: "var(--radius-xs)" }}>
                            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-terracotta)", fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: 3 }}>
                              💡 Why it helps in rentals
                            </span>
                            <p style={{ fontSize: 12, color: "var(--color-ink-700)", lineHeight: 1.45, margin: 0 }}>
                              {item.whyItHelps}
                            </p>
                          </div>
                        )}
                        {item.howToDoIt && (
                          <div style={{ backgroundColor: "var(--color-ivory-50)", padding: "10px 14px", borderRadius: "var(--radius-xs)" }}>
                            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-sage-dark)", fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: 3 }}>
                              🛠️ Step-by-step how to do it
                            </span>
                            <p style={{ fontSize: 12, color: "var(--color-ink-700)", lineHeight: 1.45, margin: 0 }}>
                              {item.howToDoIt}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
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
