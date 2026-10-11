# RoomRevive 🪴

> **Friendly Interior Design for Rented Rooms, Hostels & PGs**  
> *"Your room doesn't need a makeover budget. It needs a better plan."*

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Linter](https://img.shields.io/badge/Linter-Oxlint-FF6B6B)](https://oxc.rs/)
[![Deposit Safe](https://img.shields.io/badge/Deposit--Safe-100%25%20Zero--Damage-2E7D32)](#renters-handbook)

---

## 📖 Overview

**RoomRevive** is a human-crafted web application and interactive design studio tailored specifically for tenants, students, and PG dwellers. Standard interior design advice often assumes large budgets, open floor plans, and freedom to drill, paint, or demolish walls. In reality, millions of renters deal with:

- Cold linoleum or ceramic tiles that echo
- Blinding 6500K fluorescent tube lights that cause headaches
- Landlords who withhold security deposits for a single nail hole
- Leases that last 11 months, requiring everything to pack into a single cab ride

RoomRevive replaces generic AI home-makeover tropes with realistic, deposit-safe, tactile transformations. It combines interactive Before & After visualizers, zero-damage architectural annotations, a categorized budget calculator with free hacks, a tactile material archive, and an exportable makeover specification sheet.

---

## ✨ Features Implemented

### 1. 🛋️ Interactive Room Design Studio (`RoomStudio.jsx` & `BeforeAfterViewer.jsx`)
- **Room Presets**:
  - **Student Hostel & PG Room**: Single bed, cold tile floor, scuffed study desk, and harsh overhead tube glare.
  - **Rental Studio / 1BHK**: Compact multi-functional living and sleeping quarters.
- **Curated Aesthetic Directions**:
  - **Warm Minimalist & Japandi**: Birch, rice paper globe fixtures, warm flax linen layers, and natural jute runners.
  - **Earthy Terracotta & Clay**: Sunbaked clay planters, burnt umber textiles, and intimate 2200K amber lighting.
  - **Muted Sage & Botanical**: Eucalyptus greens, airy linen sheers on tension rods, and cascading pothos plants.
- **Comparison Modes**:
  - **Split Slider**: Drag handle with fine control and responsive touch support.
  - **Fade Toggle**: Smooth opacity transition between raw rental state and revitalized room.
  - **Side-by-Side**: Direct comparative review.
- **Interactive Zero-Damage Hotspots**: Clickable annotations directly on the room canvas revealing:
  - **The Problem / Context**: Why the original element fails (e.g., tube light glare, floor echo).
  - **Why It Helps**: Architectural and wellness rationale for the change.
  - **How To Do It**: Concrete step-by-step installation instructions using Command strips, tension rods, or binder clip cable tucking without tools.

### 2. 📊 Live Room & Budget Summary Dock (`RoomSummaryDock.jsx`)
- Persistent, at-a-glance status strip showing:
  - Active room preset selection and estimated dimensions.
  - Selected aesthetic styling and accent color chip.
  - Real-time tally of selected makeover steps.
  - Live budget gauge highlighting current expenditure against the user's spending ceiling.

### 3. 🪜 4-Step Rental Makeover Action Plan (`MakeoverSteps.jsx`)
A grounded, zero-damage roadmap organized into four actionable stages:
1. **Assess & De-Glare**: Banish 6500K ceiling glare; establish pools of warm 2700K lamplight at eye level.
2. **Tactile Layering**: Overcome cold floors and plain landlord walls using waffle-weave throws, jute runners, and textured canvas.
3. **Zero-Damage Verticality**: Draw the eye upward with spring-tension rods, adhesive picture ledges, and trailing plants.
4. **The 11-Month Mobility Rule**: Select packable, lightweight pieces that fold or roll up in under 30 minutes on moving day.

### 4. 🧵 Tactile Material Archive (`MaterialArchive.jsx`)
A photographic reference library celebrating honest, rental-friendly materials:
- **Flax Linen**: Breathable crinkled weave with natural drape and zero-iron appeal.
- **Unglazed Terracotta**: Earthy, humidity-balancing clay planters that patina gracefully.
- **Woven Natural Jute**: Heavy organic floor texture that dampens footsteps and softens acoustics on tile.
- **Muted Sage Canvas**: Washable, high-density cotton duck that revamps worn hostel chairs.
- Each material profile details its **acoustic value**, **deposit safety rating (10/10)**, light response, and care guidelines.

### 5. 💰 Actionable Budget Planner & Checklist (`BudgetPlanner.jsx`)
- **Three Realistic Spending Tiers**:
  - **Free (₹0)**: Rearranging furniture away from drafty windows, rolling up cords with binder clips, swapping harsh bulbs into secondary lamps, hanging existing shawls.
  - **DIY (< ₹300)**: Repurposed glass bottles with pothos cuttings, Command-strip card displays, DIY paper lantern diffusers.
  - **Buy (< ₹1,000)**: Inexpensive 2700K rice paper globe lamps, woven jute runners, spring-tension curtain rods, unglazed clay planters.
- **Dynamic Spending Controls**:
  - Interactive budget limit slider (₹500 to ₹10,000) with real-time status alerts (*Comfortable*, *Close to Budget*, or *Over Budget*).
  - Interactive selection toggles with instant live balance calculation.
  - Integrated `canvas-confetti` celebration whenever a checklist milestone is completed.

### 6. 📜 The Renter's Handbook (`RentersHandbook.jsx`)
Four core tenets of thoughtful tenant living:
1. *Light the corners, not the ceiling.*
2. *When landlords ban paint, rely on texture.*
3. *Think vertical when square footage is tight.*
4. *The 11-Month Rule: If it can't move in a cab, don't buy it.*

### 7. 📄 Makeover Spec Sheet Exporter (`ExportSpecModal.jsx`)
- Instant generation of an architectural **Rental Makeover Specification Sheet**.
- Combines active room dimensions, aesthetic style palette, itemized shopping & DIY checklist, total estimated investment, and deposit protection notes.
- One-click native **Print / Save as PDF** support for offline shopping trips or roommate alignment.

---

## 🎨 Visual Identity & Design System

RoomRevive rejects generic AI aesthetic tropes (neon purples, massive pill buttons, floating glass halos) in favor of a warm, architectural editorial identity:

- **Typography**:
  - **Headings & Display**: `Fraunces` (warm, high-character editorial serif with soft curves).
  - **Interface & Body**: `Plus Jakarta Sans` (clean, contemporary, highly legible grotesque sans).
  - **Specifications & Data**: `Space Mono` (monospaced type for dimensions, costs, and color codes).
- **Curated Earth Palette**:
  - `Ivory & Natural Paper` (`#FAF8F5`, `#F4EFE6`, `#DDD2BF`) — Warm, restful neutral canvas.
  - `Forest & Deep Ink` (`#181B19`, `#252B27`) — Grounded architectural typography.
  - `Terracotta Clay` (`#C8664B`, `#9E452E`) — Sunbaked warmth.
  - `Muted Sage` (`#6B7F6D`, `#455546`) — Calming botanical olive.
  - `Natural Jute & Sand` (`#D5C7B5`, `#EFE9DF`) — Organic texture tones.
  - `Antique Brass` (`#B68D40`) — Subtle metallic accent.
- **Architectural Radii & Paper Elevation**:
  - Clean, restrained corner radiuses (`2px` to `8px`).
  - Subtle, natural paper drop shadows that feel grounded rather than floaty.

---

## 📁 Project Structure

```text
Banana_hacks/
├── public/
│   ├── favicon.svg             # Brand mark browser favicon
│   ├── icons.svg               # SVG sprite sheet
│   └── images/                 # High-resolution photographic assets
│       ├── student_room_before_*.jpg
│       ├── student_room_japandi_after_*.jpg
│       ├── student_room_terracotta_after_*.jpg
│       ├── student_room_sage_after_*.jpg
│       ├── renter_studio_before_*.jpg
│       ├── renter_studio_after_*.jpg
│       └── swatch_*.jpg        # Macro material swatches (jute, linen, clay, canvas)
├── src/
│   ├── assets/                 # Static styles & assets
│   ├── components/
│   │   ├── Navbar.jsx          # Header with brand identity & export trigger
│   │   ├── BrandLogo.jsx       # Custom geometric SVG logo mark
│   │   ├── Hero.jsx            # Editorial hero with quick jump actions & badges
│   │   ├── RoomSummaryDock.jsx # Sticky status strip for active room, style & budget
│   │   ├── RoomStudio.jsx      # Preset switcher, aesthetic selector & studio hub
│   │   ├── BeforeAfterViewer.jsx # Split slider, fade toggle, side-by-side & annotations
│   │   ├── MakeoverSteps.jsx   # 4-stage practical rental makeover action guide
│   │   ├── MaterialArchive.jsx # Tactile material swatch library & acoustic guides
│   │   ├── BudgetPlanner.jsx   # Interactive checklist, budget slider & confetti
│   │   ├── RentersHandbook.jsx # Tenant manifesto & 4 architectural principles
│   │   ├── ExportSpecModal.jsx # Printable / PDF Makeover Specification Sheet
│   │   └── Footer.jsx          # Architectural studio footer & navigation links
│   ├── data/
│   │   └── roomData.js         # Presets, annotations, styles, checklist items & handbook data
│   ├── App.jsx                 # Application state root & layout composition
│   ├── index.css               # Design tokens, typography, CSS utilities & layout rules
│   └── main.jsx                # React 19 entry point
├── index.html                  # HTML template with Google Fonts (Fraunces, Plus Jakarta Sans, Space Mono)
├── package.json                # Project dependencies & scripts
├── vite.config.js              # Vite bundler configuration
└── README.md                   # Project documentation
```

---

## 🛠️ Tech Stack & Dependencies

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | [React 19](https://react.dev/) | `react@19.2.8`, `react-dom@19.2.8` |
| **Build Tool** | [Vite 8](https://vitejs.dev/) | `vite@8.3.0`, `@vitejs/plugin-react@6.1.1` |
| **Icons** | [Lucide React](https://lucide.dev/) | `lucide-react@1.55.0` |
| **Effects** | [Canvas Confetti](https://github.com/catdad/canvas-confetti) | `canvas-confetti@1.9.4` |
| **Linter** | [Oxlint](https://oxc.rs/) | `oxlint@1.81.0` (Fast Rust-based JS/TS linter) |
| **Styling** | Vanilla CSS | Custom CSS variables, responsive fluid layouts, zero CSS framework bloat |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. Clone or navigate to the repository directory:
   ```bash
   cd Banana_hacks
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the local development server:
   ```bash
   npm run dev
   ```

4. Open the development link printed in your terminal (typically `http://localhost:5173` or `http://localhost:5175`).

---

## 📦 Available Scripts

- **`npm run dev`**: Starts Vite dev server with Hot Module Replacement (HMR).
- **`npm run build`**: Compiles and optimizes assets into the `dist/` directory for production.
- **`npm run preview`**: Serves the production build locally for verification.
- **`npm run lint`**: Runs Oxlint across all JavaScript and JSX source files.

---

## 💡 Renter-Safe Design Philosophy

Every recommendation in RoomRevive adheres to three ironclad rules:
1. **Zero Deposit Loss**: No screws, no anchors, no paint, and no structural adhesives that strip rental wall plaster.
2. **Accessible Budgets**: Highlighting ₹0 furniture arrangements and ₹150–₹650 high-impact items over expensive full-room overhauls.
3. **Move-Out Readiness**: When lease renewal time arrives, every enhancement rolls, unclips, or packs into cartons in under an hour.

---

## 📄 License

Private project developed for RoomRevive / Banana Hacks. All rights reserved.
