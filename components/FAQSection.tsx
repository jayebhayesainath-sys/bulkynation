
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-neonBlue font-black uppercase tracking-widest text-sm mb-2">Help Center</h2>
        <h3 className="text-4xl font-oswald font-black text-white uppercase italic tracking-tighter">
          Common <span className="text-neonPink">Questions</span>
        </h3>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, idx) => (
          <div 
            key={idx} 
            className={`border rounded-2xl transition-all duration-300 ${
              openIndex === idx ? 'bg-cardBg border-neonBlue/30' : 'bg-transparent border-white/5 hover:border-white/20'
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full px-8 py-6 flex items-center justify-between text-left"
            >
              <span className="text-lg font-bold text-white pr-8">{faq.question}</span>
              {openIndex === idx ? (
                <Minus className="w-6 h-6 text-neonBlue shrink-0" />
              ) : (
                <Plus className="w-6 h-6 text-gray-500 shrink-0" />
              )}
            </button>
            {openIndex === idx && (
              <div className="px-8 pb-6 animate-fade-in">
                <p className="text-gray-400 leading-relaxed font-medium">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
