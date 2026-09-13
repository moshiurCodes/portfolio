import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ShieldCheck } from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section 
      id="education" 
      aria-label="Education and Certifications"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column — Education */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-cyan-400 text-xs font-mono mb-3 w-fit">
            <GraduationCap size={13} />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight mb-6">
            Education
          </h2>

          <div className="flex flex-col gap-4">
            {EDUCATION_DATA.map((edu, idx) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="font-heading font-semibold text-white text-lg">
                      {edu.institution}
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium mt-0.5">
                      {edu.degree}
                    </p>
                  </div>
                  <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border whitespace-nowrap ${
                    edu.status.includes('Currently')
                      ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                      : 'bg-white/5 text-zinc-400 border-white/10'
                  }`}>
                    {edu.status}
                  </span>
                </div>
                {edu.description && (
                  <p className="text-xs text-zinc-400 leading-relaxed mt-3 pt-3 border-t border-white/[0.06]">
                    {edu.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column — Certifications */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-cyan-400 text-xs font-mono mb-3 w-fit">
            <Award size={13} />
            <span>COURSEWORK & VERIFICATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight mb-6">
            Certifications
          </h2>

          <div className="flex flex-col gap-4">
            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white text-base">
                      {cert.title}
                    </h3>
                    <span className="text-[10px] font-mono text-zinc-400">
                      {cert.category}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed mt-2 pl-11">
                  {cert.focus}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
