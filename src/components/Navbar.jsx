import React from "react";
import BrandLogo from "./BrandLogo";
import { Sliders, Palette, BookOpen, FileText } from "lucide-react";

export default function Navbar({ onOpenExport }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "var(--color-ivory-50)",
        borderBottom: "1px solid var(--color-ivory-300)"
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 24px",
          height: "var(--header-height)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <BrandLogo size={34} />

          <div
            className="hide-mobile"
            style={{
              height: 24,
              width: 1,
              backgroundColor: "var(--color-ivory-300)"
            }}
          />

          <span
            className="hide-mobile"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--color-ink-500)",
              letterSpacing: "0.06em",
              textTransform: "uppercase"
            }}
          >
            VOL. 04 / RENTER ARCHIVE
          </span>
        </div>

        {/* Navigation links */}
        <nav style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            onClick={() => scrollTo("studio-section")}
            className="btn btn-ghost"
            style={{ fontSize: 13, padding: "8px 14px", display: "flex", alignItems: "center", gap: 6 }}
          >
            <Sliders size={14} strokeWidth={1.8} />
            <span>Studio</span>
          </button>

          <button
            onClick={() => scrollTo("materials-section")}
            className="btn btn-ghost"
            style={{ fontSize: 13, padding: "8px 14px", display: "flex", alignItems: "center", gap: 6 }}
          >
            <Palette size={14} strokeWidth={1.8} />
            <span>Swatches</span>
          </button>

          <button
            onClick={() => scrollTo("budget-section")}
            className="btn btn-ghost"
            style={{ fontSize: 13, padding: "8px 14px", display: "flex", alignItems: "center", gap: 6 }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>₹</span>
            <span>Budget Plan</span>
          </button>

          <button
            onClick={() => scrollTo("handbook-section")}
            className="btn btn-ghost hide-mobile"
            style={{ fontSize: 13, padding: "8px 14px", display: "flex", alignItems: "center", gap: 6 }}
          >
            <BookOpen size={14} strokeWidth={1.8} />
            <span>Principles</span>
          </button>

          <div
            style={{
              height: 20,
              width: 1,
              backgroundColor: "var(--color-ivory-300)",
              margin: "0 4px"
            }}
          />

          <button
            onClick={onOpenExport}
            className="btn btn-secondary"
            style={{
              fontSize: 12,
              padding: "7px 14px",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.03em"
            }}
          >
            <FileText size={13} />
            <span>Export Spec</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
