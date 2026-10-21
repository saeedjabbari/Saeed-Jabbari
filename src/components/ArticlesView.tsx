import React, { useState } from 'react';
import { 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  Bookmark, 
  BookOpen, 
  Share2, 
  Filter
} from 'lucide-react';

interface ArticlesViewProps {
  onOpenBrief: () => void;
}

interface CommercialEssay {
  id: string;
  serviceCategory: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
  keyTakeaway: string;
  businessImpact: string;
}

export const ArticlesView: React.FC<ArticlesViewProps> = ({ onOpenBrief }) => {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // 6 In-Depth Essays Aligned with Real Services — 100% English with Visual Plates
  const essays: CommercialEssay[] = [
    {
      id: 'brand-identity-economics',
      serviceCategory: 'Brand Identity',
      title: 'The Economics of Minimalist Identity: Why Simple Logo Systems Command Higher Market Value',
      date: 'November 2026',
      readTime: '4 min read',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7aed6182968605.653775fb5b12c.jpg',
      excerpt: 'Complex logos dilute recall. How disciplined visual restraint and distinctive typography build measurable enterprise value.',
      content: [
        'A logo is rarely examined in isolation; it is encountered on crowded mobile screens, business cards, billboard perimeters, and product packaging.',
        'When an identity tries to communicate eight different company values at once, the human brain registers it as visual static. High-value brands succeed because they reduce their core mark to an unmistakable, singular silhouette.',
        'By stripping away decorative gradients, complex clip-art geometry, and trendy visual noise, a minimalist identity achieves instant recognition within 100 milliseconds of exposure.',
        'Disciplined simplicity is not merely an aesthetic choice — it is a direct multiplier of enterprise valuation and customer trust.'
      ],
      keyTakeaway: 'Great identity design reduces cognitive friction so your brand is recognized before the user even reads your company name.',
      businessImpact: '3.2x higher brand recall and effortless cross-platform scalability.'
    },
    {
      id: 'packaging-shelf-conversion',
      serviceCategory: 'Packaging Design',
      title: 'The 3-Second Retail Glance: Converting Modern Shoppers with High-Contrast Packaging',
      date: 'October 2026',
      readTime: '5 min read',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/649bd8255777339.6aac614d624c8.png',
      excerpt: 'Shoppers spend under three seconds making a shelf decision. Why chromatic contrast and silhouette disruption beat cluttered marketing claims.',
      content: [
        'In supermarkets, specialty boutiques, and e-commerce feeds, shoppers are visually inundated with competing products claiming identical functional benefits.',
        'The primary cause of packaging failure is over-communication: putting 12 feature bullet points, multiple badges, and busy background patterns on a 15cm box face.',
        'Our studio methodology isolates the chromatic blindspot of the category aisle — using stark contrasts, bold monochromatic silhouettes, and tactile finishes that trigger involuntary attention.',
        'When the consumer picks up the physical package, the unboxing friction, weight balance, and clean typography validate the decision, turning a casual glance into an immediate purchase.'
      ],
      keyTakeaway: 'Own one dominant chromatic frequency and a bold silhouette instead of shouting features that no shopper reads.',
      businessImpact: '+34% higher shelf pick-up rate and memorable unboxing delight.'
    },
    {
      id: 'commercial-websites-conversion',
      serviceCategory: 'Commercial Websites',
      title: 'From Aesthetics to Conversion: Designing B2B Websites That Shorten Sales Cycles',
      date: 'September 2026',
      readTime: '5 min read',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c1c9d7256435067.6abc303d79e68.jpg',
      excerpt: 'Why generic SaaS and corporate templates kill high-ticket deals — and how intentional narrative pacing turns website visitors into qualified inbound leads.',
      content: [
        'Most corporate and B2B websites look interchangeable because they rely on generic templates, stock photos of handshakes, and vague marketing buzzwords.',
        'When a decision-maker or C-suite executive visits your site, they want to answer two simple questions in five seconds: Does this company genuinely solve my problem, and do they operate at an institutional standard?',
        'We design digital platforms with clear narrative hierarchy, authentic custom visual assets, transparent service breakdowns, and frictionless conversion touchpoints.',
        'A high-performing website is not an online brochure; it is your highest-leverage sales executive, working 24/7 to build unassailable commercial credibility.'
      ],
      keyTakeaway: 'Structure website user journeys around commercial proof and clear positioning to convert passive traffic into closed contracts.',
      businessImpact: '+48% increase in qualified inbound proposal requests.'
    },
    {
      id: 'sales-catalogs-enablement',
      serviceCategory: 'Sales Collateral',
      title: 'Equipping Sales Teams: Why Editorial Product Catalogs Outperform Dry Specification Sheets',
      date: 'August 2026',
      readTime: '4 min read',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f7a498256434075.6abc27e6e0f60.jpg',
      excerpt: 'Complex industrial and commercial lines overwhelm buyers when dumped into spreadsheets. How studio photography and isometric clarity close deals.',
      content: [
        'Commercial transport parts, industrial valves, and multi-tier product portfolios are frequently presented in dense, intimidating technical tables that fatigue fleet managers and procurement heads.',
        'Across our work for industrial leaders like Maral Moscow and RST Purchasing, we transformed technical manuals into high-authority editorial publications.',
        'By utilizing dramatic studio lighting, negative space, exploded 3D CAD cutaways, and structured bilingual layout systems, complex engineering becomes effortlessly understandable.',
        'When sales reps walk into executive meetings with an impeccably designed product catalog, they command instant technical authority.'
      ],
      keyTakeaway: 'Respect negative space and clear visual hierarchies so buyers can grasp complex product systems in seconds.',
      businessImpact: 'Equips sales teams with persuasive tools that dramatically shorten proposal turnaround.'
    },
    {
      id: 'social-media-visual-architecture',
      serviceCategory: 'Social Media',
      title: 'Visual Architecture vs. Random Posting: Building a Scalable Social Media Brand Universe',
      date: 'July 2026',
      readTime: '4 min read',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3c08da254816385.6a8e6402e7ce5.png',
      excerpt: 'Why posting disjointed daily graphics destroys brand recognition, and how a unified lighting, color, and editorial grid builds a loyal community.',
      content: [
        'Many brands treat social media as an ad-hoc content mill, churning out disparate Canva graphics that dilute brand recognition over time.',
        'To build authentic social brand equity, every carousel, video thumbnail, and story must feel like an extension of the same cohesive world.',
        'In our creative direction for skincare brands like The Nuvé, we established a strict atmosphere codex: honest warm daylight, tactile textures, restrained typography, and consistent editorial pacing.',
        'When your visual world is disciplined, viewers recognize your brand in their social feed before they even read your profile handle.'
      ],
      keyTakeaway: 'Build a repeatable visual grammar for social channels so every single post compounds your overall brand value.',
      businessImpact: 'Consistent organic engagement and elevated perceived lifestyle prestige.'
    },
    {
      id: 'enterprise-software-ux',
      serviceCategory: 'Enterprise UX',
      title: 'Consumer-Grade Enterprise UX: Designing Internal Software That Employees Actually Love',
      date: 'June 2026',
      readTime: '5 min read',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2ca09a256412865.6ad4aeec79021.png',
      excerpt: 'Why internal enterprise tools should never look like 2005 spreadsheets, and how intuitive dashboard architecture slashes training costs.',
      content: [
        'For decades, enterprise software was designed under the assumption that since employees are paid to use it, the user experience does not matter. The result was clunky portals, buried menus, and costly human errors.',
        'Today, modern workforces expect internal operational tools to operate with the fluid polish of consumer apps like Linear, Stripe, and Apple.',
        'We design enterprise dashboards, logistics tracking portals, and operational software with clear information density, customizable views, keyboard shortcuts, and intuitive data visualization.',
        'When internal tools are fast, beautiful, and intuitive, employee morale rises, training overhead drops by 60%, and critical operational mistakes are eliminated.'
      ],
      keyTakeaway: 'Bring consumer-level craft to internal enterprise tools to accelerate workflow velocity and eliminate user error.',
      businessImpact: '60% reduction in employee onboarding time and zero workflow friction.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Essays (6)' },
    { id: 'identity', label: 'Brand Identity' },
    { id: 'packaging', label: 'Packaging' },
    { id: 'web', label: 'Web & Digital' },
    { id: 'sales', label: 'Sales Collateral' },
    { id: 'social', label: 'Social Media' },
    { id: 'enterprise', label: 'Enterprise UX' }
  ];

  const filteredEssays = essays.filter((e) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'identity') return e.serviceCategory === 'Brand Identity';
    if (activeCategory === 'packaging') return e.serviceCategory === 'Packaging Design';
    if (activeCategory === 'web') return e.serviceCategory === 'Commercial Websites';
    if (activeCategory === 'sales') return e.serviceCategory === 'Sales Collateral';
    if (activeCategory === 'social') return e.serviceCategory === 'Social Media';
    if (activeCategory === 'enterprise') return e.serviceCategory === 'Enterprise UX';
    return true;
  });

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleShare = (essay: CommercialEssay, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(window.location.href);
    setCopiedId(essay.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // FULL DEDICATED ARTICLE PAGE (Light Theme, Spacious, No Modal!)
  if (selectedArticleId) {
    const article = essays.find(e => e.id === selectedArticleId)!;
    return (
      <div className="bg-[#F5F6F9] min-h-screen text-[#080C14] pt-12 sm:pt-20 pb-32 animate-fadeIn selection:bg-[#080C14] selection:text-[#D4FF00]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Return Button */}
          <button
            onClick={() => {
              setSelectedArticleId(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-neutral-200 text-[#080C14] font-mono text-xs font-bold tracking-widest uppercase rounded-lg transition-colors mb-10 shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO ALL ESSAYS &amp; INSIGHTS</span>
          </button>

          {/* Article Header Container */}
          <div className="bg-white rounded-xl p-8 sm:p-14 mb-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-2.5 py-1 bg-[#080C14] text-[#D4FF00] font-mono text-[10px] font-bold tracking-widest uppercase rounded">
                {article.serviceCategory}
              </span>
              <span className="font-mono text-xs text-neutral-500">
                {article.date} · {article.readTime}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-[#080C14] leading-[1.12] mb-6">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              {article.excerpt}
            </p>
          </div>

          {/* Featured Visual Plate */}
          <div className="bg-white rounded-xl overflow-hidden mb-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex items-center justify-center p-4 sm:p-8">
            <img
              src={article.image}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[500px] object-contain rounded-lg"
            />
          </div>

          {/* Full Essay Body Stream */}
          <div className="bg-white rounded-xl p-8 sm:p-14 space-y-6 text-sm sm:text-base leading-relaxed text-neutral-700 font-normal mb-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Strategic Pull Quote */}
            <div className="my-10 p-6 sm:p-8 bg-[#F5F6F9] rounded-lg border-l-4 border-[#080C14] space-y-2">
              <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#080C14] uppercase block">
                STRATEGIC TAKEAWAY
              </span>
              <p className="font-serif text-lg sm:text-2xl text-[#080C14] font-medium italic leading-relaxed">
                "{article.keyTakeaway}"
              </p>
            </div>

            <div className="p-4 bg-[#F5F6F9] rounded-lg flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-500">MEASURABLE IMPACT:</span>
              <span className="text-[#080C14] font-bold">{article.businessImpact}</span>
            </div>
          </div>

          {/* Bottom Action Card & Return Navigation */}
          <div className="bg-[#080C14] p-8 sm:p-10 rounded-xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 shadow-xl">
            <div>
              <h4 className="font-serif text-xl sm:text-2xl text-white font-semibold">
                Apply this strategy to your business
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Collaborate with Saeed Jabbari to execute this standard for your brand.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={(e) => handleShare(article, e)}
                className="px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors cursor-pointer text-xs font-mono flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                <span>{copiedId === article.id ? 'COPIED!' : 'SHARE'}</span>
              </button>
              <button
                onClick={onOpenBrief}
                className="px-6 py-3 bg-[#D4FF00] hover:bg-[#c2eb00] text-[#080C14] font-mono text-xs font-bold tracking-wider uppercase rounded-lg transition-all shadow-md shadow-[#D4FF00]/20 cursor-pointer"
              >
                DISCUSS PROJECT →
              </button>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                setSelectedArticleId(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-[#080C14] uppercase tracking-wider transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>RETURN TO ALL ESSAYS</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  // MAIN ESSAYS DIRECTORY (Spacious, Airy, Light Theme with Images)
  return (
    <div className="bg-[#F5F6F9] min-h-screen text-[#080C14] pt-12 sm:pt-20 pb-32 selection:bg-[#080C14] selection:text-[#D4FF00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080C14] text-[#D4FF00] font-mono text-[10px] font-bold tracking-widest uppercase rounded mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#D4FF00]" />
            <span>COMMERCIAL FIELD NOTES &amp; STRATEGY</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#080C14] mb-4 tracking-tight">
            Field Notes on Brand Power &amp; Commercial Velocity
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-neutral-600 font-normal">
            Practical essays exploring how brand identity, high-conversion packaging, bespoke websites, sales collateral, social media architecture, and enterprise UX drive real business growth.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-neutral-200">
          <div className="flex items-center gap-2 text-neutral-400 font-mono text-xs uppercase mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>FILTER:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold uppercase transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#080C14] text-[#D4FF00] font-bold shadow-md'
                  : 'bg-white text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* SPACIOUS ESSAYS GRID (With Visual Plates, No Crowding) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {filteredEssays.map((art) => {
            const isBookmarked = bookmarkedIds.includes(art.id);

            return (
              <div
                key={art.id}
                onClick={() => {
                  setSelectedArticleId(art.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)] rounded-xl overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
              >
                {/* Visual Thumbnail */}
                <div className="w-full h-48 sm:h-56 bg-[#ECEEF2] overflow-hidden relative">
                  <img
                    src={art.image}
                    alt={art.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-[#080C14]/90 backdrop-blur-md text-[#D4FF00] font-mono text-[10px] font-bold tracking-widest uppercase rounded">
                    {art.serviceCategory}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-neutral-400 font-mono text-xs mb-2.5">
                      <span className="flex items-center gap-1 text-[11px]">
                        <Clock className="w-3 h-3 text-[#080C14]" />
                        <span>{art.readTime}</span>
                      </span>
                      <button
                        onClick={(e) => toggleBookmark(art.id, e)}
                        className="p-1 hover:text-[#080C14] transition-colors cursor-pointer"
                        aria-label="Bookmark essay"
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-[#080C14] text-[#080C14]' : ''}`} />
                      </button>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#080C14] group-hover:text-neutral-700 transition-colors mb-2 leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed font-normal mb-5">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between font-mono text-xs font-bold text-[#080C14]">
                    <span className="tracking-widest uppercase text-[11px] group-hover:underline">READ COMPLETE ESSAY</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
