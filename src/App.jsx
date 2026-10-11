import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RoomStudio from "./components/RoomStudio";
import MaterialArchive from "./components/MaterialArchive";
import BudgetPlanner from "./components/BudgetPlanner";
import RentersHandbook from "./components/RentersHandbook";
import Footer from "./components/Footer";
import ExportSpecModal from "./components/ExportSpecModal";

export default function App() {
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("studio");

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

        {/* Central Interactive Design Studio */}
        <RoomStudio />

        {/* Tactile Material Archive & Texture Explorer */}
        <MaterialArchive />

        {/* Actionable Budget Planner & Checklist */}
        <BudgetPlanner onExportBrief={() => setIsExportOpen(true)} />

        {/* The Renter's Handbook: Human-Crafted Principles */}
        <RentersHandbook />
      </main>

      {/* Architectural Studio Footer */}
      <Footer onOpenExport={() => setIsExportOpen(true)} />

      {/* Spec Sheet Modal */}
      <ExportSpecModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />
    </div>
  );
}
