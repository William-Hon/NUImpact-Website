import React, { useState } from "react";
import investments from "../data/Investments";

const CardSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Filter only companies to show in slider if needed, matching the "showInSlider" flag
    const sliderInvestments = investments.filter((item) => item.showInSlider);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % sliderInvestments.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? sliderInvestments.length - 1 : prev - 1
        );
    };

    // Touch handlers for swipe
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientY);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientY);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isUpSwipe = distance > minSwipeDistance;
        const isDownSwipe = distance < -minSwipeDistance;

        if (isUpSwipe) {
            handleNext();
        } else if (isDownSwipe) {
            handlePrev();
        }
    };

    // Helper to get relative index for cyclic rendering
    const getRelativeIndex = (diff) => {
        const len = sliderInvestments.length;
        return (currentIndex + diff + len) % len;
    };

    const prevIndex = getRelativeIndex(-1);
    const nextIndex = getRelativeIndex(1);

    const renderCard = (index, position) => {
        const item = sliderInvestments[index];
        let positionClass = "";

        // Position styles
        if (position === "active") {
            positionClass = "z-20 scale-100 opacity-100 translate-y-0";
        } else if (position === "top") {
            positionClass = "z-10 scale-90 opacity-60 -translate-y-16 md:-translate-y-24";
        } else if (position === "bottom") {
            positionClass = "z-10 scale-90 opacity-60 translate-y-16 md:translate-y-24";
        }

        return (
            <div
                key={`${item.name}-${position}`}
                className={`absolute w-[280px] h-[180px] md:w-[425px] md:h-[250px] shadow-2xl p-2 transition-all duration-500 ease-in-out ${positionClass}`}
                style={{ backgroundColor: item.cardColor || "var(--color-nuimpact-blue)" }}
            >
                <div className="border-4 border-white w-full h-full flex items-center justify-center gap-2 md:gap-6 px-4 md:px-6">
                    <div className="bg-white p-2 md:p-3 rounded-full w-16 h-16 md:w-26 md:h-26 flex items-center justify-center shrink-0">
                        <img
                            src={item.logo}
                            alt={item.name}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold text-white leading-tight">
                        {item.name}
                    </h3>
                </div>
            </div>
        );
    };

    return (
        <div
            className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {/* Cards Stack */}
            <div className="relative w-full max-w-[350px] md:max-w-[450px] h-full flex items-center justify-center">
                {renderCard(prevIndex, "top")}
                {renderCard(currentIndex, "active")}
                {renderCard(nextIndex, "bottom")}

                {/* Controls */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:top-[60%] md:-bottom-auto md:-right-24 md:-translate-y-1/2 flex flex-row md:flex-col gap-8 md:gap-4 z-30">
                    <button
                        onClick={handlePrev}
                        className="text-[var(--color-nuimpact-blue)] hover:text-black transition-colors bg-white/80 md:bg-transparent rounded-full p-2 md:p-0 backdrop-blur-sm md:backdrop-blur-none cursor-pointer"
                    >
                        {/* Up/Left Arrow looking thing */}
                        <svg className="w-8 h-8 md:w-10 md:h-10 transform -rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="text-[var(--color-nuimpact-blue)] hover:text-black transition-colors bg-white/80 md:bg-transparent rounded-full p-2 md:p-0 backdrop-blur-sm md:backdrop-blur-none cursor-pointer"
                    >
                        {/* Down/Right Arrow looking thing */}
                        <svg className="w-8 h-8 md:w-10 md:h-10 transform -rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardSlider;
