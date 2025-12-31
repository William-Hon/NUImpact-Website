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
            className="flex flex-col md:flex-row w-full max-w-5xl mx-auto overflow-hidden shadow-lg md:h-[450px] relative"
            style={{ backgroundColor }}
        >
            {/* Inset Border (Black for light cards, White for dark cards) */}
            <div className={`absolute inset-4 border-[4px] pointer-events-none z-10 ${isLightBg ? 'border-black' : 'border-white'}`} />

            {/* Left Column: Brand & Facts */}
            <div className="flex-1 p-6 md:p-8 flex flex-col border-r border-black/10">
                <div className="flex flex-col h-full justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: regularTextColor }}>{name}</h2>
                        </div>

                        <div className="h-20 flex items-center mb-6">
                            {logo ? (
                                <img src={logo} alt={`${name} logo`} className="max-h-full w-auto object-contain object-left" />
                            ) : (
                                <div className="text-5xl font-bold opacity-40" style={{ color: regularTextColor }}>{name[0]}</div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-2xl font-bold " style={{ color: headerColor }}>Key Facts</h3>
                        <div className="divide-y divide-black/10 text-sm md:text-base">
                            <div className="flex justify-between py-1.5 gap-4 ">
                                <span className="font-bold whitespace-nowrap" style={{ color: headerColor }}>Year Invested</span>
                                <span className="text-right" style={{ color: regularTextColor }}>{keyFacts.yearInvested}</span>
                            </div>
                            <div className="flex justify-between py-1.5 gap-4">
                                <span className="font-bold whitespace-nowrap" style={{ color: headerColor }}>Check Size</span>
                                <span className="text-right" style={{ color: regularTextColor }}>{keyFacts.checkSize}</span>
                            </div>
                            <div className="flex justify-between py-1.5 gap-4">
                                <span className="font-bold whitespace-nowrap" style={{ color: headerColor }}>Vehicle</span>
                                <span className="text-right" style={{ color: regularTextColor }}>{keyFacts.vehicle}</span>
                            </div>
                            <div className="flex justify-between py-1.5 gap-4">
                                <span className="font-bold whitespace-nowrap" style={{ color: headerColor }}>Vertical</span>
                                <span className="text-right" style={{ color: regularTextColor }}>{keyFacts.vertical}</span>
                            </div>
                            <div className="flex justify-between py-1.5 gap-4">
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

            {/* Right Column: Description & Testimonial */}
            <div className="flex-[1.2] p-8 md:p-10 flex flex-col overflow-hidden">
                <div className="flex-[6] overflow-y-auto pr-2 custom-scrollbar mb-6">
                    <div className="space-y-4">
                        {description.map((para, i) => (
                            <p key={i} className="text-lg leading-relaxed" style={{ color: regularTextColor }}>
                                {para}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="flex-[4] flex flex-col justify-end pt-6 border-t border-black/10">
                    <div className="flex items-start gap-4">
                        <img
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-white/50"
                        />
                        <div className="flex-1">
                            <div className="flex gap-2 text-2xl mb-1 opacity-80 leading-none" style={{ color: regularTextColor }}>
                                <span>"</span>
                            </div>
                            <p className="text-base italic leading-snug mb-3" style={{ color: regularTextColor }}>
                                {testimonial.quote}
                            </p>
                            <div>
                                <div className="text-lg font-bold" style={{ color: headerColor }}>{testimonial.author}</div>
                                <div className="text-base opacity-80" style={{ color: headerColor }}>{testimonial.role}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
