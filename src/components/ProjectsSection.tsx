import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Layers, Cpu, ArrowUpRight, CheckCircle2, Gamepad2, Info, Code2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { Tilt3DCard } from './Tilt3DCard';
import { useLanguage } from '../context/LanguageContext';

interface ProjectsSectionProps {
  onOpenWarshatin3D: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenWarshatin3D }) => {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & ML', '3D & Gaming', 'Full-Stack Web', 'UI/UX & Tools'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Title & Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>{isEn ? 'Key Projects & Flagship Works' : 'Réalisations & Projets Majeurs'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isEn ? 'High-Impact Technology Projects' : 'Des Projets à Fort Impact Technologique'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {isEn 
              ? 'From RAG pipeline architectures with Gemini 2.5 Flash to Unity 3D multiplayer games with custom hardware.'
              : 'De l\'intégration d\'architectures RAG avec l\'API Gemini 2.5 Flash aux jeux 3D multijoueurs Unity avec manette physique personnalisée.'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const title = isEn && project.titleEn ? project.titleEn : project.title;
            const subtitle = isEn && project.subtitleEn ? project.subtitleEn : project.subtitle;
            const description = isEn && project.descriptionEn ? project.descriptionEn : project.description;
            const highlights = isEn && project.highlightsEn ? project.highlightsEn : project.highlights;

            return (
              <Tilt3DCard
                key={project.id}
                className="h-full"
                glowAccent={
                  project.category === '3D & Gaming'
                    ? 'purple'
                    : project.category === 'AI & ML'
                    ? 'blue'
                    : project.featured
                    ? 'amber'
                    : 'emerald'
                }
                magneticStrength={12}
              >
                <div className="h-full p-7 rounded-3xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl flex flex-col justify-between space-y-6 group hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:bg-white/95 dark:hover:bg-slate-900/95 transition-all duration-300">
                  
                  <div className="space-y-4">
                    {/* Category Pill & Featured Badge */}
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-bold border border-blue-200 dark:border-blue-900">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="flex items-center gap-1.5 text-xs font-bold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                          <Sparkles className="w-3.5 h-3.5" />
                          {isEn ? 'Flagship Project' : 'Projet Phare'}
                        </span>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-2">
                        {title}
                      </h3>
                      <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1">
                        {subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {description}
                    </p>

                    {/* Highlights Bullet points */}
                    <div className="space-y-1.5 pt-2">
                      {highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Badges & Actions */}
                  <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <Info className="w-4 h-4" />
                        <span>{isEn ? 'Architecture & Details' : 'Architecture & Détails'}</span>
                      </button>

                      <div className="flex items-center gap-2">
                        {project.is3DModelPreviewable && (
                          <button
                            onClick={onOpenWarshatin3D}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600 text-white text-xs font-bold hover:bg-purple-700 transition-colors shadow-sm"
                          >
                            <Gamepad2 className="w-3.5 h-3.5" />
                            <span>{isEn ? '3D Simulator' : 'Simulateur 3D'}</span>
                          </button>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            title="GitHub Source Code"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              </Tilt3DCard>
            );
          })}
        </div>

        {/* Project Architecture Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto text-slate-900 dark:text-white">
              
              <div className="flex items-start justify-between">
                <div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-bold">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-black mt-2">
                    {isEn && selectedProject.titleEn ? selectedProject.titleEn : selectedProject.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {isEn && selectedProject.subtitleEn ? selectedProject.subtitleEn : selectedProject.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                  {isEn ? 'Global Overview' : 'Présentation Globale'}
                </h4>
                <p className="text-sm text-slate-650 dark:text-slate-300 leading-relaxed">
                  {isEn && selectedProject.longDescriptionEn ? selectedProject.longDescriptionEn : selectedProject.longDescription}
                </p>
              </div>

              {((isEn && selectedProject.architectureDetailsEn) ? selectedProject.architectureDetailsEn : selectedProject.architectureDetails) && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    {isEn ? 'Architecture & Technical Choices' : 'Architecture & Choix Techniques'}
                  </h4>
                  <ul className="space-y-2">
                    {((isEn && selectedProject.architectureDetailsEn) ? selectedProject.architectureDetailsEn : selectedProject.architectureDetails)!.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <Code2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700"
                >
                  {isEn ? 'Close' : 'Fermer'}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
