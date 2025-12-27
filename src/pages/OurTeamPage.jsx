import React from 'react'
import HeroSection from '../sections/HeroSection'
import Footer from '../sections/Footer'
import TeamMemberSection from '../sections/TeamMemberSection'

const OurTeamPage = () => (
  <>
    <HeroSection
      title="Our Team"
      subtitle="The people behind the work."
      backgroundImage="/assets/images/nuimpact-our-team.png"
      variant="page" />
    <TeamMemberSection />
    <Footer />
  </>
)

export default OurTeamPage