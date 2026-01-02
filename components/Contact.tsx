
import React from 'react';
import { Icons } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-1">
            {/* Professional Picture Box */}
            <div className="mb-10 group">
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                <div className="absolute inset-0 bg-slate-900 rounded-3xl rotate-6 transition-transform group-hover:rotate-3 duration-300"></div>
                <div className="absolute inset-0 bg-slate-100 rounded-3xl border-2 border-slate-900 flex items-center justify-center overflow-hidden z-10">
                  <div className="text-slate-400 text-center px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-50">Professional Portrait</span>
                  </div>
                  {/* Image would go here: <img src="..." className="object-cover w-full h-full" /> */}
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-extrabold text-slate-900">Let's talk scale.</h3>
                <p className="text-slate-500 text-sm mt-1">Direct access to our automation lead.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-slate-50 text-slate-900 rounded-lg flex items-center justify-center">
                  <Icons.Mail />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Us</p>
                  <p className="text-slate-900 font-semibold">hello@aix-agency.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-slate-50 text-slate-900 rounded-lg flex items-center justify-center">
                  <Icons.Phone />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Call Us</p>
                  <p className="text-slate-900 font-semibold">+1 (555) 012-3456</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-slate-50 text-slate-900 rounded-lg flex items-center justify-center">
                  <Icons.MapPin />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Location</p>
                  <p className="text-slate-900 font-semibold">Orlando, FL | Remote Globally</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-slate-50 rounded-[32px] p-8 md:p-12 border border-slate-100 shadow-sm">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Direct Inquiries</h2>
            <p className="text-slate-600 mb-8 max-w-lg">
              Have questions about how AIX can work for your specific legal firm or service business? Send a message and we'll get back to you within 24 hours.
            </p>
            <form 
              action="https://formspree.io/f/mzdzennb" 
              method="POST"
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all shadow-sm" 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all shadow-sm" 
                    placeholder="your@email.com" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all resize-none shadow-sm" 
                  placeholder="How can we help?"
                ></textarea>
                <button type="submit" className="w-full mt-4 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-slate-200">
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
