import React from 'react';
import { motion } from 'framer-motion';

const DonateHeroSection = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="assets/images/student.png"
                    alt="Child giving a thumbs up"
                    className="h-full w-full object-cover"
                />
                {/* Dark Gradient Overlay for better text contrast - Stronger on left */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-start px-6 sm:px-12 lg:px-16">
                <div className="flex max-w-lg flex-col items-start text-left text-white">

                    {/* "Create" - Serif Font */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="font-serif text-7xl md:text-8xl leading-none"
                    >
                        Create
                    </motion.h1>

                    {/* Middle "LASTING" */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="my-2 flex w-full items-center justify-start gap-4"
                    >
                        <span className="text-sm md:text-base font-light tracking-[0.3em] uppercase border-y border-white/50 py-1 px-4">
                            Lasting
                        </span>
                    </motion.div>

                    {/* "IMPACT" - Bold Sans */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-6xl md:text-7xl font-black tracking-tight uppercase mb-6"
                    >
                        Impact
                    </motion.h2>

                    {/* Description Paragraph */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mb-8 text-base md:text-lg font-light leading-relaxed opacity-90"
                    >
                        Help Support the Next Generation of Impact Investors Looking to Make a Lasting Impact.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="group relative px-8 py-3 text-sm font-bold tracking-widest uppercase text-white transition-all hover:text-black cursor-pointer"
                    >
                        <span className="absolute inset-0 border-2 border-white transition-all duration-300 group-hover:bg-white"></span>
                        <span className="relative">Donate Now</span>
                    </motion.button>

                </div>
            </div>
        </section>
    );
};

export default DonateHeroSection;
