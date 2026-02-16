
import React from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-12">
          <div>
            <h2 className="text-neonPink font-black uppercase tracking-widest text-sm mb-2">Get In Touch</h2>
            <h3 className="text-5xl font-oswald font-black text-white uppercase italic tracking-tighter mb-6">
              Visit <span className="text-neonBlue">Bulk Nation</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-md">
              Step into our store for authentic supplements and expert advice. We're here to fuel your journey.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-neonBlue/10 rounded-2xl flex items-center justify-center shrink-0 border border-neonBlue/20 group-hover:bg-neonBlue group-hover:text-black transition-all">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-white font-black uppercase tracking-widest text-sm mb-1">Store Location</h4>
                <p className="text-gray-400 font-bold">{BUSINESS_INFO.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-neonPink/10 rounded-2xl flex items-center justify-center shrink-0 border border-neonPink/20 group-hover:bg-neonPink group-hover:text-white transition-all">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-white font-black uppercase tracking-widest text-sm mb-1">Call / WhatsApp</h4>
                <p className="text-gray-400 font-bold">{BUSINESS_INFO.phone}</p>
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} className="text-neonBlue text-sm font-bold flex items-center gap-1 mt-1">
                  Chat Now <MessageCircle className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:border-neonBlue transition-all">
                <Clock className="w-7 h-7 text-neonBlue" />
              </div>
              <div>
                <h4 className="text-white font-black uppercase tracking-widest text-sm mb-1">Working Hours</h4>
                <p className="text-gray-400 font-bold">{BUSINESS_INFO.hours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          {/* Simulated Google Map for Adilabad Area */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15222.0125438258!2d78.51441589417088!3d19.664082269412586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd32626e2a2202f%3A0xc077180556f8f553!2sAdilabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border-[12px] border-darkBg/50 rounded-[3rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
