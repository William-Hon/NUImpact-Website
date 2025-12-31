import React from 'react'
import HeroSection from '../sections/HeroSection'
import Footer from '../sections/Footer'
import ImageSlider from '../components/ImageSlider'
import ScrollReveal from '../components/ScrollReveal'
const OurImpactPage = () => {
  const spotlightItems = [
    {
      image: "/assets/images/2025-impact-report.png",
      title: "Sector Spotlight Fall 2025",
      description: "Take a look into our Sector Spotlight for Fall 2025.",
      buttonText: "Read The Report!",
      buttonLink: "#"
    },
    {
      image: "/assets/images/2024-V2-impact-report.png",
      title: "Sector Spotlight, Fall 2024, Volume II",
      description: "Our Research Analysts conducted in-depth analyses shedding light on critical market dynamics within each of their five respective verticals. These reports enrich our fund's diligence and measurements, allowing for more strategic investment decisions.",
      buttonText: "Read the Report!",
      buttonLink: "#"
    },
    {
      image: "/assets/images/2022-impact-report.png",
      title: "Sector Spotlight, Fall 2022",
      description: "Take a look into our Sector Spotlight for Fall 2022!",
      buttonText: "Read the Report!",
      buttonLink: "#"
    },
    {
      image: "/assets/images/2019-impact-report.png",
      title: "Sector Spotlight, Fall 2019",
      description: "Take a look into our Sector Spotlight for Fall 2019!",
      buttonText: "Read the Report!",
      buttonLink: "#"
    }

  ];

  return (
    <div className="min-h-screen bg-white relative selection:bg-[var(--color-nuimpact-blue)] selection:text-white">
      {/* Universal Background Gradient (Enhanced) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] md:w-[60vw] md:h-[60vw] bg-[var(--color-nuimpact-light-blue)]/40 rounded-full blur-[100px] opacity-70" />
        <div className="absolute bottom-[10%] -right-[10%] w-[600px] h-[600px] md:w-[50vw] md:h-[50vw] bg-[var(--color-nuimpact-blue)]/40 rounded-full blur-[100px] opacity-70" />
      </div>

      <div className="relative z-10">
        <HeroSection
          title="Research & Reports"
          subtitle="Analysis with intent."
          backgroundImage="/assets/images/nuimpact-team-alt.png"
          variant="page"
        />

        <ScrollReveal>
          <section className="bg-transparent py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <ImageSlider
                items={spotlightItems}
                mode="manual"
                gap="gap-8"
                height="aspect-[4/5] md:aspect-[3/4]"
                objectFit="object-cover"
                textColor="text-[var(--color-nuimpact-dark-blue)]"
              />
            </div>
          </section>
        </ScrollReveal>
        <Footer />
      </div>
    </div>
  )
}

export default OurImpactPage