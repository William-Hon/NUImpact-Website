import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaGlobe, FaArrowRight } from 'react-icons/fa6';

const PressReleaseSection = () => {
  return (
    <section className="relative py-24 px-6 md:px-16 bg-white flex justify-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 space-y-8"
        >
          {/* Label */}
          <div className="inline-block px-4 py-1 bg-[var(--color-nuimpact-blue)] text-white font-bold text-sm uppercase tracking-wider">
            Latest Press Release
          </div>
          
          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
            NUImpact Backs LymeAlert
          </h2>

          {/* Body Text */}
          <div className="relative border-l-4 border-[var(--color-nuimpact-blue)] pl-6 space-y-4">
            <p className="text-xl text-black font-medium leading-relaxed">
              Boston, Massachusetts, March 2026 - NUImpact, Northeastern University’s premier impact venture capital fund, has backed LymeAlert, a healthtech startup developing rapid at-home tick testing technology, as part of its $2.5M financing led by Bay Area Lyme Ventures.
            </p>
            <p className="text-lg text-black leading-relaxed">
              LymeAlert seeks to improve early awareness and action around Lyme exposure with an at-home Borrelia Burgdorferi testing kit. This investment marks NUImpact’s third investment within the healthcare vertical and illustrates strong alignment with NUImpact’s mission of strategic capital deployment to mission-driven companies.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <a 
              href="/assets/pdfs/LymeAlert%20Press%20Release%20-%20March%202026%20(1).pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-1 items-center justify-center gap-3 bg-[var(--color-nuimpact-blue)] text-white px-8 py-4 font-bold text-lg hover:bg-[var(--color-nuimpact-dark-blue)] transition-all shadow-md hover:shadow-xl"
            >
              <FaFilePdf size={20} />
              Read Full Release
              <FaArrowRight className="opacity-0 w-0 group-hover:w-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden" />
            </a>
            
            <a 
              href="https://www.lymealert.com/home" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-1 items-center justify-center gap-3 bg-black text-white px-8 py-4 font-bold text-lg hover:bg-[var(--color-nuimpact-blue)] hover:text-white transition-all shadow-md hover:shadow-xl"
            >
              <FaGlobe size={20} />
              Visit LymeAlert
              <FaArrowRight className="opacity-0 w-0 group-hover:w-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden" />
            </a>
          </div>
        </motion.div>

        {/* Right Visual element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 w-full"
        >
          <div className="relative w-full min-h-[500px] shadow-xl bg-[var(--color-nuimpact-blue)] p-12 flex flex-col justify-between overflow-hidden">
             
             {/* Decorative background element */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-20 transform rotate-12 -mr-16 -mt-16"></div>
             <div className="absolute bottom-0 left-0 w-48 h-48 bg-black opacity-10 transform -rotate-12 -ml-12 -mb-12"></div>
             
             <div className="relative z-10">
                <div className="w-16 h-16 bg-white shadow-lg flex items-center justify-center mb-8">
                  <svg className="w-8 h-8 text-[var(--color-nuimpact-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-white text-4xl sm:text-5xl font-extrabold leading-tight">
                  Advancing <br/>
                  <span className="text-white">
                    Healthtech
                  </span> <br/>
                  Innovation
                </h3>
             </div>

             <div className="relative z-10 bg-white border-l-8 border-[var(--color-nuimpact-blue)] p-6 mt-8 shadow-md">
                <p className="text-sm text-[var(--color-nuimpact-blue)] font-bold mb-2 uppercase tracking-widest">Investment Highlight</p>
                <p className="text-black font-medium leading-snug">Supporting accessible, at-home rapid pathogen detection to address critical gaps in tick exposure response.</p>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PressReleaseSection;
