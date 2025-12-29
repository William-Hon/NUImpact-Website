import React from 'react'
import HeroSection from '../sections/HeroSection'
import Footer from '../sections/Footer'
import ImageSlider from '../components/ImageSlider'

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
    <div className="min-h-screen">
      <HeroSection
        title="Research & Reports"
        subtitle="Analysis with intent."
        backgroundImage="/assets/images/nuimpact-team-alt.png"
        variant="page"
      />

      <section className="bg-[#4660aa] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ImageSlider
            items={spotlightItems}
            mode="manual"
            gap="gap-8"
            height="aspect-[4/5] md:aspect-[3/4]"
            objectFit="object-contain"
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default OurImpactPage