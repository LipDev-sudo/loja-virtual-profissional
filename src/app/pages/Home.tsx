import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ProductGrid } from '../components/ProductGrid';
import { FeaturesSection } from '../components/FeaturesSection';
import { AdminMockup } from '../components/AdminMockup';
import { Footer } from '../components/Footer';
import { Cart } from '../components/Cart';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductGrid />
      <FeaturesSection />
      <AdminMockup />
      <Footer />
      <Cart />
    </div>
  );
};
