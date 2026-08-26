import React, { useState } from "react";
import { 
  ArrowRight, 
  Download, 
  Terminal as TerminalIcon, 
  Mail, 
  CheckCircle2, 
  Copy, 
  Check, 
  Server, 
  Database, 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  Phone,
  FileText
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";
import profileImg from "../assets/profile.png";

export default function Hero({ onOpenResume, onOpenTerminal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState("fastapi");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const codeSnippets = {
    fastapi: {
      file: "fastapi_engine.py",
      demoUrl: "https://npcrm-1.onrender.com",
      demoLabel: "Live CRM API",
      lines: [
        { num: "01", code: '<span class="text-purple-400">from</span> fastapi <span class="text-purple-400">import</span> FastAPI, Depends' },
        { num: "02", code: '<span class="text-purple-400">from</span> nlpcrm.ai <span class="text-purple-400">import</span> QwenExtractor, SentimentEngine' },
        { num: "03", code: '<span class="text-slate-500"># 25+ Production REST Endpoints with OAuth 2.0</span>' },
        { num: "04", code: '<span class="text-blue-400">@app.post</span>(<span class="text-emerald-300">"/api/v1/extract-lead"</span>)' },
        { num: "05", code: '<span class="text-purple-400">async def</span> <span class="text-amber-300">process_inbound</span>(payload: LeadPayload):' },
        { num: "06", code: '    lead_data = <span class="text-cyan-300">QwenExtractor</span>.infer(payload.text)' },
        { num: "07", code: '    score = <span class="text-cyan-300">SentimentEngine</span>.calc_score(lead_data)' },
        { num: "08", code: '    <span class="text-purple-400">await</span> <span class="text-white">db.leads.upsert</span>(lead_data, score)' },
        { num: "09", code: '    <span class="text-purple-400">return</span> &#123;<span class="text-emerald-300">"status"</span>: <span class="text-emerald-300">"success"</span>, <span class="text-emerald-300">"score"</span>: score&#125;' }
      ]
    },
    mysql: {
      file: "schema_validation.sql",
      demoUrl: "https://content-desk.onrender.com",
      demoLabel: "Live Data Pipeline",
      lines: [
        { num: "01", code: '<span class="text-purple-400">-- Automated ETL Data Integrity Schema</span>' },
        { num: "02", code: '<span class="text-blue-400">CREATE TABLE IF NOT EXISTS</span> <span class="text-amber-300">production_leads</span> (' },
        { num: "03", code: '    <span class="text-cyan-300">id</span> <span class="text-purple-400">VARCHAR(36) PRIMARY KEY</span>,' },
        { num: "04", code: '    <span class="text-cyan-300">contact_name</span> <span class="text-purple-400">VARCHAR(255) NOT NULL</span>,' },
        { num: "05", code: '    <span class="text-cyan-300">ai_lead_score</span> <span class="text-purple-400">DECIMAL(3, 1) CHECK</span> (ai_lead_score <span class="text-blue-400">BETWEEN</span> 0 <span class="text-blue-400">AND</span> 10),' },
        { num: "06", code: '    <span class="text-cyan-300">created_at</span> <span class="text-purple-400">TIMESTAMP DEFAULT CURRENT_TIMESTAMP</span>' },
        { num: "07", code: ');' },
        { num: "08", code: '<span class="text-blue-400">CREATE INDEX</span> idx_score <span class="text-blue-400">ON</span> production_leads(ai_lead_score);' },
        { num: "09", code: '<span class="text-slate-500">-- Handled 1,000+ live records with 0% duplication</span>' }
      ]
    },
    vlm: {
      file: "vlm_diagnostic.py",
      demoUrl: "https://vlm-hallucination-studio.onrender.com",
      demoLabel: "Live VLM Studio",
      lines: [
        { num: "01", code: '<span class="text-purple-400">import</span> torch, torchvision' },
        { num: "02", code: '<span class="text-slate-500"># Vision-Language Hallucination Diagnostics</span>' },
        { num: "03", code: '<span class="text-purple-400">class</span> <span class="text-amber-300">VLMHallucinationAuditor</span>:' },
        { num: "04", code: '    <span class="text-purple-400">def</span> <span class="text-cyan-300">detect_token_drift</span>(self, image, prompt):' },
        { num: "05", code: '        vision_feats = self.encoder(image)' },
        { num: "06", code: '        attn_map = self.cross_attention(vision_feats, prompt)' },
        { num: "07", code: '        drift = <span class="text-cyan-300">calc_drift_metric</span>(attn_map)' },
        { num: "08", code: '        <span class="text-purple-400">return</span> &#123;<span class="text-emerald-300">"drift"</span>: drift, <span class="text-emerald-300">"status"</span>: <span class="text-emerald-300">"clean"</span>&#125;' },
        { num: "09", code: 'auditor = <span class="text-cyan-300">VLMHallucinationAuditor</span>()' }
      ]
    }
  };

  return (
    <section className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-14 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.2),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Big Master Portrait & Punchy Bio (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-slate-300 shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-white">Python Developer Intern @ Druidot Consulting</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400 font-medium">Open to Work</span>
            </div>

            {/* Profile Avatar + Prominent Title Display */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-1">
              
              {/* Extra Large Master Portrait Headshot */}
              <div className="relative group shrink-0">
                <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-3xl p-[3px] bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shadow-2xl shadow-cyan-500/30 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img
                    src={profileImg}
                    alt="Aman Varma - Python Developer & Software Engineer"
                    className="w-full h-full object-cover object-top rounded-[21px] bg-[#090d16]"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-slate-900 border border-slate-700 p-2 rounded-xl shadow-lg flex items-center justify-center text-emerald-400" title="Verified Python & Software Engineer">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              {/* Clean, Elegant Name & Roles */}
              <div className="space-y-1">
                <div className="text-xs font-mono font-medium tracking-wider text-cyan-400">
                  Hello, I'm
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Aman Varma
                </h1>
                <div className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent font-mono">
                  Python Developer • Software Engineer
                </div>
              </div>
            </div>

            {/* Crisp, Concise Bio (Pure Backend & Software Focus) */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              B.Tech Computer Science graduate building scalable <span className="text-white font-medium">Python (FastAPI & Flask) backends</span>, 
              <span className="text-cyan-300 font-medium"> 25+ production REST APIs</span>, and automated 
              <span className="text-indigo-300 font-medium"> ETL data validation pipelines backed by MySQL & MongoDB (26 CI/CD unit tests)</span>.
            </p>

            {/* Core Tech Stack Badges (Clean Single Row) */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-slate-300">
              <span className="px-2.5 py-1 bg-slate-900/90 border border-slate-700/80 rounded-lg text-cyan-300">Python 3.12</span>
              <span className="px-2.5 py-1 bg-slate-900/90 border border-slate-700/80 rounded-lg text-slate-200">FastAPI & Flask</span>
              <span className="px-2.5 py-1 bg-slate-900/90 border border-slate-700/80 rounded-lg text-teal-300">25+ REST APIs</span>
              <span className="px-2.5 py-1 bg-slate-900/90 border border-slate-700/80 rounded-lg text-slate-200">MySQL & MongoDB</span>
              <span className="px-2.5 py-1 bg-slate-900/90 border border-slate-700/80 rounded-lg text-emerald-300">26 CI/CD Tests</span>
              <span className="px-2.5 py-1 bg-slate-900/90 border border-slate-700/80 rounded-lg text-purple-300">SAP Certified</span>
            </div>

            {/* Action Buttons: View Projects, View & Download Resume, CLI */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => handleScrollTo("projects")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* View & Download Resume Button */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200"
                title="View and Download Resume"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </button>

              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-2 px-3.5 py-3 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 font-mono text-xs transition-all duration-200"
                title="Launch CLI Terminal"
              >
                <TerminalIcon className="w-4 h-4" />
                <span>CLI Terminal</span>
              </button>
            </div>

            {/* Direct Contact Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-800/80 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span>Email:</span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-slate-200 hover:text-cyan-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-3 h-3 text-cyan-400" />
                      <span>{personalInfo.email}</span>
                      <Copy className="w-3 h-3 text-slate-500" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span>Phone:</span>
                <button
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1.5 text-slate-200 hover:text-emerald-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 transition-colors"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Phone className="w-3 h-3 text-emerald-400" />
                      <span>{personalInfo.phone}</span>
                      <Copy className="w-3 h-3 text-slate-500" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1">
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-700">•</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 flex items-center gap-1">
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Code Window Suite (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-[#0c1322] border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl group hover:border-cyan-500/40 transition-all duration-300">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-950/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  
                  {/* Code Tabs */}
                  <div className="flex items-center gap-1 pl-2">
                    <button
                      onClick={() => setActiveCodeTab("fastapi")}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                        activeCodeTab === "fastapi"
                          ? "bg-slate-800 text-cyan-400 font-semibold"
                          : "text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      FastAPI
                    </button>
                    <button
                      onClick={() => setActiveCodeTab("mysql")}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                        activeCodeTab === "mysql"
                          ? "bg-slate-800 text-amber-400 font-semibold"
                          : "text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      MySQL
                    </button>
                    <button
                      onClick={() => setActiveCodeTab("vlm")}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                        activeCodeTab === "vlm"
                          ? "bg-slate-800 text-purple-400 font-semibold"
                          : "text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      VLM AI
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-1.5 py-0.5 rounded flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    200 OK
                  </span>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300 bg-[#090d16]/95 min-h-[250px]">
                <div className="flex gap-4">
                  <div className="text-slate-600 select-none text-right font-mono pr-2 border-r border-slate-800/80">
                    {codeSnippets[activeCodeTab].lines.map((l) => (
                      <div key={l.num}>{l.num}</div>
                    ))}
                  </div>
                  <div className="space-y-1">
                    {codeSnippets[activeCodeTab].lines.map((l) => (
                      <div 
                        key={l.num} 
                        dangerouslySetInnerHTML={{ __html: l.code }} 
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 py-2.5 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{codeSnippets[activeCodeTab].file}</span>
                </div>
                <a 
                  href={codeSnippets[activeCodeTab].demoUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 hover:underline"
                >
                  <span>{codeSnippets[activeCodeTab].demoLabel}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Metric Badge */}
            <div className="absolute -bottom-5 -left-4 sm:left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Full Stack & Backend Specialist</div>
                <div className="text-[11px] font-mono text-slate-400">25+ REST Endpoints Architected</div>
              </div>
            </div>

          </div>

        </div>

        {/* Impact Numbers */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
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