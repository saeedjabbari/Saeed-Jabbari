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

  // Multi-scale gallery layout so internal Behance plates have dramatic scale variety and negative space
  const getPlateLayout = (idx: number) => {
    const pattern = idx % 5;
    switch (pattern) {
      case 0:
        return {
          isFullBleed: true,
          colClass: 'lg:col-span-12',
          aspectClass: 'aspect-[16/10] sm:aspect-[16/9]'
        };
      case 1:
        return {
          isFullBleed: false,
          colClass: 'lg:col-span-7',
          aspectClass: 'aspect-[4/4] sm:aspect-[5/4]'
        };
      case 2:
        return {
          isFullBleed: false,
          colClass: 'lg:col-span-5 lg:mt-28',
          aspectClass: 'aspect-[4/5]'
        };
      case 3:
        return {
          isFullBleed: false,
          colClass: 'lg:col-start-2 lg:col-span-10',
          aspectClass: 'aspect-[16/10]'
        };
      default:
        return {
          isFullBleed: false,
          colClass: 'lg:col-start-3 lg:col-span-8',
          aspectClass: 'aspect-[16/11]'
        };
    }
  };

  return (
    <div className="bg-[#06070a] min-h-screen text-[#f5f2eb] pb-32 overflow-x-hidden selection:bg-[#cfad76] selection:text-black">
      {/* Sub-Header Navigation Bar */}
      <div className="sticky top-20 z-30 bg-[#06070a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 py-4 flex items-center justify-between gap-4">
          <button
            onClick={onBackToArchive}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:text-[#cfad76] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Works</span>
          </button>

          <div className="hidden md:flex items-center gap-2.5 font-mono text-[11px] text-neutral-500 uppercase tracking-wider">
            <span>{project.sectorLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#cfad76]">{project.title}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.behanceUrl && (
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-white/15 hover:border-[#cfad76] text-neutral-200 hover:text-[#cfad76] text-[11px] font-mono tracking-wider uppercase rounded transition-colors"
              >
                <span>Behance</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onOpenBrief}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#cfad76] hover:bg-[#dfbd86] text-[#08090c] text-[11px] font-bold tracking-wider uppercase rounded transition-colors cursor-pointer"
            >
              <span>Inquire Similar</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Case Study Header with Generous Negative Space */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 pt-16 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16 sm:mb-24"
        >
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-[0.22em] uppercase text-[#cfad76] mb-5">
              <span>{project.sectorLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-400">{project.year}</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-400">{project.client}</span>
            </div>

            <h1
              style={{ fontFamily: 'Georgia, serif' }}
              className="font-serif text-4xl sm:text-6xl lg:text-[68px] font-normal text-white leading-[1.04] tracking-[-0.025em]"
            >
              {project.title}
            </h1>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              {project.tagline}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Primary Full-Viewport-Width Bleed Hero Plate */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => setLightboxImage({ url: project.heroImage, caption: project.title })}
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] aspect-[16/10] sm:aspect-[21/9] overflow-hidden border-y border-white/10 mb-24 sm:mb-32 bg-[#0e1015] cursor-zoom-in group"
      >
        <img
          src={project.heroImage}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
      </motion.div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14">
        {/* Clean Editorial Metadata Strip (Unboxed Typography) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-white/10 mb-28"
        >
          <div>
            <span className="block font-mono text-[10px] tracking-[0.22em] text-neutral-500 uppercase mb-2">
              CLIENT & PARTNER
            </span>
            <span className="text-sm sm:text-base text-white font-normal">
              {project.client || 'Commissioned Work'}
            </span>
          </div>
          <div>
            <span className="block font-mono text-[10px] tracking-[0.22em] text-neutral-500 uppercase mb-2">
              DISCIPLINE & SCOPE
            </span>
            <span className="text-sm sm:text-base text-white font-normal">
              {project.categoryTag}
            </span>
          </div>
          <div>
            <span className="block font-mono text-[10px] tracking-[0.22em] text-neutral-500 uppercase mb-2">
              VISUAL PALETTE
            </span>
            <span className="text-sm sm:text-base text-[#cfad76] font-normal">
              {project.colorSystem}
            </span>
          </div>
          <div>
            <span className="block font-mono text-[10px] tracking-[0.22em] text-neutral-500 uppercase mb-2">
              BEHANCE ARCHIVE
            </span>
            {project.behanceUrl ? (
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base text-white hover:text-[#cfad76] transition-colors underline decoration-white/30 underline-offset-4"
              >
                <span>View Full Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : (
              <span className="text-sm text-neutral-300">{project.year}</span>
            )}
          </div>
        </motion.div>

        {/* Creative Narrative: Overview, Challenge & Creative Direction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 mb-36 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="block font-mono text-[10px] tracking-[0.24em] text-[#cfad76] uppercase">
              01 — PROJECT NARRATIVE
            </span>
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="font-serif text-2xl sm:text-4xl text-white font-normal leading-snug"
            >
              {project.subtitle}
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              {project.description}
            </p>

            {/* Unboxed Clean Deliverables List */}
            <div className="pt-6 border-t border-white/10">
              <span className="block font-mono text-[10px] tracking-[0.22em] text-neutral-500 uppercase mb-3">
                ROLES & DELIVERABLES
              </span>
              <div className="flex flex-wrap items-center gap-y-2 text-xs font-mono text-neutral-300">
                {project.substrates.map((sub, i) => (
                  <React.Fragment key={sub}>
                    <span>{sub}</span>
                    {i < project.substrates.length - 1 && (
                      <span className="mx-3 text-neutral-600" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="border-t border-white/15 pt-6">
                <span className="block font-mono text-[10px] tracking-[0.22em] text-neutral-400 uppercase mb-3">
                  THE CHALLENGE
                </span>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  {project.challenge}
                </p>
              </div>

              <div className="border-t border-[#cfad76]/50 pt-6">
                <span className="block font-mono text-[10px] tracking-[0.22em] text-[#cfad76] uppercase mb-3">
                  CREATIVE DIRECTION
                </span>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-light">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Creative Highlights */}
            <div className="border-t border-white/10 pt-8">
              <span className="block font-mono text-[10px] tracking-[0.22em] text-neutral-400 uppercase mb-5">
                KEY VISUAL & STRATEGIC HIGHLIGHTS
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#cfad76] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-[13px] text-neutral-300 leading-relaxed font-light">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Multi-Scale Behance Visual Gallery */}
        <div className="mb-36">
          <div className="flex items-center justify-between mb-16 pb-5 border-b border-white/10">
            <span className="font-mono text-[11px] tracking-[0.25em] text-[#cfad76] uppercase">
              02 — COMPLETE VISUAL PRESENTATION ({project.galleryImages.length} PLATES)
            </span>
            <span className="font-mono text-[11px] text-neutral-500 hidden sm:inline">
              CLICK ANY PLATE TO EXPAND
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-24 sm:gap-y-32 lg:gap-x-14 lg:gap-y-36 items-start">
            {project.galleryImages.map((img, idx) => {
              const layout = getPlateLayout(idx);
              const plateNum = String(idx + 1).padStart(2, '0');

              return (
                <motion.figure
                  key={idx}
                  initial={
                    idx % 3 === 0
                      ? { opacity: 0, y: 70, scale: 0.96 }
                      : idx % 3 === 1
                      ? { opacity: 0, x: -60, y: 40 }
                      : { opacity: 0, x: 60, y: 40 }
                  }
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setLightboxImage({ url: img.url, caption: img.caption })}
                  className={`${layout.colClass} group cursor-zoom-in`}
                >
                  <div
                    className={
                      layout.isFullBleed
                        ? 'w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'
                        : 'w-full'
                    }
                  >
                    <div
                      className={`relative w-full ${layout.aspectClass} overflow-hidden ${
                        layout.isFullBleed ? 'rounded-none border-y' : 'rounded-lg border'
                      } border-white/10 bg-[#0d0f14] group-hover:border-[#cfad76]/50 transition-colors duration-500`}
                    >
                      <img
                        src={img.url}
                        alt={img.caption}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.03]"
                      />

                      {/* Subtle Zoom Icon on Hover */}
                      <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>

                    <figcaption
                      className={`mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-neutral-400 ${
                        layout.isFullBleed ? 'max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14' : ''
                      }`}
                    >
                      <span className="font-light text-neutral-300">{img.caption}</span>
                      <span className="font-mono text-[10px] tracking-[0.2em] text-[#cfad76] uppercase shrink-0">
                        {plateNum} — {img.specLabel}
                      </span>
                    </figcaption>
                  </div>
                </motion.figure>
              );
            })}
          </div>
        </div>

        {/* Next / Previous Project Navigation */}
        <div className="pt-16 border-t border-white/15">
          <div className="flex items-center justify-between mb-10">
            <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-500 uppercase">
              CONTINUE EXPLORING ARCHIVE
            </span>
            <button
              onClick={onBackToArchive}
              className="font-mono text-xs text-[#cfad76] hover:underline cursor-pointer"
            >
              View All {PROJECTS.length} Works
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Previous Project */}
            <div
              onClick={() => onSelectProject(prevProject)}
              className="group relative h-72 rounded-xl overflow-hidden border border-white/10 hover:border-[#cfad76]/60 cursor-pointer"
            >
              <img
                src={prevProject.heroImage}
                alt={prevProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-300 uppercase tracking-widest">
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                  <span>Previous Work</span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-[#cfad76] uppercase tracking-widest mb-1.5">
                    {prevProject.sectorLabel}
                  </span>
                  <h4
                    style={{ fontFamily: 'Georgia, serif' }}
                    className="font-serif text-2xl sm:text-3xl text-white font-normal"
                  >
                    {prevProject.title}
                  </h4>
                </div>
              </div>
            </div>

            {/* Next Project */}
            <div
              onClick={() => onSelectProject(nextProject)}
              className="group relative h-72 rounded-xl overflow-hidden border border-white/10 hover:border-[#cfad76]/60 cursor-pointer"
            >
              <img
                src={nextProject.heroImage}
                alt={nextProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-right">
                <div className="flex items-center justify-end gap-2 font-mono text-[10px] text-neutral-300 uppercase tracking-widest">
                  <span>Next Work</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-[#cfad76] uppercase tracking-widest mb-1.5">
                    {nextProject.sectorLabel}
                  </span>
                  <h4
                    style={{ fontFamily: 'Georgia, serif' }}
                    className="font-serif text-2xl sm:text-3xl text-white font-normal"
                  >
                    {nextProject.title}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen High-Res Plate Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-10 cursor-zoom-out"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxImage.url}
              alt={lightboxImage.caption}
              className="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="mt-4 text-xs sm:text-sm text-neutral-300 font-light max-w-2xl text-center">
              {lightboxImage.caption}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
