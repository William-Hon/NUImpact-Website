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
                    className="h-full w-full object-cover"
                />
                {/* Dark Gradient Overlay for better text contrast - Stronger on left */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-start px-6 sm:px-12 lg:px-16">
                <ScrollReveal>
                    <div className="flex max-w-lg flex-col items-start text-left text-white">

                        {/* "Create" - Serif Font */}
                        <h1
                            className="font-serif text-7xl md:text-8xl leading-none"
                        >
                            Create
                        </h1>

                        {/* Middle "LASTING" */}
                        <div
                            className="my-2 flex w-full items-center justify-start gap-4"
                        >
                            <span className="text-sm md:text-base font-light tracking-[0.3em] uppercase border-y border-white/50 py-1 px-4">
                                Lasting
                            </span>
                        </div>

                        {/* "IMPACT" - Bold Sans */}
                        <h2
                            className="text-6xl md:text-7xl font-black tracking-tight uppercase mb-6"
                        >
                            Impact
                        </h2>

                        {/* Description Paragraph */}
                        <p
                            className="mb-8 text-base md:text-lg font-light leading-relaxed opacity-90"
                        >
                            Help Support the Next Generation of Impact Investors Looking to Make a Lasting Impact.
                        </p>

                        {/* CTA Button */}
                        <button
                            className="group relative px-8 py-3 text-sm font-bold tracking-widest uppercase text-white transition-all hover:text-black cursor-pointer"
                        >
                            <span className="absolute inset-0 border-2 border-white transition-all duration-300 group-hover:bg-white"></span>
                            <span className="relative">Donate Now</span>
                        </button>

                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default DonateHeroSection;
