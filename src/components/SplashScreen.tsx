import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FastForward, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface SplashScreenProps {
  onFinish?: () => void;
  duration?: number; // default 4000ms
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  onFinish,
  duration = 4000,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingStep, setLoadingStep] = useState('Initializing Core System...');

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct < 25) {
        setLoadingStep('Initializing 3D Canvas & WebGL...');
      } else if (pct < 55) {
        setLoadingStep('Loading AI Modules & Gemini Models...');
      } else if (pct < 85) {
        setLoadingStep('Fetching Engineering Projects & Showcase...');
      } else {
        setLoadingStep('Portfolio Ready!');
      }

      if (elapsed >= duration) {
        clearInterval(interval);
        handleDismiss();
      }
    }, 30);

    return () => clearInterval(interval);
  }, [duration]);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onFinish) onFinish();
    }, 600);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-slate-950 text-white flex flex-col justify-between p-6 sm:p-12 overflow-hidden select-none no-print"
        >
          {/* Deep Space / Grid Background matching Portfolio Theme */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Dark Gradient Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/40 via-slate-950 to-slate-950" />
            
            {/* Cyber Grid Lines */}
            <div 
              className="absolute inset-0 opacity-[0.07]" 
              style={{
                backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            />

            {/* Glowing Ambient Orbs */}
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

            {/* Floating Star / Tech Particles */}
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-blue-400/80 animate-pulse"
                style={{
                  top: `${(i * 19) % 100}%`,
                  left: `${(i * 29) % 100}%`,
                  width: `${(i % 3) + 1.5}px`,
                  height: `${(i % 3) + 1.5}px`,
                  opacity: 0.2 + ((i % 5) * 0.15),
                  animationDuration: `${2 + (i % 4)}s`,
                }}
              />
            ))}

            {/* Floating Cyber Geometric HUD Accents */}
            <div className="absolute top-[28%] left-[18%] w-3 h-3 border border-blue-400/50 rotate-45 animate-bounce" style={{ animationDuration: '3s' }} />
            <div className="absolute top-[35%] right-[22%] w-2 h-2 bg-cyan-400/70 rotate-12" />
            <div className="absolute bottom-[30%] left-[25%] w-5 h-0.5 bg-indigo-500/70 -rotate-45" />
            <div className="absolute bottom-[38%] right-[18%] w-3 h-3 rounded-full border border-blue-400/40" />
            <div className="absolute top-[18%] right-[28%] text-blue-400/30 font-mono text-xs">┼</div>
            <div className="absolute bottom-[22%] left-[15%] text-cyan-400/30 font-mono text-xs">◯</div>
          </div>

          {/* Top Bar - Header Meta & Skip Button */}
          <div className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto">
            <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-800/80 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase">
                FIRAS CHABBOUH // SYSTEM_INIT ({progress}%)
              </span>
            </div>

            <button
              type="button"
              onClick={handleDismiss}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/15 border border-blue-500/30 text-blue-300 hover:text-white hover:bg-blue-600/30 text-xs font-mono tracking-wider transition-all shadow-lg hover:border-blue-400 group cursor-pointer"
            >
              <span>SKIP INTRO</span>
              <FastForward className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-cyan-400" />
            </button>
          </div>

          {/* Center Glass HUD Frame - Matching Portfolio Aesthetic */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center">
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative p-8 sm:p-12 md:p-16 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-blue-500/40 shadow-[0_0_60px_rgba(37,99,235,0.2)] flex flex-col items-center justify-center max-w-2xl w-full text-center"
            >
              {/* Futuristic Corner Anchors */}
              <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-blue-400" />
              <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-blue-400" />
              <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-blue-400" />
              <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-blue-400" />

              {/* Decorative Geometric Rings */}
              <div className="absolute -top-4 -left-4 w-9 h-9 rounded-full border border-blue-400/30 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-7 h-7 rounded-full border border-cyan-400/30 pointer-events-none" />

              {/* Light Glass Diagonal Slash */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15 rounded-2xl">
                <div className="absolute top-0 right-1/4 w-16 h-full bg-gradient-to-b from-transparent via-cyan-300 to-transparent -skew-x-12" />
                <div className="absolute top-0 right-1/3 w-3 h-full bg-white -skew-x-12" />
              </div>

              {/* Top Personal Badge */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-mono font-medium tracking-widest uppercase mb-4 shadow-inner"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
                <span>{PERSONAL_INFO.name}</span>
                <span className="text-slate-500">|</span>
                <span className="text-cyan-300">PORTFOLIO</span>
              </motion.div>

              {/* Glowing Main Title */}
              <div className="relative my-2">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight font-sans text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-200 to-indigo-300 drop-shadow-[0_0_35px_rgba(56,189,248,0.7)]">
                  Port<span className="font-mono text-cyan-300 tracking-tight">folio</span>
                </h1>
                
                {/* Secondary Glitch Shadow Layer */}
                <span className="absolute right-0 top-0 text-blue-500/20 font-mono text-4xl sm:text-6xl md:text-7xl font-black pointer-events-none select-none translate-x-1 translate-y-0.5">
                  folio
                </span>
              </div>

              {/* Engineer Specialty Subtitle */}
              <p className="text-xs sm:text-sm font-mono text-slate-300 tracking-wider mt-2 max-w-md">
                Software & AI Engineer • Full-Stack & Generative AI
              </p>

              {/* Progress Bar Container */}
              <div className="w-full max-w-xs sm:max-w-md mt-7">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5 px-0.5">
                  <span className="flex items-center gap-1.5 text-cyan-300">
                    <Terminal className="w-3 h-3 text-blue-400 animate-pulse" />
                    {loadingStep}
                  </span>
                  <span className="text-blue-400 font-bold">{progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-blue-500/30 p-0.5 shadow-inner">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.9)]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Footer Bar */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-4">
            
            {/* Audio Wave Equalizer Visualizer */}
            <div className="flex items-center gap-3 bg-slate-900/60 border border-slate-800/80 backdrop-blur-md px-3.5 py-2 rounded-xl">
              <div className="flex items-end gap-1 h-4">
                {[40, 80, 50, 100, 35, 75, 90, 60, 45, 85].map((h, idx) => (
                  <motion.div
                    key={idx}
                    animate={{
                      height: [`${h * 0.25}%`, `${h}%`, `${h * 0.35}%`],
                    }}
                    transition={{
                      duration: 0.5 + (idx % 4) * 0.15,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                    className={`w-0.5 rounded-sm ${idx % 2 === 0 ? 'bg-cyan-400' : 'bg-blue-500'}`}
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="text-[11px] font-mono font-bold text-slate-200 tracking-wider">
                  ISMM MANOUBA ENGINEERING
                </p>
                <p className="text-[10px] font-mono text-cyan-400/80">
                  Interactive 3D & AI Showcase
                </p>
              </div>
            </div>

            {/* Center Brand Text */}
            <div className="text-center font-mono text-xs tracking-[0.35em] font-extrabold text-slate-300 flex items-center gap-2 uppercase">
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-blue-400">FIRAS</span>
              <span className="text-white">CHABBOUH</span>
              <span className="text-cyan-400 font-normal">LABS</span>
            </div>

            {/* Live Count Status */}
            <div className="text-right font-mono text-xs text-slate-400 bg-slate-900/60 border border-slate-800/80 backdrop-blur-md px-3.5 py-2 rounded-xl">
              LOADING // <span className="text-cyan-300 font-bold">{Math.max(0, 4 - (progress * 4 / 100)).toFixed(1)}s</span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
