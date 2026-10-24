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
        className="bg-[#080c14] text-white rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl border border-[#222631] relative my-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="intake-brief-title"
      >
        {/* Modal Header */}
        <div className="p-3 sm:p-5 border-b border-[#222631] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-md bg-[#D4FF00] text-[#080C14] font-bold flex items-center justify-center font-bold text-xs shrink-0">
              SJ
            </div>
            <div>
              <h3 id="intake-brief-title" className="font-serif text-base sm:text-xl font-bold text-white leading-tight">
                Start a Project
              </h3>
              <p className="text-[10px] sm:text-[11px] text-[#949BA8] line-clamp-1">
                Direct commercial inquiry with Saeed Jabbari Studio
              </p>
            </div>
          </div>

          <button
            onClick={resetAndClose}
            className="p-1.5 text-[#949BA8] hover:text-white rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4FF00]"
            aria-label="Close Brief Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body — Ultra-compact zero-scroll mobile layout */}
        <div className="p-3 sm:p-5 overflow-y-auto flex-1">
          {!submitted ? (
            <form onSubmit={handleNext} className="space-y-3 sm:space-y-4">
              {/* Step indicator */}
              <div className="flex items-center gap-2 pb-1">
                <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider ${currentStep === 1 ? 'text-[#D4FF00]' : 'text-neutral-500'}`}>
                  01. Scope &amp; Info
                </span>
                <span className="text-neutral-600">/</span>
                <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider ${currentStep === 2 ? 'text-[#D4FF00]' : 'text-neutral-500'}`}>
                  02. Timeline &amp; Budget
                </span>
              </div>

              {currentStep === 1 ? (
                <div className="space-y-2.5 sm:space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Elena Rostova"
                        className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-3 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4FF00]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                        Direct Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@company.com"
                        className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-3 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4FF00]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                        Company / Brand
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. NUVE Cosmetics"
                        className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-3 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4FF00]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                        Industry Sector
                      </label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4FF00]"
                      >
                        <option value="cosmetics">Cosmetics &amp; Skincare</option>
                        <option value="fmcg">FMCG &amp; Food / Beverage</option>
                        <option value="b2b">B2B &amp; Corporate Export</option>
                        <option value="automotive">Automotive &amp; Heavy Industry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Required Services (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                      {[
                        'Product Packaging Design',
                        'Brand Identity & Logo',
                        'B2B Catalogs & Print',
                        'Campaigns & 3D Visuals'
                      ].map((service) => {
                        const isSelected = formData.projectType.includes(service);
                        return (
                          <div
                            key={service}
                            onClick={() => toggleProjectType(service)}
                            className={`p-2 sm:p-2.5 rounded-lg border text-[11px] sm:text-xs cursor-pointer transition-all flex items-center justify-between gap-1.5 ${
                              isSelected
                                ? 'bg-[#D4FF00]/12 border-[#D4FF00] text-white font-medium'
                                : 'bg-[#12151C] border-[#222631] text-[#949BA8] hover:border-neutral-700'
                            }`}
                          >
                            <span className="truncate">{service}</span>
                            <div
                              className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${
                                isSelected ? 'bg-[#D4FF00] border-[#D4FF00] text-[#080C14]' : 'border-neutral-600'
                              }`}
                            >
                              {isSelected && <Check className="w-2.5 h-2.5 text-[#080C14]" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full py-2.5 sm:py-3 bg-[#D4FF00] hover:bg-[#c2eb00] text-[#080C14] font-bold text-xs tracking-[0.14em] uppercase rounded-md transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#D4FF00]/20 cursor-pointer"
                    >
                      <span>CONTINUE TO DETAILS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2.5 sm:space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                        SKU / Deliverable Count
                      </label>
                      <select
                        value={formData.skuCount}
                        onChange={(e) => setFormData({ ...formData, skuCount: e.target.value })}
                        className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4FF00]"
                      >
                        <option value="1–2 SKUs">1–2 Hero Products</option>
                        <option value="3–6 SKUs">3–6 Core Product Line</option>
                        <option value="7–15 SKUs">7–15 Product Family</option>
                        <option value="15+ SKUs">15+ Full Catalog</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                        Estimated Investment
                      </label>
                      <select
                        value={formData.budgetTier}
                        onChange={(e) => setFormData({ ...formData, budgetTier: e.target.value })}
                        className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4FF00]"
                      >
                        <option value="$12,000 – $20,000">$12,000 – $20,000 (Focused)</option>
                        <option value="$25,000 – $50,000">$25,000 – $50,000 (Complete System)</option>
                        <option value="$50,000 – $100,000+">$50,000 – $100,000+ (Multi-Market)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                        Packaging / Substrate Format
                      </label>
                      <input
                        type="text"
                        value={formData.primarySubstrate}
                        onChange={(e) => setFormData({ ...formData, primarySubstrate: e.target.value })}
                        placeholder="e.g. Glass Bottle, Can, or Print"
                        className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-3 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4FF00]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                        Target Launch Window
                      </label>
                      <select
                        value={formData.estimatedTimeline}
                        onChange={(e) => setFormData({ ...formData, estimatedTimeline: e.target.value })}
                        className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4FF00]"
                      >
                        <option value="Immediate (Next 4 weeks)">Immediate (Fast-Track Launch)</option>
                        <option value="Q2 2026">Q2 2026 Window</option>
                        <option value="Q3 2026">Q3 2026 Window</option>
                        <option value="Q4 2026 / 2027">Q4 2026 / 2027 Planning</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                      Project Notes &amp; Sales Goals (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Brief details about your target market, competitors, or timeline..."
                      className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-3 py-1.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4FF00] resize-none"
                    />
                  </div>

                  <div className="flex gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-4 py-2.5 border border-[#272B36] text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white rounded-md transition-colors cursor-pointer"
                    >
                      BACK
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 bg-[#D4FF00] hover:bg-[#c2eb00] text-[#080C14] font-bold text-xs tracking-[0.14em] uppercase rounded-md transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#D4FF00]/20 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>SUBMIT BRIEF</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#D4FF00]/15 border border-[#D4FF00] text-[#D4FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>

              <span className="text-[11px] font-bold tracking-[0.24em] text-[#D4FF00] uppercase block">
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
                  <span className="text-[#D4FF00] font-semibold">{formData.estimatedTimeline}</span>
                </div>
              </div>

              <p className="text-xs text-[#949BA8] max-w-md mx-auto leading-relaxed pt-2">
                A commercial project proposal and scheduling link for direct review have been sent to <span className="text-white font-medium">{formData.email}</span>.
              </p>

              <div className="pt-6">
                <button
                  onClick={resetAndClose}
                  className="px-8 py-3 bg-[#D4FF00] text-[#080C14] font-bold text-xs font-bold tracking-wider uppercase rounded-md hover:bg-[#c2eb00] transition-colors"
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
