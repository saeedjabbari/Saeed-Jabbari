import React, { useState } from 'react';
import { X, Check, ArrowRight, Send } from 'lucide-react';
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
    primarySubstrate: 'Retail Carton + Bottle / Tube System',
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
        className="bg-[#090a0d] text-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#222631] relative my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="intake-brief-title"
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-[#222631] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-[#FF4D1C] text-white flex items-center justify-center font-bold text-sm">
              SJ
            </div>
            <div>
              <h3 id="intake-brief-title" className="font-serif text-2xl font-bold text-white">
                Start a Branding & Packaging Project
              </h3>
              <p className="text-[11px] text-[#949BA8]">
                Direct commercial inquiry with Principal Creative Director Saeed Jabbari
              </p>
            </div>
          </div>

          <button
            onClick={resetAndClose}
            className="p-2 text-[#949BA8] hover:text-white rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF4D1C]"
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
                <span className={`text-xs font-bold uppercase tracking-wider ${currentStep === 1 ? 'text-[#FF4D1C]' : 'text-neutral-500'}`}>
                  01. Business & Brand Scope
                </span>
                <span className="text-neutral-600">/</span>
                <span className={`text-xs font-bold uppercase tracking-wider ${currentStep === 2 ? 'text-[#FF4D1C]' : 'text-neutral-500'}`}>
                  02. Deliverables & Timeline
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
                        className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF4D1C]"
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
                        className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF4D1C]"
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
                      placeholder="e.g. NUVE Cosmetics or RST Industrial"
                      className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF4D1C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Core Industry Sector
                    </label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF4D1C]"
                    >
                      <option value="cosmetics">Cosmetics & Skincare (Derma, Personal Care, Beauty)</option>
                      <option value="fmcg">FMCG & Food (Beverage, Confectionery, High-Velocity Retail)</option>
                      <option value="b2b">B2B & Corporate (Export Systems, Technical Catalogs)</option>
                      <option value="automotive">Automotive & Heavy Industry (Commercial Spares, Lubricants, OEM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Required Services (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        'Brand Identity & Logo System',
                        'Product Packaging Design',
                        'B2B Catalogs, Brochures & Print',
                        'Commercial Advertising Campaigns',
                        'Ongoing Creative Direction Retainer'
                      ].map((service) => {
                        const isSelected = formData.projectType.includes(service);
                        return (
                          <div
                            key={service}
                            onClick={() => toggleProjectType(service)}
                            className={`p-3 rounded-lg border text-xs cursor-pointer transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-[#FF4D1C]/12 border-[#FF4D1C] text-white font-medium'
                                : 'bg-[#12151C] border-[#222631] text-[#949BA8] hover:border-neutral-700'
                            }`}
                          >
                            <span>{service}</span>
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center ${
                                isSelected ? 'bg-[#FF4D1C] border-[#FF4D1C] text-white' : 'border-neutral-600'
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3 text-white" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#FF4D1C] hover:bg-[#FF6438] text-white text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FF4D1C]/20"
                    >
                      <span>CONTINUE TO PROJECT DETAILS</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Target SKU / Deliverable Count
                      </label>
                      <select
                        value={formData.skuCount}
                        onChange={(e) => setFormData({ ...formData, skuCount: e.target.value })}
                        className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF4D1C]"
                      >
                        <option value="1–2 SKUs">1–2 Hero Products / Brand Identity</option>
                        <option value="3–6 SKUs">3–6 Core Product Line</option>
                        <option value="7–15 SKUs">7–15 Multi-Format Product Family</option>
                        <option value="15+ SKUs">15+ Full Product Portfolio & Catalog</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Estimated Investment Range
                      </label>
                      <select
                        value={formData.budgetTier}
                        onChange={(e) => setFormData({ ...formData, budgetTier: e.target.value })}
                        className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF4D1C]"
                      >
                        <option value="$12,000 – $20,000">$12,000 – $20,000 (Focused Scope)</option>
                        <option value="$25,000 – $50,000">$25,000 – $50,000 (Complete Brand & Packaging System)</option>
                        <option value="$50,000 – $100,000+">$50,000 – $100,000+ (Multi-Market Rollout & Retainer)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Packaging Format or Deliverable Details
                    </label>
                    <input
                      type="text"
                      value={formData.primarySubstrate}
                      onChange={(e) => setFormData({ ...formData, primarySubstrate: e.target.value })}
                      placeholder="e.g. Aluminum Beverage Can, Folding Carton, or B2B Export Catalog"
                      className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF4D1C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Target Launch Window
                    </label>
                    <select
                      value={formData.estimatedTimeline}
                      onChange={(e) => setFormData({ ...formData, estimatedTimeline: e.target.value })}
                      className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF4D1C]"
                    >
                      <option value="Immediate (Next 4 weeks)">Immediate (Fast-Track Commercial Launch)</option>
                      <option value="Q2 2026">Q2 2026 Engagement Window</option>
                      <option value="Q3 2026">Q3 2026 Launch Window</option>
                      <option value="Q4 2026 / 2027">Q4 2026 or 2027 Strategic Planning</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Commercial Goals & Sales Objectives
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Tell us about your target market, retail channels, competitors, or sales goals..."
                      className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF4D1C]"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-5 py-3 border border-[#272B36] text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white rounded-md transition-colors"
                    >
                      BACK
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-[#FF4D1C] hover:bg-[#FF6438] text-white text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FF4D1C]/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>SUBMIT PROJECT BRIEF</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#FF4D1C]/15 border border-[#FF4D1C] text-[#FF4D1C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>

              <span className="text-[11px] font-bold tracking-[0.24em] text-[#FF4D1C] uppercase block">
                BRIEF LOGGED SUCCESSFULLY
              </span>

              <h4 className="font-serif text-3xl font-bold text-white">
                Welcome to Saeed Jabbari Studio
              </h4>

              <div className="bg-[#12151C] p-5 rounded-xl border border-[#222631] text-left max-w-lg mx-auto text-xs space-y-2 text-neutral-300">
                <div className="flex justify-between border-b border-[#222631] pb-2">
                  <span className="text-neutral-500">Client / Brand:</span>
                  <span className="font-semibold text-white">{formData.companyName} ({formData.fullName})</span>
                </div>
                <div className="flex justify-between border-b border-[#222631] pb-2">
                  <span className="text-neutral-500">Sector Focus:</span>
                  <span className="capitalize text-white">{formData.sector}</span>
                </div>
                <div className="flex justify-between border-b border-[#222631] pb-2">
                  <span className="text-neutral-500">Selected Scope:</span>
                  <span className="text-white">{formData.skuCount} • {formData.budgetTier}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Target Window:</span>
                  <span className="text-[#FF4D1C] font-semibold">{formData.estimatedTimeline}</span>
                </div>
              </div>

              <p className="text-xs text-[#949BA8] max-w-md mx-auto leading-relaxed pt-2">
                A commercial project proposal and scheduling link for direct review have been sent to <span className="text-white font-medium">{formData.email}</span>.
              </p>

              <div className="pt-6">
                <button
                  onClick={resetAndClose}
                  className="px-8 py-3 bg-[#FF4D1C] text-white text-xs font-bold tracking-wider uppercase rounded-md hover:bg-[#FF6438] transition-colors"
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
