import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_SLIDES } from '../data/content';

interface HeroProps {
  onExploreWorks: () => void;
  onOpenAudit: () => void;
  onExploreServices?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWorks,
  onOpenAudit
}) => {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Calm 8-second rotation across core commercial industries
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlideIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentSlide = HERO_SLIDES[activeSlideIdx];

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[85vh] sm:min-h-[calc(100vh-5rem)] flex flex-col justify-between bg-[#090a0d] text-[#f4f5f7] pt-6 sm:pt-10 md:pt-14 pb-6 sm:pb-8 border-b border-white/10 overflow-hidden select-none"
    >
      {/* 
        Frosted Glass Dark Background with Soft Animated Orange Light 
        Light appears as though softly moving and diffusing from beneath dark frosted glass
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Deep base studio black */}
        <div className="absolute inset-0 bg-[#090a0d]" />

        {/* Primary Soft Orange Glass Glow Orb (Animated translation & breathing) */}
        <div
          className="animate-glass-glow-1 absolute -top-24 sm:-top-32 left-1/4 sm:left-1/3 -translate-x-1/2 w-[340px] sm:w-[580px] lg:w-[820px] h-[340px] sm:h-[580px] lg:h-[820px] rounded-full blur-[80px] sm:blur-[130px] lg:blur-[160px] opacity-55"
          style={{
            background: 'radial-gradient(circle, rgba(255, 77, 28, 0.42) 0%, rgba(255, 110, 50, 0.22) 45%, rgba(9, 10, 13, 0) 75%)'
          }}
        />

        {/* Secondary Warm Amber Glow Orb (Counter-motion drift) */}
        <div
          className="animate-glass-glow-2 absolute top-1/3 sm:top-1/4 right-0 sm:right-10 w-[280px] sm:w-[480px] lg:w-[680px] h-[280px] sm:h-[480px] lg:h-[680px] rounded-full blur-[70px] sm:blur-[120px] lg:blur-[150px] opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(255, 122, 69, 0.38) 0%, rgba(255, 77, 28, 0.18) 50%, rgba(9, 10, 13, 0) 80%)'
          }}
        />

        {/* Bottom-left Deep Crimson-Orange Accent Glow */}
        <div
          className="animate-glass-glow-3 absolute -bottom-20 left-10 w-[260px] sm:w-[420px] h-[260px] sm:h-[420px] rounded-full blur-[80px] sm:blur-[120px] opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(224, 62, 16, 0.32) 0%, rgba(9, 10, 13, 0) 70%)'
          }}
        />

        {/* 
          Architectural Frosted Glass Diffusion Surface
          Multi-layer blur and glass refraction gradients to simulate frosted/smoked glass
        */}
        <div className="absolute inset-0 backdrop-blur-[60px] sm:backdrop-blur-[100px] lg:backdrop-blur-[120px] bg-gradient-to-b from-[#090a0d]/50 via-[#090a0d]/75 to-[#090a0d]/95" />

        {/* Subtle glass specular sheen line */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      {/* Main Content Area — Expansive negative space, uncluttered and breathing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto py-8 sm:py-14 md:py-20">
        <div className="max-w-3xl">
          {/* Dynamic Typographic H1 */}
          <div className="mb-4 sm:mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[70px] leading-[1.08] sm:leading-[1.02] font-semibold tracking-[-0.035em] text-white">
                  <span className="block">{currentSlide.headlineDesktop[0]}</span>
                  <span className="block text-[#FF4D1C] mt-1 sm:mt-2">{currentSlide.headlineDesktop[1]}</span>
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dynamic Subtitle — Concise and readable */}
          <div className="mb-8 sm:mb-12 max-w-xl">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentSlide.id + '-sub'}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="text-sm sm:text-base md:text-lg text-neutral-300 font-normal leading-relaxed"
              >
                {currentSlide.subtitle}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Action CTAs — Responsive full width on mobile, inline on desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-16 md:mb-20 w-full sm:w-auto"
          >
            <button
              onClick={onExploreWorks}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-3.5 bg-[#FF4D1C] hover:bg-[#ff6438] active:bg-[#e03e10] text-white text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all shadow-lg shadow-[#FF4D1C]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white group cursor-pointer w-full sm:w-auto"
            >
              <span>EXPLORE SELECTED WORKS</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>

            <button
              onClick={onOpenAudit}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-3.5 bg-white/5 hover:bg-white/12 backdrop-blur-md border border-white/20 hover:border-white/40 text-white text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D1C] group cursor-pointer w-full sm:w-auto"
            >
              <span>1:1 BRAND & SALES AUDIT</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.div>

          {/* Proof Metrics — Clean 3 columns with spacious negative space */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-10 max-w-lg pt-5 sm:pt-7 border-t border-white/10"
          >
            <div>
              <div className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-semibold tracking-tight tabular-nums">
                12<span className="text-[#FF4D1C]">+</span>
              </div>
              <div className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold tracking-[0.14em] sm:tracking-[0.18em] uppercase text-neutral-400 mt-1 font-mono">
                YEARS IN PRACTICE
              </div>
            </div>

            <div>
              <div className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-semibold tracking-tight tabular-nums">
                80<span className="text-[#FF4D1C]">+</span>
              </div>
              <div className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold tracking-[0.14em] sm:tracking-[0.18em] uppercase text-neutral-400 mt-1 font-mono">
                BRANDS SCALED
              </div>
            </div>

            <div>
              <div className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-semibold tracking-tight tabular-nums">
                4
              </div>
              <div className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold tracking-[0.14em] sm:tracking-[0.18em] uppercase text-neutral-400 mt-1 font-mono">
                CORE SECTORS
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Row: Slide progress and scroll hint */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-3 pb-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-neutral-400">
        <button
          onClick={onExploreWorks}
          className="flex items-center gap-2.5 sm:gap-3 text-neutral-400 hover:text-white text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold transition-colors group cursor-pointer focus-visible:outline-none"
        >
          <div className="w-8 sm:w-10 h-[1px] bg-neutral-700 group-hover:bg-[#FF4D1C] transition-colors" aria-hidden="true" />
          <span>SCROLL TO CASE STUDIES</span>
          <ArrowDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#FF4D1C] animate-bounce" />
        </button>

        {/* Minimal Progress Indicator with delicate negative space */}
        <div className="flex items-center gap-2.5 self-end sm:self-auto font-mono text-xs">
          <span className="text-[#FF4D1C] font-semibold text-[11px]">0{activeSlideIdx + 1}</span>
          <span className="text-neutral-600 text-[11px]">/</span>
          <span className="text-neutral-500 text-[11px]">0{HERO_SLIDES.length}</span>
          <div className="flex items-center gap-1.5 ml-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveSlideIdx(i)}
                className={`h-1 rounded-full transition-all duration-500 cursor-pointer ${
                  i === activeSlideIdx
                    ? 'w-6 bg-[#FF4D1C]'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
