import React from "react";

const GetInvolvedPanel = ({ color, photoURL }) => {
  return (
    <div className="relative w-full h-full py-5">
      {/* Background */}
      <div
        className={`absolute inset-0 bg-[var(--color-nuimpact-${color})] blur-sm rounded-xl`}
      />
      {/* Split container - tophalf & bottomhalf */}
      <div className="relative z-10 h-full grid grid-rows-2">
        {/* Top half */}
        <div className="flex items-center justify-center px-6">
          <img
            src={photoURL}
            alt="panel image"
            className="w-full max-w-xl mx-auto"
          />
            <div className="absolute inset-0 bg-blue-600/40" />

        </div>
        {/* Bottom half */}
        <div className="flex items-center justify-center">
          <div className="text-center">poop</div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedPanel;
