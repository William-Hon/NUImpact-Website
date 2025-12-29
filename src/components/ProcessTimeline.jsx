import React from 'react';

const ProcessTimeline = ({ steps }) => {
    return (
        <div className="relative w-full max-w-5xl mx-auto px-4 py-8">
            {/* Central Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/10 hidden md:block" />

            <div className="space-y-8 md:space-y-16">
                {steps.map((step, index) => (
                    <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        {/* Timeline Dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[var(--color-nuimpact-blue)] z-10 hidden md:block" />

                        {/* Content Card */}
                        <div className={`w-full md:w-[46%] ${index % 2 === 0 ? 'md:pl-6' : 'md:pr-6'}`}>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                                <div className="text-white/40 text-sm font-bold uppercase tracking-widest mb-2">Step {index + 1}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
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
