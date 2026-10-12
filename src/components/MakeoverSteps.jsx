import React, { useState } from "react";
import { Check, Clock, ShieldCheck, Lightbulb, Sparkles, Layers, ArrowRight } from "lucide-react";

export default function MakeoverSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([0]);

  const steps = [
    {
      stepNumber: "01",
      title: "Kill the overhead fluorescent glare",
      duration: "5 mins",
      difficulty: "Instant",
      costTag: "₹0 – ₹320",
      icon: Lightbulb,
      summary: "Overhead 6500K tube lights make rooms feel like hospital clinics. Turn it off and set up low-level warm pools of light.",
      instructions: [
        "Unplug or switch off the main ceiling tube light.",
        "Hang a 30cm rice-paper lantern over the bulb socket or clip a warm 2700K task lamp to your desk/bed.",
        "Point light at eye level or bounce it off a pale wall to create soft ambient warmth."
      ],
      renterRule: "Zero screws. Plug-in cords and paper lanterns leave zero trace on ceilings.",
      proTip: "Warm 2700K light hides scuffed rental walls far better than repainting them."
    },
    {
      stepNumber: "02",
      title: "Soften the cold floor & footsteps",
      duration: "2 mins",
      difficulty: "Instant",
      costTag: "₹0 – ₹750",
      icon: Layers,
      summary: "Hostel tiles and rental linoleum feel icy in the morning and bounce echoey noise around tiny rooms.",
      instructions: [
        "Position a 60×120cm braided jute runner along the walking path between your bed and desk.",
        "Tuck the runner edge slightly under the bed legs so it stays in place without rug tape.",
        "Shake it outside once a week — jute resists dirt and requires zero vacuuming."
      ],
      renterRule: "Zero adhesive tape needed. Rolls up in 10 seconds into a cab when moving out.",
      proTip: "Walking on natural woven fiber immediately makes a temporary room feel like a home."
    },
    {
      stepNumber: "03",
      title: "Layer the bed with tactile textures",
      duration: "10 mins",
      difficulty: "Easy",
      costTag: "₹0 – ₹650",
      icon: Sparkles,
      summary: "The bed takes up 40% of the visual space in a student room. A few intentional layers make the whole room look styled.",
      instructions: [
        "Tuck plain sheets with neat 45° hospital corners at the foot of the mattress.",
        "Drape a textured waffle or washed linen runner across the bottom third of the bed.",
        "Add two washed canvas or corduroy accent pillow covers for back support while studying."
      ],
      renterRule: "Bedsheet tucks and folded throws require zero permanent modifications.",
      proTip: "You don't need to buy expensive sheets — a single textured runner upgrades plain landlord-issued sheets."
    },
    {
      stepNumber: "04",
      title: "Bring personality to eye level (Zero-Drill)",
      duration: "15 mins",
      difficulty: "Fun",
      costTag: "₹110 – ₹380",
      icon: ShieldCheck,
      summary: "Blank walls make rooms feel sterile. Add personal art, books, and plants without putting a single nail hole in plaster.",
      instructions: [
        "Use 3M Command picture strips to hang a lightweight picture ledge or framed postcard grid at 160cm eye level.",
        "Place a small money plant or trailing pothos on top of a bookshelf to drape down naturally.",
        "Set a shallow ceramic saucer on your desk for daily keys, watch, and coins."
      ],
      renterRule: "Command strips pull straight down cleanly. Plaster stays 100% intact.",
      proTip: "Group loose objects onto a single tray. Scattered items look like clutter; items on a plate look intentional."
    }
  ];

  const toggleStepCompleted = (index) => {
    setCompletedSteps((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const current = steps[activeStep];
  const IconComponent = current.icon;
  const isCompleted = completedSteps.includes(activeStep);

  return (
    <section
      id="steps-section"
      style={{
        padding: "72px 24px",
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid var(--color-ivory-300)"
      }}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span className="badge-arch badge-terracotta">STEP-BY-STEP MAKEOVER</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-500)" }}>
              • THE 30-MINUTE MOVE-IN PLAN
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
                The 4-step transformation you can finish this afternoon
              </h2>
              <p style={{ fontSize: 15, color: "var(--color-ink-600)", marginTop: 6, maxWidth: 640 }}>
                Don't try to redesign everything all at once. Follow these four practical steps in order — each one builds on the last, takes under 15 minutes, and leaves zero wall holes.
              </p>
            </div>

            {/* Overall Progress Counter */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                backgroundColor: "var(--color-ivory-100)",
                padding: "8px 16px",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--color-ivory-300)"
              }}
            >
              <div style={{ textAlign: "right" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-ink-500)", textTransform: "uppercase", display: "block" }}>
                  PROGRESS
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 700, color: "var(--color-ink-900)" }}>
                  {completedSteps.length} of 4 done
                </span>
              </div>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  backgroundColor: completedSteps.length === 4 ? "var(--color-sage-bg)" : "var(--color-ivory-200)",
                  color: completedSteps.length === 4 ? "var(--color-sage-dark)" : "var(--color-ink-700)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                {completedSteps.length === 4 ? <Check size={18} /> : `${completedSteps.length}/4`}
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Interactive Form Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "320px 1fr",
            gap: 36,
            alignItems: "start"
          }}
          className="hero-grid"
        >
          {/* Left Column: Vertical Step Navigation Tabs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }} role="tablist" aria-label="Makeover steps">
            {steps.map((st, idx) => {
              const isActive = activeStep === idx;
              const isDone = completedSteps.includes(idx);

              return (
                <div
                  key={st.stepNumber}
                  role="tab"
                  tabIndex={0}
                  aria-selected={isActive}
                  aria-label={`Step ${st.stepNumber}: ${st.title}`}
                  onClick={() => setActiveStep(idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveStep(idx);
                    }
                  }}
                  className="card-interactive"
                  style={{
                    padding: "16px 18px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: isActive ? "var(--color-ivory-100)" : "#FFFFFF",
                    border: isActive ? "1.5px solid var(--color-ink-900)" : "1px solid var(--color-ivory-300)",
                    borderLeft: isActive ? "4px solid var(--color-terracotta)" : "1px solid var(--color-ivory-300)",
                    cursor: "pointer",
                    transition: "all 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14
                  }}
                >
                  {/* Step status circle */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleStepCompleted(idx);
                    }}
                    style={{
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      backgroundColor: isDone ? "var(--color-sage-dark)" : isActive ? "var(--color-ink-900)" : "var(--color-ivory-200)",
                      color: "#FFF",
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 2,
                      transition: "background-color 0.15s ease, transform 0.12s ease"
                    }}
                    aria-label={isDone ? `Mark Step ${st.stepNumber} incomplete` : `Mark Step ${st.stepNumber} completed`}
                    title={isDone ? "Mark incomplete" : "Mark completed"}
                  >
                    {isDone ? <Check size={14} /> : st.stepNumber}
                  </button>

                  <div style={{ flex: 1 }}>
                    <h4
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontSize: 14,
                        fontWeight: isActive ? 600 : 500,
                        color: "var(--color-ink-900)",
                        lineHeight: 1.35,
                        marginBottom: 4
                      }}
                    >
                      {st.title}
                    </h4>

                    <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11, color: "var(--color-ink-500)", fontFamily: "var(--font-mono)" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
                        <Clock size={10} />
                        {st.duration}
                      </span>
                      <span>•</span>
                      <span>{st.costTag}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Step Detail Card & Interactive Actions with Tasteful Step Transition */}
          <div
            key={activeStep}
            className="animate-step-transition"
            style={{
              backgroundColor: "var(--color-ivory-50)",
              border: "1px solid var(--color-ivory-300)",
              borderRadius: "var(--radius-sm)",
              padding: "36px",
              boxShadow: "var(--shadow-subtle)"
            }}
          >
            {/* Step Header */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    backgroundColor: "var(--color-terracotta-bg)",
                    color: "var(--color-terracotta)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <IconComponent size={16} />
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, color: "var(--color-terracotta)" }}>
                  STEP {current.stepNumber} OF 04
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12, fontFamily: "var(--font-mono)" }}>
                <span style={{ backgroundColor: "#FFF", padding: "4px 8px", borderRadius: 3, border: "1px solid var(--color-ivory-300)" }}>
                  ⏱️ {current.duration}
                </span>
                <span style={{ backgroundColor: "#FFF", padding: "4px 8px", borderRadius: 3, border: "1px solid var(--color-ivory-300)" }}>
                  💰 {current.costTag}
                </span>
              </div>
            </div>

            <h3
              style={{
                fontFamily: "var(--font-editorial)",
                fontSize: "clamp(22px, 2.5vw, 28px)",
                fontWeight: 600,
                color: "var(--color-ink-900)",
                lineHeight: 1.25,
                marginBottom: 12
              }}
            >
              {current.title}
            </h3>

            <p style={{ fontSize: 15, color: "var(--color-ink-700)", lineHeight: 1.6, marginBottom: 24 }}>
              {current.summary}
            </p>

            {/* Step-by-Step Practical Instructions */}
            <div
              style={{
                backgroundColor: "#FFF",
                border: "1px solid var(--color-ivory-300)",
                borderRadius: "var(--radius-xs)",
                padding: "20px 24px",
                marginBottom: 24
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--color-ink-500)",
                  display: "block",
                  marginBottom: 14
                }}
              >
                HOW TO CARRY THIS OUT TODAY
              </span>

              <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 12, fontSize: 13, color: "var(--color-ink-800)", lineHeight: 1.55 }}>
                {current.instructions.map((inst, i) => (
                  <li key={i}>{inst}</li>
                ))}
              </ol>
            </div>

            {/* Renter Rule & Pro Tip Callout Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 16,
                marginBottom: 28
              }}
            >
              <div style={{ backgroundColor: "var(--color-sage-bg)", padding: "14px 16px", borderRadius: "var(--radius-xs)", border: "1px solid rgba(107, 127, 109, 0.25)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, color: "var(--color-sage-dark)", textTransform: "uppercase", display: "block", marginBottom: 4 }}>
                  🛡️ DEPOSIT SAFETY CHECK
                </span>
                <p style={{ fontSize: 12, color: "var(--color-ink-800)", lineHeight: 1.45, margin: 0 }}>
                  {current.renterRule}
                </p>
              </div>

              <div style={{ backgroundColor: "var(--color-ivory-100)", padding: "14px 16px", borderRadius: "var(--radius-xs)", border: "1px solid var(--color-ivory-300)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, color: "var(--color-terracotta)", textTransform: "uppercase", display: "block", marginBottom: 4 }}>
                  💡 DESIGNER'S PRO-TIP
                </span>
                <p style={{ fontSize: 12, color: "var(--color-ink-800)", lineHeight: 1.45, margin: 0 }}>
                  {current.proTip}
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12, borderTop: "1px solid var(--color-ivory-300)", paddingTop: 20 }}>
              <button
                onClick={() => toggleStepCompleted(activeStep)}
                className={`btn ${isCompleted ? "btn-primary" : "btn-secondary"}`}
                style={{ fontSize: 13, gap: 6 }}
              >
                <Check size={14} />
                <span>{isCompleted ? "Completed ✓" : "Mark as completed"}</span>
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {activeStep > 0 && (
                  <button
                    onClick={() => setActiveStep((prev) => prev - 1)}
                    className="btn btn-ghost"
                    style={{ fontSize: 13 }}
                  >
                    Previous step
                  </button>
                )}

                {activeStep < steps.length - 1 ? (
                  <button
                    onClick={() => setActiveStep((prev) => prev + 1)}
                    className="btn btn-secondary"
                    style={{ fontSize: 13, gap: 6 }}
                  >
                    <span>Next: Step 0{activeStep + 2}</span>
                    <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      const el = document.getElementById("budget-section");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="btn btn-terracotta"
                    style={{ fontSize: 13, gap: 6 }}
                  >
                    <span>Plan Your Budget Next</span>
                    <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
