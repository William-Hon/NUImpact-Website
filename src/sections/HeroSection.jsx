import React from "react";

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  variant = "home",
}) => {
  const isHome = variant === "home";

  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Gradient overlay only for non-home pages */}
      {!isHome && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent" />
      )}

      {/* Content */}
      <div
        className={`relative z-10 h-full pt-[var(--nav-h)] flex ${isHome
            ? "items-center justify-center text-center"
            : "items-center justify-start px-16 text-left"
          }`}
      >
        <div className={`flex flex-col space-y-4 w-[50vw] max-w-1xl`}>
          <h1 className="text-white text-8xl font-bold">{title}</h1>
          {subtitle && (
            <h2 className="text-white text-4xl font-semibold">{subtitle}</h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
