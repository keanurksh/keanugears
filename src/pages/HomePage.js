import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedReviews from '../components/FeaturedReviews';
import CTASection from '../components/CTASection';
import PageTransition from '../components/PageTransition';

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedReviews />
      <CTASection />
    </>
  );
}

export default HomePage;