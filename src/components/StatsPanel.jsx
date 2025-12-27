import React from "react";

const StatsPanel = () => {
  return (
    <div className="relative w-full py-8">
      {/* Background */}
      <div className="absolute inset-0 blur-sm rounded-xl" style={{ backgroundColor: "var(--color-nuimpact-gray)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex justify-center">
        <div className="flex flex-col gap-10 text-center px-6">
          <h1 className="text-3xl text-white font-bold underline">
            By The Numbers
          </h1>

          {/* STAT 1 */}
          <div className="flex flex-col gap-2">
            <div className="text-8xl font-bold text-[var(--color-nuimpact-dark-blue)]">
              72
            </div>
            <div className="text-4xl text-white font-semibold">
              Active Members
            </div>
          </div>

          {/* STAT 2 */}
          <div className="flex flex-col gap-2">
            <div className="text-8xl font-bold text-[var(--color-nuimpact-red)]">
              $600K
            </div>
            <div className="text-4xl text-white font-semibold">
              AUM
            </div>
          </div>

          {/* STAT 3 */}
          <div className="flex flex-col gap-2">
            <div className="text-8xl font-bold text-[var(--color-nuimpact-yellow)]">
              15
            </div>
            <div className="text-4xl text-white font-semibold">
              Annual Events
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default StatsPanel;
