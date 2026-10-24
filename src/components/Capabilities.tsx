import React from 'react';
import { CAPABILITIES } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

interface CapabilitiesProps {
  onSelectCapability?: (id: string) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onSelectCapability }) => {
  return (
    <section id="capabilities" className="bg-[#F8F9FA] text-[#080C14] py-20 sm:py-28 overflow-hidden border-y border-[#E2E6EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-[#080C14] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#080C14]" aria-hidden="true" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-tight text-[#080C14] tracking-tight">
              Branding Solutions Built for Commercial Growth
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-sm sm:text-base leading-relaxed text-neutral-600 font-normal">
              From brand identity and packaging to technical catalogs and launch campaigns — strategic design systems that make your products easier to notice, understand, and buy.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid — Modern high-contrast light surfaces with crisp hover effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CAPABILITIES.map((cap, idx) => (
            <div
              key={cap.id}
              onClick={() => onSelectCapability && onSelectCapability(cap.id)}
              className="bg-white hover:bg-neutral-50/80 rounded-2xl p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-lg shadow-black/[0.03] border border-neutral-200/90 hover:border-[#080C14] hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#080C14] bg-[#D4FF00] px-2 py-0.5 rounded-sm">
                    0{idx + 1}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#080C14] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="font-serif text-xl sm:text-[22px] font-semibold text-[#080C14] mb-3 leading-snug group-hover:text-black transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-600 font-normal mb-6">
                  {cap.description}
                </p>
              </div>

              {/* Clean unboxed tags with typographic separators */}
              <div className="pt-4 text-xs font-mono text-neutral-500 border-t border-neutral-100">
                <span>{cap.tags.join(' · ')}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Track Record & Performance Metrics */}
        <div className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-neutral-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#080C14] font-semibold tracking-tight tabular-nums">
                12<span className="text-[#080C14] font-black">+</span>
              </div>
              <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-500 mt-2 font-mono">
                YEARS IN PRACTICE
              </div>
              <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed font-normal">
                Continuous commercial design direction and production experience.
              </p>
            </div>

            <div>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#080C14] font-semibold tracking-tight tabular-nums">
                150<span className="text-[#080C14] font-black">+</span>
              </div>
              <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-500 mt-2 font-mono">
                PROJECTS DELIVERED
              </div>
              <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed font-normal">
                From brand identities to technical catalogs &amp; retail packaging.
              </p>
            </div>

            <div>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#080C14] font-semibold tracking-tight tabular-nums">
                4
              </div>
              <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-500 mt-2 font-mono">
                CORE SECTORS
              </div>
              <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed font-normal">
                Specialized in B2B, FMCG, Cosmetics &amp; Heavy Industry.
              </p>
            </div>

            <div>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#080C14] font-semibold tracking-tight tabular-nums">
                100<span className="text-[#080C14] font-black">%</span>
              </div>
              <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-500 mt-2 font-mono">
                COMMERCIAL FOCUS
              </div>
              <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed font-normal">
                Every visual asset engineered for clarity, credibility, and conversion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
