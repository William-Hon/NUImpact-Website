import React from "react";
import GetInvolvedPanel from "./GetInvolvedPanel";
const GetInvolvedSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 min-h-screen">
      <div className="flex items-center justify-center">
        <GetInvolvedPanel color="blue" photoURL="/assets/images/Donors.png"/>
      </div>
      <div className="flex items-center justify-center">Middle</div>
      <div className="flex items-center justify-center">Right</div>
    </section>
  );
};

export default GetInvolvedSection;
