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
    <section id="pricing" className="bg-[#f7f5f0] text-[#141518] py-24 sm:py-28 border-b border-[#e5e1d7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="block text-[11px] font-bold tracking-[0.24em] text-[#a07d40] uppercase mb-3">
              ENGAGEMENT MODELS
            </span>
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-tight text-[#141518] mb-3"
            >
              Ways to Work Together
            </h2>
            <p className="text-sm sm:text-[15px] leading-relaxed text-[#595a5f] font-normal">
              Transparent, high-touch creative direction with direct principal access on every engagement.
            </p>
          </div>

          <button
            onClick={onViewPricing}
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.16em] text-[#9b7336] hover:text-[#7d5c28] uppercase transition-colors self-start sm:self-auto group"
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
                    ? 'border-[#cfad76] shadow-[0_8px_30px_rgba(207,173,118,0.15)] ring-1 ring-[#cfad76]/40'
                    : 'border-[#e4ded3] shadow-[0_3px_14px_rgba(0,0,0,0.03)]'
                } flex flex-col justify-between hover:shadow-[0_10px_28px_rgba(0,0,0,0.07)] transition-all`}
              >
                <div>
                  <h3
                    style={{ fontFamily: 'Georgia, serif' }}
                    className="font-serif text-2xl font-normal text-[#141518] mb-1.5"
                  >
                    {plan.name}
                  </h3>

                  <div className="text-[10px] font-bold tracking-[0.18em] text-[#8e6c38] uppercase mb-5">
                    {plan.badge}
                  </div>

                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#595a5f] font-normal mb-8">
                    {plan.description}
                  </p>
                </div>

                <div>
                  {/* Action Button */}
                  <button
                    onClick={() => handleAction(plan.id)}
                    className={`w-full py-3.5 px-6 rounded-md text-xs font-bold tracking-[0.14em] uppercase transition-all mb-4 ${
                      isHighlighted
                        ? 'bg-[#c8a66a] hover:bg-[#d8b880] active:bg-[#ba9657] text-[#0d0f12] shadow-sm'
                        : 'bg-[#0d0f12] hover:bg-neutral-800 active:bg-black text-white'
                    }`}
                  >
                    {plan.buttonText}
                  </button>

                  {/* Secondary Link */}
                  <div className="text-center">
                    <button
                      onClick={onViewPricing}
                      className="text-[11px] text-[#7d7a74] hover:text-[#141518] font-medium tracking-wide transition-colors"
                    >
                      View Retainer & Rates →
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
