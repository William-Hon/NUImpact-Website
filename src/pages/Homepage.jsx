import HeroSection from "../components/HeroSection.jsx";
import ImageScrollSection from "../components/ImageScrollSection.jsx";
import StatisticsSection from "../components/StatisticsSection.jsx";
import PortfolioPreviewSection from "../components/PortfolioPreviewSection.jsx";
import GetInvolvedSection from "../components/GetInvolvedSection.jsx";

const HomePage = () => {
  return (
    <div className="space-y-4">
      <HeroSection />
      <ImageScrollSection />
      <StatisticsSection />
      <PortfolioPreviewSection />
      <GetInvolvedSection />
    </div>
  );
};

export default HomePage;
