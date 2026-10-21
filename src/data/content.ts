import { CapabilityItem, EngagementPlan, Project, SectorItem, Article } from '../types';

const asset = (subpath: string): string => {
  if (
    typeof window !== 'undefined' &&
    (window as unknown as { __STATIC_ROOT_MODE__?: boolean }).__STATIC_ROOT_MODE__
  ) {
    return `public/assets/${subpath}`;
  }
  return `assets/${subpath}`;
};

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'brand-identity',
    title: 'Brand Identity & Logo Systems',
    description: 'Distinctive logomarks, typographic architecture, curated color palettes, and comprehensive visual identity systems built for lasting recognition.',
    tags: ['Logo Design', 'Brand World', 'Visual Guidelines']
  },
  {
    id: 'packaging-design',
    title: 'Packaging & Product Concepts',
    description: 'Structural packaging concepts, label systems, and tactile material curation that elevate products into desirable brand experiences.',
    tags: ['Packaging Systems', 'Label Architecture', '3D Product Visuals']
  },
  {
    id: 'catalogs-print',
    title: 'Catalogs, Publications & Print',
    description: 'Editorial product catalogs, technical double-page spreads, and sales brochures that transform complex offerings into clear visual narratives.',
    tags: ['Product Catalogs', 'Editorial Spreads', 'B2B Literature']
  },
  {
    id: 'advertising-campaigns',
    title: 'Campaigns & Social Direction',
    description: 'Monthly visual content systems, 3D character development, exhibition key visuals, and social storytelling designed for cohesive brand presence.',
    tags: ['Art Direction', 'Social Content', 'Character & 3D']
  }
];

export const SECTORS: SectorItem[] = [
  {
    id: 'cosmetics',
    name: 'Cosmetics & Skincare',
    subtitle: 'Skincare Content Systems • Tactile Packaging • Beauty Art Direction',
    headerBg: '#6d4c3d',
    description: 'Warm lighting, natural skin textures, organic materials, and calm editorial compositions crafted to build a scalable and recognizable brand world for skincare and beauty houses.',
    tags: ['Art Direction', 'Content Systems', 'Cosmetic Packaging'],
    clientTypes: ['Skincare Brands', 'Beauty & Derma Lines', 'Boutique Cosmetics'],
    caseCount: 18
  },
  {
    id: 'fmcg',
    name: 'FMCG & Food',
    subtitle: 'Conceptual Packaging • Character Development • Beverage & Confectionery',
    headerBg: '#1e4a38',
    description: 'Rethinking consumer choice in crowded categories through mood-driven packaging systems, expressive 3D brand characters, and high-impact shelf storytelling.',
    tags: ['FMCG Concepts', 'Character Design', 'Beverage & Confectionery'],
    clientTypes: ['Confectionery Brands', 'Energy & RTD Beverages', 'Consumer Goods'],
    caseCount: 24
  },
  {
    id: 'b2b',
    name: 'B2B & Corporate',
    subtitle: 'Corporate Identity • Geometric Logos • Strategic Visual Systems',
    headerBg: '#162840',
    description: 'Restrained geometric logomarks, clear brand philosophies, and authoritative visual architectures that make ambitious agencies and enterprises impossible to overlook.',
    tags: ['Logo Architecture', 'Brand Strategy', 'Corporate Identity'],
    clientTypes: ['Creative Agencies', 'International Exporters', 'Corporate Enterprises'],
    caseCount: 16
  },
  {
    id: 'automotive',
    name: 'Automotive & Heavy Industry',
    subtitle: 'Industrial Catalogs • Semi-Trailer Systems • Motor Oil Packaging',
    headerBg: '#2b313b',
    description: 'Translating complex industrial engineering—semi-trailer axles, LPG tankers, brake components, and eco-formulated lubricants—into museum-grade catalogs and campaign visuals.',
    tags: ['Technical Catalogs', '3D Industrial Visuals', 'Lubricant Labels'],
    clientTypes: ['Commercial Vehicle Brands', 'Heavy Spares Exporters', 'Lubricant Producers'],
    caseCount: 22
  }
];

