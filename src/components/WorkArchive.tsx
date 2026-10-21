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

  const getScrollAnimation = (index: number) => {
    const mode = index % 4;
    switch (mode) {
      case 0:
        return {
          initial: { opacity: 0, y: 50, scale: 0.96 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
        };
      case 1:
        return {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
        };
      case 2:
        return {
          initial: { opacity: 0, y: 60, scale: 0.97 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
        };
      default:
        return {
          initial: { opacity: 0, y: 45 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
        };
    }
  };

  const getLayoutConfig = (index: number) => {
    const pattern = index % 5;
    switch (pattern) {
      case 0:
        return {
          isFullBleed: true,
          wrapper: 'lg:col-span-12',
          aspect: 'aspect-[16/10] sm:aspect-[16/8] lg:aspect-[21/9]'
        };
      case 1:
        return {
          isFullBleed: false,
          wrapper: 'lg:col-span-7',
          aspect: 'aspect-[4/5] sm:aspect-[5/6]'
        };
      case 2:
        return {
          isFullBleed: false,
          wrapper: 'lg:col-span-5 mt-0 lg:mt-32',
          aspect: 'aspect-[4/4] sm:aspect-[4/5]'
        };
      case 3:
        return {
          isFullBleed: false,
          wrapper: 'lg:col-span-7',
          aspect: 'aspect-[16/11] sm:aspect-[16/10]'
        };
      default:
        return {
          isFullBleed: false,
          wrapper: 'lg:col-span-5 mt-0 lg:mt-24',
          aspect: 'aspect-[4/4] sm:aspect-[4/5]'
        };
    }
  };

  return (
    <div className="bg-[#090a0d] min-h-screen text-[#f4f5f7] pt-12 sm:pt-20 pb-32 overflow-x-hidden selection:bg-[#FF4D1C] selection:text-white">
      {/* Top Editorial Header */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-12 pb-10 sm:pb-16 mb-16 sm:mb-28 border-b border-white/10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-[11px] tracking-[0.22em] text-[#FF4D1C] uppercase mb-3 sm:mb-5">
              <span>BEHANCE SYNCHRONIZED ARCHIVE</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-500">{filteredProjects.length} SELECTED WORKS</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[76px] font-semibold tracking-[-0.03em] text-white leading-[1.02]">
              Visual Works
            </h1>
          </div>

          {/* Clean Architectural Filter Bar — Safe horizontal scroll on mobile */}
          <div className="w-full lg:w-auto overflow-x-auto no-scrollbar border-b border-white/10 pb-3 lg:border-b-0 lg:pb-0">
            <div className="flex items-center gap-x-5 sm:gap-x-6 min-w-max">
              {filterTabs.map((tab) => {
                const isActive = selectedSector === tab.value;
                return (
                  <button
                    key={tab.value}
                    onClick={() => setSelectedSector(tab.value)}
                    className={`relative py-1.5 text-[11px] sm:text-xs tracking-[0.14em] sm:tracking-[0.16em] uppercase font-mono transition-colors cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'text-[#FF4D1C] font-semibold'
                        : 'text-neutral-400 hover:text-neutral-200'
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
        </div>

        {/* Multi-Scale Visual Exhibition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 sm:gap-y-24 lg:gap-x-12 lg:gap-y-36 items-start">
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
                viewport={{ once: true, amount: 0.1 }}
                transition={anim.transition}
                onClick={() => onSelectProject(proj)}
                className={`${layout.wrapper} group cursor-pointer w-full`}
              >
                <div className="w-full">
                  {/* Visual Plate Container */}
                  <div
                    className={`relative w-full ${layout.aspect} overflow-hidden rounded-xl border bg-[#0e1015] border-white/10 group-hover:border-[#FF4D1C]/60 transition-colors duration-500`}
                  >
                    <img
                      src={proj.heroImage}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Subtle Dark Studio Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-500" />

                    {/* Secondary Behance Plate Peek on Hover (Desktop) */}
                    {secondaryPreview && (
                      <div className="hidden xl:block absolute bottom-6 right-6 z-20 w-44 aspect-[4/3] rounded-md overflow-hidden border border-white/25 shadow-2xl opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 pointer-events-none bg-black">
                        <img
                          src={secondaryPreview}
                          alt=""
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    )}

                    {/* Top-Right Action Circle */}
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-[#FF4D1C] group-hover:text-white group-hover:border-[#FF4D1C] group-hover:scale-105 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    {/* Full-Bleed Inner Caption Overlay */}
                    {layout.isFullBleed && (
                      <div className="absolute bottom-5 sm:bottom-8 left-0 right-0 z-10 px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6">
                        <div>
                          <div className="flex items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#FF4D1C] mb-1.5 sm:mb-2">
                            <span>{indexNumber}</span>
                            <span aria-hidden="true">—</span>
                            <span>{proj.sectorLabel}</span>
                            <span aria-hidden="true">·</span>
                            <span className="text-white/70">{proj.galleryImages.length} Plates</span>
                          </div>
                          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-white font-semibold tracking-tight leading-[1.08] drop-shadow-sm">
                            {proj.title}
                          </h2>
                        </div>
                        <span className="font-mono text-xs tracking-widest text-white/75 uppercase hidden sm:inline-block">
                          Explore Case Study →
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Caption Below Non-Bleed Plates */}
                  {!layout.isFullBleed && (
                    <div className="mt-4 sm:mt-5 flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-1 sm:mb-1.5">
                          <span className="text-[#FF4D1C]">{indexNumber}</span>
                          <span aria-hidden="true">—</span>
                          <span>{proj.sectorLabel}</span>
                          <span aria-hidden="true">·</span>
                          <span className="text-neutral-500">{proj.galleryImages.length} Plates</span>
                        </div>
                        <h2 className="font-serif text-xl sm:text-2xl lg:text-[28px] text-white group-hover:text-[#FF4D1C] transition-colors duration-300 font-semibold tracking-tight leading-snug">
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

        {/* Footer Social Links */}
        <div className="mt-24 sm:mt-36 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-widest text-neutral-500 text-center sm:text-left">
            SAEED JABBARI — PORTFOLIO SYNCHRONIZED WITH BEHANCE
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
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
