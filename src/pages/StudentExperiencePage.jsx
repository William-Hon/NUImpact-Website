import ProgramCard from '../components/ProgramCard'
import HeroSection from '../sections/HeroSection'
import ApplySection from '../sections/ApplySection'
import StudentTestimonials from '../sections/StudentTestimonials'
import { testimonials } from '../data/StudentTestimonials'
import Footer from '../sections/Footer'

const StudentExperiencePage = () => {

  return (
    <>
      <HeroSection title="Student Experience"
        subtitle="Life inside the team."
        backgroundImage="assets/images/nuimpact-fund-team.png"
        variant="page" />

      <section style={{ padding: '4rem 4rem', maxWidth: '1500px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          <ProgramCard
            title="Fund."
            description="Our fund team provides hands-on finance and social impact education through a rigorous semester-long investment process undertaken by teams of student analysts. The NUImpact Fund program culminates in final investment recommendations and potential capital deployment to a local mission-driven company."
            bgColor="var(--color-nuimpact-blue)"
            bgImage="assets/images/nuimpact-fund-team-alt.jpg"
          />
          <ProgramCard
            title="Programming."
            description="Our programming team hosts speaker events and workshops, leading to a robust professional network and the development of new co-op opportunities for engaged students interested in impact investing."
            bgColor="var(--color-nuimpact-light-blue)"
            bgImage="assets/images/nuimpact-programming-team.jpg"
          />
        </div>
      </section>
      <StudentTestimonials testimonials={testimonials} />
      <ApplySection />
      <Footer />
    </>
  )
}

export default StudentExperiencePage