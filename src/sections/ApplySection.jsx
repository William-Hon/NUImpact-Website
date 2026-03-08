import React from 'react';

const ApplySection = () => {
    return (
        <section className="py-20 px-4 bg-transparent">
            <div className="max-w-5xl mx-auto">
                {/* Decorative border container */}
                <div className="relative">
                    {/* Inner border frame */}
                    <div className="border-4 border-[var(--color-nuimpact-blue)] p-12 md:p-16">
                        {/* Content */}
                        <div className="text-center text-black">
                            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6">
                                Join Our Team
                            </h2>
                            <div className="w-24 h-1 bg-[var(--color-nuimpact-blue)] mx-auto mb-8"></div>
                            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
                                Interested in making an impact? Applications for the NUImpact Fund and Programming teams open each semester.
                                Join us in our mission to drive social change through strategic investments and educational initiatives. For any questions please contact <a href="mailto:leadership@nuimpactinvesting.com" className="underline hover:text-[var(--color-nuimpact-blue)]">leadership@nuimpactinvesting.com</a>.
                            </p>
                            <button disabled className="px-10 py-4 bg-gray-400 text-white font-bold text-lg rounded-full cursor-not-allowed shadow-none uppercase tracking-wide">
                                Applications are currently closed
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApplySection;
