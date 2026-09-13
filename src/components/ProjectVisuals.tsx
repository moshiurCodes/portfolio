import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Workflow, 
  Sparkles, 
  Database, 
  Mail, 
  Bot, 
  FileText, 
  Search, 
  CheckCircle2, 
  Compass, 
  Milestone, 
  ShoppingBag, 
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Activity
} from 'lucide-react';

interface ProjectVisualProps {
  workflowType: 'crm' | 'multi-agent' | 'roadmap' | 'marketplace';
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ workflowType }) => {
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStepIdx((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  switch (workflowType) {
    case 'crm':
      return (
        <div className="w-full h-full min-h-[220px] sm:min-h-[250px] p-4 rounded-2xl bg-[#0C0C0C] border border-white/10 flex flex-col justify-between font-mono text-xs overflow-hidden relative group/vis">
          {/* Background grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
          
          {/* Top visual toolbar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5 z-10">
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Workflow size={13} className="text-cyan-400" />
              <span className="text-[11px] text-zinc-300">n8n_crm_pipeline.flow</span>
            </div>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Webhook Active
            </span>
          </div>

          {/* Node Flow Diagram with Active Step Highlight */}
          <div className="grid grid-cols-4 gap-2 my-auto z-10 py-3">
            {/* Step 1 */}
            <motion.div 
              animate={{ scale: activeStepIdx === 0 ? 1.05 : 1 }}
              className={`p-2.5 rounded-xl border flex flex-col items-center text-center transition-colors ${
                activeStepIdx === 0 ? 'bg-amber-500/20 border-amber-500/50 shadow-sm shadow-amber-500/20' : 'bg-white/[0.03] border-white/10'
              }`}
            >
              <Database size={16} className="text-amber-400 mb-1.5" />
              <span className="text-[10px] font-medium text-zinc-200">Webhook</span>
              <span className="text-[9px] text-zinc-400 mt-0.5">Payload</span>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              animate={{ scale: activeStepIdx === 1 ? 1.05 : 1 }}
              className={`p-2.5 rounded-xl border flex flex-col items-center text-center transition-colors ${
                activeStepIdx === 1 ? 'bg-cyan-500/20 border-cyan-500/50 shadow-sm shadow-cyan-500/20' : 'bg-white/[0.03] border-white/10'
              }`}
            >
              <Sparkles size={16} className="text-cyan-400 mb-1.5" />
              <span className="text-[10px] font-medium text-cyan-200">AI Parser</span>
              <span className="text-[9px] text-cyan-400/80 mt-0.5">GPT-4o</span>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              animate={{ scale: activeStepIdx === 2 ? 1.05 : 1 }}
              className={`p-2.5 rounded-xl border flex flex-col items-center text-center transition-colors ${
                activeStepIdx === 2 ? 'bg-blue-500/20 border-blue-500/50 shadow-sm shadow-blue-500/20' : 'bg-white/[0.03] border-white/10'
              }`}
            >
              <Database size={16} className="text-blue-400 mb-1.5" />
              <span className="text-[10px] font-medium text-blue-200">Airtable</span>
              <span className="text-[9px] text-blue-400/80 mt-0.5">CRM Sync</span>
            </motion.div>

            {/* Step 4 */}
            <motion.div 
              animate={{ scale: activeStepIdx === 3 ? 1.05 : 1 }}
              className={`p-2.5 rounded-xl border flex flex-col items-center text-center transition-colors ${
                activeStepIdx === 3 ? 'bg-emerald-500/20 border-emerald-500/50 shadow-sm shadow-emerald-500/20' : 'bg-white/[0.03] border-white/10'
              }`}
            >
              <Mail size={16} className="text-emerald-400 mb-1.5" />
              <span className="text-[10px] font-medium text-emerald-200">Dispatch</span>
              <span className="text-[9px] text-emerald-400/80 mt-0.5">Slack/Mail</span>
            </motion.div>
          </div>

          {/* Bottom Terminal Output */}
          <div className="p-2 rounded-lg bg-black/70 border border-white/10 text-[10px] text-zinc-300 flex items-center justify-between z-10">
            <span className="flex items-center gap-1.5">
              <Activity size={12} className="text-cyan-400 animate-pulse" />
              Status: 200 OK • Lead Qualified
            </span>
            <span className="text-cyan-400 font-medium">Synced In 140ms</span>
          </div>
        </div>
      );

    case 'multi-agent':
      return (
        <div className="w-full h-full min-h-[220px] sm:min-h-[250px] p-4 rounded-2xl bg-[#0C0C0C] border border-white/10 flex flex-col justify-between font-mono text-xs overflow-hidden relative group/vis">
          <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5 z-10">
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Bot size={13} className="text-blue-400" />
              <span className="text-[11px] text-zinc-300">multi_agent_orchestrator.py</span>
            </div>
            <span className="text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30 flex items-center gap-1">
              <RefreshCw size={10} className="animate-spin text-cyan-400" />
              3 Agents Active
            </span>
          </div>

          {/* Agents Coordination Layout */}
          <div className="flex flex-col gap-2 my-auto z-10 py-2">
            <div className={`flex items-center justify-between p-2 rounded-xl border transition-all ${
              activeStepIdx % 3 === 0 ? 'bg-cyan-500/15 border-cyan-500/40 shadow-sm shadow-cyan-500/10' : 'bg-white/[0.03] border-white/10'
            }`}>
              <div className="flex items-center gap-2">
                <Search size={14} className="text-cyan-400" />
                <span className="text-[11px] text-zinc-200">Agent 1: Deep Web Researcher</span>
              </div>
              <span className="text-[9px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Active</span>
            </div>

            <div className={`flex items-center justify-between p-2 rounded-xl border transition-all ${
              activeStepIdx % 3 === 1 ? 'bg-cyan-500/15 border-cyan-500/40 shadow-sm shadow-cyan-500/10' : 'bg-white/[0.03] border-white/10'
            }`}>
              <div className="flex items-center gap-2">
                <Bot size={14} className="text-cyan-400" />
                <span className="text-[11px] text-cyan-200">Agent 2: Fact Synthesis Engine</span>
              </div>
              <span className="text-[9px] text-cyan-300 bg-cyan-500/20 px-1.5 py-0.5 rounded animate-pulse">Reasoning</span>
            </div>

            <div className={`flex items-center justify-between p-2 rounded-xl border transition-all ${
              activeStepIdx % 3 === 2 ? 'bg-cyan-500/15 border-cyan-500/40 shadow-sm shadow-cyan-500/10' : 'bg-white/[0.03] border-white/10'
            }`}>
              <div className="flex items-center gap-2">
                <FileText size={14} className="text-blue-400" />
                <span className="text-[11px] text-zinc-300">Agent 3: Structured Markdown Export</span>
              </div>
              <span className="text-[9px] text-zinc-400 bg-white/5 px-1.5 py-0.5 rounded">Queued</span>
            </div>
          </div>

          {/* Footer */}
          <div className="p-2 rounded-lg bg-black/70 border border-white/10 text-[10px] text-zinc-300 flex items-center justify-between z-10">
            <span>&gt; Synthesis: 4 sources verified</span>
            <span className="text-blue-400 font-medium">LLM Connected</span>
          </div>
        </div>
      );

    case 'roadmap':
      return (
        <div className="w-full h-full min-h-[220px] sm:min-h-[250px] p-4 rounded-2xl bg-[#0C0C0C] border border-white/10 flex flex-col justify-between font-mono text-xs overflow-hidden relative group/vis">
          <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5 z-10">
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Compass size={13} className="text-cyan-400" />
              <span className="text-[11px] text-zinc-300">ai_career_roadmap_gen.n8n</span>
            </div>
            <span className="text-[10px] text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/30">
              Gemini + OpenAI
            </span>
          </div>

          {/* Milestone timeline graph */}
          <div className="flex items-center justify-between gap-2 my-auto z-10 py-3">
            <motion.div 
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              className="flex-1 p-2 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col items-center text-center"
            >
              <span className="text-[9px] text-zinc-400">Phase 01</span>
              <span className="text-[10px] text-white font-medium mt-1">Core Tech</span>
              <CheckCircle2 size={12} className="text-emerald-400 mt-1.5" />
            </motion.div>

            <ArrowRight size={12} className="text-cyan-400 animate-pulse" />

            <motion.div 
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              className="flex-1 p-2 rounded-xl bg-cyan-500/15 border border-cyan-500/40 flex flex-col items-center text-center shadow-sm shadow-cyan-500/10"
            >
              <span className="text-[9px] text-cyan-400 font-semibold">Phase 02</span>
              <span className="text-[10px] text-cyan-200 font-medium mt-1">AI Agents</span>
              <Sparkles size={12} className="text-cyan-400 mt-1.5 animate-spin" />
            </motion.div>

            <ArrowRight size={12} className="text-zinc-500" />

            <motion.div 
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
              className="flex-1 p-2 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col items-center text-center"
            >
              <span className="text-[9px] text-zinc-400">Phase 03</span>
              <span className="text-[10px] text-white font-medium mt-1">Production</span>
              <Milestone size={12} className="text-blue-400 mt-1.5" />
            </motion.div>
          </div>

          {/* Output summary */}
          <div className="p-2 rounded-lg bg-black/70 border border-white/10 text-[10px] text-zinc-300 flex items-center justify-between z-10">
            <span>&gt; Career: AI Automation Engineer</span>
            <span className="text-cyan-400 font-medium">100% Adaptive</span>
          </div>
        </div>
      );

    case 'marketplace':
      return (
        <div className="w-full h-full min-h-[220px] sm:min-h-[250px] p-4 rounded-2xl bg-[#0C0C0C] border border-white/10 flex flex-col justify-between font-mono text-xs overflow-hidden relative group/vis">
          <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5 z-10">
            <div className="flex items-center gap-1.5 text-zinc-400">
              <ShoppingBag size={13} className="text-amber-400" />
              <span className="text-[11px] text-zinc-300">campusmart_db_schema.sql</span>
            </div>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              PHP + MySQL Live
            </span>
          </div>

          {/* Marketplace UI mockup items */}
          <div className="grid grid-cols-3 gap-2 my-auto z-10 py-2">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="p-2 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col hover:border-cyan-500/30 transition-colors"
            >
              <span className="text-[10px] text-zinc-200 font-medium truncate">CSE Textbooks</span>
              <span className="text-[9px] text-cyan-400 mt-1">৳ 450 • Verified</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="p-2 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col hover:border-cyan-500/30 transition-colors"
            >
              <span className="text-[10px] text-zinc-200 font-medium truncate">Fx-991EX Calc</span>
              <span className="text-[9px] text-cyan-400 mt-1">৳ 1200 • Sold</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="p-2 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col hover:border-cyan-500/30 transition-colors"
            >
              <span className="text-[10px] text-zinc-200 font-medium truncate">Study Lamp</span>
              <span className="text-[9px] text-cyan-400 mt-1">৳ 350 • Active</span>
            </motion.div>
          </div>

          {/* DB Status */}
          <div className="p-2 rounded-lg bg-black/70 border border-white/10 text-[10px] text-zinc-300 flex items-center justify-between z-10">
            <span className="flex items-center gap-1">
              <ShieldCheck size={11} className="text-emerald-400" /> DIU Student Auth Portal
            </span>
            <span className="text-amber-400 font-medium">Database Synced</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};
