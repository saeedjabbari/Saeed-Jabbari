import React from 'react';
import { SECTORS } from '../data/content';
import { SectorCategory } from '../types';

interface IndustriesProps {
  onSelectSector: (sectorId: SectorCategory) => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onSelectSector }) => {
  return (
    <section id="industries" className="bg-[#f4f1ea] text-[#141518] py-24 sm:py-28 border-b border-[#e5e1d7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="block text-[11px] font-bold tracking-[0.24em] text-[#a07d40] uppercase mb-3">
            SECTOR EXPERTISE
          </span>
          <h2
            style={{ fontFamily: 'Georgia, serif' }}
            className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-tight text-[#141518] mb-3"
          >
            Industries We Serve
          </h2>
          <p className="text-sm sm:text-[15px] leading-relaxed text-[#595a5f] font-normal">
            Specialized creative direction calibrated for the commercial realities and aesthetics of each sector.
          </p>
        </div>

        {/* 2x2 Grid of Sector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {SECTORS.map((sector) => (
            <div
              key={sector.id}
              onClick={() => onSelectSector(sector.id)}
              className="bg-white rounded-xl overflow-hidden border border-[#e4ded3] shadow-[0_3px_14px_rgba(0,0,0,0.035)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex flex-col group"
            >
              {/* Colored Header Banner */}
              <div
                className="px-8 py-7 text-white transition-opacity group-hover:opacity-95"
                style={{ backgroundColor: sector.headerBg }}
              >
                <h3
                  style={{ fontFamily: 'Georgia, serif' }}
                  className="font-serif text-2xl sm:text-[26px] font-normal text-white mb-1.5 tracking-wide"
                >
                  {sector.name}
                </h3>
                <p className="text-xs sm:text-[13px] text-white/80 font-normal tracking-wide">
                  {sector.subtitle}
                </p>
              </div>

              {/* White Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#595a5f] font-normal mb-8">
                  {sector.description}
                </p>

                {/* Substrate & Architecture Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#f0ede6]">
                  {sector.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 bg-[#f7f5f0] text-[#63615b] rounded text-[11px] font-medium tracking-wide border border-[#e6e2d8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
