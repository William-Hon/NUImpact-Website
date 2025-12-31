import ScrollReveal from '../components/ScrollReveal';

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
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent" />
          {/* Bottom fade to blend with next section */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black/90 pointer-events-none" />
        </>
      )}

      {/* Content */}
      <div
        className={`relative z-10 h-full pt-[var(--nav-h)] flex ${isHome
          ? "items-center justify-center text-center"
          : "items-center justify-start px-16 text-left"
          }`}
      >
        <ScrollReveal>
          <div className={`flex flex-col space-y-4 w-[60vw] max-w-1xl ${isHome ? "mx-auto" : ""}`}>
            <h1 className="text-white text-8xl font-bold">{title}</h1>
            {subtitle && (
              <h2 className="text-white text-4xl font-semibold">{subtitle}</h2>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
