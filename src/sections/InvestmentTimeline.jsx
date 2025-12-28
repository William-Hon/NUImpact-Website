import React from 'react';



const InvestmentTimeline = ({ investments }) => {
    const lineHeightByColor = {
        "var(--color-nuimpact-blue)": "h-36",
        "var(--color-nuimpact-red)": "h-22",
        "var(--color-nuimpact-light-blue)": "h-16",
    };
    return (
        <section className="py-20 px-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-nuimpact-dark-gray">Investment Timeline</h2>

                {/* Legend */}
                <div className="flex gap-8 mb-20 items-center">
                    <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[var(--color-nuimpact-blue)]"></span>
                        <span className="font-bold text-lg">$30,000</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[var(--color-nuimpact-red)]"></span>
                        <span className="font-bold text-lg">$25,000</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[var(--color-nuimpact-light-blue)]"></span>
                        <span className="font-bold text-lg">&lt;$10,000</span>
                    </div>
                </div>

                {/* Timeline Axis */}
                <div className="relative h-80 flex items-center">
                    <div className="absolute w-full h-1 bg-[var(--color-nuimpact-blue)] rounded-full opacity-80" />

                    {(investments || []).map((investment, index) => {
                        const isTop = investment.labelPosition === "top";
                        return (
                            <div
                                key={index}
                                className="absolute flex flex-col items-center"
                                style={{ left: `${investment.position * 100}%` }}
                            >
                                {/* Marker on the line */}
                                <div
                                    className="w-4 h-4 rounded-full z-10 -translate-y-1.1"
                                    style={{ backgroundColor: investment.color }}
                                />

                                {/* Vertical Connector and Label */}
                                <div
                                    className={`absolute flex flex-col ${isTop ? "bottom-2 flex-col-reverse" : "top-2"} items-start whitespace-nowrap`}
                                    style={{ left: '50%', transform: 'translateX(-1px)' }}
                                >
                                    {/* Vertical line */}
                                    <div
                                        className={`w-[2px] ${lineHeightByColor[investment.color]}`}
                                        style={{ backgroundColor: investment.color }}
                                    />

                                    {/* Text Content */}
                                    <div className={`flex flex-col items-start ${isTop ? "pb-2" : "pt-2"}`}>
                                        <div className="font-bold text-lg leading-tight">{investment.year}</div>
                                        <div className="text-lg leading-tight">{investment.name}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default InvestmentTimeline;