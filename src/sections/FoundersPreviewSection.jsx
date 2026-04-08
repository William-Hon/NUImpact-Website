import React from 'react';
import { useNavigate } from 'react-router-dom';

const FoundersPreviewSection = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-[var(--color-nuimpact-dark-blue)] text-white py-16 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-[var(--color-nuimpact-light-blue)]/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-[300px] h-[300px] bg-white/10 rounded-full blur-[60px] pointer-events-none" />
            
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight drop-shadow-sm">
                        Putting Impact First: The Women Who Started It All
                    </h2>
                    <p className="text-lg text-blue-100 font-medium leading-relaxed mb-8">
                        Over a decade ago, Mindi Chen and Ruby Khan founded NUImpact with a single vision: to build a financial world that drives purpose-oriented results. Read about their journey challenging convention and creating the nation's first student-led impact fund.
                    </p>
                    <button 
                        onClick={() => navigate('/founding-story')}
                        className="bg-white text-[var(--color-nuimpact-darker-blue)] px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl group"
                    >
                        Read Full Article <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
                    </button>
                </div>
                
                <div className="md:w-1/2 flex justify-center md:justify-end">
                     {/* Preview Images collage */}
                     <div className="relative w-full max-w-[240px] md:max-w-[340px] h-[290px] md:h-[380px] mx-auto md:ml-24 md:mr-auto mt-10 md:mt-0">
                        <div className="absolute top-0 right-0 md:-right-4 w-[60%] h-[75%] rounded-none shadow-xl overflow-hidden border-[3px] border-white z-10 transform md:rotate-6 transition-transform hover:z-30 hover:scale-[1.08] duration-300">
                            <img src="/assets/images/ruby.png" alt="Ruby Khan" className="w-full h-full object-cover object-top transform scale-[1.06]" />
                        </div>
                        <div className="absolute bottom-0 left-0 md:-left-4 w-[60%] h-[75%] rounded-none shadow-xl overflow-hidden border-[3px] border-white z-20 transform -rotate-6 transition-transform hover:z-30 hover:scale-105 duration-300">
                            <img src="/assets/images/mindi.png" alt="Mindi Chen" className="w-full h-full object-cover object-top transform scale-[1.06]" />
                        </div>
                     </div>
                </div>
            </div>
        </section>
    );
};

export default FoundersPreviewSection;
