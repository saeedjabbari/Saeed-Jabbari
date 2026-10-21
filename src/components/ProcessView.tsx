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
      usage: 'Luxury Cosmeceuticals & Premium Cartons',
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
    <div className="bg-[#f7f5f0] min-h-screen py-16 sm:py-24 text-[#141518]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="block text-[11px] font-bold tracking-[0.24em] text-[#a07d40] uppercase mb-3">
            METHODOLOGY & RIGOR
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal leading-tight text-[#141518] mb-4">
            The Creative Direction & Engineering Protocol
          </h1>
          <p className="text-sm sm:text-[15px] leading-relaxed text-[#595a5f]">
            Bridging conceptual brand prestige with uncompromising factory floor mechanics. We do not stop at artwork files — we engineer packaging that performs under commercial retail stress.
          </p>
        </div>

        {/* 4 Methodology Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-xl p-8 border border-[#e4ded3] shadow-[0_3px_14px_rgba(0,0,0,0.03)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl text-[#a07d40] font-normal">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#f6f4ee] text-[#a07d40] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-[#141518] mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#8e6c38] font-semibold tracking-wide uppercase mb-6">
                    {step.subtitle}
                  </p>

                  <ul className="space-y-3 pt-4 border-t border-[#f0ede6]">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#595a5f] leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-[#a07d40] shrink-0 mt-0.5" />
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
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#e4ded3] shadow-lg mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-bold tracking-[0.24em] text-[#a07d40] uppercase block mb-2">
              INTERACTIVE SPECIFICATION LAB
            </span>
            <h2 className="font-serif text-3xl font-normal text-[#141518]">
              Substrate Tolerances & Structural Limits
            </h2>
            <p className="text-xs sm:text-[13px] text-[#595a5f] mt-1">
              Select a material to inspect the mechanical tolerances, finishes, and production risks calibrated in our dielines.
            </p>
          </div>

          {/* Substrate Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {substrates.map((sub, idx) => (
              <button
                key={sub.name}
                onClick={() => setSelectedSubstrate(idx)}
                className={`p-3.5 rounded-lg text-left border transition-all ${
                  selectedSubstrate === idx
                    ? 'bg-[#0d0f12] text-white border-[#0d0f12] shadow-md'
                    : 'bg-[#f7f5f0] text-[#595a5f] border-[#e4ded3] hover:text-[#141518]'
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
              <div className="bg-[#f7f5f0] p-6 sm:p-8 rounded-xl border border-[#e4ded3] grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Primary Application</span>
                    <h4 className="font-serif text-2xl text-[#141518] font-normal mt-0.5">{current.name}</h4>
                    <p className="text-xs text-[#595a5f] mt-1">{current.usage}</p>
                  </div>

                  <div className="pt-2">
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Permissible Finishes</span>
                    <p className="text-xs text-[#141518] font-medium mt-1">{current.finishes}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3.5 rounded-lg border border-[#e4ded3]">
                      <span className="text-[10px] text-neutral-400 font-bold uppercase block">CAD Tolerance</span>
                      <span className="font-mono text-sm font-semibold text-[#141518] mt-1 block">{current.tolerance}</span>
                    </div>

                    <div className="bg-white p-3.5 rounded-lg border border-[#e4ded3]">
                      <span className="text-[10px] text-neutral-400 font-bold uppercase block">Compression Strength</span>
                      <span className="font-mono text-xs font-semibold text-[#141518] mt-1 block truncate">{current.stackStrength}</span>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <span className="text-[10px] text-amber-800 font-bold uppercase tracking-wider block">Production Failure Risk (Without Studio Oversight)</span>
                    <p className="text-xs text-amber-900 mt-1">{current.failureRisk}</p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* CTA Strip */}
        <div className="bg-[#090a0d] text-white p-8 sm:p-12 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-2">
              Bring structural certainty to your next production run.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Speak directly with principal director Saeed Jabbari to evaluate your dielines and press requirements.
            </p>
          </div>

          <button
            onClick={onOpenBrief}
            className="px-7 py-3.5 bg-[#cfad76] hover:bg-[#dfbd86] text-[#0d0f12] text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all shrink-0"
          >
            START INTAKE BRIEF →
          </button>
        </div>
      </div>
    </div>
  );
};
