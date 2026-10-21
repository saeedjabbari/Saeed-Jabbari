import React from 'react';
import { SECTORS } from '../data/content';
import { SectorCategory } from '../types';

interface IndustriesProps {
  onSelectSector: (sectorId: SectorCategory) => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onSelectSector }) => {
  return (
    <section id="industries" className="bg-[#eceef2] text-[#0b0d12] py-24 sm:py-28 border-b border-[#dfe3ea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080C14] text-[#D4FF00] font-mono text-[10px] font-bold tracking-widest uppercase rounded mb-3">
            <span>SECTOR EXPERTISE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight text-[#0b0d12] mb-3">
            Industries We Help Stand Out & Sell
          </h2>
          <p className="text-sm sm:text-[15px] leading-relaxed text-[#525866] font-normal">
            Specialized branding and product presentation tailored to the buying psychology and commercial competition of each market.
          </p>
        </div>

        {/* 2x2 Grid of Sector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {SECTORS.map((sector) => (
            <div
              key={sector.id}
              onClick={() => onSelectSector(sector.id)}
              className="bg-white rounded-xl overflow-hidden border border-[#dfe3ea] shadow-[0_3px_14px_rgba(9,10,13,0.035)] hover:shadow-[0_14px_32px_rgba(9,10,13,0.09)] hover:border-[#D4FF00]/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex flex-col group"
            >
              {/* Colored Header Banner */}
              <div
                className="px-8 py-7 text-white transition-opacity group-hover:opacity-95"
                style={{ backgroundColor: sector.headerBg }}
              >
                <h3 className="font-serif text-2xl sm:text-[25px] font-semibold text-white mb-1.5 tracking-tight">
                  {sector.name}
                </h3>
                <p className="text-xs sm:text-[13px] text-white/85 font-normal tracking-wide">
                  {sector.subtitle}
                </p>
              </div>

              {/* White Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#525866] font-normal mb-8">
                  {sector.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#eceef2]">
                  {sector.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 bg-[#f4f5f7] text-[#474d59] rounded text-[11px] font-medium tracking-wide border border-[#dfe3ea]"
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
