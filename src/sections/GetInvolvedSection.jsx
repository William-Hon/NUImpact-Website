import React from "react";
import GetInvolvedPanel from "../components/GetInvolvedPanel";
const GetInvolvedSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-6">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-semibold">
          Donors
        </h1>
        <GetInvolvedPanel
          color="red"
          photoURL="/assets/images/donors.png"
          text="Looking to support NUImpact? Find out what a donation to our fund can do." />
      </div>

      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-semibold">
          Entreprenuers
        </h1>
        <GetInvolvedPanel
          color="dark-blue"
          photoURL="/assets/images/entreprenuers.png"
          text="Looking to get involved? Learn more about our community. Looking for an investment? See if you fit our criteria." />
      </div>
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-semibold">
          Students
        </h1>
        <GetInvolvedPanel
          color="dark-yellow"
          photoURL="/assets/images/students.png"
          text="Looking to get involved? Learn more about our community." />
      </div>
    </section>
  );
};

export default GetInvolvedSection;
