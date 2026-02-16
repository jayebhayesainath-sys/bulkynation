
import React from 'react';
import { CATEGORIES } from '../constants';

const CategorySection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-neonPink font-black uppercase tracking-widest text-sm mb-2">Shop By Type</h2>
        <h3 className="text-4xl md:text-5xl font-oswald font-black text-white uppercase italic tracking-tighter">
          Top <span className="text-neonBlue">Categories</span>
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {CATEGORIES.map((cat) => (
          <a
            key={cat.id}
            href={`#products`}
            className="group relative h-48 rounded-3xl overflow-hidden bg-cardBg/50 flex flex-col items-center justify-center border border-white/5 hover:border-neonPink transition-all"
          >
            <span className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
              {cat.icon}
            </span>
            <span className="text-white font-oswald font-bold uppercase tracking-wider text-lg">
              {cat.name}
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-neonPink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
