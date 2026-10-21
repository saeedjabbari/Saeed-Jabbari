import React from 'react';

interface CtaBannerProps {
  onOpenBrief: () => void;
  onViewPricing: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBrief, onViewPricing }) => {
  return (
    <section className="bg-[#080C14] text-[#f4f5f7] py-20 sm:py-28 lg:py-36 text-center relative overflow-hidden">
      {/* Subtle radial glow matching phosphor ambiance */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[250px] sm:h-[350px] bg-[#D4FF00]/[0.08] rounded-full blur-[110px] sm:blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span className="block font-mono text-[11px] font-bold tracking-[0.26em] text-[#D4FF00] uppercase mb-4">
          READY TO GROW YOUR BRAND?
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-semibold leading-[1.12] text-white mb-4 max-w-2xl mx-auto tracking-tight">
          Let's make your products stand out, communicate clearly, and sell better.
        </h2>

        <p className="text-sm sm:text-base text-neutral-300 font-normal max-w-xl mx-auto mb-10 sm:mb-12 leading-relaxed">
          Start with a focused brand &amp; shelf audit or commission a complete identity, packaging, or catalog system directly with Saeed Jabbari.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
          <button
            onClick={onOpenBrief}
            className="w-full sm:w-auto px-8 py-4 bg-[#D4FF00] hover:bg-[#c2eb00] active:bg-[#aedf00] text-[#080C14] text-xs font-black tracking-[0.14em] uppercase rounded-md transition-all shadow-xl shadow-[#D4FF00]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
          >
            START A PROJECT
          </button>

          <button
            onClick={onViewPricing}
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 border border-white/20 hover:border-[#D4FF00] text-white hover:text-[#D4FF00] text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF00] cursor-pointer"
          >
            VIEW PRICING &amp; SCOPE
          </button>
        </div>
      </div>
    </section>
  );
};
