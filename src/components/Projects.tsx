import React from 'react';
import { FolderGit2, ArrowRight } from 'lucide-react';
import { PROJECTS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  return (
    <section 
      id="projects" 
      aria-label="Featured Engineering Projects"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto relative"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-cyan-400 text-xs font-mono mb-3 w-fit">
            <FolderGit2 size={13} />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-xl">
            Selected automation pipelines, multi-agent systems, and software applications built with a focus on reliability, autonomous reasoning, and clean engineering.
          </p>
        </div>

        <div>
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Explore All Repositories on GitHub</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-10">
        {PROJECTS_DATA.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
};
