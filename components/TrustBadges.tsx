
import React from 'react';
import { TRUST_BADGES } from '../constants';

const TrustBadges: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {TRUST_BADGES.map((badge, idx) => (
          <div key={idx} className="group p-6 rounded-2xl bg-cardBg/40 border border-white/5 hover:border-neonBlue/30 hover:bg-cardBg transition-all">
            <div className="mb-4 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform">
              {badge.icon}
            </div>
            <h3 className="text-xl font-oswald font-bold text-white uppercase tracking-tight mb-1">
              {badge.title}
            </h3>
            <p className="text-gray-500 text-sm font-medium">
              {badge.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadges;
