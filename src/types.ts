/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  clientSector: string;
  description: string;
  statHighlight: string;
  technologies: string[];
  longDescription: string;
  results: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  technologies: string[];
  details: string;
  features: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface TrainingCourse {
  id: string;
  title: string;
  iconName: string;
  duration: string;
  description: string;
  topics: string[];
}

export interface InternshipTrack {
  id: string;
  title: string;
  iconName: string;
  duration: string;
  description: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  rating: number;
  feedback: string;
  author: string;
  position: string;
  company: string;
}

export interface TrustedBrand {
  name: string;
  type: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
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

export interface VerifiedCertificate {
  certificateId: string;
  recipientName: string;
  type: "training" | "internship";
  courseName: string;
  grade: string;
  issueDate: string;
  uuid: string;
  sha256: string;
}
