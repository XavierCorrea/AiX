
// Fix: Import React to resolve 'Cannot find namespace React' errors when using React.ReactNode
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

export interface BenefitProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface IndustryProps {
  name: string;
  useCase: string;
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}