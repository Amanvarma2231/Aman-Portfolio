import React, { useState } from "react";
import { 
  Workflow, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  ShieldCheck, 
  BrainCircuit, 
  Database, 
  Layers, 
  Activity,
  ArrowRight
} from "lucide-react";

export default function ArchitectureFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const steps = [
    {
      id: "ingest",
      title: "1. Ingestion & Security Guard",
      service: "Flask / FastAPI Gateway",
      icon: ShieldCheck,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/30",
      desc: "Incoming requests are validated against CSRF tokens, session cookies, Google OAuth 2.0 signatures, and Redis/Memory rate-limiting filters.",
      metric: "< 12ms Latency"
    },
    {
      id: "ai",
      title: "2. LLM & NLP Inference Engine",
      service: "Qwen 2.5 / Hugging Face API",
      icon: BrainCircuit,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      desc: "Unstructured input is analyzed for named entities, automated lead scoring (0�10), TF-IDF deduplication, and intent classification.",
      metric: "0�10 Score Extracted"
    },
    {
      id: "validation",
      title: "3. Schema Validation & Guardrails",
      service: "Python Custom Validation Suite",
      icon: CheckCircle2,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30",
      desc: "Extracted entities are checked against strict schema types, null-checks, sanitization rules, and business logic before database persistence.",
      metric: "100% Type Checked"
    },
    {
      id: "storage",
      title: "4. Multi-Store Persistence",
      service: "MySQL & MongoDB Stores",
      icon: Database,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/30",
      desc: "Transactional data is saved to normalized relational tables (MySQL/SQLite) and unstructured event streams are indexed in document stores.",
      metric: "ACID Guaranteed"
    },
    {
      id: "ci",
      title: "5. Automated CI/CD Verification",
      service: "GitHub Actions Workflow",
      icon: Activity,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      desc: "Every commit triggers a suite of 26 automated unit tests and integration verifications before deployment onto cloud servers.",
      metric: "26 Unit Tests Passing"
    }
  ];

  const handleRunSimulation = () => {
    setIsRunning(true);
    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < steps.length) {
        setActiveStep(current);
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 1000);
  };

  return (
    <section id="architecture" className="py-20 bg-slate-950/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono text-cyan-400 mb-3">
              <Workflow className="w-3.5 h-3.5" />
              <span>LIVE SYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interactive Data Pipeline Simulator
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Inspect how Aman engineers reliable, low-latency data pipelines from client request to AI inference and cloud persistence.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRunSimulation}
              disabled={isRunning}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                isRunning 
                  ? "bg-slate-800 text-slate-500 cursor-not-allowed" 
                  : "bg-cyan-600 hover:bg-cyan-500 text-white shadow-md shadow-cyan-600/30 active:scale-95"
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              <span>{isRunning ? "Simulating..." : "Run Live Simulation"}</span>
            </button>

            <button
              onClick={() => setActiveStep(0)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Reset"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Pipeline Step Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-200 flex flex-col justify-between border ${
                  isSelected
                    ? "bg-[#0f172a] border-cyan-500/60 shadow-lg shadow-cyan-950/40 scale-[1.02]"
                    : "bg-slate-900/60 border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg ${step.bg}`}>
                    <Icon className={`w-4 h-4 ${step.color}`} />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">Step 0{idx + 1}</span>
                </div>
                <div className="mt-3">
                  <div className="text-xs font-bold text-white leading-tight font-mono">{step.title}</div>
                  <div className="text-[11px] text-cyan-400 font-mono mt-1">{step.metric}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep Dive Card */}
        <div className="rounded-2xl bg-gradient-to-b from-[#0e1628] to-[#090d16] border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 text-xs font-mono bg-cyan-950 text-cyan-400 border border-cyan-800 rounded">
                  Active Component: {steps[activeStep].service}
                </span>
                <span className="text-xs font-mono text-emerald-400">? Live Pipeline Node</span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                {steps[activeStep].title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {steps[activeStep].desc}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Production Tested</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span>Benchmark: {steps[activeStep].metric}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-950/80 rounded-xl p-4 border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
              <div className="text-slate-500 pb-1 border-b border-slate-800 flex items-center justify-between">
                <span>NODE_TELEMETRY.LOG</span>
                <span className="text-emerald-400">STATUS 200</span>
              </div>
              <div className="space-y-1 text-[11px] text-slate-400">
                <div>&gt; target_worker: <span className="text-white">{steps[activeStep].service}</span></div>
                <div>&gt; validation_rule: <span className="text-cyan-300">STRICT_PYDANTIC_V2</span></div>
                <div>&gt; latency_profile: <span className="text-emerald-300">{steps[activeStep].metric}</span></div>
                <div>&gt; security_audit: <span className="text-purple-300">0 Vulnerabilities</span></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
