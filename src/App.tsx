import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { SplashScreen } from './components/SplashScreen';
import { Header } from './components/Header';
import { Hero3DSection } from './components/Hero3DSection';
import { AchievementsSection } from './components/AchievementsSection';
import { FeaturedSpotlightSection } from './components/FeaturedSpotlightSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { HackathonsSection } from './components/HackathonsSection';
import { BlogSection } from './components/BlogSection';
import { EducationSection } from './components/EducationSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Warshatin3DModal } from './components/Warshatin3DModal';
import { ScrollReveal } from './components/ScrollReveal';
import { BackToTop } from './components/BackToTop';
import { FloatingSocialBar } from './components/FloatingSocialBar';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isWarshatin3DOpen, setIsWarshatin3DOpen] = useState(false);

  return (
    <LanguageProvider>
      <ThemeProvider>
        {/* 4-Second Cyber Splash Screen */}
        <SplashScreen duration={4000} />

        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500 selection:text-white transition-colors duration-300">
        
        {/* Navigation Header */}
        <Header
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Main Sections */}
        <main className="overflow-hidden">
          {/* 3D Interactive Hero */}
          <Hero3DSection
            onOpenResume={() => setIsResumeOpen(true)}
          />

          {/* Dynamic Achievements & Key Stats Strip */}
          <AchievementsSection />

          {/* Featured Project Spotlight (Bento-Grid Showcase) */}
          <ScrollReveal direction="up">
            <FeaturedSpotlightSection
              onOpenWarshatin3D={() => setIsWarshatin3DOpen(true)}
            />
          </ScrollReveal>

          {/* Projects Showcase */}
          <ScrollReveal direction="up">
            <ProjectsSection
              onOpenWarshatin3D={() => setIsWarshatin3DOpen(true)}
            />
          </ScrollReveal>

          {/* Verifiable Certifications */}
          <ScrollReveal direction="up">
            <CertificationsSection />
          </ScrollReveal>

          {/* Technical Skills & Proficiency */}
          <ScrollReveal direction="up">
            <SkillsSection />
          </ScrollReveal>

          {/* Work Experience */}
          <ScrollReveal direction="up">
            <ExperienceSection />
          </ScrollReveal>

          {/* Hackathons & Community */}
          <ScrollReveal direction="up">
            <HackathonsSection />
          </ScrollReveal>

          {/* Technical Blog */}
          <ScrollReveal direction="up">
            <BlogSection />
          </ScrollReveal>

          {/* Academic Education */}
          <ScrollReveal direction="up">
            <EducationSection />
          </ScrollReveal>

          {/* Recruiter FAQ Accordion */}
          <ScrollReveal direction="up">
            <FaqSection />
          </ScrollReveal>

          {/* Contact & Recruitment Form */}
          <ScrollReveal direction="up">
            <ContactSection />
          </ScrollReveal>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Modals & Drawers */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

        <Warshatin3DModal
          isOpen={isWarshatin3DOpen}
          onClose={() => setIsWarshatin3DOpen(false)}
        />

        {/* Floating Back To Top Button & Floating Social Dock */}
        <FloatingSocialBar />
        <BackToTop />

      </div>
    </ThemeProvider>
  </LanguageProvider>
  );
}
