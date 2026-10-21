import React from 'react';

interface CtaBannerProps {
  onOpenBrief: () => void;
  onViewPricing: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBrief, onViewPricing }) => {
  return (
    <section className="bg-[#090a0d] text-[#f4f5f7] py-24 sm:py-28 text-center border-b border-white/10 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF4D1C]/[0.06] rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span className="block font-mono text-[11px] font-bold tracking-[0.26em] text-[#FF4D1C] uppercase mb-4">
          READY TO GROW YOUR BRAND?
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-[1.12] text-white mb-4 max-w-2xl mx-auto">
          Let's make your products stand out, communicate clearly, and sell better.
        </h2>

        <p className="text-xs sm:text-sm text-neutral-400 font-normal max-w-xl mx-auto mb-10 leading-relaxed">
          Start with a focused brand & shelf audit or commission a complete identity, packaging, or catalog system directly with Saeed Jabbari.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenBrief}
            className="px-7 py-3.5 bg-[#FF4D1C] hover:bg-[#ff6438] active:bg-[#e03e10] text-white text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all shadow-lg shadow-[#FF4D1C]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
          >
            START A PROJECT
          </button>

          <button
            onClick={onViewPricing}
            className="px-7 py-3.5 bg-transparent hover:bg-white/10 border border-white/20 hover:border-white/40 text-white text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D1C] cursor-pointer"
          >
            VIEW PRICING & SCOPE
          </button>
        </div>
      </div>
    </section>
  );
};
