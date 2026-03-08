import React from 'react';
import { FaGraduationCap, FaRegChartBar, FaUniversity, FaUsers, FaBriefcase, FaHourglassHalf, FaArrowRight } from 'react-icons/fa';

const DonationSection = () => {
    return (
        <section className="bg-white py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-[var(--color-nuimpact-light-blue)]/30 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-[var(--color-nuimpact-blue)]/30 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-12 lg:gap-20">

                {/* Header Thesis */}
                <div className="text-center max-w-5xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-nuimpact-darker-blue)] leading-tight">
                        NUImpact is training the next generation of impact investors, meaning that donors are supporting investment in student development as much as companies.
                    </h2>
                    <div className="h-1 w-32 bg-[var(--color-nuimpact-blue)] mx-auto"></div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

                    {/* Left Column - Core Principles */}
                    <div className="flex flex-col gap-10 h-full">
                        <div className="bg-gray-50 border border-gray-100 p-8 rounded-none shadow-lg transition-all duration-300 flex-1 flex flex-col justify-center">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
                                <div className="p-4 bg-[var(--color-nuimpact-light-blue)]/20 text-[var(--color-nuimpact-blue)] rounded-none flex-shrink-0">
                                    <FaGraduationCap className="text-3xl" />
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                                    Student-led diligence and deal exposure provides unparalleled experiential learning opportunities for students to prepare them for future roles.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-50 border border-gray-100 p-8 rounded-none shadow-lg transition-all duration-300 flex-1 flex flex-col justify-center">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
                                <div className="p-4 bg-[var(--color-nuimpact-light-blue)]/20 text-[var(--color-nuimpact-blue)] rounded-none flex-shrink-0">
                                    <FaRegChartBar className="text-3xl" />
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                                    The deployment of capital into socially and environmentally impactful startups offsets Northeastern's impact in the community and successful investments lead to gains that help NUImpact develop as an evergreen fund.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Impact Metrics & Influence */}
                    <div className="flex flex-col h-full">
                        <div className="bg-[var(--color-nuimpact-darker-blue)] text-white p-8 md:p-10 rounded-none shadow-2xl relative overflow-hidden group flex-1 flex flex-col justify-between">
                            <div className="absolute top-0 right-0 p-24 bg-white/5 rounded-none pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>

                            <div>
                                <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                                    <FaUniversity className="text-[var(--color-nuimpact-light-blue)]" /> Impact on Students
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-[var(--color-nuimpact-light-blue)]">
                                            <FaUsers className="text-xl" />
                                            <span className="font-semibold uppercase tracking-wider text-sm">Members</span>
                                        </div>
                                        <div className="text-5xl lg:text-6xl font-bold">80+</div>
                                        <div className="text-base opacity-90 leading-snug">Active students in the club gaining experiential learning</div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-[var(--color-nuimpact-light-blue)]">
                                            <FaBriefcase className="text-xl" />
                                            <span className="font-semibold uppercase tracking-wider text-sm">Careers</span>
                                        </div>
                                        <div className="text-5xl lg:text-6xl font-bold">100+</div>
                                        <div className="text-base opacity-90 leading-snug">Job placements in finance and impact firms</div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/20">
                                <p className="text-lg md:text-xl leading-relaxed text-blue-100 italic">
                                    We provide robust professional development through hands-on investment cycles, industry networking, and comprehensive experiential learning.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Donate Now */}
                <div className="py-8 relative z-20 overflow-visible">
                    {/* Gradient Splotch Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] md:w-[700px] h-[250px] md:h-[300px] bg-[var(--color-nuimpact-blue)]/60 rounded-[100%] blur-[70px] md:blur-[100px] pointer-events-none -z-10"></div>

                    <div className="flex flex-col items-center gap-8 justify-center px-4 md:px-8">
                        <div className="max-w-4xl text-center relative z-10">
                            <h3 className="text-3xl md:text-4xl font-black text-[var(--color-nuimpact-dark-blue)] uppercase tracking-wide mb-6 drop-shadow-sm">Why Donate Now?</h3>
                            <p className="text-gray-800 text-xl lg:text-2xl leading-relaxed font-medium">
                                Our dry powder runway is currently limited. We have approximately <strong className="font-black text-black">6 semesters left</strong> of deployable capital before our ability to invest in new mission-driven companies is constrained.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="flex justify-center mt-8 mb-8">
                    <a href="https://give.northeastern.edu/student-opportunities/DN5215-83.html" target="_blank" rel="noopener noreferrer" className="group relative px-12 py-5 lg:px-16 lg:py-6 text-lg lg:text-2xl font-bold tracking-widest uppercase text-[var(--color-nuimpact-blue)] transition-all hover:text-white cursor-pointer inline-block">
                        <span className="absolute inset-0 border-[3px] md:border-4 border-[var(--color-nuimpact-blue)] transition-all duration-300 group-hover:bg-[var(--color-nuimpact-blue)]"></span>
                        <span className="relative z-10">Donate Now</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default DonationSection;
