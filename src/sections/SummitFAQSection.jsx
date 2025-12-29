import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

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

const SummitFAQSection = () => {
    const faqs = [
        {
            question: "Where is the conference?",
            answer: "The Northeastern University Sustainable Investing Summit is held on our Boston campus. Specific building and room details will be shared with registered attendees via email closer to the event date."
        },
        {
            question: "What do I wear?",
            answer: "The dress code for the summit is business casual. We recommend comfortable footwear as there will be opportunities for networking and moving between breakout sessions."
        },
        {
            question: "What does my ticket cover when I attend this event?",
            answer: "Your ticket includes full access to all keynote speeches, panel discussions, and workshop sessions. It also covers networking lunch, coffee breaks, and the evening reception."
        },
        {
            question: "Are meals included with my registration?",
            answer: "Yes! Registration includes a networking lunch and light refreshments during coffee breaks throughout the day. Please indicate any dietary restrictions during the registration process."
        },
        {
            question: "Will I be able to meet the speakers and other attendees?",
            answer: "Absolutely. We have dedicated networking blocks and an evening reception specifically designed to facilitate conversations between students, industry professionals, and our featured speakers."
        },
        {
            question: "Who should I contact if I have any questions or if I can't go anymore?",
            answer: "Please contact NUImpact at nu.impact.investing@gmail.com and someone from our team will get back to you."
        }
    ];

    return (
        <section className="bg-white py-32 px-8">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-bold text-black mb-16 tracking-tighter">
                    Frequently Asked Questions
                </h2>

                <div className="border-t border-black">
                    {faqs.map((faq, index) => (
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
