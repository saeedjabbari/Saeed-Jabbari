import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/content';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Maximize2,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectDetailViewProps {
  project: Project;
  onBackToArchive: () => void;
  onSelectProject: (project: Project) => void;
  onOpenBrief: () => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  onBackToArchive,
  onSelectProject,
  onOpenBrief
}) => {
  const [lightboxImage, setLightboxImage] = useState<{ url: string; caption: string } | null>(null);

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];

  // Specific sector archetypes
  const isCosmetics = project.sector === 'cosmetics';
  const isAutomotive = project.sector === 'automotive';
  const isFmcg = project.sector === 'fmcg';
  const isB2b = project.sector === 'b2b';

  return (
    <div className="bg-[#080C14] min-h-screen text-[#f4f5f7] pb-32 overflow-x-hidden selection:bg-[#D4FF00] selection:text-[#080C14]">
      {/* Sticky Secondary Sub-Nav Bar — Clean borderless glass */}
      <div className="sticky top-16 sm:top-20 z-40 bg-[#080C14]/90 backdrop-blur-xl">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 h-14 sm:h-16 flex items-center justify-between gap-3">
          <button
            onClick={onBackToArchive}
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-300 hover:text-[#D4FF00] uppercase tracking-wider transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Back to Works</span>
            <span className="xs:hidden">Back</span>
          </button>

          <div className="hidden md:flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-wider truncate">
            <span className="text-white truncate font-medium">{project.title}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.behanceUrl && (
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-[#D4FF00] text-[11px] font-mono tracking-wider uppercase rounded transition-colors"
              >
                <span>Behance</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
            <button
              onClick={onOpenBrief}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#D4FF00] hover:bg-[#c2eb00] text-[#080C14] text-[11px] font-bold tracking-wider uppercase rounded transition-all shadow-md shadow-[#D4FF00]/20 cursor-pointer"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Case Study Title Header */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 pt-10 sm:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-8 sm:mb-12"
        >
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-neutral-400 mb-3">
              <span className="text-[#D4FF00] font-bold">{project.client}</span>
              <span className="text-neutral-600">/</span>
              <span>{project.year}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.06] tracking-tight">
              {project.title}
            </h1>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              {project.tagline}
            </p>
          </div>
        </motion.div>
      </div>

      {/* 
        ========================================================================
        FULL-WIDTH MONITOR HERO PLATE
        Spans 100vw monitor width. Zero stroke border. Completely uncropped.
        ========================================================================
      */}
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => setLightboxImage({ url: project.heroImage, caption: project.title })}
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] max-w-none bg-[#04060B] py-8 sm:py-16 md:py-24 px-2 sm:px-6 cursor-zoom-in group"
      >
        <div className="max-w-[1720px] mx-auto relative flex items-center justify-center">
          <img
            src={project.heroImage}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full max-h-[88vh] object-contain mx-auto rounded-xl sm:rounded-2xl shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />

          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:bg-[#D4FF00] group-hover:text-[#080C14] transition-all">
            <Maximize2 className="w-4 h-4" />
          </div>
        </div>
      </motion.div>

      {/* 
        ========================================================================
        SECTION 01: CONTRASTING BRIGHT GALLERY PAPER CANVAS
        Transitions into a clean architectural off-white/paper zone for readability!
        No white line borders!
        ========================================================================
      */}
      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] max-w-none bg-[#F5F6F9] text-[#080C14] py-20 sm:py-32 px-4 sm:px-8 lg:px-14">
        <div className="max-w-[1440px] mx-auto">
          {/* Metadata Strip — Clean unboxed text */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pb-14 sm:pb-20">
            <div>
              <span className="block font-mono text-[10px] tracking-[0.2em] text-neutral-500 uppercase mb-2">
                CLIENT &amp; PARTNER
              </span>
              <span className="text-sm sm:text-base font-semibold text-[#080C14]">
                {project.client || 'Commissioned Work'}
              </span>
            </div>
            <div>
              <span className="block font-mono text-[10px] tracking-[0.2em] text-neutral-500 uppercase mb-2">
                DISCIPLINE &amp; SCOPE
              </span>
              <span className="text-sm sm:text-base font-semibold text-[#080C14]">
                {project.categoryTag}
              </span>
            </div>
            <div>
              <span className="block font-mono text-[10px] tracking-[0.2em] text-neutral-500 uppercase mb-2">
                COLOR ARCHITECTURE
              </span>
              <span className="text-sm sm:text-base font-mono text-[#080C14] font-semibold truncate block">
                {project.colorSystem}
              </span>
            </div>
            <div>
              <span className="block font-mono text-[10px] tracking-[0.2em] text-neutral-500 uppercase mb-2">
                BEHANCE CASE STUDY
              </span>
              {project.behanceUrl ? (
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#080C14] hover:text-emerald-700 transition-colors underline decoration-black/30 underline-offset-4"
                >
                  <span>View Full Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-sm text-neutral-600">{project.year}</span>
              )}
            </div>
          </div>

          {/* Narrative & Strategic Solution Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080C14] text-[#D4FF00] font-mono text-[10px] font-bold tracking-widest uppercase rounded">
                <span>01 — NARRATIVE &amp; POSITIONING</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#080C14] font-semibold leading-[1.08]">
                {project.subtitle}
              </h2>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                {project.description}
              </p>

              <div className="pt-6">
                <span className="block font-mono text-[10px] tracking-widest text-neutral-500 uppercase mb-3">
                  DELIVERABLES &amp; SUBSTRATES
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#080C14]">
                  {project.substrates.map((sub) => (
                    <span key={sub} className="px-3 py-1.5 bg-[#E6EAF0] rounded font-semibold">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-[#EAEFF5] p-6 sm:p-8 rounded-2xl">
                  <span className="block font-mono text-[10px] tracking-widest text-neutral-500 uppercase mb-2">
                    THE COMMERCIAL CHALLENGE
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                    {project.challenge}
                  </p>
                </div>

                <div className="bg-[#E4ECE2] p-6 sm:p-8 rounded-2xl">
                  <span className="block font-mono text-[10px] tracking-widest text-emerald-900 uppercase mb-2 font-bold">
                    STRATEGIC DESIGN SOLUTION
                  </span>
                  <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-normal">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Creative Highlights */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
                <span className="block font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
                  KEY COMMERCIAL HIGHLIGHTS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {project.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#080C14] text-[#D4FF00] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-xs sm:text-sm text-neutral-800 leading-snug font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 02: CINEMATIC DARK ARCHIVAL EXHIBITION
        Clean, quiet presentation without wordy alt text sentences under images.
        Ultra-concise monospace plate numbers and minimal labels!
        ========================================================================
      */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 pt-20 sm:pt-32">
        <div className="flex items-center justify-between mb-12 sm:mb-16">
          <span className="font-mono text-[11px] tracking-widest text-[#D4FF00] uppercase font-bold">
            02 — ARCHIVAL PLATES ({project.galleryImages.length} PLATES · UNCROPPED)
          </span>
          <span className="font-mono text-[11px] text-neutral-400 hidden sm:inline">
            CLICK TO EXPAND
          </span>
        </div>

        {/* Tailored Layout Rendering */}
        {isCosmetics && (
          <div className="space-y-20 sm:space-y-32">
            {/* Asymmetric Monograph Duo */}
            {project.galleryImages.slice(0, 2).length === 2 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                <div
                  onClick={() => setLightboxImage({ url: project.galleryImages[0].url, caption: project.title })}
                  className="lg:col-span-7 bg-[#0E1522] rounded-xl p-6 sm:p-12 cursor-zoom-in group"
                >
                  <img
                    src={project.galleryImages[0].url}
                    alt={project.galleryImages[0].caption}
                    referrerPolicy="no-referrer"
                    className="w-full max-h-[72vh] object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  {/* Ultra-minimal plate tag, no wordy description */}
                  <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-neutral-400">
                    <span className="tracking-widest uppercase text-neutral-500">{project.galleryImages[0].specLabel || 'PLATE 01'}</span>
                    <span className="text-[#D4FF00] font-bold">01</span>
                  </div>
                </div>

                <div
                  onClick={() => setLightboxImage({ url: project.galleryImages[1].url, caption: project.title })}
                  className="lg:col-span-5 bg-[#0E1522] rounded-xl p-6 sm:p-12 cursor-zoom-in group"
                >
                  <img
                    src={project.galleryImages[1].url}
                    alt={project.galleryImages[1].caption}
                    referrerPolicy="no-referrer"
                    className="w-full max-h-[72vh] object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-neutral-400">
                    <span className="tracking-widest uppercase text-neutral-500">{project.galleryImages[1].specLabel || 'PLATE 02'}</span>
                    <span className="text-[#D4FF00] font-bold">02</span>
                  </div>
                </div>
              </div>
            )}

            {/* Remaining plates in clean 3-col grid */}
            {project.galleryImages.length > 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.galleryImages.slice(2).map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setLightboxImage({ url: img.url, caption: project.title })}
                    className="bg-[#0E1522] rounded-xl p-6 cursor-zoom-in group flex flex-col justify-between"
                  >
                    <img
                      src={img.url}
                      alt={img.caption}
                      referrerPolicy="no-referrer"
                      className="w-full max-h-[52vh] object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                    <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-neutral-400">
                      <span className="tracking-widest uppercase text-neutral-500">{img.specLabel || `PLATE 0${i + 3}`}</span>
                      <span className="text-[#D4FF00] font-bold">0{i + 3}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {isAutomotive && (
          <div className="space-y-20 sm:space-y-32">
            {/* FULL MONITOR DOUBLE-PAGE CATALOG SPREAD */}
            {project.galleryImages[0] && (
              <div
                onClick={() => setLightboxImage({ url: project.galleryImages[0].url, caption: project.title })}
                className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] max-w-none bg-[#030509] py-10 sm:py-20 px-4 sm:px-10 cursor-zoom-in group"
              >
                <div className="max-w-[1720px] mx-auto text-center">
                  <img
                    src={project.galleryImages[0].url}
                    alt={project.galleryImages[0].caption}
                    referrerPolicy="no-referrer"
                    className="w-full max-h-[88vh] object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  <div className="mt-3 flex items-center justify-between max-w-4xl mx-auto font-mono text-[11px] text-neutral-400 px-2">
                    <span className="tracking-widest uppercase text-neutral-500">{project.galleryImages[0].specLabel || 'TECHNICAL SPREAD'}</span>
                    <span className="text-[#D4FF00] font-bold">01</span>
                  </div>
                </div>
              </div>
            )}

            {/* Remaining Component Plates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.galleryImages.slice(1).map((img, i) => (
                <div
                  key={i}
                  onClick={() => setLightboxImage({ url: img.url, caption: project.title })}
                  className="bg-[#0E1522] rounded-xl p-6 sm:p-10 cursor-zoom-in group"
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    referrerPolicy="no-referrer"
                    className="w-full max-h-[62vh] object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-neutral-400">
                    <span className="tracking-widest uppercase text-neutral-500">{img.specLabel || `PLATE 0${i + 2}`}</span>
                    <span className="text-[#D4FF00] font-bold">0{i + 2}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(isFmcg || isB2b) && (
          <div className="space-y-16 sm:space-y-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {project.galleryImages.map((img, idx) => {
                const isLarge = idx % 3 === 0;
                const colSpan = isLarge ? 'lg:col-span-12' : idx % 2 === 0 ? 'lg:col-span-7' : 'lg:col-span-5';
                return (
                  <div
                    key={idx}
                    onClick={() => setLightboxImage({ url: img.url, caption: project.title })}
                    className={`${colSpan} bg-[#0E1522] rounded-xl p-6 sm:p-10 cursor-zoom-in group`}
                  >
                    <img
                      src={img.url}
                      alt={img.caption}
                      referrerPolicy="no-referrer"
                      className={`w-full ${isLarge ? 'max-h-[82vh]' : 'max-h-[62vh]'} object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.01]`}
                    />
                    <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-neutral-400">
                      <span className="tracking-widest uppercase text-neutral-500">{img.specLabel || `PLATE 0${idx + 1}`}</span>
                      <span className="text-[#D4FF00] font-bold">0{idx + 1}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Next / Previous Project Navigation */}
        <div className="pt-24 sm:pt-36">
          <div className="flex items-center justify-between mb-8">
            <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
              CONTINUE EXPLORING ARCHIVE
            </span>
            <button
              onClick={onBackToArchive}
              className="font-mono text-xs text-[#D4FF00] hover:underline cursor-pointer"
            >
              View All {PROJECTS.length} Works
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Previous Project */}
            <div
              onClick={() => onSelectProject(prevProject)}
              className="group cursor-pointer"
            >
              <div className="bg-[#0E1522] rounded-xl p-6 sm:p-8 flex items-center justify-center overflow-hidden group-hover:bg-[#121B2B] transition-colors">
                <img
                  src={prevProject.heroImage}
                  alt={prevProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-56 object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-3.5 space-y-1">
                <div className="flex items-center justify-between font-mono text-[11px] text-neutral-400 uppercase tracking-wider">
                  <span className="text-[#D4FF00] font-semibold">{prevProject.sectorLabel}</span>
                  <span className="text-neutral-500 flex items-center gap-1">
                    <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
                    <span>PREVIOUS</span>
                  </span>
                </div>
                <h4 className="font-serif text-lg sm:text-xl text-white font-semibold group-hover:text-[#D4FF00] transition-colors leading-snug">
                  {prevProject.title}
                </h4>
              </div>
            </div>

            {/* Next Project */}
            <div
              onClick={() => onSelectProject(nextProject)}
              className="group cursor-pointer"
            >
              <div className="bg-[#0E1522] rounded-xl p-6 sm:p-8 flex items-center justify-center overflow-hidden group-hover:bg-[#121B2B] transition-colors">
                <img
                  src={nextProject.heroImage}
                  alt={nextProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-56 object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-3.5 space-y-1">
                <div className="flex items-center justify-between font-mono text-[11px] text-neutral-400 uppercase tracking-wider">
                  <span className="text-[#D4FF00] font-semibold">{nextProject.sectorLabel}</span>
                  <span className="text-neutral-500 flex items-center gap-1">
                    <span>NEXT</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
                <h4 className="font-serif text-lg sm:text-xl text-white font-semibold group-hover:text-[#D4FF00] transition-colors leading-snug">
                  {nextProject.title}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Plate Lightbox with Zero Cropping & Clean Minimalist Title */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-[#030509]/98 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-[#D4FF00] hover:text-[#080C14] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxImage.url}
              alt={project.title}
              className="max-w-full max-h-[86vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="mt-3 text-xs text-neutral-400 font-mono tracking-wider uppercase text-center px-4">
              {project.title}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
