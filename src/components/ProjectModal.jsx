import React from "react";
import { X, ExternalLink, CheckCircle2, Server, ShieldCheck, Cpu, Database, Layers, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-4xl max-h-[90vh] bg-[#0c1222] border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/80 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
            <h3 className="text-lg font-bold text-white font-mono">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Tagline & Badges */}
          <div className="space-y-3">
            <p className="text-base text-cyan-300 font-medium">{project.tagline}</p>
            <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 pt-2">
              {project.badges.map((b, i) => (
                <span 
                  key={i} 
                  className="px-2.5 py-1 text-xs font-mono bg-slate-800/80 text-cyan-400 border border-slate-700/60 rounded-md"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl">
                <div className="text-xs text-slate-400 font-mono">{m.name}</div>
                <div className="text-base font-bold text-white font-mono mt-0.5">{m.value}</div>
              </div>
            ))}
          </div>

          {/* Architecture Pipeline Breakdown */}
          <div className="space-y-3 p-4 bg-slate-950/60 border border-slate-800 rounded-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Layers className="w-4 h-4" />
              <span>SYSTEM ARCHITECTURE & DATA FLOW</span>
            </div>
            <div className="p-3 bg-[#090d16] border border-slate-800/80 rounded-lg text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
              {project.architecture}
            </div>
          </div>

          {/* Deep Technical Highlights */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Engineering Deliverables & Impact</span>
            </h4>
            <div className="space-y-2.5">
              {project.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="px-6 py-4 bg-slate-950/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <span>Status:</span>
            <span className="text-emerald-400 flex items-center gap-1 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live on Render Cloud
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg border border-slate-700 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>View Source Code</span>
            </a>

            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg shadow-md shadow-cyan-500/20 transition-all hover:scale-105"
            >
              <span>Launch Live App</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
