import React, { useState, useEffect } from "react";
import { 
  Terminal as TerminalIcon, 
  FileText, 
  Mail, 
  Menu, 
  X, 
  Code2, 
  Sparkles,
  Command
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";
import profileImg from "../assets/profile.png";

export default function Navbar({ onOpenResume, onOpenTerminal, onOpenCommandPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Architecture", href: "#architecture" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/50 py-3" 
        : "bg-transparent py-4 sm:py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <a 
            href="#" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-xl p-1"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 p-[1.5px] shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
              <img
                src={profileImg}
                alt="Aman Varma - Software Engineer"
                className="w-full h-full object-cover object-top rounded-[10px] bg-[#090d16]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg text-white tracking-tight flex items-center gap-1.5">
                AMAN VARMA
              </span>
              <span className="text-[11px] font-mono text-cyan-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Software Engineer
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/70 border border-slate-800/80 rounded-full px-4 py-1.5 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href="https://wa.me/916306572504?text=Hi%20Aman,%20I%20saw%20your%20Software%20Engineer%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/80 rounded-lg hover:text-white transition-all duration-200 shadow-sm"
              title="Chat on WhatsApp"
            >
              <WhatsappIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-lg hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-200 shadow-sm"
              title="Open Interactive Terminal"
            >
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>CLI</span>
            </button>

            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-mono text-slate-400 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-all"
              title="Search & Shortcuts (Ctrl+K)"
            >
              <Command className="w-3 h-3" />
              <span className="text-[10px] bg-slate-800 px-1 py-0.5 rounded text-slate-300">⌘K</span>
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-200 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <div className="flex items-center gap-1 pl-1 border-l border-slate-800">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href="https://wa.me/916306572504?text=Hi%20Aman,%20I%20saw%20your%20Software%20Engineer%20portfolio."
              target="_blank"
              rel="noreferrer"
              className="p-2 text-emerald-400 bg-emerald-950/80 border border-emerald-800 rounded-lg"
              title="WhatsApp"
            >
              <WhatsappIcon className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenTerminal}
              className="p-2 text-slate-300 hover:text-cyan-400 bg-slate-800/80 border border-slate-700/80 rounded-lg"
              title="Interactive Terminal"
            >
              <TerminalIcon className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenResume}
              className="px-2.5 py-1.5 text-xs font-medium text-white bg-cyan-600 rounded-lg"
            >
              Resume
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c1222] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-400"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="text-xs text-slate-400 flex items-center gap-1"
            >
              <Command className="w-3.5 h-3.5" />
              <span>Menu</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}