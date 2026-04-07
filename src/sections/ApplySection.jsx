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
                            <a 
                                href="https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSdlMCfFjfUm5PL3xRYYlsYDQ0P0RCH16VN7eQjPi-AH4FhB-A%2Fviewform%3Fusp%3Ddialog&data=05%7C02%7Chon.w%40northeastern.edu%7Cf0c11df5843e4fe2da6a08de94d766e1%7Ca8eec281aaa34daeac9b9a398b9215e7%7C0%7C0%7C639111850026299687%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=fESxZ4nQk8ZELeY4%2Bhlsv70LJfaYimWe0PCWk2n2bP0%3D&reserved=0" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-block px-10 py-4 bg-[var(--color-nuimpact-blue)] hover:opacity-90 text-white font-bold text-lg rounded-full uppercase tracking-wide transition-opacity duration-300"
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApplySection;
