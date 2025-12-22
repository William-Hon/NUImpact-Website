import React from "react";

const OverviewMission = () => {
  return (
    <section>
          {/* OVERVIEW */}
          <div className="max-w-6xl mx-auto grid grid-cols-[1fr_3fr] gap-16">
            <h2 className="text-5xl font-bold">Overview:</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                NUImpact is Northeastern University’s Impact Investing
                Initiative, dedicated to promoting the value of purposeful
                capital on campus and across Boston. NUImpact has 70 members
                from 5 of the 6 undergraduate colleges. 
              </p>
              <p>
                Our organization
                comprises an Investment Fund and a Programming Team. Our fund is
                the largest undergraduate-led impact fund in the country and
                makes two $30-50k investments per year. Our Programming Team
                organizes weekly educational events and hosts an annual summit
                with 250+ attendees.
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="max-w-6xl mx-auto">
            <hr className="border-black my-10" />
          </div>

          {/* MISSION */}
          <div className="max-w-6xl mx-auto grid grid-cols-[1fr_3fr] gap-16">
            <h2 className="text-5xl font-bold">Mission:</h2>
            <p className="text-lg leading-relaxed">
              We strengthen underserved communities through impact investing and
              deploying purposeful capital in educational programming.
            </p>
          </div>
    </section>
  );
};

export default OverviewMission;
