import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Sparkles,
  Layout, 
  Box, 
  Globe, 
  FileText, 
  Share2, 
  MonitorCheck
} from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/content';

interface ServicesViewProps {
  onOpenBrief: () => void;
  onSelectProject: (proj: Project) => void;
  onNavigateToProcess: () => void;
}

interface CommercialService {
  id: string;
  number: string;
  title: string;
  categoryLabel: string;
  tagline: string;
  image: string;
  icon: React.ElementType;
  colSpan: string;
  metric: string;
  metricLabel: string;
  summary: string;
  businessImpact: string;
  deliverables: string[];
  idealFor: string[];
  associatedProjectSlug: string;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onOpenBrief,
  onSelectProject,
  onNavigateToProcess
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // 6 Core Commercial Branding & Marketing Services
  const services: CommercialService[] = [
    {
      id: 'brand-identity',
      number: '01',
      title: 'Logo Design & Brand Identity Systems',
      categoryLabel: 'VISUAL ARCHITECTURE',
      tagline: 'Distinctive visual positioning engineered to separate your business from category noise and command market authority.',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7aed6182968605.653775fb5b12c.jpg',
      icon: Layout,
      colSpan: 'lg:col-span-7',
      metric: 'Top 5%',
      metricLabel: 'CATEGORY RECOGNITION',
      summary: 'A brand identity is an economic asset. We build cohesive, memorable visual systems that communicate clear positioning across every touchpoint.',
      businessImpact: 'Builds immediate customer trust, justifies premium pricing, and ensures instant brand recognition.',
      deliverables: [
        'Master Vector Logo Suite (Primary, Secondary & Monogram)',
        'Comprehensive Visual Identity Codex & Typography Guidelines',
        'Proprietary Color Palette Architecture & Digital Design Tokens'
      ],
      idealFor: ['New Brand Launches', 'Corporate Rebranding', 'High-Growth Startups'],
      associatedProjectSlug: 'rhino-energy'
    },
    {
      id: 'packaging-design',
      number: '02',
      title: 'Product Packaging Design',
      categoryLabel: 'RETAIL CONVERSION',
      tagline: 'High-conversion physical packaging that captures customer gaze and wins the decisive retail purchase moment.',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/649bd8255777339.6aac614d624c8.png',
      icon: Box,
      colSpan: 'lg:col-span-5',
      metric: '3-Sec',
      metricLabel: 'PURCHASE MOMENTUM',
      summary: 'In modern retail and e-commerce, the package is your most critical salesperson. We design structural packaging that converts browsers into buyers.',
      businessImpact: 'Maximizes shelf visibility, delivers an unforgettable unboxing experience, and elevates perceived value.',
      deliverables: [
        'Primary & Secondary Packaging Design Architecture',
        'Multi-SKU Retail Family Alignment & Variant Systems',
        'Photorealistic 3D Visualizations for E-Commerce & Launch'
      ],
      idealFor: ['FMCG Brands', 'Cosmetics & Perfumes', 'Gourmet Food & Beverage'],
      associatedProjectSlug: 'mood-mint'
    },
    {
      id: 'website-design',
      number: '03',
      title: 'Commercial Websites & Digital Platforms',
      categoryLabel: 'DIGITAL EXPERIENCES',
      tagline: 'Bespoke, high-converting digital storefronts tailored to build executive credibility and generate qualified leads.',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c1c9d7256435067.6abc303d79e68.jpg',
      icon: Globe,
      colSpan: 'lg:col-span-5',
      metric: '+48%',
      metricLabel: 'INQUIRY VELOCITY',
      summary: 'No generic web templates. We design custom digital platforms with intentional user flows and refined micro-interactions.',
      businessImpact: 'Transforms passive traffic into qualified inbound inquiries and establishes digital authority.',
      deliverables: [
        'Full UI/UX Wireframing & Interactive Prototypes',
        'Custom Responsive Desktop, Tablet & Mobile Interface Design',
        'Clean Component Design Systems & Developer Handoff Tokens'
      ],
      idealFor: ['B2B Enterprises', 'Direct-to-Consumer Brands', 'Professional Consultancies'],
      associatedProjectSlug: 'maral-moscow'
    },
    {
      id: 'sales-collateral',
      number: '04',
      title: 'Sales Collateral, B2B Catalogs & Brochures',
      categoryLabel: 'SALES ENABLEMENT',
      tagline: 'High-authority presentation packages and product catalogs designed to empower sales teams and close major deals.',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f7a498256434075.6abc27e6e0f60.jpg',
      icon: FileText,
      colSpan: 'lg:col-span-7',
      metric: '100%',
      metricLabel: 'TEAM EMPOWERMENT',
      summary: 'Complex products need crystal-clear communication. We turn dense technical specifications into elegant, persuasive sales catalogs.',
      businessImpact: 'Shortens sales cycles and arms commercial teams with compelling sales collateral.',
      deliverables: [
        'Executive Sales Pitch Decks & Keynote Presentations',
        'Multi-Page Comprehensive Product & Parts Catalogs',
        'Product Spec Sheets, One-Pagers & Exhibition Collateral'
      ],
      idealFor: ['Automotive & Heavy Industry', 'Industrial Manufacturers', 'Wholesale Distributors'],
      associatedProjectSlug: 'maral-moscow'
    },
    {
      id: 'social-media-content',
      number: '05',
      title: 'Social Media Content & Campaign Systems',
      categoryLabel: 'CONTENT ARCHITECTURE',
      tagline: 'Consistent, premium social media visual systems that build lasting brand equity rather than disconnected daily posts.',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3c08da254816385.6a8e6402e7ce5.png',
      icon: Share2,
      colSpan: 'lg:col-span-6',
      metric: '3.4x',
      metricLabel: 'BRAND RECALL',
      summary: 'Moving beyond random posts. We engineer a scalable, editorial visual language for your social channels that maintains high atmosphere.',
      businessImpact: 'Elevates your social feed from commercial noise to a curated lifestyle brand destination.',
      deliverables: [
        'Monthly Editorial Content Design Systems & Styleguides',
        'Modular Carousel Frameworks & Educational Templates',
        'Campaign Key Visuals & Promotional Launch Assets'
      ],
      idealFor: ['Consumer Lifestyle Brands', 'Skincare & Wellness', 'Food & Beverage'],
      associatedProjectSlug: 'the-nuve'
    },
    {
      id: 'enterprise-software-ux',
      number: '06',
      title: 'Enterprise Software & Internal Tools UI/UX',
      categoryLabel: 'ENTERPRISE PRODUCT',
      tagline: 'Consumer-grade elegance applied to complex enterprise software, internal dashboards, and customer portals.',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2ca09a256412865.6ad4aeec79021.png',
      icon: MonitorCheck,
      colSpan: 'lg:col-span-6',
      metric: '60%',
      metricLabel: 'LESS ONBOARDING FRICTION',
      summary: 'Internal enterprise tools should never feel like legacy spreadsheets. We create clean, intuitive dashboards that teams love using.',
      businessImpact: 'Reduces user error, eliminates workflow friction, and delivers consumer-grade polish to corporate software.',
      deliverables: [
        'Enterprise User Journey Mapping & Information Architecture',
        'High-Density Dashboard, Analytics & Data Table Interfaces',
        'Modular Multi-State UI Component Design Systems'
      ],
      idealFor: ['Logistics & Supply Chain', 'Financial & SaaS Platforms', 'Internal Operations'],
      associatedProjectSlug: 'maral-moscow'
    }
  ];

