import React, { useState, useEffect } from "react";
import profilePhoto from "../assets/images/me.png";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  MapPin,
  Cpu,
  ExternalLink,
  Award,
  Code2,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { ThreeCanvas3D } from "./ThreeCanvas3D";
import { Tilt3DCard } from "./Tilt3DCard";
import { useLanguage } from "../context/LanguageContext";
import profilePhoto from "../assets/images/me.png";

interface Hero3DSectionProps {
  onOpenResume: () => void;
}

export const Hero3DSection: React.FC<Hero3DSectionProps> = ({
  onOpenResume,
}) => {
  const { language } = useLanguage();
  const isEn = language === "en";

  // Typewriter Keyboard Animation States
  const [greetingTyped, setGreetingTyped] = useState("");
  const [titleTyped, setTitleTyped] = useState("");
  const [bioTyped, setBioTyped] = useState("");
  const [activeStage, setActiveStage] = useState<
    "greeting" | "title" | "bio" | "done"
  >("greeting");

  const greetingPrefix = isEn ? "Hello, I am " : "Bonjour, je suis ";
  const nameString = "Firas CHABBOUH";
  const fullGreeting = greetingPrefix + nameString;
  const fullTitle = "Software & AI Engineer | Full-Stack & Generative AI";
  const fullBio = isEn ? PERSONAL_INFO.bioEn : PERSONAL_INFO.bio;

  useEffect(() => {
    // Reset typing on reload or language switch
    setGreetingTyped("");
    setTitleTyped("");
    setBioTyped("");
    setActiveStage("greeting");

    let isCancelled = false;

    // Stage 1: Typing Greeting ("Bonjour, je suis Firas CHABBOUH")
    let greetingIndex = 0;
    const greetingInterval = setInterval(() => {
      if (isCancelled) return;
      greetingIndex++;
      setGreetingTyped(fullGreeting.slice(0, greetingIndex));

      if (greetingIndex >= fullGreeting.length) {
        clearInterval(greetingInterval);
        setTimeout(() => {
          if (!isCancelled) setActiveStage("title");
        }, 150);
      }
    }, 35);

    return () => {
      isCancelled = true;
      clearInterval(greetingInterval);
    };
  }, [language]);

  // Stage 2: Typing Title
  useEffect(() => {
    if (activeStage !== "title") return;

    let titleIndex = 0;
    const titleInterval = setInterval(() => {
      titleIndex++;
      setTitleTyped(fullTitle.slice(0, titleIndex));

      if (titleIndex >= fullTitle.length) {
        clearInterval(titleInterval);
        setTimeout(() => {
          setActiveStage("bio");
        }, 150);
      }
    }, 25);

    return () => clearInterval(titleInterval);
  }, [activeStage]);

  // Stage 3: Typing Bio Description
  useEffect(() => {
    if (activeStage !== "bio") return;

    let bioIndex = 0;
    const bioInterval = setInterval(() => {
      bioIndex++;
      setBioTyped(fullBio.slice(0, bioIndex));

      if (bioIndex >= fullBio.length) {
        clearInterval(bioInterval);
        setActiveStage("done");
      }
    }, 12);

    return () => clearInterval(bioInterval);
  }, [activeStage]);

  // Helper to format bio text with consistent highlight color while typing
  const formatFormattedBio = (text: string) => {
    const regex =
      /(ISAMM Manouba|Full-Stack \(React, Spring Boot, FastAPI\)|IA GÃ©nÃ©rative \(RAG, Gemini 2\.5, LangChain\)|Generative AI integration \(RAG, Gemini 2\.5, LangChain\)|Generative AI \(RAG, Gemini 2\.5, LangChain\)|3D Interactives & IoT \(Unity, Blender, CAO\)|3D & IoT \(Unity, Blender, CAD\))/g;
    const parts = text.split(regex);

    return parts.map((part, idx) => {
      if (
        part === "ISAMM Manouba" ||
        part === "Full-Stack (React, Spring Boot, FastAPI)" ||
        part.includes("IA GÃ©nÃ©rative") ||
        part.includes("Generative AI") ||
        part.includes("3D")
      ) {
        return (
          <strong
            key={idx}
            className="text-blue-600 dark:text-blue-400 font-bold"
          >
            {part}
          </strong>
        );
      }
      return <span key={idx}>{part}</span>;
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <ThreeCanvas3D interactive={true} />
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Headline & Information */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/30 dark:border-blue-400/30 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold backdrop-blur-md animate-pulse">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span>
                {isEn
                  ? PERSONAL_INFO.availabilityEn
                  : PERSONAL_INFO.availability}
              </span>
            </div>

            {/* Main Name & Title (Keyboard Typewriter Output) */}
            <div className="space-y-3 min-h-[140px] sm:min-h-[160px] flex flex-col justify-center">
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                {greetingTyped.length <= greetingPrefix.length ? (
                  <span>
                    {greetingTyped}
                    {activeStage === "greeting" && (
                      <span className="inline-block w-2.5 h-8 sm:h-12 ml-1 bg-blue-600 animate-pulse align-middle" />
                    )}
                  </span>
                ) : (
                  <span>
                    {greetingPrefix}
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      {greetingTyped.slice(greetingPrefix.length)}
                    </span>
                    {activeStage === "greeting" && (
                      <span className="inline-block w-2.5 h-8 sm:h-12 ml-1 bg-blue-600 animate-pulse align-middle" />
                    )}
                  </span>
                )}
              </h1>

              {/* Subtitle / Engineer Role */}
              {(activeStage === "title" ||
                activeStage === "bio" ||
                activeStage === "done") && (
                <h2 className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <Cpu className="w-6 h-6 text-blue-500 shrink-0" />
                  <span>
                    {titleTyped}
                    {activeStage === "title" && (
                      <span className="inline-block w-2 h-6 ml-1 bg-indigo-500 animate-pulse align-middle" />
                    )}
                  </span>
                </h2>
              )}
            </div>

            {/* Short Bio Paragraph (Typed character by character) */}
            <div className="min-h-[90px] sm:min-h-[100px]">
              {(activeStage === "bio" || activeStage === "done") && (
                <p className="text-base sm:text-lg text-slate-650 dark:text-slate-300 leading-relaxed font-normal max-w-2xl font-sans">
                  {formatFormattedBio(bioTyped)}
                  {activeStage === "bio" && (
                    <span className="inline-block w-2 h-5 ml-1 bg-purple-500 animate-pulse align-middle" />
                  )}
                  {activeStage === "done" && (
                    <span className="inline-block w-1.5 h-4 ml-1 bg-blue-500/80 animate-ping align-middle" />
                  )}
                </p>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* View Projects */}
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-sm shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02] transition-all"
              >
                <span>
                  {isEn ? "Explore My Projects" : "Explorer mes Projets"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Resume Button */}
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 text-white dark:bg-slate-800 dark:text-white font-bold text-sm shadow-lg hover:bg-slate-800 dark:hover:bg-slate-700 hover:scale-[1.02] transition-all border border-slate-700/50"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>{isEn ? "My Resume (PDF)" : "Mon CV (PDF)"}</span>
              </button>

              {/* Contact Me */}
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-200 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-800"
              >
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>{isEn ? "Contact Me" : "Me Contacter"}</span>
              </a>
            </div>

            {/* Social Links & Contact Info */}
            <div className="flex flex-wrap items-center gap-4 pt-4 text-sm text-slate-600 dark:text-slate-400">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-slate-200 dark:border-slate-700"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-200 dark:border-slate-700"
              >
                <Github className="w-4 h-4 text-slate-900 dark:text-white" />
                <span>GitHub (FirasCh48)</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>{isEn ? "Manouba, Tunisia" : "Manouba, Tunisie"}</span>
              </div>
            </div>
          </div>

          {/* Right Column - 3D Interactive Feature Card Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <Tilt3DCard className="w-full max-w-md">
              <div className="relative p-7 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl backdrop-blur-xl space-y-6">
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl p-[2px] bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 shadow-lg overflow-hidden shrink-0">
                      <img
                        src={profilePhoto}
                        alt="Firas CHABBOUH"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover rounded-[14px]"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">
                        Firas CHABBOUH
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                        ISAMM Manouba â€¢{" "}
                        {isEn ? "Software Engineering" : "Cycle IngÃ©nieur"}
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20">
                    {isEn ? "2nd Year" : "2e AnnÃ©e"}
                  </span>
                </div>

                {/* Core Expertise Tags */}
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {isEn ? "Domain Pillars" : "Piliers d'Expertise"}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-500 shrink-0" />
                      <div>
                        <div className="font-bold text-slate-900 dark:text-blue-200">
                          RAG & Gemini AI
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">
                          LangChain / Python
                        </div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900/50 flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-purple-500 shrink-0" />
                      <div>
                        <div className="font-bold text-slate-900 dark:text-purple-200">
                          Full-Stack Web
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">
                          React / Spring / Node
                        </div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/50 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-indigo-500 shrink-0" />
                      <div>
                        <div className="font-bold text-slate-900 dark:text-indigo-200">
                          3D Game & IoT
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">
                          Unity / Blender / CAD
                        </div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 flex items-center gap-2">
                      <Award className="w-4 h-4 text-emerald-500 shrink-0" />
                      <div>
                        <div className="font-bold text-slate-900 dark:text-emerald-200">
                          {isEn ? "Certified UI/UX" : "UI/UX CertifiÃ©"}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">
                          Uxcel & Centre Elife
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                  <div className="p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                    <div className="text-xl font-black text-blue-600 dark:text-blue-400">
                      7+
                    </div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                      Hackathons
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                    <div className="text-xl font-black text-purple-600 dark:text-purple-400">
                      2
                    </div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                      {isEn ? "UI/UX Certs" : "Certifs UI/UX"}
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                    <div className="text-xl font-black text-emerald-600 dark:text-emerald-400">
                      4+
                    </div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                      {isEn ? "Key Projects" : "Projets Majeurs"}
                    </div>
                  </div>
                </div>

                {/* Footer hint */}
                <div className="text-center pt-1 text-[11px] text-slate-400 dark:text-slate-500 italic">
                  {isEn
                    ? "ðŸ’¡ Hover over card to interact with 3D tilt"
                    : "ðŸ’¡ Survolez cette carte pour tester l'effet 3D interactif"}
                </div>
              </div>
            </Tilt3DCard>
          </div>
        </div>
      </div>
    </section>
  );
};
