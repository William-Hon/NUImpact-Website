import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../sections/Footer'
import ScrollReveal from '../components/ScrollReveal'

const NotFoundPage = () => (
    <div className="min-h-screen bg-white relative selection:bg-[var(--color-nuimpact-blue)] selection:text-white flex flex-col justify-between">
        {/* Universal Background Gradient */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] md:w-[60vw] md:h-[60vw] bg-[var(--color-nuimpact-light-blue)]/40 rounded-full blur-[100px] opacity-70" />
            <div className="absolute bottom-[10%] -right-[10%] w-[600px] h-[600px] md:w-[50vw] md:h-[50vw] bg-[var(--color-nuimpact-blue)]/40 rounded-full blur-[100px] opacity-70" />
        </div>

        <ScrollReveal>
            <div className="relative z-10 flex-grow flex flex-col items-center justify-center py-20 px-4 mt-32 text-center h-[70vh]">
                <h1 className="text-8xl md:text-9xl font-black text-[var(--color-nuimpact-dark-blue)] drop-shadow-sm mb-4">404</h1>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-nuimpact-blue)] mb-6">Page Not Found</h2>
                <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                    The page you are looking for doesn't exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="group relative px-8 py-4 text-sm font-bold tracking-widest uppercase text-white transition-all hover:text-white cursor-pointer inline-block bg-[var(--color-nuimpact-blue)]"
                >
                    <span className="absolute inset-0 border-2 border-[var(--color-nuimpact-blue)] transition-all duration-300 group-hover:bg-[#002f5a]"></span>
                    <span className="relative z-10">Return Home</span>
                </Link>
            </div>
        </ScrollReveal>
        <div className="relative z-10">
            <Footer />
        </div>
    </div>
)

export default NotFoundPage
