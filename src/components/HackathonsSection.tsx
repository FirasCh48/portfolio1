import React from 'react';
import { Trophy, Calendar, MapPin, Users, HeartHandshake, Lightbulb, Target, Sparkles } from 'lucide-react';
import { HACKATHONS, EXTRACURRICULAR } from '../data/portfolioData';
import { Tilt3DCard } from './Tilt3DCard';
import { useLanguage } from '../context/LanguageContext';

export const HackathonsSection: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <section id="hackathons" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-4 h-4" />
            <span>{isEn ? 'Hackathons, Innovation & Social Impact' : 'Hackathons, Innovation & Impact Social'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isEn ? '7+ Competitions & JCI Leadership' : '7+ Competitions & Engagement JCI'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {isEn
              ? 'A rapid problem-solving mindset, intense high-pressure teamwork, and social utility.'
              : 'Un état d\'esprit orienté résolution rapide de problèmes, travail d\'équipe intense sous pression et utilité sociale.'}
          </p>
        </div>

        {/* JCI Featured Highlight Card */}
        {EXTRACURRICULAR.map((extra) => (
          <Tilt3DCard key={extra.id} className="max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white border border-blue-700/50 shadow-2xl space-y-4 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-blue-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-blue-600 text-white font-black text-lg">
                    JCI
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">{extra.organization}</h3>
                    <p className="text-xs text-blue-300 font-semibold">
                      {isEn ? 'Head of Protocol & Active Member' : extra.role} • {extra.period}
                    </p>
                  </div>
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-200 text-xs font-bold border border-blue-400/30 flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-pink-400" />
                  <span>{isEn ? 'Civic Engagement & Leadership' : 'Engagement Citoyen & Leadership'}</span>
                </span>
              </div>

              <div className="space-y-2">
                {extra.description.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      {isEn
                        ? idx === 0
                          ? 'Organization and orchestration of protocol for regional events, debates, and public forums.'
                          : idx === 1
                          ? 'Design and animation of interactive media campaigns, posters, and digital identity for JCI Ksar Hellal.'
                          : 'Team management, public speaking, and active participation in community projects.'
                        : item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Tilt3DCard>
        ))}

        {/* Hackathons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HACKATHONS.map((hack) => {
            const date = isEn && hack.dateEn ? hack.dateEn : hack.date;
            const topic = isEn && hack.topicEn ? hack.topicEn : hack.topic;
            const description = isEn && hack.descriptionEn ? hack.descriptionEn : hack.description;

            return (
              <Tilt3DCard key={hack.id} className="h-full">
                <div className="h-full p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-lg flex flex-col justify-between space-y-4 hover:border-amber-500/50 transition-colors">
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                        <Trophy className="w-3.5 h-3.5" />
                        {hack.organizer}
                      </span>
                      <span className="flex items-center gap-1 font-mono">
                        <Calendar className="w-3 h-3" />
                        {date}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-slate-900 dark:text-white leading-snug">
                      {hack.name}
                    </h3>

                    <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                      <Target className="w-3.5 h-3.5" />
                      <span>{topic}</span>
                    </div>

                    <p className="text-xs text-slate-650 dark:text-slate-300 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1">
                    {hack.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-semibold"
                      >
                        #{tag}
                      </span>
                    ))}
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
