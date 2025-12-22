import React from "react";

const StatsPanel = () => {
   return (
    <div className="relative w-full h-full py-5">
      
      {/* Blurred background*/}
      <div className="absolute inset-0 bg-gray-300 blur-sm rounded-xl" />

      {/* Content */}
      <div className="relative z-10 flex justify-center h-full">
        <div className="py-4 text-center">
          <h1 className="text-3xl text-white font-bold mb-4 underline">
            By The Numbers
          </h1>

          <h1 className="text-8xl text-[var(--color-nuimpact-blue)] font-bold mb-4">
            72
          </h1>
          <h1 className="text-4xl text-white font-bold mb-4">
            Active Members
          </h1>

          <h1 className="text-8xl text-[var(--color-nuimpact-red)] font-bold mb-4">
            $600K
          </h1>
          <h1 className="text-4xl text-white font-bold mb-4">
            AUM
          </h1>

          <h1 className="text-8xl text-[var(--color-nuimpact-yellow)] font-bold mb-4">
            15
          </h1>
          <h1 className="text-4xl text-white font-bold mb-4">
            Annual Events
          </h1>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
