import React from "react";
import BrandLogo from "./BrandLogo";
import { Printer, X, ShieldCheck } from "lucide-react";

export default function ExportSpecModal({ isOpen, onClose }) {
  if (!isOpen) return null;

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
            STUDIO DESIGN BRIEF • ISSUE 04
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button
              onClick={handlePrint}
              className="btn btn-primary"
              style={{ fontSize: 13, padding: "8px 16px", gap: 6 }}
            >
              <Printer size={14} />
              <span>Print / Save PDF</span>
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
              Document Ref: RR-STUDIO-2026-04 • Renter-Safe Certified
            </p>
          </div>

          <div style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-600)" }}>
            <div>Date: October 2026</div>
            <div>Room Scope: 9.0 m² (~96 sq.ft)</div>
            <div style={{ color: "var(--color-sage-dark)", fontWeight: 700 }}>Zero-Damage Index: 100%</div>
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
            Design Direction &amp; Architectural Focus
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
                Selected Palette
              </span>
              <p style={{ fontWeight: 600, color: "var(--color-ink-900)" }}>Warm Minimalist &amp; Japandi</p>
            </div>
            <div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-ink-500)", textTransform: "uppercase" }}>
                Lighting Temperature
              </span>
              <p style={{ fontWeight: 600, color: "var(--color-ink-900)" }}>2700K Warm Ambient (Paper Globe)</p>
            </div>
            <div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-ink-500)", textTransform: "uppercase" }}>
                Core Floor Textile
              </span>
              <p style={{ fontWeight: 600, color: "var(--color-ink-900)" }}>100% Braided Jute Runner (120×180cm)</p>
            </div>
          </div>
        </div>

        {/* Priority Execution Checklist */}
        <div style={{ marginBottom: 24 }}>
          <h4
            style={{
              fontFamily: "var(--font-editorial)",
              fontSize: 16,
              fontWeight: 600,
              color: "var(--color-ink-900)",
              marginBottom: 12
            }}
          >
            Execution Schedule
          </h4>

          <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 0", borderBottom: "1px solid var(--color-ivory-200)" }}>
              <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-sage-dark)", fontWeight: 700 }}>[01]</span>
              <div style={{ flex: 1 }}>
                <strong>Tuck wire snakes into desk binder clips</strong> — 10 min zero-cost clean-up.
              </div>
              <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-sage-dark)" }}>₹0</span>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 0", borderBottom: "1px solid var(--color-ivory-200)" }}>
              <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-sage-dark)", fontWeight: 700 }}>[02]</span>
              <div style={{ flex: 1 }}>
                <strong>Rice paper diffuser pendant over bare bulb</strong> — 2700K ambient warmth.
              </div>
              <span style={{ fontFamily: "var(--font-mono)" }}>₹320</span>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 0", borderBottom: "1px solid var(--color-ivory-200)" }}>
              <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-sage-dark)", fontWeight: 700 }}>[03]</span>
              <div style={{ flex: 1 }}>
                <strong>Command picture hanging strips (4-pack)</strong> — rated up to 7.2kg zero wall peel.
              </div>
              <span style={{ fontFamily: "var(--font-mono)" }}>₹380</span>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 0", borderBottom: "1px solid var(--color-ivory-200)" }}>
              <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-sage-dark)", fontWeight: 700 }}>[04]</span>
              <div style={{ flex: 1 }}>
                <strong>Braided natural jute floor runner (60×120cm)</strong> — cushions cold tile floors.
              </div>
              <span style={{ fontFamily: "var(--font-mono)" }}>₹750</span>
            </div>
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
              Landlord Move-Out Inspection Note:
            </strong>
          </div>
          <p style={{ fontSize: 12, color: "var(--color-ink-700)", lineHeight: 1.5 }}>
            All fixtures specified are non-destructive and removable in under 15 minutes without plaster spackling or paint touch-ups. Full security deposit retention guaranteed.
          </p>
        </div>
      </div>
    </div>
  );
}
