import React, { useState } from 'react';
import { 
  Sparkles, 
  Cpu, 
  Bot, 
  Gamepad2, 
  Box, 
  Activity, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Github, 
  ExternalLink, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Eye, 
  ChevronRight,
  Terminal,
  Search,
  UserCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Tilt3DCard } from './Tilt3DCard';

interface FeaturedSpotlightSectionProps {
  onOpenWarshatin3D?: () => void;
}

export const FeaturedSpotlightSection: React.FC<FeaturedSpotlightSectionProps> = ({ onOpenWarshatin3D }) => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  // State for Card 1: RAG Demo Simulator
  const [activeCandidate, setActiveCandidate] = useState<number>(0);
  const [isMatching, setIsMatching] = useState<boolean>(false);
  const [matchProgress, setMatchProgress] = useState<number>(96);
  const [ragTab, setRagTab] = useState<'demo' | 'arch'>('demo');

  const candidates = [
    {
      id: 0,
      name: 'Sarah M.',
      role: 'Full-Stack Developer',
      need: 'Mobility & Ergonomic Desk',
      matchScore: 98,
      accommodation: 'Gemini 2.5 Recommendation: Remote hybrid option & voice-assisted IDE setup.',
      skills: ['React', 'TypeScript', 'Node.js']
    },
    {
      id: 1,
      name: 'Alex K.',
      role: 'Data & AI Engineer',
      need: 'Screen Reader & High Contrast',
      matchScore: 94,
      accommodation: 'Gemini 2.5 Recommendation: WCAG AAA screen-reader compliant workstation & braille display sync.',
      skills: ['Python', 'FastAPI', 'LangChain']
    }
  ];

  const handleRunRagMatch = () => {
    setIsMatching(true);
    setMatchProgress(10);
    let current = 10;
    const interval = setInterval(() => {
      current += 20;
      if (current >= candidates[activeCandidate].matchScore) {
        setMatchProgress(candidates[activeCandidate].matchScore);
        setIsMatching(false);
        clearInterval(interval);
      } else {
        setMatchProgress(current);
      }
    }, 80);
  };

  // State for Card 3: Doctor Appointment Booking Simulator
  const [selectedSlot, setSelectedSlot] = useState<string>('10:30 AM');
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'confirmed'>('idle');

  const handleBookSlot = (slot: string) => {
    setSelectedSlot(slot);
    setBookingStatus('confirmed');
    setTimeout(() => {
      setBookingStatus('idle');
    }, 3000);
  };

  return (
    <section id="spotlight" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/30 dark:border-blue-400/30 text-blue-600 dark:text-blue-400 text-xs font-extrabold uppercase tracking-widest shadow-sm backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-blue-500 animate-spin" style={{ animationDuration: '6s' }} />
          <span>{isEn ? 'Featured Project Spotlight' : 'Projets Phares & Innovations'}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          {isEn ? (
            <>
              Flagship Projects & <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">AI Innovations</span>
            </>
          ) : (
            <>
              Projets Phares & <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Architecture IA</span>
            </>
          )}
        </h2>

        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-medium">
          {isEn
            ? 'Interactive Bento-grid showcase highlighting my most impactful work across Full-Stack, RAG AI architectures, and 3D Hardware engineering.'
            : 'Présentation modulaire Bento-grid illustrant mes réalisations majeures en Full-Stack, IA Générative (RAG) et Ingénierie 3D / IoT.'}
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* ========================================================= */}
        {/* BENTO CARD 1: InclusiveJobs (AI & RAG Platform) - SPAN 7 */}
        {/* ========================================================= */}
        <div className="lg:col-span-7">
          <Tilt3DCard glowAccent="purple" magneticStrength={10} className="h-full">
            <div className="h-full p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-slate-200/90 dark:border-slate-800/90 shadow-2xl flex flex-col justify-between space-y-6 group hover:border-purple-500/50 transition-all duration-300">
              
              {/* Card Header & Badge */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 dark:bg-purple-400/10 border border-purple-500/30 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider">
                    <Bot className="w-3.5 h-3.5 text-purple-500" />
                    <span>AI & ML • RAG Pipeline</span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                    <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>Gemini 2.5 Flash + LangChain</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                  <span>InclusiveJobs</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-md bg-blue-600 text-white font-mono font-bold">RAG v2.5</span>
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 font-medium">
                  {isEn
                    ? 'Inclusive AI recruitment platform leveraging LangChain vector search and Gemini 2.5 Flash for semantic candidate-to-job matching & workplace accommodation advice.'
                    : 'Plateforme IA de recrutement inclusif propulsée par RAG, LangChain et Gemini 2.5 Flash pour l\'évaluation sémantique et l\'aménagement de postes.'}
                </p>
              </div>

              {/* Interactive RAG Match Simulator Box */}
              <div className="rounded-2xl bg-slate-950 p-4 border border-slate-800 text-slate-200 font-sans space-y-3 shadow-inner">
                {/* Simulator Header Tabs */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">
                      {isEn ? 'RAG Semantic Matcher' : 'Simulateur RAG IA'}
                    </span>
                  </div>

                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => setRagTab('demo')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold transition-all ${
                        ragTab === 'demo' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {isEn ? 'Interactive Demo' : 'Démonstration'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setRagTab('arch')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold transition-all ${
                        ragTab === 'arch' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {isEn ? 'RAG Architecture' : 'Architecture'}
                    </button>
                  </div>
                </div>

                {ragTab === 'demo' ? (
                  <div className="space-y-3">
                    {/* Candidate Selector */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs text-slate-400 font-mono">Select Candidate:</span>
                      <div className="flex gap-2">
                        {candidates.map((c, idx) => (
                          <button
                            key={c.id}
                            type="button"
                            onClick={() => {
                              setActiveCandidate(idx);
                              setMatchProgress(c.matchScore);
                            }}
                            className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                              activeCandidate === idx
                                ? 'bg-slate-800 text-purple-300 border border-purple-500/50'
                                : 'bg-slate-900 text-slate-400 hover:bg-slate-850'
                            }`}
                          >
                            {c.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Candidate Info Card */}
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
                      <div className="flex justify-between items-center font-mono">
                        <span className="font-bold text-slate-200">{candidates[activeCandidate].name} ({candidates[activeCandidate].role})</span>
                        <span className="text-emerald-400 font-bold flex items-center gap-1">
                          <UserCheck className="w-3.5 h-3.5" />
                          {matchProgress}% {isEn ? 'Semantic Match' : 'Score Match'}
                        </span>
                      </div>

                      <div className="text-slate-400">
                        <span className="text-purple-400 font-semibold">{isEn ? 'Accessibility Need:' : 'Besoin d\'aménagement:'}</span> {candidates[activeCandidate].need}
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-emerald-400 h-full transition-all duration-500 rounded-full"
                          style={{ width: `${matchProgress}%` }}
                        />
                      </div>

                      {/* Gemini AI Recommendation Box */}
                      <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200 font-mono leading-relaxed">
                        {candidates[activeCandidate].accommodation}
                      </div>
                    </div>

                    {/* Action button inside box */}
                    <div className="flex justify-end pt-1">
                      <button
                        type="button"
                        onClick={handleRunRagMatch}
                        disabled={isMatching}
                        className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow hover:shadow-purple-500/25 active:scale-95 disabled:opacity-50"
                      >
                        <Search className={`w-3.5 h-3.5 ${isMatching ? 'animate-spin' : ''}`} />
                        <span>{isMatching ? (isEn ? 'Vector Indexing...' : 'Analyse Vectorielle...') : (isEn ? 'Run RAG Re-Match' : 'Lancer Matching RAG')}</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* RAG Architecture Diagram View */
                  <div className="py-2 space-y-2 text-xs font-mono">
                    <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                        <p className="font-bold text-purple-400">1. Vector Embeddings</p>
                        <p className="text-[10px] text-slate-500 mt-1">LangChain Document Store</p>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                        <p className="font-bold text-blue-400">2. Cosine Match</p>
                        <p className="text-[10px] text-slate-500 mt-1">FastAPI Rest Backend</p>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                        <p className="font-bold text-emerald-400">3. Gemini 2.5</p>
                        <p className="text-[10px] text-slate-500 mt-1">LLM Synthesis & Recs</p>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                      {isEn
                        ? 'High-performance retrieval augmented generation pipeline indexing candidate accessibility specs with semantic job descriptions.'
                        : 'Pipeline RAG haute performance associant l\'indexation vectorielle des candidats aux critères d\'accessibilité des entreprises.'}
                    </p>
                  </div>
                )}
              </div>

              {/* Tech Stack & Links */}
              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-2">
                  {['FastAPI', 'Python', 'React', 'LangChain', 'Gemini API', 'MongoDB', 'RAG'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-slate-200/80 dark:border-slate-800/80 pt-4">
                  <a
                    href="https://github.com/FirasCh48"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>{isEn ? 'View Source Code' : 'Code Source GitHub'}</span>
                  </a>

                  <a
                    href="#projects"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    <span>{isEn ? 'Detailed Specs' : 'Détails du Projet'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </Tilt3DCard>
        </div>

        {/* ========================================================= */}
        {/* BENTO CARD 2: Warshatin 3D & IoT Controller - SPAN 5     */}
        {/* ========================================================= */}
        <div className="lg:col-span-5">
          <Tilt3DCard glowAccent="purple" magneticStrength={12} className="h-full">
            <div className="h-full p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-slate-200/90 dark:border-slate-800/90 shadow-2xl flex flex-col justify-between space-y-6 group hover:border-emerald-500/50 transition-all duration-300">
              
              {/* Card Header & Badges */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <Gamepad2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>3D Gaming & Hardware IoT</span>
                  </div>

                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">
                    SolidWorks CAO
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  Warshatin 3D & Custom Controller
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 font-medium">
                  {isEn
                    ? 'Multiplayer 3D game built in Unity coupled with a custom ergonomic game controller designed in SolidWorks CAD and 3D-printed.'
                    : 'Jeu 3D multijoueur sous Unity combiné à une manette physique sur-mesure conçue sous CAO SolidWorks et imprimée en 3D.'}
                </p>
              </div>

              {/* Interactive 3D Model Teaser Canvas Box */}
              <div className="relative rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-5 border border-slate-800 overflow-hidden text-center space-y-4 group/box shadow-inner">
                {/* Decorative Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                <div className="relative z-10 space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-lg group-hover/box:scale-110 transition-transform">
                    <Box className="w-8 h-8 animate-bounce" style={{ animationDuration: '3s' }} />
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-100">
                      {isEn ? 'Interactive 3D Gamepad Viewer' : 'Visionneuse 3D de la Manette'}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {isEn ? '3D SolidWorks mesh with real-time color customizer' : 'Maquette 3D SolidWorks avec personnalisation couleur'}
                    </p>
                  </div>

                  {/* Launch Modal Trigger Button */}
                  {onOpenWarshatin3D && (
                    <button
                      type="button"
                      onClick={onOpenWarshatin3D}
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:shadow-emerald-600/40 active:scale-95"
                    >
                      <Eye className="w-4 h-4" />
                      <span>{isEn ? 'Inspect 3D Controller Model' : 'Explorer la Manette en 3D'}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Tech Stack & Link */}
              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {['Unity 3D', 'C#', 'Blender', 'SolidWorks CAO', '3D Printing'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-slate-200/80 dark:border-slate-800/80 pt-4">
                  <a
                    href="https://github.com/FirasCh48"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  {onOpenWarshatin3D && (
                    <button
                      type="button"
                      onClick={onOpenWarshatin3D}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      <span>3D Live Demo</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

            </div>
          </Tilt3DCard>
        </div>

        {/* ========================================================= */}
        {/* BENTO CARD 3: DoctorAppointment Platform - SPAN 12 FULL */}
        {/* ========================================================= */}
        <div className="lg:col-span-12">
          <Tilt3DCard glowAccent="blue" magneticStrength={8} className="w-full">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-slate-200/90 dark:border-slate-800/90 shadow-2xl space-y-6 group hover:border-blue-500/50 transition-all duration-300">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Left Side: Description */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                      <Activity className="w-3.5 h-3.5 text-blue-500" />
                      <span>Full-Stack Web & Telemedicine</span>
                    </div>

                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">
                      Cross-Platform Ecosystem
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    DoctorAppointment Platform
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                    {isEn
                      ? 'End-to-end medical scheduling and telemedicine web & mobile application designed to connect patients with practitioners, automate calendars, and manage consultation records.'
                      : 'Solution complète Web et Mobile de télémédecine et de prise de rendez-vous médicaux automatisant les agendas et les dossiers de consultation.'}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {['React.js', 'Node.js', 'Express', 'MongoDB', 'React Native', 'Flutter', 'REST API'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Interactive Booking Simulator Box */}
                <div className="lg:col-span-6 rounded-2xl bg-slate-950 p-5 border border-slate-800 text-slate-200 space-y-4 shadow-inner">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-mono font-bold text-blue-300 uppercase tracking-wider">
                        {isEn ? 'Interactive Telemedicine Scheduler' : 'Prise de RDV en Direct'}
                      </span>
                    </div>

                    <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span>{isEn ? '2 Doctors Online' : 'Médecins Disponibles'}</span>
                    </span>
                  </div>

                  {/* Doctor Info */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center font-bold text-blue-300 text-xs">
                        Dr. S
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-100">Dr. Sarah Mansour</p>
                        <p className="text-[11px] text-slate-400">Cardiology & Telemedicine</p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      Video Consultation
                    </span>
                  </div>

                  {/* Slots Picker */}
                  <div className="space-y-2">
                    <p className="text-[11px] font-mono text-slate-400">{isEn ? 'Available Time Slots Today:' : 'Créneaux Disponibles Aujourd\'hui:'}</p>
                    <div className="grid grid-cols-3 gap-2">
                      {['09:00 AM', '10:30 AM', '02:30 PM'].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => handleBookSlot(slot)}
                          className={`py-2 px-3 rounded-lg text-xs font-mono font-bold transition-all ${
                            selectedSlot === slot
                              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                              : 'bg-slate-900 text-slate-300 hover:bg-slate-850 border border-slate-800'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Confirmation Toast */}
                  {bookingStatus === 'confirmed' ? (
                    <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{isEn ? `Appointment requested for ${selectedSlot}! Instant push alert sent.` : `RDV demandé pour ${selectedSlot} ! Notification push envoyée.`}</span>
                    </div>
                  ) : (
                    <div className="flex justify-end pt-1">
                      <button
                        type="button"
                        onClick={() => handleBookSlot(selectedSlot)}
                        className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-2 transition-all shadow hover:shadow-blue-500/25 active:scale-95"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{isEn ? 'Book Selected Slot' : 'Réserver ce Créneau'}</span>
                      </button>
                    </div>
                  )}

                </div>

              </div>

            </div>
          </Tilt3DCard>
        </div>

      </div>
    </section>
  );
};
