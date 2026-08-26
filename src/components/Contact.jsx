import React, { useState, useEffect } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  Clock, 
  CheckCircle2,
  Inbox,
  Database,
  Trash2
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import confetti from "canvas-confetti";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inboxOpen, setInboxOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  // Load saved messages from Local Database
  useEffect(() => {
    try {
      const saved = localStorage.getItem("aman_portfolio_inbox");
      if (saved) {
        setMessages(JSON.parse(saved));
      }
    } catch (e) {}
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setSubmitting(true);

    const newMessage = {
      id: Date.now(),
      name: formData.name,
      email: formData.email || "Not provided",
      subject: formData.subject || "General Inquiry",
      message: formData.message,
      timestamp: new Date().toLocaleString(),
    };

    // 1. Save to persistent Database storage
    try {
      const existing = JSON.parse(localStorage.getItem("aman_portfolio_inbox") || "[]");
      const updated = [newMessage, ...existing];
      localStorage.setItem("aman_portfolio_inbox", JSON.stringify(updated));
      setMessages(updated);
    } catch (err) {}

    // 2. Send via Web3Forms API directly to amangurauli@gmail.com
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f71e5454-ca7d-41a4-9273-0ff7e6f66304", // Public direct form handler
          name: formData.name,
          email: formData.email || "portfolio-visitor@aman.dev",
          subject: `[Portfolio Inquiry] ${formData.subject || "Message from " + formData.name}`,
          message: `Sender Name: ${formData.name}\nSender Email: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`,
          to_email: personalInfo.email,
        }),
      });
    } catch (apiError) {
      // Fallback: Mailto draft
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || `Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }

    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.7 }
      });
    } catch (err) {}

    setSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleClearInbox = () => {
    localStorage.removeItem("aman_portfolio_inbox");
    setMessages([]);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono text-cyan-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>DIRECT INQUIRY & CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Discuss Opportunities & Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Send a message directly to my inbox (<span className="text-cyan-400 font-mono">amangurauli@gmail.com</span>) or reach out via phone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Inbox Inspector (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl bg-[#0c1222] border border-slate-800 p-6 sm:p-7 shadow-xl space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white font-mono">
                  Direct Channels
                </h3>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active
                </span>
              </div>

              {/* Email Card */}
              <div className="p-4 bg-slate-900/70 border border-slate-800 rounded-xl flex items-center justify-between gap-3 group hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-slate-400 font-mono">Email Address</div>
                    <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 truncate block">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 bg-slate-900/70 border border-slate-800 rounded-xl flex items-center justify-between gap-3 group hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Direct Phone</div>
                    <a href={`tel:${personalInfo.phone}`} className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 bg-slate-900/70 border border-slate-800 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Location & Availability</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {personalInfo.location} • Open to Remote & Onsite
                  </div>
                </div>
              </div>

              {/* Database Inbox Button */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <button
                  onClick={() => setInboxOpen(!inboxOpen)}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 hover:underline"
                >
                  <Database className="w-3.5 h-3.5" />
                  <span>Database Message Log ({messages.length})</span>
                </button>
                <span className="text-slate-500">Response: &lt; 2-4 hrs</span>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="grid grid-cols-2 gap-3.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-[#0c1222] border border-slate-800 hover:border-slate-700 flex items-center gap-3 group transition-colors"
              >
                <GithubIcon className="w-5 h-5 text-slate-400 group-hover:text-white" />
                <div>
                  <div className="text-xs font-bold text-white font-mono">GitHub</div>
                  <div className="text-[11px] text-slate-400 font-mono">@Amanvarma2231</div>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-[#0c1222] border border-slate-800 hover:border-cyan-500/40 flex items-center gap-3 group transition-colors"
              >
                <LinkedinIcon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400" />
                <div>
                  <div className="text-xs font-bold text-white font-mono">LinkedIn</div>
                  <div className="text-[11px] text-slate-400 font-mono">aman-v</div>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-2xl bg-[#0c1222] border border-slate-800 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white font-mono">
                  Send Direct Message
                </h3>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
                  Delivered to Inbox
                </span>
              </div>
              
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Your message is sent directly to <span className="text-cyan-300 font-mono font-semibold">amangurauli@gmail.com</span> and recorded in the database.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-950/40 border border-emerald-800/60 rounded-xl text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Message Delivered Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Thank you! Your message has been sent directly to <span className="text-cyan-400 font-mono font-bold">amangurauli@gmail.com</span>. Aman will reply shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 text-xs font-mono bg-slate-900 border border-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Recruiter / Engineering Manager"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-600 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Subject / Role Focus</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Backend Engineer Project"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-600 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Aman, we reviewed your work on VLM Studio & NLPCRM and would like to schedule an interview..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-200 active:scale-98 ${
                      submitting ? "opacity-75 cursor-wait" : ""
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? "Delivering Message..." : "Send Message to Aman"}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Persistent Message Log Inspector (Toggleable) */}
            {inboxOpen && (
              <div className="p-5 rounded-2xl bg-[#0a0f1d] border border-slate-800 shadow-xl space-y-3 animate-in fade-in duration-200 font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold">
                    <Database className="w-4 h-4" />
                    <span>Local Database Message Log ({messages.length})</span>
                  </div>
                  {messages.length > 0 && (
                    <button
                      onClick={handleClearInbox}
                      className="text-rose-400 hover:text-rose-300 flex items-center gap-1 text-[11px]"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Clear Log</span>
                    </button>
                  )}
                </div>

                {messages.length === 0 ? (
                  <div className="p-4 text-center text-slate-500 text-xs">
                    No messages in local database yet. Send a test message above!
                  </div>
                ) : (
                  <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                    {messages.map((m) => (
                      <div key={m.id} className="p-3 bg-slate-950/80 border border-slate-800/80 rounded-xl space-y-1">
                        <div className="flex justify-between items-baseline text-white">
                          <span className="font-bold text-cyan-300">{m.name} ({m.email})</span>
                          <span className="text-[10px] text-slate-500">{m.timestamp}</span>
                        </div>
                        <div className="text-slate-400 text-[11px] font-semibold">{m.subject}</div>
                        <p className="text-slate-300 text-xs font-sans whitespace-pre-wrap">{m.message}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}