
import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
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

          {/* Form for Netlify */}
          <div className="bg-cardBg/40 p-8 rounded-[2.5rem] border border-white/5 relative group">
            <h4 className="text-white font-oswald font-bold uppercase mb-6 tracking-widest text-xl">Get Expert Guidance</h4>
            <form name="contact-inquiry" method="POST" data-netlify="true" className="space-y-4">
              <input type="hidden" name="form-name" value="contact-inquiry" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-neonBlue outline-none text-white" 
                />
                <input 
                  type="text" 
                  name="goal" 
                  placeholder="Your Fitness Goal" 
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-neonBlue outline-none text-white" 
                />
              </div>
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone Number" 
                required 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-neonBlue outline-none text-white" 
              />
              <textarea 
                name="message" 
                placeholder="What supplements are you looking for?" 
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-neonBlue outline-none text-white resize-none"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-neonBlue text-black font-black uppercase italic py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-neonPink hover:text-white transition-all shadow-[0_0_20px_rgba(0,229,255,0.2)]"
              >
                Send Inquiry <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
            <div className="flex items-start gap-4">
              <MapPin className="text-neonBlue w-6 h-6 mt-1" />
              <div>
                <h5 className="text-white font-bold mb-1">Location</h5>
                <p className="text-gray-500 text-sm">{BUSINESS_INFO.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="text-neonPink w-6 h-6 mt-1" />
              <div>
                <h5 className="text-white font-bold mb-1">Hours</h5>
                <p className="text-gray-500 text-sm">{BUSINESS_INFO.hours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-full min-h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15222.0125438258!2d78.51441589417088!3d19.664082269412586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd32626e2a2202f%3A0xc077180556f8f553!2sAdilabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
            allowFullScreen 
            loading="lazy" 
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
