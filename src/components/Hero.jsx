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
      file: "fastapi_microservice.py",
      demoUrl: "https://npcrm-1.onrender.com",
      demoLabel: "Live REST & gRPC API",
      lines: [
        { num: "01", code: '<span class="text-indigo-400">from</span> fastapi <span class="text-indigo-400">import</span> FastAPI, Depends, status' },
        { num: "02", code: '<span class="text-indigo-400">from</span> sqlalchemy.orm <span class="text-indigo-400">import</span> Session' },
        { num: "03", code: '<span class="text-indigo-400">from</span> app.cache <span class="text-indigo-400">import</span> RedisCacheManager' },
        { num: "04", code: '<span class="text-slate-500"># 1. Microservices Architecture (gRPC / REST + Docker)</span>' },
        { num: "05", code: '<span class="text-blue-400">@app.post</span>(<span class="text-emerald-400">"/api/v1/services"</span>, status_code=status.HTTP_201_CREATED)' },
        { num: "06", code: '<span class="text-indigo-400">async def</span> <span class="text-sky-300">dispatch_service</span>(payload: Payload, db: Session = <span class="text-sky-400">Depends</span>(get_db)):' },
        { num: "07", code: '    cached = <span class="text-sky-300">RedisCacheManager</span>.get(payload.id)' },
        { num: "08", code: '    <span class="text-indigo-400">if</span> cached: <span class="text-indigo-400">return</span> cached' },
        { num: "09", code: '    record = <span class="text-indigo-400">await</span> <span class="text-slate-100">crud.services.create</span>(db, payload)' },
        { num: "10", code: '    <span class="text-indigo-400">return</span> &#123;<span class="text-emerald-400">"status"</span>: <span class="text-emerald-400">"success"</span>, <span class="text-emerald-400">"data"</span>: record&#125;' }
      ]
    },
    redis: {
      file: "cache_system.py",
      demoUrl: "https://content-desk.onrender.com",
      demoLabel: "Live Cache System",
      lines: [
        { num: "01", code: '<span class="text-indigo-400">-- 2. High-Throughput Cache System (PostgreSQL + Redis + ORM)</span>' },
        { num: "02", code: '<span class="text-blue-400">CREATE TABLE IF NOT EXISTS</span> <span class="text-sky-300">hot_query_cache</span> (' },
        { num: "03", code: '    <span class="text-sky-400">cache_key</span> <span class="text-indigo-400">VARCHAR(255) PRIMARY KEY</span>,' },
        { num: "04", code: '    <span class="text-sky-400">query_hash</span> <span class="text-indigo-400">VARCHAR(64) UNIQUE NOT NULL</span>,' },
        { num: "05", code: '    <span class="text-sky-400">ttl_seconds</span> <span class="text-indigo-400">INT DEFAULT 3600</span>,' },
        { num: "06", code: '    <span class="text-sky-400">created_at</span> <span class="text-indigo-400">TIMESTAMP DEFAULT CURRENT_TIMESTAMP</span>' },
        { num: "07", code: ');' },
        { num: "08", code: '<span class="text-blue-400">CREATE INDEX</span> idx_query_hash <span class="text-blue-400">ON</span> hot_query_cache(query_hash);' },
        { num: "09", code: '<span class="text-slate-500">-- >94% Cache Hit Rate with Sub-10ms Redis Latency</span>' }
      ]
    },
    cicd: {
      file: "devops_pipeline.yml",
      demoUrl: "https://aman-portflio-chi.vercel.app",
      demoLabel: "Live DevOps Pipeline",
      lines: [
        { num: "01", code: '<span class="text-indigo-400">name:</span> DevOps & Cloud Pipeline CI/CD' },
        { num: "02", code: '<span class="text-indigo-400">on:</span> [push, pull_request]' },
        { num: "03", code: '<span class="text-slate-500"># 3. DevOps & Cloud Pipeline (CI/CD + AWS Infrastructure)</span>' },
        { num: "04", code: '<span class="text-indigo-400">jobs:</span>' },
        { num: "05", code: '  <span class="text-sky-300">test-and-deploy:</span>' },
        { num: "06", code: '    <span class="text-indigo-400">runs-on:</span> ubuntu-latest' },
        { num: "07", code: '    <span class="text-indigo-400">steps:</span>' },
        { num: "08", code: '      - <span class="text-emerald-400">run:</span> pytest --cov=app tests/' },
        { num: "09", code: '      - <span class="text-emerald-400">run:</span> docker build -t app:latest .' },
        { num: "10", code: '      - <span class="text-emerald-400">run:</span> aws ecr push app:latest' }
      ]
    }
  };

  return (
    <section className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-14 overflow-hidden bg-[#090d16]">
      {/* Subtle Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.12),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Master Portrait & Introduction (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-white">Python Developer Intern @ Druidot Consulting</span>
              <span className="text-slate-600">•</span>
              <span className="text-blue-400 font-medium">Open to Work</span>
            </div>

            {/* Profile Avatar + Name Display */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-1">
              
              {/* Clean, Framed Master Portrait Headshot */}
              <div className="relative group shrink-0">
                <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-3xl p-[2.5px] bg-slate-800 border border-slate-700 shadow-xl group-hover:border-blue-500/60 transition-all duration-300 overflow-hidden">
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

              {/* Clean Typography */}
              <div className="space-y-1">
                <div className="text-xs font-mono font-medium tracking-wider text-blue-400">
                  Hello, I'm
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Aman Varma
                </h1>
                <div className="text-base sm:text-lg lg:text-xl font-bold text-slate-300 font-mono">
                  Python Developer • Software Engineer
                </div>
              </div>
            </div>

            {/* Concise Bio */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              B.Tech Computer Science graduate building scalable <span className="text-white font-medium">RESTful APIs & gRPC microservices</span>, 
              <span className="text-blue-300 font-medium"> PostgreSQL + Redis high-throughput cache systems</span>, and automated 
              <span className="text-emerald-300 font-medium"> CI/CD DevOps cloud pipelines (GitHub Actions + AWS + Docker)</span>.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-slate-300">
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-blue-400">Python 3.12</span>
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-slate-200">FastAPI & gRPC</span>
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-sky-300">PostgreSQL & Redis</span>
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-slate-200">Docker & Jenkins</span>
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-emerald-400">CI/CD & AWS</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => handleScrollTo("projects")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-all duration-200 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* View Resume Button */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200"
                title="View Resume"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>View Resume</span>
              </button>

              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-2 px-3.5 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 font-mono text-xs transition-all duration-200"
                title="Launch CLI Terminal"
              >
                <TerminalIcon className="w-4 h-4" />
                <span>CLI Terminal</span>
              </button>
            </div>

            {/* Contact Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-800/80 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span>Email:</span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-slate-200 hover:text-blue-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-3 h-3 text-blue-400" />
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
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-400 flex items-center gap-1">
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Code Editor (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-[#0c1220] border border-slate-800 shadow-xl overflow-hidden group hover:border-slate-700 transition-all duration-300">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#090d16] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  </div>
                  
                  {/* Code Tabs */}
                  <div className="flex items-center gap-1 pl-2">
                    <button
                      onClick={() => setActiveCodeTab("fastapi")}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                        activeCodeTab === "fastapi"
                          ? "bg-slate-800 text-blue-400 font-semibold"
                          : "text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      Microservices
                    </button>
                    <button
                      onClick={() => setActiveCodeTab("redis")}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                        activeCodeTab === "redis"
                          ? "bg-slate-800 text-emerald-400 font-semibold"
                          : "text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      Redis Cache
                    </button>
                    <button
                      onClick={() => setActiveCodeTab("cicd")}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                        activeCodeTab === "cicd"
                          ? "bg-slate-800 text-indigo-400 font-semibold"
                          : "text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      DevOps Pipeline
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-1.5 py-0.5 rounded flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    200 OK
                  </span>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300 bg-[#080c14] min-h-[250px]">
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
              <div className="px-4 py-2.5 bg-[#090d16] border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>{codeSnippets[activeCodeTab].file}</span>
                </div>
                <a 
                  href={codeSnippets[activeCodeTab].demoUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1 hover:underline"
                >
                  <span>{codeSnippets[activeCodeTab].demoLabel}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Metric Badge */}
            <div className="absolute -bottom-5 -left-4 sm:left-4 bg-slate-900 border border-slate-800 rounded-xl p-3 shadow-lg flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Microservices & DevOps Specialist</div>
                <div className="text-[11px] font-mono text-slate-400">25+ REST & gRPC APIs Architected</div>
              </div>
            </div>

          </div>

        </div>

        {/* Impact Numbers */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {personalInfo.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white group-hover:text-blue-400 transition-colors">
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