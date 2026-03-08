import { FiTarget, FiDollarSign, FiGlobe, FiTrendingUp } from 'react-icons/fi';
import { FaBookOpen, FaMicrochip, FaLeaf, FaSeedling, FaHeartbeat } from 'react-icons/fa';

const InvestmentCriteriaSection = () => {
    return (
        <section className="py-16 px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
                    {/* Criteria Items (Left Side, 7 columns) */}
                    <div className="lg:col-span-7 flex flex-col h-full">
                        <div className="mb-8">
                            <h2 className="text-4xl font-bold mb-4 text-[var(--color-nuimpact-darker-blue)]">What We Look For</h2>
                            <div className="h-1 w-24 bg-[var(--color-nuimpact-darker-blue)]"></div>
                        </div>

                        <div className="flex flex-col justify-between flex-grow space-y-3">
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
                                    className="group p-6 bg-gray-300 hover:border-[var(--color-nuimpact-darker-blue)]/50 hover:bg-white transition-all duration-300 hover:shadow-xl flex items-center gap-6"
                                >
                                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center text-4xl text-[var(--color-nuimpact-darker-blue)] group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-[var(--color-nuimpact-darker-blue)] group-hover:text-[var(--color-nuimpact-darker-blue)] transition-colors">{item.title}</h3>
                                        <p className="text-gray-600 group-hover:text-gray-900 transition-colors font-medium">{item.content}</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Verticals (Right Side, 5 columns) */}
                    <div className="lg:col-span-5 relative flex flex-col h-full">
                        <div className="bg-white p-6 shadow-2xl border border-gray-100 rounded-none flex flex-col h-full justify-between">
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--color-nuimpact-darker-blue)] text-center border-b pb-4">
                                Industry Verticals
                            </h3>
                            <div className="flex flex-col justify-between flex-grow">
                                {[
                                    { name: "Education & Media", icon: <FaBookOpen /> },
                                    { name: "Technology & Financial Services", icon: <FaMicrochip /> },
                                    { name: "Energy & Environment", icon: <FaLeaf /> },
                                    { name: "Food & Agriculture", icon: <FaSeedling /> },
                                    { name: "Healthcare", icon: <FaHeartbeat /> }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-6 group cursor-default">
                                        <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 text-[var(--color-nuimpact-blue)] group-hover:bg-[var(--color-nuimpact-blue)] group-hover:text-white transition-colors duration-300 text-2xl shadow-sm">
                                            {item.icon}
                                        </div>
                                        <span className="text-xl font-bold text-gray-700 group-hover:text-[var(--color-nuimpact-darker-blue)] transition-colors">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InvestmentCriteriaSection;
