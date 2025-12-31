import React from 'react';
import DonateCards from '../components/DonateCards';

const DonationSection = () => {
    return (
        <section className="bg-white py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-[var(--color-nuimpact-light-blue)]/40 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-[var(--color-nuimpact-blue)]/40 rounded-full blur-[100px] pointer-events-none" />
            {/* Header */}
            <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-nuimpact-dark-blue)] tracking-wide">
                    Your Path To Impact
                </h2>
            </div>

            {/* Cards Grid */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-12 max-w-5xl mx-auto relative z-10">
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
            <div className="max-w-3xl mx-auto text-center mt-16 px-4 relative z-10">
                <p className="text-slate-700 text-lg md:text-xl font-light leading-relaxed">
                    Amplify the IMPACT of your donation through your company's matching gift program!
                </p>
            </div>
        </section>
    );
};

export default DonationSection;
