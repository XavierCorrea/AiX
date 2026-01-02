
import React from 'react';

const DemoForm: React.FC = () => {
  return (
    <section id="demo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[40px] p-8 md:p-20 text-white overflow-hidden relative">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full -mr-20 -mt-20 blur-3xl opacity-50"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[1.1]">Ready to free up <span className="text-slate-400">your team?</span></h2>
              <p className="text-xl text-slate-400 mb-8 max-w-md">
                Book a free 15-minute automation audit. We'll show you exactly where AIX can save you time and money.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-slate-300">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  <span>Free ROI Audit</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  <span>No technical setup required</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  <span>Launch in as little as 7 days</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl text-slate-900 shadow-2xl">
              <form 
                action="https://formspree.io/f/mzdzennb" 
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Business Name</label>
                  <input 
                    type="text" 
                    name="business_name"
                    required
                    placeholder="Luxe Salon & Spa" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Work Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="john@luxesalon.com" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">What's your biggest pain point?</label>
                  <select 
                    name="pain_point"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all"
                  >
                    <option value="missed_calls">Missed calls</option>
                    <option value="lead_followup">Lead follow-up</option>
                    <option value="admin_tasks">Repetitive admin tasks</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all mt-4">
                  Book My Free Demo
                </button>
                <p className="text-center text-xs text-slate-400">
                  No obligation. No hard selling. Just solutions.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;
