import React from 'react';
import DonateCards from '../components/DonateCards';

const DonationSection = () => {
    return (
        <section className="bg-[#4F68C4] py-20 px-4 sm:px-8 lg:px-16">
            {/* Header */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                    Your Path To Impact
                </h2>
            </div>

            {/* Cards Grid */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 lg:gap-2 max-w-5xl mx-auto">
                <DonateCards
                    title="Personal Investment"
                    amount="0.00"
                    benefits={['Benefit', 'Benefit', 'Benefit']}
                />
                <DonateCards
                    title="Corporate Partnership"
                    amount="0.00"
                    benefits={['Benefit', 'Benefit', 'Benefit']}
                />
            </div>

            {/* Footer Text */}
            <div className="max-w-3xl mx-auto text-center mt-16 px-4">
                <p className="text-white text-lg md:text-xl font-light leading-relaxed">
                    Amplify the IMPACT of your donation through your company's matching gift program!
                </p>
            </div>
        </section>
    );
};

export default DonationSection;
