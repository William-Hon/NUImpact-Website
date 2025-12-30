import React, { useState } from "react";
import investments from "../data/Investments";

const CardSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
            positionClass = "z-10 scale-90 opacity-60 -translate-y-24";
        } else if (position === "bottom") {
            positionClass = "z-10 scale-90 opacity-60 translate-y-24";
        }

        return (
            <div
                key={`${item.name}-${position}`}
                className={`absolute w-[425px] h-[250px] shadow-2xl p-2 transition-all duration-500 ease-in-out ${positionClass}`}
                style={{ backgroundColor: item.cardColor || "var(--color-nuimpact-blue)" }}
            >
                <div className="border-4 border-white w-full h-full flex items-center justify-center gap-6 px-6">
                    <div className="bg-white p-3 rounded-full w-26 h-26 flex items-center justify-center shrink-0">
                        <img
                            src={item.logo}
                            alt={item.name}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <h3 className="text-2xl font-bold text-white leading-tight">
                        {item.name}
                    </h3>
                </div>
            </div>
        );
    };

    return (
        <div className="relative w-full h-[450px] flex items-center justify-center">
            {/* Cards Stack */}
            <div className="relative w-[350px] h-full flex items-center justify-center">
                {renderCard(prevIndex, "top")}
                {renderCard(currentIndex, "active")}
                {renderCard(nextIndex, "bottom")}

                {/* Controls - Moved inside stack and positioned right */}
                <div className="absolute -right-22 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-30">
                    <button
                        onClick={handlePrev}
                        className="text-[var(--color-nuimpact-blue)] hover:text-black transition-colors"
                    >
                        {/* Simple Up Arrow SVG */}
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="text-[var(--color-nuimpact-blue)] hover:text-black transition-colors"
                    >
                        {/* Simple Down Arrow SVG */}
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardSlider;
