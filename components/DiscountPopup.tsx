
import React from 'react';
import { X, Gift } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const DiscountPopup: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-darkBg border border-neonBlue/30 rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(0,229,255,0.2)]">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-500 hover:text-white transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-12 text-center space-y-6">
          <div className="w-24 h-24 bg-neonPink/10 border border-neonPink/20 rounded-full flex items-center justify-center mx-auto animate-bounce-slow">
            <Gift className="w-12 h-12 text-neonPink" />
          </div>

          <div className="space-y-2">
            <h3 className="text-4xl font-oswald font-black text-white uppercase italic tracking-tighter">
              GET <span className="text-neonBlue">10% OFF</span>
            </h3>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">On Your First Order At Bulk Nation</p>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed">
            Grab authentic supplements at an unbeatable price. Mention code <span className="text-neonBlue font-black">BULK10</span> on WhatsApp!
          </p>

          <a 
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi Karan, I want to claim my 10% first-order discount! (Code: BULK10)`}
            className="block w-full py-5 bg-neonPink text-white font-black uppercase italic tracking-widest rounded-2xl hover:bg-white hover:text-neonPink transition-all shadow-[0_10px_30px_rgba(255,0,127,0.3)]"
          >
            Claim Discount Now
          </a>

          <button 
            onClick={onClose}
            className="text-gray-600 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors"
          >
            No thanks, I'll pay full price
          </button>
        </div>

        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-neonBlue/20 blur-3xl rounded-full"></div>
      </div>
    </div>
  );
};

export default DiscountPopup;
