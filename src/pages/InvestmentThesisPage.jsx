import React from 'react';
import HeroSection from '../sections/HeroSection';
import InvestmentPhilosophy from '../sections/InvestmentPhilosophy';
import InvestmentCriteriaSection from '../sections/InvestmentCriteriaSection';
import InvestmentProcessSection from '../sections/InvestmentProcessSection';
import Footer from '../sections/Footer';

const InvestmentThesisPage = () => {

  return (
    <div className="bg-[var(--color-nuimpact-blue)] min-h-screen text-white">
      <HeroSection
        title="Investment Thesis"
        subtitle="Our framework for backing impact."
        backgroundImage="/assets/images/nuimpact-irm-presentation-alt.png"
        variant="page"
      />

      <InvestmentPhilosophy />


      <InvestmentCriteriaSection />

      <InvestmentProcessSection />

      <Footer />
    </div>
  );
};

export default InvestmentThesisPage;
