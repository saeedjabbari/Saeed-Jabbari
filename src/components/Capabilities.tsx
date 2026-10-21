import React from 'react';
import { CAPABILITIES } from '../data/content';

interface CapabilitiesProps {
  onSelectCapability?: (id: string) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onSelectCapability }) => {
  return (
    <section id="capabilities" className="bg-[#f7f5f0] text-[#141518] py-24 sm:py-28 border-b border-[#e7e4dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16">
          <div className="lg:col-span-6">
            <span className="block text-[11px] font-bold tracking-[0.24em] text-[#a07d40] uppercase mb-3">
              CAPABILITIES
            </span>
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-tight text-[#141518]"
            >
              Full-Spectrum Creative Services
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-sm sm:text-[15px] leading-relaxed text-[#595a5f] font-normal">
              From logo and identity to packaging, print collateral, and launch campaigns — integrated creative direction that eliminates fragmentation across every brand touchpoint.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              onClick={() => onSelectCapability && onSelectCapability(cap.id)}
              className="bg-white rounded-xl p-7 border border-[#e6e2d8] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#cfad76]/50 transition-all duration-200 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <h3
                  style={{ fontFamily: 'Georgia, serif' }}
                  className="font-serif text-xl sm:text-[22px] font-normal text-[#141518] mb-3 leading-snug group-hover:text-[#a07d40] transition-colors"
                >
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#595a5f] font-normal mb-6">
                  {cap.description}
                </p>
              </div>

              {/* Tags / Pills matching screenshot */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#f0ede6]">
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2.5 py-1 bg-[#f5f3ee] text-[#63615b] rounded text-[10px] font-medium tracking-wide border border-[#e8e4da]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
