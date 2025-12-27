import HeroSection from "../sections/HeroSection.jsx";
import ImageSliderSection from "../sections/ImageSliderSection.jsx";
import StatisticsSection from "../sections/StatisticsSection.jsx";
import PortfolioPreviewSection from "../sections/PortfolioPreviewSection.jsx";
import GetInvolvedSection from "../sections/GetInvolvedSection.jsx";
import InstagramFeed from "../sections/InstagramFeed.jsx";
import Footer from "../sections/Footer.jsx";

const HomePage = () => {
  const scrollImages = [
    "/assets/images/students.png",
    "/assets/images/nusis-presentation.png",
    "/assets/images/nuimpact-team-alt.png",
    "/assets/images/nuimpact-nusis-full-group.png",
    "/assets/images/nuimpact-guy-talking.png",
    "/assets/images/nuimpact-irm-presentation.png",
    "/assets/images/nuimpact-fund-meeting.png"];
  return (
    <div className="space-y-4">
      <HeroSection
        variant="home"
        title="NUImpact"
        subtitle="Northeastern University's Impact Investing Initiative"
        backgroundImage="/assets/images/water.jpg" />
      <ImageSliderSection
      images={scrollImages}
      mode="auto"
      />
      <StatisticsSection />
      <PortfolioPreviewSection />
      <GetInvolvedSection />
      {/* <InstagramFeed /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
