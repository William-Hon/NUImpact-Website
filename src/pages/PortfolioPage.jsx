import React from 'react'
import HeroSection from '../sections/HeroSection'
import PressReleaseSection from '../sections/PressReleaseSection'
import InvestmentTimelineSection from '../sections/InvestmentTimelineSection'
import PortfolioSlider from '../sections/PortfolioSlider'
import investments from '../data/Investments'
import Footer from '../sections/Footer'
import ScrollReveal from '../components/ScrollReveal'

const PortfolioPage = () => {
  return (
    <>
      <HeroSection
        title="Our Portfolio"
        subtitle="Backing ideas that matter."
        backgroundImage="/assets/images/judges.png"
        variant="page" />
      <PressReleaseSection />
      <InvestmentTimelineSection investments={investments} />
      <ScrollReveal>
        <PortfolioSlider investments={investments} />
      </ScrollReveal>
      <Footer />
    </>
  )
}

export default PortfolioPage