export interface HeroSlide {
  id: 'cosmetics' | 'fmcg' | 'b2b' | 'automotive';
  industryLabel: string;
  image: string;
  headlineMobile: [string, string, string];
  headlineDesktop: [string, string];
  subtitle: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'cosmetics',
    industryLabel: 'Cosmetics & Skincare',
    image: asset('hero/hero-cosmetics.jpg'),
    headlineMobile: [
      'Sculpting desire for',
      'modern skincare &',
      'botanical cosmetics.'
    ],
    headlineDesktop: [
      'Sculpting desire for modern',
      'skincare and botanical cosmetics.'
    ],
    subtitle:
      'Warm lighting, natural textures, and calm editorial compositions crafted into cohesive packaging and content systems.'
  },
  {
    id: 'fmcg',
    industryLabel: 'FMCG & Food',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7e88ef255777339.6aac614ea6a76.jpg',
    headlineMobile: [
      'Sensory identity that',
      'redefines choice on',
      'the crowded shelf.'
    ],
    headlineDesktop: [
      'Sensory identity that redefines',
      'choice on the crowded shelf.'
    ],
    subtitle:
      'Conceptual FMCG packaging systems and expressive brand characters that connect flavor, mood, and consumer ritual.'
  },
  {
    id: 'b2b',
    industryLabel: 'B2B & Corporate',
    image: asset('hero/hero-b2b.jpg'),
    headlineMobile: [
      'Make your brand',
      'easier to recognize',
      'and harder to replace.'
    ],
    headlineDesktop: [
      'Make your brand easier to recognize',
      'and harder to replace.'
    ],
    subtitle:
      'Context is key, margin is freedom — geometric identity systems and authoritative visual language for modern enterprises.'
  },
  {
    id: 'automotive',
    industryLabel: 'Automotive & Heavy Industry',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bacbe8256435067.6abc2ee740e6a.jpg',
    headlineMobile: [
      'Quiet strength and',
      'precision catalogs for',
      'global transport.'
    ],
    headlineDesktop: [
      'Quiet strength and precision',
      'catalogs for global transport.'
    ],
    subtitle:
      'Engineering sometimes does not speak; it simply works. Editorial catalogs, 3D cutaways, and packaging for heavy industry.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'the-nuve',
    title: 'The Nuvé — Skincare Visual & Content System',
    subtitle: 'Art Direction · Concept Development · Image Creation · Social Media Design',
    sector: 'cosmetics',
    sectorLabel: 'Cosmetics & Skincare',
    client: 'The Nuvé (Türkiye)',
    year: '2026',
    behanceUrl: 'https://www.behance.net/gallery/254816385/The-Nuv-Skincare-Social-Media-Content-Design',
    tagline: 'Warm lighting, natural skin textures, and calm compositions aligned with The Nuvé’s luxury skincare world.',
    description: 'Ongoing monthly creative collaboration with The Nuvé, a Türkiye-based skincare brand, encompassing concept development, creative direction, product staging, and editorial carousel design for shimmering body care.',
    heroColor: '#6d4c3d',
    textColor: '#f7f2ed',
    bannerVisualText: 'The Nuvé',
    heroImage: asset('projects/the-nuve.jpg'),
    galleryImages: [
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/db9fd8254816385.6a8e6403bd662.png',
        caption: 'Complete multi-slide editorial system showcasing warm bronze skin luminosity and product integration.',
        specLabel: 'CAROUSEL SYSTEM'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/79c733254816385.6a8e6402e84ee.png',
        caption: 'Slide 01 — Vücudunun cildini nasıl daha lüks gösterebilirsin: warm sunlight and natural skin radiance.',
        specLabel: 'SLIDE 01 // COVER'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3f727d254816385.6a8e6402e9850.png',
        caption: 'Slide 04 — En güzel göründüğü bölgeler: anatomical highlight callouts paired with primary bottle packaging.',
        specLabel: 'SLIDE 04 // PRODUCT & GLOW'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cb773d254816385.6a8e6402e8c99.png',
        caption: 'Tactile product bottle presentation emphasizing silky texture without heavy glitter residue.',
        specLabel: 'SLIDE 02 // FORMULATION'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4089d5254816385.6a8e6402e80fe.png',
        caption: 'Side-by-side skin finish comparison demonstrating natural hydration and light reflection.',
        specLabel: 'SLIDE 03 // COMPARISON'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3c08da254816385.6a8e6402e7ce5.png',
        caption: 'Application ritual and sensory storytelling designed for high-retention social engagement.',
        specLabel: 'SLIDE 05 // RITUAL'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e4073a254816385.6a8e6402e906c.png',
        caption: 'Complete carousel flow showing seamless typographic continuity across consecutive frames.',
        specLabel: 'EDITORIAL FLOW'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/30bcc5254816385.6a8e6402e945e.png',
        caption: 'Detail study of typography, warm earth palette, and organic botanical atmosphere.',
        specLabel: 'VISUAL ATMOSPHERE'
      }
    ],
    categoryTag: 'Art Direction & Content System',
    substrates: ['Art Direction', 'Concept Development', 'Image Creation', 'Social Media Design'],
    dimensions: 'Monthly Content Architecture',
    tolerance: 'Brand Consistency',
    pressMethod: 'Editorial Photography & Digital Direction',
    colorSystem: 'Warm Terracotta / Golden Skin Glow / Espresso Brown',
    highlights: [
      'Built a consistent, scalable visual system that works across monthly content series',
      'Preserved product character through warm lighting, organic materials, and calm compositions',
      'Seamless carousel storytelling uniting product packaging with aspirational lifestyle imagery'
    ],
    challenge: 'Projects like this involve much more than creating visually appealing images. The challenge is to build a consistent visual system that works across different content pieces while preserving the character of the product and the brand’s communication language.',
    solution: 'Warm lighting, natural skin textures, organic materials, and calm compositions were used to create an unmistakable visual atmosphere aligned with The Nuvé’s brand world.',
    shelfImpact: {
      beforeDesc: 'Isolated single-post visuals without a cohesive brand narrative or recognizable atmosphere.',
      afterDesc: 'A unified, luxurious visual content system that elevates product desirability across every touchpoint.',
      metric: 'Monthly',
      metricLabel: 'Ongoing Brand Collaboration'
    },
    dielineSpecs: {
      dimensions: 'Editorial Carousel & Bottle Staging',
      caliper: 'Visual Content System',
      varnish: 'Warm Golden Hour Lighting',
      embossDepth: 'Tactile Skin & Linen Textures'
    }
  },
  {
    id: 'mood-mint',
    title: 'MOOD MINT — FMCG Creative Concept',
    subtitle: 'Rethinking Choice in the Mint Category: Flavor, Mood & Occasion',
    sector: 'fmcg',
    sectorLabel: 'FMCG & Food',
    client: 'MOOD MINT (Concept Study)',
    year: '2026',
    behanceUrl: 'https://www.behance.net/gallery/255777339/MOOD-MINT-FMCG-Creative-Concept',
    tagline: 'What if a mint could be chosen by mood, not only by flavor?',
    description: 'MOOD MINT is a creative FMCG concept exploring a different logic for choosing a mint product — connecting flavor, mood, and occasion within one coherent product and packaging system.',
    heroColor: '#1c1e22',
    textColor: '#f1f3f5',
    bannerVisualText: 'MOOD MINT',
    heroImage: asset('projects/mood-mint.jpg'),
    galleryImages: [
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7e88ef255777339.6aac614ea6a76.jpg',
        caption: 'Three signature metallic slide tins — CHAOS (Orange), BRAVE (Matte Black), and CALM (Olive) — with debossed minimal expressions.',
        specLabel: 'MULTI-SKU TIN ARCHITECTURE'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/020313255777339.6aac614ea62ed.jpg',
        caption: 'Hero matte black BRAVE pocket tin showcasing tactile debossed facial geometry and glowing indicator dot.',
        specLabel: 'HERO PRODUCT FORM'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e23fb7255777339.6aac614ea54fc.jpg',
        caption: 'Full collection lineup connecting flavor, mood, and occasion across distinct chromatic metal tins.',
        specLabel: 'COLLECTION LINEUP'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/786523255777339.6aac614ea784c.jpg',
        caption: 'Tactile pocket interaction and slide-open metallic casket revealing embossed mints inside.',
        specLabel: 'UNBOXING RITUAL'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d05fde255777339.6aac614ea5c1b.jpg',
        caption: 'Architectural dark studio staging highlighting matte powder-coated surface and minimalist typography.',
        specLabel: 'MATERIAL STUDY'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/649bd8255777339.6aac614d624c8.png',
        caption: 'Strategic category framework: questioning how consumers choose in a mature global mint market.',
        specLabel: 'CATEGORY STRATEGY'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ff024e255777339.6aac614d62d3c.png',
        caption: 'Strategic mood-to-flavor mapping matrix: Clarity, Calm, Contrast, Connection, and Energy.',
        specLabel: 'MOOD SYSTEM MATRIX'
      }
    ],
    categoryTag: 'FMCG Concept & Packaging System',
    substrates: ['Concept Development', 'Packaging Architecture', 'SKU Strategy', '3D Product Visualization'],
    dimensions: 'Multi-SKU Pocket Tin Series',
    tolerance: 'Mood + Flavor + Occasion',
    pressMethod: 'Matte Powder-Coated Metal Tin with Deboss',
    colorSystem: 'Matte Obsidian / Chaos Orange / Calm Olive',
    highlights: [
      'New category logic: MOOD + FLAVOR + OCCASION → PRODUCT CHOICE',
      'Five distinct emotional territories: Clarity, Softness/Calm, Contrast/Chaos, Connection, and Brave/Energy',
      'Tactile slide-open metal tins with minimalist debossed character expressions'
    ],
    challenge: 'In a mature global category with strong, familiar players, brands already compete through flavor variety, sugar-free propositions, and standard packs. If flavor is already a familiar way to differentiate mints, what else could influence the choice?',
    solution: 'We created a conceptual mint system where each SKU connects a flavor with a specific mood or moment — transforming an everyday breath mint into a personal ritual chosen for how you want to feel.',
    shelfImpact: {
      beforeDesc: 'Routine category choices driven purely by generic peppermint or fruit flavor labels.',
      afterDesc: 'An expressive, collectible object system where consumers choose their mint by mood and moment.',
      metric: '5 SKUs',
      metricLabel: 'Coherent Mood-Driven Product System'
    },
    dielineSpecs: {
      dimensions: 'Pocket Slide Tin Collection',
      caliper: 'Matte Coated Metal Tin',
      varnish: 'Soft-Touch Powder Finish',
      embossDepth: 'Debossed Minimalist Icons'
    }
  },
  {
    id: 'rst-axle-catalog',
    title: 'RST Purchasing — Semi-Trailer Axle Parts',
    subtitle: 'Website Slider, Exhibition Visuals & Catalog Direction (Automechanika 2026)',
    sector: 'automotive',
    sectorLabel: 'Automotive & Heavy Industry',
    client: 'RST Purchasing Automotive',
    year: '2026',
    behanceUrl: 'https://www.behance.net/gallery/256435067/Website-slider-Semi-trailer-axle-parts',
    tagline: 'Engineering sometimes does not speak. It simply works. — Quiet strength built into every kilometer.',
    description: 'High-impact website hero sliders and product presentation visuals created for RST Purchasing Automotive for Automechanika Istanbul 2026. Spotlighting heavy-duty semi-trailer axle assemblies, air suspension bellows (RST 2924), and ventilated disc brakes.',
    heroColor: '#121419',
    textColor: '#f5f7fa',
    bannerVisualText: 'RST AXLE SYSTEMS',
    heroImage: asset('projects/rst-axle.jpg'),
    galleryImages: [
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5963c0256435067.6abc303d7a3bb.jpg',
        caption: 'Flagship campaign visual: "Mühendislik bazen konuşmaz. Sadece çalışır." (Engineering sometimes does not speak. It simply works.)',
        specLabel: 'AUTOMECHANIKA KEY VISUAL'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bacbe8256435067.6abc2ee740e6a.jpg',
        caption: 'Quiet strength. Built into every kilometer — macro studio study of the RST 2924 air suspension spring and brake lining.',
        specLabel: 'MACRO STUDIO PLATE'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f549d0256435067.6abc2ee740997.jpg',
        caption: 'Full semi-trailer axle assembly with disc brake rotors and air chambers on dark architectural background.',
        specLabel: 'AXLE ASSEMBLY OVERVIEW'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/80e7e0256435067.6abc2ee7404c7.jpg',
        caption: 'Precision metallic finish and dramatic rim lighting emphasizing heavy-duty manufacturing quality.',
        specLabel: 'LIGHTING & DETAIL STUDY'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c1c9d7256435067.6abc303d79e68.jpg',
        caption: 'Widescreen web slider composition balancing bold editorial typography with expansive negative space.',
        specLabel: 'WEBSITE SLIDER SYSTEM'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4e3f0f256435067.6abc303d79925.jpg',
        caption: 'Complete visual sequence engineered for digital portals and international trade show displays.',
        specLabel: 'CAMPAIGN SERIES'
      }
    ],
    categoryTag: 'Industrial Campaign & Catalog Visuals',
    substrates: ['Website Hero Sliders', 'Automechanika Exhibition Graphics', 'Product Catalog Plates'],
    dimensions: 'Widescreen Digital & Print Series',
    tolerance: 'Automechanika Istanbul 2026',
    pressMethod: '3D CGI Product Staging & Editorial Typography',
    colorSystem: 'Deep Obsidian Black / Machined Chrome / Pure White',
    highlights: [
      'Sculptural studio lighting that elevates heavy commercial axle components into objects of precision',
      'Restrained, confident copywriting ("Quiet strength. Built into every kilometer.")',
      'Generous negative space engineered for seamless website slider and trade booth integration'
    ],
    challenge: 'Heavy commercial vehicle components are typically presented in cluttered, low-contrast warehouse catalogs that fail to communicate engineering prestige.',
    solution: 'We isolated each axle assembly and suspension component in a pitch-black luxury studio environment, using dramatic rim lighting and minimalist typography.',
    shelfImpact: {
      beforeDesc: 'Conventional industrial product listings lacking emotional or visual authority.',
      afterDesc: 'A commanding flagship presence for RST Purchasing at Automechanika Istanbul 2026.',
      metric: '2026',
      metricLabel: 'Automechanika Istanbul Showcase'
    },
    dielineSpecs: {
      dimensions: 'Widescreen Slider & Catalog System',
      caliper: 'Digital & Large-Format Print',
      varnish: 'High-Contrast Dark Studio Grade',
      embossDepth: '3D Component Rendering'
    }
  },
  {
    id: 'rhino-energy',
    title: 'Rhino Energy — Character Design & Visual Development',
    subtitle: 'Brand Mascot Architecture, 3D Visual Development & Campaign World',
    sector: 'fmcg',
    sectorLabel: 'FMCG & Food',
    client: 'Rhino Energy Drink',
    year: '2026',
    behanceUrl: 'https://www.behance.net/gallery/254714545/Rhino-Energy-Character-Design-Visual-Development',
    tagline: 'What would Rhino Energy look like if the brand had a living, expressive character?',
    description: 'Rhino was chosen as more than a literal reference to the brand name. Its physical strength, weight, confidence, and unmistakable silhouette offered an opportunity to build a character that embodies the energy of the brand in a human and expressive way.',
    heroColor: '#be3956',
    textColor: '#ffffff',
    bannerVisualText: 'RHINO ENERGY',
    heroImage: asset('projects/rhino-energy.jpg'),
    galleryImages: [
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1a25f8254714545.6a8bd82748c3c.png',
        caption: 'Character File 001: "SOMEONE IS WATCHING THE WATERMELONS." — Summer Border Guard poster in watermelon magenta and tactical olive.',
        specLabel: 'CHARACTER FILE 001'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/394ac3254714545.6a8bd8289c04f.png',
        caption: 'Front-facing character portrait showcasing custom tactical vest, watermelon slice insignia, and confident expression.',
        specLabel: 'HERO CHARACTER PORTRAIT'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6e37d254714545.6a8bd8274818d.png',
        caption: 'Character concept exploration: balancing physical rhinoceros strength with approachable human attitude.',
        specLabel: 'CONCEPT EXPLORATION'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/98cffb254714545.6a8bd827488a2.png',
        caption: 'Proportions, facial expression, and posture development for multi-channel campaign adaptability.',
        specLabel: 'SILHOUETTE & POSTURE'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bada00254714545.6a8bd8274974f.png',
        caption: 'Tactile material detailing on fabric vest, metallic chains, and sculpted horn texture.',
        specLabel: 'MATERIAL & STYLING DETAIL'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8adb9c254714545.6a8bd82748fe6.png',
        caption: 'Expressive character poses engineered for social media storytelling, motion, and outdoor OOH posters.',
        specLabel: 'CAMPAIGN EXPRESSIONS'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5221d4254714545.6a8bd82748536.png',
        caption: 'Visual consistency studies ensuring the mascot works seamlessly across beverage cans and digital activations.',
        specLabel: 'BRAND WORLD SYSTEM'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/87ff04254714545.6a8bd82749adf.png',
        caption: 'Closing campaign frame establishing a distinctive visual personality that grows with the brand.',
        specLabel: 'IDENTITY LOCKUP'
      }
    ],
    categoryTag: 'Character Design & Visual Development',
    substrates: ['3D Character Design', 'Visual Development', 'Campaign Key Visuals', 'Beverage Brand World'],
    dimensions: 'Multi-Channel Brand Mascot System',
    tolerance: 'Campaign & Packaging Ready',
    pressMethod: '3D Sculpting, Texturing & Editorial Poster Design',
    colorSystem: 'Watermelon Magenta / Tactical Green / Matte Black',
    highlights: [
      'Avoided generic cartoon tropes by combining physical weight and strength with human attitude',
      'Every detail—from proportions and posture to wardrobe styling—was explored as part of character personality',
      'Engineered to scale beyond a single image across campaigns, social content, packaging, and motion'
    ],
    challenge: 'The challenge was to avoid creating a generic cartoon rhino. The character needed to feel energetic and approachable, while still retaining the physical presence, weight, and strength associated with a rhinoceros.',
    solution: 'From proportions and facial expression to posture, styling, and attitude, each element was crafted to build a character with enough personality and visual consistency to live across campaigns, social content, packaging, and motion.',
    shelfImpact: {
      beforeDesc: 'Conventional energy drink graphics relying on abstract shapes without a relatable brand icon.',
      afterDesc: 'An unmistakable, culturally magnetic mascot universe ready for multi-flavor campaign rollouts.',
      metric: 'File 001',
      metricLabel: 'Scalable Character Universe'
    },
    dielineSpecs: {
      dimensions: 'Character & Poster Series',
      caliper: '3D Visual Development',
      varnish: 'High-Contrast Studio Render',
      embossDepth: 'Tactile Fabric & Skin Detail'
    }
  },
  {
    id: 'rst-lpg-tank',
    title: '45m³ LPG Semi-Trailer Tank — Technical Catalog',
    subtitle: 'Editorial Print Spreads, 3D Cutaway & Engineering Specification Layout',
    sector: 'automotive',
    sectorLabel: 'Automotive & Heavy Industry',
    client: 'MARAL / RST 2026',
    year: '2026',
    behanceUrl: 'https://www.behance.net/gallery/256434075/45m3-LPG-Semi-Trailer-Tank',
    tagline: 'One Tank. Complete System. 45,000 Liters engineered to perform and built to protect.',
    description: 'Multi-page print catalog spreads designed for the MARAL 2026 Cylindrical 45m³ LPG Semi-Trailer Tank. Translates dense pressure-vessel regulations (EN 12493 / ADR), internal baffle engineering, and dimensional schematics into an authoritative editorial publication.',
    heroColor: '#4d535e',
    textColor: '#ffffff',
    bannerVisualText: '45M³ LPG TANK',
    heroImage: asset('projects/rst-lpg-tank.jpg'),
    galleryImages: [
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f7a498256434075.6abc27e6e0f60.jpg',
        caption: 'Spread 01 — "ONE TANK. COMPLETE SYSTEM." Master overview with dimensional blueprint and 45,000L capacity callouts.',
        specLabel: 'CATALOG SPREAD 01'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/566617256434075.6abc27e6e1750.jpg',
        caption: 'Spread 02 — "TECHNICAL SPECIFICATION / ENGINEERED TANK BODY" featuring translucent X-ray cutaway of internal baffles.',
        specLabel: 'CATALOG SPREAD 02 // CUTAWAY'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3c7a85256434075.6abc27e6e1fc1.jpg',
        caption: 'Spread 03 — Detailed safety valve architecture, rear cabinet engineering, and international certification codes.',
        specLabel: 'CATALOG SPREAD 03 // SYSTEMS'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3dd269256434075.6abc27e6e28a0.jpg',
        caption: 'Perspective presentation of the open print publication demonstrating clean grid alignment and vast white space.',
        specLabel: 'PRINT PUBLICATION MOCKUP'
      }
    ],
    categoryTag: 'Technical Catalog & 3D Cutaway',
    substrates: ['Print Catalog Design', '3D X-Ray Cutaway Visualization', 'Technical Information Architecture'],
    dimensions: 'Double-Page Layflat Spreads',
    tolerance: 'EN 12493 / ADR Certified Specs',
    pressMethod: 'Editorial Print Layout & 3D Industrial CGI',
    colorSystem: 'Industrial Silver / Safety Vermilion Red / Crisp Paper White',
    highlights: [
      'Photorealistic translucent 3D tank cutaway revealing internal wave-breaker baffles and chassis integration',
      'Clean Swiss editorial grid organizing complex pressure, temperature, and weight specifications effortlessly',
      'Balanced negative space that gives heavy hazardous-cargo machinery an executive, trustworthy presence'
    ],
    challenge: 'Heavy industrial tankers involve dense engineering tables (design pressure 1.72 Mpa, EN-10028-3 steel specs, weld efficiency) that typically overwhelm buyers in cluttered spec sheets.',
    solution: 'We paired structured typographic hierarchy with a centerpiece 3D X-ray cutaway, allowing fleet executives and safety engineers to grasp both structural integrity and exact specifications at a glance.',
    shelfImpact: {
      beforeDesc: 'Raw CAD tables and text-heavy PDF documents that failed to convey manufacturing sophistication.',
      afterDesc: 'A flagship print and digital catalog spread that positions MARAL 2026 as a tier-one international manufacturer.',
      metric: '45,000 L',
      metricLabel: 'Master Technical Publication'
    },
    dielineSpecs: {
      dimensions: 'Double-Page Print Catalog',
      caliper: 'Editorial Publication System',
      varnish: 'Clean Matte Paper Aesthetic',
      embossDepth: 'Isometric 3D Cutaway'
    }
  },
  {
    id: 'trailer-systems',
    title: 'Complete Trailer Systems — Connected Ecosystem',
    subtitle: 'Multi-Spread Technical Brochure & Isometric Component Architecture',
    sector: 'automotive',
    sectorLabel: 'Automotive & Heavy Industry',
    client: 'RST Automotive (2026 Edition)',
    year: '2026',
    behanceUrl: 'https://www.behance.net/gallery/256412865/Complete-trailer-systems',
    tagline: 'Every system. One trusted source. One trailer. Complete confidence.',
    description: 'Comprehensive brochure and double-page catalog system for RST Automotive. Showcases the complete connected trailer ecosystem—integrating axle parts, EBS braking systems, air suspension, lighting, and landing gear into one cohesive visual narrative.',
    heroColor: '#2b3f54',
    textColor: '#ffffff',
    bannerVisualText: 'ONE TRAILER',
    heroImage: asset('projects/trailer-systems.jpg'),
    galleryImages: [
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5242c6256412865.6ad4aeec798fe.png',
        caption: 'Master double-page spread: "ONE TRAILER. COMPLETE CONFIDENCE." with connected node callouts across the axle assembly.',
        specLabel: 'CONNECTED ECOSYSTEM SPREAD'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/01ff12256412865.6ad4aeec7a20a.png',
        caption: 'Dual open brochure perspective showcasing "EVERY SYSTEM. ONE TRUSTED SOURCE." and full chassis X-ray diagram.',
        specLabel: 'DUAL CATALOG PRESENTATION'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2ca09a256412865.6ad4aeec79021.png',
        caption: 'Chassis ghost-render spread illustrating how braking, suspension, and electrical modules synchronize.',
        specLabel: 'CHASSIS X-RAY SPREAD'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8c5fe8256412865.6ad4aeec79d62.png',
        caption: 'Editorial cover and back-cover layout with QR digital catalog integration and clean industrial typography.',
        specLabel: 'BROCHURE EXTERIOR'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/de8ccd256412865.6ad4aeec78b9e.png',
        caption: 'Close-up of isometric component callouts: brake calipers, air springs, slack adjusters, and EBS control units.',
        specLabel: 'INFOMAP DETAIL'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/adb239256412865.6ad4aeec7a5db.png',
        caption: 'Full sequence overview demonstrating visual rhythm across consecutive catalog spreads.',
        specLabel: 'EDITORIAL RHYTHM'
      }
    ],
    categoryTag: 'Systems Catalog & Brochure Design',
    substrates: ['Print Brochure Architecture', 'Isometric System Diagrams', 'B2B Fleet Literature'],
    dimensions: 'Multi-Page Gatefold Brochure',
    tolerance: 'Integrated Fleet Ecosystem',
    pressMethod: 'Editorial Design & 3D Technical Illustration',
    colorSystem: 'Steel Slate Blue / Signal Orange / Clean Studio White',
    highlights: [
      'Diagrammatic node lines connecting individual spare parts to the central axle and chassis architecture',
      'Translucent X-ray trailer visualization showing where every subsystem lives on the vehicle',
      'Clear, authoritative B2B messaging ("Every System. One Trusted Source.")'
    ],
    challenge: 'Communicating that RST supplies the entire interconnected trailer ecosystem—not just isolated parts—without making the page look like a crowded spare-parts price list.',
    solution: 'We designed an architectural infographic spread where color-coded pathways link each precision component directly to a centerpiece 3D assembly.',
    shelfImpact: {
      beforeDesc: 'Separate flyers for individual parts that failed to cross-sell complete trailer systems.',
      afterDesc: 'A unified ecosystem publication that presents RST as a single-source engineering partner.',
      metric: '360°',
      metricLabel: 'Connected System Architecture'
    },
    dielineSpecs: {
      dimensions: 'Double-Page Brochure System',
      caliper: 'Corporate Technical Print',
      varnish: 'Clean Editorial Finish',
      embossDepth: 'Isometric Diagram System'
    }
  },
  {
    id: 'rst-spare-parts',
    title: 'RST Purchasing — Heavy Vehicle Brake & Spare Parts',
    subtitle: 'Studio Knolling Photography Direction & Website Slider Series',
    sector: 'automotive',
    sectorLabel: 'Automotive & Heavy Industry',
    client: 'RST Purchasing',
    year: '2026',
    behanceUrl: 'https://www.behance.net/gallery/256434747/Website-slider-semi-trailer-spare-parts-RST-purchasing',
    tagline: 'Every component matters — durable brake solutions for heavy vehicles.',
    description: 'Clean, architectural product presentation and website slider series for RST Purchasing semi-trailer spare parts. Features top-down studio knolling of brake shoes, friction linings, calipers, slack adjusters, and hardware on pure white negative space.',
    heroColor: '#454952',
    textColor: '#f7f8f9',
    bannerVisualText: 'BRAKE SOLUTIONS',
    heroImage: asset('projects/rst-spare-parts.jpg'),
    galleryImages: [
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9528d2256434747.6abc2e597ff97.jpg',
        caption: 'Slide 01 — "DURABLE BRAKE SOLUTIONS FOR HEAVY VEHICLES: Stability, Strength, and Superior Stopping Performance."',
        specLabel: 'SLIDER 01 // BRAKE SHOES'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4924aa256434747.6abc2cc050991.jpg',
        caption: 'Slide 02 — "EVERY COMPONENT MATTERS: A Complete Range of Axle and Braking Components."',
        specLabel: 'SLIDER 02 // CALIPER & PADS'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2b76df256434747.6abc2cc0512a4.jpg',
        caption: 'Slide 03 — Precision hardware, rollers, springs, and pins arranged with geometric studio discipline.',
        specLabel: 'SLIDER 03 // HARDWARE KITS'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0eed1f256434747.6abc2cc051653.jpg',
        caption: 'Slide 04 — Complete braking and suspension component family staged with soft natural contact shadows.',
        specLabel: 'SLIDER 04 // FULL RANGE'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d74d8b256434747.6abc2cc050e1f.jpg',
        caption: 'Responsive web header presentation showing clean typographic alignment and generous white space.',
        specLabel: 'DIGITAL INTERFACE VIEW'
      }
    ],
    categoryTag: 'Product Direction & Web Sliders',
    substrates: ['Website Slider Design', 'Studio Knolling Direction', 'Industrial Product Presentation'],
    dimensions: 'Widescreen E-Commerce & Web Banners',
    tolerance: 'Heavy Vehicle Spares',
    pressMethod: 'High-Key Studio Staging & Minimalist Grid',
    colorSystem: 'Pure Studio White / Cast Iron Charcoal / Precision Silver',
    highlights: [
      'High-key white negative space that turns rugged cast-iron brake parts into clean gallery objects',
      'Organized knolling compositions that allow buyers to inspect every spring, pin, and lining clearly',
      'Bold condensed headlines paired with concise functional subcopy'
    ],
    challenge: 'Industrial spare parts websites often look cluttered and chaotic, making it difficult for B2B buyers to appreciate component build quality.',
    solution: 'By organizing components with minimalist knolling geometry on expansive white backgrounds, we created instant visual clarity and elevated brand trust.',
    shelfImpact: {
      beforeDesc: 'Inconsistent vendor photos with distracting backgrounds on digital storefronts.',
      afterDesc: 'A cohesive, gallery-clean slider series that highlights every mechanical detail.',
      metric: '5 Plates',
      metricLabel: 'Complete Web Slider Series'
    },
    dielineSpecs: {
      dimensions: 'Widescreen Web Slider Format',
      caliper: 'Digital Brand Asset Suite',
      varnish: 'High-Key Studio Lighting',
      embossDepth: 'Precision Knolling Layout'
    }
  },
  {
    id: 'semi-trailer-parts',
    title: 'RST Maral Moscow — Complete Semi-Trailer Parts',
    subtitle: 'Print Catalog Cover System & Special Offer Bundle Brochure',
    sector: 'automotive',
    sectorLabel: 'Automotive & Heavy Industry',
    client: 'RST Maral Moscow',
    year: '2026',
    behanceUrl: 'https://www.behance.net/gallery/256411105/Complete-Semi-trailer-parts',
    tagline: 'Everything your trailer needs in one pack — complete semi-trailer parts catalog.',
    description: 'Editorial catalog cover and spread design for RST Maral Moscow. Presents a unified commercial package combining axle sets, EBS modulator kits, landing gears, air tanks, and fifth-wheel kingpins in a structured B2B publication.',
    heroColor: '#172230',
    textColor: '#f0f4f9',
    bannerVisualText: 'COMPLETE PARTS',
    heroImage: asset('projects/semi-trailer-parts.jpg'),
    galleryImages: [
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e3f9c9256411105.6abbb3ee06a8a.jpg',
        caption: 'Overhead editorial presentation of the RST Maral Moscow Special Offer catalog covers and component matrix.',
        specLabel: 'CATALOG COVER SYSTEM'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2600e2256411105.6abbb3ee06e6a.jpg',
        caption: 'Detailed view of the structured product grid showcasing axles, air tanks, landing legs, and braking kits.',
        specLabel: 'COMPONENT MATRIX SPREAD'
      }
    ],
    categoryTag: 'Print Catalog & B2B Brochure',
    substrates: ['Print Catalog Design', 'Promotional Bundle Layout', 'B2B Sales Collateral'],
    dimensions: 'Print Publication & Brochure',
    tolerance: 'Fleet Spares Package',
    pressMethod: 'Offset Print Publication & 3D Mockup Presentation',
    colorSystem: 'Deep Navy Slate / Safety Red Accent / Studio White',
    highlights: [
      'Clear "In One Pack" bundle proposition tailored for fleet procurement managers',
      'Clean modular framing of diverse mechanical parts on a unified layout grid',
      'Bilingual-ready international trade aesthetic for the Moscow commercial transport market'
    ],
    challenge: 'Presenting dozens of different trailer spare parts of varying sizes—from full axles down to small valves—on a single cover without visual chaos.',
    solution: 'We established a balanced architectural grid with clear visual breathing room and bold typographic anchors that guide the buyer’s eye effortlessly.',
    shelfImpact: {
      beforeDesc: 'Fragmented price lists requiring fleet buyers to source parts separately.',
      afterDesc: 'An authoritative all-in-one catalog presentation simplifying bulk fleet orders.',
      metric: 'All-in-One',
      metricLabel: 'Fleet Parts Catalog System'
    },
    dielineSpecs: {
      dimensions: 'A4 Commercial Catalog',
      caliper: 'Print Brochure Suite',
      varnish: 'Matte Laminated Cover',
      embossDepth: 'Modular Grid Architecture'
    }
  },
  {
    id: 'rst-maral-moscow',
    title: 'RST Maral Moscow — LPG Trailer Sales Stories',
    subtitle: 'Industrial Social Media Storytelling & 3D Tanker Visualization',
    sector: 'automotive',
    sectorLabel: 'Automotive & Heavy Industry',
    client: 'RST Maral Moscow',
    year: '2026',
    behanceUrl: 'https://www.behance.net/gallery/255660131/LPG-Trailer-Sales-Stories-RST-Maral-Moscow',
    tagline: 'Presenting a technical industrial product in a clear, straightforward format for digital sales communication.',
    description: 'Three visual sales story sequences created for RST Maral Moscow to promote heavy LPG semi-trailers for the Russian market. Designed to translate complex tanker engineering into clear, high-converting vertical stories for social media and direct B2B messaging.',
    heroColor: '#0b1626',
    textColor: '#e8f0fc',
    bannerVisualText: 'LPG SALES STORIES',
    heroImage: asset('projects/rst-maral-moscow.jpg'),
    galleryImages: [
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/36efa7255660131.6aa6b4a7bde53.png',
        caption: 'Hero 3D visualization of the RST Maral Moscow LPG semi-trailer tanker in dramatic highway lighting.',
        specLabel: 'HERO 3D VISUALIZATION'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/db8b9e255660131.6aa6b4a7bd6d5.png',
        caption: 'Sales Story Sequence 01 — Highlighting tank capacity, Russian market compliance, and structural reliability.',
        specLabel: 'SALES STORY 01'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d7de66255660131.6aa6b4a7bdae0.png',
        caption: 'Sales Story Sequence 02 — Close-up engineering callouts formatted for mobile executive viewing.',
        specLabel: 'SALES STORY 02'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7d47d8255660131.6aa6b4a83bda4.png',
        caption: 'Sales Story Sequence 03 — Clear call-to-action and technical summary for fleet buyers.',
        specLabel: 'SALES STORY 03'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cb07d8255660131.6aa6b4a83c426.png',
        caption: 'Multi-screen vertical layout overview showing visual cohesion across the three campaign stories.',
        specLabel: 'CAMPAIGN OVERVIEW'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/da8c58255660131.6aa6b4a83ca3e.png',
        caption: 'Detail study of Cyrillic typographic hierarchy and industrial badge integration.',
        specLabel: 'TYPOGRAPHIC DETAIL'
      }
    ],
    categoryTag: 'Digital Sales Stories & 3D Visuals',
    substrates: ['Social Media Sales Stories', '3D Vehicle Visualization', 'B2B Digital Communication'],
    dimensions: 'Vertical 9:16 Story Series',
    tolerance: 'Russian Export Market',
    pressMethod: '3D CGI Rendering & Mobile Editorial Layout',
    colorSystem: 'Deep Highway Blue / Hazard Red / Clean White',
    highlights: [
      'Three cohesive sales story arcs tailored specifically for the Russian LPG transport market',
      'Transformed a heavy technical product into a clear, mobile-first visual format for fast B2B communication',
      'Cinematic 3D tanker staging that conveys scale, safety, and road readiness'
    ],
    challenge: 'Heavy industrial LPG trailers are complex B2B products rarely communicated well on social media, where cluttered text fails to hold executive attention.',
    solution: 'We distilled key purchasing drivers into three structured visual story sequences with bold Cyrillic typography and dramatic 3D vehicle angles.',
    shelfImpact: {
      beforeDesc: 'Static technical PDFs unsuitable for modern mobile B2B sales channels.',
      afterDesc: 'High-impact visual sales stories ready for Instagram, Telegram, and direct client outreach.',
      metric: '3 Stories',
      metricLabel: 'Targeted B2B Sales Campaign'
    },
    dielineSpecs: {
      dimensions: '9:16 Vertical Story Architecture',
      caliper: 'Digital Campaign System',
      varnish: 'Cinematic 3D Lighting',
      embossDepth: 'Cyrillic Editorial Grid'
    }
  },
  {
    id: 'hexagon-agency',
    title: 'Hexagon Agency — Logo & Visual Identity',
    subtitle: 'Geometric Brand Mark & Corporate Identity for Content Agency',
    sector: 'b2b',
    sectorLabel: 'B2B & Corporate',
    client: 'Hexagon Content Creating Agency',
    year: '2024',
    behanceUrl: 'https://www.behance.net/gallery/182968605/Logo-design-for-Hexagon-content-creating-agency',
    tagline: 'Context is key, margin is freedom — geometric logo architecture for a modern content agency.',
    description: 'Logo design and visual identity system created for Hexagon Content Creating Agency. Built around an interlocking geometric hexagon mark and the core philosophy "Context is key, margin is freedom."',
    heroColor: '#0a1a14',
    textColor: '#eef3f0',
    bannerVisualText: 'HEXAGON',
    heroImage: asset('projects/hexagon-agency.jpg'),
    galleryImages: [
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2795ad182968605.65f6f92eddf79.jpg',
        caption: 'Primary brand lockup: Hexagon logomark with motto "Context is key, margin is freedom" on deep emerald backdrop.',
        specLabel: 'PRIMARY BRAND LOCKUP'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/adb37a182968605.65f6f92edf0cf.jpg',
        caption: 'Cobalt blue architectural pattern exploration pairing geometric cellular grids with the Hexagon mark.',
        specLabel: 'PATTERN & GRID SYSTEM'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/44b845182968605.65f6f92edcac4.jpg',
        caption: 'Geometric construction and negative-space diamond core at the center of the dual-hexagon symbol.',
        specLabel: 'LOGO CONSTRUCTION'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f45fce182968605.653775fb5a587.jpg',
        caption: 'Colorway variations demonstrating legibility across dark corporate and vibrant digital backgrounds.',
        specLabel: 'CHROMATIC ADAPTABILITY'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7aed6182968605.653775fb5b12c.jpg',
        caption: 'Brand identity application across digital touchpoints and agency communication templates.',
        specLabel: 'IDENTITY APPLICATION'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/01e2c7182968605.65f6f92edb4c2.jpg',
        caption: 'Minimalist symbol lockup highlighting structural balance and modern typographic pairing.',
        specLabel: 'SYMBOL ISOLATION'
      }
    ],
    categoryTag: 'Logo Design & Brand Identity',
    substrates: ['Logo Design', 'Geometric Grid Construction', 'Brand Motto & Verbal Lockup', 'Visual Identity'],
    dimensions: 'Scalable Vector Identity System',
    tolerance: 'Print & Digital Ready',
    pressMethod: 'Vector Identity & Brand Pattern System',
    colorSystem: 'Vibrant Emerald Green / Electric Cobalt Blue / Pure White',
    highlights: [
      'Dual interlocking hexagon symbol creating a dynamic negative-space diamond at its center',
      'Memorable philosophical tagline ("Context is key, margin is freedom") integrated into the lockup',
      'Modular hexagonal pattern language for backgrounds, pitch decks, and social media'
    ],
    challenge: 'Designing a distinctive geometric logo for a content creation agency that feels structured, modern, and conceptually tied to framing and negative space.',
    solution: 'We crafted an overlapping dual-hexagon mark that visually represents both "context" (the outer frame) and "margin" (the inner negative space).',
    shelfImpact: {
      beforeDesc: 'Lack of a unified visual symbol to anchor the agency’s strategic positioning.',
      afterDesc: 'A sharp, recognizable geometric identity system adaptable across all digital media.',
      metric: 'Identity',
      metricLabel: 'Complete Logo & Pattern System'
    },
    dielineSpecs: {
      dimensions: 'Master Vector Grid',
      caliper: 'Corporate Identity Suite',
      varnish: 'High-Contrast Digital Palette',
      embossDepth: 'Geometric Negative Space'
    }
  },
  {
    id: 'eco-lubricant',
    title: 'Eco-Formulated Lubricant — Logo & Label Design',
    subtitle: 'Brand Identity, Monogram Architecture & Motor Oil Packaging',
    sector: 'automotive',
    sectorLabel: 'Automotive & Heavy Industry',
    client: 'Eco-Formulated Lubricants',
    year: '2024',
    behanceUrl: 'https://www.behance.net/gallery/182273071/logo-and-label-design-for-Eco-Formulated-Lubricant',
    tagline: 'High-quality, sustainable motor oil branding engineered to protect engines and reduce environmental impact.',
    description: 'Logo and packaging label design for Eco-Formulated Lubricants, a company producing eco-friendly motor oils for cars and commercial vehicles using sustainable formulations.',
    heroColor: '#2b211d',
    textColor: '#f9f3ec',
    bannerVisualText: 'ECO LUBRICANT',
    heroImage: asset('projects/eco-lubricant.jpg'),
    galleryImages: [
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/074402182273071.652ab4bededf7.jpg',
        caption: 'Eco-Formulated Lubricant logotype set against macro amber motor oil droplets in warm studio light.',
        specLabel: 'HERO BRAND EXPRESSION'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9b9e68182273071.652ab4bee3865.jpg',
        caption: 'Faceted "E" monogram progression over cobalt-toned engine maintenance photography.',
        specLabel: 'MONOGRAM PROGRESSION'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/261000182273071.652aad5324b34.jpg',
        caption: 'Master wordmark and "Motor Oil" badge lockup over dark industrial engine bay.',
        specLabel: 'PRIMARY WORDMARK'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cfa523182273071.652ab4bee1e9d.jpg',
        caption: 'Geometric stencil construction of the custom typography and angled speed cuts.',
        specLabel: 'TYPOGRAPHIC ANATOMY'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c2b2a2182273071.652ab4bee4457.jpg',
        caption: 'Packaging label system and canister branding designed for high visibility on service station shelves.',
        specLabel: 'LABEL APPLICATION'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/920964182273071.652ab4bedfc0a.jpg',
        caption: 'Brand color palette and dynamic diagonal grid derived from the monogram geometry.',
        specLabel: 'COLOR & GRID SYSTEM'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/edb224182273071.652ab4bee2cc2.jpg',
        caption: 'Merchandise, mechanic workwear, and industrial touchpoint applications.',
        specLabel: 'BRAND TOUCHPOINTS'
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9c3ac4182273071.652ab4bee0b94.png',
        caption: 'Complete visual identity overview uniting automotive power with environmental responsibility.',
        specLabel: 'IDENTITY OVERVIEW'
      }
    ],
    categoryTag: 'Logo & Packaging Label Design',
    substrates: ['Logo & Monogram Design', 'Custom Stencil Typography', 'Motor Oil Label Architecture', 'Brand Guidelines'],
    dimensions: 'Canister Label & Identity System',
    tolerance: 'Sustainable Automotive Care',
    pressMethod: 'Custom Vector Typography & Packaging Layout',
    colorSystem: 'Amber Oil Gold / Deep Cobalt Blue / Signal Red & White',
    highlights: [
      'Custom-cut stencil logotype where the "E" and "L" share dynamic diagonal precision',
      'Bridges heavy-duty automotive lubrication with clean, forward-looking eco-formulation cues',
      'Versatile monogram system that works standalone on bottle caps, labels, and mechanic uniforms'
    ],
    challenge: 'Eco-friendly motor oils often look either too weak and botanical for car mechanics, or too aggressive and polluting like traditional petroleum brands.',
    solution: 'We engineered a bold, precision-cut geometric logotype paired with rich macro oil photography—communicating both mechanical protection and modern clean technology.',
    shelfImpact: {
      beforeDesc: 'Generic lubricant graphics that failed to communicate sustainable innovation.',
      afterDesc: 'A distinctive, modern automotive identity system across canisters and workshop collateral.',
      metric: '8 Plates',
      metricLabel: 'Complete Brand & Label System'
    },
    dielineSpecs: {
      dimensions: 'Motor Oil Bottle & Label Suite',
      caliper: 'Packaging & Identity System',
      varnish: 'Oil-Resistant Label Finish',
      embossDepth: 'Custom Stencil Monogram'
    }
  }
];

