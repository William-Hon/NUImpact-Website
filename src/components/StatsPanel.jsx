import React from "react";

const StatsPanel = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full h-full min-h-[600px] max-w-sm bg-[var(--color-nuimpact-dark-blue)] p-2 shadow-xl flex flex-col">
        <div className="border-4 border-white w-full flex-1 flex flex-col items-center justify-between py-10 px-6 text-center">
          <h1 className="text-4xl text-white font-bold underline decoration-white/30 underline-offset-8">
            By The Numbers
          </h1>

          <div className="flex flex-col flex-grow justify-evenly items-center w-full">
            {/* STAT 1 */}
            <div className="flex flex-col gap-2">
              <div className="text-6xl md:text-7xl font-bold text-white">
                80
              </div>
              <div className="text-2xl md:text-3xl text-white font-semibold">
                Active Members
              </div>
            </div>

            {/* STAT 2 */}
            <div className="flex flex-col gap-2">
              <div className="text-6xl md:text-7xl font-bold text-white">
                $600K
              </div>
              <div className="text-2xl md:text-3xl text-white font-semibold">
                AUM
              </div>
            </div>

            {/* STAT 3 */}
            <div className="flex flex-col gap-2">
              <div className="text-6xl md:text-7xl font-bold text-white">
                15
              </div>
              <div className="text-2xl md:text-3xl text-white font-semibold">
                Annual Events
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default StatsPanel;
