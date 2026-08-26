import React, { useState } from "react";
import { 
  ArrowRight, 
  Download, 
  Terminal as TerminalIcon, 
  Mail, 
  CheckCircle2, 
  Copy, 
  Check, 
  Cpu, 
  Layers, 
  Server, 
  Database, 
  Sparkles, 
  ExternalLink,
  MapPin,
  Phone,
  ShieldCheck
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";
import profileImg from "../assets/profile.png";

export default function Hero({ onOpenResume, onOpenTerminal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.18),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Atmospheric Glow Orbs */}
      <div className="absolute top-1/4 left-1/12 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/12 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main Hero Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Profile Card + Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill & Role Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-slate-300 shadow-lg shadow-cyan-950/40 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-white">Aman Varma</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400 font-medium">AI & Backend Developer</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-400 hidden sm:inline">Druidot Consulting</span>
            </div>

            {/* Profile Avatar + Headline Combo */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-1">
              {/* High-Resolution Professional Portrait with Tech Ring */}
              <div className="relative group shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-[2px] bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shadow-xl shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={profileImg}
                    alt="Aman Varma - AI & Backend Developer"
                    className="w-full h-full object-cover object-top rounded-[14px] bg-[#090d16]"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-slate-900 border border-slate-700 p-1.5 rounded-lg shadow-md flex items-center justify-center text-emerald-400" title="Verified Python & AI Developer">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              {/* Headline */}
              <div className="space-y-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                  Architecting <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                    Intelligent Backends
                  </span> <br />
                  & Data-Driven APIs.
                </h1>
              </div>
            </div>

            {/* Subtitle Bio */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
              B.Tech CSE Graduate & Python Developer Intern at <span className="text-cyan-300 font-semibold">Druidot Consulting</span>. 
              Specializing in <span className="text-white font-medium">Flask/FastAPI REST APIs (25+ endpoints)</span>, 
              <span className="text-teal-300 font-medium"> Qwen 2.5 LLM lead extraction</span>, and automated 
              <span className="text-indigo-300 font-medium"> GitHub Actions CI/CD pipelines (26 unit tests)</span>.
            </p>

            {/* Quick Skills Pills */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-slate-400">
              <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700/60 rounded-md text-cyan-300">Python 3.12</span>
              <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700/60 rounded-md text-slate-300">Flask / FastAPI</span>
              <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700/60 rounded-md text-teal-300">Qwen 2.5 LLM</span>
              <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700/60 rounded-md text-slate-300">MySQL & MongoDB</span>
              <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700/60 rounded-md text-emerald-300">26 CI/CD Tests</span>
              <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700/60 rounded-md text-purple-300">SAP Certified</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => handleScrollTo("projects")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200 hover:scale-[1.01]"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Resume (PDF)</span>
              </button>

              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 font-mono text-xs transition-all duration-200"
                title="Launch Interactive Terminal"
              >
                <TerminalIcon className="w-4 h-4" />
                <span>Interactive CLI</span>
              </button>
            </div>

            {/* Direct Contact Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800/80 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span>Email:</span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-slate-200 hover:text-cyan-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{personalInfo.email}</span>
                      <Copy className="w-3 h-3 text-slate-500" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-emerald-400 flex items-center gap-1 text-slate-300"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{personalInfo.phone}</span>
                </a>
                <span className="text-slate-700">•</span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-1"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-700">•</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 flex items-center gap-1"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code & Architecture Window Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-[#0c1322] border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl group hover:border-cyan-500/40 transition-all duration-300">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <Server className="w-3 h-3 text-cyan-400" />
                  <span>aman_core_engine.py</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-1.5 py-0.5 rounded">
                    LIVE 200 OK
                  </span>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300 bg-[#090d16]/90">
                <div className="flex gap-4">
                  <div className="text-slate-600 select-none text-right font-mono pr-2 border-r border-slate-800">
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                    <div>04</div>
                    <div>05</div>
                    <div>06</div>
                    <div>07</div>
                    <div>08</div>
                    <div>09</div>
                    <div>10</div>
                    <div>11</div>
                    <div>12</div>
                  </div>
                  <div className="space-y-1">
                    <div><span className="text-purple-400">from</span> fastapi <span className="text-purple-400">import</span> FastAPI, Depends</div>
                    <div><span className="text-purple-400">from</span> nlpcrm.ai <span className="text-purple-400">import</span> QwenExtractor, SentimentEngine</div>
                    <div><span className="text-purple-400">from</span> druidot.validation <span className="text-purple-400">import</span> schema_guard</div>
                    <div className="text-slate-500 pt-1"># High-throughput lead processing pipeline</div>
                    <div><span className="text-blue-400">@app.post</span>(<span className="text-emerald-300">"/api/v1/extract-lead"</span>)</div>
                    <div><span className="text-purple-400">async def</span> <span className="text-amber-300">process_inbound</span>(payload: LeadPayload):</div>
                    <div className="pl-4">validated = <span className="text-cyan-300">schema_guard</span>(payload.data)</div>
                    <div className="pl-4">lead_info = <span className="text-cyan-300">QwenExtractor</span>.infer(validated.text)</div>
                    <div className="pl-4">score = <span className="text-cyan-300">SentimentEngine</span>.calc_score(lead_info)</div>
                    <div className="pl-4 text-purple-400">await <span className="text-white">db.leads.upsert</span>(lead_info, score)</div>
                    <div className="pl-4"><span className="text-purple-400">return</span> &#123;<span className="text-emerald-300">"status"</span>: <span className="text-emerald-300">"success"</span>, <span className="text-emerald-300">"score"</span>: score&#125;</div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Feature Tag Bar */}
              <div className="px-4 py-2.5 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Qwen 2.5 LLM + 26 CI Tests</span>
                </div>
                <a 
                  href="https://npcrm-1.onrender.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 hover:underline"
                >
                  <span>Test Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Floating Glassmorphism Metric Badge */}
            <div className="absolute -bottom-5 -left-4 sm:left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Full Stack & Data Ready</div>
                <div className="text-[11px] font-mono text-slate-400">25+ REST Endpoints Architected</div>
              </div>
            </div>

          </div>

        </div>

        {/* Impact Numbers & Key Stats Grid */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {personalInfo.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 group backdrop-blur-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}