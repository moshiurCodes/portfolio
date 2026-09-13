import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

export const GlowingAvatarPortal: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center p-4 select-none">
      
      {/* 1. Outermost Ambient Neon Glow */}
      <div className="absolute w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

      {/* 2. Outermost Thin Circular Frame */}
      <div className="relative w-68 h-68 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border border-white/[0.08] flex items-center justify-center">
        
        {/* Secondary Concentric Thin Ring */}
        <div className="absolute inset-3 rounded-full border border-cyan-500/10" />

        {/* 3. Spinning Neon Gradient Arc (The Exact Glowing Ring from the Example) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-5 rounded-full p-[5px] sm:p-[6px]"
          style={{
            background: 'conic-gradient(from 0deg, #06B6D4 0%, #10B981 35%, transparent 70%, transparent 100%)',
          }}
        >
          {/* Blur Layer behind the ring to create the intense neon light bloom */}
          <div 
            className="absolute inset-0 rounded-full blur-md opacity-80"
            style={{
              background: 'conic-gradient(from 0deg, #06B6D4 0%, #10B981 35%, transparent 70%, transparent 100%)',
            }}
          />

          {/* Mask / Inner cutout to make it a hollow glowing ring */}
          <div className="relative w-full h-full rounded-full bg-[#080808]" />
        </motion.div>

        {/* 4. Counter-rotating Subtle Secondary Accent Arc */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-8 rounded-full p-[2px] opacity-40 pointer-events-none"
          style={{
            background: 'conic-gradient(from 180deg, #2563EB 0%, #06B6D4 40%, transparent 80%)',
          }}
        >
          <div className="w-full h-full rounded-full bg-transparent" />
        </motion.div>

        {/* 5. Deep 3D Inset Bezel & Shadow Base */}
        <div className="absolute inset-7 sm:inset-8 rounded-full bg-[#0A0A0A] border-2 border-white/[0.06] shadow-[inset_0_0_25px_rgba(0,0,0,0.9),0_0_20px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden">
          
          {/* Inner Vignette / Radial Glow on backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(6,182,212,0.15),transparent_70%)] pointer-events-none z-10" />

          {/* 6. Centered Portrait Photo */}
          <div className="relative w-[86%] h-[86%] rounded-full overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover object-top hover:scale-108 transition-transform duration-700 select-none"
            />
            {/* Subtle inner dark gradient bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </div>
  );
};
