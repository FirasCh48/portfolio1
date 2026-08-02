import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ZoomIn, Printer, Globe, Loader2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';
import { useLanguage } from '../context/LanguageContext';
import { ProfilePhotoModal } from './ProfilePhotoModal';
import { exportToPdf } from '../utils/pdfExport';

interface HeaderProps {
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [isExportingPdf, setIsExportingPdf] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const handleExportPdf = async () => {
    if (isExportingPdf) return;
    setIsExportingPdf(true);
    try {
      await exportToPdf();
    } catch (e) {
      console.error(e);
    } finally {
      setIsExportingPdf(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.certifications, href: '#certifications' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.hackathons, href: '#hackathons' },
    { label: t.nav.blog, href: '#blog' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main_header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:border-slate-800/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Header Brand & Interactive Avatar */}
        <div className="flex items-center gap-3">
          {/* Clickable Profile Avatar */}
          <button
            type="button"
            onClick={() => setProfileModalOpen(true)}
            className="relative group p-[2px] rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 shadow-md hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
            title="Cliquer pour agrandir la photo de profil de Firas"
          >
            <div className="w-10 h-10 rounded-[14px] overflow-hidden bg-slate-950 relative">
              <img
                src="/src/assets/images/me.png"
                alt="Firas CHABBOUH"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {/* Zoom Hover Overlay */}
              <div className="absolute inset-0 bg-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ZoomIn className="w-4 h-4 text-white drop-shadow-md" />
              </div>
            </div>
            {/* Online Indicator Badge */}
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" />
          </button>

          {/* Name & Title */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex flex-col group"
            id="header_logo"
          >
            <span className="font-extrabold text-lg text-slate-900 dark:text-white tracking-tight leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Firas CHABBOUH
            </span>
            <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
              Software & AI Engineer
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/60 dark:bg-slate-800/60 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-700/80 transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Print / Export PDF Button */}
          <button
            type="button"
            onClick={handleExportPdf}
            disabled={isExportingPdf}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700/80 transition-all shadow-sm hover:shadow active:scale-[0.98] disabled:opacity-50"
            title={language === 'fr' ? 'Imprimer / Exporter tout le portfolio en PDF' : 'Print / Export entire portfolio as PDF'}
          >
            {isExportingPdf ? (
              <Loader2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 animate-spin" />
            ) : (
              <Printer className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            )}
            <span className="hidden md:inline">
              {isExportingPdf
                ? (language === 'fr' ? 'Génération PDF...' : 'Generating PDF...')
                : (language === 'fr' ? 'Imprimer / Exporter PDF' : 'Print / Export PDF')}
            </span>
          </button>

          {/* Resume (CV) Button */}
          <button
            id="header_cv_btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all"
            title="Consulter le CV de Firas CHABBOUH"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{t.nav.resume}</span>
          </button>

          {/* Premium Dark / Light Mode Toggle */}
          <ThemeToggle />

          {/* Mobile menu toggle button */}
          <button
            id="mobile_menu_toggle_btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer (Sandwich Menu) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-4 backdrop-blur-xl animate-in slide-in-from-top duration-300 shadow-2xl">
          {/* Navigation Grid */}
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-200/80 dark:border-slate-800/80">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-between group"
              >
                <span>{item.label}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 group-hover:bg-white transition-all" />
              </a>
            ))}
          </div>

          {/* Quick Controls & Preferences Section */}
          <div className="space-y-3 pt-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center justify-between px-1">
              <span>{language === 'fr' ? 'Configuration & Exportation' : 'Settings & Export'}</span>
            </div>

            {/* Language Switcher Bar (FR / EN) */}
            <div className="p-2 rounded-2xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between gap-2 shadow-sm">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200 pl-2 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{language === 'fr' ? 'Langue (Language)' : 'Language (Langue)'}</span>
              </span>

              <div className="flex items-center gap-1 bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-inner">
                <button
                  type="button"
                  onClick={() => setLanguage('fr')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all flex items-center gap-1.5 ${
                    language === 'fr'
                      ? 'bg-blue-600 text-white shadow-md scale-105'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                  title="Passer en Français"
                >
                  <span>🇫🇷</span>
                  <span>FR</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all flex items-center gap-1.5 ${
                    language === 'en'
                      ? 'bg-blue-600 text-white shadow-md scale-105'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                  title="Switch to English"
                >
                  <span>🇬🇧</span>
                  <span>EN</span>
                </button>
              </div>
            </div>

            {/* Print PDF & CV Resume Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleExportPdf();
                }}
                disabled={isExportingPdf}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-bold border border-slate-200 dark:border-slate-700 transition-all shadow-sm hover:shadow active:scale-[0.98] disabled:opacity-50"
              >
                {isExportingPdf ? (
                  <Loader2 className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-spin" />
                ) : (
                  <Printer className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                )}
                <span>
                  {isExportingPdf
                    ? (language === 'fr' ? 'Génération PDF...' : 'Generating PDF...')
                    : (language === 'fr' ? 'Imprimer / Exporter PDF' : 'Print / Export PDF')}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs font-extrabold shadow-md hover:shadow-blue-500/20 transition-all active:scale-[0.98]"
              >
                <FileText className="w-4 h-4" />
                <span>{t.nav.resume}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enlarged Interactive Profile Photo Modal */}
      <ProfilePhotoModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        onOpenResume={onOpenResume}
      />
    </header>
  );
};
