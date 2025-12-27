import React from "react";

const PortfolioPreviewSection = () => {
  return (
    <div className="relative min-h-screen  flex items-center bg-cover bg-center">
      {/* VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/assets/videos/mountains-ambient-bg2.mp4"
          // src="/assets/videos/blue-flakes-ambient-bg.mp4"
          type="video/mp4"
        />
      </video>

      {/* OVERLAY CONTENT */}
      <div className="flex flex-col relative z-10 max-w-7xl mx-auto h-full px-16 py-32 text-white">
        {/* TITLE */}
        <h1 className="text-7xl font-bold text-center">
          Our Portfolio
        </h1>

        {/* SPLIT CONTENT UNDER TITLE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 py-16 flex-1 gap-8">
          {/* LEFT */}
          <div className="flex flex-col items-center justify-center gap-8">
            <h2 className="text-center text-3xl font-light">
              We are proud investors in 8 mission-driven businesses in the
              Northeast region.
            </h2>

            <button
              className="
              flex items-center gap-3 px-8 py-4
              text-white text-lg font-medium
              border border-white/80
              rounded-full
              hover:bg-white/10
              transition
            "
            >
              Check out our latest investment!
              <span className="text-xl">→</span>
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center px-16">
            <img
              src="/assets/images/portfolio-logos.png"
              alt="portfolio logos"
              className="w-full max-w-xl mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPreviewSection;
