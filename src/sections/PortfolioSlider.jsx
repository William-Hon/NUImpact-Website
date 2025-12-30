import React, { useState } from 'react';
import PortfolioCard from '../components/PortfolioCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PortfolioSlider = ({ investments }) => {
    // Filter only companies to be showcased in the slider
    const showcaseItems = investments.filter(inv => inv.showInSlider);
    const [currentIndex, setCurrentIndex] = useState(0);

    if (showcaseItems.length === 0) return null;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
    };

    const currentCompany = showcaseItems[currentIndex];

    // For the background "peek" effect seen in the image
    const prevCompany = showcaseItems[(currentIndex - 1 + showcaseItems.length) % showcaseItems.length];
    const nextCompany = showcaseItems[(currentIndex + 1) % showcaseItems.length];

    return (
        <section className="py-16 px-4 bg-gray-50 overflow-hidden relative">
            <div className="max-w-[1700px] mx-auto flex items-center justify-between gap-1 md:gap-2">

                {/* Left Peek/Arrow */}
                <div className="hidden lg:flex items-center gap-2 flex-1 justify-end max-w-[150px] xl:max-w-[300px]">
                    <div
                        className="w-full h-[540px] blur-[1px] shadow-sm transform -translate-x-1/4"
                        style={{ backgroundColor: prevCompany.backgroundColor }}
                    />
                    <button
                        onClick={prevSlide}
                        className="p-4 rounded-full bg-white shadow-xl text-gray-800 hover:bg-gray-100 transition-all z-20 "
                        aria-label="Previous slide"
                    >
                        <FaChevronLeft size={24} />
                    </button>
                </div>

                <button
                    onClick={prevSlide}
                    className="lg:hidden p-3 rounded-full bg-white shadow-md text-gray-800 z-20"
                >
                    <FaChevronLeft size={20} />
                </button>

                {/* Main Content Area */}
                <div className="flex-grow max-w-5xl relative z-10 transition-all duration-500 ease-in-out">
                    <PortfolioCard company={currentCompany} />

                    {/* Dots indicator */}
                    <div className="flex justify-center gap-3 mt-12">
                        {showcaseItems.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-3 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-12 bg-nuimpact-blue' : 'w-3 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Peek/Arrow */}
                <div className="hidden lg:flex items-center gap-2 flex-1 justify-start max-w-[150px] xl:max-w-[300px]">
                    <button
                        onClick={nextSlide}
                        className="p-4 rounded-full bg-white shadow-xl text-gray-800 hover:bg-gray-100 transition-all z-20"
                        aria-label="Next slide"
                    >
                        <FaChevronRight size={24} />
                    </button>
                    <div
                        className="w-full h-[540px] blur-[1px] shadow-sm transform translate-x-1/4"
                        style={{ backgroundColor: nextCompany.backgroundColor }}
                    />
                </div>

                <button
                    onClick={nextSlide}
                    className="lg:hidden p-3 rounded-full bg-white shadow-md text-gray-800 z-20"
                >
                    <FaChevronRight size={20} />
                </button>
            </div>
        </section>
    );
};

export default PortfolioSlider;
