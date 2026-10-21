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
    <section id="work" className="bg-[#f4f5f7] text-[#0b0d12] py-24 sm:py-28 border-b border-[#dfe3ea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with View Archive Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="block font-mono text-[11px] font-bold tracking-[0.24em] text-[#e03e10] uppercase mb-3">
              SELECTED CASE STUDIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight text-[#0b0d12] mb-3">
              Commercial Branding That Drives Visibility & Sales
            </h2>
            <p className="text-sm sm:text-[15px] leading-relaxed text-[#525866] font-normal">
              Real-world brand systems, packaging concepts, and technical catalogs engineered to help products stand out and win customers.
            </p>
          </div>

          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#090a0d] hover:bg-[#FF4D1C] text-white text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all self-start sm:self-auto shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D1C] cursor-pointer"
          >
            <span>VIEW ALL 11 PROJECTS</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 3 Project Cards Grid with High-Res Photography & Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {featured.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectProject(proj)}
              className="bg-white rounded-xl overflow-hidden border border-[#dfe3ea] shadow-[0_3px_14px_rgba(9,10,13,0.04)] hover:shadow-[0_18px_40px_rgba(9,10,13,0.1)] hover:border-[#FF4D1C]/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col group"
            >
              {/* High-Resolution Image Header Box */}
              <div className="h-64 sm:h-72 relative overflow-hidden bg-[#0e1015]">
                <img
                  src={proj.heroImage}
                  alt={proj.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                {/* Index stamp */}
                <div className="absolute top-4 left-4 font-mono text-[10px] text-white/90 bg-black/55 backdrop-blur-md px-2.5 py-1 rounded border border-white/15 tracking-wider">
                  0{idx + 1}
                </div>

                {/* Corner Action Circle */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-[#FF4D1C] group-hover:text-white group-hover:border-[#FF4D1C] transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Overlay Wordmark */}
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                  <span className="font-serif text-2xl font-semibold text-white tracking-tight drop-shadow-sm">
                    {proj.bannerVisualText}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#e03e10] font-semibold uppercase tracking-widest mb-2">
                    <span>{proj.sectorLabel}</span>
                    <span className="text-neutral-400">{proj.galleryImages.length} PLATES</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-[21px] font-semibold text-[#0b0d12] mb-3 leading-snug group-hover:text-[#FF4D1C] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#525866] font-normal mb-6">
                    {proj.description}
                  </p>
                </div>

                {/* Footer Meta Row with Category & Year */}
                <div className="pt-4 border-t border-[#eceef2] flex items-center justify-between text-[11px] text-[#687082] font-medium tracking-wide">
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
