import React, { useState } from 'react';
import { NavPage } from '../types';
import { ArrowUpRight, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenBrief: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBrief }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-[#060709] text-[#f4f5f7] pt-16 sm:pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12 sm:pb-16 border-b border-white/10">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-[#FF4D1C] text-white flex items-center justify-center font-serif font-bold text-xs tracking-tight shrink-0">
                SJ
              </div>
              <span className="text-sm font-bold tracking-[0.14em] text-white uppercase">
                SAEED JABBARI
              </span>
            </div>

            <p className="text-xs sm:text-[13px] text-neutral-400 font-normal leading-relaxed max-w-sm">
              Strategic branding, packaging design, technical catalogs, and visual campaigns engineered to help businesses stand out on the shelf, communicate clearly, and increase sales.
            </p>

            {/* Availability status */}
            <div className="flex items-center gap-2.5 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
              <span className="text-[11px] text-neutral-300 font-medium tracking-wide">
                Available for New Brand &amp; Packaging Commissions
              </span>
            </div>
          </div>

          {/* Studio Direct */}
          <div className="md:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-neutral-400 uppercase">
              STUDIO DIRECT
            </h4>
            <div className="space-y-2 text-xs text-neutral-300 font-normal">
              <div>Istanbul &amp; Worldwide</div>
              <div>
                <a
                  href="mailto:saeedjabbari21@gmail.com"
                  className="hover:text-[#FF4D1C] transition-colors underline decoration-neutral-700 underline-offset-4"
                >
                  saeedjabbari21@gmail.com
                </a>
              </div>
              <div className="pt-2 space-y-2">
                <a
                  href="https://www.behance.net/saeedjabbari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#FF4D1C] transition-colors group"
                >
                  <span>Behance: saeedjabbari</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#FF4D1C]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/saeedjabbari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#FF4D1C] transition-colors group"
                >
                  <span>LinkedIn: saeedjabbari</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#FF4D1C]" />
                </a>
              </div>
            </div>
          </div>

          {/* Commercial Insights Newsletter */}
          <div className="md:col-span-4 space-y-3 sm:space-y-4">
            <h4 className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-neutral-400 uppercase">
              COMMERCIAL BRAND NOTES
            </h4>
            <p className="text-xs text-neutral-400 font-normal leading-relaxed">
              Practical insights on product packaging, shelf visibility, and visual systems that drive sales across FMCG, cosmetics, and B2B.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter business email..."
                  required
                  className="w-full bg-[#111317] border border-neutral-700 text-xs px-3.5 py-2.5 rounded-md sm:rounded-r-none sm:rounded-l-md text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF4D1C] transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#FF4D1C] hover:bg-[#ff6438] active:bg-[#e03e10] text-white text-xs font-bold tracking-wider uppercase rounded-md sm:rounded-l-none sm:rounded-r-md transition-colors shrink-0 cursor-pointer"
                >
                  JOIN
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-[11px] text-[#FF4D1C] font-medium pt-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Subscribed to studio insights.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Copyright & Sub-Nav */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-neutral-500 font-normal">
          <p>© 2026 Saeed Jabbari Studio. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <button
              onClick={() => onNavigate('work')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Work
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => onNavigate('process')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Process
            </button>
            <button
              onClick={() => onNavigate('insights')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Insights
            </button>
            <button
              onClick={onOpenBrief}
              className="hover:text-[#FF4D1C] text-neutral-300 font-medium transition-colors cursor-pointer"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
