import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import TrendingSection from '../components/TrendingSection';
import TestimonialSection from '../components/TestimonialSection';
import YouMayLikeSection from '../components/YouMayLikeSection';
import LatestNewsSection from '../components/LatestNewsSection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <HeroSection />
      <CategorySection />
      <TrendingSection />
      <TestimonialSection />
      <YouMayLikeSection />
      <LatestNewsSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Home;