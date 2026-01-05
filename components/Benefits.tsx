
import React from 'react';
import { Icons } from '../constants';

const BenefitItem: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="flex gap-6">
    <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-900">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-600 leading-relaxed">{text}</p>
    </div>
  </div>
);

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">AI as your new <span className="gradient-text">supportive teammate</span>.</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We don't replace humans—we empower them. AIX removes the boring stuff so your team can focus on complex tasks that actually grow the bottom line.
            </p>

            <div className="space-y-10">
              <BenefitItem 
                icon={<Icons.Clock />}
                title="Save up to 20+ Hours Weekly"
                text="Reclaim your time from phone calls, quoting, and simple scheduling. Let your team focus on the work that requires their unique expertise."
              />
              <BenefitItem 
                icon={<Icons.TrendingUp />}
                title="Increase booking rate up to 40%"
                text="When you respond instantly, you win more business. Never lose another lead because you were busy on a different job."
              />
              <BenefitItem 
                icon={<Icons.Smile />}
                title="Peace of Mind, 24/7"
                text="Rest easy knowing your business is always open. AIX handles inquiries while you're sleeping, on vacation, or in a meeting."
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-slate-50 rounded-[40px] -rotate-2 -z-10"></div>
            <div className="bg-white p-8 rounded-[32px] shadow-2xl shadow-slate-200 border border-slate-100">
              <div className="flex items-center justify-between mb-8">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Dashboard View</span>
              </div>
              
              <div className="space-y-6">
                <div className="h-32 bg-slate-50 rounded-2xl p-6 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-400">TOTAL SAVED TIME</span>
                    <div className="text-3xl font-extrabold text-slate-900 mt-1">128 Hours</div>
                  </div>
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <Icons.TrendingUp />
                  </div>
                </div>
                
                <div className="h-28 bg-slate-50 rounded-2xl p-6">
                  <span className="text-xs font-bold text-slate-400">LEADS QUALIFIED</span>
                  <div className="text-2xl font-extrabold text-slate-900 mt-1">482</div>
                </div>

                <div className="p-4 bg-green-50 text-green-700 text-sm font-semibold rounded-xl flex items-center">
                  <span className="mr-2">✨</span> AI Receptionist handled 12 calls in the last 24 hours.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
