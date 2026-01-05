
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center">
          
          {/* Contact Card */}
          <div className="w-full bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-sm relative overflow-hidden text-center lg:text-left">
             {/* Architectural background accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200 rounded-full -mr-32 -mt-32 blur-[100px] opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100 rounded-full -ml-24 -mb-24 blur-[80px] opacity-20"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-2xl text-white mb-6 shadow-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Direct Partnership</h2>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl mx-auto font-medium">
                  Ready to eliminate operational friction? Send a message directly to our strategic team to discuss scaling your workflows.
                </p>
              </div>
              
              <form 
                action="https://formspree.io/f/mzdzennb" 
                method="POST"
                className="space-y-8 max-w-2xl mx-auto"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-left">
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Your Identity</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full px-6 py-5 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-4 focus:ring-slate-900/5 focus:border-slate-900 transition-all shadow-sm placeholder:text-slate-300 font-semibold" 
                      placeholder="Name" 
                    />
                  </div>
                  <div className="text-left">
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Professional Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full px-6 py-5 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-4 focus:ring-slate-900/5 focus:border-slate-900 transition-all shadow-sm placeholder:text-slate-300 font-semibold" 
                      placeholder="email@company.com" 
                    />
                  </div>
                </div>
                <div className="text-left">
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3">How can we support your growth?</label>
                  <textarea 
                    name="message"
                    required
                    rows={5} 
                    className="w-full px-6 py-5 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-4 focus:ring-slate-900/5 focus:border-slate-900 transition-all resize-none shadow-sm placeholder:text-slate-300 font-semibold" 
                    placeholder="Describe your current bottlenecks..."
                  ></textarea>
                  <button type="submit" className="w-full mt-8 py-6 bg-slate-900 text-white rounded-[1.5rem] font-black text-xl hover:bg-slate-800 transition-all transform hover:-translate-y-1 shadow-2xl shadow-slate-900/20 active:scale-[0.98]">
                    Initiate Conversation
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Subtle location indicator */}
          <div className="mt-12 text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Orlando, FL • Remote Worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
