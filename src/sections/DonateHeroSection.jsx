import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const DonateHeroSection = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/assets/images/donate-hero.png"
                    alt="donate image"
                    className="h-full w-full object-cover object-[35%_center] md:object-center"
                />
                {/* Gradient overlay to match other pages */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
                {/* Bottom fade to blend with next section */}
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black/90 pointer-events-none"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 mx-auto flex h-full pt-[var(--nav-h)] w-full max-w-7xl items-center justify-start px-6 sm:px-12 lg:px-16">
                <ScrollReveal>
                    <div className="flex w-full md:max-w-[50vw] flex-col items-start text-left text-white">

                        {/* Main Text */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight whitespace-nowrap">
                            Create a Lasting Impact
                        </h1>

                        {/* Smaller Text */}
                        <h2 className="text-sm md:text-lg lg:text-xl font-semibold mb-8 text-white leading-snug whitespace-nowrap">
                            Help support the next generation of impact investors.
                        </h2>

                        {/* CTA Button */}
                        <a
                            href="https://give.northeastern.edu/student-opportunities/DN5215-83.html" target="_blank" rel="noopener noreferrer"
                            className="group relative px-8 py-3 text-sm font-bold tracking-widest uppercase text-white transition-all hover:text-black cursor-pointer inline-block"
                        >
                            <span className="absolute inset-0 border-2 border-white transition-all duration-300 group-hover:bg-white"></span>
                            <span className="relative z-10">Donate Now</span>
                        </a>

                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default DonateHeroSection;
