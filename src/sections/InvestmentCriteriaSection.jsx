import { FiTarget, FiDollarSign, FiGlobe, FiTrendingUp } from 'react-icons/fi';

const InvestmentCriteriaSection = () => {
    return (
        <section className="py-16 px-8 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Criteria Items (Left Side, 7 columns) */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="mb-8">
                            <h2 className="text-4xl font-bold mb-4 text-[var(--color-nuimpact-blue)]">What We Look For</h2>
                            <div className="h-1 w-24 bg-[var(--color-nuimpact-blue)]"></div>
                        </div>

                        <div className="space-y-3">
                            {[
                                {
                                    title: "Company Stage",
                                    content: "Pre-seed & Seed",
                                    icon: <FiTarget />
                                },
                                {
                                    title: "Check Size",
                                    content: "$25,000–50,000",
                                    icon: <FiDollarSign />
                                },
                                {
                                    title: "Industry",
                                    content: "Mission-driven companies across all verticals",
                                    icon: <FiGlobe />
                                },
                                {
                                    title: "Revenue & EBITDA",
                                    content: "Revenue Generating; EBITDA: positive or negative",
                                    icon: <FiTrendingUp />
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group p-6 bg-gray-300 border border-gray-100 hover:border-[var(--color-nuimpact-blue)]/30 hover:bg-white transition-all duration-300 hover:shadow-xl flex items-center gap-6"
                                >
                                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center text-4xl text-[var(--color-nuimpact-blue)] group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-[var(--color-nuimpact-blue)] group-hover:text-[var(--color-nuimpact-blue)] transition-colors">{item.title}</h3>
                                        <p className="text-gray-600 group-hover:text-gray-900 transition-colors font-medium">{item.content}</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image (Right Side, 5 columns) */}
                    <div className="lg:col-span-5 relative group">
                        <div className="relative aspect-[4/5] overflow-hidden shadow-2xl border border-gray-200 h-full">
                            <img
                                src="/assets/images/nusis-workshop.png"
                                alt="NUImpact Evaluation"
                                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InvestmentCriteriaSection;
