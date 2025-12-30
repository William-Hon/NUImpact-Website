import React from 'react';

const StudentTestimonials = ({ testimonials }) => {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Hear from our Members
                </h2>

                {/* Testimonials */}
                <div className="space-y-16">
                    {testimonials.map((testimonial, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div key={index}>
                                {/* Testimonial Row */}
                                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                                    {/* Image */}
                                    <div className="w-full md:w-1/2 flex-shrink-0">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>

                                    {/* Text Content */}
                                    <div className="w-full md:w-1/2">
                                        <h3 className="text-2xl font-bold mb-2">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-sm font-semibold mb-4 uppercase tracking-wide">
                                            {testimonial.year}
                                        </p>
                                        <p className="text-base leading-relaxed">
                                            {testimonial.quote}
                                        </p>
                                    </div>
                                </div>

                                {/* Divider line (except after last item) */}
                                {index < testimonials.length - 1 && (
                                    <div className="border-b border-gray-300 mt-16"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default StudentTestimonials;
