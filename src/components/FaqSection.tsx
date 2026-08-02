import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  Search, 
  MessageSquare, 
  CheckCircle2, 
  Building2, 
  Globe, 
  Clock, 
  Send 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RECRUITER_FAQS } from '../data/faqData';
import { useLanguage } from '../context/LanguageContext';
import { Tilt3DCard } from './Tilt3DCard';

export const FaqSection: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const [openId, setOpenId] = useState<string | null>(RECRUITER_FAQS[0].id); // First item open by default
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFaqs = RECRUITER_FAQS.filter((faq) => {
    const question = isEn ? faq.questionEn : faq.questionFr;
    const answer = isEn ? faq.answerEn : faq.answerFr;
    const matchesSearch =
      question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-slate-50/70 dark:bg-slate-900/40 relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>{isEn ? 'Recruiter FAQ & Quick Insights' : 'FAQ Recrutement & Informations'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isEn ? 'Frequently Asked Questions' : 'Foire Aux Questions'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {isEn
              ? 'Answers to key questions recruiters and engineering managers frequently ask regarding availability, stack, relocation, and contract terms.'
              : 'Réponses claires aux questions fréquemment posées par les recruteurs et responsables techniques concernant la disponibilité, le stack, la mobilité et les contrats.'}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isEn
                  ? 'Search FAQ (e.g., availability, RAG, remote, relocation)...'
                  : 'Rechercher dans la FAQ (ex: disponibilité, RAG, remote, mobilité)...'
              }
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: isEn ? 'All Questions' : 'Toutes les Questions' },
              { id: 'availability', label: isEn ? 'Availability' : 'Disponibilité' },
              { id: 'technical', label: isEn ? 'Tech Stack' : 'Stack Technique' },
              { id: 'recruitment', label: isEn ? 'Relocation & Remote' : 'Mobilité & Remote' },
              { id: 'collaboration', label: isEn ? 'Process & Agility' : 'Process & Agilité' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === tab.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
              <HelpCircle className="w-10 h-10 mx-auto mb-3 text-slate-400 opacity-60" />
              <p className="font-semibold text-sm">
                {isEn ? 'No questions matched your search.' : 'Aucune question ne correspond à votre recherche.'}
              </p>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              const question = isEn ? faq.questionEn : faq.questionFr;
              const answer = isEn ? faq.answerEn : faq.answerFr;
              const badge = isEn ? faq.badgeEn : faq.badgeFr;

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? 'bg-white dark:bg-slate-900 border-blue-500/50 shadow-xl ring-1 ring-blue-500/30'
                      : 'bg-white/80 dark:bg-slate-900/80 border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
                  }`}
                >
                  {/* Accordion Header / Button */}
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none group"
                  >
                    <div className="space-y-1.5 flex-1">
                      {badge && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[11px] font-extrabold border border-blue-500/20">
                          <Sparkles className="w-3 h-3 text-blue-500" />
                          {badge}
                        </span>
                      )}
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {question}
                      </h3>
                    </div>

                    <div
                      className={`p-2 rounded-xl shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'bg-blue-600 text-white rotate-180'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Content with Motion Animation */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-650 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-4 space-y-3">
                          <p>{answer}</p>
                          <div className="flex items-center gap-2 pt-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span>
                              {isEn
                                ? 'Verified candidate response • Ready to elaborate in interview'
                                : 'Réponse vérifiée • Disponible pour détailler de vive voix'}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* CTA Contact box below FAQ */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-bold">
              {isEn ? 'Have another specific question?' : 'Vous avez une autre question spécifique ?'}
            </h4>
            <p className="text-xs sm:text-sm text-blue-100">
              {isEn
                ? 'Contact me directly via email or LinkedIn for immediate answers.'
                : 'Contactez-moi directement par email ou sur LinkedIn pour un échange rapide.'}
            </p>
          </div>

          <a
            href="#contact"
            className="px-5 py-3 rounded-2xl bg-white text-blue-600 hover:bg-blue-50 text-xs sm:text-sm font-black shadow-lg transition-all flex items-center gap-2 shrink-0"
          >
            <Send className="w-4 h-4 text-blue-600" />
            <span>{isEn ? 'Contact Me' : 'Me Contacter'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
