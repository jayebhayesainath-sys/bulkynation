
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import CategorySection from './components/CategorySection';
import FeaturedProducts from './components/FeaturedProducts';
import BrandLogos from './components/BrandLogos';
import ReviewSection from './components/ReviewSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DiscountPopup from './components/DiscountPopup';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-neonPink selection:text-white">
      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section className="bg-darkBg py-10">
          <TrustBadges />
        </section>

        <section id="categories" className="py-20 bg-darkBg">
          <CategorySection />
        </section>

        <section id="products" className="py-20 bg-cardBg/30">
          <FeaturedProducts />
        </section>

        <section className="py-12 bg-darkBg overflow-hidden">
          <BrandLogos />
        </section>

        <section id="reviews" className="py-20 bg-darkBg">
          <ReviewSection />
        </section>

        <section id="faq" className="py-20 bg-cardBg/20">
          <FAQSection />
        </section>

        <section id="contact" className="py-20 bg-darkBg">
          <ContactSection />
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <DiscountPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};

export default App;
