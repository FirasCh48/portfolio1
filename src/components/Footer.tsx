import React from "react";
import profilePhoto from "../assets/images/me.png";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === "en";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl p-[2px] bg-gradient-to-tr from-blue-600 to-indigo-600 overflow-hidden shrink-0">
              <img
               src={profilePhoto}
                alt="Firas CHABBOUH"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div>
              <div className="font-extrabold text-lg text-white">
                Firas CHABBOUH
              </div>
              <div className="text-xs text-blue-400">
                {isEn
                  ? "Software Engineering Student â€¢ ISAMM Manouba"
                  : "Ã‰lÃ¨ve IngÃ©nieur en GÃ©nie Logiciel â€¢ ISAMM Manouba"}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 flex-wrap justify-center">
            <a
              href="#projects"
              className="hover:text-blue-400 transition-colors"
            >
              {isEn ? "Projects" : "Projets"}
            </a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              {isEn ? "Skills" : "CompÃ©tences"}
            </a>
            <a
              href="#certifications"
              className="hover:text-blue-400 transition-colors"
            >
              {isEn ? "Certifications" : "Certifications"}
            </a>
            <a
              href="#experience"
              className="hover:text-blue-400 transition-colors"
            >
              {isEn ? "Experiences" : "ExpÃ©riences"}
            </a>
            <a href="#blog" className="hover:text-blue-400 transition-colors">
              {isEn ? "Blog" : "Blog"}
            </a>
            <a href="#faq" className="hover:text-blue-400 transition-colors">
              {isEn ? "FAQ" : "FAQ"}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-blue-600 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-lg"
              title={isEn ? "Back to top" : "Retour au haut de page"}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <div>
            Â© {new Date().getFullYear()} Firas CHABBOUH.{" "}
            {isEn ? "All rights reserved." : "Tous droits rÃ©servÃ©s."}
          </div>
          <div className="flex items-center gap-1">
            {isEn
              ? "Built with passion using React 18, Three.js 3D, Gemini 2.5 API & Tailwind CSS."
              : "ConÃ§u avec passion & React 18, Three.js 3D, Gemini 2.5 API et Tailwind CSS."}
          </div>
        </div>
      </div>
    </footer>
  );
};
