import React from 'react';
import { Languages } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();
  const isEnglish = language === 'en';

  return (
    <div
      id="language_toggle_container"
      className={`relative inline-flex items-center h-10 p-1 rounded-full bg-slate-200/80 dark:bg-slate-800/90 border border-slate-300/70 dark:border-slate-700/70 shadow-inner select-none ${className}`}
    >
      {/* Sliding Active Indicator Pill */}
      <motion.div
        className="absolute top-1 bottom-1 w-11 rounded-full bg-blue-600 text-white shadow-md flex items-center justify-center font-black text-xs"
        initial={false}
        animate={{
          left: isEnglish ? 'calc(100% - 3rem)' : '0.25rem',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
      />

      {/* French Option Button */}
      <button
        type="button"
        onClick={() => setLanguage('fr')}
        className={`relative z-10 w-11 h-8 flex items-center justify-center font-extrabold text-xs transition-colors rounded-full ${
          !isEnglish ? 'text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
        title="Passer en Français (FR)"
      >
        <span className="flex items-center gap-1">
          <span>🇫🇷</span>
          <span>FR</span>
        </span>
      </button>

      {/* English Option Button */}
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`relative z-10 w-11 h-8 flex items-center justify-center font-extrabold text-xs transition-colors rounded-full ${
          isEnglish ? 'text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
        title="Switch to English (EN)"
      >
        <span className="flex items-center gap-1">
          <span>🇬🇧</span>
          <span>EN</span>
        </span>
      </button>
    </div>
  );
};
