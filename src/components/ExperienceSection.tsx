import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Building2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { Tilt3DCard } from './Tilt3DCard';
import { CareerRoadmap } from './CareerRoadmap';
import { useLanguage } from '../context/LanguageContext';

export const ExperienceSection: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            <span>{isEn ? 'Professional Path & Industry Immersion' : 'Parcours & Immersion Professionnelle'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isEn ? 'Work Experience & Trajectory' : 'Expériences & Trajectoire'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {isEn
              ? 'Engineering missions and software development roles across tech studios, enterprise platforms, and digital agencies.'
              : 'Missions et projets d\'ingénierie accomplis au sein de studios de développement, d\'entreprises web et d\'éditeurs de logiciels.'}
          </p>
        </div>

        {/* Career Roadmap Visualization */}
        <CareerRoadmap />

        {/* Detailed Experience Timeline */}
        <div className="space-y-6 pt-6">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white text-center">
            {isEn ? 'Detailed Industry Experience' : 'Détails des Immersions en Entreprise'}
          </h3>

          <div className="relative max-w-4xl mx-auto space-y-8 before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-ml-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-indigo-600 before:to-purple-600">
            {EXPERIENCES.map((exp, index) => {
              const role = isEn && exp.roleEn ? exp.roleEn : exp.role;
              const period = isEn && exp.periodEn ? exp.periodEn : exp.period;
              const description = isEn && exp.descriptionEn ? exp.descriptionEn : exp.description;
              const type = isEn && exp.typeEn ? exp.typeEn : exp.type;

              return (
                <div
                  key={exp.id}
                  className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
                >
                  {/* Timeline Dot */}
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/30 z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <Briefcase className="w-4 h-4" />
                  </div>

                  {/* Content Card */}
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)]">
                    <Tilt3DCard>
                      <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-xl space-y-4 hover:border-blue-500/50 transition-colors">
                        
                        {/* Badge & Period */}
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold border border-blue-500/20">
                            {type}
                          </span>
                          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-blue-500" />
                            {period}
                          </span>
                        </div>

                        {/* Role & Company */}
                        <div>
                          <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {role}
                          </h3>
                          <div className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2 mt-1">
                            <Building2 className="w-4 h-4 text-indigo-500" />
                            <span>{exp.company}</span>
                            <span className="text-xs font-normal text-slate-500 flex items-center gap-1">
                              • <MapPin className="w-3 h-3 text-emerald-500" /> {exp.location}
                            </span>
                          </div>
                        </div>

                        {/* Bullet points */}
                        <ul className="space-y-2 pt-1">
                          {description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-650 dark:text-slate-300">
                              <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Stack */}
                        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5">
                          {exp.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-medium border border-slate-200 dark:border-slate-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                      </div>
                    </Tilt3DCard>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
