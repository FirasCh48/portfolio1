import React, { useState } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, CheckCircle2, Loader2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, CERTIFICATIONS, EDUCATION, SKILL_CATEGORIES, HACKATHONS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { exportToPdf } from '../utils/pdfExport';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [isExporting, setIsExporting] = useState(false);
  const isEn = language === 'en';

  if (!isOpen) return null;

  const handlePrint = async () => {
    if (isExporting) return;
    setIsExporting(true);
    try {
      await exportToPdf('cv_dossier_content', 'Firas_Chouchene_CV_Engineering.pdf');
    } catch (e) {
      console.error(e);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 modal-print-container">
      <div id="cv_dossier_content" className="relative w-full max-w-4xl max-h-[92vh] rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-y-auto text-slate-900 dark:text-white p-6 sm:p-10 space-y-8 font-sans modal-print-content">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 print:hidden">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold">
              {isEn ? 'Engineering Dossier & Resume • Firas CHABBOUH' : "Dossier d'Ingénierie & CV • Firas CHABBOUH"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              disabled={isExporting}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-xs font-bold transition-all shadow hover:shadow-lg disabled:opacity-50"
            >
              {isExporting ? (
                <Loader2 className="w-4 h-4 animate-spin text-white" />
              ) : (
                <Download className="w-4 h-4 text-white" />
              )}
              <span>
                {isExporting
                  ? (isEn ? 'Generating PDF...' : 'Téléchargement PDF...')
                  : (isEn ? 'Download CV (PDF)' : 'Télécharger CV (PDF)')}
              </span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Header Header Block */}
        <div className="space-y-3 text-center sm:text-left border-b border-slate-200 dark:border-slate-800 pb-6">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Firas CHABBOUH
          </h1>
          <h2 className="text-lg font-bold text-blue-600 dark:text-blue-400">
            {isEn && PERSONAL_INFO.titleEn ? PERSONAL_INFO.titleEn : PERSONAL_INFO.title}
          </h2>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-600 dark:text-slate-400 pt-1">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-emerald-500" /> {PERSONAL_INFO.location}</span>
            <a href={`https://wa.me/21658711570`} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-500" /> {PERSONAL_INFO.phone}
            </a>
            <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-purple-500" /> {PERSONAL_INFO.email}</span>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue-600 hover:underline">
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-800 dark:text-slate-200 hover:underline">
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
          </div>
        </div>

        {/* Profil */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1">
            {isEn ? 'Profile & Ambition' : 'Profil & Ambition'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {isEn && PERSONAL_INFO.bioEn ? PERSONAL_INFO.bioEn : PERSONAL_INFO.bio}
          </p>
        </div>

        {/* Expérience Professionnelle */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1">
            {isEn ? 'Professional Experience' : 'Expérience Professionnelle'}
          </h3>

          <div className="space-y-5">
            {EXPERIENCES.map((exp) => {
              const roleText = isEn && exp.roleEn ? exp.roleEn : exp.role;
              const typeText = isEn && exp.typeEn ? exp.typeEn : exp.type;
              const descList = isEn && exp.descriptionEn ? exp.descriptionEn : exp.description;
              const periodText = isEn && exp.periodEn ? exp.periodEn : exp.period;
              return (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-wrap items-baseline justify-between">
                    <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                      {roleText} – <span className="text-blue-600 dark:text-blue-400">{exp.company}</span>
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{periodText} | {exp.location}</span>
                  </div>
                  <div className="text-xs font-medium text-slate-500 italic">{typeText}</div>
                  <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1 pl-1">
                    {descList.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Projets Académiques & Personnels */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1">
            {isEn ? 'Key Projects' : 'Projets Clés'}
          </h3>

          <div className="space-y-4">
            {PROJECTS.map((p) => {
              const titleText = isEn && p.titleEn ? p.titleEn : p.title;
              const subtitleText = isEn && p.subtitleEn ? p.subtitleEn : p.subtitle;
              const descText = isEn && p.descriptionEn ? p.descriptionEn : p.description;
              return (
                <div key={p.id} className="space-y-1">
                  <div className="font-extrabold text-sm text-slate-900 dark:text-white">
                    {titleText} – <span className="text-slate-600 dark:text-slate-400 font-normal">{subtitleText}</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300">{descText}</p>
                  <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400">
                    Stack: {p.techStack.join(', ')}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Formation & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              {isEn ? 'Education' : 'Formation'}
            </h3>
            {EDUCATION.map((edu) => {
              const degreeText = isEn && edu.degreeEn ? edu.degreeEn : edu.degree;
              const periodText = isEn && edu.periodEn ? edu.periodEn : edu.period;
              return (
                <div key={edu.id} className="space-y-0.5 text-xs">
                  <div className="font-bold text-slate-900 dark:text-white">{degreeText}</div>
                  <div className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</div>
                  <div className="text-slate-500">{periodText}</div>
                </div>
              );
            })}
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              {isEn ? 'Certifications' : 'Certifications'}
            </h3>
            {CERTIFICATIONS.map((cert) => {
              const titleText = isEn && cert.titleEn ? cert.titleEn : cert.title;
              const periodText = isEn && cert.periodEn ? cert.periodEn : cert.period;
              return (
                <div key={cert.id} className="space-y-0.5 text-xs">
                  <div className="font-bold text-slate-900 dark:text-white">{titleText}</div>
                  <div className="text-emerald-600 dark:text-emerald-400 font-medium">{cert.issuer} ({periodText})</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500">
          {isEn
            ? 'Available for Software Engineering opportunities, Full-Stack projects & AI integrations.'
            : "Disponible pour opportunités d'Ingénierie Logicielle, Projets Full-Stack & Intégrations IA."}
        </div>

      </div>
    </div>
  );
};
