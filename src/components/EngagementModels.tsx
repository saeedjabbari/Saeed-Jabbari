import React from 'react';
import { ENGAGEMENT_PLANS } from '../data/content';
import { ArrowRight } from 'lucide-react';

interface EngagementModelsProps {
  onViewPricing: () => void;
  onRequestAudit: () => void;
  onDiscussProject: () => void;
  onInquireRetainer: () => void;
}

export const EngagementModels: React.FC<EngagementModelsProps> = ({
  onViewPricing,
  onRequestAudit,
  onDiscussProject,
  onInquireRetainer
}) => {
  const handleAction = (planId: string) => {
    if (planId === 'brand-shelf-audit') {
      onRequestAudit();
    } else if (planId === 'packaging-architecture') {
      onDiscussProject();
    } else {
      onInquireRetainer();
    }
  };

  return (
    <section id="pricing" className="bg-[#eceef2] text-[#0b0d12] py-24 sm:py-28 border-b border-[#dfe3ea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="block font-mono text-[11px] font-bold tracking-[0.24em] text-[#e03e10] uppercase mb-3">
              ENGAGEMENT MODELS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight text-[#0b0d12] mb-3">
              Practical Ways to Work Together
            </h2>
            <p className="text-sm sm:text-[15px] leading-relaxed text-[#525866] font-normal">
              Clear scopes, transparent timelines, and direct collaboration focused on improving your product presentation and market results.
            </p>
          </div>

          <button
            onClick={onViewPricing}
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.16em] text-[#e03e10] hover:text-[#b8300a] uppercase transition-colors self-start sm:self-auto group cursor-pointer"
          >
            <span>VIEW PRICING & RETAINERS</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
          {ENGAGEMENT_PLANS.map((plan) => {
            const isHighlighted = plan.isPrimary;

            return (
              <div
                key={plan.id}
                className={`bg-white rounded-xl p-8 border ${
                  isHighlighted
                    ? 'border-[#FF4D1C] shadow-[0_12px_36px_rgba(255,77,28,0.14)] ring-1 ring-[#FF4D1C]/40'
                    : 'border-[#dfe3ea] shadow-[0_3px_14px_rgba(9,10,13,0.03)]'
                } flex flex-col justify-between hover:shadow-[0_12px_30px_rgba(9,10,13,0.08)] transition-all`}
              >
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#0b0d12] mb-1.5">
                    {plan.name}
                  </h3>

                  <div className="font-mono text-[10px] font-bold tracking-[0.18em] text-[#e03e10] uppercase mb-5">
                    {plan.badge}
                  </div>

                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#525866] font-normal mb-8">
                    {plan.description}
                  </p>
                </div>

                <div>
                  {/* Action Button */}
                  <button
                    onClick={() => handleAction(plan.id)}
                    className={`w-full py-3.5 px-6 rounded-md text-xs font-bold tracking-[0.14em] uppercase transition-all mb-4 cursor-pointer ${
                      isHighlighted
                        ? 'bg-[#FF4D1C] hover:bg-[#ff6438] active:bg-[#e03e10] text-white shadow-sm'
                        : 'bg-[#090a0d] hover:bg-neutral-800 active:bg-black text-white'
                    }`}
                  >
                    {plan.buttonText}
                  </button>

                  {/* Secondary Link */}
                  <div className="text-center">
                    <button
                      onClick={onViewPricing}
                      className="text-[11px] text-[#687082] hover:text-[#0b0d12] font-medium tracking-wide transition-colors cursor-pointer"
                    >
                      View Scope & Rates →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
