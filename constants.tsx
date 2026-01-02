
import React from 'react';

export const Icons = {
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  ),
  Users: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  Calculator: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="8" x2="16" y1="10" y2="10"/><line x1="10" x2="10" y1="14" y2="18"/><line x1="8" x2="12" y1="16" y2="16"/><line x1="14" x2="14" y1="14" y2="18"/></svg>
  ),
  MessageSquare: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  ),
  Zap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  ),
  CheckCircle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
  ),
  Clock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  ),
  TrendingUp: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
  ),
  Smile: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
  ),
  Layout: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
  ),
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  ),
  MapPin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  )
};

export const SERVICES_DATA = [
  {
    title: "AI Receptionist",
    description: "Your business never sleeps. Our AI receptionist ensures every caller is greeted instantly, anytime.",
    features: [
      "Answers calls 24/7/365",
      "Schedules appointments directly in your CRM",
      "Collects crucial customer intake info",
      "Perfect for medical and legal intake"
    ],
    icon: <Icons.Phone />
  },
  {
    title: "Websites",
    description: "Your website should be your best employee. We build modern, conversion-optimized sites.",
    features: [
      "Integrated AI booking assistants",
      "Specialized legal & medical landing pages",
      "Mobile-first, lightning-fast design",
      "Automated lead capture & CRM sync"
    ],
    icon: <Icons.Layout />
  },
  {
    title: "AI Lead Qualifier",
    description: "Stop wasting time on low-intent inquiries. Screen and filter leads automatically.",
    features: [
      "Asks smart, qualifying questions",
      "Identifies high-value opportunities",
      "Syncs instantly with your sales pipeline",
      "Filters out tire-kickers and spam"
    ],
    icon: <Icons.Users />
  },
  {
    title: "AI Quote Generator",
    description: "Speed is the key to winning contracts. Provide instant pricing based on your custom logic.",
    features: [
      "Calculates quotes in seconds",
      "Uses your specific pricing rules",
      "Reduces manual follow-up emails",
      "Generates professional PDF estimates"
    ],
    icon: <Icons.Calculator />
  },
  {
    title: "AI Social & DMs",
    description: "Stay responsive where your customers are. Capture leads from Instagram, Facebook, and Web Chat.",
    features: [
      "Instant replies to DMs and comments",
      "Nurtures leads directly in the chat",
      "Hand-off notifications for your team",
      "Captures contact details automatically"
    ],
    icon: <Icons.MessageSquare />
  },
  {
    title: "Custom AI Automations",
    description: "Deep-level efficiency tailored specifically for your unique business operations.",
    features: [
      "Full CRM & ERP integrations",
      "Automated follow-up sequences",
      "Internal notification workflows",
      "Custom data processing tasks"
    ],
    icon: <Icons.Zap />
  }
];

export const FAQS = [
  {
    question: "Will AI replace my existing team?",
    answer: "Not at all. We view AI as a supportive teammate that handles the repetitive, mundane tasks. This frees up your human staff to focus on high-value activities, complex problem solving, and building real relationships with your customers."
  },
  {
    question: "Can you help my Law Firm or Medical Practice?",
    answer: "Yes! We specialize in highly regulated service industries. Our AI receptionists are trained to handle intake with precision and professionalism, ensuring every potential client is qualified and scheduled according to your rules."
  },
  {
    question: "Do you build the website for me too?",
    answer: "Absolutely. We don't just plug in tools; we build the entire high-converting foundation. If you need a new website that is 'AI-native' from day one, we design and launch it for you."
  },
  {
    question: "Is it difficult to set up?",
    answer: "We handle the entire implementation. From the initial logic design to CRM integration and testing, our team ensures a seamless rollout. You just need to tell us how your business works."
  }
];
