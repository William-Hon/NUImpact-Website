import React from "react";

const GetInvolvedPanel = ({ color, photoURL, text }) => {
  return (
    <div className="relative w-full py-10">
      {/* Background */}
      <div
        className="absolute inset-0 rounded-xl blur-sm"
        style={{ backgroundColor: `var(--color-nuimpact-${color})` }}
      />

      <div className="relative z-10 flex flex-col items-center gap-10 px-6">
        {/* Image */}
        <div className="relative w-full max-w-xl">
          <img
            src={photoURL}
            alt=""
            className="w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: `var(--color-nuimpact-${color})`,
              opacity: 0.35
            }}
          />
        </div>

        {/* Text + Button */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-2xl font-semibold text-white px-6">
            {text}
          </h2>

          <button className="flex items-center gap-2 px-7 py-3.5 text-white font-semibold border border-white rounded-full">
            Learn more <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};


export default GetInvolvedPanel;
