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

/**
 * Derives a luminous, customized ambient palette from the project's heroColor
 * Provides soft, airy chromatic backgrounds that eliminate claustrophobia / boxed-in feeling
 * while preserving high-contrast legibility and the studio's phosphor identity.
 */
function getProjectPalette(hex?: string) {
  if (!hex || !hex.startsWith('#')) {
    return {
      bg: 'linear-gradient(145deg, #F0F3F7 0%, #FFFFFF 100%)',
      cardBg: '#FFFFFF',
      border: 'rgba(0, 0, 0, 0.07)',
      badgeBg: 'rgba(8, 12, 20, 0.06)',
      badgeText: '#080C14',
      shadow: '0 20px 45px -10px rgba(0, 0, 0, 0.06)'
    };
  }

  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map((x) => x + x).join('');
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;

  return {
    // Light, open, tailored ambient wash
    bg: `linear-gradient(145deg, rgba(${r}, ${g}, ${b}, 0.09) 0%, rgba(${r}, ${g}, ${b}, 0.03) 55%, #FFFFFF 100%)`,
    cardBg: `rgba(${r}, ${g}, ${b}, 0.04)`,
    border: `rgba(${r}, ${g}, ${b}, 0.14)`,
    badgeBg: `rgba(${r}, ${g}, ${b}, 0.1)`,
    badgeText: hex,
    shadow: `0 20px 45px -10px rgba(${r}, ${g}, ${b}, 0.12)`
  };
}

