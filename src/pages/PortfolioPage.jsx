import React from 'react'
import HeroSection from '../sections/HeroSection'
import InvestmentTimelineSection from '../sections/InvestmentTimelineSection'
import PortfolioSlider from '../sections/PortfolioSlider'
import investments from '../data/Investments'
import Footer from '../sections/Footer'

const PortfolioPage = () => {
  return (
    <>
      <HeroSection
        title="Our Portfolio"
        subtitle="Backing ideas that matter."
        backgroundImage="/assets/images/judges.png"
        variant="page" />
      <InvestmentTimelineSection investments={investments} />
      <PortfolioSlider investments={investments} />
      <Footer />
    </>
  )
}

export default PortfolioPage