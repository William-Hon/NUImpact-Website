import React from 'react'
import HeroSection from '../sections/HeroSection'
import ImageCarouselSection from '../components/ImageCarousel.jsx'
import OurValuesSection from '../sections/OurValuesSection.jsx'
import Footer from '../sections/Footer.jsx'
const OurStoryPage = () => {

  const slides = [
    {
      image: "/assets/images/founding-team.jpg",
      year: "2016",
      heading: "The Beginning",
      description:
        "After pitching investment portfolios to leading impact investing funds in Boston for a class project, Northeastern alumni Mindi Chen and Ruby Khan founded NUImpact in Spring 2016."
    },
    {
      image: "/assets/images/nuimpact-irm-presentation.png",
      year: "2017",
      heading: "First Fund",
      description:
        "The NUImpact founders won a $10k donation from Thrive – a student-run university organization which improves financial literacy on campuses. Soon after Thrive finalized its investment, Northeastern alumni took notice and made incremental donations into the NUImpact fund."
    },
    {
      image: "/assets/images/nusis-full-group.png",
      year: "2019",
      heading: "Inaugural Sustainable Investing Summit",
      description:
        "The first NUSIS took place on November 16, 2019, with 120+ attendees representing 12 universities across the East Coast. The event included 4 breakout sessions and 2 keynote addresses with 26 speakers."
    },
    {
      image: "/assets/images/eat-well.png",
      year: "2020",
      heading: "First Investment",
      description:
        "In 2020, the NUImpact Fund invested in EatWell, a preventative care solution that treats food insecurity and reduces healthcare costs for chronic patients. The Fund invested $25k in a SAFE Note as a part of the company’s pre-seed round."
    },
    {
      image: "/assets/images/nuimpact-fund-team.png",
      year: "2023",
      heading: "New Portfolio Management Team",
      description:
        "The new Portfolio Management team was created in Spring 2023 as a point of contact with NUImpact’s six portfolio companies. The PM team supports portfolio companies with marketing, ad hoc consulting, and corporate / university partnerships."
    },
  ];

  return (
    <>
      <HeroSection
        title="Our Story"
        subtitle="A decade of delivering impact."
        backgroundImage="/assets/images/nusis-presentation.png"
        variant="page"
      />
      <ImageCarouselSection
        slides={slides}
      />
      <OurValuesSection />
      <Footer />
    </>

  )
}

export default OurStoryPage