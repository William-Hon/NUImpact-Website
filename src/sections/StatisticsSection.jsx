import React from "react";
import StatsPanel from "../components/StatsPanel.jsx";
import OverviewMission from "../components/OverviewMission.jsx";

const StatisticsSection = () => {
  return (
    <section className="w-full bg-white text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] px-4 py-8 items-center gap-4">
        {/* LEFT COLUMN */}
        <div className="py-2">
          <OverviewMission />
        </div>
        {/* RIGHT COLUMN */}
        <div className="py-2">
          <StatsPanel />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
