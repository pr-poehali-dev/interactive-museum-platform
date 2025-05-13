import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedWorks from "@/components/home/FeaturedWorks";
import Features from "@/components/home/Features";
import CallToAction from "@/components/home/CallToAction";
import FeaturedCarousel from "@/components/home/FeaturedCarousel";
import UploadCTA from "@/components/home/UploadCTA";
import NewsAndContests from "@/components/home/NewsAndContests";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedCarousel />
        <Categories />
        <UploadCTA />
        <FeaturedWorks />
        <NewsAndContests />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
