
import React from 'react';

const BrandLogos: React.FC = () => {
  const brands = ['MuscleBlaze', 'ON', 'GNC', 'Cellucor', 'Dymatize', 'BigMuscles'];
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-40 hover:opacity-100 transition-opacity">
        {brands.map((brand) => (
          <span 
            key={brand} 
            className="text-2xl md:text-4xl font-oswald font-black text-white uppercase italic tracking-tighter hover:text-neonBlue transition-colors cursor-default"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;
