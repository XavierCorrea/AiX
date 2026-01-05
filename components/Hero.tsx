
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 lg:pb-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 -ml-20 -mb-20"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
          Scale Your Business Without Adding <span className="gradient-text">More Stress</span>.
        </h1>
        
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          AIX helps service-based businesses and more by automating bookings, helping activate your social media presence, building modern websites, and respond instantly to clients—freeing you and your team to focus on closing leads and growing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#demo" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all transform hover:-translate-y-1">
            Automate My Business
          </a>
          <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
            See How AIX Works
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 grayscale opacity-60">
          <div className="flex items-center justify-center text-sm font-bold tracking-widest text-slate-400 uppercase">MED SPA</div>
          <div className="flex items-center justify-center text-sm font-bold tracking-widest text-slate-400 uppercase">HVAC</div>
          <div className="flex items-center justify-center text-sm font-bold tracking-widest text-slate-400 uppercase">DENTAL</div>
          <div className="flex items-center justify-center text-sm font-bold tracking-widest text-slate-400 uppercase">MORE</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
