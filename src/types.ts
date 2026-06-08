export interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  iconName: string;
  technologies: string[];
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  results: string;
  statHighlight: string;
  longDescription: string;
  clientSector: string;
}

export interface Testimonial {
  id: string;
  author: string;
  position: string;
  company: string;
  rating: number;
  feedback: string;
  avatarBlurHash?: string;
  avatarUrl?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  label: string;
  price: string;
  priceSub?: string;
  features: string[];
  popular: boolean;
  ctaText: string;
}

export interface LeadSubmission {
  id: string;
  name: string;
  email: string;
  company: string;
  serviceType: string;
  budget: string;
  message: string;
  submittedAt: string;
}
