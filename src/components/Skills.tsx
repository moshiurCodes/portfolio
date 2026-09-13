import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Code2, 
  Database, 
  Wrench, 
  Check, 
  Cpu
} from 'lucide-react';
import { SKILLS_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return Bot;
      case 'Code2': return Code2;
      case 'Database': return Database;
      case 'Wrench': return Wrench;
      default: return Cpu;
    }
  };

  const categoriesList = ['All', ...SKILLS_CATEGORIES.map(c => c.category)];

  const filteredCategories = selectedCategory === 'All'
    ? SKILLS_CATEGORIES
    : SKILLS_CATEGORIES.filter(c => c.category === selectedCategory);

  return (
    <section 
      id="skills" 
      aria-label="Technical Skills Matrix"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto relative"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-cyan-400 text-xs font-mono mb-3 w-fit">
            <Cpu size={13} />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-xl">
            A comprehensive overview of the tools, languages, and automation platforms I leverage to construct reliable AI workflows and applications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 p-1 bg-white/[0.03] border border-white/10 rounded-xl">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04] border border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grouped Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCategories.map((group, groupIdx) => {
          const GroupIcon = getCategoryIcon(group.iconName);
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-5 border-b border-white/[0.08]">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <GroupIcon size={18} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white text-lg">
                      {group.category}
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-400">
                      {group.skills.length} core competencies
                    </span>
                  </div>
                </div>

                {/* Skill Chips List */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`group relative px-3.5 py-2 rounded-xl border transition-all duration-200 cursor-default flex items-center gap-2 ${
                        skill.featured
                          ? 'bg-cyan-950/20 border-cyan-500/30 hover:border-cyan-400/60 hover:bg-cyan-950/40'
                          : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.06]'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        skill.featured ? 'bg-cyan-400' : 'bg-zinc-400 group-hover:bg-zinc-200'
                      }`} />
                      <span className="text-xs font-medium text-zinc-200 group-hover:text-white">
                        {skill.name}
                      </span>

                      {/* Tooltip on hover */}
                      <div className="hidden lg:group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 rounded-lg bg-[#161616] border border-white/20 text-[11px] text-zinc-300 shadow-xl z-20 pointer-events-none text-center">
                        {skill.description}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#161616]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Verified Stack</span>
                <span className="text-cyan-400 flex items-center gap-1">
                  <Check size={12} /> Active Practice
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
