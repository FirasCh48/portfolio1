import React, { useEffect, useState, useRef } from 'react';
import { FolderGit2, Trophy, Award, Cpu, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface StatItem {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  labelFr: string;
  labelEn: string;
  subFr: string;
  subEn: string;
  icon: React.ElementType;
  gradient: string;
  bgGlow: string;
  borderColor: string;
  textColor: string;
  targetId: string;
}

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const CountUpNumber: React.FC<CountUpProps> = ({ end, duration = 2200, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Smooth ease-out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-black tracking-tight">
      {prefix}{count}{suffix}
    </span>
  );
};

export const AchievementsSection: React.FC = () => {
  const { language } = useLanguage();

  const stats: StatItem[] = [
    {
      id: 'stat-projects',
      value: 12,
      suffix: '+',
      labelFr: 'Projets Réalisés',
      labelEn: 'Projects Completed',
      subFr: 'Full-Stack, IA & 3D Web',
      subEn: 'Full-Stack, AI & 3D Web',
      icon: FolderGit2,
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      bgGlow: 'bg-blue-500/10 dark:bg-blue-500/15 group-hover:bg-blue-500/20',
      borderColor: 'border-blue-500/20 dark:border-blue-500/30 group-hover:border-blue-500/50',
      textColor: 'text-blue-600 dark:text-blue-400',
      targetId: '#projects'
    },
    {
      id: 'stat-hackathons',
      value: 7,
      suffix: '',
      labelFr: 'Hackathons & Challenges',
      labelEn: 'Hackathons & Challenges',
      subFr: 'UNICEF, Elife, S-Drive...',
      subEn: 'UNICEF, Elife, S-Drive...',
      icon: Trophy,
      gradient: 'from-amber-500 via-orange-500 to-amber-600',
      bgGlow: 'bg-amber-500/10 dark:bg-amber-500/15 group-hover:bg-amber-500/20',
      borderColor: 'border-amber-500/20 dark:border-amber-500/30 group-hover:border-amber-500/50',
      textColor: 'text-amber-600 dark:text-amber-400',
      targetId: '#hackathons'
    },
    {
      id: 'stat-certifications',
      value: 5,
      suffix: '+',
      labelFr: 'Certifications Verifiées',
      labelEn: 'Verified Certifications',
      subFr: 'UI/UX, UXcel, IA & Dev',
      subEn: 'UI/UX, UXcel, AI & Dev',
      icon: Award,
      gradient: 'from-emerald-500 via-teal-500 to-emerald-600',
      bgGlow: 'bg-emerald-500/10 dark:bg-emerald-500/15 group-hover:bg-emerald-500/20',
      borderColor: 'border-emerald-500/20 dark:border-emerald-500/30 group-hover:border-emerald-500/50',
      textColor: 'text-emerald-600 dark:text-emerald-400',
      targetId: '#certifications'
    },
    {
      id: 'stat-skills',
      value: 25,
      suffix: '+',
      labelFr: 'Tech Stack & Outils',
      labelEn: 'Tech Stack & Tools',
      subFr: 'React, Spring, Python, Unity',
      subEn: 'React, Spring, Python, Unity',
      icon: Cpu,
      gradient: 'from-purple-600 via-violet-600 to-indigo-600',
      bgGlow: 'bg-purple-500/10 dark:bg-purple-500/15 group-hover:bg-purple-500/20',
      borderColor: 'border-purple-500/20 dark:border-purple-500/30 group-hover:border-purple-500/50',
      textColor: 'text-purple-600 dark:text-purple-400',
      targetId: '#skills'
    }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="achievements" className="relative z-20 py-10 -mt-8 sm:-mt-12 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Floating Glass Strip Container */}
        <div className="relative rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-xl backdrop-blur-2xl p-6 sm:p-8 overflow-hidden">
          
          {/* Subtle Ambient Background Lighting */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Header Badge */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200/60 dark:border-slate-800/60">
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400">
                <Sparkles className="w-4 h-4 animate-pulse" />
              </span>
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                {language === 'fr' ? 'Chiffres Clés & Impact Métier' : 'Key Metrics & Performance'}
              </span>
            </div>

            <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 hidden sm:inline-flex items-center gap-1">
              <span>{language === 'fr' ? 'Cliquez pour explorer' : 'Click card to navigate'}</span>
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>

          {/* Grid of 4 Count-Up Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.a
                  key={stat.id}
                  href={stat.targetId}
                  onClick={(e) => handleScrollTo(e, stat.targetId)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`group relative p-5 rounded-2xl bg-slate-50/60 dark:bg-slate-950/40 border ${stat.borderColor} ${stat.bgGlow} transition-all duration-300 flex flex-col justify-between space-y-4 cursor-pointer shadow-sm hover:shadow-lg`}
                >
                  <div className="flex items-center justify-between">
                    {/* Icon Container */}
                    <div className={`p-3 rounded-xl bg-gradient-to-tr ${stat.gradient} text-white shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Arrow Indicator */}
                    <div className="p-1.5 rounded-full bg-slate-200/50 dark:bg-slate-800/50 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white group-hover:bg-slate-300 dark:group-hover:bg-slate-700 transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    {/* Animated Counter */}
                    <div className={`text-3xl sm:text-4xl font-extrabold ${stat.textColor} tracking-tight`}>
                      <CountUpNumber end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                    </div>

                    {/* Label */}
                    <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {language === 'fr' ? stat.labelFr : stat.labelEn}
                    </div>

                    {/* Subtitle */}
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {language === 'fr' ? stat.subFr : stat.subEn}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
