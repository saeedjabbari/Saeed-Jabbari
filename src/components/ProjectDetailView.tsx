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
          colClass: 'lg:col-span-5 mt-0 lg:mt-24',
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
          colClass: 'lg:col-span-12',
          aspectClass: 'aspect-[16/10] sm:aspect-[16/9]'
        };
    }
  };

  return (
    <div className="bg-[#090a0d] min-h-screen text-[#f4f5f7] pb-32 overflow-x-hidden selection:bg-[#FF4D1C] selection:text-white">
      {/* Sticky Secondary Sub-Nav Bar */}
      <div className="sticky top-16 sm:top-20 z-40 bg-[#090a0d]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 h-14 sm:h-16 flex items-center justify-between gap-3">
          <button
            onClick={onBackToArchive}
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-300 hover:text-[#FF4D1C] uppercase tracking-wider transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Back to Works</span>
            <span className="xs:hidden">Back</span>
          </button>

          <div className="hidden md:flex items-center gap-2.5 font-mono text-[11px] text-neutral-500 uppercase tracking-wider truncate">
            <span>{project.sectorLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#FF4D1C] truncate">{project.title}</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {project.behanceUrl && (
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/15 hover:border-[#FF4D1C] text-neutral-200 hover:text-[#FF4D1C] text-[11px] font-mono tracking-wider uppercase rounded transition-colors"
              >
                <span>Behance</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
            <button
              onClick={onOpenBrief}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-1.5 bg-[#FF4D1C] hover:bg-[#ff6438] text-white text-[11px] font-bold tracking-wider uppercase rounded transition-colors cursor-pointer"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Case Study Header */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 pt-10 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-10 sm:mb-16"
        >
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.22em] uppercase text-[#FF4D1C] mb-3 sm:mb-5">
              <span>{project.sectorLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-400">{project.year}</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-400">{project.client}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[60px] font-semibold text-white leading-[1.06] tracking-[-0.025em]">
              {project.title}
            </h1>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <p className="text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed font-normal">
              {project.tagline}
            </p>
          </div>
        </motion.div>

        {/* Primary Hero Plate — Clean responsive containment */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => setLightboxImage({ url: project.heroImage, caption: project.title })}
          className="w-full aspect-[16/10] sm:aspect-[21/9] overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 mb-16 sm:mb-24 bg-[#0e1015] cursor-zoom-in group relative"
        >
          <img
            src={project.heroImage}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </motion.div>

        {/* Editorial Metadata Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 py-8 sm:py-10 border-y border-white/10 mb-16 sm:mb-24"
        >
          <div>
            <span className="block font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-neutral-500 uppercase mb-1.5 sm:mb-2">
              CLIENT &amp; PARTNER
            </span>
            <span className="text-xs sm:text-sm md:text-base text-white font-normal">
              {project.client || 'Commissioned Work'}
            </span>
          </div>
          <div>
            <span className="block font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-neutral-500 uppercase mb-1.5 sm:mb-2">
              DISCIPLINE &amp; SCOPE
            </span>
            <span className="text-xs sm:text-sm md:text-base text-white font-normal">
              {project.categoryTag}
            </span>
          </div>
          <div>
            <span className="block font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-neutral-500 uppercase mb-1.5 sm:mb-2">
              VISUAL PALETTE
            </span>
            <span className="text-xs sm:text-sm md:text-base text-[#FF4D1C] font-normal truncate block">
              {project.colorSystem}
            </span>
          </div>
          <div>
            <span className="block font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-neutral-500 uppercase mb-1.5 sm:mb-2">
              BEHANCE ARCHIVE
            </span>
            {project.behanceUrl ? (
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm md:text-base text-white hover:text-[#FF4D1C] transition-colors underline decoration-white/30 underline-offset-4"
              >
                <span>View Full Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            ) : (
              <span className="text-xs sm:text-sm text-neutral-300">{project.year}</span>
            )}
          </div>
        </motion.div>

        {/* Narrative & Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 sm:mb-28 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4 sm:space-y-6"
          >
            <span className="block font-mono text-[10px] tracking-[0.24em] text-[#FF4D1C] uppercase">
              01 — PROJECT NARRATIVE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-semibold leading-snug">
              {project.subtitle}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed font-normal">
              {project.description}
            </p>

            <div className="pt-5 border-t border-white/10">
              <span className="block font-mono text-[10px] tracking-[0.22em] text-neutral-500 uppercase mb-3">
                ROLES &amp; DELIVERABLES
              </span>
              <div className="flex flex-wrap items-center gap-y-2 text-xs font-mono text-neutral-300">
                {project.substrates.map((sub, i) => (
                  <React.Fragment key={sub}>
                    <span>{sub}</span>
                    {i < project.substrates.length - 1 && (
                      <span className="mx-2 sm:mx-3 text-neutral-600" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </React.Fragment>
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
              <div className="border-t border-white/15 pt-5">
                <span className="block font-mono text-[10px] tracking-[0.22em] text-neutral-400 uppercase mb-2">
                  THE CHALLENGE
                </span>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  {project.challenge}
                </p>
              </div>

              <div className="border-t border-[#FF4D1C]/60 pt-5">
                <span className="block font-mono text-[10px] tracking-[0.22em] text-[#FF4D1C] uppercase mb-2">
                  STRATEGIC SOLUTION
                </span>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Creative Highlights */}
            <div className="border-t border-white/10 pt-6">
              <span className="block font-mono text-[10px] tracking-[0.22em] text-neutral-400 uppercase mb-4">
                KEY COMMERCIAL &amp; VISUAL HIGHLIGHTS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {project.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#FF4D1C] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-[13px] text-neutral-300 leading-relaxed font-normal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Complete Plates Presentation */}
        <div className="mb-24 sm:mb-32">
          <div className="flex items-center justify-between mb-10 sm:mb-14 pb-4 border-b border-white/10">
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] sm:tracking-[0.25em] text-[#FF4D1C] uppercase">
              02 — COMPLETE VISUAL PRESENTATION ({project.galleryImages.length} PLATES)
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] text-neutral-500 hidden sm:inline">
              CLICK ANY PLATE TO EXPAND
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 sm:gap-y-20 lg:gap-x-10 lg:gap-y-24 items-start">
            {project.galleryImages.map((img, idx) => {
              const layout = getPlateLayout(idx);
              const plateNum = String(idx + 1).padStart(2, '0');

              return (
                <motion.figure
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setLightboxImage({ url: img.url, caption: img.caption })}
                  className={`${layout.colClass} group cursor-zoom-in w-full`}
                >
                  <div className="w-full">
                    <div
                      className={`relative w-full ${layout.aspectClass} overflow-hidden rounded-xl border border-white/10 bg-[#0d0f14] group-hover:border-[#FF4D1C]/60 transition-colors duration-400`}
                    >
                      <img
                        src={img.url}
                        alt={img.caption}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                      />

                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>

                    <figcaption className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 text-xs text-neutral-400">
                      <span className="font-normal text-neutral-300">{img.caption}</span>
                      <span className="font-mono text-[10px] tracking-[0.18em] text-[#FF4D1C] uppercase shrink-0">
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
        <div className="pt-12 sm:pt-16 border-t border-white/15">
          <div className="flex items-center justify-between mb-8">
            <span className="font-mono text-[10px] tracking-[0.22em] text-neutral-500 uppercase">
              CONTINUE EXPLORING ARCHIVE
            </span>
            <button
              onClick={onBackToArchive}
              className="font-mono text-xs text-[#FF4D1C] hover:underline cursor-pointer"
            >
              View All {PROJECTS.length} Works
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Previous Project */}
            <div
              onClick={() => onSelectProject(prevProject)}
              className="group relative h-56 sm:h-72 rounded-xl overflow-hidden border border-white/10 hover:border-[#FF4D1C]/60 cursor-pointer"
            >
              <img
                src={prevProject.heroImage}
                alt={prevProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
              <div className="absolute inset-0 p-5 sm:p-8 flex flex-col justify-between">
                <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-300 uppercase tracking-widest">
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                  <span>Previous Work</span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-[#FF4D1C] uppercase tracking-widest mb-1">
                    {prevProject.sectorLabel}
                  </span>
                  <h4 className="font-serif text-xl sm:text-3xl text-white font-semibold">
                    {prevProject.title}
                  </h4>
                </div>
              </div>
            </div>

            {/* Next Project */}
            <div
              onClick={() => onSelectProject(nextProject)}
              className="group relative h-56 sm:h-72 rounded-xl overflow-hidden border border-white/10 hover:border-[#FF4D1C]/60 cursor-pointer"
            >
              <img
                src={nextProject.heroImage}
                alt={nextProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
              <div className="absolute inset-0 p-5 sm:p-8 flex flex-col justify-between text-right">
                <div className="flex items-center justify-end gap-2 font-mono text-[10px] text-neutral-300 uppercase tracking-widest">
                  <span>Next Work</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-[#FF4D1C] uppercase tracking-widest mb-1">
                    {nextProject.sectorLabel}
                  </span>
                  <h4 className="font-serif text-xl sm:text-3xl text-white font-semibold">
                    {nextProject.title}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Plate Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-8 cursor-zoom-out"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxImage.url}
              alt={lightboxImage.caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="mt-3 text-xs sm:text-sm text-neutral-300 font-light max-w-2xl text-center px-4">
              {lightboxImage.caption}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
