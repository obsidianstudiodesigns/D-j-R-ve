export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  features: string[];
  image: string;
  popularItems: string[];
  startingPrice?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'weddings' | 'party-boxes' | 'corporate' | 'signage' | 'bespoke';
  categoryLabel: string;
  image: string;
  description: string;
  material: string;
  client?: string;
  dimensions?: string;
  turnaround?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  event: string;
  location: string;
  quote: string;
  rating: number;
  date: string;
}

export interface MaterialOption {
  id: string;
  name: string;
  description: string;
  badge?: string;
  finish: string;
  category: 'acrylic' | 'wood' | 'metal-paper';
}

export interface QuoteConfig {
  serviceType: string;
  material: string;
  quantity: number;
  rushOrder: boolean;
  customDesign: boolean;
  notes: string;
}