export const WorkArchive: React.FC<WorkArchiveProps> = ({ onSelectProject }) => {
  // Dynamically group all projects into a breathable, rich editorial rhythm
  const layoutGroups = useMemo<LayoutGroup[]>(() => {
    const pattern: ('full' | 'duo' | 'trio' | 'duo-alt')[] = [
      'full',    // 1 expansive centerpiece
      'duo',     // 2 projects (7 col + 5 col asymmetric)
      'trio',    // 3 projects (3-column packaging showcase)
      'full',    // 1 expansive centerpiece
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
    <div className="bg-[#F8F9FA] min-h-screen text-[#080C14] pt-12 sm:pt-20 pb-32 overflow-x-hidden selection:bg-[#D4FF00] selection:text-[#080C14]">
      {/* Top Editorial Header — Luminous, Open & Uncluttered (No Restricting Filters) */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 mb-14 sm:mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-200">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs font-bold tracking-[0.24em] text-neutral-800 uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#080C14]" aria-hidden="true" />
              <span>COMMERCIAL ARCHIVE</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[76px] font-semibold tracking-[-0.035em] text-[#080C14] leading-[1.02]">
              Visual Works
            </h1>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
              Curated commercial packaging systems, brand identities, and technical publications engineered to command category leadership and convert buyers.
            </p>
            <div className="flex items-center gap-2 mt-4 text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
              <span>SCROLL TO DISCOVER</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#080C14] animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* 
        ========================================================================
        OPEN, BREATHABLE EDITORIAL COMPOSITION:
        - ZERO rigid bounding cages or dark black nested boxes
        - Tailored chromatic tint for each project based on its own hero palette
        - Free-floating packaging with airy margins
        - Dynamic rhythm: 1 Full-Width -> 2 Asymmetric -> 3-Column Triptych
        ========================================================================
      */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16 sm:space-y-24">
        {layoutGroups.map((group, groupIdx) => {
          // ====================================================================
          // LAYOUT 1: EXPANSIVE CINEMATIC FEATURE (1 Project)
          // ====================================================================
          if (group.type === 'full') {
            const item = group.items[0];
            const palette = getProjectPalette(item.project.heroColor);
            const indexStr = String(item.globalIndex + 1).padStart(2, '0');

            return (
              <motion.div
                key={`full-${item.project.id}-${groupIdx}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectProject(item.project)}
                style={{
                  background: palette.bg,
                  boxShadow: palette.shadow,
                  borderColor: palette.border
                }}
                className="group relative rounded-3xl p-6 sm:p-10 lg:p-14 border cursor-pointer transition-all duration-500 hover:-translate-y-1"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  {/* Left Column: Floating Monumental Artwork (Open, Unboxed) */}
                  <div className="lg:col-span-7 w-full flex items-center justify-center">
                    <div className="w-full aspect-[16/10] sm:aspect-[16/11] rounded-2xl overflow-hidden flex items-center justify-center relative transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                      <img
                        src={item.project.heroImage}
                        alt={item.project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain mx-auto"
                      />
                    </div>
                  </div>

                  {/* Right Column: Clean Editorial Label & Action */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Top Meta Badges */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-xs font-bold text-[#080C14] bg-[#D4FF00] px-2.5 py-1 rounded-sm shadow-xs">
                          {indexStr}
                        </span>
                        <span
                          style={{ backgroundColor: palette.badgeBg, color: palette.badgeText }}
                          className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase truncate"
                        >
                          {item.project.sectorLabel}
                        </span>
                        <span className="text-xs font-mono text-neutral-400">
                          {item.project.year}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#080C14] group-hover:text-black leading-[1.08] transition-colors">
                        {item.project.title}
                      </h2>

                      {/* Tagline / Narrative */}
                      {item.project.tagline && (
                        <p className="text-sm sm:text-base text-neutral-600 mt-4 leading-relaxed font-normal">
                          {item.project.tagline}
                        </p>
                      )}

                      {/* Substrates / Deliverable Pills */}
                      <div className="flex flex-wrap gap-2 pt-4">
                        {item.project.substrates.slice(0, 3).map((sub, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/80 rounded-md text-[11px] font-mono text-neutral-700 border border-neutral-200/80"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <div className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#080C14] group-hover:bg-[#D4FF00] text-white group-hover:text-[#080C14] rounded-lg text-xs font-bold tracking-[0.14em] uppercase transition-all shadow-md">
                        <span>EXPLORE CASE STUDY</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
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
            const paletteA = getProjectPalette(itemA.project.heroColor);
            const paletteB = itemB ? getProjectPalette(itemB.project.heroColor) : null;

            return (
              <div key={`duo-${groupIdx}`} className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
                {/* Project A */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => onSelectProject(itemA.project)}
                  style={{
                    background: paletteA.bg,
                    boxShadow: paletteA.shadow,
                    borderColor: paletteA.border
                  }}
                  className={`${
                    isAlt ? 'lg:col-span-5' : 'lg:col-span-7'
                  } group rounded-3xl p-6 sm:p-9 border cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5`}
                >
                  <div>
                    {/* Header bar */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#080C14] bg-[#D4FF00] px-2 py-0.5 rounded-sm">
                          {String(itemA.globalIndex + 1).padStart(2, '0')}
                        </span>
                        <span
                          style={{ backgroundColor: paletteA.badgeBg, color: paletteA.badgeText }}
                          className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase truncate"
                        >
                          {itemA.project.sectorLabel}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-neutral-500">
                        {itemA.project.year}
                      </span>
                    </div>

                    {/* Floating Product Image Plate (Open & Breathable) */}
                    <div
                      className={`w-full ${
                        isAlt ? 'aspect-[4/4] sm:aspect-[4/5]' : 'aspect-[16/11]'
                      } rounded-2xl overflow-hidden flex items-center justify-center relative transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
                    >
                      <img
                        src={itemA.project.heroImage}
                        alt={itemA.project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain mx-auto"
                      />
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="pt-6 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#080C14] tracking-tight leading-snug group-hover:text-black transition-colors">
                        {itemA.project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 mt-2 line-clamp-2 leading-relaxed">
                        {itemA.project.tagline || itemA.project.description}
                      </p>
                    </div>

                    <div className="pt-5 mt-4 border-t border-black/5 flex items-center justify-between text-xs font-mono">
                      <span className="text-neutral-500">{itemA.project.categoryTag}</span>
                      <span className="text-[#080C14] group-hover:text-black font-bold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>VIEW CASE</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Project B (if present) */}
                {itemB && paletteB && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => onSelectProject(itemB.project)}
                    style={{
                      background: paletteB.bg,
                      boxShadow: paletteB.shadow,
                      borderColor: paletteB.border
                    }}
                    className={`${
                      isAlt ? 'lg:col-span-7' : 'lg:col-span-5'
                    } group rounded-3xl p-6 sm:p-9 border cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5`}
                  >
                    <div>
                      {/* Header bar */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-[#080C14] bg-[#D4FF00] px-2 py-0.5 rounded-sm">
                            {String(itemB.globalIndex + 1).padStart(2, '0')}
                          </span>
                          <span
                            style={{ backgroundColor: paletteB.badgeBg, color: paletteB.badgeText }}
                            className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase truncate"
                          >
                            {itemB.project.sectorLabel}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-neutral-500">
                          {itemB.project.year}
                        </span>
                      </div>

                      {/* Floating Product Image Plate */}
                      <div
                        className={`w-full ${
                          isAlt ? 'aspect-[16/11]' : 'aspect-[4/4] sm:aspect-[4/5]'
                        } rounded-2xl overflow-hidden flex items-center justify-center relative transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
                      >
                        <img
                          src={itemB.project.heroImage}
                          alt={itemB.project.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-contain mx-auto"
                        />
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="pt-6 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#080C14] tracking-tight leading-snug group-hover:text-black transition-colors">
                          {itemB.project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-600 mt-2 line-clamp-2 leading-relaxed">
                          {itemB.project.tagline || itemB.project.description}
                        </p>
                      </div>

                      <div className="pt-5 mt-4 border-t border-black/5 flex items-center justify-between text-xs font-mono">
                        <span className="text-neutral-500">{itemB.project.categoryTag}</span>
                        <span className="text-[#080C14] group-hover:text-black font-bold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>VIEW CASE</span>
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
          // LAYOUT 3: TRIPTYCH GALLERY ROW (3 Projects Simultaneously in View)
          // ====================================================================
          if (group.type === 'trio') {
            return (
              <div key={`trio-${groupIdx}`} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                {group.items.map((item, i) => {
                  const palette = getProjectPalette(item.project.heroColor);

                  return (
                    <motion.div
                      key={item.project.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => onSelectProject(item.project)}
                      style={{
                        background: palette.bg,
                        boxShadow: palette.shadow,
                        borderColor: palette.border
                      }}
                      className="group rounded-3xl p-6 sm:p-7 border cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
                    >
                      <div>
                        {/* Header bar */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-mono text-xs font-bold text-[#080C14] bg-[#D4FF00] px-2 py-0.5 rounded-sm">
                            {String(item.globalIndex + 1).padStart(2, '0')}
                          </span>
                          <span
                            style={{ backgroundColor: palette.badgeBg, color: palette.badgeText }}
                            className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase truncate max-w-[170px]"
                          >
                            {item.project.sectorLabel}
                          </span>
                        </div>

                        {/* Tactile Vertical Packaging Plate — aspect-[4/5] floating */}
                        <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden flex items-center justify-center relative transition-transform duration-700 ease-out group-hover:scale-105">
                          <img
                            src={item.project.heroImage}
                            alt={item.project.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-contain mx-auto"
                          />
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="pt-5 flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#080C14] tracking-tight leading-snug group-hover:text-black transition-colors">
                            {item.project.title}
                          </h3>
                          <p className="text-xs text-neutral-600 mt-2 line-clamp-2 leading-relaxed font-normal">
                            {item.project.tagline || item.project.description}
                          </p>
                        </div>

                        <div className="pt-4 mt-4 border-t border-black/5 flex items-center justify-between text-xs font-mono">
                          <span className="text-neutral-500">{item.project.year}</span>
                          <span className="text-[#080C14] group-hover:text-black font-bold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            <span>EXPLORE</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            );
          }

          return null;
        })}
      </div>

      {/* Footer Synchronized Note — Clean & High-End */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 mt-28 sm:mt-40 pt-10 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
        <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-600 text-center sm:text-left font-bold">
          SAEED JABBARI STUDIO — COMMERCIAL ARCHIVE
        </span>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          <a
            href="https://www.behance.net/saeedjabbari"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black text-neutral-700 transition-colors flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider font-semibold"
          >
            <span>Behance / saeedjabbari</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="mailto:saeedjabbari21@gmail.com"
            className="hover:text-black text-neutral-700 transition-colors flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider font-semibold"
          >
            <span>saeedjabbari21@gmail.com</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
