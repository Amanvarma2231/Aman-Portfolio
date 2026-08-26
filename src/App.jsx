import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ArchitectureFlow from "./components/ArchitectureFlow";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Terminal from "./components/Terminal";
import ResumeModal from "./components/ResumeModal";
import CommandPalette from "./components/CommandPalette";

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleCustomOpenPalette = () => setCommandPaletteOpen(true);
    window.addEventListener("open-command-palette", handleCustomOpenPalette);
    return () => window.removeEventListener("open-command-palette", handleCustomOpenPalette);
  }, []);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Fixed Navigation Header */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Page Flow Hierarchy */}
      <main>
        {/* 1. Hero: Name, Role, Master Headshot, Stats, Core CTAs */}
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onOpenTerminal={() => setTerminalOpen(true)}
        />

        {/* 2. About Aman Varma: Story, Core Pillars, Large Photo Showcase */}
        <About />

        {/* 3. Experience & Milestones: Druidot Consulting, Research, Education */}
        <Experience />

        {/* 4. Featured Projects (After Experience): Live Demos, Repos, Metrics */}
        <Projects />

        {/* 5. Skills Matrix: Domain Breakdown */}
        <Skills />

        {/* 6. System Architecture Flow Simulator */}
        <ArchitectureFlow />

        {/* 7. Certifications & Accreditations: SAP, Infosys, JPMorgan */}
        <Certifications />

        {/* 8. Direct Contact & Multi-Channel Connect */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setResumeOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Interactive Modals & CLI Terminal */}
      <Terminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenResume={() => {
          setTerminalOpen(false);
          setResumeOpen(true);
        }}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenResume={() => setResumeOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />
    </div>
  );
}