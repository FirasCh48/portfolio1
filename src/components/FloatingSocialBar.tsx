import React from 'react';
import { Linkedin, Github, Facebook, MessageCircle, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const FloatingSocialBar: React.FC = () => {
  const { language } = useLanguage();

  const whatsappNumber = PERSONAL_INFO.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    language === 'fr'
      ? 'Bonjour Firas, j\'ai vu votre portfolio et j\'aimerais échanger avec vous.'
      : 'Hello Firas, I saw your portfolio and would like to connect.'
  )}`;

  const socialLinks = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: PERSONAL_INFO.linkedin,
      icon: Linkedin,
      color: 'hover:bg-[#0A66C2] hover:text-white',
      glow: 'hover:shadow-[#0A66C2]/40',
      tooltipFr: 'Suivre sur LinkedIn',
      tooltipEn: 'Connect on LinkedIn',
    },
    {
      id: 'github',
      name: 'GitHub',
      url: PERSONAL_INFO.github,
      icon: Github,
      color: 'hover:bg-slate-800 dark:hover:bg-slate-700 hover:text-white',
      glow: 'hover:shadow-slate-500/30',
      tooltipFr: 'Projets sur GitHub',
      tooltipEn: 'Repositories on GitHub',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      url: PERSONAL_INFO.facebook,
      icon: Facebook,
      color: 'hover:bg-[#1877F2] hover:text-white',
      glow: 'hover:shadow-[#1877F2]/40',
      tooltipFr: 'Suivre sur Facebook',
      tooltipEn: 'Follow on Facebook',
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      url: whatsappUrl,
      icon: MessageCircle,
      color: 'hover:bg-[#25D366] hover:text-white',
      glow: 'hover:shadow-[#25D366]/40',
      tooltipFr: 'Discuter sur WhatsApp',
      tooltipEn: 'Chat on WhatsApp',
    },
    {
      id: 'email',
      name: 'Email',
      url: `mailto:${PERSONAL_INFO.email}`,
      icon: Mail,
      color: 'hover:bg-rose-600 hover:text-white',
      glow: 'hover:shadow-rose-500/40',
      tooltipFr: 'Envoyer un Email',
      tooltipEn: 'Send an Email',
    },
  ];

  return (
    <>
      {/* Desktop Vertical Left Social Dock */}
      <aside
        aria-label="Réseaux Sociaux Desktop"
        className="fixed left-4 lg:left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-2.5 p-2 rounded-2xl bg-white/85 dark:bg-slate-900/85 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl backdrop-blur-xl"
        >
          {/* Subtle title indicator dot */}
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse my-1" title="Social Dock" />

          <div className="w-6 h-[1px] bg-slate-200 dark:bg-slate-800 mb-0.5" />

          {socialLinks.map((social) => {
            const Icon = social.icon;
            const tooltip = language === 'fr' ? social.tooltipFr : social.tooltipEn;

            return (
              <div key={social.id} className="relative group flex items-center">
                <motion.a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                  className={`p-2.5 rounded-xl text-slate-600 dark:text-slate-400 ${social.color} transition-all duration-300 shadow-sm ${social.glow} hover:shadow-lg`}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>

                {/* Tooltip on hover */}
                <div className="absolute left-full ml-3 px-3 py-1.5 rounded-xl bg-slate-900/95 dark:bg-slate-950/95 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 transform translate-x-1 group-hover:translate-x-0 shadow-xl border border-slate-700/80 dark:border-slate-800">
                  {tooltip}
                  {/* Arrow */}
                  <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-slate-900/95 dark:bg-slate-950/95 rotate-45 border-l border-b border-slate-700/80 dark:border-slate-800" />
                </div>
              </div>
            );
          })}
        </motion.div>
      </aside>

      {/* Mobile Bottom Floating Social Dock */}
      <aside
        aria-label="Réseaux Sociaux Mobile"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex md:hidden items-center max-w-[92vw]"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-1.5 p-2 rounded-full bg-slate-900/90 dark:bg-slate-900/90 text-white border border-slate-700/80 shadow-2xl backdrop-blur-xl"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 0.88 }}
                aria-label={social.name}
                className="p-2.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center justify-center min-w-[42px] min-h-[42px]"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            );
          })}
        </motion.div>
      </aside>
    </>
  );
};
