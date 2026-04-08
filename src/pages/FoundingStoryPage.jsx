import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import FounderFeatureSection from '../sections/FounderFeatureSection.jsx'
import Footer from '../sections/Footer.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'

const FoundingStoryPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-white relative selection:bg-[var(--color-nuimpact-blue)] selection:text-white pt-24">
            <div className="relative z-10 w-full overflow-hidden">
                <div className="w-full px-2 sm:px-4 lg:px-6 pt-12 pb-2">
                    <button 
                        onClick={() => navigate('/our-story')}
                        className="flex items-center text-[var(--color-nuimpact-darker-blue)] hover:text-[var(--color-nuimpact-blue)] transition-colors font-semibold group text-base md:text-lg bg-transparent border-none"
                    >
                        <FiArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform text-lg md:text-xl" />
                        Back to Our Story
                    </button>
                </div>
                <ScrollReveal>
                    <FounderFeatureSection />
                </ScrollReveal>
                <Footer />
            </div>
        </div>
    )
}

export default FoundingStoryPage
