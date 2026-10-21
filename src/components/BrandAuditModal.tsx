import React, { useState } from 'react';
import { X, CheckCircle, ShieldAlert, ArrowRight, Sparkles, FileText } from 'lucide-react';

interface BrandAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBrief: () => void;
}

export const BrandAuditModal: React.FC<BrandAuditModalProps> = ({ isOpen, onClose, onOpenBrief }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [sector, setSector] = useState('cosmetics');
  const [brandName, setBrandName] = useState('');
  const [vulnerabilities, setVulnerabilities] = useState<string[]>([]);
  const [skuCount, setSkuCount] = useState('3-8 SKUs');
  const [channel, setChannel] = useState('Supermarket & Department Stores');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const vulnerabilityOptions = [
    { id: 'shelf-blend', label: 'Packaging blends into competitor shelf clutter' },
    { id: 'box-damage', label: 'Cartons buckle, dent, or crush during shipping/warehousing' },
    { id: 'color-drift', label: 'Brand colors look visibly different between print runs' },
    { id: 'dieline-jam', label: 'Automated packing machinery jams due to loose tolerances' },
    { id: 'high-cogs', label: 'Packaging unit cost is too high relative to retail margin' },
    { id: 'export-fail', label: 'Lacks multilingual compliance for Gulf / European markets' }
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
        className="bg-[#0f1115] text-[#f7f4ee] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-neutral-800 relative my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#cfad76] text-[#0d0f12] flex items-center justify-center font-bold text-xs">
              SJ
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-white">
                1:1 Forensic Brand & Shelf Audit
              </h3>
              <p className="text-[11px] text-neutral-400">
                Principal-led diagnostic identifying retail shelf leakage & packaging vulnerabilities
              </p>
            </div>
          </div>

          <button
            onClick={resetAndClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#cfad76]"
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
                  placeholder="e.g. Lumina Derma or Apex Powertrain"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full bg-[#181b22] border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#cfad76]"
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
                    className="w-full bg-[#181b22] border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#cfad76]"
                  >
                    <option value="cosmetics">Cosmetics & Skincare</option>
                    <option value="fmcg">FMCG & Food & Beverage</option>
                    <option value="b2b">B2B & Corporate Export</option>
                    <option value="automotive">Automotive & Heavy Industry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Current Active SKU Count
                  </label>
                  <select
                    value={skuCount}
                    onChange={(e) => setSkuCount(e.target.value)}
                    className="w-full bg-[#181b22] border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#cfad76]"
                  >
                    <option value="1-2 SKUs">1–2 Hero SKUs (Launch)</option>
                    <option value="3-8 SKUs">3–8 Core SKUs (Growth)</option>
                    <option value="9-25 SKUs">9–25 Multi-SKU Portfolio</option>
                    <option value="25+ SKUs">25+ Enterprise Catalog</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-3">
                  Identify Current Packaging Vulnerabilities (Select all that apply)
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
                            ? 'bg-[#cfad76]/10 border-[#cfad76] text-[#f7f4ee]'
                            : 'bg-[#14171d] border-neutral-800 text-neutral-400 hover:border-neutral-700'
                        }`}
                      >
                        <span>{opt.label}</span>
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isChecked ? 'bg-[#cfad76] border-[#cfad76] text-black' : 'border-neutral-600'
                          }`}
                        >
                          {isChecked && <CheckCircle className="w-3 h-3 text-black" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#cfad76] hover:bg-[#dfbd86] text-[#0d0f12] text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all flex items-center justify-center gap-2"
              >
                <span>RUN PRELIMINARY AUDIT SCORECARD</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {step === 2 && !submitted && (
            <div className="space-y-6">
              {/* Preliminary Diagnosis Report */}
              <div className="bg-[#15181f] p-6 rounded-xl border border-neutral-800 space-y-5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">
                      DIAGNOSTIC TARGET
                    </span>
                    <h4 className="font-serif text-2xl text-[#f7f4ee] font-normal">
                      {brandName || 'Target Brand'}
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-[#cfad76] uppercase tracking-widest font-bold block">
                      STATUS
                    </span>
                    <span className="text-xs text-amber-400 font-semibold flex items-center gap-1 justify-end">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      Margin Vulnerability Detected
                    </span>
                  </div>
                </div>

                {/* Scorecards */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-[#0d0f13] rounded-lg border border-neutral-800">
                    <div className="text-[10px] text-neutral-400 uppercase">Shelf Contrast</div>
                    <div className="font-mono text-xl text-amber-400 font-bold mt-1">48 / 100</div>
                    <div className="text-[9px] text-neutral-500 mt-0.5">High Blend Risk</div>
                  </div>

                  <div className="p-3 bg-[#0d0f13] rounded-lg border border-neutral-800">
                    <div className="text-[10px] text-neutral-400 uppercase">Tolerance Risk</div>
                    <div className="font-mono text-xl text-red-400 font-bold mt-1">High</div>
                    <div className="text-[9px] text-neutral-500 mt-0.5">±0.4mm Drift</div>
                  </div>

                  <div className="p-3 bg-[#0d0f13] rounded-lg border border-neutral-800">
                    <div className="text-[10px] text-neutral-400 uppercase">Substrate Match</div>
                    <div className="font-mono text-xl text-[#cfad76] font-bold mt-1">62%</div>
                    <div className="text-[9px] text-neutral-500 mt-0.5">Over-Calibrated Cost</div>
                  </div>
                </div>

                {/* Findings breakdown */}
                <div className="space-y-2 text-xs text-neutral-300">
                  <div className="font-semibold text-white uppercase text-[11px] tracking-wider text-[#cfad76]">
                    Key Diagnostic Findings:
                  </div>
                  <p className="leading-relaxed text-neutral-400">
                    Based on your active SKU tier in <span className="text-white capitalize">{sector}</span>, your packaging likely suffers from low luminance delta against supermarket lighting, causing an estimated 18% to 26% loss in initial grab-and-glance velocity.
                  </p>
                  <p className="leading-relaxed text-neutral-400">
                    A structural dieline redesign with certified ±0.15mm tolerances can eliminate carton crushing while reducing packaging substrate weight.
                  </p>
                </div>
              </div>

              {/* Form to receive full 15-page diagnostic dossier */}
              <form onSubmit={handleFinalSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Enter Email for Full Forensic Audit Dossier (48-Hr Delivery)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="founder@yourcompany.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#181b22] border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#cfad76]"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-5 py-3 border border-neutral-700 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white rounded-md transition-colors"
                  >
                    BACK
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-[#cfad76] hover:bg-[#dfbd86] text-[#0d0f12] text-xs font-bold tracking-[0.14em] uppercase rounded-md transition-all text-center"
                  >
                    COMMISSION 48-HR FORENSIC AUDIT ($4,500)
                  </button>
                </div>
              </form>
            </div>
          )}

          {submitted && (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-[#cfad76]/20 border border-[#cfad76] text-[#cfad76] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h4 className="font-serif text-3xl font-normal text-white">
                Audit Brief Registered
              </h4>

              <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
                Thank you, {brandName || 'partner'}. Principal Creative Director Saeed Jabbari will personally review your packaging configuration and dispatch the preliminary diagnostic within 48 hours to <span className="text-[#cfad76]">{email}</span>.
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
