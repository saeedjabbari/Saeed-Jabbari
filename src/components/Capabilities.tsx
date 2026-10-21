import React from 'react';
import { CAPABILITIES } from '../data/content';

interface CapabilitiesProps {
  onSelectCapability?: (id: string) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onSelectCapability }) => {
  return (
    <section id="capabilities" className="bg-[#f4f5f7] text-[#0b0d12] py-24 sm:py-28 border-b border-[#dfe3ea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16">
          <div className="lg:col-span-6">
            <span className="block font-mono text-[11px] font-bold tracking-[0.24em] text-[#e03e10] uppercase mb-3">
              CORE CAPABILITIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight text-[#0b0d12]">
              Branding Solutions Built for Commercial Growth
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-sm sm:text-[15px] leading-relaxed text-[#525866] font-normal">
              From brand identity and packaging to technical catalogs and launch campaigns — strategic design systems that make your products easier to notice, understand, and buy.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((cap, idx) => (
            <div
              key={cap.id}
              onClick={() => onSelectCapability && onSelectCapability(cap.id)}
              className="bg-white rounded-xl p-7 border border-[#dfe3ea] shadow-[0_2px_12px_rgba(9,10,13,0.03)] hover:shadow-[0_12px_30px_rgba(9,10,13,0.08)] hover:border-[#FF4D1C]/60 transition-all duration-200 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="font-mono text-[11px] font-bold text-[#e03e10] mb-3">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-xl sm:text-[21px] font-semibold text-[#0b0d12] mb-3 leading-snug group-hover:text-[#FF4D1C] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#525866] font-normal mb-6">
                  {cap.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#eceef2]">
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2.5 py-1 bg-[#f4f5f7] text-[#474d59] rounded text-[10px] font-medium tracking-wide border border-[#dfe3ea]"
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
