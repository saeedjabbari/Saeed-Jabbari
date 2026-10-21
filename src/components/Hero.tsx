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
      className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between bg-[#090a0d] text-[#f4f5f7] pt-8 md:pt-12 pb-8 border-b border-white/10 overflow-hidden select-none"
    >
      {/* Background Images with Smooth 1.4s Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentSlide.image}
              alt={currentSlide.industryLabel}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center saturate-[0.85] contrast-[1.08] brightness-[0.68]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Studio Carbon Scrims: High contrast for typography on the left, clear product view on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090a0d]/95 via-[#090a0d]/65 to-[#090a0d]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0d] via-transparent to-[#090a0d]/60" />
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="max-w-4xl pt-4 md:pt-6">
          {/* 4-Industry Switcher Bar */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5" aria-label="Core Industries">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === activeSlideIdx;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveSlideIdx(idx)}
                    className={`relative px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-md text-[11px] sm:text-xs tracking-wider uppercase font-mono transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? 'bg-[#FF4D1C] text-white font-semibold shadow-lg shadow-[#FF4D1C]/25'
                        : 'bg-black/45 hover:bg-black/70 text-neutral-300 hover:text-white border border-white/12 hover:border-white/30 backdrop-blur-md'
                    }`}
                  >
                    <span>{slide.industryLabel}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Typographic H1 — Modern Commercial Agency Display */}
          <div className="min-h-[140px] sm:min-h-[160px] lg:min-h-[190px] flex items-center mb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="font-serif text-[32px] xs:text-[38px] sm:text-[48px] md:text-[56px] lg:text-[66px] leading-[1.08] sm:leading-[1.05] font-semibold tracking-[-0.03em] text-white drop-shadow-sm max-w-4xl">
                  {/* Desktop version (2 clean lines) */}
                  <span className="hidden sm:block">
                    <span className="block">{currentSlide.headlineDesktop[0]}</span>
                    <span className="block text-[#FF5A2C]">{currentSlide.headlineDesktop[1]}</span>
                  </span>
                  {/* Mobile version (3 clean lines) */}
                  <span className="block sm:hidden">
                    <span className="block">{currentSlide.headlineMobile[0]}</span>
                    <span className="block">{currentSlide.headlineMobile[1]}</span>
                    <span className="block text-[#FF5A2C]">{currentSlide.headlineMobile[2]}</span>
                  </span>
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dynamic Subtitle */}
          <div className="min-h-[48px] sm:min-h-[56px] mb-8 max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentSlide.id + '-sub'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed"
              >
                {currentSlide.subtitle}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center gap-4 mb-12 md:mb-16"
          >
            <button
              onClick={onExploreWorks}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FF4D1C] hover:bg-[#ff6438] active:bg-[#e03e10] text-white text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all shadow-lg shadow-[#FF4D1C]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white group cursor-pointer"
            >
              <span>EXPLORE SELECTED WORKS</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>

            <button
              onClick={onOpenAudit}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/12 backdrop-blur-md border border-white/20 hover:border-white/40 text-white text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D1C] group cursor-pointer"
            >
              <span>1:1 BRAND & SALES AUDIT</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.div>

          {/* Proof Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid grid-cols-3 gap-6 sm:gap-12 max-w-lg pt-5 border-t border-white/15"
          >
            <div>
              <div className="font-serif text-3xl sm:text-4xl text-white font-semibold tracking-tight tabular-nums">
                12<span className="text-[#FF4D1C]">+</span>
              </div>
              <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-neutral-400 mt-1 font-mono">
                YEARS IN PRACTICE
              </div>
            </div>

            <div>
              <div className="font-serif text-3xl sm:text-4xl text-white font-semibold tracking-tight tabular-nums">
                80<span className="text-[#FF4D1C]">+</span>
              </div>
              <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-neutral-400 mt-1 font-mono">
                BRANDS SCALED
              </div>
            </div>

            <div>
              <div className="font-serif text-3xl sm:text-4xl text-white font-semibold tracking-tight tabular-nums">
                4
              </div>
              <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-neutral-400 mt-1 font-mono">
                CORE SECTORS
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Row: Slide progress and scroll hint */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-4 pb-2 flex items-center justify-between">
        <button
          onClick={onExploreWorks}
          className="flex items-center gap-3 text-neutral-400 hover:text-white text-[10px] tracking-[0.25em] uppercase font-semibold transition-colors group cursor-pointer focus-visible:outline-none"
        >
          <div className="w-10 h-[1px] bg-neutral-700 group-hover:bg-[#FF4D1C] transition-colors" aria-hidden="true" />
          <span>SCROLL TO CASE STUDIES</span>
          <ArrowDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#FF4D1C] animate-bounce" />
        </button>

        {/* Minimal Progress Dots */}
        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveSlideIdx(i)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                i === activeSlideIdx
                  ? 'w-8 bg-[#FF4D1C]'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
