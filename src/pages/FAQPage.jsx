import React from 'react'
import HeroSection from '../sections/HeroSection'
import FAQSection from '../sections/FAQSection'
import Footer from '../sections/Footer'
const FAQPage = () => {
  return (
    <>
      <HeroSection
        title="Frequently Asked Questions"
        backgroundImage="assets/images/nuimpact-guy-talking.png"
        variant="page"
      />
      <FAQSection />
      <Footer />
    </>
  )
}

export default FAQPage