export type NavPage = 'home' | 'work' | 'services' | 'process' | 'pricing' | 'insights' | 'articles' | 'project-detail';

export type SectorCategory = 'cosmetics' | 'fmcg' | 'b2b' | 'automotive';

export interface ProjectGalleryImage {
  url: string;
  caption: string;
  specLabel: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  sector: SectorCategory;
  sectorLabel: string;
  year: string;
  tagline: string;
  description: string;
  heroColor: string;
  textColor: string;
  bannerVisualText: string;
  heroImage: string;
  galleryImages: ProjectGalleryImage[];
  behanceUrl?: string;
  client?: string;
  categoryTag: string;
  substrates: string[];
  dimensions: string;
  tolerance: string;
  pressMethod: string;
  colorSystem: string;
  highlights: string[];
  challenge: string;
  solution: string;
  shelfImpact: {
    beforeDesc: string;
    afterDesc: string;
    metric: string;
    metricLabel: string;
  };
  dielineSpecs: {
    dimensions: string;
    caliper: string;
    fluteType?: string;
    varnish: string;
    embossDepth: string;
  };
}

export interface SectorItem {
  id: SectorCategory;
  name: string;
  subtitle: string;
  headerBg: string;
  description: string;
  tags: string[];
  clientTypes: string[];
  caseCount: number;
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface EngagementPlan {
  id: string;
  name: string;
  badge: string;
  price: string;
  cadence: string;
  description: string;
  buttonText: string;
  isPrimary?: boolean;
  deliverables: string[];
  timeline: string;
}

export interface Article {
  id: string;
  title: string;
  sector: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  keyTakeaway: string;
}

export interface AuditSubmission {
  brandName: string;
  sector: string;
  currentShelfIssues: string[];
  distributionChannel: string;
  skuCount: string;
  primarySubstrate: string;
  contactEmail: string;
}

export interface BriefSubmission {
  fullName: string;
  companyName: string;
  email: string;
  sector: string;
  projectType: string[];
  skuCount: string;
  primarySubstrate: string;
  estimatedTimeline: string;
  budgetTier: string;
  notes: string;
}
