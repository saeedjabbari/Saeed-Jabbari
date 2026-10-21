import React from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/content';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface SelectedWorkProps {
  onViewAll: () => void;
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onViewAll, onSelectProject }) => {
  const featured = PROJECTS.slice(0, 3);
  const leadProject = featured[0]; // The Nuvé
  const secondaryProject = featured[1]; // Master Chef
  const tertiaryProject = featured[2]; // B2B Art Diaspora

  return (
    <section id="work" className="bg-[#F5F6F9] text-[#080C14] py-20 sm:py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 sm:mb-20">
        {/* Section Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#080C14] text-[#D4FF00] font-mono text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
              <span>SELECTED CASE STUDIES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-semibold leading-[1.04] text-[#080C14] tracking-[-0.03em]">
              Commercial Branding That Drives Visibility &amp; Shelf Conversion
            </h2>
          </div>

          <button
            onClick={onViewAll}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#080C14] hover:bg-[#D4FF00] hover:text-[#080C14] text-white text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all self-stretch sm:self-auto shrink-0 group cursor-pointer shadow-lg shadow-black/10"
          >
            <span>VIEW ALL 11 PROJECTS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* 
        ========================================================================
        DYNAMIC EDITORIAL RHYTHM: Borderless, Full-Width, Diverse Layouts
        ========================================================================
      */}
      <div className="space-y-24 sm:space-y-36">
        {/* 
          ITEM 1: FULL-WIDTH MONITOR-SPANNING PLATE
        */}
        {leadProject && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => onSelectProject(leadProject)}
            className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] max-w-none bg-[#080C14] py-10 sm:py-20 px-4 sm:px-10 cursor-pointer group"
          >
            <div className="max-w-[1720px] mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 text-white px-2">
                <div>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-[#D4FF00] tracking-widest uppercase mb-2">
                    <span>01</span>
                    <span>—</span>
                    <span>{leadProject.sectorLabel}</span>
                    <span>·</span>
                    <span className="text-neutral-400">{leadProject.galleryImages.length} Plates</span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white group-hover:text-[#D4FF00] transition-colors">
                    {leadProject.title}
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D4FF00] uppercase tracking-wider">
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>

              {/* Edge-to-edge uncropped hero without any border stroke */}
              <div className="relative overflow-hidden rounded-2xl flex items-center justify-center bg-[#04060b] py-6 sm:py-12">
                <img
                  src={leadProject.heroImage}
                  alt={leadProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[80vh] object-contain mx-auto transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* 
          ITEM 2: ASYMMETRIC CONTRAST SPLIT ON GALLERY LIGHT CANVAS
        */}
        {secondaryProject && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectProject(secondaryProject)}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center cursor-pointer group"
            >
              {/* Left Column: Massive uncropped packaging showcase (no stroke) */}
              <div className="lg:col-span-7 bg-[#E8EBF0] rounded-2xl sm:rounded-3xl p-6 sm:p-12 flex items-center justify-center relative overflow-hidden group-hover:bg-[#E0E4EA] transition-colors">
                <img
                  src={secondaryProject.heroImage}
                  alt={secondaryProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[62vh] object-contain mx-auto transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute top-5 left-5 font-mono text-[11px] font-bold text-[#080C14] bg-white px-3 py-1 rounded shadow-sm">
                  02 / RETAIL FMCG
                </div>
              </div>

              {/* Right Column: Editorial Typography & Insight */}
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest text-[#080C14] uppercase">
                  <span>{secondaryProject.sectorLabel}</span>
                  <span>·</span>
                  <span className="text-neutral-500">{secondaryProject.year}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#080C14] leading-[1.08] group-hover:text-emerald-700 transition-colors">
                  {secondaryProject.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                  {secondaryProject.description}
                </p>

                <div className="pt-4 flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#080C14] group-hover:text-emerald-700 transition-colors uppercase">
                    <span>VIEW CASE ARCHIVE</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* 
          ITEM 3: REVERSED ASYMMETRIC HORIZON
        */}
        {tertiaryProject && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectProject(tertiaryProject)}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center cursor-pointer group"
            >
              {/* Left Column: Typography & Strategy */}
              <div className="lg:col-span-5 order-2 lg:order-1 space-y-5">
                <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest text-[#080C14] uppercase">
                  <span>03</span>
                  <span>—</span>
                  <span>{tertiaryProject.sectorLabel}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#080C14] leading-[1.08] group-hover:text-[#080C14]/75 transition-colors">
                  {tertiaryProject.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                  {tertiaryProject.description}
                </p>

                <div className="pt-4">
                  <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#080C14] uppercase">
                    <span>VIEW BRAND IDENTITY SYSTEM</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>

              {/* Right Column: High-Impact Visual Plate (no stroke) */}
              <div className="lg:col-span-7 order-1 lg:order-2 bg-[#E8EBF0] rounded-2xl sm:rounded-3xl p-6 sm:p-12 flex items-center justify-center relative overflow-hidden group-hover:bg-[#E0E4EA] transition-colors">
                <img
                  src={tertiaryProject.heroImage}
                  alt={tertiaryProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[62vh] object-contain mx-auto transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
