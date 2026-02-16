
import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neonBlue/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neonPink/20 rounded-full blur-[120px] -z-10 animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-8 text-center lg:text-left z-10">
          <div className="inline-flex items-center bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-neonPink rounded-full animate-ping mr-2"></span>
            <span className="text-neonPink text-xs font-bold uppercase tracking-widest">
              Limited Offer: 10% Discount on First Order
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-oswald font-black leading-tight tracking-tighter uppercase italic">
            <span className="block text-white">BUILD <span className="text-neonBlue neon-text-blue">STRONG.</span></span>
            <span className="block text-white">LIVE <span className="text-neonPink neon-text-pink">POWERFUL.</span></span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 font-medium">
            Discover 100% authentic gym supplements at the lowest prices in Adilabad. Trusted by athletes, built for your goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#products"
              className="w-full sm:w-auto px-10 py-5 bg-neonBlue text-black font-black text-lg uppercase italic rounded-xl hover:bg-white hover:-translate-y-1 transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.3)]"
            >
              <ShoppingBag className="w-6 h-6" />
              Shop Now
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              className="w-full sm:w-auto px-10 py-5 border-2 border-white/10 text-white font-black text-lg uppercase italic rounded-xl hover:border-neonPink hover:text-neonPink hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
            >
              WhatsApp Order
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-8 pt-8">
            <div className="text-center lg:text-left">
              <div className="text-3xl font-oswald font-black text-white">100%</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Authentic</div>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-oswald font-black text-white">24/7</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Expert Support</div>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-oswald font-black text-white">FREE</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Delivery*</div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative z-10 w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-500">
            {/* Using a high-quality fitness placeholder */}
            <img
              src="https://picsum.photos/seed/fitness-model/800/1000"
              alt="Fitness Athlete"
              className="rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-white/5"
            />
            {/* Floating Card UI */}
            <div className="absolute -bottom-6 -left-6 bg-cardBg p-4 rounded-2xl border border-white/10 shadow-2xl animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-neonBlue/20 rounded-full flex items-center justify-center">
                  <span className="text-neonBlue text-xl font-bold">✓</span>
                </div>
                <div>
                  <div className="text-white font-bold">Certified Original</div>
                  <div className="text-gray-400 text-xs uppercase font-bold tracking-widest">Lab Tested Products</div>
                </div>
              </div>
            </div>
          </div>
          {/* Background shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full -z-10 rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-white/5 rounded-full -z-10 -rotate-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
