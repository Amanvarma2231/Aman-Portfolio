import React, { useState } from "react";
import { ArrowRight, Download, Terminal as TerminalIcon, Mail, CheckCircle2, Copy, Check, Cpu, Layers, Server, Database, Sparkles, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";

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
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Gradient Mesh & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Subtle Glow Spheres */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-slate-300 shadow-lg shadow-cyan-950/30 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Software & AI Backend Developer</span>
              <span className="text-slate-600">�</span>
              <span className="text-cyan-400">Druidot Consulting Intern</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Architecting <br />
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                  Intelligent Backends
                </span> <br />
                & Data-Driven APIs.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                Hi, I'm <span className="text-white font-semibold">Aman Varma</span>. I specialize in building high-performance 
                <span className="text-cyan-300"> Python (Flask/FastAPI)</span> microservices, 
                <span className="text-teal-300"> Qwen LLM</span> lead extraction pipelines, and automated 
                <span className="text-indigo-300"> CI/CD validation suites</span> tested in production environments.
              </p>
            </div>

            {/* Quick Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-slate-400">
              <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700/60 rounded-md">Python 3.12</span>
              <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700/60 rounded-md">Flask / FastAPI</span>
              <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700/60 rounded-md">Qwen 2.5 LLM</span>
              <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700/60 rounded-md">MySQL / PostgreSQL</span>
              <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700/60 rounded-md">GitHub Actions CI</span>
              <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700/60 rounded-md">SAP Certified</span>
            </div>

            {/* Call to Actions */}
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

            {/* Direct Connect & Socials */}
            <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-800/80 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span>Direct Contact:</span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-slate-200 hover:text-cyan-400 bg-slate-900 px-2 py-1 rounded border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      <span>{personalInfo.email}</span>
                      <Copy className="w-3 h-3 text-slate-500" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-1"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-700">�</span>
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
