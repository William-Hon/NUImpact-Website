import React from 'react'
import ProgramCard from '../components/ProgramCard'
import HeroSection from '../sections/HeroSection'
import ApplySection from '../sections/ApplySection'
import StudentTestimonials from '../sections/StudentTestimonials'
import { testimonials } from '../data/StudentTestimonials'
import Footer from '../sections/Footer'
import ScrollReveal from '../components/ScrollReveal'
const StudentExperiencePage = () => {

  const [activeCard, setActiveCard] = React.useState(null);

  const handleCardToggle = (cardName) => {
    setActiveCard(prev => (prev === cardName ? null : cardName));
  };

  return (
    <div className="min-h-screen bg-white relative selection:bg-[var(--color-nuimpact-blue)] selection:text-white">
      {/* Universal Background Gradient (Enhanced) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] md:w-[60vw] md:h-[60vw] bg-[var(--color-nuimpact-light-blue)]/40 rounded-full blur-[100px] opacity-70" />
        <div className="absolute bottom-[10%] -right-[10%] w-[600px] h-[600px] md:w-[50vw] md:h-[50vw] bg-[var(--color-nuimpact-blue)]/40 rounded-full blur-[100px] opacity-70" />
      </div>

      <div className="relative z-10">
        <HeroSection title="Student Experience"
          subtitle="Life inside the team."
          backgroundImage="assets/images/nuimpact-fund-team.png"
          variant="page" />

        <ScrollReveal>
          <section className="py-12 px-4 md:p-16 max-w-[1500px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProgramCard
                title="Fund."
                description="Our fund team provides hands-on finance and social impact education through a rigorous semester-long investment process undertaken by teams of student analysts. The NUImpact Fund program culminates in final investment recommendations and potential capital deployment to a local mission-driven company."
                bgColor="var(--color-nuimpact-blue)"
                bgImage="assets/images/nuimpact-fund-team-alt.jpg"
                isActive={activeCard === 'fund'}
                onToggle={() => handleCardToggle('fund')}
              />
              <ProgramCard
                title="Programming."
                description="Our programming team hosts speaker events and workshops, leading to a robust professional network and the development of new co-op opportunities for engaged students interested in impact investing."
                bgColor="var(--color-nuimpact-light-blue)"
                bgImage="assets/images/nuimpact-programming-team.jpg"
                isActive={activeCard === 'programming'}
                onToggle={() => handleCardToggle('programming')}
              />
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <ApplySection />
        </ScrollReveal>

        <ScrollReveal>
          <StudentTestimonials testimonials={testimonials} />
        </ScrollReveal>

        <Footer />
      </div>
    </div>
  )
}

export default StudentExperiencePage