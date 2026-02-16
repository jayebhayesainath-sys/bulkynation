
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const ReviewSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-neonPink font-black uppercase tracking-widest text-sm mb-2">Real Feedback</h2>
        <h3 className="text-4xl md:text-5xl font-oswald font-black text-white uppercase italic tracking-tighter">
          What Our <span className="text-neonBlue">Nation Says</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((review) => (
          <div key={review.id} className="bg-cardBg/50 p-8 rounded-3xl border border-white/5 relative group hover:bg-cardBg transition-all">
            <Quote className="absolute top-6 right-8 w-10 h-10 text-white/5 group-hover:text-neonPink/20 transition-colors" />
            <div className="flex items-center gap-4 mb-6">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-14 h-14 rounded-full border-2 border-neonBlue"
              />
              <div>
                <h4 className="text-white font-bold">{review.name}</h4>
                <p className="text-neonBlue text-xs uppercase font-bold tracking-widest">{review.role}</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-gray-400 font-medium leading-relaxed italic">
              "{review.content}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
