import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { summitFaqs } from '../data/SummitFAQ';

{/* faq single item dropdown */ }
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-black py-6">
            <button
                className="w-full flex items-start text-left group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-2xl font-light mr-6 mt-1 transition-transform duration-300">
                    {isOpen ? <FiMinus className="text-gray-400" /> : <FiPlus className="text-black" />}
                </span>
                <span className="text-2xl md:text-3xl font-medium text-black leading-tight tracking-tight">
                    {question}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pt-6 pb-2 pl-12 text-xl text-gray-600 leading-relaxed max-w-4xl">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

{/* full faq section */ }
const SummitFAQSection = () => {

    return (
        <section className="bg-transparent py-32 px-8">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-5xl text-center md:text-7xl font-bold text-black mb-16 tracking-tighter">
                    Frequently Asked Questions
                </h2>

                <div className="border-t border-black">
                    {summitFaqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SummitFAQSection;
