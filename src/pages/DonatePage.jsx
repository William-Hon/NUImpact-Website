import React from 'react'
import DonateHeroSection from '../sections/DonateHeroSection'
import DonationSection from '../sections/DonationSection'
import Footer from '../sections/Footer'
import ScrollReveal from '../components/ScrollReveal'
const DonatePage = () => {
  return (
    <>
      <DonateHeroSection />
      <ScrollReveal>
        <DonationSection />
      </ScrollReveal>
      <Footer />
    </>
  )
}

export default DonatePage