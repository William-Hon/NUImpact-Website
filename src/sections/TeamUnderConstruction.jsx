import React from 'react';
import { FaHardHat } from 'react-icons/fa';

const TeamUnderConstruction = () => {
    return (
        <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
            <div className="bg-[var(--color-nuimpact-light-blue)]/20 p-8 rounded-full mb-8 text-[var(--color-nuimpact-blue)]">
                <FaHardHat className="text-6xl md:text-8xl drop-shadow-sm" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--color-nuimpact-dark-blue)] mb-6 uppercase tracking-wide">
                Under Construction
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed font-medium">
                Our team directory is currently being updated as members fill out their profiles!
                Check back soon to meet the incredible students driving NUImpact forward.
            </p>
        </div>
    );
};

export default TeamUnderConstruction;
