
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQItemComp: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-slate-600 transition-colors"
      >
        <span className="text-lg font-bold text-slate-900">{question}</span>
        <svg 
          className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-6 text-slate-600 leading-relaxed animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600">
            Common questions from business owners just like you.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-slate-100">
          {FAQS.map((faq, i) => (
            <FAQItemComp key={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
