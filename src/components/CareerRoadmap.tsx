import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import {
  GraduationCap,
  Briefcase,
  Sparkles,
  Compass,
  CheckCircle2,
  Clock,
  Target,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Building2,
  Layers,
  Award,
  Zap
} from 'lucide-react';
import { CAREER_ROADMAP } from '../data/portfolioData';
import { CareerRoadmapItem } from '../types';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const CareerRoadmap: React.FC = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const isEn = language === 'en';
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItemId, setSelectedItemId] = useState<string>(CAREER_ROADMAP[4].id); // Default selected: ISAMM
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 900,
    height: 280,
  });

  const selectedItem = CAREER_ROADMAP.find((item) => item.id === selectedItemId) || CAREER_ROADMAP[0];

  // Filter items
  const filteredItems = CAREER_ROADMAP.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        const h = w < 640 ? 480 : 280; // Taller on vertical mobile layout
        setDimensions({ width: w, height: h });
      }
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  // Category Color Map
  const getCategoryColor = (category: string, isDark: boolean) => {
    switch (category) {
      case 'education':
        return isDark ? '#818cf8' : '#4f46e5'; // Indigo
      case 'experience':
        return isDark ? '#60a5fa' : '#2563eb'; // Blue
      case 'innovation':
        return isDark ? '#c084fc' : '#9333ea'; // Purple
      case 'future':
        return isDark ? '#34d399' : '#059669'; // Emerald
      default:
        return isDark ? '#38bdf8' : '#0284c7';
    }
  };

  // D3 Rendering Logic
  useEffect(() => {
    if (!svgRef.current || dimensions.width === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // Clear previous render

    const isDark = theme === 'dark';
    const width = dimensions.width;
    const height = dimensions.height;
    const isMobile = width < 640;

    const padding = isMobile
      ? { top: 40, right: 30, bottom: 40, left: 50 }
      : { top: 60, right: 60, bottom: 60, left: 60 };

    const innerWidth = width - padding.left - padding.right;
    const innerHeight = height - padding.top - padding.bottom;

    // Define SVG Filter for Glowing Nodes
    const defs = svg.append('defs');

    // Glow Filter
    const filter = defs.append('filter').attr('id', 'glow').attr('x', '-50%').attr('y', '-50%').attr('width', '200%').attr('height', '200%');
    filter.append('feGaussianBlur').attr('stdDeviation', '4.5').attr('result', 'coloredBlur');
    const feMerge = filter.append('feMerge');
    feMerge.append('feMergeNode').attr('in', 'coloredBlur');
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    // Linear Gradient along the path
    const pathGradient = defs
      .append('linearGradient')
      .attr('id', 'path-grad')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', isMobile ? '0%' : '100%')
      .attr('y2', isMobile ? '100%' : '0%');

    pathGradient.append('stop').attr('offset', '0%').attr('stop-color', '#4f46e5');
    pathGradient.append('stop').attr('offset', '40%').attr('stop-color', '#2563eb');
    pathGradient.append('stop').attr('offset', '75%').attr('stop-color', '#9333ea');
    pathGradient.append('stop').attr('offset', '100%').attr('stop-color', '#059669');

    const g = svg.append('g').attr('transform', `translate(${padding.left},${padding.top})`);

    if (!isMobile) {
      // ===============================================
      // HORIZONTAL D3 TIMELINE (Desktop & Tablet)
      // ===============================================
      const xScale = d3
        .scalePoint<string>()
        .domain(filteredItems.map((d) => d.id))
        .range([0, innerWidth])
        .padding(0.1);

      // Create wavy Y coords for visual rhythm
      const getY = (index: number) => {
        const mid = innerHeight / 2;
        const waveOffset = Math.sin((index / Math.max(1, filteredItems.length - 1)) * Math.PI * 2) * 28;
        return mid + (index % 2 === 0 ? -waveOffset : waveOffset);
      };

      const points: [number, number][] = filteredItems.map((d, i) => [xScale(d.id) || 0, getY(i)]);

      // Draw background curve path
      const lineGenerator = d3
        .line<[number, number]>()
        .x((d) => d[0])
        .y((d) => d[1])
        .curve(d3.curveCatmullRom.alpha(0.5));

      // Path Shadow / Glow
      g.append('path')
        .datum(points)
        .attr('fill', 'none')
        .attr('stroke', 'url(#path-grad)')
        .attr('stroke-width', 6)
        .attr('opacity', isDark ? 0.4 : 0.25)
        .attr('filter', 'url(#glow)')
        .attr('d', lineGenerator);

      // Main Path
      const mainPath = g
        .append('path')
        .datum(points)
        .attr('fill', 'none')
        .attr('stroke', 'url(#path-grad)')
        .attr('stroke-width', 3.5)
        .attr('stroke-dasharray', (d, i, nodes) => {
          const totalLength = (nodes[i] as SVGPathElement).getTotalLength();
          return `${totalLength} ${totalLength}`;
        })
        .attr('stroke-dashoffset', (d, i, nodes) => (nodes[i] as SVGPathElement).getTotalLength());

      mainPath.transition().duration(1200).ease(d3.easeCubicOut).attr('stroke-dashoffset', 0);

      // Render Milestone Nodes
      const nodeGroups = g
        .selectAll('.node')
        .data(filteredItems)
        .enter()
        .append('g')
        .attr('class', 'node')
        .attr('transform', (d, i) => `translate(${xScale(d.id) || 0}, ${getY(i)})`)
        .style('cursor', 'pointer')
        .on('click', (event, d) => {
          setSelectedItemId(d.id);
        });

      // Pulse ring for selected node
      nodeGroups
        .filter((d) => d.id === selectedItemId)
        .append('circle')
        .attr('r', 22)
        .attr('fill', 'none')
        .attr('stroke', (d) => getCategoryColor(d.category, isDark))
        .attr('stroke-width', 2)
        .attr('opacity', 0.8)
        .append('animate')
        .attr('attributeName', 'r')
        .attr('values', '18;28;18')
        .attr('dur', '2s')
        .attr('repeatCount', 'indefinite');

      // Outer circle
      nodeGroups
        .append('circle')
        .attr('r', (d) => (d.id === selectedItemId ? 16 : 12))
        .attr('fill', (d) => (isDark ? '#0f172a' : '#ffffff'))
        .attr('stroke', (d) => getCategoryColor(d.category, isDark))
        .attr('stroke-width', (d) => (d.id === selectedItemId ? 4 : 2.5))
        .attr('filter', (d) => (d.id === selectedItemId ? 'url(#glow)' : 'none'))
        .style('transition', 'all 0.3s ease');

      // Center dot
      nodeGroups
        .append('circle')
        .attr('r', (d) => (d.id === selectedItemId ? 6 : 4))
        .attr('fill', (d) => getCategoryColor(d.category, isDark));

      // Labels - Year (above node)
      nodeGroups
        .append('text')
        .attr('y', -24)
        .attr('text-anchor', 'middle')
        .attr('fill', (d) => (d.id === selectedItemId ? (isDark ? '#60a5fa' : '#2563eb') : isDark ? '#94a3b8' : '#64748b'))
        .attr('font-size', (d) => (d.id === selectedItemId ? '12px' : '11px'))
        .attr('font-weight', (d) => (d.id === selectedItemId ? '800' : '600'))
        .text((d) => d.year);

      // Labels - Title (below node)
      nodeGroups
        .append('text')
        .attr('y', 30)
        .attr('text-anchor', 'middle')
        .attr('fill', (d) => (d.id === selectedItemId ? (isDark ? '#ffffff' : '#0f172a') : isDark ? '#cbd5e1' : '#334155'))
        .attr('font-size', (d) => (d.id === selectedItemId ? '12px' : '11px'))
        .attr('font-weight', (d) => (d.id === selectedItemId ? '700' : '500'))
        .text((d) => {
          const itemTitle = isEn && d.titleEn ? d.titleEn : (d.organization || d.title);
          return itemTitle.length > 18 ? itemTitle.substring(0, 16) + '…' : itemTitle;
        });
    } else {
      // ===============================================
      // VERTICAL D3 TIMELINE (Mobile)
      // ===============================================
      const yScale = d3
        .scalePoint<string>()
        .domain(filteredItems.map((d) => d.id))
        .range([0, innerHeight])
        .padding(0.1);

      const xPos = 20;

      // Vertical Guideline
      g.append('line')
        .attr('x1', xPos)
        .attr('y1', 0)
        .attr('x2', xPos)
        .attr('y2', innerHeight)
        .attr('stroke', 'url(#path-grad)')
        .attr('stroke-width', 3)
        .attr('stroke-dasharray', '4 4');

      const nodeGroups = g
        .selectAll('.node-mobile')
        .data(filteredItems)
        .enter()
        .append('g')
        .attr('class', 'node-mobile')
        .attr('transform', (d) => `translate(${xPos}, ${yScale(d.id) || 0})`)
        .style('cursor', 'pointer')
        .on('click', (event, d) => {
          setSelectedItemId(d.id);
        });

      // Circle node
      nodeGroups
        .append('circle')
        .attr('r', (d) => (d.id === selectedItemId ? 12 : 9))
        .attr('fill', isDark ? '#0f172a' : '#ffffff')
        .attr('stroke', (d) => getCategoryColor(d.category, isDark))
        .attr('stroke-width', 3);

      // Label
      nodeGroups
        .append('text')
        .attr('x', 24)
        .attr('y', 4)
        .attr('fill', (d) => (d.id === selectedItemId ? (isDark ? '#ffffff' : '#0f172a') : isDark ? '#cbd5e1' : '#334155'))
        .attr('font-size', '12px')
        .attr('font-weight', (d) => (d.id === selectedItemId ? '800' : '500'))
        .text((d) => `${d.year} - ${isEn && d.titleEn ? d.titleEn : d.organization}`);
    }
  }, [dimensions, activeCategory, selectedItemId, theme, filteredItems, isEn]);

  // Category Icon helper
  const renderCategoryIcon = (category: string) => {
    switch (category) {
      case 'education':
        return <GraduationCap className="w-5 h-5 text-indigo-500" />;
      case 'experience':
        return <Briefcase className="w-5 h-5 text-blue-500" />;
      case 'innovation':
        return <Sparkles className="w-5 h-5 text-purple-500" />;
      case 'future':
        return <Compass className="w-5 h-5 text-emerald-500" />;
      default:
        return <Layers className="w-5 h-5 text-blue-500" />;
    }
  };

  const handleNext = () => {
    const currentIndex = CAREER_ROADMAP.findIndex((i) => i.id === selectedItemId);
    if (currentIndex < CAREER_ROADMAP.length - 1) {
      setSelectedItemId(CAREER_ROADMAP[currentIndex + 1].id);
    }
  };

  const handlePrev = () => {
    const currentIndex = CAREER_ROADMAP.findIndex((i) => i.id === selectedItemId);
    if (currentIndex > 0) {
      setSelectedItemId(CAREER_ROADMAP[currentIndex - 1].id);
    }
  };

  return (
    <div className="w-full space-y-8 my-10">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-gradient-to-r from-blue-900/10 via-indigo-900/10 to-purple-900/10 dark:from-blue-950/40 dark:via-indigo-950/40 dark:to-purple-950/40 border border-blue-500/20 backdrop-blur-md">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500 animate-pulse" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {isEn ? 'Interactive Engineering Career Roadmap' : 'Feuille de Route d\'Ingénierie (Interactive Career Roadmap)'}
            </h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {isEn
              ? 'Dynamic D3.js timeline: Academic Foundations → Industrial Experience → RAG/AI Hub → Vision 2026+'
              : 'Représentation D3.js dynamique du parcours : Fondations académiques → Immersion industrielle → Pôle RAG/IA → Vision 2026+'}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
          {[
            { id: 'all', label: isEn ? 'All' : 'Tous', icon: Layers },
            { id: 'education', label: isEn ? 'Education' : 'Formations', icon: GraduationCap },
            { id: 'experience', label: isEn ? 'Missions' : 'Missions', icon: Briefcase },
            { id: 'innovation', label: isEn ? 'AI & R&D' : 'IA & R&D', icon: Sparkles },
            { id: 'future', label: 'Vision 2026+', icon: Compass },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* D3 Canvas Container */}
      <div
        ref={containerRef}
        className="relative w-full rounded-3xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 p-4 sm:p-6 shadow-inner overflow-hidden"
      >
        <div className="absolute top-3 right-4 text-[11px] font-medium text-slate-400 dark:text-slate-500 flex items-center gap-1">
          <span>{isEn ? '💡 Click on a milestone to explore details' : '💡 Cliquez sur un jalon pour explorer les détails'}</span>
        </div>

        <svg ref={svgRef} className="w-full h-[280px] sm:h-[280px] overflow-visible" />
      </div>

      {/* Milestone Detail Card */}
      {selectedItem && (
        <div className="relative p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-2xl transition-all space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
            <div className="flex items-start gap-3.5">
              <div className="p-3 rounded-2xl bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/20 shrink-0 mt-0.5">
                {renderCategoryIcon(selectedItem.category)}
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold border border-slate-200 dark:border-slate-700">
                    {isEn && selectedItem.categoryLabelEn ? selectedItem.categoryLabelEn : selectedItem.categoryLabel}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {selectedItem.year}
                  </span>
                  {selectedItem.status === 'completed' && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {isEn ? 'Completed Successfully' : 'Achevé avec Succès'}
                    </span>
                  )}
                  {selectedItem.status === 'current' && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold flex items-center gap-1 animate-pulse">
                      <Clock className="w-3 h-3" />
                      {isEn ? 'Current Phase' : 'Phase Actuelle'}
                    </span>
                  )}
                  {selectedItem.status === 'vision' && (
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold flex items-center gap-1">
                      <Target className="w-3 h-3" />
                      {isEn ? 'Strategic Goal' : 'Objectif Stratégique'}
                    </span>
                  )}
                </div>
                <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {isEn && selectedItem.titleEn ? selectedItem.titleEn : selectedItem.title}
                </h4>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
                  <Building2 className="w-4 h-4 text-blue-500" />
                  <span>{selectedItem.organization}</span>
                </div>
              </div>
            </div>

            {/* Prev / Next controls */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handlePrev}
                disabled={CAREER_ROADMAP.findIndex((i) => i.id === selectedItemId) === 0}
                className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white disabled:opacity-30 disabled:hover:bg-slate-100 transition-colors"
                title={isEn ? 'Previous Milestone' : 'Jalon Précédent'}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={CAREER_ROADMAP.findIndex((i) => i.id === selectedItemId) === CAREER_ROADMAP.length - 1}
                className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white disabled:opacity-30 disabled:hover:bg-slate-100 transition-colors"
                title={isEn ? 'Next Milestone' : 'Jalon Suivant'}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            {isEn && selectedItem.summaryEn ? selectedItem.summaryEn : selectedItem.summary}
          </p>

          {/* Key Achievements */}
          <div className="space-y-2.5 pt-2">
            <h5 className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-500" />
              <span>{isEn ? 'Engineering Deliverables & Key Outcomes:' : 'Livrables Majoration & Acquis d\'Ingénierie :'}</span>
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {((isEn && selectedItem.keyAchievementsEn) ? selectedItem.keyAchievementsEn : selectedItem.keyAchievements).map((ach, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200"
                >
                  <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span className="font-medium">{ach}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Skills */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 mr-2">{isEn ? 'Key Skills:' : 'Compétences Clés :'}</span>
            {selectedItem.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-800/80"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
