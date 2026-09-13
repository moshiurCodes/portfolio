import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Workflow, 
  Database, 
  Send, 
  Activity, 
  Bot, 
  RefreshCw 
} from 'lucide-react';

export const AutomationVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [processedCount, setProcessedCount] = useState<number>(1420);

  // Continuous auto-cycling animation every 2.6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
      setProcessedCount((prev) => prev + 1);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  const pipelineStages = [
    {
      id: 0,
      label: 'Input Data Stream',
      sub: 'Webhook Ingestion & Normalization',
      icon: Database,
      badge: 'Step 01 • INGEST',
      color: 'text-amber-400',
      border: 'border-amber-500/50',
      bg: 'bg-amber-500/15',
      glow: 'shadow-amber-500/20'
    },
    {
      id: 1,
      label: 'AI Reasoning Engine',
      sub: 'Gemini 1.5 & OpenAI API Pipeline',
      icon: Sparkles,
      badge: 'Step 02 • INFERENCE',
      color: 'text-cyan-400',
      border: 'border-cyan-500/60',
      bg: 'bg-cyan-500/15',
      glow: 'shadow-cyan-500/25'
    },
    {
      id: 2,
      label: 'Workflow Orchestration',
      sub: 'n8n Dynamic Logic & Branching',
      icon: Workflow,
      badge: 'Step 03 • PROCESS',
      color: 'text-blue-400',
      border: 'border-blue-500/60',
      bg: 'bg-blue-500/15',
      glow: 'shadow-blue-500/25'
    },
    {
      id: 3,
      label: 'Autonomous Dispatch',
      sub: 'Airtable CRM, Slack & Email Alert',
      icon: Send,
      badge: 'Step 04 • OUTPUT',
      color: 'text-emerald-400',
      border: 'border-emerald-500/50',
      bg: 'bg-emerald-500/15',
      glow: 'shadow-emerald-500/20'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-[540px] mx-auto p-5 sm:p-6 rounded-3xl bg-[#0E0E0E]/95 border border-white/15 shadow-2xl backdrop-blur-2xl group overflow-hidden"
    >
      {/* Dynamic Animated Gradient Mesh in Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-cyan-500/30 to-blue-600/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute -bottom-24 -left-24 w-72 h-72 bg-gradient-to-tr from-blue-600/30 to-emerald-500/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Header bar of the Automation Visual */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08] relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[11px] font-mono text-zinc-300 tracking-wider ml-1">
            ai_workflow_pipeline.n8n
          </span>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono shadow-sm shadow-emerald-500/20">
          <RefreshCw size={11} className="animate-spin text-emerald-400" />
          <span>Live Execution</span>
        </div>
      </div>

      {/* Central Interactive Node Architecture */}
      <div className="relative flex flex-col gap-3 my-2 z-10">
        {pipelineStages.map((stage, idx) => {
          const Icon = stage.icon;
          const isCurrent = activeStep === stage.id;
          
          return (
            <motion.div
              key={stage.id}
              onClick={() => setActiveStep(stage.id)}
              animate={{
                x: isCurrent ? 4 : 0,
                scale: isCurrent ? 1.02 : 1,
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className={`relative flex items-center justify-between p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                isCurrent
                  ? `${stage.bg} ${stage.border} shadow-lg ${stage.glow}`
                  : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/15'
              }`}
            >
              {/* Connector line between steps with moving pulse */}
              {idx < pipelineStages.length - 1 && (
                <div className="absolute left-7 -bottom-3 w-0.5 h-3 bg-white/10 z-0">
                  <motion.div
                    className="w-full bg-gradient-to-b from-cyan-400 to-blue-500"
                    animate={{
                      height: ['0%', '100%'],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: idx * 0.3,
                      ease: 'linear'
                    }}
                  />
                </div>
              )}

              <div className="flex items-center gap-3.5 z-10">
                <div className="relative">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all ${
                    isCurrent 
                      ? `${stage.border} ${stage.bg} ${stage.color} ring-2 ring-cyan-400/40` 
                      : 'border-white/10 bg-white/[0.03] text-zinc-400'
                  }`}>
                    <Icon size={18} />
                  </div>
                  {isCurrent && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-white tracking-wide">
                      {stage.label}
                    </span>
                    {isCurrent && (
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 animate-pulse">
                        RUNNING
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                    {stage.sub}
                  </p>
                </div>
              </div>

              <div className="text-right z-10 hidden sm:block">
                <span className={`text-[10px] font-mono px-2 py-1 rounded border transition-colors ${
                  isCurrent 
                    ? 'bg-white/10 text-cyan-200 border-cyan-400/40' 
                    : 'bg-white/[0.02] text-zinc-400 border-white/[0.06]'
                }`}>
                  {stage.badge}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400 relative z-10">
        <div className="flex items-center gap-2">
          <Activity size={13} className="text-cyan-400 animate-pulse" />
          <span>Events: <strong className="text-zinc-200">#{processedCount}</strong></span>
        </div>
        <div className="flex items-center gap-1.5 text-zinc-300">
          <Bot size={13} className="text-blue-400" />
          <span>Orchestration: <strong className="text-cyan-400">Deterministic</strong></span>
        </div>
      </div>
    </motion.div>
  );
};
