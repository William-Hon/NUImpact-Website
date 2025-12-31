import HeroSection from "../sections/HeroSection.jsx";
import ImageSlider from "../components/ImageSlider.jsx";
import StatisticsSection from "../sections/StatisticsSection.jsx";
import PortfolioPreviewSection from "../sections/PortfolioPreviewSection.jsx";
import GetInvolvedSection from "../sections/GetInvolvedSection.jsx";
import InstagramFeed from "../sections/InstagramFeed.jsx";
import Footer from "../sections/Footer.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";

const HomePage = () => {
  const scrollImages = [
    "/assets/images/student.png",
    "/assets/images/nusis-presentation.png",
    "/assets/images/nuimpact-team-alt.png",
    "/assets/images/nusis-full-group.png",
    "/assets/images/nuimpact-guy-talking.png",
    "/assets/images/nuimpact-irm-presentation.png",
    "/assets/images/nuimpact-fund-meeting.png"];
  return (
    <div className="min-h-screen bg-white relative selection:bg-[var(--color-nuimpact-blue)] selection:text-white">
      {/* Universal Background Gradient */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] md:w-[60vw] md:h-[60vw] bg-[var(--color-nuimpact-light-blue)]/40 rounded-full blur-[100px] opacity-70" />
        <div className="absolute bottom-[10%] -right-[10%] w-[600px] h-[600px] md:w-[50vw] md:h-[50vw] bg-[var(--color-nuimpact-blue)]/40 rounded-full blur-[100px] opacity-70" />
      </div>

      <div className="relative z-10">
        <HeroSection
          variant="home"
          title="NUImpact"
          subtitle="Northeastern University's Impact Investing Initiative"
          backgroundImage="/assets/images/water.jpg" />

        <ScrollReveal delay={0.1}>
          <ImageSlider
            images={scrollImages}
            mode="auto"
            gap="gap-2"
            padding="py-2"
          />
        </ScrollReveal>

        <ScrollReveal>
          <StatisticsSection />
        </ScrollReveal>

        <ScrollReveal>
          <PortfolioPreviewSection />
        </ScrollReveal>

        <ScrollReveal>
          <GetInvolvedSection />
        </ScrollReveal>

        {/* <InstagramFeed /> */}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
