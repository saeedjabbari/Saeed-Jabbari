import React, { useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck, Calendar, Send } from 'lucide-react';
import { BriefSubmission } from '../types';

interface IntakeBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IntakeBriefModal: React.FC<IntakeBriefModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<BriefSubmission>({
    fullName: '',
    companyName: '',
    email: '',
    sector: 'cosmetics',
    projectType: ['Product Packaging Design'],
    skuCount: '3–6 SKUs',
    primarySubstrate: 'Rigid Box + Glass Vessel',
    estimatedTimeline: 'Q3 2026',
    budgetTier: '$25,000 – $50,000',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleProjectType = (type: string) => {
    setFormData(prev => ({
      ...prev,
      projectType: prev.projectType.includes(type)
        ? prev.projectType.filter(t => t !== type)
        : [...prev.projectType, type]
    }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 2) {
      setCurrentStep(2);
    } else {
      setSubmitted(true);
    }
  };

  const resetAndClose = () => {
    setCurrentStep(1);
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className="bg-[#0f1115] text-[#f7f4ee] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-neutral-800 relative my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="intake-brief-title"
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#cfad76] text-[#0d0f12] flex items-center justify-center font-bold text-sm">
              SJ
            </div>
            <div>
              <h3 id="intake-brief-title" className="font-serif text-2xl font-normal text-white">
                Client Intake Brief
              </h3>
              <p className="text-[11px] text-neutral-400">
                Direct commission inquiry with Principal Creative Director Saeed Jabbari
              </p>
            </div>
          </div>

          <button
            onClick={resetAndClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#cfad76]"
            aria-label="Close Brief Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleNext} className="space-y-6">
              {/* Step indicator */}
              <div className="flex items-center gap-2 pb-2">
                <span className={`text-xs font-bold uppercase tracking-wider ${currentStep === 1 ? 'text-[#cfad76]' : 'text-neutral-500'}`}>
                  01. Scope & Sector
                </span>
                <span className="text-neutral-600">/</span>
                <span className={`text-xs font-bold uppercase tracking-wider ${currentStep === 2 ? 'text-[#cfad76]' : 'text-neutral-500'}`}>
                  02. Production & Budget
                </span>
              </div>

              {currentStep === 1 ? (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Elena Rostova"
                        className="w-full bg-[#181b22] border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#cfad76]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Direct Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@company.com"
                        className="w-full bg-[#181b22] border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#cfad76]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Lumina Botanicals AG"
                      className="w-full bg-[#181b22] border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#cfad76]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Core Sector Expertise
                    </label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full bg-[#181b22] border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#cfad76]"
                    >
                      <option value="cosmetics">Cosmetics & Skincare (Clinical Derma, Fragrance, Organic)</option>
                      <option value="fmcg">FMCG & Food (Beverage, Confectionery, Fast Retail)</option>
                      <option value="b2b">B2B & Corporate (Export Systems, Technical Catalogs)</option>
                      <option value="automotive">Automotive & Heavy Industry (Commercial Spares, OEM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Required Services (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        'Brand Identity & Logo Design',
                        'Product Packaging Design',
                        'Catalogs, Brochures & Print',
                        'Advertising Campaigns',
                        'Fractional Creative Direction Retainer'
                      ].map((service) => {
                        const isSelected = formData.projectType.includes(service);
                        return (
                          <div
                            key={service}
                            onClick={() => toggleProjectType(service)}
                            className={`p-3 rounded-lg border text-xs cursor-pointer transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-[#cfad76]/10 border-[#cfad76] text-white font-medium'
                                : 'bg-[#181b22] border-neutral-800 text-neutral-400 hover:border-neutral-700'
                            }`}
                          >
                            <span>{service}</span>
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center ${
                                isSelected ? 'bg-[#cfad76] border-[#cfad76] text-black' : 'border-neutral-600'
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3 text-black" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#cfad76] hover:bg-[#dfbd86] text-[#0d0f12] text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all flex items-center justify-center gap-2"
                    >
                      <span>CONTINUE TO PRODUCTION DETAILS</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Target SKU Count
                      </label>
                      <select
                        value={formData.skuCount}
                        onChange={(e) => setFormData({ ...formData, skuCount: e.target.value })}
                        className="w-full bg-[#181b22] border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#cfad76]"
                      >
                        <option value="1–2 SKUs">1–2 Hero SKUs</option>
                        <option value="3–6 SKUs">3–6 Core SKU Family</option>
                        <option value="7–15 SKUs">7–15 Multi-Format Line</option>
                        <option value="15+ SKUs">15+ Comprehensive Catalog</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Budget Allocation
                      </label>
                      <select
                        value={formData.budgetTier}
                        onChange={(e) => setFormData({ ...formData, budgetTier: e.target.value })}
                        className="w-full bg-[#181b22] border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#cfad76]"
                      >
                        <option value="$12,000 – $20,000">$12,000 – $20,000 (Focused Scope)</option>
                        <option value="$25,000 – $50,000">$25,000 – $50,000 (Complete Packaging Architecture)</option>
                        <option value="$50,000 – $100,000+">$50,000 – $100,000+ (Multi-Region Rollout & Retainer)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Primary Substrate & Vessel Intention
                    </label>
                    <input
                      type="text"
                      value={formData.primarySubstrate}
                      onChange={(e) => setFormData({ ...formData, primarySubstrate: e.target.value })}
                      placeholder="e.g. Frosted Glass Bottle + 350gsm Rigid Box with Emboss"
                      className="w-full bg-[#181b22] border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#cfad76]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Target Launch Window
                    </label>
                    <select
                      value={formData.estimatedTimeline}
                      onChange={(e) => setFormData({ ...formData, estimatedTimeline: e.target.value })}
                      className="w-full bg-[#181b22] border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#cfad76]"
                    >
                      <option value="Immediate (Next 4 weeks)">Immediate (Rapid Diagnostic / Emergency Press)</option>
                      <option value="Q2 2026">Q2 2026 Engagement Window</option>
                      <option value="Q3 2026">Q3 2026 Launch Window</option>
                      <option value="Q4 2026 / 2027">Q4 2026 or 2027 Strategic Planning</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Project Notes / Commercial Objectives
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Share any specific competitor threats, retail requirements, or factory constraints..."
                      className="w-full bg-[#181b22] border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#cfad76]"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-5 py-3 border border-neutral-700 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white rounded-md transition-colors"
                    >
                      BACK
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-[#cfad76] hover:bg-[#dfbd86] text-[#0d0f12] text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>SUBMIT CONFIDENTIAL INTAKE BRIEF</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#cfad76]/20 border border-[#cfad76] text-[#cfad76] rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>

              <span className="text-[11px] font-bold tracking-[0.24em] text-[#cfad76] uppercase block">
                BRIEF LOGGED SUCCESSFULLY
              </span>

              <h4 className="font-serif text-3xl font-normal text-white">
                Welcome to Saeed Jabbari Studio
              </h4>

              <div className="bg-[#181b22] p-5 rounded-xl border border-neutral-800 text-left max-w-lg mx-auto text-xs space-y-2 text-neutral-300">
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Client / Brand:</span>
                  <span className="font-semibold text-white">{formData.companyName} ({formData.fullName})</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Sector Focus:</span>
                  <span className="capitalize text-white">{formData.sector}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Selected Scope:</span>
                  <span className="text-white">{formData.skuCount} • {formData.budgetTier}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Target Window:</span>
                  <span className="text-[#cfad76] font-semibold">{formData.estimatedTimeline}</span>
                </div>
              </div>

              <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed pt-2">
                A formal project proposal dossier and scheduling link for direct principal review have been sent to <span className="text-white font-medium">{formData.email}</span>.
              </p>

              <div className="pt-6">
                <button
                  onClick={resetAndClose}
                  className="px-8 py-3 bg-[#cfad76] text-[#0d0f12] text-xs font-bold tracking-wider uppercase rounded-md hover:bg-[#dfbd86] transition-colors"
                >
                  RETURN TO STUDIO
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
