import React from "react";
import { 
  User, 
  Code2, 
  BrainCircuit, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Terminal,
  Cpu,
  Database,
  Server
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import profileImg from "../assets/profile.png";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#090d16]/90 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono text-cyan-400">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT AMAN VARMA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Driven by Clean Code & Intelligent Architecture
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Transitioning from academic foundations in Computer Science to delivering production-ready AI and backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Big Prominent Photo Card with Tech Framing (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Outer Glowing Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500"></div>
              
              <div className="relative rounded-3xl bg-[#0c1222] border border-slate-700/80 p-4 shadow-2xl space-y-4">
                {/* Large Master Portrait */}
                <div className="w-full aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                  <img
                    src={profileImg}
                    alt="Aman Varma - Software Engineer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Identity Tag Card */}
                <div className="p-3.5 bg-slate-950/90 border border-slate-800 rounded-xl space-y-1 text-center font-mono">
                  <div className="text-base font-bold text-white tracking-tight">
                    AMAN VARMA
                  </div>
                  <div className="text-xs text-cyan-400 font-semibold">
                    Software Engineer • AI & Backend Specialist
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5 pt-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>Ghaziabad, India • Open to Remote & Onsite</span>
                  </div>
                </div>

                {/* Quick Credentials Checklist */}
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-300">
                  <div className="p-2 bg-slate-900/60 rounded-lg border border-slate-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Druidot Intern</span>
                  </div>
                  <div className="p-2 bg-slate-900/60 rounded-lg border border-slate-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>SAP Certified</span>
                  </div>
                  <div className="p-2 bg-slate-900/60 rounded-lg border border-slate-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>NGAISL-26 Paper</span>
                  </div>
                  <div className="p-2 bg-slate-900/60 rounded-lg border border-slate-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>100+ DSA Solved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Engineering Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                I am a <strong className="text-white font-semibold">Software Engineer</strong> specializing in Python backend architecture, REST API design, and intelligent AI workflows. Currently working as a Python Developer Intern at <span className="text-cyan-300 font-medium">Druidot Consulting</span>, I build and maintain automated validation engines and standards-based microservices powering database operations.
              </p>

              <p>
                My journey began with a strong foundation in Computer Science & Engineering from <strong className="text-white">NITRA Technical Campus (AKTU)</strong>, where I developed a keen interest in distributed systems, data structures, and energy-efficient routing algorithms (presenting research at the <span className="text-purple-300">NGAISL-2026</span> International Conference).
              </p>

              <p>
                I believe that modern software must be <strong className="text-white">resilient, tested, and self-documenting</strong>. Whether designing a 25+ endpoint REST API with OAuth 2.0 security, integrating Qwen 2.5 LLMs for real-time lead extraction, or configuring 26 automated CI/CD unit tests in GitHub Actions, I focus on measurable impact and production reliability.
              </p>
            </div>

            {/* Core Engineering Pillars Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 rounded-xl transition-colors space-y-1.5">
                <div className="text-cyan-400 font-mono font-bold text-xs flex items-center gap-1.5">
                  <Code2 className="w-4 h-4" />
                  <span>Clean Backend</span>
                </div>
                <div className="text-xs text-slate-300 leading-relaxed font-sans">
                  FastAPI, Flask, Django, Pydantic, OAuth 2.0 & normalized SQL schemas.
                </div>
              </div>

              <div className="p-4 bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 rounded-xl transition-colors space-y-1.5">
                <div className="text-purple-400 font-mono font-bold text-xs flex items-center gap-1.5">
                  <BrainCircuit className="w-4 h-4" />
                  <span>Applied AI</span>
                </div>
                <div className="text-xs text-slate-300 leading-relaxed font-sans">
                  Qwen 2.5 LLM integration, zero-shot entity extraction & TF-IDF similarity.
                </div>
              </div>

              <div className="p-4 bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 rounded-xl transition-colors space-y-1.5">
                <div className="text-emerald-400 font-mono font-bold text-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Automated CI</span>
                </div>
                <div className="text-xs text-slate-300 leading-relaxed font-sans">
                  26+ automated unit tests in GitHub Actions, eliminating manual release friction.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}