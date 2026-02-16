
import React from 'react';
import { ShieldCheck, Zap, Truck, Users } from 'lucide-react';
import { Product, Testimonial, FAQ } from './types';

export const BUSINESS_INFO = {
  name: 'Bulk Nation',
  tagline: 'Build Strong. Live Powerful.',
  owner: 'Karan',
  location: 'Ravindranagar, Adilabad',
  phone: '+919640095461',
  whatsapp: '919640095461',
  hours: '9:00 AM – 9:00 PM',
};

export const CATEGORIES = [
  { name: 'Whey Protein', icon: '🥤', id: 'whey' },
  { name: 'Mass Gainer', icon: '💪', id: 'gainer' },
  { name: 'Creatine', icon: '⚡', id: 'creatine' },
  { name: 'Pre-Workout', icon: '🔥', id: 'preworkout' },
  { name: 'BCAA', icon: '🧪', id: 'bcaa' },
  { name: 'Multivitamins', icon: '💊', id: 'vitamins' },
  { name: 'Fat Burners', icon: '🏃', id: 'fatburner' },
  { name: 'Protein Bars', icon: '🍫', id: 'bars' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Whey Performance Protein',
    brand: 'MuscleBlaze',
    price: 3499,
    originalPrice: 4299,
    category: 'Whey Protein',
    image: 'https://images.unsplash.com/photo-1579722820308-d74e5719d23e?auto=format&fit=crop&q=80&w=400',
    rating: 4.8,
    isBestSeller: true,
  },
  {
    id: '2',
    name: 'Gold Standard Whey',
    brand: 'Optimum Nutrition',
    price: 6499,
    originalPrice: 7299,
    category: 'Whey Protein',
    image: 'https://images.unsplash.com/photo-1593095191850-2a7330053bb4?auto=format&fit=crop&q=80&w=400',
    rating: 4.9,
  },
  {
    id: '3',
    name: 'Pro Performance Creatine',
    brand: 'GNC',
    price: 999,
    originalPrice: 1499,
    category: 'Creatine',
    image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=400',
    rating: 4.7,
    isBestSeller: true,
  },
  {
    id: '4',
    name: 'Hyper Mass Gainer',
    brand: 'MuscleBlaze',
    price: 2899,
    originalPrice: 3599,
    category: 'Mass Gainer',
    image: 'https://images.unsplash.com/photo-1626245917164-21ed20273ea2?auto=format&fit=crop&q=80&w=400',
    rating: 4.6,
  },
  {
    id: '5',
    name: 'C4 Original Pre-Workout',
    brand: 'Cellucor',
    price: 2199,
    originalPrice: 2899,
    category: 'Pre-Workout',
    image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&q=80&w=400',
    rating: 4.8,
  },
  {
    id: '6',
    name: 'BCAA 6000 Amino',
    brand: 'GNC',
    price: 1899,
    originalPrice: 2299,
    category: 'BCAA',
    image: 'https://images.unsplash.com/photo-1610970881699-44a1b04470f8?auto=format&fit=crop&q=80&w=400',
    rating: 4.5,
  },
];

export const TRUST_BADGES = [
  { icon: <ShieldCheck className="w-8 h-8 text-neonBlue" />, title: '100% Original', desc: 'Sourced directly from brands' },
  { icon: <Zap className="w-8 h-8 text-neonPink" />, title: 'Lowest Price', desc: 'Guaranteed best deals' },
  { icon: <Truck className="w-8 h-8 text-neonBlue" />, title: 'COD Available', desc: 'Pay on delivery' },
  { icon: <Users className="w-8 h-8 text-neonPink" />, title: 'Expert Advice', desc: 'Free supplement guidance' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    role: 'Bodybuilder',
    content: 'Bulk Nation has the best prices in Adilabad. Totally original MB products!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=rahul',
  },
  {
    id: '2',
    name: 'Priya Verma',
    role: 'Fitness Enthusiast',
    content: 'Ordered Whey via WhatsApp, delivered within 4 hours. Amazing service!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=priya',
  },
  {
    id: '3',
    name: 'Karan Singh',
    role: 'Powerlifter',
    content: 'Authentic GNC supplements. The 10% discount on first order is a great touch.',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?u=karan',
  },
];

export const FAQS: FAQ[] = [
  { question: 'Are the products 100% original?', answer: 'Yes, we source all our supplements directly from official importers and authorized brand distributors.' },
  { question: 'How can I place an order?', answer: 'You can order directly through our website, or click the WhatsApp button to chat with Karan and place an order instantly.' },
  { question: 'Do you offer Cash on Delivery?', answer: 'Absolutely! We offer COD across Adilabad for your convenience and trust.' },
  { question: 'Can I get expert guidance?', answer: 'Yes, Karan and our team provide free expert guidance on which supplement fits your fitness goals.' },
];
