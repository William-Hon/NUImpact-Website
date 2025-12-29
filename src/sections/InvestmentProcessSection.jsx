
import ProcessTimeline from "../components/ProcessTimeline";
import ImageSlider from "../components/ImageSlider";
import { Link } from "react-router-dom";
const InvestmentProcessSection = () => {
    const processSteps = [
        {
            title: "Sourcing",
            description: "Our semester begins with sourcing, where our students reach out to our network and utilize local accelerators and pitch nights to connect with potential investments."
        },
        {
            title: "Diligence",
            description: "Student analysts continue conversations with our potential investments, conducting research on the company and impact. Analysts consult with our advisors and put together Investment Review Memorandums for review of our Investment Committee."
        },
        {
            title: "Investment Decision",
            description: "Our Investment Committee votes on whether or not to invest in the companies that the analyst teams have pitched. If the Investment Committee votes yes, diligence may continue for a few more weeks before closing the investment."
        },
        {
            title: "Portfolio Management",
            description: "Our Fund Operations team and our Leadership Team continue to support and stay updated on our portfolio companies, connecting them with resources within the Northeastern entrepreneurial ecosystem when possible."
        }
    ];

    const scrollImages = [
        "/assets/images/2019-impact-report.png",
        "/assets/images/2022-impact-report.png",
        "/assets/images/2024-V1-impact-report.png",
        "/assets/images/2024-V2-impact-report.png",
        "/assets/images/2025-impact-report.png",
    ];
    return (
        <>
            {/* Process Section */}
            <section className="py-16 px-8">
                <div className="max-w-7xl mx-auto mb-12 text-center">
                    <h2 className="text-4xl font-bold mb-4">Our Process</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        A rigorous, student-led diligence process that ensures every dollar is deployed with intention.
                    </p>
                </div>
                <ProcessTimeline steps={processSteps} />
            </section >

            {/* Impact Section */}
            < section className="py-16 px-8 bg-[var(--color-nuimpact-blue)] text-white" >
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6 italic">Measured Impact, Proven Returns.</h2>
                    <p className="text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
                        We utilize proprietary impact measurement frameworks to track and report on the specific social and environmental outcomes of our portfolio companies.
                    </p>
                    <div className="max-w-5xl mx-auto mb-12">
                        <ImageSlider images={scrollImages} mode="auto" gap="gap-3" />
                    </div>
                    <Link
                        to="/our-impact"
                        className="px-10 py-3 bg-white text-[var(--color-nuimpact-blue)] font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-black/50">
                        View Our Impact Report
                    </Link>
                </div>
            </section >
        </>
    );
};

export default InvestmentProcessSection;
