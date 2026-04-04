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
        <section className="py-16 px-4 bg-white overflow-hidden relative selection:bg-[var(--color-nuimpact-blue)] selection:text-white">
            {/* Universal Background Gradient */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] md:w-[60vw] md:h-[60vw] bg-[var(--color-nuimpact-light-blue)]/40 rounded-full blur-[100px] opacity-70" />
                <div className="absolute bottom-[10%] -right-[10%] w-[600px] h-[600px] md:w-[50vw] md:h-[50vw] bg-[var(--color-nuimpact-blue)]/40 rounded-full blur-[100px] opacity-70" />
            </div>

            <div className="max-w-[1700px] mx-auto flex items-center justify-between gap-1 md:gap-2 relative z-10">

                {/* Left Peek/Arrow */}
                <div className="hidden lg:flex items-center gap-2 flex-1 justify-end max-w-[150px] xl:max-w-[300px] h-[450px] relative overflow-hidden opacity-60">
                    {/* Show the RIGHT side of the previous card */}
                    <div className="absolute top-0 right-4 w-[1024px] h-full pointer-events-none blur-[2px]">
                        <PortfolioCard company={prevCompany} />
                    </div>
                    {/* Gradient Fade Overlay for Left Side */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent z-10 pointer-events-none" />

                    <button
                        onClick={prevSlide}
                        className="absolute right-8 p-4 rounded-full bg-white shadow-xl text-gray-800 hover:bg-gray-100 transition-all z-20"
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

                    {/* Volta Health Quote */}
                    {currentCompany.name === "Volta Health" && currentCompany.testimonial && (
                        <div className="mt-8 mx-auto px-6 md:px-12 w-full max-w-5xl">
                            <div className="relative bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-sm border border-black/5">
                                <span className="absolute top-2 left-4 text-6xl text-[var(--color-nuimpact-blue)] opacity-20 font-serif leading-none">"</span>
                                <div className="text-sm md:text-base italic text-gray-800 whitespace-pre-wrap relative z-10 pl-6 space-y-4">
                                    {currentCompany.testimonial.quote}
                                </div>
                                <div className="mt-4 pl-6 text-sm font-bold text-gray-900 flex items-center gap-3">
                                    {currentCompany.testimonial.avatar && (
                                        <img src={currentCompany.testimonial.avatar} alt={currentCompany.testimonial.author} className="w-10 h-10 rounded-full object-cover border-2 border-[var(--color-nuimpact-blue)]" />
                                    )}
                                    <div>
                                        <div>{currentCompany.testimonial.author}</div>
                                        <div className="font-normal text-xs text-gray-600">{currentCompany.testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

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
                <div className="hidden lg:flex items-center gap-2 flex-1 justify-start max-w-[150px] xl:max-w-[300px] h-[450px] relative overflow-hidden opacity-60">
                    {/* Show the LEFT side of the next card */}
                    <div className="absolute top-0 left-4 w-[1024px] h-full pointer-events-none blur-[2px]">
                        <PortfolioCard company={nextCompany} />
                    </div>
                    {/* Gradient Fade Overlay for Right Side */}
                    <div className="absolute inset-0 bg-gradient-to-l from-white/80 to-transparent z-10 pointer-events-none" />

                    <button
                        onClick={nextSlide}
                        className="absolute left-8 p-4 rounded-full bg-white shadow-xl text-gray-800 hover:bg-gray-100 transition-all z-20"
                        aria-label="Next slide"
                    >
                        <FaChevronRight size={24} />
                    </button>
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
