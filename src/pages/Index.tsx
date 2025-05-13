
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedWorks from '@/components/home/FeaturedWorks';
import Categories from '@/components/home/Categories';
import Features from '@/components/home/Features';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-primary-50/30">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <FeaturedWorks />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
