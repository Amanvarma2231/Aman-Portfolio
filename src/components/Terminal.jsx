import React, { useState, useRef, useEffect } from "react";
import { 
  Terminal as TerminalIcon, 
  X, 
  Minus, 
  Square, 
  CornerDownLeft, 
  Sparkles, 
  Copy, 
  Check,
  Maximize2
} from "lucide-react";
import confetti from "canvas-confetti";
import { personalInfo, projectsData, experienceData, skillsData, certificationsData } from "../data/portfolioData";

export default function Terminal({ isOpen, onClose, onOpenResume }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      type: "system",
      content: "Welcome to Aman Varma'\''s Interactive Developer Shell [v2.6.0-x86_64].\nType '\'help'\'' to see available commands or '\'projects'\'' to view live deployments."
    }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    setCommandHistory(prev => [...prev, cmdStr]);
    setHistoryIndex(-1);

    const newHistory = [...history, { type: "user", content: `$ ${cmdStr}` }];

    switch (trimmed) {
      case "help":
        newHistory.push({
          type: "output",
          content: `Available Commands:
  � help           - Show this help menu
  � whoami / about - Learn about Aman Varma
  � projects       - List featured full-stack & AI projects
  � skills         - View technical skills & domain expertise
  � experience     - View professional internship & achievements
  � certs          - List SAP & technical certifications
  � curl <url>     - Test live API endpoint simulation
  � cat resume     - View formatted resume
  � contact        - Get email, phone, and social handles
  � sudo hire-me   - Fast-track interview authorization ??
  � clear          - Clear terminal screen`
        });
        break;

      case "whoami":
      case "about":
        newHistory.push({
          type: "output",
          content: `${personalInfo.name} | ${personalInfo.headline}\nLocation: ${personalInfo.location}\nEmail: ${personalInfo.email}\nStatus: ${personalInfo.status}\n\n${personalInfo.bio}`
        });
        break;

      case "projects":
        newHistory.push({
          type: "output",
          content: projectsData.map((p, i) => 
            `[${i + 1}] ${p.title}\n    Tech: ${p.badges.join(", ")}\n    Demo: ${p.liveDemo}\n    Repo: ${p.github}\n    Desc: ${p.description}\n`
          ).join("\n")
        });
        break;

      case "skills":
        newHistory.push({
          type: "output",
          content: `Backend & APIs:
  ${skillsData.backend.map(s => `� ${s.name} (${s.level}): ${s.desc}`).join("\n  ")}

AI & Data Engineering:
  ${skillsData.aiData.map(s => `� ${s.name} (${s.level}): ${s.desc}`).join("\n  ")}

Databases:
  ${skillsData.databases.map(s => `� ${s.name} (${s.level}): ${s.desc}`).join("\n  ")}

Testing & DevOps:
  ${skillsData.testingDevOps.map(s => `� ${s.name} (${s.level}): ${s.desc}`).join("\n  ")}

SAP & Core:
  ${skillsData.sapAndLanguages.map(s => `� ${s.name} (${s.level}): ${s.desc}`).join("\n  ")}`
        });
        break;

      case "experience":
        newHistory.push({
          type: "output",
          content: experienceData.map(exp => 
            `?? ${exp.role} @ ${exp.company} (${exp.period} | ${exp.location})\n` +
            exp.achievements.map(a => `   - ${a}`).join("\n")
          ).join("\n\n")
        });
        break;

      case "certs":
      case "certifications":
        newHistory.push({
          type: "output",
          content: certificationsData.map(c => 
            `?? ${c.title} (${c.issuer} - ${c.date})\n` +
            c.items.map(i => `   � ${i}`).join("\n")
          ).join("\n\n")
        });
        break;

      case "contact":
        newHistory.push({
          type: "output",
          content: `Direct Contact Channels:
  ?? Email:    ${personalInfo.email}
  ?? Phone:    ${personalInfo.phone}
  ?? LinkedIn: ${personalInfo.linkedin}
  ?? GitHub:   ${personalInfo.github}`
        });
        break;

      case "cat resume":
      case "resume":
        newHistory.push({
          type: "output",
          content: "?? Opening formatted resume preview window..."
        });
        onOpenResume?.();
        break;

      case "sudo hire-me":
      case "hire":
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (e) {}
        newHistory.push({
          type: "output",
          content: `?? [PERMISSION GRANTED: ROOT ACCESS]
Congratulations! You'\''ve unlocked an exceptional software engineer.
Ready to build resilient backend architectures and AI-driven platforms.
Let'\''s connect directly: ${personalInfo.email} | ${personalInfo.phone}`
        });
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        if (trimmed.startsWith("curl")) {
          newHistory.push({
            type: "output",
            content: `HTTP/2 200 OK
server: render-edge
content-type: application/json; charset=utf-8
x-ratelimit-remaining: 99
date: ${new Date().toUTCString()}

{
  "status": "healthy",
  "service": "NLPCRM AI Microservice",
  "model": "Qwen-2.5-7B-Instruct",
  "auth": "OAuth 2.0 / CSRF Protected",
  "active_workers": 4,
  "average_latency_ms": 142.6,
  "maintainer": "Aman Varma (amangurauli@gmail.com)"
}`
          });
        } else {
          newHistory.push({
            type: "output",
            content: `command not found: ${trimmed}. Type '\'help'\'' to see all supported commands.`
          });
        }
    }

    setHistory(newHistory);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < commandHistory.length) {
          setHistoryIndex(nextIndex);
          setInput(commandHistory[nextIndex]);
        } else {
          setHistoryIndex(-1);
          setInput("");
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const commands = ["help", "whoami", "projects", "skills", "experience", "certs", "cat resume", "contact", "sudo hire-me", "clear", "curl https://npcrm-1.onrender.com/api/health"];
      const match = commands.find(c => c.startsWith(input.trim().toLowerCase()));
      if (match) {
        setInput(match);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl h-[580px] bg-[#090d16] border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200 font-mono text-xs sm:text-sm"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <button 
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 transition-opacity"
              title="Close"
            />
            <button 
              onClick={() => setHistory([])}
              className="w-3 h-3 rounded-full bg-amber-500 hover:opacity-80 transition-opacity"
              title="Clear"
            />
            <button 
              className="w-3 h-3 rounded-full bg-emerald-500 hover:opacity-80 transition-opacity"
              title="Maximize"
            />
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>aman@fedora:~ (bash)</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-500 hidden sm:inline">Press Esc to close</span>
            <button 
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Quick Hint Bar */}
        <div className="px-4 py-1.5 bg-slate-900/60 border-b border-slate-800/80 flex flex-wrap gap-2 text-[11px] text-slate-400">
          <span className="text-slate-500">Quick suggestions:</span>
          {["help", "projects", "skills", "experience", "sudo hire-me"].map((cmd) => (
            <button
              key={cmd}
              onClick={(e) => {
                e.stopPropagation();
                handleCommand(cmd);
              }}
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono leading-relaxed select-text">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.type === "user" ? (
                <div className="text-cyan-400 font-bold flex items-center gap-1.5">
                  <span>aman@portfolio:~$</span>
                  <span className="text-white">{item.content.replace(/^\$\s*/, "")}</span>
                </div>
              ) : (
                <pre className="text-slate-300 whitespace-pre-wrap font-mono text-xs sm:text-sm pl-2 border-l-2 border-slate-800/80">
                  {item.content}
                </pre>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Line */}
        <div className="p-3 bg-slate-950/90 border-t border-slate-800 flex items-center gap-2">
          <span className="text-cyan-400 font-bold select-none text-xs sm:text-sm">aman@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs sm:text-sm placeholder-slate-600"
            placeholder="Type command ('help', 'projects', 'sudo hire-me')..."
            autoFocus
          />
          <button
            onClick={() => handleCommand(input)}
            className="p-1.5 text-slate-400 hover:text-cyan-400 bg-slate-900 rounded border border-slate-800"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
