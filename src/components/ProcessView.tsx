import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Palette, 
  Layers, 
  Rocket, 
  CheckCircle, 
  ArrowRight, 
  FileCheck2,
  Sparkles,
  Target
} from 'lucide-react';

interface ProcessViewProps {
  onOpenBrief: () => void;
}

export const ProcessView: React.FC<ProcessViewProps> = ({ onOpenBrief }) => {
  // Interactive Brief Builder State
  const [briefService, setBriefService] = useState<string>('packaging');
  const [briefGoal, setBriefGoal] = useState<string>('rebrand');
  const [briefTimeline, setBriefTimeline] = useState<string>('strategic');
  const [brandName, setBrandName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [briefNotes, setBriefNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // 4 Commercial Process Phases — 100% English, Spacious & Uncrowded
  const phases = [
    {
      num: '01',
      phase: 'STAGE 01',
      title: 'Commercial Discovery & Market Positioning',
      subtitle: 'Eliminating business blindspots before creative exploration.',
      duration: 'WEEKS 01–02',
      colSpan: 'lg:col-span-12',
      icon: ShieldCheck,
      points: [
        'Competitor landscape audit to identify unclaimed visual and commercial territory',
        'Target audience mental model analysis: what triggers trust and purchase action',
        'Direct alignment on commercial KPIs, brand voice, and price-point positioning'
      ],
      output: 'Strategic Positioning & Creative Direction Codex'
    },
    {
      num: '02',
      phase: 'STAGE 02',
      title: 'Identity & Visual Architecture',
      subtitle: 'Designing distinctive brand assets and structural design systems.',
      duration: 'WEEKS 03–04',
      colSpan: 'lg:col-span-6',
      icon: Palette,
      points: [
        'Logo mark exploration, typographic hierarchy & proprietary color palettes',
        'Physical packaging forms, container aesthetics & unboxing choreography',
        'Digital design tokens and responsive website wireframes'
      ],
      output: 'Master Design Concepts & Interactive Prototypes'
    },
    {
      num: '03',
      phase: 'STAGE 03',
      title: 'Multi-Touchpoint Execution',
      subtitle: 'Translating approved direction across marketing and sales tools.',
      duration: 'WEEKS 05–06',
      colSpan: 'lg:col-span-6',
      icon: Layers,
      points: [
        'High-converting commercial website & landing page UI/UX build',
        'Comprehensive sales team pitch decks, B2B catalogs & brochures',
        'Social media visual systems, campaign assets & enterprise software UI'
      ],
      output: 'Production-Grade Digital & Physical Assets'
    },
    {
      num: '04',
      phase: 'STAGE 04',
      title: 'Launch Enablement & Delivery',
      subtitle: 'Full handover to your internal teams and market rollout.',
      duration: 'WEEK 07+',
      colSpan: 'lg:col-span-12',
      icon: Rocket,
      points: [
        'Comprehensive brand guidelines manual and component design system',
        'Asset library handover organized for marketing and sales teams',
        'Post-launch performance review and ongoing creative direction support'
      ],
      output: 'Market Launch & Full Brand Equity Transfer'
    }
  ];

  // 100% English Brief Form Options matching Real Services
  const serviceOptions = [
    { id: 'identity', label: 'Logo & Brand Identity', desc: 'Brand architecture & mark' },
    { id: 'packaging', label: 'Product Packaging Design', desc: 'Physical containers & labels' },
    { id: 'website', label: 'Commercial Website & Digital', desc: 'Conversion-focused web' },
    { id: 'sales-collateral', label: 'Sales Catalogs & Brochures', desc: 'Pitch decks & catalogs' },
    { id: 'social-media', label: 'Social Media Content System', desc: 'Scalable editorial feed' },
    { id: 'enterprise-software', label: 'Enterprise Software UI/UX', desc: 'Dashboards & internal tools' }
  ];

  const goalOptions = [
    { id: 'launch', label: 'New Brand Launch from Zero', note: 'Create an iconic identity & complete digital/physical presence' },
    { id: 'rebrand', label: 'Repositioning & Full Rebranding', note: 'Modernize existing brand to command higher market share' },
    { id: 'conversion', label: 'Sales Conversion & Shelf Boost', note: 'Improve packaging and digital interfaces to drive direct sales' },
    { id: 'sales-enablement', label: 'Empower Sales & Growth Team', note: 'Equip sales reps with high-authority presentation collateral' }
  ];

  const timelineOptions = [
    { id: 'sprint', label: 'Express Sprint (3–4 Weeks)', sub: 'Rapid turnaround for imminent launches' },
    { id: 'strategic', label: 'Strategic Deep-Dive (6–8 Weeks)', sub: 'Comprehensive brand ecosystem' },
    { id: 'retainer', label: 'Quarterly Dedicated Retainer', sub: 'Ongoing strategic direction' }
  ];

  const handleSubmitBrief = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail.trim()) return;
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#F5F6F9] min-h-screen text-[#080C14] pt-12 sm:pt-20 pb-32 selection:bg-[#080C14] selection:text-[#D4FF00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080C14] text-[#D4FF00] font-mono text-[10px] font-bold tracking-widest uppercase rounded mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4FF00]" />
            <span>COMMERCIAL METHODOLOGY &amp; EXECUTION</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#080C14] mb-4 tracking-tight">
            How We Turn Business Goals Into Market-Leading Brands
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-neutral-600 font-normal">
            A disciplined 4-stage process uniting commercial strategy with high-level design execution. No wasted motion — every step directly compounds your brand value and sales conversion.
          </p>
        </div>

        {/* 4 STAGES GRID — Light, Airy, Spacious Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-24">
          {phases.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.num}
                className={`${p.colSpan} bg-white rounded-xl p-8 sm:p-10 transition-all duration-200 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)]`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-neutral-100">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded bg-[#080C14] text-[#D4FF00] font-mono text-xs font-bold flex items-center justify-center">
                        {p.num}
                      </span>
                      <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-semibold">{p.phase}</span>
                    </div>
                    <span className="font-mono text-xs text-[#080C14] font-bold">{p.duration}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#080C14] mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal mb-6">
                    {p.subtitle}
                  </p>

                  <div className="space-y-3 mb-6">
                    {p.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-[13px] text-neutral-700 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-[#080C14] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between font-mono text-xs">
                  <span className="text-neutral-400 text-[10px] uppercase tracking-wider">KEY DELIVERABLE:</span>
                  <span className="text-[#080C14] font-semibold truncate max-w-[280px]">{p.output}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* INTERACTIVE CLIENT BRIEF BUILDER WITH STICKY LIVE SUMMARY */}
        <div className="mt-20">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080C14] text-[#D4FF00] font-mono text-[10px] font-bold tracking-widest uppercase rounded mb-3">
              <Target className="w-3.5 h-3.5 text-[#D4FF00]" />
              <span>INTERACTIVE BRIEF BUILDER</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#080C14] mb-3">
              Define Your Project Scope in 4 Simple Steps
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              Select your required service and business goals. The brief summary on the right updates live and follows you as you scroll.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-white rounded-xl p-10 sm:p-14 text-center max-w-2xl mx-auto space-y-5 animate-fadeIn shadow-lg">
              <div className="w-14 h-14 rounded-full bg-[#080C14] text-[#D4FF00] flex items-center justify-center mx-auto shadow-md">
                <FileCheck2 className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold tracking-widest text-[#080C14] uppercase">
                  BRIEF RECEIVED SUCCESSFULLY
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#080C14]">
                  Thank You, {brandName || 'Partner'}
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                  Saeed Jabbari will review your commercial brief and contact <span className="font-bold text-[#080C14]">{contactEmail}</span> within 24 business hours with initial strategic ideas and project roadmap.
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setBrandName('');
                    setContactEmail('');
                    setBriefNotes('');
                  }}
                  className="px-7 py-3 bg-[#080C14] hover:bg-neutral-800 text-[#D4FF00] font-mono text-xs font-bold tracking-wider uppercase rounded-lg transition-colors cursor-pointer"
                >
                  START ANOTHER BRIEF
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
              
              {/* Form Input Columns (7 Cols) — Light and Clean */}
              <form onSubmit={handleSubmitBrief} className="lg:col-span-7 space-y-8">
                
                {/* Step 1: Select Service */}
                <div className="bg-white p-7 sm:p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded bg-[#080C14] text-[#D4FF00] font-mono text-xs font-bold flex items-center justify-center">1</span>
                    <label className="font-serif text-xl font-semibold text-[#080C14]">
                      Which Service Does Your Business Need?
                    </label>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setBriefService(opt.id)}
                        className={`p-3.5 rounded-lg text-left transition-all cursor-pointer ${
                          briefService === opt.id
                            ? 'bg-[#080C14] text-white font-bold shadow-md'
                            : 'bg-[#F5F6F9] text-neutral-700 hover:bg-neutral-200'
                        }`}
                      >
                        <div className={`text-xs font-semibold ${briefService === opt.id ? 'text-[#D4FF00]' : 'text-[#080C14]'}`}>
                          {opt.label}
                        </div>
                        <div className={`text-[10px] mt-0.5 ${briefService === opt.id ? 'text-neutral-400' : 'text-neutral-500'}`}>
                          {opt.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Select Goal */}
                <div className="bg-white p-7 sm:p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded bg-[#080C14] text-[#D4FF00] font-mono text-xs font-bold flex items-center justify-center">2</span>
                    <label className="font-serif text-xl font-semibold text-[#080C14]">
                      Primary Commercial Objective
                    </label>
                  </div>
                  <div className="grid grid-cols-1 gap-2.5">
                    {goalOptions.map((opt) => (
                      <div
                        key={opt.id}
                        onClick={() => setBriefGoal(opt.id)}
                        className={`p-3.5 rounded-lg cursor-pointer transition-all ${
                          briefGoal === opt.id
                            ? 'bg-[#080C14] text-white border-l-4 border-[#D4FF00]'
                            : 'bg-[#F5F6F9] text-neutral-700 hover:bg-neutral-200'
                        }`}
                      >
                        <div className={`text-xs font-semibold ${briefGoal === opt.id ? 'text-[#D4FF00]' : 'text-[#080C14]'}`}>
                          {opt.label}
                        </div>
                        <div className={`text-[11px] mt-0.5 ${briefGoal === opt.id ? 'text-neutral-400' : 'text-neutral-500'}`}>
                          {opt.note}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 3: Timeline */}
                <div className="bg-white p-7 sm:p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded bg-[#080C14] text-[#D4FF00] font-mono text-xs font-bold flex items-center justify-center">3</span>
                    <label className="font-serif text-xl font-semibold text-[#080C14]">
                      Expected Timeline Window
                    </label>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {timelineOptions.map((opt) => (
                      <div
                        key={opt.id}
                        onClick={() => setBriefTimeline(opt.id)}
                        className={`p-3.5 rounded-lg text-left cursor-pointer transition-all ${
                          briefTimeline === opt.id
                            ? 'bg-[#080C14] text-white font-bold shadow-md'
                            : 'bg-[#F5F6F9] text-neutral-700 hover:bg-neutral-200'
                        }`}
                      >
                        <div className={`text-xs font-semibold ${briefTimeline === opt.id ? 'text-[#D4FF00]' : 'text-[#080C14]'}`}>
                          {opt.label}
                        </div>
                        <div className={`text-[10px] mt-0.5 ${briefTimeline === opt.id ? 'text-neutral-400' : 'text-neutral-500'}`}>
                          {opt.sub}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 4: Brand & Contact Info */}
                <div className="bg-white p-7 sm:p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded bg-[#080C14] text-[#D4FF00] font-mono text-xs font-bold flex items-center justify-center">4</span>
                    <label className="font-serif text-xl font-semibold text-[#080C14]">
                      Brand & Contact Information
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1">
                        Brand / Company Name
                      </label>
                      <input
                        type="text"
                        required
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        placeholder="e.g., Nova Botanics"
                        className="w-full bg-[#F5F6F9] border border-neutral-200 rounded-lg px-4 py-3 text-sm text-[#080C14] placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#080C14]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1">
                        Work Email or WhatsApp
                      </label>
                      <input
                        type="text"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="founder@company.com"
                        className="w-full bg-[#F5F6F9] border border-neutral-200 rounded-lg px-4 py-3 text-sm text-[#080C14] placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#080C14]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1">
                      Brief Notes or Core Challenge (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={briefNotes}
                      onChange={(e) => setBriefNotes(e.target.value)}
                      placeholder="e.g., We are launching a new consumer line and need full brand identity, product packaging, and sales catalog..."
                      className="w-full bg-[#F5F6F9] border border-neutral-200 rounded-lg p-4 text-sm text-[#080C14] placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#080C14]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#080C14] hover:bg-neutral-800 text-[#D4FF00] font-mono text-xs font-bold tracking-[0.16em] uppercase rounded-lg transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <span>SUBMIT COMMERCIAL BRIEF TO SAEED JABBARI</span>
                    <ArrowRight className="w-4 h-4 text-[#D4FF00]" />
                  </button>
                </div>
              </form>

              {/* DYNAMIC STICKY SIDEBAR (Follows User Smoothly as they Scroll) */}
              <div className="lg:col-span-5 relative self-start">
                <div className="sticky top-24 bg-[#080C14] text-white rounded-xl p-7 sm:p-8 shadow-2xl space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-white/10 text-[#D4FF00] font-mono text-[9px] font-bold tracking-widest uppercase rounded mb-3">
                      <span>LIVE BRIEF SUMMARY</span>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-white">
                      Scope Architecture
                    </h3>
                  </div>

                  {/* Summary Rows */}
                  <div className="space-y-3 pt-3 border-t border-white/10 text-xs font-mono">
                    <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                      <span className="text-neutral-400">SERVICE:</span>
                      <span className="text-[#D4FF00] font-bold uppercase text-right truncate max-w-[200px]">
                        {serviceOptions.find(s => s.id === briefService)?.label}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                      <span className="text-neutral-400">OBJECTIVE:</span>
                      <span className="text-white font-bold text-right truncate max-w-[200px]">
                        {goalOptions.find(g => g.id === briefGoal)?.label}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                      <span className="text-neutral-400">TIMELINE:</span>
                      <span className="text-[#D4FF00] font-bold">
                        {timelineOptions.find(t => t.id === briefTimeline)?.label}
                      </span>
                    </div>
                  </div>

                  {/* Guaranteed Deliverables */}
                  <div className="bg-[#121B2B] p-4 rounded-lg space-y-2.5">
                    <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block font-bold">
                      INCLUDED IN YOUR SCOPE:
                    </span>
                    <ul className="space-y-1.5 text-xs text-neutral-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#D4FF00] shrink-0" />
                        <span>Direct 1-on-1 collaboration with Saeed Jabbari</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#D4FF00] shrink-0" />
                        <span>Vector master assets & digital design tokens</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#D4FF00] shrink-0" />
                        <span>Full commercial rights handover</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={onOpenBrief}
                      className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white font-mono text-[11px] font-semibold tracking-wider uppercase rounded-lg transition-colors cursor-pointer"
                    >
                      OPEN FULL MODAL FORM
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
