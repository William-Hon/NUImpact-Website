import React from 'react';

const SummitComingSoon = () => {
    return (
        <section className="bg-white py-32 px-8">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-xl font-medium text-gray-500 uppercase tracking-widest mb-6">
                    Mark Your Calendars
                </p>
                <h2 className="text-6xl md:text-8xl font-black text-black tracking-tighter mb-4 italic">
                    NUSIS 2026
                </h2>
                <div className="h-1.5 w-24 bg-[var(--color-nuimpact-red)] mx-auto rounded-full mb-8"></div>
                <p className="text-3xl font-bold text-gray-400 uppercase tracking-[0.2em]">
                    Coming Soon
                </p>
            </div>
        </section>
    );
};

export default SummitComingSoon;
