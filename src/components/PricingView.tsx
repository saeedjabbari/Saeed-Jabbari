import React, { useState } from 'react';
import { ENGAGEMENT_PLANS } from '../data/content';
import { Check, ArrowRight, Calculator, Calendar } from 'lucide-react';

interface PricingViewProps {
  onRequestAudit: () => void;
  onDiscussProject: () => void;
  onInquireRetainer: () => void;
  onOpenBrief: () => void;
}

export const PricingView: React.FC<PricingViewProps> = ({
  onRequestAudit,
  onDiscussProject,
  onInquireRetainer,
  onOpenBrief
}) => {
  // Scope Calculator State
  const [calcSector, setCalcSector] = useState<'cosmetics' | 'fmcg' | 'b2b' | 'automotive'>('cosmetics');
  const [skuCount, setSkuCount] = useState<number>(3);
  const [substrateLevel, setSubstrateLevel] = useState<'standard' | 'luxury' | 'bespoke'>('luxury');
  const [includePressCheck, setIncludePressCheck] = useState<boolean>(true);

  // Dynamic cost estimation math
  const calculateEstimate = () => {
    let base = 12000;
    if (substrateLevel === 'luxury') base = 18500;
    if (substrateLevel === 'bespoke') base = 26000;

    const skuMultiplier = (skuCount - 1) * 2200;
    const pressAddon = includePressCheck ? 4000 : 0;
    const total = base + skuMultiplier + pressAddon;

    let weeks = 6;
    if (skuCount > 5) weeks = 8;
    if (substrateLevel === 'bespoke') weeks += 2;

    return { total, weeks };
  };

  const { total, weeks } = calculateEstimate();

  return (
    <div className="bg-[#f7f5f0] min-h-screen py-16 sm:py-24 text-[#141518]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="block text-[11px] font-bold tracking-[0.24em] text-[#a07d40] uppercase mb-3">
            ENGAGEMENT MODELS & RATES
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal leading-tight text-[#141518] mb-4">
            Direct Principal Engagement
          </h1>
          <p className="text-sm sm:text-[15px] leading-relaxed text-[#595a5f]">
            Transparent pricing without agency overhead bloat. You work directly with principal creative director Saeed Jabbari on every strategic decision and press run.
          </p>
        </div>

        {/* 3 Main Engagement Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-24">
          {ENGAGEMENT_PLANS.map((plan) => {
            const isHighlighted = plan.isPrimary;

            return (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl p-8 sm:p-10 border ${
                  isHighlighted
                    ? 'border-[#cfad76] shadow-[0_12px_40px_rgba(207,173,118,0.18)] ring-1 ring-[#cfad76]'
                    : 'border-[#e4ded3] shadow-[0_3px_14px_rgba(0,0,0,0.03)]'
                } flex flex-col justify-between`}
              >
                <div>
                  <div className="text-[10px] font-bold tracking-[0.2em] text-[#8e6c38] uppercase mb-2">
                    {plan.badge}
                  </div>

                  <h3 className="font-serif text-3xl font-normal text-[#141518] mb-2">
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-serif text-4xl sm:text-5xl font-light text-[#141518]">
                      {plan.price}
                    </span>
                    <span className="text-xs text-neutral-500 font-medium">{plan.cadence}</span>
                  </div>

                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#595a5f] font-normal mb-8 pb-6 border-b border-[#f0ede6]">
                    {plan.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[10px] font-bold tracking-wider uppercase text-neutral-400">
                      Included Deliverables:
                    </div>
                    {plan.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#595a5f] leading-snug">
                        <Check className="w-4 h-4 text-[#cfad76] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] text-neutral-500 mb-4 font-mono">
                    Timeline: <span className="text-[#141518] font-semibold">{plan.timeline}</span>
                  </div>

                  <button
                    onClick={() => {
                      if (plan.id === 'brand-shelf-audit') onRequestAudit();
                      else if (plan.id === 'packaging-architecture') onDiscussProject();
                      else onInquireRetainer();
                    }}
                    className={`w-full py-4 px-6 rounded-md text-xs font-bold tracking-[0.14em] uppercase transition-all ${
                      isHighlighted
                        ? 'bg-[#c8a66a] hover:bg-[#d8b880] active:bg-[#ba9657] text-[#0d0f12] shadow-md'
                        : 'bg-[#0d0f12] hover:bg-neutral-800 text-white'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Scope & Cost Calculator */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#e4ded3] shadow-lg mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#f4f1ea] text-[#a07d40] flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-[0.24em] text-[#a07d40] uppercase block">
                INSTANT SCOPE ESTIMATOR
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#141518]">
                Calculate Your Packaging Architecture Scope
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6 border-t border-[#f0ede6]">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Sector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Target Sector
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'cosmetics', label: 'Cosmetics' },
                    { id: 'fmcg', label: 'FMCG & Food' },
                    { id: 'b2b', label: 'B2B Corporate' },
                    { id: 'automotive', label: 'Automotive' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setCalcSector(s.id as any)}
                      className={`py-2 px-3 rounded-md text-xs font-semibold tracking-wide border transition-all ${
                        calcSector === s.id
                          ? 'bg-[#0d0f12] text-white border-[#0d0f12]'
                          : 'bg-[#f7f5f0] text-neutral-600 border-[#e4ded3] hover:text-black'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* SKU Count Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Number of SKUs in Initial Family
                  </label>
                  <span className="font-mono text-sm font-bold text-[#141518] bg-[#f7f5f0] px-3 py-1 rounded border border-[#e4ded3]">
                    {skuCount} {skuCount === 1 ? 'SKU' : 'SKUs'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={skuCount}
                  onChange={(e) => setSkuCount(parseInt(e.target.value))}
                  className="w-full accent-[#cfad76] cursor-pointer"
                />
              </div>

              {/* Substrate Level */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Structural Packaging Architecture Level
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'standard', name: 'Standard Carton', desc: 'Folding boxboard with tuck closure' },
                    { id: 'luxury', name: 'Luxury Rigid Box', desc: 'Friction slide or magnetic presentation box' },
                    { id: 'bespoke', name: 'Custom Vessel + Casing', desc: 'Glass/metal mold design + secondary box' }
                  ].map((sub) => (
                    <div
                      key={sub.id}
                      onClick={() => setSubstrateLevel(sub.id as any)}
                      className={`p-3.5 rounded-lg border text-left cursor-pointer transition-all ${
                        substrateLevel === sub.id
                          ? 'bg-[#cfad76]/15 border-[#cfad76] shadow-sm'
                          : 'bg-[#f7f5f0] border-[#e4ded3] hover:border-neutral-400'
                      }`}
                    >
                      <div className="text-xs font-bold text-[#141518]">{sub.name}</div>
                      <div className="text-[11px] text-[#595a5f] mt-1">{sub.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Factory Press Check Add-on */}
              <label className="flex items-center gap-3 p-3.5 bg-[#f7f5f0] rounded-lg border border-[#e4ded3] cursor-pointer">
                <input
                  type="checkbox"
                  checked={includePressCheck}
                  onChange={(e) => setIncludePressCheck(e.target.checked)}
                  className="rounded accent-[#cfad76] w-4 h-4"
                />
                <div className="text-xs">
                  <span className="font-bold text-[#141518] block">On-site Factory Press Check & Wet-Proof Sign-off</span>
                  <span className="text-neutral-500 text-[11px]">Direct press supervision ensuring zero color shift or foil misalignment</span>
                </div>
              </label>
            </div>

            {/* Calculated Estimate Box */}
            <div className="lg:col-span-5 bg-[#090a0d] text-white p-8 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#cfad76] uppercase block mb-1">
                  ESTIMATED INVESTMENT
                </span>
                <div className="font-serif text-4xl sm:text-5xl font-light text-white mb-2">
                  ${total.toLocaleString()}
                </div>
                <div className="text-xs text-neutral-400 mb-6">
                  Estimated Delivery: <span className="text-[#cfad76] font-semibold">{weeks} Weeks</span> to production-ready factory files
                </div>

                <div className="space-y-2 text-xs text-neutral-300 border-t border-neutral-800 pt-4 mb-8">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Core Architecture:</span>
                    <span>{substrateLevel.toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">SKU Expansion:</span>
                    <span>{skuCount} Products</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Press Supervision:</span>
                    <span>{includePressCheck ? 'Included' : 'Excluded'}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenBrief}
                className="w-full py-4 bg-[#cfad76] hover:bg-[#dfbd86] text-[#0d0f12] text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all text-center flex items-center justify-center gap-2"
              >
                <span>COMMISSION THIS ESTIMATE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Retainer Availability Calendar Strip */}
        <div className="bg-[#f0ede6] p-6 sm:p-8 rounded-xl border border-[#e4ded3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-[#a07d40]" />
            <div>
              <div className="text-xs font-bold text-[#141518] uppercase tracking-wider">
                Current Studio Capacity: Q2 & Q3 2026
              </div>
              <div className="text-xs text-[#595a5f]">
                To maintain uncompromised principal attention, only 2 new brand architectures are onboarded each quarter.
              </div>
            </div>
          </div>

          <button
            onClick={onOpenBrief}
            className="px-6 py-2.5 bg-[#0d0f12] hover:bg-neutral-800 text-white text-xs font-bold tracking-wider uppercase rounded-md transition-colors shrink-0"
          >
            RESERVE CALENDAR SLOT →
          </button>
        </div>
      </div>
    </div>
  );
};
