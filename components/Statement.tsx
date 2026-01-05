
import React from 'react';

const Statement: React.FC = () => {
  return (
    <section className="pt-32 pb-8 lg:pt-40 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-slate-500 leading-relaxed animate-fade-in italic">
          "AI is the new essential to <span className="text-slate-900 font-bold not-italic">automate what you don't love</span>, 
          so you can <span className="gradient-text font-bold not-italic">do what you love more</span>, 
          <span className="text-slate-900 font-bold not-italic">stay creative</span>, 
          and <span className="text-slate-900 border-b border-slate-200 pb-0.5 not-italic">challenge the traditional</span>."
        </h2>
      </div>
    </section>
  );
};

export default Statement;
