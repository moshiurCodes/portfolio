import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Bot, 
  Layers, 
  Sparkles, 
  MapPin, 
  Code2, 
  Cpu,
  ShieldCheck,
  Terminal
} from 'lucide-react';
import { PERSONAL_INFO, ABOUT_CARDS } from '../data/portfolioData';

export const About: React.FC = () => {
  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return GraduationCap;
      case 'Bot': return Bot;
      case 'Layers': return Layers;
      case 'Sparkles': return Sparkles;
      default: return Cpu;
    }
  };

  return (
    <section 
      id="about" 
      aria-label="About Md Moshiur Rahman"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto relative"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-cyan-400 text-xs font-mono mb-3">
          <Code2 size={13} />
          <span>BACKGROUND & PROFILE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white tracking-tight">
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left Column — Portrait Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4 flex flex-col"
        >
          <div className="relative h-full rounded-3xl bg-[#0E0E0E] border border-white/10 p-5 flex flex-col justify-between overflow-hidden group">
            {/* Background ambient lighting */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Corner HUD Markers */}
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-3 pb-2 border-b border-white/[0.06]">
                <span className="flex items-center gap-1">
                  <Terminal size={11} className="text-cyan-400" />
                  id: moshiur_rahman
                </span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Verified
                </span>
              </div>

              {/* Portrait Image Frame */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 shadow-xl group-hover:border-cyan-500/40 transition-colors">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10">
                    Md Moshiur Rahman
                  </span>
                  <span className="text-cyan-400 font-semibold px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-cyan-500/30 text-[10px]">
                    CSE @ DIU
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <MapPin size={13} className="text-cyan-400" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-1 text-zinc-300">
                <ShieldCheck size={13} className="text-blue-400" />
                <span>AI Automation</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column — Biography & 4 Information Cards */}
        <div className="lg:col-span-8 flex flex-col justify-between gap-6">
          
          {/* Biography Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-7 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm text-zinc-300 text-sm sm:text-base leading-relaxed"
          >
            <p className="mb-4">
              I am an aspiring <strong className="text-white font-medium">AI Automation Engineer</strong> and Computer Science & Engineering undergraduate at <strong className="text-white font-medium">Dhaka International University</strong> in Dhaka, Bangladesh.
            </p>
            <p className="mb-4 text-zinc-400">
              My engineering focus is centered around architecting autonomous workflow pipelines, integrating powerful AI models like GPT and Gemini into business ecosystems, and automating data synchronization using visual orchestration tools like <strong className="text-cyan-400 font-mono text-xs">n8n</strong> and <strong className="text-cyan-400 font-mono text-xs">Zapier</strong>.
            </p>
            <p className="text-zinc-400">
              Alongside workflow automation, I build full-stack web applications and backend scripts with Python, JavaScript, and PHP, combining solid computer science fundamentals with modern automation paradigms.
            </p>

            <div className="mt-5 pt-4 border-t border-white/[0.08] flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-cyan-400" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap size={14} className="text-blue-400" />
                <span>B.Sc. in CSE (In Progress)</span>
              </div>
            </div>
          </motion.div>

          {/* 4 Compact Information Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ABOUT_CARDS.map((card, idx) => {
              const Icon = getCardIcon(card.icon);
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-cyan-500/30 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-heading font-semibold text-white text-sm sm:text-base mb-1">
                      {card.title}
                    </h3>
                    <div className="text-[11px] font-mono text-cyan-400 mb-1.5">
                      {card.subtitle}
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
