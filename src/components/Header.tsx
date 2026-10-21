import React, { useState } from 'react';
import { NavPage } from '../types';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenBrief: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBrief
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: NavPage }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Work', page: 'work' },
    { label: 'Services', page: 'services' },
    { label: 'Process', page: 'process' },
    { label: 'Insights', page: 'insights' }
  ];

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#080C14]/90 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF00] shrink-0 cursor-pointer"
          aria-label="Saeed Jabbari Studio Home"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-[#D4FF00] text-[#080C14] flex items-center justify-center font-serif font-black text-xs sm:text-sm tracking-tight shrink-0 shadow-lg shadow-[#D4FF00]/25 transition-transform group-hover:scale-105">
            SJ
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-bold tracking-[0.14em] text-white uppercase transition-colors group-hover:text-[#D4FF00] whitespace-nowrap">
              SAEED JABBARI
            </span>
            <span className="hidden sm:block text-[9px] tracking-[0.2em] text-neutral-400 uppercase font-mono whitespace-nowrap">
              BRANDING &amp; COMMERCIAL PACKAGING
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links — 100% Crisp High-Contrast Legibility */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[13px] font-medium tracking-wide" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive =
              currentPage === item.page ||
              (item.page === 'work' && currentPage === 'project-detail') ||
              (item.page === 'insights' && currentPage === 'articles');
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`relative py-2 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4FF00] rounded cursor-pointer ${
                  isActive ? 'text-white font-bold' : 'text-neutral-300 hover:text-[#D4FF00]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-[#D4FF00]"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Primary CTA & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenBrief}
            className="hidden sm:inline-flex px-5 py-2.5 bg-[#D4FF00] hover:bg-[#c2eb00] active:bg-[#aedf00] text-[#080C14] text-xs font-bold tracking-[0.12em] uppercase rounded-md transition-all shadow-lg shadow-[#D4FF00]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap shrink-0 cursor-pointer"
          >
            Start a Project
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-white hover:text-[#D4FF00] md:hidden rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4FF00]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080C14] px-5 py-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive =
                currentPage === item.page ||
                (item.page === 'work' && currentPage === 'project-detail') ||
                (item.page === 'insights' && currentPage === 'articles');
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`flex items-center justify-between text-left py-2.5 px-3 rounded-md text-sm font-medium tracking-wide transition-colors ${
                    isActive ? 'text-[#D4FF00] bg-white/5 font-bold' : 'text-neutral-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />}
                </button>
              );
            })}
          </nav>

          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrief();
              }}
              className="w-full py-3.5 bg-[#D4FF00] hover:bg-[#c2eb00] text-[#080C14] text-xs font-bold tracking-[0.14em] uppercase rounded-md text-center transition-all shadow-md"
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
