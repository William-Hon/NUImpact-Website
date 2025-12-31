import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const InvestmentTimelineSection = ({ investments }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % investments.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + investments.length) % investments.length);
    };

    const activeItem = investments[activeIndex];

    // Map company names to their specific background images in public/assets/images/portfolio-images
    const bgImages = {
        "EatWell": "/assets/images/portfolio-images/eat-well-bg.jpg",
        "Unicorn": "/assets/images/portfolio-images/unicorn-bg.jpg",
        "It's Electric": "/assets/images/portfolio-images/itselectric-bg.jpg",
        "Dorchester Food Co-op": "/assets/images/portfolio-images/dorchestor-food-bg.jpg",
        "Imago Rehab": "/assets/images/portfolio-images/imago-bg.jpg",
        "Agri-Trak": "/assets/images/portfolio-images/agri-trak-bg.jpg",
        "Volta Health": "/assets/images/portfolio-images/volta-bg.jpg"
    };

    const currentBg = bgImages[activeItem.name] || "";

    return (
        <section
            className="relative overflow-hidden min-h-[800px] flex flex-col justify-center py-20 bg-cover bg-center transition-all duration-700 ease-in-out"
            style={{
                backgroundImage: `url(${currentBg})`,
                backgroundColor: 'var(--color-nuimpact-blue)' // fallback
            }}
        >
            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 z-0 bg-black/70" />

            {/* Top fade to blend with Hero section */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/90 to-transparent pointer-events-none z-10" />

            {/* Big Background Year Number */}
            <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-75 text-[300px] md:text-[500px] font-bold text-white/5 select-none pointer-events-none leading-none z-0">
                {activeItem.year.toString().slice(-2)}'
            </div>

            {/* Main Content Area */}
            <div className="relative z-20 w-full px-6 md:px-12">

                {/* Horizontal Line */}
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white z-0 hidden md:block opacity-30" />

                <div className="relative flex flex-col md:flex-row items-center justify-start gap-12 w-full min-h-[400px]">

                    {/* Left Content (Text) */}
                    <div
                        className="w-full md:max-w-[650px] md:w-fit flex-shrink-0 z-20 space-y-6 md:-mt-12 md:-ml-14 md:mr-75 order-2 md:order-1 text-center md:text-left bg-white text-[var(--timeline-theme)] border-4 border-[var(--timeline-theme)] p-8 shadow-xl transition-colors duration-700"
                        style={{ "--timeline-theme": activeItem.cardColor }}
                    >
                        {/* Date Pill */}
                        <div className="inline-block px-4 py-1 bg-[var(--timeline-theme)] text-white font-bold rounded-full text-sm mb-2 shadow-lg transition-colors duration-700">
                            {activeItem.year}
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                            {activeItem.keyFacts?.yearInvested || activeItem.year}
                        </h3>
                        <div className="space-y-4 min-h-[160px]">
                            <h4 className="text-2xl font-semibold opacity-90">{activeItem.name}</h4>
                            <p className="text-lg leading-relaxed opacity-80 max-w-md mx-auto md:mx-0">
                                {activeItem.description[0]}
                            </p>
                        </div>

                        {/* Navigation Controls (Moved Here) */}
                        <div className="flex flex-col md:flex-row items-center gap-6 z-30 w-full md:w-auto mt-8 md:justify-start justify-center">
                            {/* Arrows */}
                            <div className="flex gap-4">
                                <button
                                    onClick={prevSlide}
                                    className="w-12 h-12 rounded-full border-2 border-[var(--timeline-theme)] flex items-center justify-center text-white hover:bg-white hover:text-[var(--timeline-theme)] transition-all bg-[var(--timeline-theme)]"
                                >
                                    <FaChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="w-12 h-12 rounded-full border-2 border-[var(--timeline-theme)] flex items-center justify-center text-white hover:bg-white hover:text-[var(--timeline-theme)] transition-all bg-[var(--timeline-theme)]"
                                >
                                    <FaChevronRight size={20} />
                                </button>
                            </div>

                            {/* Progress Indicators */}
                            <div className="flex gap-2">
                                {investments.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`h-1 rounded-full transition-all duration-300 ${idx === activeIndex
                                            ? "w-12 bg-[var(--timeline-theme)]"
                                            : "w-6 bg-[var(--timeline-theme)]/30 hover:bg-[var(--timeline-theme)]/50"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Center Image (Circle) */}
                    <div className="relative z-20 order-1 md:order-2 flex-shrink-0 md:ml-32">
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-white overflow-hidden shadow-2xl relative flex items-center justify-center">
                            {/* Image or Logo */}
                            <img
                                src={activeItem.logo}
                                alt={activeItem.name}
                                className="w-3/4 h-3/4 object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Side Spacer */}
                    <div className="hidden md:block w-1/12"></div>
                </div>



            </div>

        </section>
    );
};

export default InvestmentTimelineSection;