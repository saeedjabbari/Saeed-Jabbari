import React from 'react';
import { CAPABILITIES } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

interface CapabilitiesProps {
  onSelectCapability?: (id: string) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onSelectCapability }) => {
  return (
    <section id="capabilities" className="bg-[#080C14] text-[#f4f5f7] py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-6">
            <span className="block font-mono text-[11px] font-bold tracking-[0.24em] text-[#D4FF00] uppercase mb-3">
              CORE CAPABILITIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-tight text-white tracking-tight">
              Branding Solutions Built for Commercial Growth
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-sm sm:text-base leading-relaxed text-neutral-300 font-normal">
              From brand identity and packaging to technical catalogs and launch campaigns — strategic design systems that make your products easier to notice, understand, and buy.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid — Modern dark surfaces with Phosphor accents and NO white stroke lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CAPABILITIES.map((cap, idx) => (
            <div
              key={cap.id}
              onClick={() => onSelectCapability && onSelectCapability(cap.id)}
              className="bg-[#0E1522] hover:bg-[#121B2C] rounded-2xl p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#D4FF00]">
                    0{idx + 1}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#D4FF00] transition-colors" />
                </div>

                <h3 className="font-serif text-xl sm:text-[22px] font-semibold text-white mb-3 leading-snug group-hover:text-[#D4FF00] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-400 font-normal mb-6">
                  {cap.description}
                </p>
              </div>

              {/* Clean unboxed tags with typographic separators */}
              <div className="pt-4 text-xs font-mono text-neutral-400">
                <span>{cap.tags.join(' · ')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
