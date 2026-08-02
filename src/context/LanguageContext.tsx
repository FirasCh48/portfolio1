import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';

export type Language = 'fr' | 'en';

export interface Translations {
  nav: {
    home: string;
    projects: string;
    skills: string;
    certifications: string;
    experience: string;
    hackathons: string;
    blog: string;
    faq: string;
    contact: string;
    resume: string;
  };
  header: {
    role: string;
  };
  common: {
    switchLang: string;
    downloadCV: string;
    contactMe: string;
    viewProjects: string;
  };
}

const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      home: 'Accueil',
      projects: 'Projets',
      skills: 'Compétences',
      certifications: 'Certifications',
      experience: 'Expérience',
      hackathons: 'Hackathons',
      blog: 'Blog Tech',
      faq: 'FAQ',
      contact: 'Contact',
      resume: 'Mon CV',
    },
    header: {
      role: 'Software & AI Engineer',
    },
    common: {
      switchLang: 'Changer en Anglais',
      downloadCV: 'Consulter le CV',
      contactMe: 'Me Contacter',
      viewProjects: 'Explorer Projets',
    },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      skills: 'Skills',
      certifications: 'Certifications',
      experience: 'Experience',
      hackathons: 'Hackathons',
      blog: 'Tech Blog',
      faq: 'FAQ',
      contact: 'Contact',
      resume: 'My CV',
    },
    header: {
      role: 'Software & AI Engineer',
    },
    common: {
      switchLang: 'Switch to French',
      downloadCV: 'View Resume',
      contactMe: 'Contact Me',
      viewProjects: 'Explore Projects',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('firas_portfolio_lang');
    if (saved === 'fr' || saved === 'en') return saved;
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('fr') ? 'fr' : 'en';
  });

  const [toastInfo, setToastInfo] = useState<{ lang: Language; key: number } | null>(null);

  useEffect(() => {
    localStorage.setItem('firas_portfolio_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (!toastInfo) return;
    const timer = setTimeout(() => {
      setToastInfo(null);
    }, 3200);
    return () => clearTimeout(timer);
  }, [toastInfo]);

  const setLanguage = (lang: Language) => {
    if (lang !== language) {
      setLanguageState(lang);
      setToastInfo({ lang, key: Date.now() });
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === 'fr' ? 'en' : 'fr';
    setLanguageState(nextLang);
    setToastInfo({ lang: nextLang, key: Date.now() });
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: translations[language],
      }}
    >
      {children}

      {/* Floating Language Switch Toast Notification */}
      <AnimatePresence>
        {toastInfo && (
          <motion.div
            key={toastInfo.key}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="fixed bottom-6 right-6 z-[120] flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-slate-900/95 dark:bg-slate-950/95 text-white border border-slate-700/80 dark:border-slate-800 shadow-2xl backdrop-blur-xl pointer-events-auto max-w-sm"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center text-lg shrink-0 shadow-inner">
              {toastInfo.lang === 'fr' ? '🇫🇷' : '🇬🇧'}
            </div>
            <div className="flex flex-col pr-1">
              <span className="text-xs font-extrabold text-white flex items-center gap-1.5">
                <span>{toastInfo.lang === 'fr' ? 'Langue mise à jour' : 'Language Updated'}</span>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              </span>
              <span className="text-[11px] text-slate-300 font-medium leading-tight">
                {toastInfo.lang === 'fr'
                  ? 'Le contenu du portfolio est maintenant en Français.'
                  : 'Portfolio content has been updated to English.'}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
