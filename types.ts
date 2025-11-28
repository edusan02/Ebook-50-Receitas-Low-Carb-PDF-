import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface PricingTier {
  name: string;
  price: string;
  originalPrice?: string;
  savings?: string;
  purchasedCount?: string;
  description: string;
  features: string[];
  unavailableFeatures?: string[];
  highlighted?: boolean;
  cta: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}