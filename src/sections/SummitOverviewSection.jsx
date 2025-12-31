import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const SummitOverviewSection = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        "/assets/images/nusis-presentation.png",
        "/assets/images/nusis-workshop.png",
        "/assets/images/nusis-full-group.png"
    ];

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="bg-transparent py-20 px-8 text-slate-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 max-w-5xl mx-auto leading-tight font-montserrat text-[var(--color-nuimpact-dark-blue)]">
                    Northeastern University’s Sustainable Investing Summit
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Image Slider Column */}
                    <div className="lg:col-span-7 relative group">
                        <div className="aspect-[4/3] overflow-hidden shadow-2xl relative">
                            <img
                                src={images[currentImage]}
                                alt="Summit Highlights"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/40 transition-all text-white"
                            >
                                <FiChevronLeft size={32} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/40 transition-all text-white"
                            >
                                <FiChevronRight size={32} />
                            </button>

                            {/* Progress Indicators */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                {images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImage ? "w-8 bg-white" : "w-2 bg-white/40"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
                        <p className="text-2xl md:text-3xl leading-relaxed text-slate-700 max-w-2xl mx-auto lg:mx-0 font-light text-[var(--color-nuimpact-dark-blue)]">
                            Our annual Sustainable Investing Summit (NUSIS) educates, empowers, and exposes attendees to the realm of impact investing trends across a dynamic range of industries and asset classes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SummitOverviewSection;
