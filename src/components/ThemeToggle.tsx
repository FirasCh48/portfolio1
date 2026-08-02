import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      id="theme_toggle_btn"
      type="button"
      onClick={toggleTheme}
      aria-label="Changer le mode d'affichage"
      title={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
      className={`p-2 sm:p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow transition-all active:scale-95 flex items-center justify-center select-none ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? 'dark' : 'light'}
          initial={{ y: -10, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 10, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-amber-400/20" />
          ) : (
            <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700 fill-slate-700/10" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

