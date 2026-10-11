import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RoomSummaryDock from "./components/RoomSummaryDock";
import RoomStudio from "./components/RoomStudio";
import MaterialArchive from "./components/MaterialArchive";
import MakeoverSteps from "./components/MakeoverSteps";
import BudgetPlanner from "./components/BudgetPlanner";
import RentersHandbook from "./components/RentersHandbook";
import Footer from "./components/Footer";
import ExportSpecModal from "./components/ExportSpecModal";
import { CHECKLIST_ITEMS } from "./data/roomData";

export default function App() {
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("studio");

  // Shared user state so style & budget are understood at a glance
  const [selectedPresetId, setSelectedPresetId] = useState("student-hostel");
  const [selectedStyleId, setSelectedStyleId] = useState("japandi");
  const [budgetLimit, setBudgetLimit] = useState(2500);
  const [selectedItems, setSelectedItems] = useState(() => {
    return CHECKLIST_ITEMS.filter(
      (item) => item.category === "free" || item.id === "diy-1" || item.id === "buy-1"
    ).map((item) => item.id);
  });

  return (
    <div className="min-h-screen">
      {/* Editorial Navigation */}
      <Navbar
        onOpenExport={() => setIsExportOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main>
        {/* Editorial Hero */}
        <Hero
          onStartStudio={() => {
            const el = document.getElementById("studio-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          onExploreSwatches={() => {
            const el = document.getElementById("materials-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* At-A-Glance Room & Budget Summary Strip */}
        <RoomSummaryDock
          selectedPresetId={selectedPresetId}
          selectedStyleId={selectedStyleId}
          budgetLimit={budgetLimit}
          selectedItems={selectedItems}
        />

        {/* Central Interactive Design Studio: Spacious Before-and-After & Horizontal Style Gallery */}
        <RoomStudio
          selectedPresetId={selectedPresetId}
          setSelectedPresetId={setSelectedPresetId}
          selectedStyleId={selectedStyleId}
          setSelectedStyleId={setSelectedStyleId}
        />

        {/* Clear Step-by-Step Form & 4-Step Action Plan */}
        <MakeoverSteps />

        {/* Asymmetric Image-and-Text Section & Large Photographic Material Archive */}
        <MaterialArchive />

        {/* Actionable Budget Planner & Checklist */}
        <BudgetPlanner
          onExportBrief={() => setIsExportOpen(true)}
          budgetLimit={budgetLimit}
          setBudgetLimit={setBudgetLimit}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />

        {/* The Renter's Handbook: Human-Crafted Principles */}
        <RentersHandbook />
      </main>

      {/* Architectural Studio Footer */}
      <Footer onOpenExport={() => setIsExportOpen(true)} />

      {/* Spec Sheet Modal */}
      <ExportSpecModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        selectedPresetId={selectedPresetId}
        selectedStyleId={selectedStyleId}
        selectedItems={selectedItems}
        budgetLimit={budgetLimit}
      />
    </div>
  );
}
