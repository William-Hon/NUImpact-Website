import React from "react";
import StatsPanel from "../components/StatsPanel.jsx";
import OverviewMission from "../components/OverviewMission.jsx";

const StatisticsSection = () => {
  return (
    <section className="w-full bg-white text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] px-8 py-10 items-center">
        {/* LEFT COLUMN */}
        <div className="px-8 py-6">
          <OverviewMission />
        </div>
        {/* RIGHT COLUMN */}
        <div className="px-8 py-6">
          <StatsPanel />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
