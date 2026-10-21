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

  return (
    <section id="work" className="bg-[#f7f5f0] text-[#141518] py-24 sm:py-28 border-b border-[#e5e1d7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with View Archive Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="block text-[11px] font-bold tracking-[0.24em] text-[#a07d40] uppercase mb-3">
              SELECTED WORK
            </span>
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-tight text-[#141518] mb-3"
            >
              Recent Project Highlights
            </h2>
            <p className="text-sm sm:text-[15px] leading-relaxed text-[#595a5f] font-normal">
              A curated selection spanning brand identity, industrial packaging, cosmetics, and heritage goods.
            </p>
          </div>

          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0d0f12] hover:bg-neutral-800 text-white text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all self-start sm:self-auto shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfad76] cursor-pointer"
          >
            <span>VIEW COMPLETE ARCHIVE</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 3 Project Cards Grid with High-Res Photography & Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {featured.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectProject(proj)}
              className="bg-white rounded-xl overflow-hidden border border-[#e4ded3] shadow-[0_3px_14px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_36px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col group"
            >
              {/* High-Resolution Image Header Box */}
              <div className="h-64 sm:h-72 relative overflow-hidden bg-[#101217]">
                <img
                  src={proj.heroImage}
                  alt={proj.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                {/* Index stamp */}
                <div className="absolute top-4 left-4 font-mono text-[10px] text-white/90 bg-black/45 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 tracking-wider">
                  0{idx + 1}
                </div>

                {/* Corner Action Circle */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-[#cfad76] group-hover:text-black group-hover:border-[#cfad76] transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Overlay Wordmark */}
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                  <span
                    style={{ fontFamily: 'Georgia, serif' }}
                    className="font-serif text-2xl text-white tracking-tight drop-shadow-sm"
                  >
                    {proj.bannerVisualText}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#a07d40] uppercase tracking-widest mb-1.5">
                    <span>{proj.sectorLabel}</span>
                    <span className="text-neutral-400">{proj.galleryImages.length} PLATES</span>
                  </div>
                  <h3
                    style={{ fontFamily: 'Georgia, serif' }}
                    className="font-serif text-xl sm:text-[22px] font-normal text-[#141518] mb-3 leading-snug group-hover:text-[#a07d40] transition-colors"
                  >
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#595a5f] font-normal mb-6">
                    {proj.description}
                  </p>
                </div>

                {/* Footer Meta Row with Category & Year */}
                <div className="pt-4 border-t border-[#f0ede6] flex items-center justify-between text-[11px] text-[#787671] font-medium tracking-wide">
                  <span>{proj.categoryTag}</span>
                  <span className="font-mono tabular-nums">{proj.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
