
import React from 'react';
import { SERVICES_DATA } from '../constants';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features, icon }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 shadow-sm transition-all group hover:-translate-y-1">
    <div className="w-14 h-14 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-slate-900 group-hover:text-white">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 mb-8 leading-relaxed">
      {description}
    </p>
    <ul className="space-y-3">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start text-sm text-slate-600">
          <svg className="w-5 h-5 text-slate-400 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Core Offerings</h2>
            <p className="text-xl text-slate-600">
              Powerful, human-centered AI tools designed for service industries.
            </p>
          </div>
          <a href="#demo" className="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-slate-600 hover:border-slate-400 transition-colors">
            View All Capabilities
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
          
          {/* Call to Action Card */}
          <div className="bg-slate-900 p-8 rounded-3xl text-white flex flex-col justify-center items-center text-center space-y-6">
            <h3 className="text-2xl font-bold">Need something custom?</h3>
            <p className="text-slate-300">We build tailored workflows for unique business logic.</p>
            <a href="#demo" className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
