import React, { useState } from 'react';
import { PROJECTS } from '../data/content';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Ruler, 
  ScanEye, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Boxes, 
  Cpu, 
  Award, 
  FileText, 
  Layers,
  ChevronRight,
  Maximize2,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProcessViewProps {
  onOpenBrief: () => void;
}

type ScopeType = 'packaging' | 'identity' | 'industrial';

export const ProcessView: React.FC<ProcessViewProps> = ({ onOpenBrief }) => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [selectedScope, setSelectedScope] = useState<ScopeType>('packaging');

  // Real Project Visual Assets from Saeed Jabbari's Verified Portfolio
  const nuveArtwork = PROJECTS.find(p => p.id === 'the-nuve')?.heroImage || '';
  const mintArtwork = PROJECTS.find(p => p.id === 'mood-mint')?.heroImage || '';
  const lpgArtwork = PROJECTS.find(p => p.id === 'rst-lpg-tank')?.heroImage || '';
  const trailerArtwork = PROJECTS.find(p => p.id === 'trailer-systems')?.heroImage || '';

  // 4 Commercial Process Stages with Dedicated Visual Blueprints & Artifacts
  const stages = [
    {
      num: '01',
      code: 'STAGE_01 // RECONNAISSANCE',
      title: 'Forensic Category Audit & Buyer Trigger Mapping',
      tagline: 'Eliminating guesswork: discovering why competitor products blend into shelves before drawing a single line.',
      duration: 'WEEKS 01–02',
      image: nuveArtwork,
      imageAlt: 'The Nuvé Skincare Commercial Audit & Bottle Staging',
      visualType: 'AUDIT_MATRIX',
      badge: 'MARKET POSITIONING',
      accentColor: '#D4FF00',
      description: 'We audit the category landscape, competitor dielines, shelf lighting conditions, and buyer purchase triggers to uncover unoccupied commercial territory for your brand.',
      deliverables: [
        'Category shelf standout & competitor contrast diagnostic',
        'Customer purchase trigger analysis (the 2.5-second aisle hook)',
        'Strategic creative direction & material substrate roadmap',
        'Commercial differentiation matrix & price-point perception audit'
      ],
      blueprintSpecs: [
        { label: 'Shelf Scan Window', value: '2.5 Seconds' },
        { label: 'Category Audit Scope', value: '12 Competitor SKUs' },
        { label: 'Substrate Strategy', value: 'Tactile Glass + Carton' },
        { label: 'Positioning Focus', value: 'High-Margin Premium' }
      ]
    },
    {
      num: '02',
      code: 'STAGE_02 // ARCHITECTURE',
      title: 'Structural Packaging & CAD Dieline Engineering',
      tagline: 'Translating brand philosophy into physical, tactile objects that demand to be held and purchased.',
      duration: 'WEEKS 03–04',
      image: mintArtwork,
      imageAlt: 'MOOD MINT Structural Packaging Tin & Debossed Dielines',
      visualType: 'DIELINE_CAD',
      badge: 'STRUCTURAL PACKAGING',
      accentColor: '#38BDF8',
      description: 'We engineer custom dielines, bottle contours, carton fold choreography, deboss depth tolerances, and tactile material finishes that protect margins while commanding retail attention.',
      deliverables: [
        '1:1 Scale CAD dielines & structural packaging templates',
        'Tactile substrate curation (Pantone metallic, soft-touch, foil)',
        'Unboxing choreography & opening ritual engineering',
        'Production cost estimation & factory folding feasibility checks'
      ],
      blueprintSpecs: [
        { label: 'Caliper Tolerance', value: '±0.05 mm SBS' },
        { label: 'Deboss Depth', value: '0.18 mm Crisp Edge' },
        { label: 'Foil Specification', value: 'Matte Titanium Hot-Stamp' },
        { label: 'Dieline Standard', value: 'ECMA / FEFCO Compliant' }
      ]
    },
    {
      num: '03',
      code: 'STAGE_03 // VISUAL_SYSTEM',
      title: 'Visual Identity, Typography & Shelf Hierarchy',
      tagline: 'Engineering unmistakable graphic equity: proprietary logomarks, color discipline, and optical label hierarchy.',
      duration: 'WEEKS 05–06',
      image: lpgArtwork,
      imageAlt: 'Industrial Visual System & Technical Publication Architecture',
      visualType: 'TYPOGRAPHIC_GRID',
      badge: 'BRAND IDENTITY',
      accentColor: '#A855F7',
      description: 'We design distinctive brand assets—geometric logomarks, Swiss-inspired typographic systems, and high-impact packaging labels engineered for instant cognitive recall.',
      deliverables: [
        'Master vector logomark system & primary brand identity guidelines',
        'Typographic hierarchy codex (optical kerning, label legibility)',
        'Proprietary color system (Pantone spot formulation & digital RGB tokens)',
        'Packaging label systems adapted across multiple SKUs and container sizes'
      ],
      blueprintSpecs: [
        { label: 'Primary Typography', value: 'Custom Serif + Monospace' },
        { label: 'Color Separation', value: 'Spot Pantone 802C + CMYK' },
        { label: 'Barcode Grade', value: 'ISO/IEC 15416 Grade A' },
        { label: 'Scalability Matrix', value: '15mm Cap to 12m Billboard' }
      ]
    },
    {
      num: '04',
      code: 'STAGE_04 // PREPRESS_HANDOVER',
      title: '3D CGI Staging, Pre-Press & Factory Production Handover',
      tagline: 'Flawless execution from digital art to factory print runs without color drift, trapping errors, or delays.',
      duration: 'WEEKS 07+',
      image: trailerArtwork,
      imageAlt: 'Complete Systems CGI Visualization & Prepress Publication',
      visualType: 'PREPRESS_BAY',
      badge: 'PRODUCTION READINESS',
      accentColor: '#34D399',
      description: 'We prepare factory-verified pre-press print files, conduct color separations, verify overprints, and deliver photorealistic 3D digital twins for commercial e-commerce and retail launch.',
      deliverables: [
        '100% Factory-ready pre-press print files with bleeds & trapping',
        'Photorealistic 3D product renders for e-commerce, catalogs & PR',
        'Comprehensive brand guidelines manual for internal design teams',
        'Direct factory printing coordination & substrate proof approvals'
      ],
      blueprintSpecs: [
        { label: 'Color Space', value: 'FOGRA51 / GRACoL CMYK' },
        { label: 'Resolution', value: '300 DPI Native / 8K CGI' },
        { label: 'Spot Separation', value: 'White-Plate Underprint' },
        { label: 'Handover Rights', value: '100% Commercial Transfer' }
      ]
    }
  ];

  // Milestone Scope Estimator Configurations
  const scopeConfigs = {
    packaging: {
      name: 'Hero Packaging & Multi-SKU Launch',
      duration: '4–6 Weeks',
      stages: 'Stage 01 to Stage 04',
      bestFor: 'FMCG, Cosmetics, Beverage & Consumer Brands launching physical products',
      highlights: [
        'Complete 1:1 CAD dieline architecture & structural exploration',
        'Label system designed for 1 to 6 product SKUs with strict visual continuity',
        'Factory-ready pre-press print files with Pantone spot color separations',
        '8K photorealistic 3D packaging renders for digital e-commerce & marketing'
      ]
    },
    identity: {
      name: 'Full Brand Identity & Visual System',
      duration: '6–8 Weeks',
      stages: 'Complete Brand Codex',
      bestFor: 'Companies seeking category leadership, high-value rebrands, or B2B export authority',
      highlights: [
        'Comprehensive brand strategy, competitor audit & price positioning roadmap',
        'Vector logomark architecture, typography licensing & custom icon library',
        'Multi-channel visual guidelines manual (print, digital, social & corporate)',
        'Full sales collateral suite: pitch decks, letterheads, brochures & stationery'
      ]
    },
    industrial: {
      name: 'Technical Publications & Heavy Industry Systems',
      duration: '6–8 Weeks',
      stages: 'Engineering & Catalogs',
      bestFor: 'Heavy vehicle manufacturers, semi-trailer builders, lubricant brands & B2B exporters',
      highlights: [
        'Double-page layflat print catalog design organizing dense technical specs',
        '3D X-ray vehicle cutaways, exploded assembly diagrams & part callouts',
        'Multi-language export editions (Cyrillic, English, European standards)',
        'Interactive digital publication PDFs with embedded QR direct ordering links'
      ]
    }
  };

  const currentStage = stages[activeStage];

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-[#080C14] pt-12 sm:pt-20 pb-32 overflow-x-hidden selection:bg-[#D4FF00] selection:text-[#080C14]">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* ====================================================================
            PAGE HEADER: THE PRODUCTION SYSTEM MASTHEAD
            Distinctive technical blueprint theme with live metadata metrics
            ==================================================================== */}
        <div className="pb-12 sm:pb-16 border-b border-neutral-200">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080C14] text-[#D4FF00] font-mono text-[10px] font-bold tracking-[0.24em] uppercase rounded mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#D4FF00]" />
                <span>COMMERCIAL PACKAGING &amp; BRANDING OPERATING SYSTEM</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-[74px] font-semibold tracking-[-0.035em] text-[#080C14] leading-[1.02]">
                The Production System
              </h1>
              <p className="text-sm sm:text-base text-neutral-600 mt-4 leading-relaxed font-normal max-w-2xl">
                A disciplined 4-stage engineering pipeline translating high-level business goals into shelf-dominating physical packaging and scalable brand equity.
              </p>
            </div>

            {/* Quick Production Metrics Badge Bar */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:w-auto w-full">
              <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-xs">
                <div className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                  TYPICAL CYCLE
                </div>
                <div className="font-serif text-lg sm:text-xl font-bold text-[#080C14] mt-1">
                  6–8 WEEKS
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-xs">
                <div className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                  PRE-PRESS PASS
                </div>
                <div className="font-serif text-lg sm:text-xl font-bold text-[#080C14] mt-1">
                  100% ACCURACY
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-xs">
                <div className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                  COLLABORATION
                </div>
                <div className="font-serif text-lg sm:text-xl font-bold text-[#080C14] mt-1">
                  1:1 DIRECTOR
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================================
            STAGE SELECTOR RIBBON: CHRONOLOGICAL WORKBENCH NAVIGATOR
            ==================================================================== */}
        <div className="my-10 sm:my-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {stages.map((stg, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={stg.num}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                    isActive
                      ? 'bg-[#080C14] text-white border-[#080C14] shadow-xl shadow-black/10 scale-[1.01]'
                      : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50/80 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span
                      className={`font-mono text-xs font-black px-2 py-0.5 rounded-sm ${
                        isActive ? 'bg-[#D4FF00] text-[#080C14]' : 'bg-neutral-100 text-neutral-700'
                      }`}
                    >
                      {stg.num}
                    </span>
                    <span
                      className={`font-mono text-[10px] font-bold tracking-wider ${
                        isActive ? 'text-[#D4FF00]' : 'text-neutral-400'
                      }`}
                    >
                      {stg.duration}
                    </span>
                  </div>

                  <h3
                    className={`font-serif text-sm sm:text-base font-semibold leading-snug truncate w-full ${
                      isActive ? 'text-white' : 'text-[#080C14]'
                    }`}
                  >
                    {stg.title.split('&')[0]}
                  </h3>
                </button>
              );
            })}
          </div>
        </div>

        {/* ====================================================================
            MAIN INTERACTIVE WORKBENCH STAGE:
            Split Architecture — Strategic Rationale on Left, Real Artifact on Right
            ==================================================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.num}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl border border-neutral-200/90 shadow-xl overflow-hidden mb-20 sm:mb-28"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Column: Strategic Rationale & Milestone Deliverables */}
              <div className="lg:col-span-6 p-7 sm:p-10 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-200">
                <div>
                  {/* Stage Code & Tag */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs font-bold text-[#080C14] bg-[#D4FF00] px-2.5 py-1 rounded-sm">
                      {currentStage.num}
                    </span>
                    <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-neutral-500">
                      {currentStage.code}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#080C14] leading-tight mb-3">
                    {currentStage.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-neutral-500 font-mono tracking-wide uppercase mb-6">
                    {currentStage.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal mb-8">
                    {currentStage.description}
                  </p>

                  {/* Concrete Deliverable Bulletpoints */}
                  <div className="space-y-3.5 mb-8">
                    <span className="block font-mono text-[11px] font-bold tracking-[0.2em] text-[#080C14] uppercase">
                      VERIFIED STAGE DELIVERABLES:
                    </span>
                    {currentStage.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-[13px] text-neutral-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#080C14] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Milestone Spec Matrix Box */}
                <div className="bg-[#F8F9FA] rounded-2xl p-5 border border-neutral-200">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                    {currentStage.blueprintSpecs.map((spec, i) => (
                      <div key={i}>
                        <div className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">
                          {spec.label}
                        </div>
                        <div className="font-mono text-xs font-bold text-[#080C14] mt-0.5">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Real Visual Artwork with Blueprint Technical Overlay */}
              <div className="lg:col-span-6 bg-[#080C14] p-6 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden text-white">
                
                {/* Atmospheric Blueprint Grid Overlay */}
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none" 
                  style={{
                    backgroundImage: 'radial-gradient(rgba(212, 255, 0, 0.4) 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }}
                  aria-hidden="true" 
                />

                {/* Top Blueprint Header Bar */}
                <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono mb-6">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                      STUDIO ARTIFACT // {currentStage.badge}
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest">
                    {currentStage.duration}
                  </span>
                </div>

                {/* The Real Studio Artwork Display Frame */}
                <div className="relative z-10 aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-[#03060B] flex items-center justify-center p-4 sm:p-6 shadow-2xl border border-white/10">
                  <img
                    src={currentStage.image}
                    alt={currentStage.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain mx-auto transition-transform duration-700 ease-out hover:scale-105"
                  />
                  
                  {/* Subtle Technical Blueprint Crosshairs */}
                  <div className="absolute top-3 left-3 font-mono text-[9px] text-[#D4FF00]/80 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs border border-white/10">
                    DIELINE: VERIFIED
                  </div>
                  <div className="absolute bottom-3 right-3 font-mono text-[9px] text-neutral-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs border border-white/10">
                    CMYK / SPOT 802C
                  </div>
                </div>

                {/* Bottom Technical Caption */}
                <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                  <span className="text-neutral-400 truncate max-w-sm">
                    {currentStage.imageAlt}
                  </span>
                  <button
                    onClick={onOpenBrief}
                    className="inline-flex items-center gap-2 text-[#D4FF00] font-bold uppercase tracking-wider hover:text-white transition-colors cursor-pointer"
                  >
                    <span>COMMISSION THIS WORKFLOW</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* ====================================================================
            THE 4 RIGOROUS PRODUCTION PILLARS
            Non-generic, authoritative standards that prove real industrial mastery
            ==================================================================== */}
        <div className="mb-24 sm:mb-32">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080C14] text-[#D4FF00] font-mono text-[10px] font-bold tracking-[0.24em] uppercase rounded mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4FF00]" />
              <span>QUALITY GOVERNANCE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#080C14] tracking-tight">
              Four Non-Negotiable Production Standards
            </h2>
            <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
              Why leading brands choose Saeed Jabbari Studio: every visual asset is engineered for physical durability, packaging efficiency, and direct commercial return.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl p-7 border border-neutral-200/90 shadow-sm flex flex-col justify-between hover:border-[#080C14] transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#080C14] text-[#D4FF00] flex items-center justify-center font-bold mb-5 shadow-xs">
                  <ScanEye className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#080C14] mb-2 leading-snug">
                  The 2.5s Shelf Test
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  Visual hierarchy formulated so rushed buyers grasp brand identity and primary product benefits in under 3 seconds on crowded retail displays.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-neutral-100 font-mono text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
                BENEFIT: HIGHER CONVERSION
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-neutral-200/90 shadow-sm flex flex-col justify-between hover:border-[#080C14] transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#080C14] text-[#D4FF00] flex items-center justify-center font-bold mb-5 shadow-xs">
                  <Ruler className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#080C14] mb-2 leading-snug">
                  Zero Color Drift
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  Pantone spot color calibrations ensure seamless chromatic unity across glass bottles, metallic slide tins, paper cartons, and digital displays.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-neutral-100 font-mono text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
                BENEFIT: ABSOLUTE BRAND EQUITY
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-neutral-200/90 shadow-sm flex flex-col justify-between hover:border-[#080C14] transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#080C14] text-[#D4FF00] flex items-center justify-center font-bold mb-5 shadow-xs">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#080C14] mb-2 leading-snug">
                  Prepress Factory Accuracy
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  Every fold, bleed, cutline, and white-plate separation is double-checked for automated industrial packaging and bottling machinery.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-neutral-100 font-mono text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
                BENEFIT: ZERO REPRINT LOSSES
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-neutral-200/90 shadow-sm flex flex-col justify-between hover:border-[#080C14] transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#080C14] text-[#D4FF00] flex items-center justify-center font-bold mb-5 shadow-xs">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#080C14] mb-2 leading-snug">
                  Direct Principal Access
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  No junior designers or intermediary account managers. You collaborate 1-on-1 directly with Creative Director Saeed Jabbari from start to launch.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-neutral-100 font-mono text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
                BENEFIT: EXECUTIVE CERTAINTY
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================================
            INTERACTIVE SCOPE & TIMELINE ESTIMATOR
            Distinctive decision tool allowing clients to preview deliverables
            ==================================================================== */}
        <div className="bg-[#080C14] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle Background Glow */}
          <div 
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#D4FF00]/10 blur-[120px] pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="font-mono text-xs font-bold tracking-[0.24em] text-[#D4FF00] uppercase block mb-3">
                PROJECT TIMELINE ESTIMATOR
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                Align Your Scope &amp; Target Launch Window
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-3 leading-relaxed">
                Select your primary deliverable type to preview the standard production timeline and verified milestone deliverables.
              </p>
            </div>

            {/* Scope Selection Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              <button
                type="button"
                onClick={() => setSelectedScope('packaging')}
                className={`px-5 py-3 rounded-xl font-mono text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  selectedScope === 'packaging'
                    ? 'bg-[#D4FF00] text-[#080C14] shadow-lg shadow-[#D4FF00]/25'
                    : 'bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10'
                }`}
              >
                01. Product Packaging (FMCG / Beauty)
              </button>

              <button
                type="button"
                onClick={() => setSelectedScope('identity')}
                className={`px-5 py-3 rounded-xl font-mono text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  selectedScope === 'identity'
                    ? 'bg-[#D4FF00] text-[#080C14] shadow-lg shadow-[#D4FF00]/25'
                    : 'bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10'
                }`}
              >
                02. Brand Identity &amp; Rebrand
              </button>

              <button
                type="button"
                onClick={() => setSelectedScope('industrial')}
                className={`px-5 py-3 rounded-xl font-mono text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  selectedScope === 'industrial'
                    ? 'bg-[#D4FF00] text-[#080C14] shadow-lg shadow-[#D4FF00]/25'
                    : 'bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10'
                }`}
              >
                03. Industrial Catalogs &amp; 3D Systems
              </button>
            </div>

            {/* Scope Details Display Card */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-white/10">
                <div className="md:col-span-8">
                  <span className="font-mono text-[10px] text-[#D4FF00] uppercase tracking-widest font-bold">
                    SELECTED PACKAGE
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                    {scopeConfigs[selectedScope].name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-2">
                    {scopeConfigs[selectedScope].bestFor}
                  </p>
                </div>

                <div className="md:col-span-4 md:text-right">
                  <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block">
                    PRODUCTION TIMELINE
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#D4FF00] mt-1 block">
                    {scopeConfigs[selectedScope].duration}
                  </span>
                </div>
              </div>

              {/* Scope Checklist Items */}
              <div className="pt-8">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block font-bold mb-4">
                  CORE INCLUDED MILESTONES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {scopeConfigs[selectedScope].highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                      <div className="w-4 h-4 rounded-full bg-[#D4FF00]/20 text-[#D4FF00] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-neutral-400 font-mono">
                  Ready to review exact deliverable schedules for your brand?
                </div>
                <button
                  type="button"
                  onClick={onOpenBrief}
                  className="px-8 py-4 bg-[#D4FF00] hover:bg-[#c2eb00] text-[#080C14] font-bold text-xs tracking-[0.14em] uppercase rounded-xl transition-all shadow-xl shadow-[#D4FF00]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>COMMENCE PROJECT INTAKE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
