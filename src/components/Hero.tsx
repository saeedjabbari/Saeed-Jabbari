import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_SLIDES } from '../data/content';

interface HeroProps {
  onExploreWorks: () => void;
  onOpenAudit: () => void;
  onExploreServices?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWorks,
  onOpenAudit,
  onExploreServices
}) => {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Calm 8-second rotation
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
      className="relative min-h-[90vh] sm:min-h-[calc(100vh-5rem)] flex flex-col justify-between bg-[#080C14] text-[#f4f5f7] pt-8 sm:pt-12 pb-6 sm:pb-8 overflow-hidden select-none"
    >
      {/* 
        Frosted Glass Dark Background with Soft Animated Mineral Blue & Phosphor Lime Glow
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[#080C14]" />

        <div
          className="animate-glass-glow-1 absolute -top-24 sm:-top-32 left-1/4 sm:left-1/3 -translate-x-1/2 w-[360px] sm:w-[600px] lg:w-[840px] h-[360px] sm:h-[600px] lg:h-[840px] rounded-full blur-[90px] sm:blur-[140px] lg:blur-[180px] opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(15, 62, 109, 0.5) 0%, rgba(10, 30, 60, 0.25) 50%, rgba(8, 12, 20, 0) 75%)'
          }}
        />

        <div
          className="animate-glass-glow-2 absolute top-1/4 right-0 sm:right-10 w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[500px] lg:h-[700px] rounded-full blur-[80px] sm:blur-[130px] lg:blur-[160px] opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(212, 255, 0, 0.22) 0%, rgba(160, 220, 0, 0.1) 45%, rgba(8, 12, 20, 0) 75%)'
          }}
        />

        <div
          className="animate-glass-glow-3 absolute -bottom-20 left-10 w-[280px] sm:w-[440px] h-[280px] sm:h-[440px] rounded-full blur-[80px] sm:blur-[130px] opacity-35"
          style={{
            background: 'radial-gradient(circle, rgba(13, 148, 136, 0.3) 0%, rgba(8, 12, 20, 0) 70%)'
          }}
        />

        <div className="absolute inset-0 backdrop-blur-[70px] sm:backdrop-blur-[110px] lg:backdrop-blur-[130px] bg-gradient-to-b from-[#080C14]/40 via-[#080C14]/70 to-[#080C14]/95" />
      </div>

      {/* Main Content Area — Split Hero: Left Studio Value, Right Live Physical Artwork Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto py-6 sm:py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Direct Studio Identity, Clear Proposition & Action */}
          <div className="lg:col-span-7">
            {/* Minimal Unboxed Studio Descriptor */}
            <div className="flex items-center gap-2 text-[#D4FF00] font-mono text-[9px] sm:text-[10px] font-semibold tracking-[0.24em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" aria-hidden="true" />
              <span>COMMERCIAL BRANDING &amp; PACKAGING STUDIO</span>
            </div>

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
                  {/* Mobile View: Clean rhythmic lines preventing mid-word overflow */}
                  <h1 className="sm:hidden font-serif text-[32px] xs:text-[36px] leading-[1.08] font-semibold tracking-[-0.035em] text-white">
                    {currentSlide.headlineMobile.map((line, idx) => (
                      <span
                        key={idx}
                        className={
                          idx === currentSlide.headlineMobile.length - 1
                            ? 'block text-[#D4FF00] mt-1'
                            : 'block'
                        }
                      >
                        {line}
                      </span>
                    ))}
                  </h1>

                  {/* Tablet & Desktop View: Strictly 2-line typographic punch */}
                  <h1 className="hidden sm:block font-serif sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[72px] leading-[1.02] font-semibold tracking-[-0.035em] text-white">
                    <span className="block">{currentSlide.headlineDesktop[0]}</span>
                    <span className="block text-[#D4FF00] mt-1 sm:mt-2">{currentSlide.headlineDesktop[1]}</span>
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dynamic Subtitle — Clear commercial value proposition */}
            <div className="mb-8 max-w-xl">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentSlide.id + '-sub'}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="text-sm sm:text-base md:text-[17px] text-neutral-300 font-normal leading-relaxed"
                >
                  {currentSlide.subtitle}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Action CTAs — Phosphor high-contrast accent */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-7 w-full sm:w-auto"
            >
              <button
                onClick={onExploreWorks}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 bg-[#D4FF00] hover:bg-[#c2eb00] active:bg-[#aedf00] text-[#080C14] text-xs font-black tracking-[0.14em] uppercase rounded-md transition-all shadow-xl shadow-[#D4FF00]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white group cursor-pointer w-full sm:w-auto"
              >
                <span>EXPLORE SELECTED WORKS</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onOpenAudit}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 bg-white/5 hover:bg-white/12 backdrop-blur-md border border-white/20 hover:border-[#D4FF00] text-white hover:text-[#D4FF00] text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF00] group cursor-pointer w-full sm:w-auto"
              >
                <span>1:1 BRAND &amp; SALES AUDIT</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Live Above-the-Fold Visual Showcase Card (Instant Physical Comprehension!) */}
          <div className="lg:col-span-5 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -15 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                onClick={onExploreWorks}
                className="group relative bg-[#0D131F]/90 backdrop-blur-xl border border-white/15 hover:border-[#D4FF00]/60 rounded-2xl overflow-hidden cursor-pointer shadow-2xl shadow-black/80 transition-all duration-300 hover:shadow-[#D4FF00]/10"
              >
                {/* Card Header Bar */}
                <div className="px-5 py-3.5 bg-white/[0.03] border-b border-white/10 flex items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <span className="w-2 h-2 rounded-full bg-[#D4FF00]" />
                    <span className="font-bold tracking-wider uppercase text-[11px] text-white">
                      {currentSlide.industryLabel}
                    </span>
                  </div>
                  <span className="text-[10px] tracking-widest uppercase text-neutral-400 font-semibold group-hover:text-[#D4FF00] transition-colors flex items-center gap-1">
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>

                {/* Primary Physical Artwork Visual Plate */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] bg-[#03060B] overflow-hidden flex items-center justify-center p-4 sm:p-6">
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.sampleProjectTitle}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain mx-auto transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D131F] via-transparent to-transparent opacity-60" />
                </div>

                {/* Card Footer Info */}
                <div className="p-4 sm:p-5 bg-[#0D131F] border-t border-white/10">
                  <h4 className="font-serif text-base sm:text-lg font-semibold text-white tracking-tight group-hover:text-[#D4FF00] transition-colors truncate">
                    {currentSlide.sampleProjectTitle}
                  </h4>
                  <p className="font-mono text-[10px] sm:text-[11px] text-neutral-400 tracking-wider uppercase mt-1 truncate">
                    {currentSlide.sampleDeliverables}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Bottom Row: Slide progress and scroll hint — No white line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-3 pb-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-neutral-400">
        <button
          onClick={onExploreWorks}
          className="flex items-center gap-2.5 sm:gap-3 text-neutral-300 hover:text-[#D4FF00] text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold transition-colors group cursor-pointer focus-visible:outline-none"
        >
          <div className="w-8 sm:w-10 h-[1px] bg-neutral-700 group-hover:bg-[#D4FF00] transition-colors" aria-hidden="true" />
          <span>SCROLL TO CASE STUDIES</span>
          <ArrowDown className="w-3.5 h-3.5 text-neutral-300 group-hover:text-[#D4FF00] animate-bounce" />
        </button>

        {/* Minimal Progress Indicator with phosphor accent */}
        <div className="flex items-center gap-2.5 self-end sm:self-auto font-mono text-xs">
          <span className="text-[#D4FF00] font-bold text-[11px]">0{activeSlideIdx + 1}</span>
          <span className="text-neutral-600 text-[11px]">/</span>
          <span className="text-neutral-500 text-[11px]">0{HERO_SLIDES.length}</span>
          <div className="flex items-center gap-1.5 ml-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveSlideIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  i === activeSlideIdx
                    ? 'w-6 bg-[#D4FF00]'
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
