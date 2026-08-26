import React from "react";
import { Code2, Mail, Phone, ArrowUp, Terminal, Heart, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";

export default function Footer({ onOpenResume, onOpenTerminal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070b12] border-t border-slate-800/80 text-slate-400 font-sans text-xs sm:text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand & Summary (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 p-[1px]">
                <div className="w-full h-full bg-[#090d16] rounded-[7px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-mono text-base font-bold text-white tracking-tight">
                aman.varma<span className="text-cyan-400">()</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Software Engineer & AI Backend Developer specializing in Python (Flask/FastAPI), Qwen 2.5 LLM integrations, and automated ETL pipelines.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience & Research</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills Matrix</a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-cyan-400 transition-colors">System Architecture</a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Direct Contact</a>
              </li>
            </ul>
          </div>

          {/* Developer Tools & Demos (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
              Live Applications & CLI
            </h4>
            <div className="space-y-2 text-xs">
              <a 
                href="https://npcrm-1.onrender.com" 
                target="_blank" 
                rel="noreferrer"
                className="block p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 text-slate-300 hover:text-white transition-colors"
              >
                <div className="font-semibold text-white">NLPCRM Platform ?</div>
                <div className="text-[11px] text-slate-500 font-mono">Qwen 2.5 LLM & 25+ REST APIs</div>
              </a>

              <a 
                href="https://content-desk.onrender.com" 
                target="_blank" 
                rel="noreferrer"
                className="block p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 text-slate-300 hover:text-white transition-colors"
              >
                <div className="font-semibold text-white">Content Desk Platform ?</div>
                <div className="text-[11px] text-slate-500 font-mono">TF-IDF Deduplication & 26 CI Tests</div>
              </a>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={onOpenTerminal}
                  className="px-2.5 py-1 rounded bg-slate-800 text-cyan-400 font-mono text-[11px] hover:bg-slate-700 transition-colors flex items-center gap-1"
                >
                  <Terminal className="w-3 h-3" />
                  <span>Open Terminal</span>
                </button>

                <button
                  onClick={onOpenResume}
                  className="px-2.5 py-1 rounded bg-slate-800 text-white font-mono text-[11px] hover:bg-slate-700 transition-colors flex items-center gap-1"
                >
                  <FileText className="w-3 h-3" />
                  <span>Resume (PDF)</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Status Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>2026 Developer Portfolio � Built with React, Tailwind & Vite</span>
          </div>

          <div className="flex items-center gap-4">
            <span>� {new Date().getFullYear()} Aman Varma. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
