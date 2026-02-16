
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-neonBlue rounded-lg flex items-center justify-center neon-border">
                <span className="text-black font-black text-xl italic">BN</span>
              </div>
              <span className="text-2xl font-oswald font-bold tracking-tighter uppercase italic text-white">
                Bulk <span className="text-neonBlue">Nation</span>
              </span>
            </a>
            <p className="text-gray-500 font-medium leading-relaxed">
              Premium supplement store in Adilabad providing 100% original fitness products at the lowest prices.
            </p>
          </div>

          <div>
            <h4 className="text-white font-oswald font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-500 hover:text-neonBlue transition-colors font-bold uppercase text-xs">Home</a></li>
              <li><a href="#categories" className="text-gray-500 hover:text-neonBlue transition-colors font-bold uppercase text-xs">Categories</a></li>
              <li><a href="#products" className="text-gray-500 hover:text-neonBlue transition-colors font-bold uppercase text-xs">Supplements</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-neonBlue transition-colors font-bold uppercase text-xs">Store Locator</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-oswald font-bold uppercase tracking-widest mb-6">Payment</h4>
            <ul className="space-y-4">
              <li className="text-gray-500 font-bold uppercase text-xs">Cash on Delivery</li>
              <li className="text-gray-500 font-bold uppercase text-xs">UPI (Google Pay/PhonePe)</li>
              <li className="text-gray-500 font-bold uppercase text-xs">Bank Transfer</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-oswald font-bold uppercase tracking-widest mb-6">Store Info</h4>
            <ul className="space-y-4">
              <li className="text-gray-500 font-medium text-sm">Owner: {BUSINESS_INFO.owner}</li>
              <li className="text-gray-500 font-medium text-sm">{BUSINESS_INFO.location}</li>
              <li className="text-gray-500 font-medium text-sm">{BUSINESS_INFO.hours}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Bulk Nation Supplements. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">Build Strong. Live Powerful.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
