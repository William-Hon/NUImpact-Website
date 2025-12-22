import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/water.jpg')" }}
    >
      <div className="relative z-10 flex h-full pt-[var(--nav-h)] items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-white text-7xl font-bold">NUImpact</h1>
          <h1 className="text-white text-3xl font-bold">
            Northeastern University's Impact Investing Initiative
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
