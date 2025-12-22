import React from "react";
import StatsPanel from "./StatsPanel.jsx";
import OverviewMission from "./OverviewMission.jsx";

const StatisticsSection = () => {
  return (
    <section className="w-full bg-white text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] min-h-screen px-8 py-10">
        {/* LEFT COLUMN */}
        <div className="px-8">
          <OverviewMission />
        </div>
        {/* RIGHT COLUMN */}
        <div className="px-8">
          <StatsPanel />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
