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
    <div className="bg-[#f4f5f7] min-h-screen py-16 sm:py-24 text-[#0b0d12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080C14] text-[#D4FF00] font-mono text-[10px] font-bold tracking-widest uppercase rounded mb-3">
            <span>ENGAGEMENT MODELS & RATES</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[50px] font-semibold leading-tight text-[#0b0d12] mb-4">
            Direct Commercial Engagement
          </h1>
          <p className="text-sm sm:text-[15px] leading-relaxed text-[#525866]">
            Transparent pricing focused on commercial impact. You collaborate directly with Saeed Jabbari on every strategic and visual decision.
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
                    ? 'border-[#D4FF00] shadow-[0_12px_40px_rgba(255,77,28,0.16)] ring-1 ring-[#D4FF00]'
                    : 'border-[#dfe3ea] shadow-[0_3px_14px_rgba(9,10,13,0.03)]'
                } flex flex-col justify-between`}
              >
                <div>
                  <div className="inline-block px-2.5 py-1 bg-[#080C14] text-[#D4FF00] font-mono text-[9px] font-bold tracking-[0.2em] uppercase rounded mb-3">
                    {plan.badge}
                  </div>

                  <h3 className="font-serif text-3xl font-semibold text-[#0b0d12] mb-2">
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-serif text-4xl sm:text-5xl font-semibold text-[#0b0d12]">
                      {plan.price}
                    </span>
                    <span className="text-xs text-neutral-500 font-medium">{plan.cadence}</span>
                  </div>

                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#525866] font-normal mb-8 pb-6 border-b border-[#eceef2]">
                    {plan.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[10px] font-bold tracking-wider uppercase text-neutral-400">
                      Included Deliverables:
                    </div>
                    {plan.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#525866] leading-snug">
                        <div className="w-4 h-4 rounded-full bg-[#080C14] text-[#D4FF00] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] text-neutral-500 mb-4 font-mono">
                    Timeline: <span className="text-[#0b0d12] font-semibold">{plan.timeline}</span>
                  </div>

                  <button
                    onClick={() => {
                      if (plan.id === 'brand-shelf-audit') onRequestAudit();
                      else if (plan.id === 'packaging-architecture') onDiscussProject();
                      else onInquireRetainer();
                    }}
                    className={`w-full py-4 px-6 rounded-md text-xs font-bold tracking-[0.14em] uppercase transition-all cursor-pointer ${
                      isHighlighted
                        ? 'bg-[#D4FF00] hover:bg-[#c2eb00] active:bg-[#D4FF00] text-[#080C14] font-bold shadow-md'
                        : 'bg-[#080c14] hover:bg-neutral-800 text-white'
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
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#dfe3ea] shadow-lg mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-md bg-[#080c14] text-[#D4FF00] flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <div className="inline-block px-2 py-0.5 bg-[#080c14] text-[#D4FF00] font-mono text-[9px] font-bold tracking-[0.2em] uppercase rounded mb-1">
                INSTANT SCOPE ESTIMATOR
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0b0d12]">
                Calculate Your Branding & Packaging Scope
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6 border-t border-[#eceef2]">
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
                      className={`py-2 px-3 rounded-md text-xs font-semibold tracking-wide border transition-all cursor-pointer ${
                        calcSector === s.id
                          ? 'bg-[#080c14] text-white border-[#080c14]'
                          : 'bg-[#f4f5f7] text-neutral-600 border-[#dfe3ea] hover:text-black'
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
                  <span className="font-mono text-sm font-bold text-[#0b0d12] bg-[#f4f5f7] px-3 py-1 rounded border border-[#dfe3ea]">
                    {skuCount} {skuCount === 1 ? 'SKU' : 'SKUs'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={skuCount}
                  onChange={(e) => setSkuCount(parseInt(e.target.value))}
                  className="w-full accent-[#D4FF00] cursor-pointer"
                />
              </div>

              {/* Deliverable Level */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Packaging & Visual Scope Level
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'standard', name: 'Standard Carton / Label', desc: 'Folding carton or canister label system' },
                    { id: 'luxury', name: 'Multi-SKU System', desc: 'Complete packaging line + 3D key visuals' },
                    { id: 'bespoke', name: 'Custom Form + Catalog', desc: '3D product form + full sales catalog' }
                  ].map((sub) => (
                    <div
                      key={sub.id}
                      onClick={() => setSubstrateLevel(sub.id as any)}
                      className={`p-3.5 rounded-lg border text-left cursor-pointer transition-all ${
                        substrateLevel === sub.id
                          ? 'bg-[#D4FF00]/10 border-[#D4FF00] shadow-sm'
                          : 'bg-[#f4f5f7] border-[#dfe3ea] hover:border-neutral-400'
                      }`}
                    >
                      <div className="text-xs font-bold text-[#0b0d12]">{sub.name}</div>
                      <div className="text-[11px] text-[#525866] mt-1">{sub.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Factory Press Check Add-on */}
              <label className="flex items-center gap-3 p-3.5 bg-[#f4f5f7] rounded-lg border border-[#dfe3ea] cursor-pointer">
                <input
                  type="checkbox"
                  checked={includePressCheck}
                  onChange={(e) => setIncludePressCheck(e.target.checked)}
                  className="rounded accent-[#D4FF00] w-4 h-4"
                />
                <div className="text-xs">
                  <span className="font-bold text-[#0b0d12] block">Print Supervision & Pre-Press Verification</span>
                  <span className="text-neutral-500 text-[11px]">Direct file verification ensuring accurate color and print production</span>
                </div>
              </label>
            </div>

            {/* Calculated Estimate Box */}
            <div className="lg:col-span-5 bg-[#080c14] text-white p-8 rounded-xl flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#D4FF00] uppercase block mb-1">
                  ESTIMATED INVESTMENT
                </span>
                <div className="font-serif text-4xl sm:text-5xl font-semibold text-white mb-2">
                  ${total.toLocaleString()}
                </div>
                <div className="text-xs text-neutral-400 mb-6">
                  Estimated Delivery: <span className="text-[#D4FF00] font-semibold">{weeks} Weeks</span> to production-ready files
                </div>

                <div className="space-y-2 text-xs text-neutral-300 border-t border-neutral-800 pt-4 mb-8">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Scope Tier:</span>
                    <span>{substrateLevel.toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">SKU Expansion:</span>
                    <span>{skuCount} Products</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Print Verification:</span>
                    <span>{includePressCheck ? 'Included' : 'Excluded'}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenBrief}
                className="w-full py-4 bg-[#D4FF00] hover:bg-[#c2eb00] text-[#080C14] font-bold text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>REQUEST THIS SCOPE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Retainer Availability Calendar Strip */}
        <div className="bg-[#eceef2] p-6 sm:p-8 rounded-xl border border-[#dfe3ea] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-[#D4FF00]" />
            <div>
              <div className="text-xs font-bold text-[#0b0d12] uppercase tracking-wider">
                Current Studio Availability: Q2 & Q3 2026
              </div>
              <div className="text-xs text-[#525866]">
                Direct collaboration with Saeed Jabbari for new branding, packaging, and catalog projects.
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
