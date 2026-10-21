import React from 'react';

interface CtaBannerProps {
  onOpenBrief: () => void;
  onViewPricing: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBrief, onViewPricing }) => {
  return (
    <section className="bg-[#090a0d] text-[#f7f4ee] py-24 sm:py-28 text-center border-b border-neutral-800/80 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#cfad76]/[0.035] rounded-full blur-[130px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span className="block text-[11px] font-bold tracking-[0.26em] text-[#cfad76] uppercase mb-4">
          READY TO START?
        </span>

        <h2
          style={{ fontFamily: 'Georgia, serif' }}
          className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal leading-[1.15] text-[#fcfbfa] mb-4 max-w-2xl mx-auto"
        >
          Let's build your next brand system, packaging, or campaign.
        </h2>

        <p className="text-xs sm:text-sm text-neutral-400 font-normal max-w-xl mx-auto mb-10 leading-relaxed">
          Start with a 48-hour brand and shelf audit or commission a full creative project — direct from the principal director.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenBrief}
            className="px-7 py-3.5 bg-[#cfad76] hover:bg-[#dfbd86] active:bg-[#c29e67] text-[#0d0f12] text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            INTAKE BRIEF
          </button>

          <button
            onClick={onViewPricing}
            className="px-7 py-3.5 bg-transparent hover:bg-neutral-900 border border-neutral-700 hover:border-neutral-500 text-white text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfad76]"
          >
            VIEW PRICING
          </button>
        </div>
      </div>
    </section>
  );
};
