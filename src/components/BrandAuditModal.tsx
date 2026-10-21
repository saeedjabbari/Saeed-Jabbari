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
        className="bg-[#090a0d] text-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#222631] relative my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-[#222631] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#FF4D1C] text-white flex items-center justify-center font-bold text-xs">
              SJ
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                1:1 Brand Visibility & Sales Audit
              </h3>
              <p className="text-[11px] text-[#949BA8]">
                Diagnostic identifying why products blend in & how to increase shelf and market sales
              </p>
            </div>
          </div>

          <button
            onClick={resetAndClose}
            className="p-2 text-[#949BA8] hover:text-white rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF4D1C]"
            aria-label="Close Audit Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {step === 1 && (
            <form onSubmit={handleGenerateScorecard} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Brand / Company Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. NUVE Skincare, Rhino Energy, or RST Automotive"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF4D1C]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Industry Sector
                  </label>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF4D1C]"
                  >
                    <option value="cosmetics">Cosmetics & Skincare</option>
                    <option value="fmcg">FMCG & Food & Beverage</option>
                    <option value="b2b">B2B & Corporate Export</option>
                    <option value="automotive">Automotive & Heavy Industry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Current Active SKU / Product Count
                  </label>
                  <select
                    value={skuCount}
                    onChange={(e) => setSkuCount(e.target.value)}
                    className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF4D1C]"
                  >
                    <option value="1-2 SKUs">1–2 Hero Products (Launch)</option>
                    <option value="3-8 SKUs">3–8 Core Products (Growth)</option>
                    <option value="9-25 SKUs">9–25 Multi-SKU Portfolio</option>
                    <option value="25+ SKUs">25+ Enterprise Catalog</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-3">
                  Identify Current Brand & Sales Bottlenecks (Select all that apply)
                </label>
                <div className="space-y-2">
                  {vulnerabilityOptions.map((opt) => {
                    const isChecked = vulnerabilities.includes(opt.id);
                    return (
                      <div
                        key={opt.id}
                        onClick={() => toggleVulnerability(opt.id)}
                        className={`p-3 rounded-lg border text-xs cursor-pointer transition-all flex items-center justify-between ${
                          isChecked
                            ? 'bg-[#FF4D1C]/12 border-[#FF4D1C] text-white font-medium'
                            : 'bg-[#12151C] border-[#222631] text-[#949BA8] hover:border-neutral-700'
                        }`}
                      >
                        <span>{opt.label}</span>
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isChecked ? 'bg-[#FF4D1C] border-[#FF4D1C] text-white' : 'border-neutral-600'
                          }`}
                        >
                          {isChecked && <CheckCircle className="w-3 h-3 text-white" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#FF4D1C] hover:bg-[#FF6438] text-white text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FF4D1C]/20"
              >
                <span>RUN VISIBILITY & SALES SCORECARD</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {step === 2 && !submitted && (
            <div className="space-y-6">
              {/* Preliminary Diagnosis Report */}
              <div className="bg-[#12151C] p-6 rounded-xl border border-[#222631] space-y-5">
                <div className="flex items-center justify-between border-b border-[#222631] pb-4">
                  <div>
                    <span className="text-[10px] text-[#949BA8] uppercase tracking-widest font-bold">
                      DIAGNOSTIC TARGET
                    </span>
                    <h4 className="font-serif text-2xl text-white font-bold">
                      {brandName || 'Target Brand'}
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-[#FF4D1C] uppercase tracking-widest font-bold block">
                      STATUS
                    </span>
                    <span className="text-xs text-amber-400 font-semibold flex items-center gap-1 justify-end">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      Sales Visibility Opportunity Detected
                    </span>
                  </div>
                </div>

                {/* Scorecards */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-[#090a0d] rounded-lg border border-[#222631]">
                    <div className="text-[10px] text-[#949BA8] uppercase">Shelf Standout</div>
                    <div className="font-mono text-xl text-amber-400 font-bold mt-1">48 / 100</div>
                    <div className="text-[9px] text-neutral-500 mt-0.5">High Blend Risk</div>
                  </div>

                  <div className="p-3 bg-[#090a0d] rounded-lg border border-[#222631]">
                    <div className="text-[10px] text-[#949BA8] uppercase">Buyer Clarity</div>
                    <div className="font-mono text-xl text-red-400 font-bold mt-1">Low</div>
                    <div className="text-[9px] text-neutral-500 mt-0.5">Weak 3-Sec Hook</div>
                  </div>

                  <div className="p-3 bg-[#090a0d] rounded-lg border border-[#222631]">
                    <div className="text-[10px] text-[#949BA8] uppercase">Sales Lift Potential</div>
                    <div className="font-mono text-xl text-[#FF4D1C] font-bold mt-1">+35%</div>
                    <div className="text-[9px] text-neutral-500 mt-0.5">Via Visual Hierarchy</div>
                  </div>
                </div>

                {/* Findings breakdown */}
                <div className="space-y-2 text-xs text-neutral-300">
                  <div className="font-bold uppercase text-[11px] tracking-wider text-[#FF4D1C]">
                    Key Commercial Findings:
                  </div>
                  <p className="leading-relaxed text-[#949BA8]">
                    Based on your active SKU tier in <span className="text-white capitalize font-medium">{sector}</span>, your current visual architecture likely loses 18% to 26% of first-glance buyer attention to bolder competitors on crowded shelves and digital feeds.
                  </p>
                  <p className="leading-relaxed text-[#949BA8]">
                    Re-engineering your brand hierarchy, color contrast, and packaging communication system will immediately sharpen buyer trust and accelerate retail sell-through.
                  </p>
                </div>
              </div>

              {/* Form to receive full diagnostic dossier */}
              <form onSubmit={handleFinalSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Enter Email for Full Brand & Sales Diagnostic Report (48-Hr Delivery)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="founder@yourcompany.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#12151C] border border-[#272B36] rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF4D1C]"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-5 py-3 border border-[#272B36] text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white rounded-md transition-colors"
                  >
                    BACK
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-[#FF4D1C] hover:bg-[#FF6438] text-white text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all text-center shadow-lg shadow-[#FF4D1C]/20"
                  >
                    REQUEST 48-HR COMMERCIAL AUDIT
                  </button>
                </div>
              </form>
            </div>
          )}

          {submitted && (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-[#FF4D1C]/15 border border-[#FF4D1C] text-[#FF4D1C] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h4 className="font-serif text-3xl font-bold text-white">
                Audit Brief Registered
              </h4>

              <p className="text-xs sm:text-sm text-[#949BA8] max-w-md mx-auto leading-relaxed">
                Thank you, {brandName || 'partner'}. Principal Creative Director Saeed Jabbari will personally review your product line and dispatch the commercial visibility diagnostic within 48 hours to <span className="text-[#FF4D1C] font-semibold">{email}</span>.
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
