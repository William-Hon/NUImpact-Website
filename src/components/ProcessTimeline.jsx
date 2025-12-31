import React from 'react';

const ProcessTimeline = ({ steps }) => {
    return (
        <div className="relative w-full max-w-5xl mx-auto px-4 py-8">
            {/* Central Line - Changed to nuimpact-blue */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[var(--color-nuimpact-blue)]/20 hidden md:block" />

            <div className="space-y-8 md:space-y-16">
                {steps.map((step, index) => (
                    <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        {/* Timeline Dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[var(--color-nuimpact-dark-blue)] z-10 hidden md:block" />

                        {/* Content Card - Changed bg/border for light mode */}
                        <div className={`w-full md:w-[46%] ${index % 2 === 0 ? 'md:pl-6' : 'md:pr-6'}`}>
                            <div className="bg-white/40 backdrop-blur-sm border border-[var(--color-nuimpact-dark-blue)]/20 p-6 hover:bg-white/60 transition-all duration-300 shadow-sm hover:shadow-md">
                                <div className="text-[var(--color-nuimpact-blue)] text-xs text-center font-bold uppercase tracking-widest">Step {index + 1}</div>
                                <h3 className="text-2xl text-center font-bold text-[var(--color-nuimpact-darker-blue)] mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">{step.description}</p>
                            </div>
                        </div>

                        {/* Spacer for other side */}
                        <div className="hidden md:block md:w-[46%]" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProcessTimeline;
