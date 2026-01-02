
import React from 'react';

const Step: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-xl font-bold mb-6">
      {number}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">How AIX Works</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We don't just sell tools; we build systems. We take over the technical heavy lifting so you can focus on your craft.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-slate-100 -z-10"></div>
          
          <Step 
            number="1"
            title="Discovery & Audit"
            description="We analyze your current customer journey—where calls are missed, leads are lost, and time is wasted on admin."
          />
          <Step 
            number="2"
            title="Custom Implementation"
            description="We build your AI agents, fine-tune their voice to match your brand, and integrate them directly into your existing tools."
          />
          <Step 
            number="3"
            title="Optimize & Scale"
            description="Our team monitors performance, refines responses, and ensures you're capturing maximum ROI from every interaction."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
