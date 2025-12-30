import React from 'react';

const ProgramCard = ({ title, description, bgColor, bgImage }) => {
    return (
        <div className="relative w-full aspect-4/3 overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1 flex items-center justify-center group">
            {/* Front side - default state */}
            <div
                className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-400 group-hover:opacity-0 p-8 text-center"
                style={{ backgroundColor: bgColor }}
            >
                <div className="border-4 border-white w-full h-full flex items-center justify-center transition-all duration-300">
                    <h3 className="text-white text-5xl font-bold uppercase tracking-wider m-0">
                        {title}
                    </h3>
                </div>
            </div>

            {/* Hover side - revealed on hover */}
            <div
                className="absolute inset-0 z-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100 text-center bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/75 -z-10"></div>
                {/* Border - fixed to card boundaries */}
                <div className="absolute inset-4 border-4 border-white transition-all duration-300"></div>
                {/* Text content - separate from border */}
                <div className="absolute inset-0 flex items-center justify-center p-12 z-10">
                    <p className="text-white text-base leading-relaxed m-0 text-center">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProgramCard;
