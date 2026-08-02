import React, { useState } from 'react';
import { Award, CheckCircle2, ShieldCheck, Sparkles, ExternalLink, Calendar, MapPin, Eye, Layout } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certification } from '../types';
import { Tilt3DCard } from './Tilt3DCard';
import { useLanguage } from '../context/LanguageContext';

export const CertificationsSection: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>{isEn ? 'Official Accreditations & Certifications' : 'Accréditations & Certifications Officieuses'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isEn ? 'Certified Software & UI/UX Expertise' : 'Expertise UI/UX & Design Certifiée'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {isEn
              ? 'Mastery of user-centered methodology, interactive prototyping, and universal web accessibility standards (WCAG 2.1).'
              : 'La maîtrise des méthodes centrées utilisateur, du prototypage interactif aux normes d\'accessibilité universelle (WCAG 2.1).'}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert) => {
            const certTitle = isEn && cert.titleEn ? cert.titleEn : cert.title;
            const certPeriod = isEn && cert.periodEn ? cert.periodEn : cert.period;

            return (
              <Tilt3DCard
                key={cert.id}
                className="h-full"
                glowAccent="emerald"
                magneticStrength={12}
              >
                <div className="h-full p-8 rounded-3xl bg-slate-50/85 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl flex flex-col justify-between space-y-6 group hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:bg-white/95 dark:hover:bg-slate-900/95 transition-all duration-300">
                  
                  <div className="space-y-4">
                    {/* Top Bar with Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20">
                        <ShieldCheck className="w-4 h-4" />
                        <span>{isEn ? 'Verified Certification' : 'Certification Vérifiée'}</span>
                      </div>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {certPeriod}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 pt-2">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 p-0.5 shadow-lg shrink-0">
                        <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-emerald-400">
                          <Layout className="w-7 h-7" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                          {certTitle}
                        </h3>
                        <div className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2 mt-1">
                          <span>{cert.issuer}</span>
                          {cert.location && (
                            <span className="text-xs font-normal text-slate-500 flex items-center gap-1">
                              • <MapPin className="w-3 h-3 text-emerald-500" /> {cert.location}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {isEn ? 'Certified Skills' : 'Compétences Certifiées'}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>{isEn ? 'WCAG Compliance & Design System' : 'Conformité WCAG & Design System'}</span>
                    </span>

                    <button
                      onClick={() => setActiveCert(cert)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors shadow-md"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{isEn ? 'View Badge' : 'Consulter le Badge'}</span>
                    </button>
                  </div>

                </div>
              </Tilt3DCard>
            );
          })}
        </div>

        {/* Certificate Modal */}
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 text-white text-center">
              
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
              >
                ✕
              </button>

              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-500 p-1 shadow-2xl flex items-center justify-center">
                <ShieldCheck className="w-12 h-12 text-slate-950" />
              </div>

              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                  {isEn ? 'Official Verified Certification' : 'Certification Officielle Vérifiée'}
                </span>
                <h3 className="text-2xl font-black mt-3">
                  {isEn && activeCert.titleEn ? activeCert.titleEn : activeCert.title}
                </h3>
                <p className="text-sm font-bold text-slate-400 mt-1">
                  {activeCert.issuer} • {isEn && activeCert.periodEn ? activeCert.periodEn : activeCert.period}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 space-y-2 text-left">
                <div className="font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>{isEn ? 'Applied Skills & Outcomes:' : 'Savoir-faire Appliqué :'}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeCert.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-slate-900 text-emerald-300 font-mono text-[11px]">
                      ✓ {s}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActiveCert(null)}
                className="w-full py-3 rounded-xl bg-emerald-600 font-bold text-sm hover:bg-emerald-700"
              >
                {isEn ? 'Close Preview' : 'Fermer l\'Aperçu'}
              </button>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
