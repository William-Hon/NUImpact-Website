import React from 'react'
import HeroSection from '../sections/HeroSection'
import FAQSection from '../sections/FAQSection'
import Footer from '../sections/Footer'
import ScrollReveal from '../components/ScrollReveal'
const FAQPage = () => {
  return (
    <div className="min-h-screen bg-white relative selection:bg-[var(--color-nuimpact-blue)] selection:text-white">
      {/* Universal Background Gradient (Enhanced) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] md:w-[60vw] md:h-[60vw] bg-[var(--color-nuimpact-light-blue)]/40 rounded-full blur-[100px] opacity-70" />
        <div className="absolute bottom-[10%] -right-[10%] w-[600px] h-[600px] md:w-[50vw] md:h-[50vw] bg-[var(--color-nuimpact-blue)]/40 rounded-full blur-[100px] opacity-70" />
      </div>

      <div className="relative z-10">
        <HeroSection
          title="Frequently Asked Questions"
          backgroundImage="assets/images/nuimpact-guy-talking.png"
          variant="page"
        />
        <ScrollReveal>
          <FAQSection />
        </ScrollReveal>
        <Footer />
      </div>
    </div>
  )
}

export default FAQPage