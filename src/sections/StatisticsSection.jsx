import StatsPanel from "../components/StatsPanel.jsx";
import OverviewMission from "../components/OverviewMission.jsx";

{/* full stats and overview section under homepage hero */ }
const StatisticsSection = () => {
  return (
    <section className="w-full text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] px-4 py-8 items-center gap-4">
        {/* left side */}
        <div className="py-2">
          <OverviewMission />
        </div>
        {/* right side */}
        <div className="py-2">
          <StatsPanel />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
