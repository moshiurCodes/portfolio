import React from 'react';
import { motion } from 'framer-motion';
import { History } from 'lucide-react';
import { JOURNEY_TIMELINE } from '../data/portfolioData';

export const Journey: React.FC = () => {
  return (
    <section 
      id="journey" 
      aria-label="Professional & Academic Journey"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto relative"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-cyan-400 text-xs font-mono mb-3">
          <History size={13} />
          <span>PROGRESSION & TIMELINE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white tracking-tight">
          My Journey
        </h2>
        <p className="text-zinc-400 text-sm mt-2 max-w-xl">
          A chronicle of my academic path in Computer Science and my evolution toward specialized AI workflow engineering.
        </p>
      </div>

      {/* Vertical Animated Timeline with Traveling Beam */}
      <div className="relative border-l border-white/10 ml-4 sm:ml-32 md:ml-40 pl-6 sm:pl-10 flex flex-col gap-12">
        {/* Continuous Traveling Light Pulse on Timeline Line */}
        <motion.div
          className="absolute left-[-1px] top-0 w-[2px] h-24 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
          animate={{
            top: ['0%', '100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

        {JOURNEY_TIMELINE.map((item, idx) => {
          const isPresent = item.year === 'Present';

          return (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Year Label on the left for medium+ screens */}
              <div className="hidden sm:block absolute -left-36 md:-left-44 top-1 text-right w-28 md:w-32">
                <span className={`font-mono font-bold text-sm sm:text-base ${
                  isPresent ? 'text-cyan-400' : 'text-zinc-400 group-hover:text-zinc-200'
                }`}>
                  {item.year}
                </span>
                <div className="text-[10px] font-mono text-zinc-400 uppercase">
                  {item.tag}
                </div>
              </div>

              {/* Timeline Node Circle with Glow Ring */}
              <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                isPresent
                  ? 'bg-cyan-400 border-[#0A0A0A] ring-4 ring-cyan-500/30 shadow-lg shadow-cyan-400/50'
                  : 'bg-[#161616] border-white/30 group-hover:border-cyan-400 group-hover:bg-cyan-500/20'
              }`} />

              {/* Mobile Year Tag */}
              <div className="sm:hidden flex items-center gap-2 mb-2">
                <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                  isPresent ? 'bg-cyan-950/40 text-cyan-300 border border-cyan-500/30' : 'bg-white/5 text-zinc-300'
                }`}>
                  {item.year}
                </span>
                <span className="text-[10px] font-mono text-zinc-400">
                  {item.tag}
                </span>
              </div>

              {/* Content Box */}
              <motion.div 
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] group-hover:bg-white/[0.04] border border-white/10 group-hover:border-cyan-500/30 transition-all duration-200 shadow-sm group-hover:shadow-cyan-500/5"
              >
                <h3 className="font-heading font-semibold text-white text-base sm:text-lg mb-2 flex items-center justify-between">
                  <span>{item.title}</span>
                  {isPresent && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 animate-pulse">
                      CURRENT FOCUS
                    </span>
                  )}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
