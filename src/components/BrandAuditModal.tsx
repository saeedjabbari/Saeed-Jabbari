import React, { useState } from 'react';
import { X, CheckCircle, ShieldAlert, ArrowRight } from 'lucide-react';

interface BrandAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBrief: () => void;
}

export const BrandAuditModal: React.FC<BrandAuditModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [sector, setSector] = useState('cosmetics');
  const [brandName, setBrandName] = useState('');
  const [vulnerabilities, setVulnerabilities] = useState<string[]>([]);
  const [skuCount, setSkuCount] = useState('3-8 SKUs');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const vulnerabilityOptions = [
    { id: 'shelf-blend', label: 'Packaging blends into competitor shelf clutter & gets overlooked' },
    { id: 'low-conversion', label: 'Low click-through & weak visual impact on digital / B2B channels' },
    { id: 'unclear-value', label: 'Customers do not immediately understand product benefits at a glance' },
    { id: 'color-drift', label: 'Brand colors and visual identity look inconsistent across products' },
    { id: 'high-cogs', label: 'Packaging production cost is too high relative to sales margin' },
    { id: 'export-fail', label: 'Lacks strong international positioning for export & distributor trust' }
  ];

  const toggleVulnerability = (id: string) => {
    setVulnerabilities(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleGenerateScorecard = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className="bg-[#080c14] text-white rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl border border-[#222631] relative my-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-3 sm:p-5 border-b border-[#222631] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-md bg-[#D4FF00] text-[#080C14] font-bold flex items-center justify-center font-bold text-xs shrink-0">
              SJ
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-xl font-bold text-white leading-tight">
                1:1 Brand Visibility Audit
              </h3>
              <p className="text-[10px] sm:text-[11px] text-[#949BA8] line-clamp-1">
                Diagnostic identifying why products blend in &amp; how to increase shelf sales
              </p>
            </div>
          </div>

          <button
            onClick={resetAndClose}
            className="p-1.5 text-[#949BA8] hover:text-white rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4FF00]"
            aria-label="Close Audit Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body — Ultra-ergonomic compact layout requiring ZERO scrolling on mobile */}
        <div className="p-3 sm:p-5 overflow-y-auto flex-1">
          {step === 1 && (
            <form onSubmit={handleGenerateScorecard} className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    Brand / Company
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. NUVE or RST"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-3 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4FF00]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    Industry Sector
                  </label>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
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
                <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Active SKU / Product Count
                </label>
                <select
                  value={skuCount}
                  onChange={(e) => setSkuCount(e.target.value)}
                  className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4FF00]"
                >
                  <option value="1-2 SKUs">1–2 Hero Products (New Launch)</option>
                  <option value="3-8 SKUs">3–8 Core Products (Growth)</option>
                  <option value="9-25 SKUs">9–25 Multi-SKU Portfolio</option>
                  <option value="25+ SKUs">25+ Enterprise Catalog</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Primary Commercial Bottlenecks (Select applicable)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                  {[
                    { id: 'shelf-blend', label: 'Packaging blends into competitor shelf clutter' },
                    { id: 'low-conversion', label: 'Weak visual impact & low conversion' },
                    { id: 'unclear-value', label: 'Customers miss key benefits at a glance' },
                    { id: 'color-drift', label: 'Colors & identity look inconsistent across SKUs' }
                  ].map((opt) => {
                    const isChecked = vulnerabilities.includes(opt.id);
                    return (
                      <div
                        key={opt.id}
                        onClick={() => toggleVulnerability(opt.id)}
                        className={`p-2 sm:p-2.5 rounded-lg border text-[11px] sm:text-xs cursor-pointer transition-all flex items-center justify-between gap-2 ${
                          isChecked
                            ? 'bg-[#D4FF00]/12 border-[#D4FF00] text-white font-medium'
                            : 'bg-[#12151C] border-[#222631] text-[#949BA8] hover:border-neutral-700'
                        }`}
                      >
                        <span className="truncate">{opt.label}</span>
                        <div
                          className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${
                            isChecked ? 'bg-[#D4FF00] border-[#D4FF00] text-[#080C14]' : 'border-neutral-600'
                          }`}
                        >
                          {isChecked && <CheckCircle className="w-2.5 h-2.5 text-[#080C14]" />}
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
                  <span>RUN VISIBILITY SCORECARD</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}

          {step === 2 && !submitted && (
            <div className="space-y-3 sm:space-y-4">
              {/* Compact Preliminary Diagnosis Report */}
              <div className="bg-[#12151C] p-3 sm:p-4 rounded-xl border border-[#222631] space-y-3">
                <div className="flex items-center justify-between border-b border-[#222631] pb-2">
                  <div>
                    <span className="text-[9px] text-[#949BA8] uppercase tracking-widest font-bold">
                      DIAGNOSTIC TARGET
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl text-white font-bold leading-tight">
                      {brandName || 'Target Brand'}
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-[#D4FF00] uppercase tracking-widest font-bold block">
                      STATUS
                    </span>
                    <span className="text-[11px] text-amber-400 font-semibold flex items-center gap-1 justify-end">
                      <ShieldAlert className="w-3 h-3" />
                      Improvement Detected
                    </span>
                  </div>
                </div>

                {/* Scorecards */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 bg-[#080c14] rounded-lg border border-[#222631]">
                    <div className="text-[9px] text-[#949BA8] uppercase">Shelf Standout</div>
                    <div className="font-mono text-base sm:text-lg text-amber-400 font-bold mt-0.5">48 / 100</div>
                    <div className="text-[8px] text-neutral-500">Blend Risk</div>
                  </div>

                  <div className="p-2 bg-[#080c14] rounded-lg border border-[#222631]">
                    <div className="text-[9px] text-[#949BA8] uppercase">Buyer Clarity</div>
                    <div className="font-mono text-base sm:text-lg text-red-400 font-bold mt-0.5">Low</div>
                    <div className="text-[8px] text-neutral-500">Weak 3s Hook</div>
                  </div>

                  <div className="p-2 bg-[#080c14] rounded-lg border border-[#222631]">
                    <div className="text-[9px] text-[#949BA8] uppercase">Sales Lift</div>
                    <div className="font-mono text-base sm:text-lg text-[#D4FF00] font-bold mt-0.5">+35%</div>
                    <div className="text-[8px] text-neutral-500">Visual Shift</div>
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs text-[#949BA8] leading-relaxed">
                  Based on your <span className="text-white capitalize">{sector}</span> footprint, sharpening packaging hierarchy and contrast will accelerate shelf sell-through.
                </p>
              </div>

              {/* Form to receive full diagnostic dossier */}
              <form onSubmit={handleFinalSubmit} className="space-y-3">
                <div>
                  <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    Work Email for Full 48-Hour Audit PDF
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="founder@yourcompany.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-3 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4FF00]"
                  />
                </div>

                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2.5 border border-[#272B36] text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white rounded-md transition-colors cursor-pointer"
                  >
                    BACK
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-[#D4FF00] hover:bg-[#c2eb00] text-[#080C14] font-bold text-xs tracking-[0.12em] uppercase rounded-md transition-all text-center shadow-lg shadow-[#D4FF00]/20 cursor-pointer"
                  >
                    REQUEST 48-HR COMMERCIAL AUDIT
                  </button>
                </div>
              </form>
            </div>
          )}

          {submitted && (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-[#D4FF00]/15 border border-[#D4FF00] text-[#D4FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h4 className="font-serif text-3xl font-bold text-white">
                Audit Brief Registered
              </h4>

              <p className="text-xs sm:text-sm text-[#949BA8] max-w-md mx-auto leading-relaxed">
                Thank you, {brandName || 'partner'}. Principal Creative Director Saeed Jabbari will personally review your product line and dispatch the commercial visibility diagnostic within 48 hours to <span className="text-[#D4FF00] font-semibold">{email}</span>.
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
