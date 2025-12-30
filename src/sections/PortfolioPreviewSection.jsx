import React from "react";
import { Link } from "react-router-dom";
import CardSlider from "../components/CardSlider";

const PortfolioPreviewSection = () => {
  return (
    <section className="w-full bg-white py-8 md:py-16">
      <div className="flex flex-col max-w-6xl mx-auto px-4 md:px-8">
        {/* TITLE */}
        <h1 className="text-5xl md:text-6xl font-bold text-center text-[var(--color-nuimpact-dark-blue)] mb-12">
          Our Portfolio
        </h1>

        {/* SPLIT CONTENT UNDER TITLE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* LEFT */}
          <div className="flex flex-col items-center justify-center text-center gap-8">
            <h2 className="text-2xl md:text-3xl font-medium text-[var(--color-nuimpact-dark-blue)] leading-relaxed">
              We are proud investors in 8 mission-driven businesses in the
              Northeast region.
            </h2>

            <Link
              to="/portfolio"
              className="
              inline-flex items-center gap-3 px-8 py-3
              bg-[var(--color-nuimpact-blue)] text-white text-lg font-medium
              rounded-full
              hover:opacity-90 transition
              shadow-lg
            "
            >
              Check out our latest investment!
              <span className="text-xl">→</span>
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center w-full">
            <CardSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreviewSection;
