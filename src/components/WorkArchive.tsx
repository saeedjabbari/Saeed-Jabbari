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

  return (
    <div className="bg-[#080C14] min-h-screen text-[#f4f5f7] pt-12 sm:pt-20 pb-32 overflow-x-hidden selection:bg-[#D4FF00] selection:text-[#080C14]">
      {/* Top Editorial Header — No dividing white lines */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 mb-16 sm:mb-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.24em] text-[#D4FF00] uppercase mb-4">
              <span>BEHANCE SYNCHRONIZED ARCHIVE</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400 font-semibold">{filteredProjects.length} CURATED PROJECTS</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[78px] font-semibold tracking-[-0.035em] text-white leading-[1.0]">
              Visual Works
            </h1>
          </div>

          {/* Clean Architectural Filter Bar — Segmented unboxed typography */}
          <div className="w-full lg:w-auto overflow-x-auto no-scrollbar pb-2">
            <div className="flex items-center gap-x-6 min-w-max">
              {filterTabs.map((tab) => {
                const isActive = selectedSector === tab.value;
                return (
                  <button
                    key={tab.value}
                    onClick={() => setSelectedSector(tab.value)}
                    className={`relative py-1.5 text-xs tracking-[0.16em] uppercase font-mono transition-colors cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'text-[#D4FF00] font-black'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span>{tab.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="archiveFilterUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4FF00]"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 
        ========================================================================
        STRONG EDITORIAL RHYTHM & CONTRASTING TONAL BLOCKS
        - Alternating Dark Obsidian & Light Paper canvases
        - Full-width monitor plates spanning 100vw
        - ZERO border strokes around images
        - NO dividing white line rules
        ========================================================================
      */}
      <div className="space-y-24 sm:space-y-40">
        {filteredProjects.map((proj, idx) => {
          const rhythm = idx % 5;
          const indexNumber = String(idx + 1).padStart(2, '0');

          // RHYTHM 0: FULL-WIDTH CINEMATIC MONITOR PLATE
          if (rhythm === 0) {
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectProject(proj)}
                className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] max-w-none bg-[#04060B] py-12 sm:py-24 px-4 sm:px-10 cursor-pointer group"
              >
                <div className="max-w-[1720px] mx-auto">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 text-white px-2">
                    <div>
                      <div className="flex items-center gap-3 font-mono text-[11px] tracking-widest uppercase text-[#D4FF00] mb-2">
                        <span>{indexNumber}</span>
                        <span>—</span>
                        <span>{proj.sectorLabel}</span>
                        <span>·</span>
                        <span className="text-neutral-400">{proj.galleryImages.length} Plates</span>
                      </div>
                      <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white group-hover:text-[#D4FF00] transition-colors">
                        {proj.title}
                      </h2>
                    </div>

                    <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D4FF00] uppercase tracking-wider">
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>

                  {/* Stage with uncropped edge-to-edge artwork (NO STROKE BORDER) */}
                  <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-[#020408] py-8 sm:py-16 flex items-center justify-center">
                    <img
                      src={proj.heroImage}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="w-full max-h-[82vh] object-contain mx-auto transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                    />
                  </div>
                </div>
              </motion.div>
            );
          }

          // RHYTHM 1: CONTRASTING BRIGHT GALLERY PAPER CANVAS
          if (rhythm === 1 || rhythm === 3) {
            const isReversed = rhythm === 3;
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectProject(proj)}
                className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] max-w-none bg-[#F4F6F9] text-[#080C14] py-16 sm:py-28 px-4 sm:px-10 cursor-pointer group"
              >
                <div className="max-w-[1440px] mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    {/* Visual Packaging Plate (NO BORDER STROKE) */}
                    <div className={`${isReversed ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7 lg:order-1'} bg-[#E6EAF0] rounded-2xl sm:rounded-3xl p-6 sm:p-12 flex items-center justify-center overflow-hidden group-hover:bg-[#DEE3EA] transition-colors`}>
                      <img
                        src={proj.heroImage}
                        alt={proj.title}
                        referrerPolicy="no-referrer"
                        className="w-full max-h-[64vh] object-contain mx-auto transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                    </div>

                    {/* Editorial Details Column */}
                    <div className={`${isReversed ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5 lg:order-2'} space-y-5`}>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080C14] text-[#D4FF00] font-mono text-[10px] font-bold tracking-widest uppercase rounded">
                        <span>{indexNumber}</span>
                        <span>·</span>
                        <span>{proj.sectorLabel}</span>
                      </div>

                      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#080C14] leading-[1.08] group-hover:text-neutral-700 transition-colors">
                        {proj.title}
                      </h2>

                      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
                        {proj.description}
                      </p>

                      <div className="pt-4 flex items-center gap-3 text-xs font-mono font-bold tracking-wider text-[#080C14] uppercase">
                        <span>DISCOVER CASE STUDY</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          }

          // RHYTHM 2: HIGH-CONTRAST DARK ASYMMETRIC STAGGER
          return (
            <div key={proj.id} className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14">
              <motion.article
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectProject(proj)}
                className="group cursor-pointer w-full"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  <div className="lg:col-span-8 w-full bg-[#0E1522] rounded-2xl sm:rounded-3xl p-6 sm:p-12 flex items-center justify-center overflow-hidden group-hover:bg-[#121B2B] transition-colors">
                    <img
                      src={proj.heroImage}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="w-full max-h-[66vh] object-contain mx-auto transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="lg:col-span-4 space-y-4">
                    <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-[#D4FF00]">
                      <span>{indexNumber}</span>
                      <span>—</span>
                      <span>{proj.sectorLabel}</span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white group-hover:text-[#D4FF00] transition-colors font-semibold tracking-tight leading-snug">
                      {proj.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
                      {proj.description}
                    </p>

                    <div className="pt-4 flex items-center gap-3 text-xs font-mono text-[#D4FF00]">
                      <span>{proj.categoryTag}</span>
                      <span>·</span>
                      <span>{proj.year}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>
          );
        })}
      </div>

      {/* Footer Synchronized Note — Clean & Borderless */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 mt-32 sm:mt-48 pt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
        <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 text-center sm:text-left">
          SAEED JABBARI — COMMERCIAL ARCHIVE
        </span>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          <a
            href="https://www.behance.net/saeedjabbari"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4FF00] text-neutral-300 transition-colors flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider"
          >
            <span>Behance / saeedjabbari</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="mailto:saeedjabbari21@gmail.com"
            className="hover:text-[#D4FF00] text-neutral-300 transition-colors flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider"
          >
            <span>saeedjabbari21@gmail.com</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
