import React from "react";

export default function BrandLogo({ size = 36, showText = true }) {
  return (
    <div className="brand-logo-container" style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      {/* Bespoke Architectural Brand Mark SVG */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, borderRadius: 4 }}
      >
        <rect width="36" height="36" rx="4" fill="#181B19" />
        
        {/* Subtle coordinate ticks */}
        <line x1="4" y1="4" x2="7" y2="4" stroke="#717E76" strokeWidth="1" strokeLinecap="round" />
        <line x1="4" y1="4" x2="4" y2="7" stroke="#717E76" strokeWidth="1" strokeLinecap="round" />
        <line x1="32" y1="32" x2="29" y2="32" stroke="#717E76" strokeWidth="1" strokeLinecap="round" />
        <line x1="32" y1="32" x2="32" y2="29" stroke="#717E76" strokeWidth="1" strokeLinecap="round" />
        
        {/* Architectural Arch Portal */}
        <path
          d="M9 27V14C9 9.58 13.03 6 18 6C22.97 6 27 9.58 27 14V27"
          stroke="#F4EFE6"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        
        {/* Ground / Base Line */}
        <line x1="6" y1="27" x2="30" y2="27" stroke="#C8664B" strokeWidth="2" strokeLinecap="round" />
        
        {/* Ambient Warm Sun / Lamp Orb */}
        <circle cx="18" cy="14" r="4" fill="#C8664B" />
        
        {/* Vertical Architectural Plumb Line */}
        <line
          x1="18"
          y1="19"
          x2="18"
          y2="24"
          stroke="#FAF8F5"
          strokeWidth="1.2"
          strokeDasharray="1.5 1.5"
        />
      </svg>

      {showText && (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span
              style={{
                fontFamily: "var(--font-editorial)",
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: "0.04em",
                color: "var(--color-ink-900)"
              }}
            >
              RoomRevive
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                padding: "2px 5px",
                background: "var(--color-ink-900)",
                color: "var(--color-ivory-50)",
                borderRadius: 2,
                letterSpacing: "0.08em"
              }}
            >
              STUDIO
            </span>
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "var(--color-ink-500)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginTop: 2
            }}
          >
            Renter-Safe Interior Lab
          </span>
        </div>
      )}
    </div>
  );
}
