import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';
import { Tilt3DCard } from './Tilt3DCard';
import { useLanguage } from '../context/LanguageContext';

export const EducationSection: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <section id="education" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>{isEn ? 'Education & Academic Degrees' : 'Formation & Cursus Académique'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isEn ? 'Academic Background' : 'Parcours Universitaire'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {isEn
              ? 'Rigorous academic training in software engineering, artificial intelligence, and multimedia development.'
              : 'Formation rigoureuse en ingénierie logicielle et développement multimédia.'}
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {EDUCATION.map((edu) => {
            const degree = isEn && edu.degreeEn ? edu.degreeEn : edu.degree;
            const status = isEn && edu.statusEn ? edu.statusEn : (edu.status || (isEn ? 'Completed' : 'Cursus Validé'));
            const highlights = isEn && edu.highlightsEn ? edu.highlightsEn : edu.highlights;

            return (
              <Tilt3DCard key={edu.id} className="h-full">
                <div className="h-full p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-xl flex flex-col justify-between space-y-6 hover:border-blue-500/50 transition-colors">
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold">
                        {status}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                        {degree}
                      </h3>
                      <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mt-1">
                        {edu.institution}
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3 text-emerald-500" />
                        {edu.location}
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      {highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-650 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </Tilt3DCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
