import React from "react";
import {
  X,
  ExternalLink,
  Mail,
  Linkedin,
  Github,
  Download,
  Sparkles,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface ProfilePhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume?: () => void;
}

export const ProfilePhotoModal: React.FC<ProfilePhotoModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto"
        >
          {/* Top Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-md transition-colors"
            title="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* Left/Top Image Spotlight Box */}
            <div className="md:col-span-6 relative bg-slate-950 flex items-center justify-center p-6 sm:p-8 overflow-hidden group">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-purple-600/30 blur-2xl pointer-events-none" />

              <div className="relative z-10 w-full max-w-[280px] aspect-square rounded-2xl p-1 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 shadow-2xl">
                <img
                  src="/src/assets/images/me.png"
                  alt="Firas CHABBOUH"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-xl shadow-inner transition-transform duration-500 group-hover:scale-105"
                />

                {/* Online Status Badge */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/90 text-white text-[11px] font-extrabold border border-emerald-500/50 backdrop-blur-md shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-emerald-400">En Ligne</span>
                </div>
              </div>
            </div>

            {/* Right/Bottom Info Card */}
            <div className="md:col-span-6 p-6 sm:p-7 flex flex-col justify-between space-y-6 bg-slate-50/50 dark:bg-slate-900/50">
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-xs font-bold border border-blue-500/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Profil Ingénieur IA & Full-Stack</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                    Firas CHABBOUH
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    Software & AI Engineer • ISAMM Manouba
                  </p>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Ingénieur passionné par l'IA générative (RAG / LLMs), le
                  développement d'architectures applicatives web performantes et
                  la création d'expériences 3D interactives.
                </p>

                {/* Status List */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Disponible pour Opportunités & Projets</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>Manouba, Tunisie</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-md transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>

                {onOpenResume && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenResume();
                    }}
                    className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all"
                  >
                    <Download className="w-4 h-4 text-blue-500" />
                    <span>Consulter le CV (PDF)</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
