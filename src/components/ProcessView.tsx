import React, { useState } from 'react';
import { ShieldCheck, Ruler, Palette, Factory, CheckCircle, ArrowRight } from 'lucide-react';

interface ProcessViewProps {
  onOpenBrief: () => void;
}

export const ProcessView: React.FC<ProcessViewProps> = ({ onOpenBrief }) => {
  const [selectedSubstrate, setSelectedSubstrate] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'Forensic Brand & Shelf Diagnostic',
      subtitle: 'Eliminating commercial vulnerability before creative exploration',
      icon: ShieldCheck,
      details: [
        'Eye-tracking audit across category retail shelves under real ambient store lighting',
        'Competitor positioning matrix assessing chromatic blindspots and silhouette overlap',
        'Physical tear-down of incumbent packaging to identify substrate and glue seam failures',
        'Regulatory and bilingual typography compliance check (EU, FDA, GCC standards)'
      ]
    },
    {
      num: '02',
      title: 'Structural Dieline & CAD Engineering',
      subtitle: 'Factory-calibrated to ±0.15mm mechanical tolerances',
      icon: Ruler,
      details: [
        'CAD dieline drafting with custom compensation for paperboard grain direction',
        'Crease rule and perforation pitch calculation matching automated packing lines',
        'Carton drop-test and 5-tier pallet stacking simulation to prevent crushing',
        'Unboxing choreography: calibrated friction slide and magnetic reveal mechanisms'
      ]
    },
    {
      num: '03',
      title: 'Chromatic Systems & Brand Codex',
      subtitle: 'Pantone spot alchemy engineered for total cross-factory fidelity',
      icon: Palette,
      details: [
        'Master Pantone Matching System (PMS) formula specification for hero colors',
        'Spectrophotometric Delta-E (ΔE < 1.5) tolerance standards in L*a*b* color space',
        'Substrate-specific ink drawdowns on coated, uncoated, kraft, and glass bodies',
        'Complete typographic hierarchy suite for multi-SKU retail packaging systems'
      ]
    },
    {
      num: '04',
      title: 'Factory Pre-Press & Press Check Supervision',
      subtitle: 'Direct principal oversight on the press floor',
      icon: Factory,
      details: [
        'Pre-flight file prep with trapped ink borders and registration mark locks',
        'Direct coordination with printing house technical directors and plate makers',
        'Physical press check sign-offs on wet-ink proofs and foil block temperatures',
        'Batch-to-batch color consistency guarantees across overseas manufacturing plants'
      ]
    }
  ];

  const substrates = [
    {
      name: '350gsm SBS Paperboard',
      usage: 'High-Impact Skincare & Retail Cartons',
      tolerance: '±0.10mm',
      stackStrength: 'Up to 12kg compression',
      finishes: 'Soft-touch matte, spot UV, micro-emboss, foil',
      failureRisk: 'Score cracking if grain direction is perpendicular to fold'
    },
    {
      name: '1800gsm Dutch Greyboard',
      usage: 'Museum Caskets & Ultra-Prestige Rigid Slide Boxes',
      tolerance: '±0.15mm',
      stackStrength: 'Up to 60kg compression',
      finishes: 'Wibalin linen wrap, brass hot stamp, velvet insert',
      failureRisk: 'Corner seam splitting if v-groove depth exceeds 85%'
    },
    {
      name: 'Double-Wall EB Flute Corrugated',
      usage: 'Commercial Automotive Axles & Heavy B2B Spares',
      tolerance: '±0.25mm',
      stackStrength: 'Up to 120kg palletized stacking',
      finishes: 'High-tack flexo overprint, moisture-resistant varnish',
      failureRisk: 'Flute crush if clamp pressure exceeds 4.5 bar during die-cut'
    },
    {
      name: 'Borosilicate Amber Glass Vessel',
      usage: 'Herbal Infusions, Perfumery, & Active Derma Formulas',
      tolerance: '±0.12mm neck thread',
      stackStrength: 'Hermetic zero-breakage inner chamber',
      finishes: 'Frosted acid etch, ceramic screenprint, wax dip seal',
      failureRisk: 'Thermal shock if annealing cycle is under 180 minutes'
    }
  ];

  return (
    <div className="bg-[#f4f5f7] min-h-screen py-16 sm:py-24 text-[#0b0d12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="block font-mono text-[11px] font-bold tracking-[0.24em] text-[#e03e10] uppercase mb-3">
            METHODOLOGY & EXECUTION
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[50px] font-semibold leading-tight text-[#0b0d12] mb-4">
            How We Turn Brand Strategy Into Market-Ready Products
          </h1>
          <p className="text-sm sm:text-[15px] leading-relaxed text-[#525866]">
            Bridging commercial positioning with production-ready execution — designing packaging, catalogs, and visual systems that perform in competitive retail and B2B markets.
          </p>
        </div>

        {/* 4 Methodology Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-xl p-8 border border-[#dfe3ea] shadow-[0_3px_14px_rgba(9,10,13,0.03)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl text-[#FF4D1C] font-semibold">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-md bg-[#f4f5f7] text-[#FF4D1C] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#0b0d12] mb-1.5">
                    {step.title}
                  </h3>
                  <p className="font-mono text-xs text-[#e03e10] font-semibold tracking-wide uppercase mb-6">
                    {step.subtitle}
                  </p>

                  <ul className="space-y-3 pt-4 border-t border-[#eceef2]">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#525866] leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-[#FF4D1C] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Substrate & Tolerance Lab */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#dfe3ea] shadow-lg mb-16">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-[11px] font-bold tracking-[0.24em] text-[#e03e10] uppercase block mb-2">
              MATERIAL & PACKAGING GUIDE
            </span>
            <h2 className="font-serif text-3xl font-semibold text-[#0b0d12]">
              Packaging Materials & Print Formats
            </h2>
            <p className="text-xs sm:text-[13px] text-[#525866] mt-1">
              Select a material below to inspect the finishes and production specifications used across our packaging projects.
            </p>
          </div>

          {/* Substrate Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {substrates.map((sub, idx) => (
              <button
                key={sub.name}
                onClick={() => setSelectedSubstrate(idx)}
                className={`p-3.5 rounded-lg text-left border transition-all cursor-pointer ${
                  selectedSubstrate === idx
                    ? 'bg-[#090a0d] text-white border-[#090a0d] shadow-md'
                    : 'bg-[#f4f5f7] text-[#525866] border-[#dfe3ea] hover:text-[#0b0d12]'
                }`}
              >
                <div className="text-[10px] font-bold uppercase tracking-wider opacity-75">Material 0{idx + 1}</div>
                <div className="text-xs font-semibold mt-1 truncate">{sub.name}</div>
              </button>
            ))}
          </div>

          {/* Selected Substrate Detail Panel */}
          {(() => {
            const current = substrates[selectedSubstrate];
            return (
              <div className="bg-[#f4f5f7] p-6 sm:p-8 rounded-xl border border-[#dfe3ea] grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Primary Application</span>
                    <h4 className="font-serif text-2xl text-[#0b0d12] font-semibold mt-0.5">{current.name}</h4>
                    <p className="text-xs text-[#525866] mt-1">{current.usage}</p>
                  </div>

                  <div className="pt-2">
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Recommended Finishes</span>
                    <p className="text-xs text-[#0b0d12] font-medium mt-1">{current.finishes}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3.5 rounded-lg border border-[#dfe3ea]">
                      <span className="text-[10px] text-neutral-400 font-bold uppercase block">Print Precision</span>
                      <span className="font-mono text-sm font-semibold text-[#0b0d12] mt-1 block">{current.tolerance}</span>
                    </div>

                    <div className="bg-white p-3.5 rounded-lg border border-[#dfe3ea]">
                      <span className="text-[10px] text-neutral-400 font-bold uppercase block">Durability Profile</span>
                      <span className="font-mono text-xs font-semibold text-[#0b0d12] mt-1 block truncate">{current.stackStrength}</span>
                    </div>
                  </div>

                  <div className="bg-[#FF4D1C]/10 p-4 rounded-lg border border-[#FF4D1C]/30">
                    <span className="text-[10px] text-[#e03e10] font-bold uppercase tracking-wider block">Key Production Watchout</span>
                    <p className="text-xs text-[#0b0d12] mt-1">{current.failureRisk}</p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* CTA Strip */}
        <div className="bg-[#090a0d] text-white p-8 sm:p-12 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-2">
              Ready to elevate your product packaging or catalog?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Speak directly with Saeed Jabbari to plan your brand identity, packaging, or commercial catalog.
            </p>
          </div>

          <button
            onClick={onOpenBrief}
            className="px-7 py-3.5 bg-[#FF4D1C] hover:bg-[#ff6438] text-white text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all shrink-0 cursor-pointer"
          >
            START INTAKE BRIEF →
          </button>
        </div>
      </div>
    </div>
  );
};
