import React, { useState } from 'react';
import { FaFingerprint } from 'react-icons/fa';

const ProgramCard = ({ title, description, bgColor, bgImage, isActive, onToggle }) => {

    return (
        <div
            onClick={onToggle}
            className="relative w-full aspect-4/3 overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1 flex items-center justify-center group"
        >
            {/* Front side - visible when NOT revealed and NOT hovered (desktop) */}
            <div
                className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-400 p-8 text-center
                    ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100 group-hover:opacity-0'}
                `}
                style={{ backgroundColor: bgColor }}
            >
                <div className="border-4 border-white w-full h-full flex items-center justify-center transition-all duration-300 relative">
                    <h3 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-wider m-0 break-words max-w-full px-2">
                        {title}
                    </h3>

                    {/* Tap hint for mobile */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden text-white/80 text-sm flex items-center gap-1">
                        <FaFingerprint /> Tap to view
                    </div>
                </div>
            </div>

            {/* Content side - revealed on click (mobile) or hover (desktop) */}
            <div
                className={`absolute inset-0 z-0 transition-opacity duration-400 text-center bg-cover bg-center
                    ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                `}
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/75 -z-10"></div>
                {/* Border - fixed to card boundaries */}
                <div className="absolute inset-4 border-4 border-white transition-all duration-300"></div>
                {/* Text content - separate from border */}
                <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12 z-10 pointer-events-none">
                    {/* Inner container for scroll handling, pointer-events-auto to allows scrolling */}
                    <div className="w-full h-full flex items-center justify-center overflow-y-auto pointer-events-auto custom-scrollbar">
                        <p className="text-white text-sm md:text-base leading-relaxed m-0 text-center max-h-full">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramCard;
