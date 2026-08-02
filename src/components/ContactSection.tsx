import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Sparkles, CheckCircle2, MessageSquare, Copy, Check, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Tilt3DCard } from './Tilt3DCard';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const { language } = useLanguage();

  const isEn = language === 'en';

  const whatsappNumber = PERSONAL_INFO.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    isEn
      ? 'Hello Firas, I saw your portfolio and would like to get in touch.'
      : 'Bonjour Firas, j\'ai vu votre portfolio et j\'aimerais entrer en contact avec vous.'
  )}`;

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-4 h-4" />
            <span>{isEn ? 'Contact & Collaborations' : 'Contact & Collaborations'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isEn ? "Let's Discuss Your Next Project" : 'Discutons de Votre Prochain Projet'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {isEn
              ? 'Have an ambitious project in Full-Stack development, Generative AI (RAG), or interactive 3D? Reach out directly.'
              : 'Vous avez un projet ambitieux en développement Full-Stack, IA générative (RAG) ou 3D interactive ? Contactez-moi directement.'}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          
          {/* Direct Info Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Cards */}
            <Tilt3DCard>
              <div className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
                <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-500" />
                  <span>{isEn ? 'Direct Contact Info' : 'Coordonnées Directes'}</span>
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="relative group/email flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-slate-800 dark:text-slate-200 transition-all border border-transparent hover:border-blue-500/30">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="flex items-center gap-4 flex-1 min-w-0"
                    >
                      <div className="p-2.5 rounded-xl bg-blue-600 text-white shadow-md shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="truncate">
                        <div className="text-xs font-semibold text-slate-400">{isEn ? 'Professional Email' : 'Email Professionnel'}</div>
                        <div className="font-bold truncate group-hover/email:text-blue-600 dark:group-hover/email:text-blue-400">
                          {PERSONAL_INFO.email}
                        </div>
                      </div>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className={`ml-2 p-2 rounded-xl transition-all duration-200 shrink-0 flex items-center gap-1.5 text-xs font-bold ${
                        emailCopied
                          ? 'bg-emerald-500 text-white shadow-md'
                          : 'bg-slate-200/70 dark:bg-slate-700/70 hover:bg-blue-600 hover:text-white text-slate-600 dark:text-slate-300'
                      }`}
                      title={isEn ? 'Copy email' : 'Copier l\'email'}
                    >
                      {emailCopied ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span className="hidden sm:inline">{isEn ? 'Copied!' : 'Copié !'}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span className="hidden sm:inline">{isEn ? 'Copy' : 'Copier'}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="relative group/wa flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-slate-800 dark:text-slate-200 transition-all border border-transparent hover:border-emerald-500/30">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 flex-1 min-w-0"
                    >
                      <div className="p-2.5 rounded-xl bg-emerald-600 text-white shadow-md shrink-0 group-hover/wa:scale-110 transition-transform">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div className="truncate">
                        <div className="text-xs font-semibold text-slate-400">{isEn ? 'WhatsApp / Phone' : 'WhatsApp / Téléphone'}</div>
                        <div className="font-bold truncate group-hover/wa:text-emerald-600 dark:group-hover/wa:text-emerald-400 flex items-center gap-2">
                          <span>{PERSONAL_INFO.phone}</span>
                        </div>
                      </div>
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-2 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-200 shrink-0 flex items-center gap-1.5 text-xs font-bold shadow-md hover:shadow-lg"
                      title={isEn ? 'Open in WhatsApp' : 'Ouvrir sur WhatsApp'}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className="hidden sm:inline">WhatsApp</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                    <div className="p-2.5 rounded-xl bg-purple-600 text-white shadow-md">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400">{isEn ? 'Location' : 'Localisation'}</div>
                      <div className="font-bold">{PERSONAL_INFO.location}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs font-bold text-blue-600 hover:underline"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:underline"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>

              </div>
            </Tilt3DCard>

          </div>

          {/* Interactive Contact Form Column */}
          <div className="lg:col-span-7">
            <Tilt3DCard>
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
                
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                      {isEn ? 'Message Sent Successfully!' : 'Message Envoyé avec Succès !'}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                      {isEn
                        ? 'Thank you for your message. Firas will review your request and get back to you shortly.'
                        : 'Merci pour votre message. Firas prendra connaissance de votre demande dans les plus brefs délais.'}
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', company: '', message: '' });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-200"
                    >
                      {isEn ? 'Send Another Message' : 'Envoyer un autre message'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white">
                      {isEn ? 'Send a Direct Message' : 'Envoyer un Message Direct'}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                          {isEn ? 'Your Name *' : 'Votre Nom / Prénom *'}
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={isEn ? 'e.g. John Doe' : 'ex: Jean Dupont'}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                          {isEn ? 'Email Address *' : 'Adresse Email *'}
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="recruitment@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        {isEn ? 'Company / Organization (Optional)' : 'Entreprise / Organisation (Optionnel)'}
                      </label>
                      <input
                        type="text"
                        placeholder={isEn ? 'Company name' : 'Nom de votre société'}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        {isEn ? 'Your Message / Project Opportunity *' : 'Votre Message / Proposition de Collaboration *'}
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder={isEn ? 'Describe your proposal or question...' : 'Détaillez votre proposition ou votre question...'}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-extrabold text-sm shadow-xl hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isEn ? 'Send Message' : 'Transmettre le Message'}</span>
                    </button>
                  </form>
                )}

              </div>
            </Tilt3DCard>
          </div>

        </div>

      </div>

      {/* Email Copy Success Toast Feedback Notification */}
      <AnimatePresence>
        {emailCopied && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="fixed bottom-6 left-6 z-[120] flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-slate-900/95 dark:bg-slate-950/95 text-white border border-slate-700/80 dark:border-slate-800 shadow-2xl backdrop-blur-xl pointer-events-auto max-w-sm"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 shadow-inner">
              <Check className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex flex-col pr-1">
              <span className="text-xs font-extrabold text-white flex items-center gap-1.5">
                <span>{language === 'fr' ? 'Email Copié avec Succès !' : 'Email Copied Successfully!'}</span>
              </span>
              <span className="text-[11px] text-slate-300 font-medium leading-tight">
                {PERSONAL_INFO.email}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
