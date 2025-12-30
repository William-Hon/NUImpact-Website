import HeroSection from "../sections/HeroSection.jsx";
import ImageSlider from "../components/ImageSlider.jsx";
import StatisticsSection from "../sections/StatisticsSection.jsx";
import PortfolioPreviewSection from "../sections/PortfolioPreviewSection.jsx";
import GetInvolvedSection from "../sections/GetInvolvedSection.jsx";
import InstagramFeed from "../sections/InstagramFeed.jsx";
import Footer from "../sections/Footer.jsx";

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
    <div className="">
      <HeroSection
        variant="home"
        title="NUImpact"
        subtitle="Northeastern University's Impact Investing Initiative"
        backgroundImage="/assets/images/water.jpg" />
      <ImageSlider
        images={scrollImages}
        mode="auto"
        gap="gap-2"
        padding="py-2"
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
