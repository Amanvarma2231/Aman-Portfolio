import React from "react";
import { Terminal, FileText, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, AVLogo } from "./Icons";
import { personalInfo } from "../data/portfolioData";

export default function Footer({ onOpenResume, onOpenTerminal }) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060911] border-t border-slate-800/80 py-12 text-slate-400 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 p-1 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <AVLogo className="w-7 h-7" />
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-tight">
                Aman Varma
              </div>
              <div className="text-xs font-mono text-cyan-400">
                Python Developer & Software Engineer
              </div>
            </div>
          </div>

          {/* Quick Footer Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={handleScrollTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright & Tech Stack */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Aman Varma. Architected with React 19, Tailwind CSS & Vite.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Deployed globally on Vercel Edge & Render Cloud</span>
          </div>
        </div>

      </div>
    </footer>
  );
}