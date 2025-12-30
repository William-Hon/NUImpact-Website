import React from "react";
import { Link } from "react-router-dom";

const GetInvolvedPanel = ({ color, photoURL, text, buttonLink }) => {
  return (
    <div
      className="relative w-full h-full p-2 shadow-xl flex flex-col"
      style={{ backgroundColor: `var(--color-nuimpact-${color})` }}
    >
      {/* Content with white inset border */}
      <div className="border-4 border-white w-full flex-1 flex flex-col items-center gap-10 py-10 px-6">
        {/* Image */}
        <div className="relative w-full max-w-xl">
          <img
            src={photoURL}
            alt=""
            className="w-full object-cover rounded-sm"
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
        <div className="flex flex-col items-center gap-6 text-center flex-1 justify-between">
          <h2 className="text-2xl font-semibold text-white">
            {text}
          </h2>

          <Link
            className="flex items-center gap-2 px-7 py-3.5 text-white font-semibold border border-white rounded-full hover:bg-white hover:text-[var(--btn-color)] transition-colors"
            style={{ "--btn-color": `var(--color-nuimpact-${color})` }}
            to={buttonLink}
          >
            Learn more <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default GetInvolvedPanel;
