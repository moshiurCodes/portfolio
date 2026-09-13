import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileDown, 
  Sparkles, 
  MessageSquareShare 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';
import { GlowingAvatarPortal } from './GlowingAvatarPortal';

export const Hero: React.FC = () => {
  const roles = PERSONAL_INFO.rotatingRoles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  // Typewriter effect
  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(90);

        if (displayText === fullText) {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(45);

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(400);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  const handleScrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      aria-label="Hero Section"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Animated Neon Ambient Lights */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[650px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[350px] sm:w-[500px] h-[300px] bg-gradient-to-bl from-blue-600/15 via-cyan-500/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column — Text & CTAs */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left z-10"
        >
          {/* Eyebrow Status Pill */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-sm shadow-cyan-500/20">
              <Sparkles size={13} className="text-cyan-400 animate-spin" />
              <span>{PERSONAL_INFO.eyebrow}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{PERSONAL_INFO.status}</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-lg sm:text-xl font-mono text-zinc-300 font-medium mb-1">
            Hello, It's Me
          </h2>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading tracking-tight text-white mb-3">
            {PERSONAL_INFO.name}
          </h1>

          {/* Animated Typewriter Title */}
          <div className="flex items-center text-xl sm:text-3xl font-heading font-bold text-zinc-200 mb-5 min-h-[44px]">
            <span className="mr-2">And I'm a</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              {displayText}
            </span>
            <span className="w-0.5 h-7 sm:h-8 bg-cyan-400 inline-block ml-1 animate-pulse" />
          </div>

          {/* Supporting Bio */}
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mb-8">
            {PERSONAL_INFO.supportingText}
          </p>

          {/* Glowing Circular Social Icons */}
          <div className="flex items-center gap-3.5 mb-8">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-11 h-11 rounded-full bg-[#111111] border border-white/15 hover:border-cyan-400 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-11 h-11 rounded-full bg-[#111111] border border-white/15 hover:border-cyan-400 flex items-center justify-center text-zinc-300 hover:text-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={PERSONAL_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="w-11 h-11 rounded-full bg-[#111111] border border-white/15 hover:border-blue-400 flex items-center justify-center text-zinc-300 hover:text-blue-400 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <FacebookIcon size={18} />
            </a>
          </div>

          {/* Action CTAs with Neon Glow */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.55)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <FileDown size={17} />
              <span>Download CV</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollToSection(e, 'contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-cyan-500/40 hover:border-cyan-400 text-white font-semibold text-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <MessageSquareShare size={17} className="text-cyan-400" />
              <span>Let's Talk</span>
            </a>

            <a
              href="#projects"
              onClick={(e) => handleScrollToSection(e, 'projects')}
              className="inline-flex items-center gap-1.5 px-4 py-3.5 text-zinc-400 hover:text-cyan-300 text-sm font-medium transition-colors ml-1"
            >
              <span>View Projects</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </motion.div>

        {/* Right Column — Glowing Animated Profile Portal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center items-center relative py-4"
        >
          <GlowingAvatarPortal />
        </motion.div>

      </div>
    </section>
  );
};
