
import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Smartphone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Categories', href: '#categories' },
    { name: 'Shop', href: '#products' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-darkBg/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-neonBlue rounded-lg flex items-center justify-center neon-border group-hover:scale-110 transition-transform">
                <span className="text-black font-black text-xl italic">BN</span>
              </div>
              <span className="text-2xl font-oswald font-bold tracking-tighter uppercase italic">
                Bulk <span className="text-neonBlue">Nation</span>
              </span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-neonBlue px-3 py-2 text-sm font-semibold uppercase tracking-widest transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-neonPink transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              className="bg-neonBlue text-black px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-white hover:scale-105 transition-all flex items-center gap-2"
            >
              <Smartphone className="w-4 h-4" />
              Order on WhatsApp
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-darkBg border-b border-white/5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-neonBlue block px-3 py-4 text-lg font-bold uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              className="w-full bg-neonPink text-white text-center block px-3 py-4 text-lg font-bold uppercase rounded-lg mt-4"
            >
              WhatsApp Order
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
