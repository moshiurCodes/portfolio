import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import type { ProjectItem } from '../types';
import { ProjectVisual } from './ProjectVisuals';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Max 6 degrees tilt
    const rX = ((y - centerY) / centerY) * -6;
    const rY = ((x - centerX) / centerX) * 6;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className="w-full"
    >
      <motion.div
        animate={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          scale: isHovered && !isMobile ? 1.01 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.2 }}
        className={`relative p-6 sm:p-8 rounded-2xl bg-[#0E0E0E]/90 border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
          isHovered
            ? 'border-cyan-500/40 shadow-2xl shadow-cyan-500/5'
            : 'border-white/10 hover:border-white/20'
        }`}
      >
        {/* Subtle top ambient glow inside card */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

        {/* Top Header Row */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08] z-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-cyan-400 px-2.5 py-1 rounded bg-cyan-950/30 border border-cyan-500/30">
              {project.number}
            </span>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <GithubIcon size={15} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} details`}
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 text-zinc-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Two-column content layout inside card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center z-10">
          
          {/* Left info column */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors mb-3 leading-snug">
                {project.title}
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-col gap-1.5 mb-6">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 size={13} className="text-cyan-400 mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Tags & CTA Buttons */}
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-zinc-300 group-hover:border-cyan-500/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white transition-all"
                >
                  <GithubIcon size={14} />
                  <span>GitHub Repository</span>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600/30 to-cyan-500/30 hover:from-blue-600/50 hover:to-cyan-500/50 border border-cyan-500/40 text-cyan-200 transition-all"
                >
                  <ExternalLink size={14} />
                  <span>View Project</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Visual Schematic */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <ProjectVisual workflowType={project.workflowType} />
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};
