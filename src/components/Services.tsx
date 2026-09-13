import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Workflow, 
  Cpu, 
  Bot, 
  Network, 
  Server, 
  Database, 
  Zap, 
  Layers
} from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return Sparkles;
      case 'Workflow': return Workflow;
      case 'Cpu': return Cpu;
      case 'Bot': return Bot;
      case 'Network': return Network;
      case 'Server': return Server;
      case 'Database': return Database;
      case 'Zap': return Zap;
      default: return Layers;
    }
  };

  return (
    <section 
      id="services" 
      aria-label="Engineering Services & Solutions"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto relative"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-14">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-cyan-400 text-xs font-mono mb-3">
          <Layers size={13} />
          <span>CAPABILITIES & INTEGRATIONS</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white tracking-tight">
          What I Can Build
        </h2>
        <p className="text-zinc-400 text-sm mt-2 max-w-xl">
          Modular automation solutions, autonomous agents, and backend integrations designed to operate reliably within modern tech ecosystems.
        </p>
      </div>

      {/* 8 Compact Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SERVICES_DATA.map((service, idx) => {
          const Icon = getServiceIcon(service.icon);
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              whileHover={{ y: -3 }}
              className="p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-cyan-500/30 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon size={18} />
                </div>
                <h3 className="font-heading font-semibold text-white text-base mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {service.explanation}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span>MODULE 0{service.id}</span>
                <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">Ready</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
