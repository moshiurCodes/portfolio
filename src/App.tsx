import { useEffect, useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { BackgroundBeams } from './components/BackgroundBeams';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AutomationSection } from './components/AutomationSection';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Education } from './components/Education';
import { Services } from './components/Services';
import { DeveloperTerminal } from './components/DeveloperTerminal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [ambientPos, setAmbientPos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Smooth percentage calculation for subtle ambient glow
      const xPercent = (e.clientX / window.innerWidth) * 100;
      const yPercent = (e.clientY / window.innerHeight) * 100;
      setAmbientPos({ x: xPercent, y: yPercent });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-cyan-500/20 selection:text-cyan-200 overflow-x-hidden">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Interactive Background Particle Constellation Network */}
      <BackgroundBeams />

      {/* Background Subtle Grid Texture */}
      <div 
        className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0" 
        aria-hidden="true" 
      />

      {/* Dynamic Ambient Background Light Follower */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-40 transition-all duration-700 ease-out"
        style={{
          background: `radial-gradient(650px circle at ${ambientPos.x}% ${ambientPos.y}%, rgba(6, 182, 212, 0.08), transparent 70%)`
        }}
        aria-hidden="true"
      />

      {/* Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main id="main-content">
          <Hero />
          <AutomationSection />
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Education />
          <Services />
          <DeveloperTerminal />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