  // SUB-PAGE: Dedicated Light Full-View for Selected Service
  if (selectedServiceId) {
    const s = services.find(item => item.id === selectedServiceId)!;
    return (
      <div className="bg-[#F5F6F9] min-h-screen text-[#080C14] pt-12 sm:pt-20 pb-32 animate-fadeIn selection:bg-[#080C14] selection:text-[#D4FF00]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <button
            onClick={() => {
              setSelectedServiceId(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-neutral-200 text-[#080C14] font-mono text-xs font-bold tracking-widest uppercase rounded-lg transition-colors mb-10 shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO ALL SERVICES</span>
          </button>

          {/* Hero Header */}
          <div className="bg-white rounded-xl p-8 sm:p-14 mb-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded bg-[#080C14] text-[#D4FF00] font-mono text-xs font-bold flex items-center justify-center">
                {s.number}
              </span>
              <span className="font-mono text-xs tracking-widest text-[#080C14] uppercase font-bold">
                {s.categoryLabel}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-[#080C14] mb-4 leading-tight">
              {s.title}
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal max-w-3xl mb-8">
              {s.tagline}
            </p>

            <div className="pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="font-serif text-3xl text-[#080C14] font-bold">{s.metric}</span>
                <span className="font-mono text-xs text-neutral-500 tracking-wider uppercase">{s.metricLabel}</span>
              </div>
              <button
                onClick={onOpenBrief}
                className="px-7 py-3.5 bg-[#080C14] hover:bg-neutral-800 text-[#D4FF00] font-mono text-xs font-bold tracking-widest uppercase rounded-lg transition-all shadow-md cursor-pointer"
              >
                DISCUSS THIS SERVICE →
              </button>
            </div>
          </div>

          {/* Showcase Image & Strategic Focus */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-stretch">
            
            {/* Visual Preview */}
            <div className="lg:col-span-7 bg-white rounded-xl p-6 sm:p-8 flex items-center justify-center overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
              <img
                src={s.image}
                alt={s.title}
                referrerPolicy="no-referrer"
                className="w-full max-h-[460px] object-contain rounded-lg"
              />
            </div>

            {/* Strategic Overview */}
            <div className="lg:col-span-5 bg-white rounded-xl p-8 sm:p-10 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-6">
              <div>
                <span className="font-mono text-xs font-bold tracking-widest text-neutral-400 uppercase block mb-3">
                  COMMERCIAL FOCUS
                </span>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal mb-6">
                  {s.summary}
                </p>

                <div className="p-4 bg-[#F5F6F9] rounded-lg space-y-1 mb-6">
                  <span className="font-mono text-[10px] text-[#080C14] uppercase tracking-widest font-bold block">
                    BUSINESS IMPACT:
                  </span>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {s.businessImpact}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block font-bold mb-1">
                    KEY DELIVERABLES:
                  </span>
                  {s.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                      <CheckCircle className="w-4 h-4 text-[#080C14] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">RECOMMENDED FOR:</span>
                <span className="text-xs font-mono text-[#080C14] font-semibold">{s.idealFor.join(' · ')}</span>
              </div>
            </div>

          </div>

          {/* Action Footer */}
          <div className="bg-[#080C14] p-8 sm:p-10 rounded-xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h4 className="font-serif text-xl sm:text-2xl text-white font-semibold">
                Ready to elevate your {s.title.toLowerCase()}?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Collaborate directly with Saeed Jabbari on strategic positioning and design execution.
              </p>
            </div>
            <button
              onClick={onOpenBrief}
              className="px-8 py-3.5 bg-[#D4FF00] hover:bg-[#c2eb00] text-[#080C14] font-mono text-xs font-bold tracking-widest uppercase rounded-lg transition-all shrink-0 cursor-pointer shadow-lg shadow-[#D4FF00]/20"
            >
              START PROJECT INTAKE →
            </button>
          </div>

        </div>
      </div>
    );
  }

  // MAIN SERVICES BENTO DIRECTORY (Generous Negative Space, Light Theme)
  return (
    <div className="bg-[#F5F6F9] min-h-screen text-[#080C14] pt-12 sm:pt-20 pb-32 selection:bg-[#080C14] selection:text-[#D4FF00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080C14] text-[#D4FF00] font-mono text-[10px] font-bold tracking-widest uppercase rounded mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4FF00]" />
            <span>COMMERCIAL BRANDING & MARKETING SOLUTIONS</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#080C14] mb-4 tracking-tight">
            Strategic Design Solutions Built for Market Conversion
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-neutral-600 font-normal">
            Branding and marketing solutions tailored to commercial performance. From iconic brand identities and retail packaging to high-converting websites, sales team collateral, social media architecture, and enterprise software.
          </p>
        </div>

        {/* SPACIOUS ASYMMETRIC SERVICES GRID (Light Canvas with Visual Previews) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          {services.map((s) => (
            <div
              key={s.id}
              onClick={() => {
                setSelectedServiceId(s.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`${s.colSpan} bg-white hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)] rounded-xl overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.02)]`}
            >
              {/* Image Preview Plate */}
              <div className="w-full h-52 sm:h-64 bg-[#ECEEF2] overflow-hidden flex items-center justify-center relative">
                <img
                  src={s.image}
                  alt={s.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-2.5 py-1 bg-[#080C14]/90 backdrop-blur-md text-[#D4FF00] font-mono text-[10px] font-bold tracking-widest uppercase rounded">
                  <span>{s.number}</span>
                  <span>·</span>
                  <span>{s.categoryLabel}</span>
                </div>
              </div>

              {/* Airy Content Body */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#080C14] group-hover:text-neutral-700 transition-colors mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal mb-6">
                    {s.tagline}
                  </p>

                  <div className="space-y-2 mb-6">
                    {s.deliverables.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#080C14]" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Strip */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between font-mono text-xs">
                  <div>
                    <span className="text-[#080C14] font-bold">{s.metric}</span>{' '}
                    <span className="text-neutral-400 text-[10px] uppercase">{s.metricLabel}</span>
                  </div>
                  <span className="text-[#080C14] font-bold uppercase tracking-wider text-[11px] group-hover:underline flex items-center gap-1">
                    <span>EXPLORE SERVICE</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Strip */}
        <div className="bg-[#080C14] p-8 sm:p-12 rounded-xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-white/10 text-[#D4FF00] font-mono text-[9px] font-bold tracking-widest uppercase rounded mb-2">
              <span>COLLABORATION</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
              Have a branding, digital, or packaging project?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Speak directly with Saeed Jabbari to plan your commercial scope.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={onNavigateToProcess}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold tracking-widest uppercase rounded-lg transition-colors cursor-pointer"
            >
              OUR PROCESS →
            </button>
            <button
              onClick={onOpenBrief}
              className="px-7 py-3.5 bg-[#D4FF00] hover:bg-[#c2eb00] text-[#080C14] font-mono text-xs font-bold tracking-widest uppercase rounded-lg transition-all shadow-md shadow-[#D4FF00]/20 cursor-pointer"
            >
              START INTAKE BRIEF →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
