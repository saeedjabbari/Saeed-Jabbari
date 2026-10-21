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
    <footer className="bg-[#07080b] text-[#f7f4ee] pt-20 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-neutral-800/80">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#d0ad78] text-[#0d0f12] flex items-center justify-center font-bold text-xs tracking-tight shrink-0">
                SJ
              </div>
              <span className="text-sm font-bold tracking-[0.14em] text-[#f7f4ee] uppercase">
                SAEED JABBARI
              </span>
            </div>

            <p className="text-xs sm:text-[13px] text-neutral-400 font-normal leading-relaxed max-w-sm">
              Independent creative practice specializing in brand identity, packaging design, print collateral, and advertising campaigns for cosmetics, FMCG, automotive, and B2B brands.
            </p>

            {/* Availability status */}
            <div className="flex items-center gap-2.5 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
              <span className="text-[11px] text-neutral-300 font-medium tracking-wide">
                Commissioning Q2 & Q3 2026 Engagements
              </span>
            </div>
          </div>

          {/* Studio Direct */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[11px] font-bold tracking-[0.22em] text-neutral-400 uppercase">
              STUDIO DIRECT
            </h4>
            <div className="space-y-2 text-xs text-neutral-300 font-normal">
              <div>Istanbul & Worldwide</div>
              <div>
                <a
                  href="mailto:saeedjabbari21@gmail.com"
                  className="hover:text-[#cfad76] transition-colors underline decoration-neutral-700 underline-offset-4"
                >
                  saeedjabbari21@gmail.com
                </a>
              </div>
              <div className="pt-2 space-y-1.5">
                <a
                  href="https://www.linkedin.com/in/saeedjabbari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#cfad76] transition-colors group"
                >
                  <span>LinkedIn: saeedjabbari</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-[#cfad76]" />
                </a>
                <a
                  href="https://www.behance.net/saeedjabbari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#cfad76] transition-colors group"
                >
                  <span>Behance: saeedjabbari</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-[#cfad76]" />
                </a>
              </div>
            </div>
          </div>

          {/* Studio Intelligence Newsletter */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[11px] font-bold tracking-[0.22em] text-neutral-400 uppercase">
              STUDIO INTELLIGENCE
            </h4>
            <p className="text-xs text-neutral-400 font-normal leading-relaxed">
              Receive field notes on branding, packaging design, and campaign strategy for cosmetics, FMCG, and automotive.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  required
                  className="w-full bg-[#111317] border border-neutral-700 text-xs px-3.5 py-2.5 rounded-l-md text-white placeholder-neutral-500 focus:outline-none focus:border-[#cfad76] transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#cfad76] hover:bg-[#dfbd86] active:bg-[#c29e67] text-[#0d0f12] text-xs font-bold tracking-wider uppercase rounded-r-md transition-colors shrink-0"
                >
                  JOIN
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-[11px] text-[#cfad76] font-medium pt-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Subscribed to field notes. Welcome aboard.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Copyright & Sub-Nav */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-neutral-500 font-normal">
          <p>© 2026 Saeed Jabbari Studio. All brand architectures are proprietary.</p>

          <div className="flex items-center gap-6">
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
              className="hover:text-[#cfad76] text-neutral-400 font-medium transition-colors cursor-pointer"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
