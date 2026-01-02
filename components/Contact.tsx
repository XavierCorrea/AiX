
import React, { useState, useRef } from 'react';
import { Icons } from '../constants';

const Contact: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-1">
            {/* Professional Picture Box with Upload Feature */}
            <div className="mb-10 group">
              <div 
                className="relative w-48 h-48 md:w-56 md:h-56 cursor-pointer"
                onClick={triggerFileInput}
              >
                <div className="absolute inset-0 bg-slate-900 rounded-[2rem] rotate-6 transition-transform group-hover:rotate-3 duration-500"></div>
                <div className="absolute inset-0 bg-slate-100 rounded-[2rem] border-2 border-slate-900 flex items-center justify-center overflow-hidden z-10">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover animate-fade-in" />
                  ) : (
                    <div className="text-slate-400 text-center px-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Upload Portrait</span>
                    </div>
                  )}
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">Change Photo</span>
                  </div>
                </div>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageUpload} 
                  accept="image/*" 
                  className="hidden" 
                />
              </div>

              {/* Elegant Title Block */}
              <div className="mt-12 space-y-3">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
                    Founder & Principal
                  </h3>
                  <div className="flex items-center space-x-2 mt-3">
                    <div className="h-[1px] w-6 bg-slate-900"></div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Lead Automation Strategist</span>
                  </div>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[240px]">
                  Specializing in designing high-performance AI systems for service-based businesses looking to scale without friction.
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-slate-100 mr-12">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-slate-50 text-slate-900 rounded-xl flex items-center justify-center border border-slate-100">
                  <Icons.MapPin />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Operations</p>
                  <p className="text-slate-900 font-semibold text-sm">Orlando, FL | Remote Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-slate-50 rounded-[2.5rem] p-8 md:p-16 border border-slate-100 shadow-sm relative overflow-hidden">
             {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16 blur-3xl opacity-50"></div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Direct Inquiries</h2>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed max-w-xl">
              Ready to explore a custom automation plan for your firm? Send a message and let's discuss your specific goals.
            </p>
            
            <form 
              action="https://formspree.io/f/mzdzennb" 
              method="POST"
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all shadow-sm placeholder:text-slate-300" 
                    placeholder="E.g. Alexander Hamilton" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Work Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all shadow-sm placeholder:text-slate-300" 
                    placeholder="alex@firm.com" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">How can we help scale your business?</label>
                <textarea 
                  name="message"
                  required
                  rows={4} 
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all resize-none shadow-sm placeholder:text-slate-300" 
                  placeholder="Tell us about your current bottlenecks..."
                ></textarea>
                <button type="submit" className="w-full mt-6 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-slate-200">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
