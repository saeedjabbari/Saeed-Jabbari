import React, { useState } from 'react';
import { Project, SectorCategory } from '../types';
import { PROJECTS } from '../data/content';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface WorkArchiveProps {
  onSelectProject: (project: Project) => void;
  initialSector?: SectorCategory | 'all';
}

export const WorkArchive: React.FC<WorkArchiveProps> = ({
  onSelectProject,
  initialSector = 'all'
}) => {
  const [selectedSector, setSelectedSector] = useState<SectorCategory | 'all'>(initialSector);

  const filterTabs: { label: string; value: SectorCategory | 'all' }[] = [
    { label: 'All Works', value: 'all' },
    { label: 'Cosmetics & Skincare', value: 'cosmetics' },
    { label: 'FMCG & Food', value: 'fmcg' },
    { label: 'B2B & Corporate', value: 'b2b' },
    { label: 'Automotive & Heavy Industry', value: 'automotive' }
  ];

  const filteredProjects = PROJECTS.filter((proj) =>
    selectedSector === 'all' ? true : proj.sector === selectedSector
  );

  // 6 distinct scroll-triggered entrance animations so every scroll feels fresh and intentional
  const getScrollAnimation = (index: number) => {
    const mode = index % 6;
    switch (mode) {
      case 0:
        // 1. Monumental Scale-Up & Curtain Lift
        return {
          initial: { opacity: 0, y: 80, scale: 0.94 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
        };
      case 1:
        // 2. Left Architectural Glide
        return {
          initial: { opacity: 0, x: -80, y: 40 },
          whileInView: { opacity: 1, x: 0, y: 0 },
          transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
        };
      case 2:
        // 3. Deep Vertical Rise with Soft Focus Clear
        return {
          initial: { opacity: 0, y: 110, scale: 0.96, filter: 'blur(8px)' },
          whileInView: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
          transition: { duration: 1.05, delay: 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
        };
      case 3:
        // 4. Right Cinema Sweep
        return {
          initial: { opacity: 0, x: 90, scale: 0.95 },
          whileInView: { opacity: 1, x: 0, scale: 1 },
          transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
        };
      case 4:
        // 5. Diagonal Drift & Scale Expansion
        return {
          initial: { opacity: 0, x: -50, y: 90, scale: 0.92 },
          whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
          transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
        };
      default:
        // 6. Right Offset Rise with Optical Focus
        return {
          initial: { opacity: 0, x: 65, y: 70, filter: 'blur(6px)' },
          whileInView: { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' },
          transition: { duration: 1.0, delay: 0.06, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
        };
    }
  };

  // Non-cliché multi-scale layout system including full-monitor-width bleed plates and deep negative space
  const getLayoutConfig = (index: number) => {
    const pattern = index % 6;
    switch (pattern) {
      case 0:
        // Full-Monitor-Width Bleed Plate (spans entire screen width edge-to-edge)
        return {
          isFullBleed: true,
          wrapper: 'lg:col-span-12',
          aspect: 'aspect-[16/10] sm:aspect-[16/8] lg:aspect-[21/9]'
        };
      case 1:
        // Left Dominant Editorial Plate (7 cols)
        return {
          isFullBleed: false,
          wrapper: 'lg:col-span-7',
          aspect: 'aspect-[4/5] sm:aspect-[5/6]'
        };
      case 2:
        // Right Offset Plate pushed down for vast negative space (5 cols)
        return {
          isFullBleed: false,
          wrapper: 'lg:col-span-5 lg:mt-48',
          aspect: 'aspect-[4/4] sm:aspect-[4/5]'
        };
      case 3:
        // Right-Anchored Wide Cinema Plate with Left Negative Space (10 cols)
        return {
          isFullBleed: false,
          wrapper: 'lg:col-start-3 lg:col-span-10',
          aspect: 'aspect-[16/10] sm:aspect-[16/9]'
        };
      case 4:
        // Left Compact Square/Portrait Plate with Vertical Breathing Room (5 cols)
        return {
          isFullBleed: false,
          wrapper: 'lg:col-span-5 lg:mt-32',
          aspect: 'aspect-[4/4] sm:aspect-[4/5]'
        };
      default:
        // Right Expansive Landscape Plate (7 cols)
        return {
          isFullBleed: false,
          wrapper: 'lg:col-span-7',
          aspect: 'aspect-[16/11] sm:aspect-[16/10]'
        };
    }
  };

  return (
    <div className="bg-[#090a0d] min-h-screen text-[#f4f5f7] pt-16 sm:pt-24 pb-40 overflow-x-hidden selection:bg-[#FF4D1C] selection:text-white">
      {/* Top Editorial Header with Vast Negative Space */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-16 mb-24 sm:mb-36 border-b border-white/10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.28em] text-[#FF4D1C] uppercase mb-5">
              <span>BEHANCE SYNCHRONIZED ARCHIVE</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-500">{filteredProjects.length} SELECTED WORKS</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-[80px] font-semibold tracking-[-0.03em] text-white leading-[0.98]">
              Visual Works
            </h1>
          </div>

          {/* Clean Architectural Filter Bar */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-white/10 pb-3 lg:border-b-0 lg:pb-0">
            {filterTabs.map((tab) => {
              const isActive = selectedSector === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setSelectedSector(tab.value)}
                  className={`relative py-1.5 text-xs tracking-[0.16em] uppercase font-mono transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#FF4D1C] font-semibold'
                      : 'text-neutral-500 hover:text-neutral-200'
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="archiveFilterUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF4D1C]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Multi-Scale Visual Exhibition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-28 sm:gap-y-36 lg:gap-x-14 lg:gap-y-44 items-start">
          {filteredProjects.map((proj, idx) => {
            const anim = getScrollAnimation(idx);
            const layout = getLayoutConfig(idx);
            const indexNumber = String(idx + 1).padStart(2, '0');
            const secondaryPreview =
              proj.galleryImages.length > 1 ? proj.galleryImages[1].url : null;

            return (
              <motion.article
                key={proj.id}
                initial={anim.initial}
                whileInView={anim.whileInView}
                viewport={{ once: false, amount: 0.14, margin: '-40px' }}
                transition={anim.transition}
                onClick={() => onSelectProject(proj)}
                className={`${layout.wrapper} group cursor-pointer`}
              >
                {/* Full-Screen Monitor-Width Bleed Wrapper when pattern === 0 */}
                <div
                  className={
                    layout.isFullBleed
                      ? 'w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'
                      : 'w-full'
                  }
                >
                  {/* Visual Plate Container */}
                  <div
                    className={`relative w-full ${layout.aspect} overflow-hidden ${
                      layout.isFullBleed ? 'rounded-none border-y' : 'rounded-lg border'
                    } bg-[#0e1015] border-white/10 group-hover:border-[#FF4D1C]/60 transition-colors duration-700`}
                  >
                    <motion.img
                      src={proj.heroImage}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      initial={{ scale: 1.08 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                    />

                    {/* Subtle Dark Studio Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-75 group-hover:opacity-55 transition-opacity duration-700" />

                    {/* Secondary Behance Plate Peek on Hover (Desktop) */}
                    {secondaryPreview && (
                      <div className="hidden xl:block absolute bottom-8 right-8 z-20 w-48 aspect-[4/3] rounded-md overflow-hidden border border-white/25 shadow-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 pointer-events-none bg-black">
                        <img
                          src={secondaryPreview}
                          alt=""
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    )}

                    {/* Top-Right Minimal Action Circle */}
                    <div
                      className={`absolute top-6 ${
                        layout.isFullBleed ? 'right-6 sm:right-12 lg:right-20' : 'right-6'
                      } z-10`}
                    >
                      <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-[#FF4D1C] group-hover:text-white group-hover:border-[#FF4D1C] group-hover:scale-105 transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    {/* Full-Bleed Inner Caption Overlay */}
                    {layout.isFullBleed && (
                      <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 flex items-end justify-between gap-6">
                        <div>
                          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] uppercase text-[#FF4D1C] mb-2">
                            <span>{indexNumber}</span>
                            <span aria-hidden="true">—</span>
                            <span>{proj.sectorLabel}</span>
                            <span aria-hidden="true">·</span>
                            <span className="text-white/70">{proj.galleryImages.length} Plates</span>
                          </div>
                          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-semibold tracking-tight leading-[1.06] drop-shadow-sm">
                            {proj.title}
                          </h2>
                        </div>
                        <span className="font-mono text-xs tracking-widest text-white/75 uppercase hidden sm:inline-block">
                          Explore Case Study →
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Clean Unboxed Editorial Caption Below Non-Bleed Plates (Preserving Negative Space) */}
                  {!layout.isFullBleed && (
                    <div className="mt-6 flex items-start justify-between gap-6">
                      <div>
                        <div className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.22em] uppercase text-neutral-400 mb-2">
                          <span className="text-[#FF4D1C]">{indexNumber}</span>
                          <span aria-hidden="true">—</span>
                          <span>{proj.sectorLabel}</span>
                          <span aria-hidden="true">·</span>
                          <span className="text-neutral-500">{proj.galleryImages.length} Plates</span>
                        </div>
                        <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] text-white group-hover:text-[#FF4D1C] transition-colors duration-300 font-semibold tracking-tight leading-snug">
                          {proj.title}
                        </h2>
                      </div>

                      <span className="font-mono text-xs text-neutral-500 pt-1 shrink-0">
                        {proj.year}
                      </span>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Minimal Footer Social Links */}
        <div className="mt-40 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">
            SAEED JABBARI — PORTFOLIO SYNCHRONIZED WITH BEHANCE
          </span>
          <div className="flex items-center gap-8">
            <a
              href="https://www.behance.net/saeedjabbari"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF4D1C] transition-colors flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider"
            >
              <span>Behance / saeedjabbari</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:saeedjabbari21@gmail.com"
              className="hover:text-[#FF4D1C] transition-colors flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider"
            >
              <span>saeedjabbari21@gmail.com</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
