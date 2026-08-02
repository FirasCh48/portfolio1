import React, { useState } from 'react';
import { 
  Cpu, 
  Brain, 
  Code, 
  Gamepad2, 
  Database, 
  Sparkles, 
  Search, 
  LayoutGrid, 
  List,
  Clock,
  Briefcase,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Tilt3DCard } from './Tilt3DCard';
import { CircularSkillRing } from './CircularSkillRing';
import { GithubHeatmap } from './GithubHeatmap';
import { useLanguage } from '../context/LanguageContext';
import { SkillItem } from '../types';

export const SkillsSection: React.FC = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterHighlightOnly, setFilterHighlightOnly] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const isFr = language === 'fr';

  const categoryIcons: Record<string, React.ReactNode> = {
    'Brain': <Brain className="w-6 h-6 text-purple-500" />,
    'Code': <Code className="w-6 h-6 text-blue-500" />,
    'Gamepad2': <Gamepad2 className="w-6 h-6 text-indigo-500" />,
    'Database': <Database className="w-6 h-6 text-emerald-500" />
  };

  const categoryGradients: Record<string, [string, string]> = {
    'Brain': ['#a855f7', '#6366f1'],     // Purple -> Indigo
    'Code': ['#2563eb', '#06b6d4'],      // Blue -> Cyan
    'Gamepad2': ['#6366f1', '#ec4899'],  // Indigo -> Pink
    'Database': ['#10b981', '#14b8a6']   // Emerald -> Teal
  };

  const renderTooltip = (skill: SkillItem) => {
    const description = isFr ? skill.descriptionFr : skill.descriptionEn;
    const yearsExp = skill.yearsExperience || (isFr ? '2+ ans' : '2+ years');
    const projCount = skill.projectsCount || (isFr ? '5+ projets' : '5+ projects');

    return (
      <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 4, scale: 0.95 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className="absolute z-40 bottom-full mb-3 left-1/2 -translate-x-1/2 w-72 sm:w-80 p-4 rounded-2xl bg-slate-900/95 dark:bg-slate-950/95 text-white border border-slate-700/90 shadow-2xl backdrop-blur-xl pointer-events-none"
      >
        <div className="space-y-2.5">
          {/* Header */}
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5 font-bold text-sm text-white">
              <span>{skill.name}</span>
              {skill.highlight && <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />}
            </div>
            <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-extrabold border border-blue-500/30">
              {skill.level}% • {skill.level >= 90 ? (isFr ? 'Expert' : 'Expert') : skill.level >= 85 ? (isFr ? 'Avancé' : 'Advanced') : (isFr ? 'Maîtrisé' : 'Proficient')}
            </span>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-800/80 border border-slate-700/50">
              <Clock className="w-4 h-4 text-blue-400 shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block leading-tight">{isFr ? 'Expérience' : 'Experience'}</span>
                <span className="font-extrabold text-xs text-white">{yearsExp}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-800/80 border border-slate-700/50">
              <Briefcase className="w-4 h-4 text-purple-400 shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block leading-tight">{isFr ? 'Réalisations' : 'Projects'}</span>
                <span className="font-extrabold text-xs text-white">{projCount}</span>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          {description && (
            <p className="text-xs text-slate-300 leading-relaxed pt-0.5">
              {description}
            </p>
          )}
        </div>

        {/* Bottom Pointer Arrow */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900/95 dark:bg-slate-950/95 rotate-45 -mt-1.5 border-r border-b border-slate-700/90" />
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>{isFr ? 'Stack & Maîtrise Technique' : 'Stack & Technical Proficiency'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isFr ? 'Compétences Pluridisciplinaires' : 'Multidisciplinary Skillset'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {isFr
              ? 'Un profil d\'ingénieur hybride maîtrisant l\'IA générative (RAG/LLMs), le développement full-stack, la 3D interactive et l\'IoT hardware.'
              : 'A hybrid software engineering profile combining Generative AI (RAG/LLMs), full-stack development, interactive 3D, and IoT hardware.'}
          </p>

          {/* Interactive Tooltip Tip */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-xs font-medium">
            <Info className="w-3.5 h-3.5 text-blue-500" />
            <span>
              {isFr
                ? 'Survolez ou touchez une compétence pour afficher le nombre d\'années et de projets associés.'
                : 'Hover or tap on any technology to reveal years of experience & project count.'}
            </span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto bg-white dark:bg-slate-900 p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg">
          {/* Search Input */}
          <div className="relative w-full md:w-auto flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={isFr ? 'Filtrer une compétence (ex: RAG, React, Unity...)' : 'Filter skill (e.g., RAG, React, Unity...)'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between w-full md:w-auto gap-2">
            {/* Highlight Only Button */}
            <button
              onClick={() => setFilterHighlightOnly(!filterHighlightOnly)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-colors shrink-0 ${
                filterHighlightOnly
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{isFr ? 'Compétences Clés' : 'Key Skills'}</span>
            </button>

            {/* View Mode Switcher */}
            <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                title={isFr ? 'Affichage Cartes Circulaires' : 'Grid Ring View'}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('compact')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'compact'
                    ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                title={isFr ? 'Affichage Liste avec jauges' : 'Compact List View'}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => {
            const filteredSkills = category.skills.filter((s) => {
              const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase());
              const matchesHighlight = filterHighlightOnly ? s.highlight : true;
              return matchesSearch && matchesHighlight;
            });

            if (filteredSkills.length === 0) return null;

            const gradientColors = categoryGradients[category.icon] || ['#2563eb', '#06b6d4'];

            return (
              <Tilt3DCard key={category.title} className="h-full">
                <div className="h-full p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-xl space-y-6 overflow-visible">
                  
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800">
                        {categoryIcons[category.icon] || <Cpu className="w-6 h-6 text-blue-500" />}
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-slate-900 dark:text-white">
                          {isFr ? category.title : (category.titleEn || category.title)}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {filteredSkills.length} {isFr ? 'compétences listées' : 'skills listed'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Render Mode: GRID with Circular Progress Rings & Tooltips */}
                  {viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {filteredSkills.map((skill, idx) => {
                        const gradId = `grad-${category.icon}-${idx}-${skill.name.replace(/[^a-zA-Z0-9]/g, '')}`;
                        const isHovered = hoveredSkill === skill.name;

                        return (
                          <div
                            key={skill.name}
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            onClick={() => setHoveredSkill(hoveredSkill === skill.name ? null : skill.name)}
                            className={`relative p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border ${
                              skill.highlight
                                ? 'border-indigo-500/30 dark:border-indigo-500/30 shadow-md'
                                : 'border-slate-200/80 dark:border-slate-700/80'
                            } hover:border-indigo-500/60 hover:shadow-xl transition-all flex items-center justify-between gap-3 group cursor-pointer`}
                          >
                            <div className="space-y-1 flex-1 min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                                  {skill.name}
                                </span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                {skill.highlight && (
                                  <span className="px-1.5 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-extrabold border border-amber-500/20 inline-flex items-center gap-1">
                                    <Sparkles className="w-2.5 h-2.5 fill-amber-400" />
                                    {isFr ? 'Majeur' : 'Key'}
                                  </span>
                                )}
                                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                                  {skill.level >= 90 ? (isFr ? 'Expert' : 'Expert') : skill.level >= 85 ? (isFr ? 'Avancé' : 'Advanced') : (isFr ? 'Maîtrisé' : 'Proficient')}
                                </span>
                              </div>
                            </div>

                            {/* Interactive Circular Progress Indicator */}
                            <CircularSkillRing
                              level={skill.level}
                              size={62}
                              strokeWidth={5}
                              gradientId={gradId}
                              gradientColors={gradientColors}
                              isHighlight={skill.highlight}
                            />

                            {/* Floating Tooltip Card */}
                            <AnimatePresence>
                              {isHovered && renderTooltip(skill)}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    /* Skills Render Mode: COMPACT LIST with Rings, Bars & Tooltips */
                    <div className="space-y-4">
                      {filteredSkills.map((skill, idx) => {
                        const gradId = `grad-compact-${category.icon}-${idx}-${skill.name.replace(/[^a-zA-Z0-9]/g, '')}`;
                        const isHovered = hoveredSkill === skill.name;

                        return (
                          <div
                            key={skill.name}
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            onClick={() => setHoveredSkill(hoveredSkill === skill.name ? null : skill.name)}
                            className="relative flex items-center gap-4 p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 hover:border-indigo-500/50 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all cursor-pointer group"
                          >
                            <CircularSkillRing
                              level={skill.level}
                              size={52}
                              strokeWidth={4.5}
                              gradientId={gradId}
                              gradientColors={gradientColors}
                              isHighlight={skill.highlight}
                            />

                            <div className="flex-1 space-y-1.5">
                              <div className="flex items-center justify-between text-xs sm:text-sm">
                                <span className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                                  {skill.name}
                                  {skill.highlight && (
                                    <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
                                  )}
                                </span>
                                <span className="font-extrabold font-mono text-xs text-indigo-600 dark:text-indigo-400">
                                  {skill.level}%
                                </span>
                              </div>

                              <div className="w-full h-2 rounded-full bg-slate-200/80 dark:bg-slate-700/80 overflow-hidden">
                                <div
                                  className="h-full rounded-full transition-all duration-1000 ease-out"
                                  style={{
                                    width: `${skill.level}%`,
                                    background: `linear-gradient(to right, ${gradientColors[0]}, ${gradientColors[1]})`
                                  }}
                                />
                              </div>
                            </div>

                            {/* Floating Tooltip Card */}
                            <AnimatePresence>
                              {isHovered && renderTooltip(skill)}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  )}

                </div>
              </Tilt3DCard>
            );
          })}
        </div>

        {/* GitHub Activity Heatmap D3 Visualization */}
        <GithubHeatmap />

      </div>
    </section>
  );
};
