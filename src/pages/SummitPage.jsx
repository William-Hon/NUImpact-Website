import React, { useEffect } from 'react';
import SummitHeroSection from '../sections/SummitHeroSection';
import SummitOverviewSection from '../sections/SummitOverviewSection';
import SummitComingSoonSection from '../sections/SummitComingSoonSection';
import SummitFAQSection from '../sections/SummitFAQSection';
import Footer from '../sections/Footer';

const SummitPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SummitHeroSection />
      <SummitOverviewSection />
      <SummitComingSoonSection />
      <SummitFAQSection />
      <Footer />
    </div>
  );
};

export default SummitPage;
