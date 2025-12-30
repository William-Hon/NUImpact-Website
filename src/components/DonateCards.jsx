import React from 'react';
import { FaCheck } from 'react-icons/fa';

const DonateCards = ({ title, amount, benefits = [], buttonText = "Donate" }) => {
    return (
        <div className="relative group w-full max-w-[380px] mx-auto transform transition-all duration-300 hover:scale-105">
            {/* Gradient Border Background */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-orange-400 via-pink-400 to-blue-400 rounded-lg blur-[2px] opacity-100"></div>

            {/* Card Content */}
            <div className="relative flex flex-col items-center h-full bg-[#536AC2] rounded-lg px-8 py-14">

                {/* Header Gradient Line (Optional specific styling from ref image) */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-pink-400 to-blue-400 rounded-t-lg"></div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-white text-center mb-4 drop-shadow-sm">
                    {title.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                    ))}
                </h3>

                {/* Price */}
                <div className="text-6xl font-black mb-10">
                    <span className="bg-gradient-to-r from-orange-400 to-blue-300 bg-clip-text text-transparent drop-shadow-sm filter">
                        ${amount}
                    </span>
                </div>

                {/* Benefits List */}
                <div className="flex-grow w-full space-y-4 mb-12 px-2">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-3 text-white">
                            <FaCheck className="flex-shrink-0 text-black w-5 h-5" />
                            {/* Note: In image checkmarks are black/dark? Hard to tell, looks like black checkmarks. 
                                Actually they look like simple black checkmarks. */}
                            <span className="text-xl font-medium">{benefit}</span>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <button className="w-full py-4 px-6 text-xl font-bold tracking-wide text-[#536AC2] uppercase bg-white rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default DonateCards;
