
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold">A</div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-900">AIX</span>
            </div>
            <p className="text-slate-600 max-w-sm mb-6 leading-relaxed">
              Human-centered AI automation for the modern service business. We help you scale while staying focused on what matters.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Solutions</h4>
            <ul className="space-y-4 text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">AI Receptionist</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Lead Qualifier</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Quote Generator</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Custom Automation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4 text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">About AIX</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-slate-400">
          <p>© 2024 AIX Automation Agency. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-600">Twitter</a>
            <a href="#" className="hover:text-slate-600">LinkedIn</a>
            <a href="#" className="hover:text-slate-600">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