export const ENGAGEMENT_PLANS: EngagementPlan[] = [
  {
    id: 'brand-shelf-audit',
    name: 'Brand & Visual Audit',
    badge: 'DIAGNOSTIC • RAPID TURNAROUND',
    price: '$2,500',
    cadence: 'one-time diagnostic',
    description: 'Focused review of your current brand identity, packaging shelf presence, catalog clarity, or social content system — delivered with a clear creative roadmap.',
    buttonText: 'REQUEST AUDIT →',
    isPrimary: false,
    timeline: '1 Week turnaround',
    deliverables: [
      'Comprehensive visual audit of existing packaging, catalogs, or social presence',
      'Category & competitor visual positioning review',
      'Actionable creative direction deck with prioritized design opportunities',
      '1:1 strategy session with Saeed Jabbari'
    ]
  },
  {
    id: 'packaging-architecture',
    name: 'Identity, Packaging & Catalogs',
    badge: 'CORE PROJECT COMMISSION',
    price: '$8,500',
    cadence: 'complete project delivery',
    description: 'End-to-end execution for brand identity systems, multi-SKU product packaging, or master technical catalogs — from initial concept to print-ready delivery.',
    buttonText: 'DISCUSS PROJECT →',
    isPrimary: true,
    timeline: '4–6 Weeks delivery',
    deliverables: [
      'Complete brand identity, packaging concept, or multi-spread catalog design',
      'High-resolution 3D product renders and studio presentation mockups',
      'Typography, color palette, and visual guideline system',
      'Print-ready artwork files and digital asset suites'
    ]
  },
  {
    id: 'fractional-creative-direction',
    name: 'Monthly Creative Collaboration',
    badge: 'ONGOING ART DIRECTION',
    price: '$4,200',
    cadence: 'per month collaboration',
    description: 'Ongoing monthly creative direction, social media content systems, campaign sliders, and new product visual rollouts — modeled on our long-term brand partnerships.',
    buttonText: 'INQUIRE COLLABORATION →',
    isPrimary: false,
    timeline: 'Monthly retainer',
    deliverables: [
      'Monthly concept development, art direction, and social carousel systems',
      'Website hero sliders, exhibition graphics, and digital sales stories',
      'New SKU packaging extensions and seasonal campaign visuals',
      'Direct ongoing collaboration with Saeed Jabbari'
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'rethinking-fmcg-choice',
    title: 'Rethinking Choice in FMCG: Connecting Flavor, Mood & Occasion',
    sector: 'FMCG & Packaging',
    date: 'October 2026',
    readTime: '4 min read',
    excerpt: 'When every brand in a mature category already competes on flavor variety, how can packaging shift the logic of consumer choice? Lessons from the MOOD MINT concept.',
    content: [
      'In mature global FMCG categories like breath mints and confectionery, flavor variety, sugar-free claims, and pocket formats are already established territory.',
      'When every competitor is shouting a flavor name, the shelf becomes visually repetitive. We asked a simpler question: What if a product was chosen by mood and moment, rather than flavor alone?',
      'By connecting Mood + Flavor + Occasion into one coherent product system—using tactile matte metal tins and minimalist debossed expressions—the package transforms from a disposable commodity into a personal daily ritual.',
      'True shelf prominence comes not from louder graphics, but from reframing how the consumer relates to the object in their hand.'
    ],
    keyTakeaway: 'Connect emotional mood and occasion with structural packaging form to break out of commodity flavor wars.'
  },
  {
    id: 'consistent-skincare-content',
    title: 'Building a Scalable Visual Content System for Modern Skincare Brands',
    sector: 'Cosmetics & Art Direction',
    date: 'September 2026',
    readTime: '5 min read',
    excerpt: 'Why monthly skincare collaborations require more than isolated pretty pictures — and how warm lighting, natural textures, and calm compositions build lasting brand equity.',
    content: [
      'Working on ongoing monthly content for skincare brands like The Nuvé involves much more than producing isolated, visually appealing posts.',
      'The core creative challenge is building a recognizable visual system that scales across dozens of carousels and product launches while preserving the authentic texture of the formulation and the brand’s calm communication language.',
      'By anchoring the visual world in warm sunlight, honest skin luminosity, organic linen and stone surfaces, and restrained editorial typography, every piece of content immediately signals the brand before the viewer even reads the logo.',
      'Consistency in atmosphere is what turns casual social scrollers into high-trust skincare customers.'
    ],
    keyTakeaway: 'Establish a disciplined palette of lighting, skin texture, and typography so every monthly post strengthens the core brand world.'
  },
  {
    id: 'industrial-catalogs-clarity',
    title: 'Quiet Strength: Elevating Heavy Industrial & Automotive Catalogs',
    sector: 'Automotive & Heavy Industry',
    date: 'August 2026',
    readTime: '5 min read',
    excerpt: 'Engineering sometimes does not speak — it simply works. How negative space, 3D X-ray cutaways, and studio knolling transform semi-trailer parts and LPG tankers.',
    content: [
      'Heavy commercial vehicle parts—semi-trailer axles, brake linings, and 45m³ LPG tankers—are often presented in dense, cluttered catalogs that overwhelm fleet buyers.',
      'Across our work for RST Purchasing and Maral Moscow, we applied the principle of "Quiet Strength": isolating precision metal components in dramatic studio lighting with generous negative space.',
      'For complex systems like connected trailer ecosystems and pressure vessels, translucent 3D X-ray cutaways and clean isometric node diagrams replace dry tables, allowing engineers and executives to grasp the complete system in seconds.',
      'When industrial design respects negative space, technical authority speaks for itself.'
    ],
    keyTakeaway: 'Use generous negative space, studio knolling, and 3D cutaways to turn complex engineering into effortless executive clarity.'
  },
  {
    id: 'character-driven-branding',
    title: 'Beyond the Cartoon Mascot: Expressive Character Development in Beverage Branding',
    sector: 'Character & Visual Development',
    date: 'July 2026',
    readTime: '4 min read',
    excerpt: 'What would an energy drink look like if the brand had a living character? Exploring weight, posture, and attitude in the Rhino Energy visual development study.',
    content: [
      'When developing the character universe for Rhino Energy, the primary challenge was avoiding a flat, generic cartoon mascot.',
      'The rhinoceros was chosen for its physical weight, confidence, and unmistakable silhouette. Every element—from facial proportions and ear silhouette to the custom watermelon-badged tactical vest—was explored as an extension of the brand’s rebellious, high-energy attitude.',
      'A successful brand character must work far beyond a single poster: it needs enough structural personality to live across aluminum cans, outdoor billboards, motion graphics, and social storytelling.'
    ],
    keyTakeaway: 'Build brand characters with sculptural weight and distinct wardrobe styling so they scale across packaging, OOH, and motion.'
  }
];
