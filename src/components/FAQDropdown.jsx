import React, { useState } from 'react';

const FAQDropdown = ({ title, faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div style={{ flex: 1, minWidth: '300px' }}>
            {/* Section Title */}
            <h2 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                paddingBottom: '1rem',
                borderBottom: '2px solid #000'
            }}>
                {title}
            </h2>

            {/* FAQ Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {faqs.map((faq, index) => (
                    <div key={index}>
                        {/* Question Row */}
                        <button
                            onClick={() => toggleFAQ(index)}
                            style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '1.5rem 0',
                                border: 'none',
                                background: 'transparent',
                                cursor: 'pointer',
                                textAlign: 'left',
                                borderBottom: '1px solid #000',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            <span style={{
                                fontSize: '1rem',
                                fontWeight: '400',
                                color: '#000',
                                paddingRight: '1rem'
                            }}>
                                {faq.question}
                            </span>
                            <span style={{
                                fontSize: '1.5rem',
                                fontWeight: '300',
                                flexShrink: 0,
                                transition: 'transform 0.3s ease',
                                transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)'
                            }}>
                                +
                            </span>
                        </button>

                        {/* Answer (Expandable) */}
                        <div style={{
                            maxHeight: openIndex === index ? '500px' : '0',
                            overflow: 'hidden',
                            transition: 'max-height 0.3s ease',
                            borderBottom: openIndex === index ? '1px solid #000' : 'none'
                        }}>
                            <div style={{
                                padding: '1.5rem 0',
                                fontSize: '0.95rem',
                                lineHeight: '1.6',
                                color: '#333'
                            }}>
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQDropdown;
