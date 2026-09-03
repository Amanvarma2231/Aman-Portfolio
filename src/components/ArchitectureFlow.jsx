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
  ArrowRight,
  Server,
  Cpu,
  GitBranch,
  Cloud
} from "lucide-react";

export default function ArchitectureFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const steps = [
    {
      id: "microservices",
      title: "1. Microservices Architecture",
      subtitle: "gRPC / REST + Docker Containerization",
      service: "FastAPI & Python Microservices",
      icon: Server,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      desc: "Decoupled microservices communicating via low-latency gRPC binary serialization and FastAPI REST endpoints, containerized with Docker multi-stage builds.",
      metric: "< 15ms gRPC Latency"
    },
    {
      id: "cache",
      title: "2. High-Throughput Cache System",
      subtitle: "PostgreSQL + Redis + SQLAlchemy ORM",
      service: "PostgreSQL & Redis Caching Layer",
      icon: Database,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30",
      desc: "Transactional data persisted in PostgreSQL via async SQLAlchemy ORM, backed by Redis in-memory cache layer delivering > 94% cache hit rates.",
      metric: "> 94% Cache Hit Rate"
    },
    {
      id: "devops",
      title: "3. DevOps & Cloud Pipeline",
      subtitle: "CI/CD (GitHub Actions + Jenkins) + AWS",
      service: "GitHub Actions & AWS Cloud Deployment",
      icon: GitBranch,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/30",
      desc: "Automated build-test-deploy pipelines in GitHub Actions & Jenkins running 26+ unit tests, building Docker containers, and deploying to AWS cloud infrastructure.",
      metric: "26+ Tests & AWS Cloud"
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
    }, 1200);
  };

  return (
    <section id="architecture" className="py-20 bg-[#080c14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-blue-400 mb-3">
              <Workflow className="w-3.5 h-3.5" />
              <span>ENTERPRISE ARCHITECTURE ROADMAP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Portfolio Architecture & Telemetry Simulator
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Simulating the 3 core architectural pillars: Microservices (gRPC/REST + Docker), High-Throughput Cache (PostgreSQL + Redis + ORM), and DevOps Pipeline (CI/CD + AWS).
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRunSimulation}
              disabled={isRunning}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-mono text-xs font-semibold shadow-md transition-all active:scale-95"
            >
              <Play className={`w-3.5 h-3.5 ${isRunning ? "animate-spin" : ""}`} />
              <span>{isRunning ? "Running Simulator..." : "Simulate Flow"}</span>
            </button>

            <button
              onClick={() => setActiveStep(0)}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Reset Flow"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive Architecture Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;

            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative border ${
                  isActive
                    ? `bg-[#0d131f] ${step.border} shadow-xl scale-[1.02]`
                    : "bg-[#090d16] border-slate-800/80 hover:border-slate-700 opacity-80 hover:opacity-100"
                }`}
              >
                {/* Active Indicator Pulse */}
                {isActive && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active</span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl ${step.bg} border ${step.border}`}>
                    <Icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[11px] font-mono text-blue-400">
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed min-h-[60px] mb-4">
                  {step.desc}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 font-mono text-[11px]">
                  <span className="text-slate-500">Telemetry:</span>
                  <span className={`font-bold ${step.color}`}>{step.metric}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Active Step Inspector Panel */}
        <div className="rounded-2xl bg-[#0d131f] border border-slate-800 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <h4 className="text-lg font-bold text-white font-mono">
                System Inspector: {steps[activeStep].title}
              </h4>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
              <span>Service Component:</span>
              <span className="text-blue-400 font-semibold bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                {steps[activeStep].service}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-slate-300">
            <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1.5">
              <div className="text-blue-400 font-bold">Protocols & Security</div>
              <div className="text-slate-400">gRPC Binary, REST APIs, OAuth 2.0, JWT Tokens, CSRF Protection.</div>
            </div>

            <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1.5">
              <div className="text-emerald-400 font-bold">Persistence & Caching</div>
              <div className="text-slate-400">PostgreSQL, Redis In-Memory Cache, MySQL, MongoDB, SQLAlchemy ORM.</div>
            </div>

            <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1.5">
              <div className="text-indigo-400 font-bold">Orchestration & DevOps</div>
              <div className="text-slate-400">Docker Containers, GitHub Actions CI/CD, Jenkins, AWS Infrastructure.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}