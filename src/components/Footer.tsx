import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#080808] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Brand & Attribution */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Terminal size={12} />
            </div>
            <span className="font-heading font-semibold text-white text-sm">
              Md Moshiur Rahman
            </span>
          </div>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <p className="text-xs text-zinc-400">
            Designed & Built by Md Moshiur Rahman
          </p>
        </div>

        {/* Center Live Opportunity Indicator */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-zinc-300">Available for opportunities</span>
        </div>

        {/* Right Social Links & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-zinc-400 hover:text-cyan-400 transition-colors"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={PERSONAL_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="text-zinc-400 hover:text-blue-400 transition-colors"
            >
              <FacebookIcon size={16} />
            </a>
          </div>

          <div className="w-px h-4 bg-white/10" />

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};
