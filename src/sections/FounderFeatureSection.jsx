import React from 'react';

const FounderFeatureSection = () => {
    return (
        <section id="founder-feature" className="bg-white py-12 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-nuimpact-light-blue)]/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-nuimpact-blue)]/20 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="max-w-3xl mx-auto relative z-10">
                {/* Article Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--color-nuimpact-darker-blue)] leading-tight mb-6">
                        Putting Impact First: How Two First-Generation Graduates Built One of the Nation's First Student-Led Impact Funds
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto">
                        Mindi Chen '17 and Ruby Khan '16 on founding NUImpact, challenging convention, and a decade of investing with purpose
                    </p>
                </div>

                {/* Hero Images - Founders Combined */}
                <div className="mb-10 flex justify-center">
                    <div className="max-w-xl w-full">
                        <div className="flex shadow-2xl rounded-none overflow-hidden bg-white">
                            {/* Mindi Image */}
                            <div className="w-1/2 overflow-hidden relative" style={{ aspectRatio: '4/5' }}>
                                <img 
                                    src="/assets/images/mindi.png" 
                                    alt="Mindi Chen '17" 
                                    className="w-full h-full object-cover object-top transform scale-[1.06]" 
                                />
                            </div>
                            
                            {/* No Gap Between Images */}
                            
                            {/* Ruby Image */}
                            <div className="w-1/2 overflow-hidden relative" style={{ aspectRatio: '4/5' }}>
                                <img 
                                    src="/assets/images/ruby.png" 
                                    alt="Ruby Khan '16" 
                                    className="w-full h-full object-cover object-top transform scale-[1.06]" 
                                />
                            </div>
                        </div>
                        
                        <div className="mt-5 flex items-center justify-between border-b pb-4 border-gray-200 px-2 lg:px-0">
                            <p className="text-sm text-gray-500 font-sans italic">
                                NUImpact co-founders Mindi Chen '17 (left) and Ruby Khan '16 (right)
                            </p>
                            <span className="text-xs font-semibold text-[var(--color-nuimpact-blue)] uppercase tracking-wider hidden sm:block">NUImpact Founders</span>
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <div className="mx-auto text-gray-800 leading-[1.8] font-serif text-base md:text-lg space-y-6">
                    <p>
                        Both Mindi and Ruby believe in putting impact first no matter the industry. Over ten years ago, Sara Minard's impact investing class at Northeastern University sparked NUImpact's co-founders' initial interest in impact investing. Here, they discovered a financial world that drives purpose-oriented results: impact investing.
                    </p>

                    <p>
                        Both first-generation college graduates, Mindi graduated with a degree in finance and accounting, and Ruby graduated with a degree in finance, marketing, and entrepreneurship. Mindi first came into Northeastern as an architecture student, but made the switch to business when she realized what she loved most about architecture was design thinking and problem solving.
                    </p>

                    <p>
                        At the D'Amore-McKim School of Business, Mindi discovered social entrepreneurship and impact investing. Founding NUImpact was like connecting puzzle pieces for Mindi, as she merged her design thinking to her business strategy mindset. Mindi co-founded NUImpact to not only fund early-stage ventures, but to give students the opportunity to explore diverse career paths in impact investing.
                    </p>

                    <p>
                        Ruby joined Northeastern in 2011, just after the 2008 financial crisis rocked the economy. She saw an opportunity to reimagine business frameworks and wanted to make her footprint on the business world with ethical guardrails. When reflecting on founding NUImpact, Ruby said it was a combination of personal reflection and critical urgency of the current financial market during her time at Northeastern.
                    </p>

                    <div className="flex items-center justify-center my-14">
                        <div className="h-[1px] w-24 bg-gray-300"></div>
                        <div className="mx-4 text-gray-400 font-sans text-sm tracking-widest uppercase">The Impact First Approach</div>
                        <div className="h-[1px] w-24 bg-gray-300"></div>
                    </div>

                    <h3 className="text-2xl font-bold text-[var(--color-nuimpact-dark-blue)] mt-10 mb-4 font-sans">Building the Foundation</h3>

                    <p>
                        NUImpact's co-founders faced different initial challenges when founding NUImpact. With a focus on cultivating relationships with the Northeastern faculty and administration, Mindi and Ruby had to define the value-add that NUImpact brought to Northeastern: driving the future of social impact and impact investing.
                    </p>

                    <p>
                        At the time, Ruby explained that there was ideological resistance from parts of the administration who did not believe in impact investing yet, believing that finance purely existed to maximize shareholder value and generate profit. Ruby was told that finance was not "save the whales and the oceans," but together, she and Mindi continued to meet with countless Northeastern faculty members and university leadership.
                    </p>

                    <p>
                        NUImpact's foundational turning point was gauging Northeastern student engagement. Once Mindi and Ruby saw that impact investing was something students wanted, they knew it had to be accomplished. Mindi and Ruby pitched NUImpact to the D'Amore-McKim Dean, Raj Echambadi, and he strongly believed in the future of impact investing at Northeastern. They received further support from Northeastern's law school and Carl Valenstein, NUImpact's pro-bono lawyer, to review diligence and term sheets from investments. NUImpact also joined MOSAIC, an organization of student-led entrepreneurship organizations, to further build a foundation in Northeastern's entrepreneurial ecosystem.
                    </p>

                    <h3 className="text-2xl font-bold text-[var(--color-nuimpact-dark-blue)] mt-10 mb-4 font-sans">A Decade of Student-Led Impact</h3>

                    <p>
                        For the last decade, NUImpact has been student-led, funding organizations that are student-sourced. Mindi and Ruby intentionally made NUImpact open to all undergraduate majors, not just the business school, to make NUImpact accessible. They further focused on reaching more women and encouraging them to go into finance spaces by providing them with a deeper understanding of financial literacy of capital and sustainable consumerism.
                    </p>

                    <p>
                        With the goal to increase the number of students who are aware of the opportunities in impact investing and social entrepreneurship, it was additionally important to create a community of motivated, passionate students. The community Mindi hoped to develop through NUImpact has come full circle at NUImpact's conference NUSIS Spring 2026, with an alumni panel highlighting former members now in the impact investing space.
                    </p>

                    <p>
                        Beyond the financial learning opportunities NUImpact offers, Ruby further hoped to inspire students to live an impact-first life, personally and professionally. By creating a global impact investing network that aligns capital with consciousness to promote an equitable, sustainable, and inclusive world, Ruby wanted to showcase that impact should not be an afterthought, but a central guiding north star in every business decision.
                    </p>

                    <h3 className="text-2xl font-bold text-[var(--color-nuimpact-dark-blue)] mt-10 mb-4 font-sans">Looking Back, Looking Forward</h3>

                    <p>
                        Reflecting on her time at Northeastern, Ruby is proud that she and Mindi created one of the first student-led impact funds at an undergraduate institution without compromising their values. To be an ambitious and true leader building something sustainable and inclusive, Ruby highlighted that it is critical to hold onto your values especially when it is inconvenient.
                    </p>

                    <div className="my-10 border-l-4 border-[var(--color-nuimpact-blue)] pl-6 py-3 bg-gray-50 relative">
                        <div className="absolute -left-3 -top-3 text-5xl text-[var(--color-nuimpact-light-blue)] opacity-50 font-serif leading-none">"</div>
                        <p className="text-xl md:text-2xl italic text-gray-700 font-medium leading-[1.6] m-0 relative z-10 text-center">
                            Talent is universal, opportunity is not.
                        </p>
                    </div>

                    <p>
                        After ten years, NUImpact continues to strive to give opportunities to expose students to investing with a purpose. As Ruby said, "Talent is universal, opportunity is not." For students interested in starting mission-driven initiatives, Ruby and Mindi recommend starting your initiative before every detail is perfect, to challenge yourself to dream audaciously, and to never trade your principles for permission.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FounderFeatureSection;
