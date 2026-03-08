import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const PortfolioCard = ({ company }) => {
    if (!company) return null;

    const {
        name,
        backgroundColor,
        headerColor = 'inherit',
        regularTextColor = 'inherit',
        logo,
        keyFacts,
        description,
        testimonial
    } = company;

    const isLightBg = backgroundColor?.includes('dorchester') || backgroundColor?.includes('eatwell') || backgroundColor?.includes('agritrak') || backgroundColor?.includes('imago');

    return (
        <div
            className="flex flex-col md:flex-row w-full max-w-5xl mx-auto overflow-hidden shadow-lg h-auto md:min-h-[450px] relative"
            style={{ backgroundColor }}
        >
            {/* Inset Border (Black for light cards, White for dark cards) */}
            <div className={`absolute inset-2 md:inset-4 border-[2px] md:border-[4px] pointer-events-none z-10 ${isLightBg ? 'border-black' : 'border-white'}`} />

            {/* Left Column: Brand & Facts */}
            <div className="flex-1 p-6 md:p-8 flex flex-col md:border-r border-b md:border-b-0 border-black/10">
                <div className="flex flex-col h-full justify-between gap-2 md:gap-0">
                    <div>
                        <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-4">
                            <h2 className="text-lg md:text-4xl font-bold tracking-tight" style={{ color: regularTextColor }}>{name}</h2>
                        </div>

                        <div className="h-8 md:h-20 flex items-center mb-2 md:mb-6">
                            {logo ? (
                                <img src={logo} alt={`${name} logo`} className="max-h-full w-auto object-contain object-left" />
                            ) : (
                                <div className="text-2xl md:text-5xl font-bold opacity-40" style={{ color: regularTextColor }}>{name[0]}</div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-1 md:space-y-3">
                        <h3 className="text-sm md:text-2xl font-bold " style={{ color: headerColor }}>Key Facts</h3>
                        <div className="divide-y divide-black/10 text-[10px] md:text-base">
                            <div className="flex justify-between py-0.5 md:py-1.5 gap-4 ">
                                <span className="font-bold whitespace-nowrap" style={{ color: headerColor }}>Year Invested</span>
                                <span className="text-right" style={{ color: regularTextColor }}>{keyFacts.yearInvested}</span>
                            </div>
                            <div className="flex justify-between py-0.5 md:py-1.5 gap-4">
                                <span className="font-bold whitespace-nowrap" style={{ color: headerColor }}>Check Size</span>
                                <span className="text-right" style={{ color: regularTextColor }}>{keyFacts.checkSize}</span>
                            </div>
                            <div className="flex justify-between py-0.5 md:py-1.5 gap-4">
                                <span className="font-bold whitespace-nowrap" style={{ color: headerColor }}>Vehicle</span>
                                <span className="text-right" style={{ color: regularTextColor }}>{keyFacts.vehicle}</span>
                            </div>
                            <div className="flex justify-between py-0.5 md:py-1.5 gap-4">
                                <span className="font-bold whitespace-nowrap" style={{ color: headerColor }}>Vertical</span>
                                <span className="text-right" style={{ color: regularTextColor }}>{keyFacts.vertical}</span>
                            </div>
                            <div className="flex justify-between py-0.5 md:py-1.5 gap-4">
                                <span className="font-bold whitespace-nowrap" style={{ color: headerColor }}>Website</span>
                                <a
                                    href={keyFacts.websiteLink}
                                    target="_blank"
                                    style={{ color: regularTextColor }}
                                    className="underline flex items-center gap-1 hover:opacity-70 transition-opacity"
                                >
                                    {keyFacts.website}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Description */}
            <div className="flex-[1.2] p-6 md:p-10 flex flex-col justify-start">
                <div className="w-full">
                    <div className="space-y-3 md:space-y-4">
                        {description.map((para, i) => (
                            <p key={i} className="text-sm md:text-lg leading-relaxed" style={{ color: regularTextColor }}>
                                {para}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
