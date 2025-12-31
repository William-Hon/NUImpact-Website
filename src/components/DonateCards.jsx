import React from 'react';
import { FaCheck } from 'react-icons/fa';

const DonateCards = ({ title, amount, benefits = [], buttonText = "Donate" }) => {
    return (
        <div className="relative group w-full max-w-[380px] mx-auto transform transition-all duration-300 hover:scale-105">
            {/* Card Content - Blue Background */}
            <div className="relative flex flex-col items-center h-full bg-[var(--color-nuimpact-blue)] rounded-lg px-8 py-14 shadow-xl overflow-hidden">

                {/* White Inset Border */}
                <div className="absolute inset-4 border-2 border-white pointer-events-none rounded-lg z-10" />

                {/* Title */}
                <h3 className="text-3xl font-bold text-white text-center mb-4 drop-shadow-sm relative z-20">
                    {title.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                    ))}
                </h3>

                {/* Price */}
                <div className="text-6xl font-black mb-10 relative z-20 text-white">
                    ${amount}
                </div>

                {/* Benefits List */}
                <div className="flex-grow w-full space-y-4 mb-12 px-2 relative z-20">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-3 text-white">
                            <FaCheck className="flex-shrink-0 text-white w-5 h-5" />
                            <span className="text-xl font-medium">{benefit}</span>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <button className="w-full py-4 px-6 text-xl font-bold tracking-wide text-[var(--color-nuimpact-blue)] uppercase bg-white rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 relative z-20">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default DonateCards;
