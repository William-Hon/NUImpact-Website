import React, { useState, useRef } from 'react';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';

const SummitHero = () => {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    return (
        <section className="bg-white pt-32 pb-24 px-8 flex flex-col items-center relative overflow-hidden">
            {/* Dynamic Background Elements - Multi-color Mesh Effect (Blue Dominant) */}
            <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[var(--color-nuimpact-blue)]/40 rounded-full blur-[160px] animate-pulse pointer-events-none" />
            <div className="absolute top-1/2 -left-1/4 w-[500px] h-[500px] bg-[var(--color-nuimpact-red)]/10 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute bottom-0 -right-1/4 w-[900px] h-[900px] bg-[var(--color-nuimpact-blue)]/35 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute -bottom-1/4 left-1/3 w-[500px] h-[500px] bg-[var(--color-nuimpact-yellow)]/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center w-full">
                {/* Minimalist Header */}
                <div className="text-center mb-8">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 mb-1">Take a look into</p>
                    <h1 className="text-9xl font-black text-black tracking-tighter">NUSIS</h1>
                </div>

                {/* Video Container */}
                <div className="w-full max-w-2xl aspect-video rounded-3xl overflow-hidden shadow-2xl relative group bg-gray-100 mb-12">
                    {/* Local Video */}
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted={isMuted}
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/assets/videos/nusis.mp4" type="video/mp4" />
                    </video>

                    {/* Mute Toggle */}
                    <button
                        onClick={toggleMute}
                        className="absolute top-4 right-4 z-20 p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-black/70 transition-all border border-white/20 active:scale-90"
                        title={isMuted ? "Unmute" : "Mute"}
                    >
                        {isMuted ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
                    </button>
                </div>

                <p className="text-xl font-medium text-gray-500 uppercase tracking-widest text-center">
                    Northeastern University Sustainable Investing Summit
                </p>
            </div>
        </section>
    );
};

export default SummitHero;
