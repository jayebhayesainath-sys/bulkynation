
import React from 'react';
import { Star, ShoppingCart, MessageSquare } from 'lucide-react';
import { PRODUCTS, BUSINESS_INFO } from '../constants';

const FeaturedProducts: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-neonBlue font-black uppercase tracking-widest text-sm mb-2">Top Sellers</h2>
        <h3 className="text-4xl md:text-5xl font-oswald font-black text-white uppercase italic tracking-tighter">
          Featured <span className="text-neonPink">Products</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="group relative bg-cardBg rounded-[2.5rem] p-6 border border-white/5 hover:border-neonBlue/30 transition-all duration-300">
            {product.isBestSeller && (
              <span className="absolute top-8 left-8 bg-neonPink text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full z-10 animate-pulse">
                Best Seller
              </span>
            )}
            
            <div className="relative h-64 mb-6 rounded-2xl overflow-hidden bg-black">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkBg to-transparent opacity-60"></div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-neonBlue text-xs font-bold uppercase tracking-widest mb-1">{product.brand}</p>
                  <h4 className="text-xl font-bold text-white leading-tight">{product.name}</h4>
                </div>
                <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-lg">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-bold text-white">{product.rating}</span>
                </div>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-black text-white">₹{product.price}</span>
                <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-neonBlue hover:text-black py-3 rounded-xl font-bold text-xs uppercase transition-all">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I want to buy ${product.name}`}
                  className="flex items-center justify-center gap-2 bg-neonPink text-white py-3 rounded-xl font-bold text-xs uppercase hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,0,127,0.3)]"
                >
                  <MessageSquare className="w-4 h-4" />
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="px-12 py-5 border-2 border-white/10 hover:border-neonBlue text-white font-bold uppercase italic tracking-widest rounded-2xl transition-all">
          View All Supplements
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
