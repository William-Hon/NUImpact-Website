import React, { useState } from "react";

const OverviewMission = () => {
  const [hoveringMission, setHoveringMission] = useState(false);

  return (
    <section className="py-2 md:px-0 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center relative">
        {/* OVERVIEW CARD */}
        <div
          onClick={() => setHoveringMission(false)}
          className={`w-full max-w-7xl md:w-7/12 bg-[var(--color-nuimpact-blue)] p-3 relative shadow-xl transition-all duration-300 ease-in-out cursor-pointer
            ${hoveringMission ? "z-10 scale-95 brightness-50" : "z-20 scale-100 brightness-100"}
          `}
        >
          <div className="border-2 border-white p-6 md:p-8 flex flex-col gap-4 text-white h-full">
            <h2 className="text-3xl font-bold underline decoration-white/30 underline-offset-8 text-center">
              Overview
            </h2>
            <div className="space-y-4 text-sm md:text-base leading-relaxed">
              <p>
                NUImpact is Northeastern University’s Impact Investing
                Initiative, dedicated to promoting the value of purposeful
                capital on campus and across Boston. NUImpact has 70 members
                from 5 of the 6 undergraduate colleges.
              </p>
              <p>
                Our organization comprises an Investment Fund and a Programming
                Team. Our fund is the largest undergraduate-led impact fund in
                the country and makes two $30-50k investments per year. Our
                Programming Team organizes weekly educational events and hosts
                an annual summit with 250+ attendees.
              </p>
            </div>
          </div>
        </div>

        {/* MISSION SECTION WRAPPER */}
        <div
          onClick={() => setHoveringMission(true)}
          className={`relative w-full max-w-md md:w-5/12 -mt-32 md:mt-2 md:-ml-28 flex flex-col items-center transition-all duration-300 ease-in-out
            ${hoveringMission ? "z-30" : "z-10"}
          `}
        >
          {/* MISSION CARD */}
          <div
            onMouseEnter={() => setHoveringMission(true)}
            onMouseLeave={() => setHoveringMission(false)}
            className={`w-full bg-[var(--color-nuimpact-light-blue)] p-3 shadow-xl transition-all duration-300 ease-in-out cursor-pointer
              ${hoveringMission ? "scale-100 brightness-100" : "scale-95 brightness-25"}
            `}
          >
            <div className="border-2 border-white p-6 md:p-8 flex flex-col gap-4 text-white h-full justify-center">
              <h2 className="text-3xl font-bold underline decoration-white/30 underline-offset-8 text-center">
                Mission
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-center">
                We strengthen underserved communities through impact investing and
                deploying purposeful capital in educational programming.
              </p>
              <div className="h-16 hidden md:block"></div>
            </div>
          </div>

          {/* Click to read more hint - visible only when mission is NOT active */}
          <p className={`text-black underline text-xs md:text-sm font-light tracking-wider mt-4 uppercase cursor-pointer transition-opacity duration-300 ${hoveringMission ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
            ↑ Tap to read more ↑
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverviewMission;
