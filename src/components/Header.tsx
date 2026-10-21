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
    <header className="sticky top-0 z-50 bg-[#090a0d]/95 backdrop-blur-md border-b border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Brand Lockup */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3.5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfad76] shrink-0 cursor-pointer"
          aria-label="Saeed Jabbari Studio Home"
        >
          <div className="w-10 h-10 rounded-full bg-[#d0ad78] text-[#0d0f12] flex items-center justify-center font-bold text-sm tracking-tight shrink-0 shadow-sm transition-transform group-hover:scale-105">
            SJ
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-[0.12em] text-[#f7f4ee] uppercase transition-colors group-hover:text-[#cfad76] whitespace-nowrap">
              SAEED JABBARI
            </span>
            <span className="text-[10px] tracking-[0.22em] text-neutral-400 uppercase font-medium whitespace-nowrap">
              BRANDING & CREATIVE DIRECTION
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide text-neutral-300" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive =
              currentPage === item.page ||
              (item.page === 'work' && currentPage === 'project-detail') ||
              (item.page === 'insights' && currentPage === 'articles');
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className="relative py-2 text-neutral-300 hover:text-white transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#cfad76] rounded cursor-pointer"
              >
                <span>{item.label}</span>
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-sm"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Primary CTA & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBrief}
            className="px-5 py-2.5 bg-[#cfad76] hover:bg-[#dfbd86] active:bg-[#c29e67] text-[#0d0f12] text-xs font-bold tracking-[0.12em] uppercase rounded-md transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap shrink-0 cursor-pointer"
          >
            Start a Project
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white md:hidden rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#cfad76]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-[#0c0e12] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive =
                currentPage === item.page ||
                (item.page === 'work' && currentPage === 'project-detail') ||
                (item.page === 'insights' && currentPage === 'articles');
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`flex items-center justify-between text-left py-2 text-sm font-medium tracking-wide ${
                    isActive ? 'text-[#cfad76] font-semibold' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#cfad76]" />}
                </button>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-neutral-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrief();
              }}
              className="w-full py-3 bg-[#cfad76] text-[#0d0f12] text-xs font-bold tracking-[0.12em] uppercase rounded-md text-center"
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
