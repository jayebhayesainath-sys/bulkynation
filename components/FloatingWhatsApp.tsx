
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[90] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all group"
      aria-label="Contact on WhatsApp"
    >
      <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-sm font-black uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
        Order on WhatsApp
      </span>
      <MessageCircle className="w-8 h-8" />
      <span className="absolute -top-1 -right-1 w-5 h-5 bg-neonPink rounded-full flex items-center justify-center animate-pulse">
        <span className="w-2 h-2 bg-white rounded-full"></span>
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
