const InvestmentPhilosophy = () => {
    return (
        <section className="py-16 px-8 bg-[var(--color-nuimpact-darker-blue)] text-white text-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <p className="text-3xl md:text-4xl font-bold leading-tight">
                    We believe that capital should be a tool for positive change, not just profit.
                </p>
                <div className="my-8 h-1 w-24 bg-[var(--color-nuimpact-light-blue)] mx-auto"></div>
                <a
                    href="mailto:leadership@nuimpactinvesting.com"
                    className="inline-flex items-center justify-center px-6 py-2 bg-[var(--color-nuimpact-light-blue)] text-[var(--color-nuimpact-darker-blue)] text-sm md:text-base font-bold rounded-full hover:bg-white transition-colors duration-300 shadow-lg"
                >
                    Get in contact with our team
                </a>
            </div>
        </section>
    );
};

export default InvestmentPhilosophy;