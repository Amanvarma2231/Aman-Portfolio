import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import ArchitectureFlow from "./components/ArchitectureFlow";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Terminal from "./components/Terminal";
import ResumeModal from "./components/ResumeModal";
import CommandPalette from "./components/CommandPalette";
import { WhatsappIcon } from "./components/Icons";

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
      
      {/* Top Fixed Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main Page Flow Hierarchy */}
      <main>
        {/* 1. Hero: Name, Role, Master Headshot, Stats, Core CTAs */}
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onOpenTerminal={() => setTerminalOpen(true)}
        />

        {/* 2. About Aman Varma: Story, Core Pillars, Large Photo Showcase */}
        <About />

        {/* 3. Featured Projects: Live Demos, Repos, Metrics */}
        <Projects />

        {/* 4. Experience & Milestones: Druidot Consulting, Research, Education */}
        <Experience />

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

      {/* Floating WhatsApp Quick Action Button */}
      <aside aria-label="Quick Connect" className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/916306572504?text=Hi%20Aman,%20I%20saw%20your%20Software%20Engineer%20portfolio%20and%20would%20like%20to%20connect."
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm shadow-2xl shadow-emerald-950/80 border border-emerald-400/40 hover:scale-105 transition-all duration-300 active:scale-95"
          title="Chat directly on WhatsApp (+91-6306572504)"
        >
          <WhatsappIcon className="w-5 h-5 text-white" />
          <span className="hidden sm:inline font-semibold">Chat on WhatsApp</span>
        </a>
      </aside>

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