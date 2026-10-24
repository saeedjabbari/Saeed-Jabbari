import React, { useMemo } from 'react';
import { Project, SectorCategory } from '../types';
import { PROJECTS } from '../data/content';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

interface WorkArchiveProps {
  onSelectProject: (project: Project) => void;
  initialSector?: SectorCategory | 'all';
}

interface LayoutGroup {
  type: 'full' | 'duo' | 'trio' | 'duo-alt';
  items: { project: Project; globalIndex: number }[];
}

export const WorkArchive: React.FC<WorkArchiveProps> = ({ onSelectProject }) => {
  // Dynamically group all projects into a rich editorial rhythm:
  // Alternating between Full-Width Heroes, Asymmetric 2-Project Spreads, and 3-Project Triptych Galleries
  const layoutGroups = useMemo<LayoutGroup[]>(() => {
    const pattern: ('full' | 'duo' | 'trio' | 'duo-alt')[] = [
      'full',    // 1 cinematic centerpiece
      'duo',     // 2 projects (7 col + 5 col asymmetric)
      'trio',    // 3 projects (3-column packaging showcase)
      'full',    // 1 cinematic showcase
      'duo-alt', // 2 projects (5 col + 7 col asymmetric)
      'trio',    // 3 projects (3-column showcase)
      'duo'      // 2 projects
    ];

    const groups: LayoutGroup[] = [];
    let cursor = 0;
    let patternIdx = 0;

    while (cursor < PROJECTS.length) {
      const desiredType = pattern[patternIdx % pattern.length];
      let take = 1;
      if (desiredType === 'duo' || desiredType === 'duo-alt') take = 2;
      else if (desiredType === 'trio') take = 3;

      const remaining = PROJECTS.length - cursor;
      let actualType = desiredType;

      if (remaining === 1) {
        actualType = 'full';
        take = 1;
      } else if (remaining === 2 && desiredType === 'trio') {
        actualType = 'duo';
        take = 2;
      }

      const chunk = PROJECTS.slice(cursor, cursor + take).map((p, i) => ({
        project: p,
        globalIndex: cursor + i
      }));

      groups.push({
        type: actualType,
        items: chunk
      });

      cursor += take;
      patternIdx++;
    }

    return groups;
  }, []);

  return (
    <div className="bg-[#080C14] min-h-screen text-[#f4f5f7] pt-12 sm:pt-20 pb-32 overflow-x-hidden selection:bg-[#D4FF00] selection:text-[#080C14]">
      {/* Top Editorial Header — Confident & Uncluttered (No Premature Filter Bar) */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 mb-14 sm:mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs font-bold tracking-[0.24em] text-[#D4FF00] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" aria-hidden="true" />
              <span>COMMERCIAL ARCHIVE</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[76px] font-semibold tracking-[-0.035em] text-white leading-[1.02]">
              Visual Works
            </h1>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
              Curated commercial packaging systems, brand identities, and technical publications engineered to make products stand out, establish authority, and convert buyers.
            </p>
            <div className="flex items-center gap-2 mt-4 text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
              <span>SCROLL TO DISCOVER</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#D4FF00] animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* 
        ========================================================================
        DYNAMIC EDITORIAL GRID COMPOSITION:
        - Full-width cinematic plates (1 project)
        - Asymmetrical split duals (2 projects: 7+5 and 5+7)
        - Triptych gallery rows (3 projects simultaneously in view)
        - Varied aspect ratios (widescreen, portrait boxes, balanced squares)
        ========================================================================
      */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16 sm:space-y-24">
        {layoutGroups.map((group, groupIdx) => {
          // ====================================================================
          // LAYOUT 1: FULL-WIDTH CINEMATIC PLATE (1 Project)
          // ====================================================================
          if (group.type === 'full') {
            const item = group.items[0];
            const indexStr = String(item.globalIndex + 1).padStart(2, '0');

            return (
              <motion.div
                key={`full-${item.project.id}-${groupIdx}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectProject(item.project)}
                className="group relative bg-[#0D131F]/90 backdrop-blur-xl border border-white/10 hover:border-[#D4FF00]/60 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 hover:shadow-[#D4FF00]/10"
              >
                {/* Widescreen Display Stage */}
                <div className="relative aspect-[16/10] sm:aspect-[21/9] bg-[#03060B] overflow-hidden flex items-center justify-center p-6 sm:p-12">
                  <img
                    src={item.project.heroImage}
                    alt={item.project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain mx-auto transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D131F] via-transparent to-transparent opacity-75" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-mono uppercase tracking-wider text-white">
                    <span>{item.project.sectorLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D4FF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Bottom Bar Details */}
                <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-end justify-between gap-4 bg-[#0D131F] border-t border-white/10">
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-[#D4FF00] tracking-widest uppercase mb-2">
                      <span>{indexStr}</span>
                      <span>·</span>
                      <span>{item.project.categoryTag}</span>
                      <span>·</span>
                      <span className="text-neutral-400">{item.project.year}</span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-white group-hover:text-[#D4FF00] transition-colors leading-tight">
                      {item.project.title}
                    </h2>
                    {item.project.tagline && (
                      <p className="text-xs sm:text-sm text-neutral-400 mt-2 line-clamp-2 leading-relaxed font-normal">
                        {item.project.tagline}
                      </p>
                    )}
                  </div>

                  <div className="shrink-0 flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#D4FF00] uppercase pt-2 md:pt-0">
                    <span>EXPLORE CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </motion.div>
            );
          }

          // ====================================================================
          // LAYOUT 2 & 4: ASYMMETRICAL DUAL SPREAD (2 Projects: 7/5 or 5/7)
          // ====================================================================
          if (group.type === 'duo' || group.type === 'duo-alt') {
            const isAlt = group.type === 'duo-alt';
            const itemA = group.items[0];
            const itemB = group.items[1];

            return (
              <div key={`duo-${groupIdx}`} className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
                {/* Project A */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => onSelectProject(itemA.project)}
                  className={`${
                    isAlt ? 'lg:col-span-5' : 'lg:col-span-7'
                  } group bg-[#0D131F]/90 backdrop-blur-xl border border-white/10 hover:border-[#D4FF00]/60 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between shadow-2xl transition-all duration-300 hover:shadow-[#D4FF00]/10 hover:-translate-y-1`}
                >
                  <div>
                    {/* Header bar */}
                    <div className="px-5 py-3.5 bg-white/[0.03] border-b border-white/10 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2 text-neutral-300">
                        <span className="w-2 h-2 rounded-full bg-[#D4FF00]" />
                        <span className="font-bold tracking-wider uppercase text-[11px] text-white">
                          {itemA.project.sectorLabel}
                        </span>
                      </div>
                      <span className="text-[#D4FF00] font-mono font-bold text-xs">
                        {String(itemA.globalIndex + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Image Plate with dynamic aspect ratio */}
                    <div
                      className={`relative ${
                        isAlt ? 'aspect-[4/4] sm:aspect-[4/5]' : 'aspect-[16/11]'
                      } bg-[#04070D] overflow-hidden flex items-center justify-center p-6 sm:p-8`}
                    >
                      <img
                        src={itemA.project.heroImage}
                        alt={itemA.project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain mx-auto transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D131F] via-transparent to-transparent opacity-60" />
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-6 sm:p-7 bg-[#0D131F] border-t border-white/10 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug group-hover:text-[#D4FF00] transition-colors">
                        {itemA.project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                        {itemA.project.tagline || itemA.project.description}
                      </p>
                    </div>

                    <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400">
                      <span>{itemA.project.year}</span>
                      <span className="text-[#D4FF00] font-bold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>VIEW STUDY</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Project B (if present) */}
                {itemB && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => onSelectProject(itemB.project)}
                    className={`${
                      isAlt ? 'lg:col-span-7' : 'lg:col-span-5'
                    } group bg-[#0D131F]/90 backdrop-blur-xl border border-white/10 hover:border-[#D4FF00]/60 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between shadow-2xl transition-all duration-300 hover:shadow-[#D4FF00]/10 hover:-translate-y-1`}
                  >
                    <div>
                      {/* Header bar */}
                      <div className="px-5 py-3.5 bg-white/[0.03] border-b border-white/10 flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center gap-2 text-neutral-300">
                          <span className="w-2 h-2 rounded-full bg-[#D4FF00]" />
                          <span className="font-bold tracking-wider uppercase text-[11px] text-white">
                            {itemB.project.sectorLabel}
                          </span>
                        </div>
                        <span className="text-[#D4FF00] font-mono font-bold text-xs">
                          {String(itemB.globalIndex + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Image Plate with dynamic aspect ratio */}
                      <div
                        className={`relative ${
                          isAlt ? 'aspect-[16/11]' : 'aspect-[4/4] sm:aspect-[4/5]'
                        } bg-[#04070D] overflow-hidden flex items-center justify-center p-6 sm:p-8`}
                      >
                        <img
                          src={itemB.project.heroImage}
                          alt={itemB.project.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-contain mx-auto transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D131F] via-transparent to-transparent opacity-60" />
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="p-6 sm:p-7 bg-[#0D131F] border-t border-white/10 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug group-hover:text-[#D4FF00] transition-colors">
                          {itemB.project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                          {itemB.project.tagline || itemB.project.description}
                        </p>
                      </div>

                      <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400">
                        <span>{itemB.project.year}</span>
                        <span className="text-[#D4FF00] font-bold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>VIEW STUDY</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          }

          // ====================================================================
          // LAYOUT 3: TRIPTYCH GALLERY ROW (3 Projects Simultaneously)
          // ====================================================================
          if (group.type === 'trio') {
            return (
              <div key={`trio-${groupIdx}`} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                {group.items.map((item, i) => (
                  <motion.div
                    key={item.project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => onSelectProject(item.project)}
                    className="group bg-[#0D131F]/90 backdrop-blur-xl border border-white/10 hover:border-[#D4FF00]/60 rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between shadow-xl transition-all duration-300 hover:shadow-[#D4FF00]/10 hover:-translate-y-1.5"
                  >
                    <div>
                      {/* Header bar */}
                      <div className="px-4 py-3 bg-white/[0.03] border-b border-white/10 flex items-center justify-between text-xs font-mono">
                        <span className="text-[#D4FF00] font-bold text-[11px]">
                          {String(item.globalIndex + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[10px] tracking-widest uppercase text-neutral-400 truncate max-w-[150px]">
                          {item.project.sectorLabel}
                        </span>
                      </div>

                      {/* Tactile Vertical Packaging Plate — aspect-[4/5] */}
                      <div className="relative aspect-[4/5] bg-[#04070D] overflow-hidden flex items-center justify-center p-5 sm:p-6">
                        <img
                          src={item.project.heroImage}
                          alt={item.project.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-contain mx-auto transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D131F] via-transparent to-transparent opacity-60" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 sm:p-6 bg-[#0D131F] border-t border-white/10 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="font-serif text-lg sm:text-xl font-semibold text-white tracking-tight leading-snug group-hover:text-[#D4FF00] transition-colors">
                          {item.project.title}
                        </h3>
                        <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed font-normal">
                          {item.project.tagline || item.project.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400">
                        <span>{item.project.year}</span>
                        <span className="text-[#D4FF00] font-bold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>EXPLORE</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            );
          }

          return null;
        })}
      </div>

      {/* Footer Synchronized Note — Clean & Uncluttered */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 mt-28 sm:mt-40 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
        <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 text-center sm:text-left">
          SAEED JABBARI STUDIO — COMMERCIAL ARCHIVE
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
