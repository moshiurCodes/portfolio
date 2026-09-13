import { Cpu, ArrowRight } from 'lucide-react';
import { AutomationVisual } from './AutomationVisual';

export const AutomationSection: React.FC = () => {
  return (
    <section 
      id="automation-engine" 
      aria-label="AI Automation Engine Pipeline"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto relative"
    >
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#111111]/90 to-[#0C0C0C]/90 border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        
        {/* Ambient background glow inside panel */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Left Explanatory Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
              <Cpu size={13} className="text-cyan-400 animate-spin" />
              <span>CORE ARCHITECTURE</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white tracking-tight leading-tight mb-4">
              Autonomous AI Workflow Engine
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
              A breakdown of how I architect end-to-end intelligent automation pipelines. From multi-source webhook ingestion and LLM-powered cognitive reasoning to deterministic n8n logic orchestration and real-time CRM updates.
            </p>

            <div className="grid grid-cols-2 gap-4 w-full mb-6">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-cyan-400 font-mono font-bold text-lg">99.8%</div>
                <div className="text-xs text-zinc-400 mt-0.5">Execution Reliability</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-blue-400 font-mono font-bold text-lg">&lt; 250ms</div>
                <div className="text-xs text-zinc-400 mt-0.5">Webhook Trigger Latency</div>
              </div>
            </div>

            <a
              href="#services"
              className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Explore All 8 Automation Capabilities</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Right Live Simulation Pipeline Column */}
          <div className="lg:col-span-6 flex justify-center">
            <AutomationVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
